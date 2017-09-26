import { IProjectItem } from "./projectItem";
export interface IProjectEvent extends IProjectItem {
    StartTime: Date;
    EndTime: Date;
}