import { useState, useEffect, useCallback } from "react";
import Head from 'next/head';
import { ErrorPage, GameErrorPage } from "components/Errors";
import HealthBar from "components/HealthBar";
import { TextBlock, TextBlocksRowBetween } from "components/TextBlock";
import ContextMenu from "components/ContextMenu";

const websocket_endpoint = "wss://relay.aricodes.net/ws"; // 'ws://localhost:19906';

const Asc = (a, b) => {
    if (a > b) return +1;
    if (a < b) return -1;
    return 0;
};

const Desc = (a, b) => {
    if (a > b) return -1;
    if (a < b) return +1;
    return 0;
};

const RE4RWS = () => {
    const [data, setData] = useState(null);
    const [connected, setConnected] = useState(false);
    const [input, setInput] = useState(null);
    const [token, setToken] = useState(null);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
    // const [bossOnly, SetBossOnly] = useState(false);
    const [damagedOnly, SetDamagedOnly] = useState(false);
    const [showRank, SetShowRank] = useState(true);
    const [showIGT, SetShowIGT] = useState(true);
    // const [showID, SetShowID] = useState(false);
    // const [showLocation, SetShowLocation] = useState(true);
    // const [showInventory, SetShowInventory] = useState(true);
    const [showPosition, SetShowPosition] = useState(true);
    const [showRotation, SetShowRotation] = useState(true);

    const handleContextMenu = (event) => {
        event.preventDefault();
        setShowContextMenu(true);
        setContextMenuPos({ x: event.pageX, y: event.pageY });
    };

    const handleCloseContextMenu = () => {
        setShowContextMenu(false);
    };

    const handleConnect = useCallback(() => {
        const appendData = d => {
            if (d === null) return;
            setData(d);
            if (process.env.NODE_ENV !== 'production') console.log("Websocket Data: ", d);
        };

        const socket = new WebSocket(websocket_endpoint);
        socket.onopen = () => {
            socket.send(`listen:${token}`);
            setConnected(true);
        };
        socket.onclose = () => {
            setConnected(false);
        };
        socket.onmessage = event => appendData(JSON.parse(event.data));
    }, [token, setConnected, setData]);

    useEffect(() => {
        handleConnect();
    }, [handleConnect]);

    function GetColor(state) {
        if (state == "Gassed") return ["bg-rose-900", "text-rose-300"];
        if (state == "Poisoned") return ["bg-indigo-900", "text-indigo-300"];
        if (state == "Fine") return ["bg-green-800", "text-green-300"];
        if (state == "FineToo") return ["bg-green-900", "text-green-300"];
        if (state == "Caution") return ["bg-yellow-800", "text-yellow-300"];
        return ["bg-red-900", "text-red-300"];
    }

    if (token === null) return (
        <div className="absolute w-full h-full flex flex-col justify-center items-center p-4">
            <div className="bg-slate-900 w-full max-w-xl flex flex-col justify-center items-start p-8 gap-2">
                <div className="text-gray-200">Please Enter token:</div>
                <input className="w-full leading-8 pl-2" type="text" onChange={(e) => setInput(e.target.value)} />
                <button className="w-full h-8 bg-green-800 hover:bg-green-600 text-gray-200 rounded-md" type="button" onClick={() => setToken(input)}>Submit</button>
            </div>
        </div>
    );
    if (!connected) return <ErrorPage background="bg-re" connected={connected} callback={handleConnect} />;
    if (data.GameName !== "RE4R") return <GameErrorPage background="bg-re" callback={handleConnect} />;

    const { PlayerContext, Rank, GameStatsKillCountElement, EnemyHealth, Timer } = data;
    const { SurvivorTypeString, Position, Rotation, Health, CurrentHealthState } = PlayerContext;
    const { CurrentHP, MaxHP, Percentage } = Health
    const { Rank: _Rank, ActionPoint, ItemPoint } = Rank;
    const { Count } = GameStatsKillCountElement;
    const { IGTFormattedString } = Timer;

    // const isBoss = [];
    const notEnemy = [];

    const IsDamaged = (enemy) => enemy.IsAlive && enemy.CurrentHP < enemy.MaxHP;
    // const IsBossOnly = (enemy) => enemy.IsAlive && isBoss.includes(enemy.EnemyID);
    const IgnoreEnemy = (enemy) => !notEnemy.includes(enemy.EnemyID);

    const filterConditions = (enemy) => {
        // if (damagedOnly && bossOnly)
        //     return IsBossOnly(enemy) && IsDamaged(enemy) && IgnoreEnemy(enemy);
        // if (bossOnly)
        //     return IsBossOnly(enemy) && IgnoreEnemy(enemy);
        if (damagedOnly)
            return IsDamaged(enemy) && IgnoreEnemy(enemy);
        return enemy.IsAlive && IgnoreEnemy(enemy);
    }

    const filterdEnemies = EnemyHealth.filter(m => { return (filterConditions(m)) }).sort(function (a, b) {
        return Asc(a.CurrentHP, b.CurrentHP) || Desc(a.CurrentHP, b.CurrentHP);
    });

    return (
        <>
            <Head>
                <title>Stat Tracker | RE4R</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="absolute w-full h-full flex" onContextMenu={handleContextMenu} onClick={() => handleCloseContextMenu()} >
                {showContextMenu && (
                    <ContextMenu
                        x={contextMenuPos.x}
                        y={contextMenuPos.y}
                        onClose={handleCloseContextMenu}
                        bossOnly={null}
                        SetBossOnly={null}
                        showRank={showRank}
                        SetShowRank={SetShowRank}
                        showIGT={showIGT}
                        SetShowIGT={SetShowIGT}
                        damagedOnly={damagedOnly}
                        SetDamagedOnly={SetDamagedOnly}
                        showID={null}
                        SetShowID={null}
                        showLocation={null}
                        SetShowLocation={null}
                        showInventory={null}
                        SetShowInventory={null}
                        showPosition={showPosition}
                        SetShowPosition={SetShowPosition}
                        showRotation={showRotation}
                        SetShowRotation={SetShowRotation}
                        showDebug={null}
                        SetShowDebug={null}
                    />
                )}
                <TextBlock label="IGT" val={IGTFormattedString} colors={["text-white", "text-green-500"]} hideParam={!showIGT} />
                <HealthBar current={CurrentHP} max={MaxHP} percent={Percentage} label={SurvivorTypeString} colors={GetColor(CurrentHealthState)} />
                <TextBlocksRowBetween labels={["X", "Y", "Z"]} vals={[Position.X.toFixed(3), Position.Y.toFixed(3), Position.Z.toFixed(3)]} colors={["text-white", "text-green-500"]} hideParam={!showPosition} />
                <TextBlocksRowBetween labels={["RW", "RX", "RY", "RZ"]} vals={[Rotation.W.toFixed(3), Rotation.X.toFixed(3), Rotation.Y.toFixed(3), Rotation.Z.toFixed(3)]} colors={["text-white", "text-green-500"]} hideParam={!showRotation} />
                <TextBlocksRowBetween labels={["Rank", "ActionPoint", "ItemPoint"]} vals={[_Rank, ActionPoint, ItemPoint]} colors={["text-white", "text-green-500"]} hideParam={!showRank} />
                <TextBlock label="Kills" val={Count} colors={["text-white", "text-green-500"]} hideParam={false} />
                {filterdEnemies.map((enemy, idx) => (
                    <HealthBar debug={false} id={0} key={`enemy${idx}`} current={enemy.CurrentHP} max={enemy.MaxHP} percent={enemy.Percentage} label="" colors={["bg-red-900", "text-red-500"]} />
                ))}
            </div>
        </>
    );
}

export default RE4RWS;