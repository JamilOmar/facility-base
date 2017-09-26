import { IFacilityFolder } from "../interfaces/facilityFolder";
    export class FacilityFolder implements IFacilityFolder {
        folderName: string ;
        allowRead: boolean ;
        allowModify: boolean ;
        subFolders: FacilityFolder;

}