import { IItem } from "./item";
import { IProject } from "./project";
import { IItemRef } from "./itemRef";
export interface IProjectItem extends IItem {
    Parent: IItem;
    Project: IProject;
    ProjectRef: IItemRef;
    ParentRef: IItemRef;
}