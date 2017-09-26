import { UserRoles } from "../enums/userRoles";
import { IUser } from "./user";
export interface IAdmin extends IUser {
    Role : UserRoles;
}