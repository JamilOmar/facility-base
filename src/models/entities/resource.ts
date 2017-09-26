import { IResource } from "../interfaces/resource";
import { IDataCollectionSetting } from "../interfaces/dataCollectionSetting";
import { IShareSettings } from "../interfaces/shareSettings";
import { IProperty } from "../interfaces/property";
import { IItemRef } from "../interfaces/itemRef";
export class Resource implements IResource {
    id: string;
    title: string;
    description: string;
    manufacturer: string;
    model: string;
    serial: string;
    parent: Resource;
    imageUrl: string;
    dataCollectionSettings: IDataCollectionSetting;
    shareSettings: IShareSettings;
    Properties: Array<IProperty> = [];
}
