import * as Common from "../../Common/";
import * as Models from "../../models/";

export interface IItems {
    //***************************************************************************************************************
    getAll(pagingToken: string, callback?: Common.Interfaces.ICallback): Models.Interfaces.IItem[];
    //***************************************************************************************************************
    getOne(itemID: number, callback?: Common.Interfaces.ICallback): Models.Interfaces.IItem;
    //***************************************************************************************************************
    getView(viewName: string, pagingToken: string, callback?: Common.Interfaces.ICallback): any;
    //***************************************************************************************************************
    getNewView(viewName: string, callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    getViews(callback?: Common.Interfaces.ICallback): string[]
    //***************************************************************************************************************
    getFields(callback?: Common.Interfaces.ICallback): Models.Interfaces.IField;
    //***************************************************************************************************************
    getNew(callback?: Common.Interfaces.ICallback): Models.Interfaces.IItem;
    //***************************************************************************************************************
    find(findMsg: any, callback?: Common.Interfaces.ICallback): Models.Interfaces.IItem[]
    add(item: Models.Interfaces.IItem, callback?: Common.Interfaces.ICallback): number
    //***************************************************************************************************************
    update(item: Models.Interfaces.IItem, callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    remove(itemID: number, callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    addAll(items:Models.Interfaces.IItem[],  callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    updateAll(items:Models.Interfaces.IItem[],  callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    removeAll(items:Models.Interfaces.IItem[],  callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    getSettings( callback?: Common.Interfaces.ICallback):Models.Interfaces.ISettings
    //***************************************************************************************************************
    updateSettings(settings:Models.Interfaces.ISettings,  callback?: Common.Interfaces.ICallback): void
    //***************************************************************************************************************
    upload(file:any, data:any,  callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    postAttachmentToItem(itemID:number, file:any,  callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    getAttachmentsByItemID(itemID:number,  callback?: Common.Interfaces.ICallback): any
    //***************************************************************************************************************
    exportToCSV( callback?: Common.Interfaces.ICallback): any
}



