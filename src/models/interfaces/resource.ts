import { IProperty } from "./property";
import { IDataCollectionSetting } from "./dataCollectionSetting";
import { IShareSettings } from "./shareSettings";
export interface IResource {
    id: string;
    title: string;
    description: string;
    manufacturer: string;
    model: string;
    serial: string;
    parent: IResource;
    imageUrl: string;
    dataCollectionSettings: IDataCollectionSetting;
    shareSettings: IShareSettings;
    Properties: Array<IProperty>;
}