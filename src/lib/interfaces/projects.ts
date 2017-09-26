import * as Common from "../../Common/";
import * as Models from "../../models/";

export interface IProjects {
    //***************************************************************************************************************
    getAll(pagingToken: string, callback?: Common.Interfaces.ICallback): Models.Interfaces.IProject[];
    //***************************************************************************************************************
    getOne(itemID: number, callback?: Common.Interfaces.ICallback): Models.Interfaces.IProject;
    //***************************************************************************************************************
    getView(viewName: string, pagingToken: string, callback?: Common.Interfaces.ICallback): any;
    //***************************************************************************************************************
    getNewView(viewName: string, callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    getViews(callback?: Common.Interfaces.ICallback): string[]
    //***************************************************************************************************************
    getFields(callback?: Common.Interfaces.ICallback): Models.Interfaces.IField;
    //***************************************************************************************************************
    getNew(callback?: Common.Interfaces.ICallback): Models.Interfaces.IProject;
    //***************************************************************************************************************
    find(findMsg: any, callback?: Common.Interfaces.ICallback): Models.Interfaces.IProject[]
    //***************************************************************************************************************
    add(item: Models.Interfaces.IProject, callback?: Common.Interfaces.ICallback): number
    //***************************************************************************************************************
    update(item: Models.Interfaces.IProject, callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    remove(itemID: number, callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    addAll(items: Models.Interfaces.IProject[], callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    updateAll(items: Models.Interfaces.IProject[], callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    removeAll(items: Models.Interfaces.IProject[], callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    getSettings(callback?: Common.Interfaces.ICallback): Models.Interfaces.ISettings
    //***************************************************************************************************************
    updateSettings(settings: Models.Interfaces.ISettings, callback?: Common.Interfaces.ICallback): void
    //***************************************************************************************************************
    postAttachmentToItem(itemID: number, file: any, callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    getAttachmentsByItemID(itemID: number, callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    getMembers(itemID: number, callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    updateMembers(itemID: number, users: any, callback?: Common.Interfaces.ICallback): any
}
