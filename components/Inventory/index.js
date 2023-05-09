import { classNames } from "utils";

const getItem = (item) => {
    if (item.WeaponId == -1) return getItemImage(item);
    return getWeaponImage(item);
}

const getItemImage = (item) => {
    switch (item.ItemId) {
        default:
            return <InventorySlot item={item} image="" />;
        case 1:
            return <InventorySlot item={item} image="bg-re2rfirstaidspray" />;
        case 2:
            return <InventorySlot item={item} image="bg-re2rgreenherb" />;
        case 3:
            return <InventorySlot item={item} image="bg-re2rredherb" />;
        case 4:
            return <InventorySlot item={item} image="bg-re2rblueherb" />;
        case 5:
            return <InventorySlot item={item} image="bg-re2rmixedherbsgg" />;
        case 6:
            return <InventorySlot item={item} image="bg-re2rmixedherbsgr" />;
        case 7:
            return <InventorySlot item={item} image="bg-re2rmixedherbsgb" />;
        case 8:
            return <InventorySlot item={item} image="bg-re2rmixedherbsggb" />;
        case 9:
            return <InventorySlot item={item} image="bg-re2rmixedherbsggg" />;
        case 10:
            return <InventorySlot item={item} image="bg-re2rmixedherbsgrb" />;
        case 11:
            return <InventorySlot item={item} image="bg-re2rmixedherbsrb" />;
        case 12:
            return <InventorySlot item={item} image="bg-re2rgreenherb2" />;
        case 13:
            return <InventorySlot item={item} image="bg-re2rredherb2" />;
        case 14:
            return <InventorySlot item={item} image="bg-re2rblueherb2" />;
        case 15:
            return <InventorySlot item={item} image="bg-re2rhandgunammo" />;
        case 16:
            return <InventorySlot item={item} image="bg-re2rshotgunammo" />;
        case 17:
            return <InventorySlot item={item} image="bg-re2rsubmachinegunammo" />;
        case 18:
            return <InventorySlot item={item} image="bg-re2rmagammo" />;
        case 22:
            return <InventorySlot item={item} image="bg-re2racidrounds" />;
        case 23:
            return <InventorySlot item={item} image="bg-re2rflamerounds" />;
        case 24:
            return <InventorySlot item={item} image="bg-re2rneedlecartridges" />;
        case 25:
            return <InventorySlot item={item} image="bg-re2rfuel" />;
        case 26:
            return <InventorySlot item={item} image="bg-re2rhandgunlargecaliberammo" />;
        case 27:
            return <InventorySlot item={item} image="bg-re2rsls60highpoweredrounds" />;
        case 31:
            return <InventorySlot item={item} image="bg-re2rdetonator" />;
        case 32:
            return <InventorySlot item={item} image="bg-re2rinkribbon" />;
        case 33:
            return <InventorySlot item={item} image="bg-re2rwoodenboard" />;
        case 34:
            return <InventorySlot item={item} image="bg-re2rdetonatornobattery" />;
        case 35:
            return <InventorySlot item={item} image="bg-re2rbattery9volt" />;
        case 36:
            return <InventorySlot item={item} image="bg-re2rgunpowder" />;
        case 37:
            return <InventorySlot item={item} image="bg-re2rgunpowderlarge" />;
        case 38:
            return <InventorySlot item={item} image="bg-re2rgunpowderhighgradeyellow" />;
        case 39:
            return <InventorySlot item={item} image="bg-re2rgunpowderhighgradewhite" />;
        case 48:
            return <InventorySlot item={item} image="bg-re2rmatildahighcapacitymagazine" />;
        case 49:
            return <InventorySlot item={item} image="bg-re2rmatildamuzzlebrake" />;
        case 50:
            return <InventorySlot item={item} image="bg-re2rmatildagunstock" />;
        case 51:
            return <InventorySlot item={item} image="bg-re2rsls60speedloader" />;
        case 52:
            return <InventorySlot item={item} image="bg-re2rjmbhp3lasersight" />;
        case 53:
            return <InventorySlot item={item} image="bg-re2rsls60reinforcedframe" />;
        case 54:
            return <InventorySlot item={item} image="bg-re2rjmbhp3highcapacitymagazine" />;
        case 55:
            return <InventorySlot item={item} image="bg-re2rw870shotgunstock" />;
        case 56:
            return <InventorySlot item={item} image="bg-re2rw870longbarrel" />;
        case 58:
            return <InventorySlot item={item} image="bg-re2rmq11highcapacitymagazine" />;
        case 60:
            return <InventorySlot item={item} image="bg-re2rmq11suppressor" />;
        case 61:
            return <InventorySlot item={item} image="bg-re2rlightninghawkreddotsight" />;
        case 62:
            return <InventorySlot item={item} image="bg-re2rlightninghawklongbarrel" />;
        case 64:
            return <InventorySlot item={item} image="bg-re2rgm79shoulderstock" />;
        case 65:
            return <InventorySlot item={item} image="bg-re2rflamethrowerregulator" />;
        case 66:
            return <InventorySlot item={item} image="bg-re2rsparkshothighvoltagecondenser" />;
        case 72:
            return <InventorySlot item={item} image="bg-re2rfilmhidingplace" />;
        case 73:
            return <InventorySlot item={item} image="bg-re2rfilmrisingrookie" />;
        case 74:
            return <InventorySlot item={item} image="bg-re2rfilmcommemorative" />;
        case 75:
            return <InventorySlot item={item} image="bg-re2rfilm3flocker" />;
        case 76:
            return <InventorySlot item={item} image="bg-re2rfilmlionstatue" />;
        case 77:
            return <InventorySlot item={item} image="bg-re2rkeystorageroom" />;
        case 79:
            return <InventorySlot item={item} image="bg-re2rjackhandle" />;
        case 80:
            return <InventorySlot item={item} image="bg-re2rsquarecrank" />;
        case 81:
            return <InventorySlot item={item} image="bg-re2rmedallionunicorn" />;
        case 82:
            return <InventorySlot item={item} image="bg-re2rkeyspade" />;
        case 83:
            return <InventorySlot item={item} image="bg-re2rkeycardparkinggarage" />;
        case 84:
            return <InventorySlot item={item} image="bg-re2rkeycardweaponslocker" />;
        case 86:
            return <InventorySlot item={item} image="bg-re2rvalvehandle" />;
        case 87:
            return <InventorySlot item={item} image="bg-re2rstarsbadge" />;
        case 88:
            return <InventorySlot item={item} image="bg-re2rscepter" />;
        case 90:
            return <InventorySlot item={item} image="bg-re2rredjewel" />;
        case 91:
            return <InventorySlot item={item} image="bg-re2rbejeweledbox" />;
        case 93:
            return <InventorySlot item={item} image="bg-re2rplugbishop" />;
        case 94:
            return <InventorySlot item={item} image="bg-re2rplugrook" />;
        case 95:
            return <InventorySlot item={item} image="bg-re2rplugking" />;
        case 98:
            return <InventorySlot item={item} image="bg-re2rpictureblock" />;
        case 102:
            return <InventorySlot item={item} image="bg-re2rusbdonglekey" />;
        case 112:
            return <InventorySlot item={item} image="bg-re2rsparekey" />;
        case 114:
            return <InventorySlot item={item} image="bg-re2rredbook" />;
        case 115:
            return <InventorySlot item={item} image="bg-re2rstatuesleftarm" />;
        case 116:
            return <InventorySlot item={item} image="bg-re2rstatuesleftarmwithredbook" />;
        case 118:
            return <InventorySlot item={item} image="bg-re2rmedallionlion" />;
        case 119:
            return <InventorySlot item={item} image="bg-re2rkeydiamond" />;
        case 120:
            return <InventorySlot item={item} image="bg-re2rkeycar" />;
        case 124:
            return <InventorySlot item={item} image="bg-re2rmedallionmaiden" />;
        case 126:
            return <InventorySlot item={item} image="bg-re2rpowerpanelpart" />;
        case 127:
            return <InventorySlot item={item} image="bg-re2rpowerpanelpart" />;
        case 128:
            return <InventorySlot item={item} image="bg-re2rloversrelief" />;
        case 129:
            return <InventorySlot item={item} image="bg-re2rgearsmall" />;
        case 130:
            return <InventorySlot2 item={item} image="bg-re2rgearlarge" />;
        case 131:
            return <InventorySlot item={item} image="bg-re2rkeycourtyard" />;
        case 132:
            return <InventorySlot item={item} image="bg-re2rplugknight" />;
        case 133:
            return <InventorySlot item={item} image="bg-re2rplugpawn" />;
        case 134:
            return <InventorySlot item={item} image="bg-re2rplugqueen" />;
        case 135:
            return <InventorySlot item={item} image="bg-re2rboxedelectronicpart" />;
        case 136:
            return <InventorySlot item={item} image="bg-re2rboxedelectronicpart" />;
        case 159:
            return <InventorySlot item={item} image="bg-re2rkeyorphanage" />;
        case 160:
            return <InventorySlot item={item} image="bg-re2rkeyclub" />;
        case 169:
            return <InventorySlot item={item} image="bg-re2rkeyheart" />;
        case 170:
            return <InventorySlot item={item} image="bg-re2rdigitalvideocassette" />;
        case 176:
            return <InventorySlot item={item} image="bg-re2rtbarvalvehandle" />;
        case 179:
            return <InventorySlot item={item} image="bg-re2rdispersalcartridgeempty" />;
        case 180:
            return <InventorySlot item={item} image="bg-re2rdispersalcartridgesolution" />;
        case 181:
            return <InventorySlot item={item} image="bg-re2rdispersalcartridgeherbicide" />;
        case 183:
            return <InventorySlot item={item} image="bg-re2rjointplug" />;
        case 186:
            return <InventorySlot item={item} image="bg-re2rupgradechipadministrator" />;
        case 187:
            return <InventorySlot item={item} image="bg-re2ridwristbandadministrator" />;
        case 188:
            return <InventorySlot item={item} image="bg-re2relectronicchip" />;
        case 189:
            return <InventorySlot item={item} image="bg-re2rsignalmodulator" />;
        case 190:
            return <InventorySlot item={item} image="bg-re2rtrophy" />;
        case 191:
            return <InventorySlot item={item} image="bg-re2rtrophy" />;
        case 194:
            return <InventorySlot item={item} image="bg-re2rkeysewers" />;
        case 195:
            return <InventorySlot item={item} image="bg-re2ridwristbandvisitor1" />;
        case 196:
            return <InventorySlot item={item} image="bg-re2ridwristbandgeneralstaff1" />;
        case 197:
            return <InventorySlot item={item} image="bg-re2ridwristbandseniorstaff1" />;
        case 198:
            return <InventorySlot item={item} image="bg-re2rupgradechipgeneralstaff" />;
        case 199:
            return <InventorySlot item={item} image="bg-re2rupgradechipseniorstaff" />;
        case 200:
            return <InventorySlot item={item} image="bg-re2ridwristbandvisitor2" />;
        case 201:
            return <InventorySlot item={item} image="bg-re2ridwristbandgeneralstaff2" />;
        case 202:
            return <InventorySlot item={item} image="bg-re2ridwristbandseniorstaff2" />;
        case 203:
            return <InventorySlot item={item} image="bg-re2rdigitalvideocassette" />;
        case 230:
            return <InventorySlot item={item} image="bg-re2rbriefcase" />;
        case 240:
            return <InventorySlot item={item} image="bg-re2rfusemainhall" />;
        case 241:
            return <InventorySlot item={item} image="bg-re2rfusebreakroom" />;
        case 243:
            return <InventorySlot item={item} image="bg-re2rscissors" />;
        case 244:
            return <InventorySlot item={item} image="bg-re2rboltcutters" />;
        case 245:
            return <InventorySlot item={item} image="bg-re2rstuffeddoll" />;
        case 262:
            return <InventorySlot item={item} image="bg-re2rhippouch" />;
        case 286:
            return <InventorySlot item={item} image="bg-re2roldkey" />;
        case 291:
            return <InventorySlot item={item} image="bg-re2rportablesafe" />;
        case 293:
            return <InventorySlot item={item} image="bg-re2rtinstoragebox" />;
        case 294:
            return <InventorySlot item={item} image="bg-re2rwoodenbox" />;
        case 295:
            return <InventorySlot item={item} image="bg-re2rwoodenbox" />;
        case 296:
            return <InventorySlot item={item} image="bg-re2rtinstoragebox" />;
        case 2130706433:
            return <InventorySlot item={item} image="bg-re2rjointplug" />;
        case 2130706434:
            return <InventorySlot item={item} image="bg-re2rgearlarge" />;
    }
}

const getWeaponImage = (item) => {
    switch (item.WeaponId) {
        case 1:
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re2rhandgunmatilda1" />;
            else if (item.WeaponParts == 2)
                return <InventorySlot item={item} image="bg-re2rhandgunmatilda2" />;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re2rhandgunmatilda3" />;
            else if (item.WeaponParts == 4)
                return <InventorySlot item={item} image="bg-re2rhandgunmatilda4" />;
            else if (item.WeaponParts == 5)
                return <InventorySlot2 item={item} image="bg-re2rhandgunmatilda5" />;
            else if (item.WeaponParts == 6)
                return <InventorySlot item={item} image="bg-re2rhandgunmatilda6" />;
            else if (item.WeaponParts == 7)
                return <InventorySlot2 item={item} image="bg-re2rhandgunmatilda7" />;
            else
                return <InventorySlot item={item} image="bg-re2rhandgunmatilda" />;

        case 2:
            return <InventorySlot item={item} image="bg-re2rhandgunm19" />;

        case 3:
            if (item.WeaponParts == 1)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp31" />;
            else if (item.WeaponParts == 2)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp32" />;
            else if (item.WeaponParts == 3)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" />;
            else if (item.WeaponParts == 4)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" />;
            else if (item.WeaponParts == 5)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" />;
            else if (item.WeaponParts == 6)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" />;
            else if (item.WeaponParts == 7)
                <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" />;
            else
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp3" />;

        case 4:
            return <InventorySlot item={item} image="bg-re2rhandgunquickdrawarmy" />;
        case 7:
            return <InventorySlot item={item} image="bg-re2rhandgunmup" />;
        case 8:
            return <InventorySlot item={item} image="bg-re2rhandgunbroomhc" />;

        case 9:
            if (item.WeaponParts == 1)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" />;
            else if (item.WeaponParts == 2)
                return <InventorySlot item={item} image="bg-re2rhandgunsls60" />;
            else if (item.WeaponParts == 3)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" />;
            else if (item.WeaponParts == 4)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" />;
            else if (item.WeaponParts == 5)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" />;
            else if (item.WeaponParts == 6)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" />;
            else
                return <InventorySlot item={item} image="bg-re2rhandgunsls60" />;

        case 11:
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re2rshotgunw8701" />;
            else if (item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rshotgunw8702" />;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re2rshotgunw8703" />;
            else
                return <InventorySlot item={item} image="bg-re2rshotgunw870" />;

        case 21:
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re2rsmgmq111" />;
            else if (item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rsmgmq112" />;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re2rsmgmq113" />;
            else
                return <InventorySlot item={item} image="bg-re2rsmgmq11" />;

        case 23:
            return <InventorySlot item={item} image="bg-re2rsmgle5infinite" />;

        case 31:
            equipped = Equipped(data, 31);
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re2rhandgunlightninghawk1" />;
            else if (item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rhandgunlightninghawk2" />;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re2rhandgunlightninghawk3" />;
            else
                return <InventorySlot item={item} image="bg-re2rhandgunlightninghawk" />;

        case 41:
            return <InventorySlot item={item} image="bg-re2remfvisualizer" />;

        case 42:
            if (item.WeaponParts == 1 || item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rgrenadelaunchergm791" />;
            else
                return <InventorySlot item={item} image="bg-re2rgrenadelaunchergm79" />;

        case 43:
            if (item.WeaponParts == 1 || item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rchemicalflamethrower2" />;
            else
                return <InventorySlot2 item={item} image="bg-re2rchemicalflamethrower" />;

        case 44:
            if (item.WeaponParts == 1 || item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rsparkshot1" />;
            else
                return <InventorySlot2 item={item} image="bg-re2rsparkshot" />;

        case 45:
            return <InventorySlot2 item={item} image="bg-re2ratm4" />;
        case 46:
            return <InventorySlot item={item} image="bg-re2rcombatknife" />;
        case 47:
            return <InventorySlot item={item} image="bg-re2rcombatknifeinfinite" />;
        case 49:
            return <InventorySlot item={item} image="bg-re2rantitankrocketlauncher" />;
        case 50:
            return <InventorySlot item={item} image="bg-re2rminigun" />;
        case 65:
            return <InventorySlot item={item} image="bg-re2rhandgrenade" />;
        case 66:
            return <InventorySlot item={item} image="bg-re2rflashgrenade" />;
        case 82:
            return <InventorySlot item={item} image="bg-re2rhandgunsamuraiedgeinfinite" />;
        case 83:
            return <InventorySlot item={item} image="bg-re2rhandgunsamuraiedgechrisredfield" />;
        case 84:
            return <InventorySlot item={item} image="bg-re2rhandgunsamuraiedgejillvalentine" />;
        case 85:
            return <InventorySlot item={item} image="bg-re2rhandgunsamuraiedgealbertwesker" />;
        case 222:
            return <InventorySlot item={item} image="bg-re2ratm4" />;
        case 242:
            return <InventorySlot item={item} image="bg-re2rantitankrocketlauncher" />;
        case 252:
            return <InventorySlot item={item} image="bg-re2rre2rminigun" />;
    }
}

const InventorySlot = ({ ...props }) => {
    const { item, image } = props;
    return (
        <div className="relative z-1 w-[76px] h-[76px] bg-re2rslot1 flex-shrink-0 m-[5px] mr-0">
            <div className={classNames(image, "w-full h-full bg-contain bg-center")} />
            {item.Count > 1 && (
                <div className="absolute bottom-0 right-0 px-2 py-0 text-gray-200 flex justify-center items-center">{item.Count}</div>
            )}
        </div>
    );
}

const InventorySlot2 = ({ ...props }) => {
    const { item, image } = props;
    return (
        <div className="relative z-1 w-[162px] h-[76px] bg-re2rslot2 flex-shrink-0 m-[5px] mr-0">
            <div className={classNames(image, "w-full h-full bg-contain bg-center")} />
            {item.Count > 0 && (
                <div className="absolute bottom-[3px] right-[2px] pr-[5px] pl-3 bg-black">{item.Count}</div>
            )}
        </div>
    );
}

export const RE2RInventory = ({ items, inventoryCount }) => {
    return (
        <div className="w-[344px] flex flex-wrap">
            {items.map((item, idx) => (
                Boolean(idx < inventoryCount)) && (getItem(item))
            )}
        </div>
    )
}