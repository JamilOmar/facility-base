import { IUser } from "./user";
import { IUserRef } from "./userRef";
import { IProperty } from "./property";
export interface IItem {
    ID: string;
    LsID: string;
    Title: string;
    Status: string;
    DataUrl: String;
    BackupDataUrl: string;
    LocalDataUrl: string;
    SubmittedDate: Date;
    CreatedDate: Date;
    Lab: string;
    AccNum: string;
    OwnerRef: IUserRef;
    Owner: IUser;
    PiRef: IUserRef;
    Pi: IUser;
    AssignedToRef: IUserRef;
    AssignedTo: IUser;
    ImageUrl: string;
    Properties: Array<IProperty>;
}
