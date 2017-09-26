import { IGroupSettings } from "../interfaces/groupSettings";
import { IGroup } from "../interfaces/group";
export class GroupSettings implements IGroupSettings {
    User: IGroup;
    Staff: IGroup;
    Admin: IGroup;
    Public: IGroup;
}