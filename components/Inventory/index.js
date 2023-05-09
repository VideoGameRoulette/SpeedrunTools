import { useState } from "react";
import { classNames } from "utils";

const getItem = (item, disableBackground, itemSizes, setItemSizes) => {
    if (item.WeaponId == -1) return getItemImage(item, disableBackground, itemSizes, setItemSizes);
    return getWeaponImage(item, disableBackground, itemSizes, setItemSizes);
}

const getItemImage = (item, disableBackground, itemSizes, setItemSizes) => {
    switch (item.ItemId) {
        default:
            return <InventorySlot item={item} image={classNames(disableBackground ? "" : "bg-re2rempty brightness-[30%]")} disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 1:
            return <InventorySlot item={item} image="bg-re2rfirstaidspray" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 2:
            return <InventorySlot item={item} image="bg-re2rgreenherb" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 3:
            return <InventorySlot item={item} image="bg-re2rredherb" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 4:
            return <InventorySlot item={item} image="bg-re2rblueherb" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 5:
            return <InventorySlot item={item} image="bg-re2rmixedherbsgg" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 6:
            return <InventorySlot item={item} image="bg-re2rmixedherbsgr" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 7:
            return <InventorySlot item={item} image="bg-re2rmixedherbsgb" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 8:
            return <InventorySlot item={item} image="bg-re2rmixedherbsggb" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 9:
            return <InventorySlot item={item} image="bg-re2rmixedherbsggg" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 10:
            return <InventorySlot item={item} image="bg-re2rmixedherbsgrb" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 11:
            return <InventorySlot item={item} image="bg-re2rmixedherbsrb" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 12:
            return <InventorySlot item={item} image="bg-re2rgreenherb2" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 13:
            return <InventorySlot item={item} image="bg-re2rredherb2" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 14:
            return <InventorySlot item={item} image="bg-re2rblueherb2" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 15:
            return <InventorySlot item={item} image="bg-re2rhandgunammo" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 16:
            return <InventorySlot item={item} image="bg-re2rshotgunammo" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 17:
            return <InventorySlot item={item} image="bg-re2rsubmachinegunammo" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 18:
            return <InventorySlot item={item} image="bg-re2rmagammo" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 22:
            return <InventorySlot item={item} image="bg-re2racidrounds" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 23:
            return <InventorySlot item={item} image="bg-re2rflamerounds" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 24:
            return <InventorySlot item={item} image="bg-re2rneedlecartridges" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 25:
            return <InventorySlot item={item} image="bg-re2rfuel" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 26:
            return <InventorySlot item={item} image="bg-re2rhandgunlargecaliberammo" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 27:
            return <InventorySlot item={item} image="bg-re2rsls60highpoweredrounds" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 31:
            return <InventorySlot item={item} image="bg-re2rdetonator" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 32:
            return <InventorySlot item={item} image="bg-re2rinkribbon" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 33:
            return <InventorySlot item={item} image="bg-re2rwoodenboard" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 34:
            return <InventorySlot item={item} image="bg-re2rdetonatornobattery" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 35:
            return <InventorySlot item={item} image="bg-re2rbattery9volt" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 36:
            return <InventorySlot item={item} image="bg-re2rgunpowder" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 37:
            return <InventorySlot item={item} image="bg-re2rgunpowderlarge" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 38:
            return <InventorySlot item={item} image="bg-re2rgunpowderhighgradeyellow" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 39:
            return <InventorySlot item={item} image="bg-re2rgunpowderhighgradewhite" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 48:
            return <InventorySlot item={item} image="bg-re2rmatildahighcapacitymagazine" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 49:
            return <InventorySlot item={item} image="bg-re2rmatildamuzzlebrake" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 50:
            return <InventorySlot item={item} image="bg-re2rmatildagunstock" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 51:
            return <InventorySlot item={item} image="bg-re2rsls60speedloader" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 52:
            return <InventorySlot item={item} image="bg-re2rjmbhp3lasersight" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 53:
            return <InventorySlot item={item} image="bg-re2rsls60reinforcedframe" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 54:
            return <InventorySlot item={item} image="bg-re2rjmbhp3highcapacitymagazine" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 55:
            return <InventorySlot item={item} image="bg-re2rw870shotgunstock" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 56:
            return <InventorySlot item={item} image="bg-re2rw870longbarrel" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 58:
            return <InventorySlot item={item} image="bg-re2rmq11highcapacitymagazine" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 60:
            return <InventorySlot item={item} image="bg-re2rmq11suppressor" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 61:
            return <InventorySlot item={item} image="bg-re2rlightninghawkreddotsight" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 62:
            return <InventorySlot item={item} image="bg-re2rlightninghawklongbarrel" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 64:
            return <InventorySlot item={item} image="bg-re2rgm79shoulderstock" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 65:
            return <InventorySlot item={item} image="bg-re2rflamethrowerregulator" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 66:
            return <InventorySlot item={item} image="bg-re2rsparkshothighvoltagecondenser" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 72:
            return <InventorySlot item={item} image="bg-re2rfilmhidingplace" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 73:
            return <InventorySlot item={item} image="bg-re2rfilmrisingrookie" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 74:
            return <InventorySlot item={item} image="bg-re2rfilmcommemorative" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 75:
            return <InventorySlot item={item} image="bg-re2rfilm3flocker" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 76:
            return <InventorySlot item={item} image="bg-re2rfilmlionstatue" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 77:
            return <InventorySlot item={item} image="bg-re2rkeystorageroom" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 79:
            return <InventorySlot item={item} image="bg-re2rjackhandle" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 80:
            return <InventorySlot item={item} image="bg-re2rsquarecrank" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 81:
            return <InventorySlot item={item} image="bg-re2rmedallionunicorn" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 82:
            return <InventorySlot item={item} image="bg-re2rkeyspade" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 83:
            return <InventorySlot item={item} image="bg-re2rkeycardparkinggarage" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 84:
            return <InventorySlot item={item} image="bg-re2rkeycardweaponslocker" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 86:
            return <InventorySlot item={item} image="bg-re2rvalvehandle" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 87:
            return <InventorySlot item={item} image="bg-re2rstarsbadge" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 88:
            return <InventorySlot item={item} image="bg-re2rscepter" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 90:
            return <InventorySlot item={item} image="bg-re2rredjewel" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 91:
            return <InventorySlot item={item} image="bg-re2rbejeweledbox" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 93:
            return <InventorySlot item={item} image="bg-re2rplugbishop" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 94:
            return <InventorySlot item={item} image="bg-re2rplugrook" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 95:
            return <InventorySlot item={item} image="bg-re2rplugking" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 98:
            return <InventorySlot item={item} image="bg-re2rpictureblock" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 102:
            return <InventorySlot item={item} image="bg-re2rusbdonglekey" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 112:
            return <InventorySlot item={item} image="bg-re2rsparekey" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 114:
            return <InventorySlot item={item} image="bg-re2rredbook" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 115:
            return <InventorySlot item={item} image="bg-re2rstatuesleftarm" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 116:
            return <InventorySlot item={item} image="bg-re2rstatuesleftarmwithredbook" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 118:
            return <InventorySlot item={item} image="bg-re2rmedallionlion" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 119:
            return <InventorySlot item={item} image="bg-re2rkeydiamond" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 120:
            return <InventorySlot item={item} image="bg-re2rkeycar" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 124:
            return <InventorySlot item={item} image="bg-re2rmedallionmaiden" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 126:
            return <InventorySlot item={item} image="bg-re2rpowerpanelpart" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 127:
            return <InventorySlot item={item} image="bg-re2rpowerpanelpart" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 128:
            return <InventorySlot item={item} image="bg-re2rloversrelief" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 129:
            return <InventorySlot item={item} image="bg-re2rgearsmall" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 130:
            return <InventorySlot2 item={item} image="bg-re2rgearlarge" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 131:
            return <InventorySlot item={item} image="bg-re2rkeycourtyard" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 132:
            return <InventorySlot item={item} image="bg-re2rplugknight" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 133:
            return <InventorySlot item={item} image="bg-re2rplugpawn" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 134:
            return <InventorySlot item={item} image="bg-re2rplugqueen" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 135:
            return <InventorySlot item={item} image="bg-re2rboxedelectronicpart" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 136:
            return <InventorySlot item={item} image="bg-re2rboxedelectronicpart" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 159:
            return <InventorySlot item={item} image="bg-re2rkeyorphanage" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 160:
            return <InventorySlot item={item} image="bg-re2rkeyclub" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 169:
            return <InventorySlot item={item} image="bg-re2rkeyheart" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 170:
            return <InventorySlot item={item} image="bg-re2rdigitalvideocassette" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 176:
            return <InventorySlot item={item} image="bg-re2rtbarvalvehandle" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 179:
            return <InventorySlot item={item} image="bg-re2rdispersalcartridgeempty" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 180:
            return <InventorySlot item={item} image="bg-re2rdispersalcartridgesolution" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 181:
            return <InventorySlot item={item} image="bg-re2rdispersalcartridgeherbicide" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 183:
            return <InventorySlot item={item} image="bg-re2rjointplug" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 186:
            return <InventorySlot item={item} image="bg-re2rupgradechipadministrator" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 187:
            return <InventorySlot item={item} image="bg-re2ridwristbandadministrator" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 188:
            return <InventorySlot item={item} image="bg-re2relectronicchip" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 189:
            return <InventorySlot item={item} image="bg-re2rsignalmodulator" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 190:
            return <InventorySlot item={item} image="bg-re2rtrophy" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 191:
            return <InventorySlot item={item} image="bg-re2rtrophy" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 194:
            return <InventorySlot item={item} image="bg-re2rkeysewers" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 195:
            return <InventorySlot item={item} image="bg-re2ridwristbandvisitor1" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 196:
            return <InventorySlot item={item} image="bg-re2ridwristbandgeneralstaff1" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 197:
            return <InventorySlot item={item} image="bg-re2ridwristbandseniorstaff1" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 198:
            return <InventorySlot item={item} image="bg-re2rupgradechipgeneralstaff" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 199:
            return <InventorySlot item={item} image="bg-re2rupgradechipseniorstaff" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 200:
            return <InventorySlot item={item} image="bg-re2ridwristbandvisitor2" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 201:
            return <InventorySlot item={item} image="bg-re2ridwristbandgeneralstaff2" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 202:
            return <InventorySlot item={item} image="bg-re2ridwristbandseniorstaff2" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 203:
            return <InventorySlot item={item} image="bg-re2rdigitalvideocassette" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 230:
            return <InventorySlot item={item} image="bg-re2rbriefcase" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 240:
            return <InventorySlot item={item} image="bg-re2rfusemainhall" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 241:
            return <InventorySlot item={item} image="bg-re2rfusebreakroom" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 243:
            return <InventorySlot item={item} image="bg-re2rscissors" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 244:
            return <InventorySlot item={item} image="bg-re2rboltcutters" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 245:
            return <InventorySlot item={item} image="bg-re2rstuffeddoll" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 262:
            return <InventorySlot item={item} image="bg-re2rhippouch" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 286:
            return <InventorySlot item={item} image="bg-re2roldkey" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 291:
            return <InventorySlot item={item} image="bg-re2rportablesafe" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 293:
            return <InventorySlot item={item} image="bg-re2rtinstoragebox" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 294:
            return <InventorySlot item={item} image="bg-re2rwoodenbox" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 295:
            return <InventorySlot item={item} image="bg-re2rwoodenbox" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 296:
            return <InventorySlot item={item} image="bg-re2rtinstoragebox" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 2130706433:
            return <InventorySlot item={item} image="bg-re2rjointplug" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 2130706434:
            return <InventorySlot item={item} image="bg-re2rgearlarge" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
    }
}

const getWeaponImage = (item, disableBackground, itemSizes, setItemSizes) => {
    switch (item.WeaponId) {
        case 1:
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re2rhandgunmatilda1" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 2)
                return <InventorySlot item={item} image="bg-re2rhandgunmatilda2" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re2rhandgunmatilda3" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 4)
                return <InventorySlot item={item} image="bg-re2rhandgunmatilda4" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 5)
                return <InventorySlot2 item={item} image="bg-re2rhandgunmatilda5" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 6)
                return <InventorySlot item={item} image="bg-re2rhandgunmatilda6" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 7)
                return <InventorySlot2 item={item} image="bg-re2rhandgunmatilda7" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else
                return <InventorySlot item={item} image="bg-re2rhandgunmatilda" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;

        case 2:
            return <InventorySlot item={item} image="bg-re2rhandgunm19" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;

        case 3:
            if (item.WeaponParts == 1)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp31" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 2)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp32" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 3)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 4)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 5)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 6)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 7)
                <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp3" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;

        case 4:
            return <InventorySlot item={item} image="bg-re2rhandgunquickdrawarmy" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 7:
            return <InventorySlot item={item} image="bg-re2rhandgunmup" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 8:
            return <InventorySlot item={item} image="bg-re2rhandgunbroomhc" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;

        case 9:
            if (item.WeaponParts == 1)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 2)
                return <InventorySlot item={item} image="bg-re2rhandgunsls60" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 3)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 4)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 5)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 6)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else
                return <InventorySlot item={item} image="bg-re2rhandgunsls60" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;

        case 11:
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re2rshotgunw8701" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rshotgunw8702" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re2rshotgunw8703" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else
                return <InventorySlot item={item} image="bg-re2rshotgunw870" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;

        case 21:
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re2rsmgmq111" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rsmgmq112" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re2rsmgmq113" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else
                return <InventorySlot item={item} image="bg-re2rsmgmq11" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;

        case 23:
            return <InventorySlot2 item={item} image="bg-re2rsmgle5infinite" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;

        case 31:
            equipped = Equipped(data, 31);
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re2rhandgunlightninghawk1" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rhandgunlightninghawk2" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re2rhandgunlightninghawk3" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else
                return <InventorySlot item={item} image="bg-re2rhandgunlightninghawk" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;

        case 41:
            return <InventorySlot item={item} image="bg-re2remfvisualizer" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;

        case 42:
            if (item.WeaponParts == 1 || item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rgrenadelaunchergm791" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else
                return <InventorySlot item={item} image="bg-re2rgrenadelaunchergm79" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;

        case 43:
            if (item.WeaponParts == 1 || item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rchemicalflamethrower2" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else
                return <InventorySlot2 item={item} image="bg-re2rchemicalflamethrower" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;

        case 44:
            if (item.WeaponParts == 1 || item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rsparkshot1" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
            else
                return <InventorySlot2 item={item} image="bg-re2rsparkshot" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;

        case 45:
            return <InventorySlot2 item={item} image="bg-re2ratm4" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 46:
            return <InventorySlot item={item} image="bg-re2rcombatknife" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 47:
            return <InventorySlot item={item} image="bg-re2rcombatknifeinfinite" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 49:
            return <InventorySlot item={item} image="bg-re2rantitankrocketlauncher" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 50:
            return <InventorySlot item={item} image="bg-re2rminigun" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 65:
            return <InventorySlot item={item} image="bg-re2rhandgrenade" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 66:
            return <InventorySlot item={item} image="bg-re2rflashgrenade" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 82:
            return <InventorySlot item={item} image="bg-re2rhandgunsamuraiedgeinfinite" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 83:
            return <InventorySlot item={item} image="bg-re2rhandgunsamuraiedgechrisredfield" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 84:
            return <InventorySlot item={item} image="bg-re2rhandgunsamuraiedgejillvalentine" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 85:
            return <InventorySlot item={item} image="bg-re2rhandgunsamuraiedgealbertwesker" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 222:
            return <InventorySlot2 item={item} image="bg-re2ratm4" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 242:
            return <InventorySlot item={item} image="bg-re2rantitankrocketlauncher" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
        case 252:
            return <InventorySlot2 item={item} image="bg-re2rre2rminigun" disableBackground={disableBackground} setItemSizes={setItemSizes} itemSizes={itemSizes} />;
    }
}

const InventorySlot = ({ ...props }) => {
    const { item, image, disableBackground, itemSizes, setItemSizes } = props;
    setItemSizes(prev => [...prev, prev[item.SlotNo] = 1]);
    if (itemSizes[item.SlotNo - 1] === 2) return;
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
    const { item, image, disableBackground, setItemSizes } = props;
    setItemSizes(prev => [...prev, prev[item.SlotNo] = 2]);
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
    const [itemSizes, setItemSizes] = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
    const [disableBackground, setBackground] = useState(false);
    console.log("Items Array", items);
    return (
        <div className="w-[344px] flex flex-wrap" onClick={() => setBackground(prev => !prev)}>
            {items.map((item, idx) => (
                Boolean(idx < inventoryCount)) && (getItem(item, disableBackground, itemSizes, setItemSizes))
            )}
        </div>
    )
}