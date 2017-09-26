
import { IUser } from "./user";
import { UserRoles } from "../enums/userRoles";
export interface IStaff extends IUser {
    Role: UserRoles;
}
