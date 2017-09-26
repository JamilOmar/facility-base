import { IPermissions } from "../interfaces/permissions";
import { UserRoles } from "../enums/userRoles";
import { PermissionLevels } from "../enums/permissionLevels";
export class Permissions implements IPermissions {
    type: string = UserRoles[UserRoles.User];
    level: string = PermissionLevels[PermissionLevels.PublicUserSiteRights];
}
