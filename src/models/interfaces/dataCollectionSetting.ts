export interface IDataCollectionSetting {
    dataCollectionHost: string  ;
    sampleRunListName: string  ;
    sampleRunIDFieldName: string  ;
    dataTransferDelay: number ;
    dataTransferStartTime: Date  ;
    backupRecurrence: number ;
    syncFilter: string  ;
    localDataUrl: string  ;
    backupLocal: string  ;
    backupDataUrl: string  ;
    projectDataUrl: string  ;
    dataProcessHosts: string  ;
    sessionTypes: string  ;
}