
import { IUser } from "./user";
import { UserRoles } from "../enums/userRoles";
export interface IPublicUser extends IUser {
    Role: UserRoles;
}
