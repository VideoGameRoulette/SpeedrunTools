import { useState, useEffect, useCallback } from "react";
import Head from 'next/head';
import { GameErrorPage } from "components/Errors";
import { classNames } from "utils";
// import { RE3RInventory } from "components/Inventory";

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

const RE4RItems = () => {
    const [data, setData] = useState(null);
    const [connected, setConnected] = useState(false);

    const appendData = d => {
        if (d === null) return;
        setData(d);
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
        setInterval(getData, POLLING_RATE);
    }, []);

    useEffect(() => {
        handleConnect();
    }, [handleConnect]);

    if (!connected) return <></>;
    if (data.GameName !== "RE4R") return <GameErrorPage background="bg-re" callback={handleConnect} />;

    const { Items, InventoryCount, CaseSize } = data;
    const { Rows, Columns } = CaseSize;

    const sortedItems = Items.sort(function (a, b) {
        return Asc(a.Row, b.Row) || Asc(a.Column, b.Column);
    });

    const getRowClass = () => {
        switch (Rows) {
            default:
                return "grid-rows-7 h-[448px]";
            case 8:
                return "grid-rows-8 h-[512px]";
            case 9:
                return "grid-rows-9 h-[576px]";
        }
    }

    const getColumClass = () => {
        switch (Columns) {
            default:
                return "grid-cols-11 w-[704px]";
            case 12:
                return "grid-cols-12 w-[768px]";
            case 13:
                return "grid-cols-13 w-[832px]";
            case 14:
                return "grid-cols-14 w-[896px]";
        }
    }

    const drawRows = () => {
        var r = [];
        var current = [];
        for (var i = 0; i < Rows; i++) {
            for (var j = 0; j < Columns; j++)
                current[j] = 0;
            r[i] = current;
        }

        console.log("slots: ", r);
        return r;
    }

    const getRowStart = (item) => {
        switch (item.Row) {
            default:
                return "row-start-1";
            case 1:
                return "row-start-2";
            case 2:
                return "row-start-3";
            case 3:
                return "row-start-4";
            case 4:
                return "row-start-5";
            case 5:
                return "row-start-6";
            case 6:
                return "row-start-7";
            case 7:
                return "row-start-8";
            case 8:
                return "row-start-9";
            case 9:
                return "row-start-10";
            case 10:
                return "row-start-11";
            case 11:
                return "row-start-12";
            case 12:
                return "row-start-13";
            case 13:
                return "row-start-14";
        }
    }

    const getColumnStart = (item) => {
        switch (item.Column) {
            default:
                return "col-start-1";
            case 1:
                return "col-start-2";
            case 2:
                return "col-start-3";
            case 3:
                return "col-start-4";
            case 4:
                return "col-start-5";
            case 5:
                return "col-start-6";
            case 6:
                return "col-start-7";
            case 7:
                return "col-start-8";
            case 8:
                return "col-start-9";
            case 9:
                return "col-start-10";
            case 10:
                return "col-start-11";
            case 11:
                return "col-start-12";
            case 12:
                return "col-start-13";
            case 13:
                return "col-start-14";
        }
    }

    const getItemImage = (item) => {
        switch (item.ItemId) {
            default:
                return "";
            case 112800000:
                return "bg-re4rhandgunammo";
            case 112803200:
                return "bg-re4rshotgunammo";
            case 112806400:
                return "bg-re4rsubmachinegunammo";
            case 112804800:
                return "bg-re4rrifleammo";
            case 114400000:
                return "bg-re4rgreenherb";
            case 114401600:
                return "bg-re4rredherb";
            case 114403200:
                return "bg-re4ryellowherb";
            case 114404800:
                return "bg-re4rmixedherbsgg"
            case 114408000:
                return "bg-re4rmixedherbsgr";
            case 114412800:
                return "bg-re4rmixedherbsgry";
            case 276438656:
                return "bg-re4rkitchenknife";
            case 117606400:
                return "bg-re4rresourcess";
            case 117601600:
                return "bg-re4rresourcesl";
            case 117600000:
                return "bg-re4rgunpowder";
            case 277080256:
                return "bg-re4rchickenegg";
            case 277081856:
                return "bg-re4rbrownchickenegg";
            case 276275456:
                return "bg-re4rrocketlauncher";
            case 274835456:
                return "bg-re4rsg09r";
            case 275155456:
                return "bg-re4rtmp";
            case 278035456:
                return "bg-re4rsentinelnine";
            case 275795456:
                return "bg-re4rboltthrower";
            case 278037056:
                return "bg-re4rskullshaker";
            case 274995456:
                return "bg-re4rw870";
            case 276435456:
                return "bg-re4rcombatknife";
            case 277078656:
                return "bg-re4rflashgrenade";
            case 277075456:
                return "bg-re4rhandgrenade";
            case 274838656:
                return "bg-re4rred9";

        }
    }

    const getItemBase = (item) => {
        switch (item.ItemSize) {
            case 0: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), "row-span-1 col-span-1 bg-black border")} />
            case 1: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-2 col-span-1" : "row-span-1 col-span-2", "bg-black border")} />
            case 2: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-3 col-span-1" : "row-span-1 col-span-3", "bg-black border")} />
            case 3: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-4 col-span-1" : "row-span-1 col-span-4", "bg-black border")} />
            case 4: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-5 col-span-1" : "row-span-1 col-span-5", "bg-black border")} />
            case 5: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-9 col-span-1" : "row-span-1 col-span-9", "bg-black border")} />
            case 6: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-1 col-span-2" : "row-span-2 col-span-1", "bg-black border")} />
            case 7: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-2 col-span-2" : "row-span-2 col-span-2", "bg-black border")} />
            case 8: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-3 col-span-2" : "row-span-2 col-span-3", "bg-black border")} />
            case 9: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-4 col-span-2" : "row-span-2 col-span-4", "bg-black border")} />
            case 10: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-5 col-span-2" : "row-span-2 col-span-5", "bg-black border")} />
            case 11: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-6 col-span-2" : "row-span-2 col-span-6", "bg-black border")} />
            case 12: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-7 col-span-2" : "row-span-2 col-span-7", "bg-black border")} />
            case 13: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-8 col-span-2" : "row-span-2 col-span-8", "bg-black border")} />
            case 14: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-1 col-span-3" : "row-span-3 col-span-1", "bg-black border")} />
            case 15: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-5 col-span-3" : "row-span-3 col-span-5", "bg-black border")} />
            case 16: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-7 col-span-3" : "row-span-3 col-span-7", "bg-black border")} />
            case 17: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-1 col-span-4" : "row-span-4 col-span-1", "bg-black border")} />
            case 18: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-2 col-span-4" : "row-span-4 col-span-2", "bg-black border")} />
            case 19: return <div className={classNames(getItemImage(item), getRowStart(item), getColumnStart(item), item.IsRotated ? "row-span-2 col-span-6" : "row-span-6 col-span-2", "bg-black border")} />
        }
    }

    return (
        <>
            <Head>
                <title>Inventory Tracker | RE4R</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="absolute w-full h-full flex p-4 gap-2">
                <div className="w-auto h-full">
                    <div className={classNames(getRowClass(), getColumClass(), "grid bg-re4rslots")}>
                        {/* {drawRows().map(row => (
                        row.map(r => (
                            <div className="bg-zinc-600 border"></div>
                            ))
                        ))} */}
                        {Items.map(item => (
                            getItemBase(item)
                        ))}
                    </div>
                </div>
                <div className="w-full h-full flex flex-col">
                    <div className="text-white">Item Count: {InventoryCount}</div>
                    {sortedItems.map(item => (
                        <div key={item.ItemId} className="text-white">{item._DebuggerDisplay}</div>
                    ))}
                </div>

            </div>
        </>
    );
}

export default RE4RItems;