import React, { useState, useEffect, useCallback } from "react";
import Head from 'next/head';
import { ErrorPage, GameErrorPage } from "components/Errors";
import HealthBar from "components/HealthBar";
import { TextBlock, TextBlocksRowBetween } from "components/TextBlock";
import ContextMenu from "components/ContextMenu";
import { RE2RInventory } from "components/Inventory";

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

const RE2RWS = () => {
    const [data, setData] = useState(null);
    const [connected, setConnected] = useState(false);
    const [input, setInput] = useState(null);
    const [token, setToken] = useState(null);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
    const [showDebug, SetShowDebug] = useState(false);
    const [bossOnly, SetBossOnly] = useState(false);
    const [damagedOnly, SetDamagedOnly] = useState(false);
    const [showRank, SetShowRank] = useState(true);
    const [showIGT, SetShowIGT] = useState(true);
    const [showID, SetShowID] = useState(false);
    const [showLocation, SetShowLocation] = useState(true);
    const [showInventory, SetShowInventory] = useState(true);
    const [showPosition, SetShowPosition] = useState(true);

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

    const GetColor = (state) => {
        if (state === "Gassed") return ["bg-rose-900", "text-rose-300"];
        if (state === "Poisoned") return ["bg-indigo-900", "text-indigo-300"];
        if (state === "Fine") return ["bg-green-800", "text-green-300"];
        if (state === "FineToo") return ["bg-green-900", "text-green-300"];
        if (state === "Caution") return ["bg-yellow-800", "text-yellow-300"];
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
    if (!connected || data === null) return <ErrorPage background="bg-re2" connected={connected} callback={handleConnect} />;
    if (connected || data === null) return <ErrorPage background="bg-re2" connected={connected} callback={handleConnect} />;
    if (data.GameName !== "RE2R") return <GameErrorPage background="bg-re2" callback={handleConnect} />;

    const { Timer, RankManager, PlayerManager, Items, Enemies, InventoryCount, LocationID, LocationName, MapID, MapName, MainSlot, SubSlot, Shortcuts } = data;
    const { CurrentSurvivor, CurrentSurvivorString, Health, CurrentHealthState, Position } = PlayerManager;
    const { GameRank, RankPoint } = RankManager;
    const { MeasureDemoSpendingTime, MeasurePauseSpendingTime } = Timer;

    const isBoss = [10, 11, 12, 13, 15, 16, 17];
    const notEnemy = [18];

    const IsDamaged = (enemy) => enemy.IsAlive && enemy.CurrentHP < enemy.MaxHP;
    const IsBossOnly = (enemy) => enemy.IsAlive && isBoss.includes(enemy.EnemyID);
    const IgnoreEnemy = (enemy) => !notEnemy.includes(enemy.EnemyID);

    const filterConditions = (enemy) => {
        if (damagedOnly && bossOnly)
            return IsBossOnly(enemy) && IsDamaged(enemy) && IgnoreEnemy(enemy);
        if (bossOnly)
            return IsBossOnly(enemy) && IgnoreEnemy(enemy);
        if (damagedOnly)
            return IsDamaged(enemy) && IgnoreEnemy(enemy);
        return enemy.IsAlive && IgnoreEnemy(enemy);
    }

    const filterdEnemies = Enemies.filter(m => { return filterConditions(m) }).sort(function (a, b) {
        return Asc(a.CurrentHP, b.CurrentHP) || Desc(a.CurrentHP, b.CurrentHP);
    });

    const sortedItems = Items.sort(function (a, b) {
        return Asc(a.SlotNo, b.SlotNo) || Desc(a.SlotNo, b.SlotNo);
    });

    return (
        <>
            <Head>
                <title>Stat Tracker | RE2R</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="absolute w-full h-full flex flex-col p-4 gap-2" onContextMenu={handleContextMenu} onClick={() => handleCloseContextMenu()}>
                {showContextMenu && (
                    <ContextMenu
                        x={contextMenuPos.x}
                        y={contextMenuPos.y}
                        onClose={handleCloseContextMenu}
                        bossOnly={bossOnly}
                        SetBossOnly={SetBossOnly}
                        showRank={showRank}
                        SetShowRank={SetShowRank}
                        showIGT={showIGT}
                        SetShowIGT={SetShowIGT}
                        damagedOnly={damagedOnly}
                        SetDamagedOnly={SetDamagedOnly}
                        showID={showID}
                        SetShowID={SetShowID}
                        showLocation={showLocation}
                        SetShowLocation={SetShowLocation}
                        showInventory={showInventory}
                        SetShowInventory={SetShowInventory}
                        showPosition={showPosition}
                        SetShowPosition={SetShowPosition}
                        showRotation={null}
                        SetShowRotation={null}
                        showDebug={showDebug}
                        SetShowDebug={SetShowDebug}
                    />
                )}
                <TextBlocksRowBetween labels={["IsCutscene", "IsPaused"]} vals={[MeasureDemoSpendingTime.toString(), MeasurePauseSpendingTime.toString()]} colors={["text-white", "text-green-500"]} hideParam={!isDebug} />
                <TextBlock label="IGT" val={Timer.IGTFormattedString} colors={["text-white", "text-green-500"]} hideParam={!showIGT} />
                <TextBlocksRowBetween labels={["Location", "Map"]} vals={[`${LocationID} : ${LocationName}`, `${MapID} : ${MapName}`]} colors={["text-white", "text-green-500"]} hideParam={!showLocation} />
                <HealthBar debug={showID} id={CurrentSurvivor} current={Health.CurrentHP} max={Health.MaxHP} percent={Health.Percentage} label={CurrentSurvivorString} colors={GetColor(CurrentHealthState)} />
                <TextBlocksRowBetween labels={["X", "Y", "Z"]} vals={[Position.X.toFixed(3), Position.Y.toFixed(3), Position.Z.toFixed(3)]} colors={["text-white", "text-green-500"]} hideParam={!showPosition} />
                <TextBlocksRowBetween labels={["Rank", "RankScore"]} vals={[GameRank, RankPoint]} colors={["text-white", "text-green-500"]} hideParam={!showRank} />
                {showInventory && (
                    <RE2RInventory items={sortedItems} inventoryCount={InventoryCount} mainSlot={MainSlot} subSlot={SubSlot} shortcuts={Shortcuts} />
                )}
                {filterdEnemies.map((enemy, idx) => (
                    <HealthBar debug={showID} key={`enemy${idx}`} id={enemy.EnemyID} current={enemy.CurrentHP} max={enemy.MaxHP} percent={enemy.Percentage} label={GetEnemyName(enemy.EnemyID)} colors={["bg-red-900", "text-red-300"]} />
                ))}
            </div>
        </>
    );
}

export default RE2RWS;