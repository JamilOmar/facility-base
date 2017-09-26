export interface IFacilityFolder {
    folderName: string  ;
    allowRead: boolean  ;
    allowModify: boolean  ;
    subFolders: IFacilityFolder  ;
}