import { classNames } from "utils";
import { InventorySlot, InventorySlot2 } from "./slot";

export const re3rItemImage = (item, disableBackground, mainSlot, subSlot, shortcuts) => {
    switch (item.ItemId) {
        default:
            return <InventorySlot item={item} image={classNames(disableBackground ? "" : "bg-re3rempty brightness-[30%]")} disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 1:
            return <InventorySlot item={item} image="bg-re3rfirstaidspray" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 2:
            return <InventorySlot item={item} image="bg-re3rgreenherb" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 3:
            return <InventorySlot item={item} image="bg-re3rredherb" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 5:
            return <InventorySlot item={item} image="bg-re3rmixedherbsgg" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 6:
            return <InventorySlot item={item} image="bg-re3rmixedherbsgr" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 9:
            return <InventorySlot item={item} image="bg-re3rmixedherbsggg" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 22:
            return <InventorySlot item={item} image="bg-re3rgreenherb2" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 23:
            return <InventorySlot item={item} image="bg-re3rredherb2" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 31:
            return <InventorySlot item={item} image="bg-re3rhandgunammo" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 32:
            return <InventorySlot item={item} image="bg-re3rshotgunammo" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 33:
            return <InventorySlot item={item} image="bg-re3rassaultrifleammo" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 34:
            return <InventorySlot item={item} image="bg-re3rmagammo" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 36:
            return <InventorySlot item={item} image="bg-re3rminerounds" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 37:
            return <InventorySlot item={item} image="bg-re3rexplosiverounds" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 38:
            return <InventorySlot item={item} image="bg-re3racidrounds" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 39:
            return <InventorySlot item={item} image="bg-re3rflamerounds" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 61:
            return <InventorySlot item={item} image="bg-re3rgunpowder" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 62:
            return <InventorySlot item={item} image="bg-re3rhighgradegunpowder" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 63:
            return <InventorySlot item={item} image="bg-re3rexplosivea" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 64:
            return <InventorySlot item={item} image="bg-re3rexplosiveb" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 76:
            return <InventorySlot item={item} image="bg-re3rmoderatorhandgun" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 77:
            return <InventorySlot item={item} image="bg-re3rdotsighthandgun" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 78:
            return <InventorySlot item={item} image="bg-re3rextendedmagazinehandgun" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 91:
            return <InventorySlot item={item} image="bg-re3rsemiautobarrel" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 92:
            return <InventorySlot item={item} image="bg-re3rtacticalstockshotgun" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 93:
            return <InventorySlot item={item} image="bg-re3rshellholdershotgun" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 96:
            return <InventorySlot item={item} image="bg-re3rscopeassaultrifle" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 97:
            return <InventorySlot item={item} image="bg-re3rdualmagazineassaultrifle" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 98:
            return <InventorySlot item={item} image="bg-re3rtacticalgripassaultrifle" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 101:
            return <InventorySlot item={item} image="bg-re3rexbarrelmag" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 131:
            return <InventorySlot item={item} image="bg-re3raudiocassettetape" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 151:
            return <InventorySlot item={item} image="bg-re3rlockpick" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 152:
            return <InventorySlot item={item} image="bg-re3rboltcutters" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 161:
            return <InventorySlot item={item} image="bg-re3rbattery" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 162:
            return <InventorySlot item={item} image="bg-re3rsafetydepositkey" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 164:
            return <InventorySlot item={item} image="bg-re3rbradsidcard" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 165:
            return <InventorySlot item={item} image="bg-re3rdetonatornobattery" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 166:
            return <InventorySlot item={item} image="bg-re3rdetonator" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 181:
            return <InventorySlot item={item} image="bg-re3rfirehose" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 182:
            return <InventorySlot item={item} image="bg-re3rkendosgatekey" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 185:
            return <InventorySlot item={item} image="bg-re3rcaselockpick" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 186:
            return <InventorySlot2 item={item} image="bg-re3rbatterypack" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 187:
            return <InventorySlot item={item} image="bg-re3rgreenjewel" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 188:
            return <InventorySlot item={item} image="bg-re3rbluejewel" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 189:
            return <InventorySlot item={item} image="bg-re3rredjewel" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 192:
            return <InventorySlot item={item} image="bg-re3rfancybox" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 193:
            return <InventorySlot item={item} image="bg-re3rfancybox" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 194:
            return <InventorySlot item={item} image="bg-re3rfancybox" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 211:
            return <InventorySlot item={item} image="bg-re3rhospitalidcard" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 212:
            return <InventorySlot item={item} image="bg-re3rtapeplayertapeinserted" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 213:
            return <InventorySlot item={item} image="bg-re3raudiocassettetape" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 214:
            return <InventorySlot item={item} image="bg-re3rtapeplayer" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 215:
            return <InventorySlot item={item} image="bg-re3rvaccinesample" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 217:
            return <InventorySlot item={item} image="bg-re3rdetonator" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 218:
            return <InventorySlot item={item} image="bg-re3rlockerroomkey" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 222:
            return <InventorySlot item={item} image="bg-re3rfuse3" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 223:
            return <InventorySlot item={item} image="bg-re3rfuse2" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 224:
            return <InventorySlot item={item} image="bg-re3rfuse1" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 232:
            return <InventorySlot item={item} image="bg-re3rflashdrive" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 233:
            return <InventorySlot item={item} image="bg-re3rvaccine" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 234:
            return <InventorySlot item={item} image="bg-re3rculturesample" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 235:
            return <InventorySlot item={item} image="bg-re3rliquidfilledtesttube" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 236:
            return <InventorySlot item={item} image="bg-re3rvaccinebase" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 264:
            return <InventorySlot item={item} image="bg-re3rfirehose" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 301:
            return <InventorySlot item={item} image="bg-re3rirondefensecoin" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 302:
            return <InventorySlot item={item} image="bg-re3rassaultcoin" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 303:
            return <InventorySlot item={item} image="bg-re3rrecoverycoin" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 304:
            return <InventorySlot item={item} image="bg-re3rcraftingcompanion" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 305:
            return <InventorySlot item={item} image="bg-re3rstarsfieldcombatmanual" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 311:
            return <InventorySlot item={item} image="bg-re3rsupplycrate" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 312:
            return <InventorySlot item={item} image="bg-re3rsupplycrate" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 313:
            return <InventorySlot item={item} image="bg-re3rsupplycrate" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 314:
            return <InventorySlot item={item} image="bg-re3rsupplycrate" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 315:
            return <InventorySlot item={item} image="bg-re3rsupplycrate" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 316:
            return <InventorySlot item={item} image="bg-re3rsupplycrate" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
    }
}

export const re3rWeaponImage = (item, disableBackground, mainSlot, subSlot, shortcuts) => {
    switch (item.WeaponId) {
        case 1:
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re3rg19handgun1" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 2)
                return <InventorySlot item={item} image="bg-re3rg19handgun2" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re3rg19handgun3" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 4)
                return <InventorySlot item={item} image="bg-re3rg19handgun4" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 5)
                return <InventorySlot2 item={item} image="bg-re3rg19handgun5" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 6)
                return <InventorySlot item={item} image="bg-re3rg19handgun6" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 7)
                return <InventorySlot2 item={item} image="bg-re3rg19handgun7" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else
                return <InventorySlot item={item} image="bg-re3rg19handgun" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;

        case 2:
            return <InventorySlot item={item} image="bg-re3rg18bursthandgun" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 3:
            return <InventorySlot item={item} image="bg-re3rg18handgun" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 4:
            return <InventorySlot item={item} image="bg-re3rsamuraiedge" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 7:
            return <InventorySlot item={item} image="bg-re3rinfinitemuphandgun" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;

        case 11:
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re3rm3shotgun1" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 2)
                return <InventorySlot item={item} image="bg-re3rm3shotgun2" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re3rm3shotgun3" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 4)
                return <InventorySlot item={item} image="bg-re3rm3shotgun4" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 5)
                return <InventorySlot2 item={item} image="bg-re3rm3shotgun5" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 6)
                return <InventorySlot item={item} image="bg-re3rm3shotgun6" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 7)
                return <InventorySlot2 item={item} image="bg-re3rm3shotgun7" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else
                return <InventorySlot item={item} image="bg-re3rm3shotgun" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;

        case 21:
            if (item.WeaponParts == 1)
                return <InventorySlot2 item={item} image="bg-re3rcqbrassaultrifle1" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 2)
                return <InventorySlot2 item={item} image="bg-re3rcqbrassaultrifle2" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 3)
                return <InventorySlot2 item={item} image="bg-re3rcqbrassaultrifle3" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 4)
                return <InventorySlot2 item={item} image="bg-re3rcqbrassaultrifle4" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 5)
                return <InventorySlot2 item={item} image="bg-re3rcqbrassaultrifle5" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 6)
                return <InventorySlot2 item={item} image="bg-re3rCQBRAssaultRifle6" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else if (item.WeaponParts == 7)
                return <InventorySlot2 item={item} image="bg-re3rcqbrassaultrifle7" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else
                return <InventorySlot2 item={item} image="bg-re3rcqbrassaultrifle" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;

        case 22:
            return <InventorySlot2 item={item} image="bg-re3rinfinitecqbrassaultrifle" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;

        case 31:
            if (item.WeaponParts == 1)
                return <InventorySlot item={item} image="bg-re3rlightninghawk1" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
            else
                return <InventorySlot item={item} image="bg-re3rlightninghawk" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;

        case 32:
            return <InventorySlot2 item={item} image="bg-re3rraiden" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 42:
            return <InventorySlot2 item={item} image="bg-re3rmglgrenadelauncher" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 46:
            return <InventorySlot item={item} image="bg-re3rcombatknife" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 47:
            return <InventorySlot item={item} image="bg-re3rsurvivalknife" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 48:
            return <InventorySlot item={item} image="bg-re3rhotdogger" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 49:
            return <InventorySlot2 item={item} image="bg-re3rrocketlauncher" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 65:
            return <InventorySlot item={item} image="bg-re3rhandgrenade" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
        case 66:
            return <InventorySlot item={item} image="bg-re3rflashgrenade" disableBackground={disableBackground} mainSlot={mainSlot} subSlot={subSlot} shortcuts={shortcuts} />;
    }
}