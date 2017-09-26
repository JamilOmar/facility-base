import { IUserRef } from "./UserRef";
import { IProperty } from "./Property";
export interface IUser {
    id: string;
    loginName: string;
    userName: string;
    email: IUserRef;
    isRegistered: boolean;
    isActive: boolean;
    regDate: Date;
    displayName: string;
    lab: string;
    accNum: number;
    role: string;
    pi: IUserRef;
    imageUrl: string;
    can: string;
    canDescription: string;
    jobTitle: string;
    workPhone: string;
    cellPhone: string;
    faxNumber: string;
    building: string;
    msc: string;
    userLevel: string;
    Properties: Array<IProperty>;
}