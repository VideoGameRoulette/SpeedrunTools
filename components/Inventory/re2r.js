import { classNames } from "utils";
import { InventorySlot, InventorySlot2 } from "./slot";

export const re2rItemImage = (item, disableBackground, mainSlot, subSlot, shortcuts, subShortcuts) => {
    switch (item.ItemId) {
        default:
            return <InventorySlot item={item} image={classNames(disableBackground ? "" : "bg-re2rempty brightness-[30%]")} disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 1:
            return <InventorySlot item={item} image="bg-re2rfirstaidspray" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 2:
            return <InventorySlot item={item} image="bg-re2rgreenherb" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 3:
            return <InventorySlot item={item} image="bg-re2rredherb" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 4:
            return <InventorySlot item={item} image="bg-re2rblueherb" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 5:
            return <InventorySlot item={item} image="bg-re2rmixedherbsgg" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 6:
            return <InventorySlot item={item} image="bg-re2rmixedherbsgr" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 7:
            return <InventorySlot item={item} image="bg-re2rmixedherbsgb" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 8:
            return <InventorySlot item={item} image="bg-re2rmixedherbsggb" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 9:
            return <InventorySlot item={item} image="bg-re2rmixedherbsggg" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 10:
            return <InventorySlot item={item} image="bg-re2rmixedherbsgrb" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 11:
            return <InventorySlot item={item} image="bg-re2rmixedherbsrb" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 12:
            return <InventorySlot item={item} image="bg-re2rgreenherb2" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 13:
            return <InventorySlot item={item} image="bg-re2rredherb2" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 14:
            return <InventorySlot item={item} image="bg-re2rblueherb2" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 15:
            return <InventorySlot item={item} image="bg-re2rhandgunammo" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 16:
            return <InventorySlot item={item} image="bg-re2rshotgunammo" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 17:
            return <InventorySlot item={item} image="bg-re2rsubmachinegunammo" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 18:
            return <InventorySlot item={item} image="bg-re2rmagammo" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 22:
            return <InventorySlot item={item} image="bg-re2racidrounds" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 23:
            return <InventorySlot item={item} image="bg-re2rflamerounds" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts} />;
        case 24:
            return <InventorySlot item={item} image="bg-re2rneedlecartridges" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 25:
            return <InventorySlot item={item} image="bg-re2rfuel" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 26:
            return <InventorySlot item={item} image="bg-re2rhandgunlargecaliberammo" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 27:
            return <InventorySlot item={item} image="bg-re2rsls60highpoweredrounds" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 31:
            return <InventorySlot item={item} image="bg-re2rdetonator" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 32:
            return <InventorySlot item={item} image="bg-re2rinkribbon" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 33:
            return <InventorySlot item={item} image="bg-re2rwoodenboard" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 34:
            return <InventorySlot item={item} image="bg-re2rdetonatornobattery" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 35:
            return <InventorySlot item={item} image="bg-re2rbattery9volt" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 36:
            return <InventorySlot item={item} image="bg-re2rgunpowder" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 37:
            return <InventorySlot item={item} image="bg-re2rgunpowderlarge" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 38:
            return <InventorySlot item={item} image="bg-re2rgunpowderhighgradeyellow" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 39:
            return <InventorySlot item={item} image="bg-re2rgunpowderhighgradewhite" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 48:
            return <InventorySlot item={item} image="bg-re2rmatildahighcapacitymagazine" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 49:
            return <InventorySlot item={item} image="bg-re2rmatildamuzzlebrake" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 50:
            return <InventorySlot item={item} image="bg-re2rmatildagunstock" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 51:
            return <InventorySlot item={item} image="bg-re2rsls60speedloader" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 52:
            return <InventorySlot item={item} image="bg-re2rjmbhp3lasersight" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 53:
            return <InventorySlot item={item} image="bg-re2rsls60reinforcedframe" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 54:
            return <InventorySlot item={item} image="bg-re2rjmbhp3highcapacitymagazine" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 55:
            return <InventorySlot item={item} image="bg-re2rw870shotgunstock" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 56:
            return <InventorySlot item={item} image="bg-re2rw870longbarrel" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 58:
            return <InventorySlot item={item} image="bg-re2rmq11highcapacitymagazine" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 60:
            return <InventorySlot item={item} image="bg-re2rmq11suppressor" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts} />;
        case 61:
            return <InventorySlot item={item} image="bg-re2rlightninghawkreddotsight" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 62:
            return <InventorySlot item={item} image="bg-re2rlightninghawklongbarrel" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 64:
            return <InventorySlot item={item} image="bg-re2rgm79shoulderstock" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 65:
            return <InventorySlot item={item} image="bg-re2rflamethrowerregulator" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 66:
            return <InventorySlot item={item} image="bg-re2rsparkshothighvoltagecondenser" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 72:
            return <InventorySlot item={item} image="bg-re2rfilmhidingplace" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 73:
            return <InventorySlot item={item} image="bg-re2rfilmrisingrookie" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 74:
            return <InventorySlot item={item} image="bg-re2rfilmcommemorative" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 75:
            return <InventorySlot item={item} image="bg-re2rfilm3flocker" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 76:
            return <InventorySlot item={item} image="bg-re2rfilmlionstatue" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 77:
            return <InventorySlot item={item} image="bg-re2rkeystorageroom" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 79:
            return <InventorySlot item={item} image="bg-re2rjackhandle" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 80:
            return <InventorySlot item={item} image="bg-re2rsquarecrank" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 81:
            return <InventorySlot item={item} image="bg-re2rmedallionunicorn" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 82:
            return <InventorySlot item={item} image="bg-re2rkeyspade" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 83:
            return <InventorySlot item={item} image="bg-re2rkeycardparkinggarage" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 84:
            return <InventorySlot item={item} image="bg-re2rkeycardweaponslocker" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 86:
            return <InventorySlot item={item} image="bg-re2rvalvehandle" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 87:
            return <InventorySlot item={item} image="bg-re2rstarsbadge" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 88:
            return <InventorySlot item={item} image="bg-re2rscepter" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 90:
            return <InventorySlot item={item} image="bg-re2rredjewel" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 91:
            return <InventorySlot item={item} image="bg-re2rbejeweledbox" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 93:
            return <InventorySlot item={item} image="bg-re2rplugbishop" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 94:
            return <InventorySlot item={item} image="bg-re2rplugrook" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 95:
            return <InventorySlot item={item} image="bg-re2rplugking" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 98:
            return <InventorySlot item={item} image="bg-re2rpictureblock" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 102:
            return <InventorySlot item={item} image="bg-re2rusbdonglekey" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 112:
            return <InventorySlot item={item} image="bg-re2rsparekey" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 114:
            return <InventorySlot item={item} image="bg-re2rredbook" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 115:
            return <InventorySlot item={item} image="bg-re2rstatuesleftarm" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 116:
            return <InventorySlot item={item} image="bg-re2rstatuesleftarmwithredbook" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 118:
            return <InventorySlot item={item} image="bg-re2rmedallionlion" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 119:
            return <InventorySlot item={item} image="bg-re2rkeydiamond" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 120:
            return <InventorySlot item={item} image="bg-re2rkeycar" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 124:
            return <InventorySlot item={item} image="bg-re2rmedallionmaiden" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 126:
            return <InventorySlot item={item} image="bg-re2rpowerpanelpart" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 127:
            return <InventorySlot item={item} image="bg-re2rpowerpanelpart" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 128:
            return <InventorySlot item={item} image="bg-re2rloversrelief" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 129:
            return <InventorySlot item={item} image="bg-re2rgearsmall" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 130:
            return <InventorySlot2 item={item} image="bg-re2rgearlarge" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 131:
            return <InventorySlot item={item} image="bg-re2rkeycourtyard" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 132:
            return <InventorySlot item={item} image="bg-re2rplugknight" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 133:
            return <InventorySlot item={item} image="bg-re2rplugpawn" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 134:
            return <InventorySlot item={item} image="bg-re2rplugqueen" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 135:
            return <InventorySlot item={item} image="bg-re2rboxedelectronicpart" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 136:
            return <InventorySlot item={item} image="bg-re2rboxedelectronicpart" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 159:
            return <InventorySlot item={item} image="bg-re2rkeyorphanage" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 160:
            return <InventorySlot item={item} image="bg-re2rkeyclub" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 169:
            return <InventorySlot item={item} image="bg-re2rkeyheart" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 170:
            return <InventorySlot item={item} image="bg-re2rdigitalvideocassette" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 176:
            return <InventorySlot item={item} image="bg-re2rtbarvalvehandle" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 179:
            return <InventorySlot item={item} image="bg-re2rdispersalcartridgeempty" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 180:
            return <InventorySlot item={item} image="bg-re2rdispersalcartridgesolution" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 181:
            return <InventorySlot item={item} image="bg-re2rdispersalcartridgeherbicide" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 183:
            return <InventorySlot2 item={item} image="bg-re2rjointplug" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 186:
            return <InventorySlot item={item} image="bg-re2rupgradechipadministrator" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 187:
            return <InventorySlot item={item} image="bg-re2ridwristbandadministrator" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 188:
            return <InventorySlot item={item} image="bg-re2relectronicchip" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 189:
            return <InventorySlot item={item} image="bg-re2rsignalmodulator" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 190:
            return <InventorySlot item={item} image="bg-re2rtrophy" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 191:
            return <InventorySlot item={item} image="bg-re2rtrophy" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 194:
            return <InventorySlot item={item} image="bg-re2rkeysewers" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 195:
            return <InventorySlot item={item} image="bg-re2ridwristbandvisitor1" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 196:
            return <InventorySlot item={item} image="bg-re2ridwristbandgeneralstaff1" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 197:
            return <InventorySlot item={item} image="bg-re2ridwristbandseniorstaff1" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 198:
            return <InventorySlot item={item} image="bg-re2rupgradechipgeneralstaff" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 199:
            return <InventorySlot item={item} image="bg-re2rupgradechipseniorstaff" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 200:
            return <InventorySlot item={item} image="bg-re2ridwristbandvisitor2" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 201:
            return <InventorySlot item={item} image="bg-re2ridwristbandgeneralstaff2" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 202:
            return <InventorySlot item={item} image="bg-re2ridwristbandseniorstaff2" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 203:
            return <InventorySlot item={item} image="bg-re2rdigitalvideocassette" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 230:
            return <InventorySlot item={item} image="bg-re2rbriefcase" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 240:
            return <InventorySlot item={item} image="bg-re2rfusemainhall" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 241:
            return <InventorySlot item={item} image="bg-re2rfusebreakroom" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 243:
            return <InventorySlot item={item} image="bg-re2rscissors" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 244:
            return <InventorySlot item={item} image="bg-re2rboltcutters" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 245:
            return <InventorySlot item={item} image="bg-re2rstuffeddoll" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 262:
            return <InventorySlot item={item} image="bg-re2rhippouch" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 286:
            return <InventorySlot item={item} image="bg-re2roldkey" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 291:
            return <InventorySlot item={item} image="bg-re2rportablesafe" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 293:
            return <InventorySlot item={item} image="bg-re2rtinstoragebox" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 294:
            return <InventorySlot item={item} image="bg-re2rwoodenbox" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 295:
            return <InventorySlot item={item} image="bg-re2rwoodenbox" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 296:
            return <InventorySlot item={item} image="bg-re2rtinstoragebox" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 2130706433:
            return <InventorySlot item={item} image="bg-re2rjointplug" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 2130706434:
            return <InventorySlot item={item} image="bg-re2rgearlarge" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
    }
}

export const re2rWeaponImage = (item, disableBackground, mainSlot, subSlot, shortcuts, subShortcuts) => {
    switch (item.WeaponId) {
        case 1:
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re2rhandgunmatilda1" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 2)
                return <InventorySlot item={item} image="bg-re2rhandgunmatilda2" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re2rhandgunmatilda3" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 4)
                return <InventorySlot item={item} image="bg-re2rhandgunmatilda4" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 5)
                return <InventorySlot2 item={item} image="bg-re2rhandgunmatilda5" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 6)
                return <InventorySlot item={item} image="bg-re2rhandgunmatilda6" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 7)
                return <InventorySlot2 item={item} image="bg-re2rhandgunmatilda7" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts}subShortcuts={subShortcuts} />;
            else
                return <InventorySlot item={item} image="bg-re2rhandgunmatilda" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;

        case 2:
            return <InventorySlot item={item} image="bg-re2rhandgunm19" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;

        case 3:
            if (item.WeaponParts == 1)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp31" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 2)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp32" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 3)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 4)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 5)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 6)
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 7)
                <InventorySlot item={item} image="bg-re2rhandgunjmbhp33" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else
                return <InventorySlot item={item} image="bg-re2rhandgunjmbhp3" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;

        case 4:
            return <InventorySlot item={item} image="bg-re2rhandgunquickdrawarmy" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 7:
            return <InventorySlot item={item} image="bg-re2rhandgunmup" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 8:
            return <InventorySlot item={item} image="bg-re2rhandgunbroomhc" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;

        case 9:
            if (item.WeaponParts == 1)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 2)
                return <InventorySlot item={item} image="bg-re2rhandgunsls60" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 3)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 4)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 5)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 6)
                return <InventorySlot item={item} image="bg-re2rhandgunsls601" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else
                return <InventorySlot item={item} image="bg-re2rhandgunsls60" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;

        case 11:
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re2rshotgunw8701" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rshotgunw8702" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re2rshotgunw8703" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else
                return <InventorySlot item={item} image="bg-re2rshotgunw870" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;

        case 21:
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re2rsmgmq111" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rsmgmq112" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re2rsmgmq113" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else
                return <InventorySlot item={item} image="bg-re2rsmgmq11" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;

        case 23:
            return <InventorySlot2 item={item} image="bg-re2rsmgle5infinite" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;

        case 31:
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re2rhandgunlightninghawk1" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 2)
                return <InventorySlot item={item} image="bg-re2rhandgunlightninghawk2" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re2rhandgunlightninghawk3" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else
                return <InventorySlot item={item} image="bg-re2rhandgunlightninghawk" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;

        case 41:
            return <InventorySlot item={item} image="bg-re2remfvisualizer" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;

        case 42:
            if (item.WeaponParts == 1 || item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rgrenadelaunchergm791" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else
                return <InventorySlot item={item} image="bg-re2rgrenadelaunchergm79" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;

        case 43:
            if (item.WeaponParts == 1 || item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rchemicalflamethrower2" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
            else
                return <InventorySlot2 item={item} image="bg-re2rchemicalflamethrower" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;

        case 44:
            if (item.WeaponParts == 1 || item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re2rsparkshot1" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts}subShortcuts={subShortcuts} />;
            else
                return <InventorySlot2 item={item} image="bg-re2rsparkshot" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;

        case 45:
            return <InventorySlot2 item={item} image="bg-re2ratm4" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 46:
            return <InventorySlot item={item} image="bg-re2rcombatknife" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 47:
            return <InventorySlot item={item} image="bg-re2rcombatknifeinfinite" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 49:
            return <InventorySlot2 item={item} image="bg-re2rantitankrocketlauncher" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 50:
            return <InventorySlot2 item={item} image="bg-re2rminigun" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 65:
            return <InventorySlot item={item} image="bg-re2rhandgrenade" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 66:
            return <InventorySlot item={item} image="bg-re2rflashgrenade" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 82:
            return <InventorySlot item={item} image="bg-re2rhandgunsamuraiedgeinfinite" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 83:
            return <InventorySlot item={item} image="bg-re2rhandgunsamuraiedgechrisredfield" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 84:
            return <InventorySlot item={item} image="bg-re2rhandgunsamuraiedgejillvalentine" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 85:
            return <InventorySlot item={item} image="bg-re2rhandgunsamuraiedgealbertwesker" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 222:
            return <InventorySlot2 item={item} image="bg-re2ratm4" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 242:
            return <InventorySlot item={item} image="bg-re2rantitankrocketlauncher" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
        case 252:
            return <InventorySlot2 item={item} image="bg-re2rminigun" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} subShortcuts={subShortcuts}/>;
    }
}
