import { IListDefinition } from "../interfaces/ListDefinition";
import { IFacilityList } from "../interfaces/facilityList";

    export class ListDefinition implements IListDefinition {
        lists: Array<IFacilityList>  ;
    }
