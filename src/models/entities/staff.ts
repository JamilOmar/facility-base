
import { IStaff } from "../interfaces/staff";
import { UserRoles } from "../enums/userRoles";
import { IUserRef } from "../interfaces/userRef";
import { IProperty } from "../interfaces/property";
export class Staff implements IStaff {
    id: string;
    loginName: string;
    userName: string;
    email: IUserRef;
    isRegistered: boolean = false;
    isActive: boolean = false;
    regDate: Date;
    displayName: string;
    lab: string;
    accNum: number = 0;
    role: string = UserRoles[UserRoles.User];
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
    Role: UserRoles = UserRoles.Staff;
}
