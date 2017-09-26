import { IItem } from "../interfaces/item";
import { IUser } from "../interfaces/user";
import { IUserRef } from "../interfaces/userRef";
import { IProperty } from "../interfaces/property";
export class Item implements IItem {
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
