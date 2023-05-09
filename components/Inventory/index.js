import { useState } from "react";
import { classNames } from "utils";

const getItem = (item, disableBackground) => {
    if (item.WeaponId == -1) return getItemImage(item, disableBackground);
    return getWeaponImage(item, disableBackground);
}

const getItemImage = (item, disableBackground) => {
    switch (item.ItemId) {
        default:
            return <InventorySlot item={item} image={classNames(disableBackground ? "" : "bg-re2rempty brightness-[30%]")} disableBackground={disableBackground} />;
        case 1:
            return <InventorySlot item={item} image="bg-re2rfirstaidspray" disableBackground={disableBackground} />;
        case 2:
            return <InventorySlot item={item} image="bg-re2rgreenherb" disableBackground={disableBackground} />;
        case 3:
            return <InventorySlot item={item} image="bg-re2rredherb" disableBackground={disableBackground} />;
        case 4:
            return <InventorySlot item={item} image="bg-re2rblueherb" disableBackground={disableBackground} />;
        case 5:
            return <InventorySlot item={item} image="bg-re2rmixedherbsgg" disableBackground={disableBackground} />;
        case 6:
            return <InventorySlot item={item} image="bg-re2rmixedherbsgr" disableBackground={disableBackground} />;
        case 7:
            return <InventorySlot item={item} image="bg-re2rmixedherbsgb" disableBackground={disableBackground} />;
        case 8:
            return <InventorySlot item={item} image="bg-re2rmixedherbsggb" disableBackground={disableBackground} />;
        case 9:
            return <InventorySlot item={item} image="bg-re2rmixedherbsggg" disableBackground={disableBackground} />;
        case 10:
            return <InventorySlot item={item} image="bg-re2rmixedherbsgrb" disableBackground={disableBackground} />;
        case 11:
            return <InventorySlot item={item} image="bg-re2rmixedherbsrb" disableBackground={disableBackground} />;
        case 12:
            return <InventorySlot item={item} image="bg-re2rgreenherb2" disableBackground={disableBackground} />;
        case 13:
            return <InventorySlot item={item} image="bg-re2rredherb2" disableBackground={disableBackground} />;
        case 14:
            return <InventorySlot item={item} image="bg-re2rblueherb2" disableBackground={disableBackground} />;
        case 15:
            return <InventorySlot item={item} image="bg-re2rhandgunammo" disableBackground={disableBackground} />;
        case 16:
            return <InventorySlot item={item} image="bg-re2rshotgunammo" disableBackground={disableBackground} />;
        case 17:
            return <InventorySlot item={item} image="bg-re2rsubmachinegunammo" disableBackground={disableBackground} />;
        case 18:
            return <InventorySlot item={item} image="bg-re2rmagammo" disableBackground={disableBackground} />;
        case 22:
            return <InventorySlot item={item} image="bg-re2racidrounds" disableBackground={disableBackground} />;
        case 23:
            return <InventorySlot item={item} image="bg-re2rflamerounds" disableBackground={disableBackground} />;
        case 24:
            return <InventorySlot item={item} image="bg-re2rneedlecartridges" disableBackground={disableBackground} />;
        case 25:
            return <InventorySlot item={item} image="bg-re2rfuel" disableBackground={disableBackground} />;
        case 26:
            return <InventorySlot item={item} image="bg-re2rhandgunlargecaliberammo" disableBackground={disableBackground} />;
        case 27:
            return <InventorySlot item={item} image="bg-re2rsls60highpoweredrounds" disableBackground={disableBackground} />;
        case 31:
            return <InventorySlot item={item} image="bg-re2rdetonator" disableBackground={disableBackground} />;
        case 32:
            return <InventorySlot item={item} image="bg-re2rinkribbon" disableBackground={disableBackground} />;
        case 33:
            return <InventorySlot item={item} image="bg-re2rwoodenboard" disableBackground={disableBackground} />;
        case 34:
            return <InventorySlot item={item} image="bg-re2rdetonatornobattery" disableBackground={disableBackground} />;
        case 35:
            return <InventorySlot item={item} image="bg-re2rbattery9volt" disableBackground={disableBackground} />;
        case 36:
            return <InventorySlot item={item} image="bg-re2rgunpowder" disableBackground={disableBackground} />;
        case 37:
            return <InventorySlot item={item} image="bg-re2rgunpowderlarge" disableBackground={disableBackground} />;
        case 38:
            return <InventorySlot item={item} image="bg-re2rgunpowderhighgradeyellow" disableBackground={disableBackground} />;
        case 39:
            return <InventorySlot item={item} image="bg-re2rgunpowderhighgradewhite" disableBackground={disableBackground} />;
        case 48:
            return <InventorySlot item={item} image="bg-re2rmatildahighcapacitymagazine" disableBackground={disableBackground} />;
        case 49:
            return <InventorySlot item={item} image="bg-re2rmatildamuzzlebrake" disableBackground={disableBackground} />;
        case 50:
            return <InventorySlot item={item} image="bg-re2rmatildagunstock" disableBackground={disableBackground} />;
        case 51:
            return <InventorySlot item={item} image="bg-re2rsls60speedloader" disableBackground={disableBackground} />;
        case 52:
            return <InventorySlot item={item} image="bg-re2rjmbhp3lasersight" disableBackground={disableBackground} />;
        case 53:
            return <InventorySlot item={item} image="bg-re2rsls60reinforcedframe" disableBackground={disableBackground} />;
        case 54:
            return <InventorySlot item={item} image="bg-re2rjmbhp3highcapacitymagazine" disableBackground={disableBackground} />;
        case 55:
            return <InventorySlot item={item} image="bg-re2rw870shotgunstock" disableBackground={disableBackground} />;
        case 56:
            return <InventorySlot item={item} image="bg-re2rw870longbarrel" disableBackground={disableBackground} />;
        case 58:
            return <InventorySlot item={item} image="bg-re2rmq11highcapacitymagazine" disableBackground={disableBackground} />;
        case 60:
            return <InventorySlot item={item} image="bg-re2rmq11suppressor" disableBackground={disableBackground} />;
        case 61:
            return <InventorySlot item={item} image="bg-re2rlightninghawkreddotsight" disableBackground={disableBackground} />;
        case 62:
            return <InventorySlot item={item} image="bg-re2rlightninghawklongbarrel" disableBackground={disableBackground} />;
        case 64:
            return <InventorySlot item={item} image="bg-re2rgm79shoulderstock" disableBackground={disableBackground} />;
        case 65:
            return <InventorySlot item={item} image="bg-re2rflamethrowerregulator" disableBackground={disableBackground} />;
        case 66:
            return <InventorySlot item={item} image="bg-re2rsparkshothighvoltagecondenser" disableBackground={disableBackground} />;
        case 72:
            return <InventorySlot item={item} image="bg-re2rfilmhidingplace" disableBackground={disableBackground} />;
        case 73:
            return <InventorySlot item={item} image="bg-re2rfilmrisingrookie" disableBackground={disableBackground} />;
        case 74:
            return <InventorySlot item={item} image="bg-re2rfilmcommemorative" disableBackground={disableBackground} />;
        case 75:
            return <InventorySlot item={item} image="bg-re2rfilm3flocker" disableBackground={disableBackground} />;
        case 76:
            return <InventorySlot item={item} image="bg-re2rfilmlionstatue" disableBackground={disableBackground} />;
        case 77:
            return <InventorySlot item={item} image="bg-re2rkeystorageroom" disableBackground={disableBackground} />;
        case 79:
            return <InventorySlot item={item} image="bg-re2rjackhandle" disableBackground={disableBackground} />;
        case 80:
            return <InventorySlot item={item} image="bg-re2rsquarecrank" disableBackground={disableBackground} />;
        case 81:
            return <InventorySlot item={item} image="bg-re2rmedallionunicorn" disableBackground={disableBackground} />;
        case 82:
            return <InventorySlot item={item} image="bg-re2rkeyspade" disableBackground={disableBackground} />;
        case 83:
            return <InventorySlot item={item} image="bg-re2rkeycardparkinggarage" disableBackground={disableBackground} />;
        case 84:
            return <InventorySlot item={item} image="bg-re2rkeycardweaponslocker" disableBackground={disableBackground} />;
        case 86:
            return <InventorySlot item={item} image="bg-re2rvalvehandle" disableBackground={disableBackground} />;
        case 87:
            return <InventorySlot item={item} image="bg-re2rstarsbadge" disableBackground={disableBackground} />;
        case 88:
            return <InventorySlot item={item} image="bg-re2rscepter" disableBackground={disableBackground} />;
        case 90:
            return <InventorySlot item={item} image="bg-re2rredjewel" disableBackground={disableBackground} />;
        case 91:
            return <InventorySlot item={item} image="bg-re2rbejeweledbox" disableBackground={disableBackground} />;
        case 93:
            return <InventorySlot item={item} image="bg-re2rplugbishop" disableBackground={disableBackground} />;
        case 94:
            return <InventorySlot item={item} image="bg-re2rplugrook" disableBackground={disableBackground} />;
        case 95:
            return <InventorySlot item={item} image="bg-re2rplugking" disableBackground={disableBackground} />;
        case 98:
            return <InventorySlot item={item} image="bg-re2rpictureblock" disableBackground={disableBackground} />;
        case 102:
            return <InventorySlot item={item} image="bg-re2rusbdonglekey" disableBackground={disableBackground} />;
        case 112:
            return <InventorySlot item={item} image="bg-re2rsparekey" disableBackground={disableBackground} />;
        case 114:
            return <InventorySlot item={item} image="bg-re2rredbook" disableBackground={disableBackground} />;
        case 115:
            return <InventorySlot item={item} image="bg-re2rstatuesleftarm" disableBackground={disableBackground} />;
        case 116:
            return <InventorySlot item={item} image="bg-re2rstatuesleftarmwithredbook" disableBackground={disableBackground} />;
        case 118:
            return <InventorySlot item={item} image="bg-re2rmedallionlion" disableBackground={disableBackground} />;
        case 119:
            return <InventorySlot item={item} image="bg-re2rkeydiamond" disableBackground={disableBackground} />;
        case 120:
            return <InventorySlot item={item} image="bg-re2rkeycar" disableBackground={disableBackground} />;
        case 124:
            return <InventorySlot item={item} image="bg-re2rmedallionmaiden" disableBackground={disableBackground} />;
        case 126:
            return <InventorySlot item={item} image="bg-re2rpowerpanelpart" disableBackground={disableBackground} />;
        case 127:
            return <InventorySlot item={item} image="bg-re2rpowerpanelpart" disableBackground={disableBackground} />;
        case 128:
            return <InventorySlot item={item} image="bg-re2rloversrelief" disableBackground={disableBackground} />;
        case 129:
            return <InventorySlot item={item} image="bg-re2rgearsmall" disableBackground={disableBackground} />;
        case 130:
            return <InventorySlot2 item={item} image="bg-re2rgearlarge" disableBackground={disableBackground} />;
        case 131:
            return <InventorySlot item={item} image="bg-re2rkeycourtyard" disableBackground={disableBackground} />;
        case 132:
            return <InventorySlot item={item} image="bg-re2rplugknight" disableBackground={disableBackground} />;
        case 133:
            return <InventorySlot item={item} image="bg-re2rplugpawn" disableBackground={disableBackground} />;
        case 134:
            return <InventorySlot item={item} image="bg-re2rplugqueen" disableBackground={disableBackground} />;
        case 135:
            return <InventorySlot item={item} image="bg-re2rboxedelectronicpart" disableBackground={disableBackground} />;
        case 136:
            return <InventorySlot item={item} image="bg-re2rboxedelectronicpart" disableBackground={disableBackground} />;
        case 159:
            return <InventorySlot item={item} image="bg-re2rkeyorphanage" disableBackground={disableBackground} />;
        case 160:
            return <InventorySlot item={item} image="bg-re2rkeyclub" disableBackground={disableBackground} />;
        case 169:
            return <InventorySlot item={item} image="bg-re2rkeyheart" disableBackground={disableBackground} />;
        case 170:
            return <InventorySlot item={item} image="bg-re2rdigitalvideocassette" disableBackground={disableBackground} />;
        case 176:
            return <InventorySlot item={item} image="bg-re2rtbarvalvehandle" disableBackground={disableBackground} />;
        case 179:
            return <InventorySlot item={item} image="bg-re2rdispersalcartridgeempty" disableBackground={disableBackground} />;
        case 180:
            return <InventorySlot item={item} image="bg-re2rdispersalcartridgesolution" disableBackground={disableBackground} />;
        case 181:
            return <InventorySlot item={item} image="bg-re2rdispersalcartridgeherbicide" disableBackground={disableBackground} />;
        case 183:
            return <InventorySlot2 item={item} image="bg-re2rjointplug" disableBackground={disableBackground} />;
        case 186:
            return <InventorySlot item={item} image="bg-re2rupgradechipadministrator" disableBackground={disableBackground} />;
        case 187:
            return <InventorySlot item={item} image="bg-re2ridwristbandadministrator" disableBackground={disableBackground} />;
        case 188:
            return <InventorySlot item={item} image="bg-re2relectronicchip" disableBackground={disableBackground} />;
        case 189:
            return <InventorySlot item={item} image="bg-re2rsignalmodulator" disableBackground={disableBackground} />;
        case 190:
            return <InventorySlot item={item} image="bg-re2rtrophy" disableBackground={disableBackground} />;
        case 191:
            return <InventorySlot item={item} image="bg-re2rtrophy" disableBackground={disableBackground} />;
        case 194:
            return <InventorySlot item={item} image="bg-re2rkeysewers" disableBackground={disableBackground} />;
        case 195:
            return <InventorySlot item={item} image="bg-re2ridwristbandvisitor1" disableBackground={disableBackground} />;
        case 196:
            return <InventorySlot item={item} image="bg-re2ridwristbandgeneralstaff1" disableBackground={disableBackground} />;
        case 197:
            return <InventorySlot item={item} image="bg-re2ridwristbandseniorstaff1" disableBackground={disableBackground} />;
        case 198:
            return <InventorySlot item={item} image="bg-re2rupgradechipgeneralstaff" disableBackground={disableBackground} />;
        case 199:
            return <InventorySlot item={item} image="bg-re2rupgradechipseniorstaff" disableBackground={disableBackground} />;
        case 200:
            return <InventorySlot item={item} image="bg-re2ridwristbandvisitor2" disableBackground={disableBackground} />;
        case 201:
            return <InventorySlot item={item} image="bg-re2ridwristbandgeneralstaff2" disableBackground={disableBackground} />;
        case 202:
            return <InventorySlot item={item} image="bg-re2ridwristbandseniorstaff2" disableBackground={disableBackground} />;
        case 203:
            return <InventorySlot item={item} image="bg-re2rdigitalvideocassette" disableBackground={disableBackground} />;
        case 230:
            return <InventorySlot item={item} image="bg-re2rbriefcase" disableBackground={disableBackground} />;
        case 240:
            return <InventorySlot item={item} image="bg-re2rfusemainhall" disableBackground={disableBackground} />;
        case 241:
            return <InventorySlot item={item} image="bg-re2rfusebreakroom" disableBackground={disableBackground} />;
        case 243:
            return <InventorySlot item={item} image="bg-re2rscissors" disableBackground={disableBackground} />;
        case 244:
            return <InventorySlot item={item} image="bg-re2rboltcutters" disableBackground={disableBackground} />;
        case 245:
            return <InventorySlot item={item} image="bg-re2rstuffeddoll" disableBackground={disableBackground} />;
        case 262:
            return <InventorySlot item={item} image="bg-re2rhippouch" disableBackground={disableBackground} />;
        case 286:
            return <InventorySlot item={item} image="bg-re2roldkey" disableBackground={disableBackground} />;
        case 291:
            return <InventorySlot item={item} image="bg-re2rportablesafe" disableBackground={disableBackground} />;
        case 293:
            return <InventorySlot item={item} image="bg-re2rtinstoragebox" disableBackground={disableBackground} />;
        case 294:
            return <InventorySlot item={item} image="bg-re2rwoodenbox" disableBackground={disableBackground} />;
        case 295:
            return <InventorySlot item={item} image="bg-re2rwoodenbox" disableBackground={disableBackground} />;
        case 296:
            return <InventorySlot item={item} image="bg-re2rtinstoragebox" disableBackground={disableBackground} />;
        case 2130706433:
            return <InventorySlot item={item} image="bg-re2rjointplug" disableBackground={disableBackground} />;
        case 2130706434:
            return <InventorySlot item={item} image="bg-re2rgearlarge" disableBackground={disableBackground} />;
    }
}

const getWeaponImage = (item, disableBackground) => {
    switch (item.WeaponId) {
        case 1:
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re2rhandgunmatilda1" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 2)
                return <InventorySlot item={item} image="bg-re2rhandgunmatilda2" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re2rhandgunmatilda3" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 4)
                return <InventorySlot item={item} image="bg-re2rhandgunmatilda4" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 5)
                return <InventorySlot2 item={item} image="bg-re2rhandgunmatilda5" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 6)
                return <InventorySlot item={item} image="bg-re2rhandgunmatilda6" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 7)
                return <InventorySlot2 item={item} image="bg-re2rhandgunmatilda7" disableBackground={disableBackground} />;
            else
                return <InventorySlot item={item} image="bg-re2rhandgunmatilda" disableBackground={disableBackground} />;

        case 2:
            return <InventorySlot item={item} image="bg-re2rhandgunm19" disableBackground={disableBackground} />;

        case 3:
            if (item.WeaponParts == 1)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp31" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 2)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp32" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 3)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 4)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 5)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 6)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 7)
                <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" disableBackground={disableBackground} />;
            else
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp3" disableBackground={disableBackground} />;

        case 4:
            return <InventorySlot item={item} image="bg-re2rhandgunquickdrawarmy" disableBackground={disableBackground} />;
        case 7:
            return <InventorySlot item={item} image="bg-re2rhandgunmup" disableBackground={disableBackground} />;
        case 8:
            return <InventorySlot item={item} image="bg-re2rhandgunbroomhc" disableBackground={disableBackground} />;

        case 9:
            if (item.WeaponParts == 1)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 2)
                return <InventorySlot item={item} image="bg-re2rhandgunsls60" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 3)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 4)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 5)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 6)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" disableBackground={disableBackground} />;
            else
                return <InventorySlot item={item} image="bg-re2rhandgunsls60" disableBackground={disableBackground} />;

        case 11:
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re2rshotgunw8701" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rshotgunw8702" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re2rshotgunw8703" disableBackground={disableBackground} />;
            else
                return <InventorySlot item={item} image="bg-re2rshotgunw870" disableBackground={disableBackground} />;

        case 21:
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re2rsmgmq111" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rsmgmq112" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re2rsmgmq113" disableBackground={disableBackground} />;
            else
                return <InventorySlot item={item} image="bg-re2rsmgmq11" disableBackground={disableBackground} />;

        case 23:
            return <InventorySlot2 item={item} image="bg-re2rsmgle5infinite" disableBackground={disableBackground} />;

        case 31:
            equipped = Equipped(data, 31);
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re2rhandgunlightninghawk1" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rhandgunlightninghawk2" disableBackground={disableBackground} />;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re2rhandgunlightninghawk3" disableBackground={disableBackground} />;
            else
                return <InventorySlot item={item} image="bg-re2rhandgunlightninghawk" disableBackground={disableBackground} />;

        case 41:
            return <InventorySlot item={item} image="bg-re2remfvisualizer" disableBackground={disableBackground} />;

        case 42:
            if (item.WeaponParts == 1 || item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rgrenadelaunchergm791" disableBackground={disableBackground} />;
            else
                return <InventorySlot item={item} image="bg-re2rgrenadelaunchergm79" disableBackground={disableBackground} />;

        case 43:
            if (item.WeaponParts == 1 || item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rchemicalflamethrower2" disableBackground={disableBackground} />;
            else
                return <InventorySlot2 item={item} image="bg-re2rchemicalflamethrower" disableBackground={disableBackground} />;

        case 44:
            if (item.WeaponParts == 1 || item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rsparkshot1" disableBackground={disableBackground} />;
            else
                return <InventorySlot2 item={item} image="bg-re2rsparkshot" disableBackground={disableBackground} />;

        case 45:
            return <InventorySlot2 item={item} image="bg-re2ratm4" disableBackground={disableBackground} />;
        case 46:
            return <InventorySlot item={item} image="bg-re2rcombatknife" disableBackground={disableBackground} />;
        case 47:
            return <InventorySlot item={item} image="bg-re2rcombatknifeinfinite" disableBackground={disableBackground} />;
        case 49:
            return <InventorySlot item={item} image="bg-re2rantitankrocketlauncher" disableBackground={disableBackground} />;
        case 50:
            return <InventorySlot item={item} image="bg-re2rminigun" disableBackground={disableBackground} />;
        case 65:
            return <InventorySlot item={item} image="bg-re2rhandgrenade" disableBackground={disableBackground} />;
        case 66:
            return <InventorySlot item={item} image="bg-re2rflashgrenade" disableBackground={disableBackground} />;
        case 82:
            return <InventorySlot item={item} image="bg-re2rhandgunsamuraiedgeinfinite" disableBackground={disableBackground} />;
        case 83:
            return <InventorySlot item={item} image="bg-re2rhandgunsamuraiedgechrisredfield" disableBackground={disableBackground} />;
        case 84:
            return <InventorySlot item={item} image="bg-re2rhandgunsamuraiedgejillvalentine" disableBackground={disableBackground} />;
        case 85:
            return <InventorySlot item={item} image="bg-re2rhandgunsamuraiedgealbertwesker" disableBackground={disableBackground} />;
        case 222:
            return <InventorySlot2 item={item} image="bg-re2ratm4" disableBackground={disableBackground} />;
        case 242:
            return <InventorySlot item={item} image="bg-re2rantitankrocketlauncher" disableBackground={disableBackground} />;
        case 252:
            return <InventorySlot2 item={item} image="bg-re2rre2rminigun" disableBackground={disableBackground} />;
    }
}

const InventorySlot = ({ ...props }) => {
    const { item, image, disableBackground } = props;
    // if (itemSizes[item.SlotNo - 1] === 2) return;
    return (
        <div className={classNames(disableBackground ? "" : "bg-re2rslot1", "relative z-1 w-[76px] h-[76px] flex-shrink-0 m-[5px] mr-0")}>
            <div className={classNames(image, "w-full h-full bg-contain bg-center bg-no-repeat")} />
            {item.Count > 1 && (
                <div className="absolute bottom-0 right-0 px-2 py-0 text-gray-200 flex justify-center items-center">{item.Count}</div>
            )}
        </div>
    );
}

const InventorySlot2 = ({ ...props }) => {
    const { item, image, disableBackground } = props;
    return (
        <div className={classNames(disableBackground ? "" : "bg-re2rslot2", "relative z-1 w-[162px] h-[76px] flex-shrink-0 m-[5px] mr-0")}>
            <div className={classNames(image, "w-full h-full bg-contain bg-center bg-no-repeat")} />
            {item.Count > 0 && (
                <div className="absolute bottom-[3px] right-[2px] pr-[5px] pl-3 bg-black">{item.Count}</div>
            )}
        </div>
    );
}

export const RE2RInventory = ({ items, inventoryCount }) => {
    const [disableBackground, setBackground] = useState(false);
    return (
        <div className="w-[344px] flex flex-wrap" onClick={() => setBackground(prev => !prev)}>
            {items.map((item, idx) => (
                Boolean(idx < inventoryCount)) && (getItem(item, disableBackground))
            )}
        </div>
    )
}