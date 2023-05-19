import { useState, useEffect, useCallback } from "react";
import Head from 'next/head';
import { GameErrorPage } from "components/Errors";
import HealthBar from "components/HealthBar";
import { TextBlock, TextBlocksRowBetween } from "components/TextBlock";
import ContextMenu from "components/ContextMenu";
import { saveUserSettings, loadUserSettings } from 'utils';

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

const RE4RJSON = () => {
    const [data, setData] = useState(null);
    const [showContextMenu, setShowContextMenu] = useState(false);
    const [contextMenuPos, setContextMenuPos] = useState({ x: 0, y: 0 });
    const [bossOnly, SetBossOnly] = useState(false);
    const [damagedOnly, SetDamagedOnly] = useState(true);
    const [showRank, SetShowRank] = useState(true);
    const [showIGT, SetShowIGT] = useState(true);
    const [showID, SetShowID] = useState(false);
    // const [showLocation, SetShowLocation] = useState(true);
    // const [showInventory, SetShowInventory] = useState(true);
    const [showPosition, SetShowPosition] = useState(false);
    const [showRotation, SetShowRotation] = useState(false);
    const [showKillCount, SetKillCount] = useState(false);
    const [isLoaded, SetIsLoaded] = useState(0);

    const initSettings = () => {
        const loadedSettings = loadUserSettings("RE4R");
        // console.log("Loaded Settings: ", loadedSettings);
        if (loadedSettings) {
            SetBossOnly(loadedSettings.bossOnly);
            SetDamagedOnly(loadedSettings.damagedOnly);
            SetShowRank(loadedSettings.showRank);
            SetShowIGT(loadedSettings.showIGT);
            SetShowID(loadedSettings.showID);
            SetShowPosition(loadedSettings.showPosition);
            SetShowRotation(loadedSettings.showRotation);
            SetKillCount(loadedSettings.showKillCount);
            SetIsLoaded(true);
            return;
        }
        // if local storage is null create new instance
        const newSettings = {
            bossOnly,
            damagedOnly,
            showRank,
            showIGT,
            showID,
            showPosition,
            showRotation,
            showKillCount,
        }
        saveUserSettings("RE4R", newSettings);
        SetIsLoaded(true);
    };

    useEffect(() => {
        if (localStorage !== undefined && !isLoaded) {
            initSettings();
            handleConnect();
        }
    });

    useEffect(() => {
        if (!isLoaded) return;
        const newSettings = {
            bossOnly,
            damagedOnly,
            showRank,
            showIGT,
            showID,
            showPosition,
            showRotation,
            showKillCount,
        }
        saveUserSettings("RE4R", newSettings);
    }, [isLoaded, bossOnly, damagedOnly, showRank, showIGT, showID, showPosition, showRotation, showKillCount]);

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

    const handleConnect = () => {
        const getData = () => {
            fetch(JSON_ENDPOINT)
                .then(function (response) {
                    return response.json();
                })
                .then(function (data) {
                    appendData(data);
                })
                .catch(function (err) {
                    console.log("Error: " + err);
                });
        };
        setInterval(getData, POLLING_RATE);
    };

    function GetColor(state) {
        if (state === "Fine") return ["bg-green-800", "text-green-300"];
        if (state === "FineToo") return ["bg-green-900", "text-green-300"];
        if (state === "Caution") return ["bg-yellow-800", "text-yellow-300"];
        return ["bg-red-900", "text-red-300"];
    }

    if (data === null) return <></>;
    if (data !== null && data.GameName !== "RE4R") return <GameErrorPage background="bg-re4" callback={handleConnect} />;

    const { PlayerContext, PartnerContext, Rank, GameStatsKillCountElement, Enemies, Timer } = data;
    const { SurvivorTypeString, Position, Rotation, Health, CurrentHealthState } = PlayerContext;
    const { CurrentHP, MaxHP, Percentage } = Health
    const { Rank: _Rank, ActionPoint, ItemPoint } = Rank;
    const { Count } = GameStatsKillCountElement;
    const { IGTFormattedString } = Timer;

    const isBoss = [200003, 200006, 200007, 200008, 200011, 200013, 200015, 200017, 200018, 200020, 200021, 200023, 200024, 200025, 200026, 200027, 200028, 200029];
    const notEnemy = [81104, 81105, 81107];

    const IsDamaged = (enemy) => enemy.Health.IsAlive && enemy.Health.CurrentHP < enemy.Health.MaxHP;
    const IsBossOnly = (enemy) => enemy.Health.IsAlive && isBoss.includes(enemy.KindID);
    const IgnoreEnemy = (enemy) => !notEnemy.includes(enemy.KindID);

    const filterConditions = (enemy) => {
        if (damagedOnly && bossOnly)
            return IsBossOnly(enemy) && IsDamaged(enemy) && IgnoreEnemy(enemy);
        if (bossOnly)
            return IsBossOnly(enemy) && IgnoreEnemy(enemy);
        if (damagedOnly)
            return IsDamaged(enemy) && IgnoreEnemy(enemy);
        return enemy.Health.IsAlive && IgnoreEnemy(enemy);
    }

    const filterdEnemies = Enemies.filter(m => { return (filterConditions(m)) }).sort(function (a, b) {
        return Asc(a.Health.CurrentHP, b.Health.CurrentHP) || Desc(a.Health.CurrentHP, b.Health.CurrentHP);
    });

    return (
        <>
            <Head>
                <title>Stat Tracker | RE4R</title>
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
                        showKillCount={showKillCount}
                        SetKillCount={SetKillCount}
                    />
                )}
                <TextBlock label="IGT" val={IGTFormattedString} colors={["text-white", "text-green-500"]} hideParam={!showIGT} />
                <HealthBar current={CurrentHP} max={MaxHP} percent={Percentage} label={SurvivorTypeString} colors={GetColor(CurrentHealthState)} />
                {PartnerContext.length > 0 && (
                    PartnerContext.map(partner => (
                        partner != null && (
                            <HealthBar key={partner.SurvivorTypeString} current={partner.Health.CurrentHP} max={partner.Health.MaxHP} percent={partner.Health.Percentage} label={partner.SurvivorTypeString.replace(/_/g, "")} colors={GetColor(partner.CurrentHealthState)} />
                        )
                    ))
                )}
                <TextBlocksRowBetween labels={["X", "Y", "Z"]} vals={[Position.X.toFixed(3), Position.Y.toFixed(3), Position.Z.toFixed(3)]} colors={["text-white", "text-green-500"]} hideParam={!showPosition} />
                <TextBlocksRowBetween labels={["RX", "RY"]} vals={[Rotation.W.toFixed(3), Rotation.Y.toFixed(3)]} colors={["text-white", "text-green-500"]} hideParam={!showRotation} />
                <TextBlocksRowBetween labels={["Rank", "ActionPoint", "ItemPoint"]} vals={[_Rank, ActionPoint, ItemPoint]} colors={["text-white", "text-green-500"]} hideParam={!showRank} />
                <TextBlock label="Kills" val={Count} colors={["text-white", "text-green-500"]} hideParam={!showKillCount} />
                {filterdEnemies.map((enemy, idx) => (
                    <HealthBar debug={showID} id={enemy.KindID} key={`enemy${idx}`} current={enemy.Health.CurrentHP} max={enemy.Health.MaxHP} percent={enemy.Health.Percentage} label={enemy.SurvivorTypeString.replace(/_/g, " ")} colors={["bg-red-900", "text-red-500"]} />
                ))}
            </div>
        </>
    );
}

export default RE4RJSON;