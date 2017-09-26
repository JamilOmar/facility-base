import { IGroupSettings } from "../interfaces/groupSettings";
import { IFacilityFolder } from "../interfaces/facilityFolder";
import { IFacilitySettings } from "../interfaces/facilitySettings";
export class FacilitySettings implements IFacilitySettings {
    facilityDataUrl: string;
    downloadUrl: string;
    subFolders: Array<IFacilityFolder>;
    IsMultiFacility: boolean;
    isInherited: boolean;
    group: IGroupSettings;
}

