import { IProjectEvent } from "./projectEvent";
import { IResource } from "./resource";
import { IItemRef } from "./itemRef";

export interface IFacilityEvent extends IProjectEvent {
    Location: string;
    MaxAttendees: number;
    Resources: Array<IResource>;
    ResourceRefs: Array<IItemRef>;
}