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

const Tabs = ({ tabs, setTabs, counts }) => {
    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                    defaultValue={tabs.find((tab) => tab.current).name}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name}>{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8 p-4" aria-label="Tabs">
                        {tabs.map((tab, idx) => (
                            <button
                                type="button"
                                key={tab.name}
                                className={classNames(
                                    tab.current ? 'bg-indigo-100 text-indigo-700' : 'text-gray-500 hover:text-gray-700',
                                    'rounded-md px-3 py-2 text-sm font-medium'
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                                onClick={() => setTabs([
                                    { name: 'Case', current: tab.name === "Case" },
                                    { name: 'KeyItems', current: tab.name === "KeyItems" },
                                    { name: 'Treasure', current: tab.name === "Treasure" },
                                    { name: 'Unique', current: tab.name === "Unique" },
                                ])}
                            >
                                {tab.name}
                                <span
                                    className={classNames(
                                        tab.current ? 'bg-indigo-600 text-indigo-100' : 'bg-gray-100 text-gray-900',
                                        'ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block'
                                    )}
                                >
                                    {counts[idx]}
                                </span>

                            </button>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

const RE4RItems = () => {
    const [data, setData] = useState(null);
    const [connected, setConnected] = useState(false);
    const [tabs, setTabs] = useState([
        { name: 'Case', current: true },
        { name: 'KeyItems', current: false },
        { name: 'Treasure', current: false },
        { name: 'Unique', current: false },
    ]);

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

    const { Items, KeyItems, TreasureItems, UniqueItems, InventoryCount, KeyItemCount, TreasureItemsCount, UniqueCount, CaseSize } = data;
    const { Rows, Columns } = CaseSize;

    const sortedItems = Items?.sort(function (a, b) {
        return Asc(a.Row, b.Row) || Asc(a.Column, b.Column);
    });

    const sortedKeyItems = KeyItems?.sort(function (a, b) {
        return Asc(a.Row, b.Row) || Asc(a.Column, b.Column);
    });

    const sortedTreasureItems = TreasureItems?.sort(function (a, b) {
        return Asc(a.Row, b.Row) || Asc(a.Column, b.Column);
    });

    const sortedUniqueItems = UniqueItems?.sort(function (a, b) {
        return Asc(a.Row, b.Row) || Asc(a.Column, b.Column);
    });

    const getRowClass = (rows) => {
        switch (rows) {
            default:
                return "grid-rows-1 h-[64px]";
            case 2:
                return "grid-rows-2 h-[128px]";
            case 3:
                return "grid-rows-3 h-[192px]";
            case 4:
                return "grid-rows-3 h-[256px]";
            case 7:
                return "grid-rows-7 h-[448px]";
            case 8:
                return "grid-rows-8 h-[512px]";
            case 9:
                return "grid-rows-9 h-[576px]";
        }
    }

    const getColumnClass = (columns) => {
        switch (columns) {
            default:
                return "grid-cols-8 w-[512px]";
            case 9:
                return "grid-cols-9 w-[576px]";
            case 10:
                return "grid-cols-10 w-[640px]";
            case 11:
                return "grid-cols-11 w-[704px]";
            case 12:
                return "grid-cols-12 w-[768px]";
            case 13:
                return "grid-cols-13 w-[832px]";
            case 14:
                return "grid-cols-14 w-[896px]";
        }
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
                return "bg-re4rhandgunammo bg-no-repeat";
            case 112803200:
                return "bg-re4rshotgunammo bg-no-repeat";
            case 112806400:
                return "bg-re4rsubmachinegunammo bg-no-repeat";
            case 112804800:
                return "bg-re4rrifleammo bg-no-repeat";
            case 114400000:
                return "bg-re4rgreenherb bg-no-repeat";
            case 114401600:
                return "bg-re4rredherb bg-no-repeat";
            case 114403200:
                return "bg-re4ryellowherb bg-no-repeat";
            case 114404800:
                return "bg-re4rmixedherbsgg bg-no-repeat";
            case 114408000:
                return "bg-re4rmixedherbsgr bg-no-repeat";
            case 114406400:
                return "bg-re4rmixedherbsggg bg-no-repeat";
            case 114411200:
                return "bg-re4rmixedherbsry bg-no-repeat";
            case 114409600:
                return "bg-re4rmixedherbsgy bg-no-repeat";
            case 114412800:
                return "bg-re4rmixedherbsgry bg-no-repeat";
            case 276438656:
                return "bg-re4rkitchenknife bg-no-repeat";
            case 117606400:
                return "bg-re4rresourcess bg-no-repeat";
            case 117601600:
                return "bg-re4rresourcesl bg-no-repeat";
            case 117600000:
                return "bg-re4rgunpowder bg-no-repeat";
            case 277080256:
                return "bg-re4rchickenegg bg-no-repeat";
            case 277081856:
                return "bg-re4rbrownchickenegg bg-no-repeat";
            case 276275456:
                return "bg-re4rrocketlauncher bg-no-repeat";
            case 274835456:
                return "bg-re4rsg09r bg-no-repeat";
            case 275155456:
                return "bg-re4rtmp bg-no-repeat";
            case 278035456:
                return "bg-re4rsentinelnine bg-no-repeat";
            case 275795456:
                return "bg-re4rboltthrower bg-no-repeat";
            case 278037056:
                return "bg-re4rskullshaker bg-no-repeat";
            case 274995456:
                return "bg-re4rw870 bg-no-repeat";
            case 276435456:
                return "bg-re4rcombatknife bg-no-repeat";
            case 277078656:
                return "bg-re4rflashgrenade bg-no-repeat";
            case 277075456:
                return "bg-re4rhandgrenade bg-no-repeat";
            case 274838656:
                return "bg-re4rred9 bg-no-repeat";
            case 117603200:
                return "bg-re4rattachablemines bg-no-repeat";
            case 274997056:
                return "bg-re4rriotgun bg-no-repeat";
            case 112808000:
                return "bg-re4rbolts bg-no-repeat";
            case 274840256:
                return "bg-re4rblacktail bg-no-repeat";
            case 275635456:
                return "bg-re4rbrokenbutterfly bg-no-repeat";
            case 275477056:
                return "bg-re4rstingray bg-no-repeat";
            case 276440256:
                return "bg-re4rbootknife bg-no-repeat";
            case 112801600:
                return "bg-re4rmagnumammo bg-no-repeat";
            case 116000000:
                return "bg-re4rscope bg-no-repeat";
            case 275475456:
                return "bg-re4rsrm1903 bg-no-repeat";
            case 277077056:
                return "bg-re4rheavygrenade bg-no-repeat";
            case 275478656:
                return "bg-re4rcqbrassaultrifle bg-no-repeat";
            case 274998656:
                return "bg-re4rstriker bg-no-repeat";
            case 114416000:
                return "bg-re4rfirstaidspray bg-no-repeat";
            case 114417600:
                return "bg-re4rblackbass bg-no-repeat";
            case 119276800:
                return "bg-re4rcubicdevice bg-no-repeat";
            case 119286400:
                return "bg-re4rsilvertoken bg-no-repeat";
            case 119288000:
                return "bg-re4rgoldtoken bg-no-repeat";
            case 119281600:
                return "bg-re4rhunterslodgekey bg-no-repeat";
            case 119204800:
                return "bg-re4rinsigniakey bg-no-repeat";
            case 119254400:
                return "bg-re4rdungeonkey bg-no-repeat";
            case 119251200:
                return "bg-re4rhexagonpiecec bg-no-repeat";
            case 119256000:
                return "bg-re4roldwayshrinekey bg-no-repeat";
        }
    }

    const getItemBase = (item) => {
        if (item.ItemId === 0) return;
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
            <Tabs tabs={tabs} setTabs={setTabs} counts={[InventoryCount, KeyItemCount, TreasureItemsCount, UniqueCount]} />
            <div className="absolute w-full h-full flex p-4 gap-2">
                {tabs[0].current && (
                    <>
                        <div className="w-auto h-full">
                            <div className={classNames(getRowClass(Rows), getColumnClass(Columns), "grid bg-re4rslots")}>
                                {Items != null && Items.map(item => (
                                    getItemBase(item)
                                ))}
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-col">
                            {sortedItems?.map(item => (
                                <div key={item.ItemId} className="text-white">{item._DebuggerDisplay}</div>
                            ))}
                        </div>
                    </>
                )}
                {tabs[1].current && (
                    <>
                        <div className="w-auto h-full">
                            <div className={classNames(getRowClass(1), getColumnClass(8), "grid bg-re4rslots")}>
                                {KeyItems != null && KeyItems.map(item => (
                                    getItemBase(item)
                                ))}
                            </div>
                        </div>
                        <div className="w-full h-full flex flex-col">
                            {sortedKeyItems?.map(item => (
                                <div key={item.ItemId} className="text-white">{item._DebuggerDisplay}</div>
                            ))}
                        </div>
                    </>
                )}
                {tabs[2].current && (
                    <>
                        <div className="w-auto h-full">
                            <div className={classNames(getRowClass(3), getColumnClass(8), "grid bg-re4rslots")} />
                        </div>
                        <div className="w-full h-full flex flex-col">
                            {sortedTreasureItems?.map(item => (
                                <div key={item.ItemId} className="text-white">{item._DebuggerDisplay}</div>
                            ))}
                        </div>
                    </>
                )}
                {tabs[3].current && (
                    <>
                        <div className="w-auto h-full">
                            <div className={classNames(getRowClass(4), getColumnClass(8), "grid bg-re4rslots")} />
                        </div>
                        <div className="w-full h-full flex flex-col">
                            {sortedUniqueItems?.map(item => (
                                <div key={item.ItemId} className="text-white">{item._DebuggerDisplay}</div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default RE4RItems;