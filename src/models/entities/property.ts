
import { IProperty } from "../interfaces/property";
export class Property implements IProperty {
    choices: Array<string> = [];
    defaultChoice: string;
    internalName: string;
    isExcluded: boolean = false;
    isReadOnly: boolean = false;
    isRequired: boolean = false;
    isStaffOnly: boolean = false;
    label: string;
    lsInternal: boolean = false;
    type: string;
    value: any;
    guid: string;
}
