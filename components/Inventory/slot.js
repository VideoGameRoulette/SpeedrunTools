import { classNames } from "utils";

const getEquippedSlotNo = (idx) => {
    switch (idx) {
        default: return "bg-eslot2";
        case 1: return "bg-eslot4";
        case 2: return "bg-eslot1";
        case 3: return "bg-eslot3";
    }
}

export const InventorySlot = ({ ...props }) => {
    const { item, image, disableBackground, mainSlot, subSlot, shortcuts } = props;
    const isEquipped = item.WeaponId != -1 && mainSlot.WeaponId == item.WeaponId || item.WeaponId != -1 && subSlot.WeaponId == item.WeaponId;
    const foundObject = shortcuts.findIndex(obj => item.WeaponId != -1 && obj.WeaponId === item.WeaponId);
    const isShortcut = foundObject !== -1;
    return (
        <div className={classNames(disableBackground ? "" : "bg-re3rslot1", "relative z-1 w-[76px] h-[76px] flex-shrink-0 m-[5px] mr-0")}>
            <div className={classNames(image, "w-full h-full bg-contain bg-center bg-no-repeat")} />
            {!item.IsEmptySlot && isEquipped && (
                <div className="absolute top-0 left-0 px-2 py-0 text-gray-200 flex justify-center items-center bg-re2requipped w-full h-full" />
            )}
            {!item.IsEmptySlot && !isEquipped && isShortcut && (
                <div className={classNames(getEquippedSlotNo(foundObject), "absolute top-0 left-0 px-2 py-0 text-gray-200 flex justify-center items-center w-full h-full bg-no-repeat")} />
            )}
            {item.IsWeapon && (
                <div className="absolute bottom-0 right-0 px-2 py-0 text-gray-200 flex justify-center items-center">{item.Count}</div>
            )}
            {item.IsItem && item.Count > 1 && (
                <div className="absolute bottom-0 right-0 px-2 py-0 text-gray-200 flex justify-center items-center">{item.Count}</div>
            )}
            {item.IsWeapon && item.Count === -1 && (
                <div className="absolute bottom-0 right-0 px-2 py-0 text-gray-200 flex justify-center items-center">∞</div>
            )}
        </div>
    );
}

export const InventorySlot2 = ({ ...props }) => {
    const { item, image, disableBackground, mainSlot, subSlot, shortcuts } = props;
    const isEquipped = item.IsWeapon && mainSlot.WeaponId == item.WeaponId || item.IsWeapon && subSlot.WeaponId == item.WeaponId;
    const foundObject = item.IsWeapon ? shortcuts.findIndex(obj => obj.WeaponId === item.WeaponId) : -1;
    const isShortcut = foundObject !== -1;
    return (
        <div className={classNames(disableBackground ? "" : "bg-re3rslot2", "relative z-1 w-[162px] h-[76px] flex-shrink-0 m-[5px] mr-0")}>
            <div className={classNames(image, "w-full h-full bg-contain bg-center bg-no-repeat")} />
            {!item.IsEmptySlot && isEquipped && (
                <div className="absolute top-0 left-0 px-2 py-0 text-gray-200 flex justify-center items-center bg-re2requipped w-full h-full bg-no-repeat" />
            )}
            {!item.IsEmptySlot && !isEquipped && isShortcut && (
                <div className={classNames(getEquippedSlotNo(foundObject), "absolute top-0 left-0 px-2 py-0 text-gray-200 flex justify-center items-center w-full h-full bg-no-repeat")} />
            )}
            {!item.IsEmptySlot && item.Count > 0 && (
                <div className="absolute bottom-0 right-0 px-2 py-0 text-gray-200 flex justify-center items-center">{item.Count}</div>
            )}
            {item.IsWeapon && item.Count === -1 && (
                <div className="absolute bottom-0 right-0 px-2 py-0 text-gray-200 flex justify-center items-center">∞</div>
            )}
        </div>
    );
}