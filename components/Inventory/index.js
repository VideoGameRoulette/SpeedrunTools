import { useState } from "react";
import { re2rItemImage, re2rWeaponImage } from './re2r';
import { re3rItemImage, re3rWeaponImage } from './re3r';
import { InventorySlot } from "./slot";

const getItem = (item, disableBackground, isFatSlot, cbItem, cbWeapon, mainSlot, subSlot = null, shortcuts, subShortcuts) => {
    if (isFatSlot) return <div className="hidden"></div>;
    if (item.WeaponId == -1) return cbItem(item, disableBackground, mainSlot, subSlot, shortcuts, subShortcuts);
    return cbWeapon(item, disableBackground, mainSlot, subSlot, shortcuts, subShortcuts);
}

const isInventorySlot = (idx, inventoryCount, item, disableBackground, isFatSlot, cbItem, cbWeapon, mainSlot, subSlot, shortcuts, subShortcuts) => {
    if (idx < inventoryCount) return getItem(item, disableBackground, isFatSlot, cbItem, cbWeapon, mainSlot, subSlot, shortcuts, subShortcuts);
    return <InventorySlot item={item} image="" disableBackground={true} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts} />;
}

export const RE2RInventory = ({ items, inventoryCount, mainSlot, subSlot, shortcuts, subShortcuts }) => {
    const [disableBackground, setBackground] = useState(false);
    return (
        <div className="w-[344px] flex flex-wrap justify-between" onClick={() => setBackground(prev => !prev)}>
            {items.map((item, idx) => (
                isInventorySlot(idx, inventoryCount, item, disableBackground, idx > 0 ? items[idx - 1].IsFatSlot : false, re2rItemImage, re2rWeaponImage, mainSlot, subSlot, shortcuts, subShortcuts))
            )}
        </div>
    )
}

export const RE3RInventory = ({ items, inventoryCount, mainSlot, subSlot, shortcuts }) => {
    const [disableBackground, setBackground] = useState(false);
    return (
        <div className="w-[344px] flex flex-wrap justify-between" onClick={() => setBackground(prev => !prev)}>
            {items.map((item, idx) => (
                isInventorySlot(idx, inventoryCount, item, disableBackground, idx > 0 ? items[idx - 1].IsFatSlot : false, re3rItemImage, re3rWeaponImage, mainSlot, subSlot, shortcuts))
            )}
        </div>
    )
}