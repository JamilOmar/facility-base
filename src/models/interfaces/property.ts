export interface IProperty {
    choices: Array<string>;
    defaultChoice: string;
    internalName: string;
    isExcluded: boolean;
    isReadOnly: boolean;
    isRequired: boolean;
    isStaffOnly: boolean;
    label: string;
    lsInternal: boolean;
    type: string;
    value: any;
    guid: string;
}