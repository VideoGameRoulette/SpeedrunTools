import React from 'react';

const ContextMenu = ({ x, y, onClose, ...props }) => {
    const handleBossClick = () => {
        // Handle click on context menu item
        onClose();
        props.SetBossOnly(prev => !prev);
    };

    const handleDamageClick = () => {
        // Handle click on context menu item
        onClose();
        props.SetDamagedOnly(prev => !prev);
    };

    const handleRankClick = () => {
        // Handle click on context menu item
        onClose();
        props.SetShowRank(prev => !prev);
    };

    const handleIGTClick = () => {
        // Handle click on context menu item
        onClose();
        props.SetShowIGT(prev => !prev);
    };

    const handleIDClick = () => {
        // Handle click on context menu item
        onClose();
        props.SetShowID(prev => !prev);
    };

    const handleLocationClick = () => {
        // Handle click on context menu item
        onClose();
        props.SetShowLocation(prev => !prev);
    };

    const handleInventoryClick = () => {
        // Handle click on context menu item
        onClose();
        props.SetShowInventory(prev => !prev);
    };

    return (
        <div className="absolute z-50 bg-slate-900 text-gray-200 shadow flex flex-col justify-center items-center p-4 font-bold gap-1 text-center" style={{ top: y, left: x }}>
            <div className="w-full pb-2 border-b">Settings</div>
            <div className="w-full hover:bg-slate-700 p-4 font-normal cursor-pointer"
                onClick={handleIDClick}
            >
                {props.showID ? "Hide Enemy ID's" : "Show Enemy ID's"}
            </div>
            <div className="w-full hover:bg-slate-700 p-4 font-normal cursor-pointer"
                onClick={handleBossClick}
            >
                {props.bossOnly ? "Show All Enemies" : "Show Boss Only"}
            </div>
            <div className="w-full hover:bg-slate-700 p-4 font-normal cursor-pointer"
                onClick={handleDamageClick}
            >
                {props.damagedOnly ? "Show All Alive Enemies" : "Show Only Damaged Enemies"}
            </div>
            <div className="w-full hover:bg-slate-700 p-4 font-normal cursor-pointer"
                onClick={handleRankClick}
            >
                {props.showRank ? "Hide Rank" : "Show Rank"}
            </div>
            <div className="w-full hover:bg-slate-700 p-4 font-normal cursor-pointer"
                onClick={handleLocationClick}
            >
                {props.showLocation ? "Hide Locations" : "Show Locations"}
            </div>
            <div className="w-full hover:bg-slate-700 p-4 font-normal cursor-pointer"
                onClick={handleIGTClick}
            >
                {props.showIGT ? "Hide IGT" : "Show IGT"}
            </div>
            <div className="w-full hover:bg-slate-700 p-4 font-normal cursor-pointer"
                onClick={handleInventoryClick}
            >
                {props.showInventory ? "Hide Inventory" : "Show Inventory"}
            </div>
        </div>
    );
};

export default ContextMenu;
