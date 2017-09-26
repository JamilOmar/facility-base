import { IDataCollectionSetting } from "../interfaces/dataCollectionSetting";
export class DataCollectionSetting implements IDataCollectionSetting {
    dataCollectionHost: string;
    sampleRunListName: string;
    sampleRunIDFieldName: string;
    dataTransferDelay: number = 0;
    dataTransferStartTime: Date;
    backupRecurrence: number = 0;
    syncFilter: string;
    localDataUrl: string;
    backupLocal: string;
    backupDataUrl: string;
    projectDataUrl: string;
    dataProcessHosts: string;
    sessionTypes: string;
}
