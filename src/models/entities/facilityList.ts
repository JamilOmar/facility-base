import { IFacilityList } from "../interfaces/facilityList";
import { IPermissions } from "../interfaces/permissions";
import { IField } from "../interfaces/field";
export class FacilityList implements IFacilityList {
    name: string;
    description: string;
    permissions: Array<IPermissions>;
    isRootList: boolean;
    fields: Array<IField>;
    template: string;
}
