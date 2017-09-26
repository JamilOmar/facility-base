import { IPermissions } from "./permissions";
import { IField } from "./field";

export interface IFacilityList {
    name: string;
    description: string;
    permissions: Array<IPermissions>;
    isRootList: boolean;
    fields: Array<IField>;
    template: string;
}