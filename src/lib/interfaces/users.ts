import * as Common from "../../Common/";
import * as Models from "../../models/";

export interface IUsers {
    //***************************************************************************************************************
    getAll(pagingToken: string, callback?: Common.Interfaces.ICallback): Models.Interfaces.IUser[];
    //***************************************************************************************************************
    getOne(itemID: number, callback?: Common.Interfaces.ICallback): Models.Interfaces.IUser;
    //***************************************************************************************************************
    getView(viewName: string, pagingToken: string, callback?: Common.Interfaces.ICallback): any;
    //***************************************************************************************************************
    getNewView(viewName: string, callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    getViews(callback?: Common.Interfaces.ICallback): string[]
    //***************************************************************************************************************
    getFields(callback?: Common.Interfaces.ICallback): Models.Interfaces.IField;
    //***************************************************************************************************************
    getNew(callback?: Common.Interfaces.ICallback): Models.Interfaces.IUser;
    //***************************************************************************************************************
    find(findMsg: any, callback?: Common.Interfaces.ICallback): Models.Interfaces.IUser[]
    //***************************************************************************************************************
    add(item: Models.Interfaces.IUser, callback?: Common.Interfaces.ICallback): number
    //***************************************************************************************************************
    update(item: Models.Interfaces.IUser, callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    remove(itemID: number, callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    addAll(items: Models.Interfaces.IUser[], callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    updateAll(items: Models.Interfaces.IUser[], callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    removeAll(items: Models.Interfaces.IUser[], callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    getSettings(callback?: Common.Interfaces.ICallback): Models.Interfaces.ISettings
    //***************************************************************************************************************
    updateSettings(settings: Models.Interfaces.ISettings, callback?: Common.Interfaces.ICallback): void
    //***************************************************************************************************************
    postAttachmentToItem(itemID: number, file: any, callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    getAttachmentsByItemID(itemID: number, callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    searchUsers(request: any, callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    ensureUser(username: string, callback?: Common.Interfaces.ICallback): any
}
