import { IFacilityWeb } from "../interfaces/facilityWeb";
export class FacilityWeb implements IFacilityWeb {
    guid?: string;
    name: string;
    path?: string;
    description: string;
    relativeUrl?: string;
    isRootWeb?: boolean;

}