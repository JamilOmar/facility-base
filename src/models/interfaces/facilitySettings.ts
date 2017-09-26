import { IFacilityFolder } from "./facilityFolder";
import { IGroupSettings } from "./GroupSettings";
export interface IFacilitySettings {
    facilityDataUrl: string;
    downloadUrl: string;
    subFolders: Array<IFacilityFolder>;
    IsMultiFacility: boolean;
    isInherited: boolean;
    group: IGroupSettings;
}

