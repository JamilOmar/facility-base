import { IProjectEvent } from "./projectEvent";
import { IResource } from "./resource";
import { IItemRef } from "./itemRef";
export interface IReservation extends IProjectEvent {
    ActualStart: Date;
    ActualEnd: Date;
    Options: string;
    Functions: string;
    Resource: IResource;
    ResourceRef: IItemRef;
}
