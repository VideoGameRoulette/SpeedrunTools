import { useState, useEffect, useCallback } from "react";
import Head from 'next/head';
import { ErrorPage, GameErrorPage } from "components/Errors";
import HealthBar from "components/HealthBar";
import { TextBlock, TextBlocksRowBetween } from "components/TextBlock";
import ContextMenu from "components/ContextMenu";
import { RE2RInventory } from "components/Inventory";

//LOCAL JSON SERVER SETTINGS
var JSON_ADDRESS = "127.0.0.1";
const JSON_PORT = 7190;
const POLLING_RATE = 333;
var JSON_ENDPOINT = `http://${JSON_ADDRESS}:${JSON_PORT}/`;

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

const isDebug = process.env.NODE_ENV != "production";

const RE2RJSON = () => {
    const [data, setData] = useState(null);
    const [connected, setConnected] = useState(false);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
    const [showDebug, SetShowDebug] = useState(false);
    const [bossOnly, SetBossOnly] = useState(true);
    const [damagedOnly, SetDamagedOnly] = useState(false);
    const [showRank, SetShowRank] = useState(true);
    const [showIGT, SetShowIGT] = useState(true);
    const [showID, SetShowID] = useState(false);
    const [showLocation, SetShowLocation] = useState(false);
    const [showInventory, SetShowInventory] = useState(false);
    const [showPosition, SetShowPosition] = useState(false);

    const handleContextMenu = (event) => {
        event.preventDefault();
        setShowContextMenu(true);
        setContextMenuPos({ x: event.pageX, y: event.pageY });
    };

    const handleCloseContextMenu = () => {
        setShowContextMenu(false);
    };

    const appendData = d => {
        if (d === null) return;
        setData(d);
        // if (process.env.NODE_ENV !== 'production') console.log("JSON Data: ", d);
    };

    const handleConnect = useCallback(() => {
        const getData = () => {
            fetch(JSON_ENDPOINT)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    setConnected(true);
                    appendData(data);
                })
                .catch(function (err) {
                    console.log("Error: " + err);
                    setConnected(false);
                });
        };
        if (!connected) getData();
        if (connected) setInterval(getData, POLLING_RATE);
    }, [connected]);

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

    if (!connected) return <ErrorPage background="bg-re2" connected={connected} callback={handleConnect} />;
    if (data.GameName !== "RE2R") return <GameErrorPage background="bg-re2" callback={handleConnect} />;

    const { Timer, RankManager, PlayerManager, Items, Enemies, InventoryCount, LocationID, LocationName, MapID, MapName, MainSlot, SubSlot, Shortcuts } = data;
    const { IsLoaded, CurrentSurvivor, CurrentSurvivorString, Health, CurrentHealthState, Position } = PlayerManager;
    const { GameRank, RankPoint } = RankManager;
    const { MeasureDemoSpendingTime, MeasurePauseSpendingTime } = Timer;

    const isBoss = [10, 11, 12, 13, 15, 16];
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

    const GetEnemyName = (id) => {
        if (id === 0) return "Zombie (M)";
        if (id === 1) return "Zombie (F)";
        if (id === 2) return "Fat Zombie";
        if (id === 3) return "Licker";
        if (id === 4) return "Zombie Dog";
        if (id === 6) return "G-Young";
        if (id === 7) return "Ivy";
        if (id === 8) return "G-Adult";
        if (id === 10) return "Mr. X";
        if (id === 11) return "Tyrant";
        if (id === 12) return "G";
        if (id === 13) return "G2";
        if (id === 15) return "G3";
        if (id === 16) return "G4";
        if (id === 18) return "Chief Irons";
        return "??";
    }

    return (
        <>
            <Head>
                <title>Stat Tracker | RE2R</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="absolute w-full h-full flex flex-col p-4 items-center" onContextMenu={handleContextMenu} onClick={() => handleCloseContextMenu()}>
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
                <TextBlocksRowBetween labels={["IsCutscene", "IsPaused"]} vals={[MeasureDemoSpendingTime.toString(), MeasurePauseSpendingTime.toString()]} colors={["text-white", "text-green-500"]} hideParam={!showDebug} />
                <TextBlock label="IGT" val={Timer.IGTFormattedString} colors={["text-white", "text-green-500"]} hideParam={!showIGT} />
                <TextBlocksRowBetween labels={["Location", "Map"]} vals={[`${LocationID} : ${LocationName}`, `${MapID} : ${MapName}`]} colors={["text-white", "text-green-500"]} hideParam={!showLocation} />
                {IsLoaded && (
                    <HealthBar debug={showID} id={CurrentSurvivor} current={Health.CurrentHP} max={Health.MaxHP} percent={Health.Percentage} label={CurrentSurvivorString} colors={GetColor(CurrentHealthState)} />
                )}
                <TextBlocksRowBetween labels={["X", "Y", "Z"]} vals={[Position.X.toFixed(3), Position.Y.toFixed(3), Position.Z.toFixed(3)]} colors={["text-white", "text-green-500"]} hideParam={!showPosition} />
                <TextBlocksRowBetween labels={["Rank", "RankScore"]} vals={[GameRank, RankPoint]} colors={["text-white", "text-green-500"]} hideParam={!showRank} />
                {IsLoaded && showInventory && (
                    <RE2RInventory items={sortedItems} inventoryCount={InventoryCount} mainSlot={MainSlot} subSlot={SubSlot} shortcuts={Shortcuts} />
                )}
                {filterdEnemies.map((enemy, idx) => (
                    <HealthBar debug={showID} key={`enemy${idx}`} id={enemy.EnemyID} current={enemy.CurrentHP} max={enemy.MaxHP} percent={enemy.Percentage} label={GetEnemyName(enemy.EnemyID)} colors={["bg-red-900", "text-red-300"]} />
                ))}
            </div>
        </>
    );
}

export default RE2RJSON;