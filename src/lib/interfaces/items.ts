import * as Common from "../../Common/";
import * as Models from "../../models/";
/**
 * Interface for Item's methods.
 * @interface
 */
export interface IItems {
    /**
    * Method for getting all Items.
    * @return {Object} IItem[] - Array of Items.
    * @param {Object} pagingToken - Paging Token.
    * @param {?Object} callback - Callback for return the value if is defined.
    */  
    getAll(pagingToken: any, callback?: Common.Interfaces.ICallback): Models.Interfaces.IItem[];
   /**
    * Method for getting an Item.
    * @return {Object} IItem  - Item.
    * @param {number} itemID - Item ID.
    * @param {?Object} callback - Callback for return the value if is defined.
    */  
    getOne(itemID: number, callback?: Common.Interfaces.ICallback): Models.Interfaces.IItem;
    /**
    * Method for getting a View.
    * @return {Object} any - a View.
    * @param {string} viewName - View name.
    * @param {Object} pagingToken - Paging Token.
    * @param {?Object} callback - Callback for return the value if is defined.
    */  
    getView(viewName: string, pagingToken: any, callback?: Common.Interfaces.ICallback): any;
    /**
    * Method for getting a new View.
    * @return {Object} any - a View.
    * @param {string} viewName - View name.
    * @param {Object} pagingToken - Paging Token.
    * @param {?Object} callback - Callback for return the value if is defined.
    */  
    getNewView(viewName: string, callback?: Common.Interfaces.ICallback): any
    /**
    * Method for getting a list of names of Views.
    * @return {Object} string[] - View's names.
    * @param {?Object} callback - Callback for return the value if is defined.
    */  
    getViews(callback?: Common.Interfaces.ICallback): string[]
  /**
    * Method for getting a list of Fields.
    * @return {Object} IField[] - Fields.
    * @param {?Object} callback - Callback for return the value if is defined.
    */  
    getFields(callback?: Common.Interfaces.ICallback): Models.Interfaces.IField[];
    /**
    * Method for getting an Item structure.
    * @return {Object} IItem - Item's structure.
    * @param {?Object} callback - Callback for return the value if is defined.
    */  
    getNew(callback?: Common.Interfaces.ICallback): Models.Interfaces.IItem;
    /**
    * Method for searching items.
    * @return {Object} IItem[] - Items.
    * @param {Object} findMsg - Search criteria.
    * @param {?Object} callback - Callback for return the value if is defined.
    */ 
    find(findMsg: any, callback?: Common.Interfaces.ICallback): Models.Interfaces.IItem[]
     /**
    * Method for adding an item.
    * @return {number} ID - Item ID.
    * @param {Object} item - Item.
    * @param {?Object} callback - Callback for return the value if is defined.
    */ 
    add(item: Models.Interfaces.IItem, callback?: Common.Interfaces.ICallback): number
    /**
    * Method for updating an item.
    * @param {Object} item - Item.
    * @param {?Object} callback - Callback for return the value if is defined.
    */ 
    update(item: Models.Interfaces.IItem, callback?: Common.Interfaces.ICallback): void
    /**
    * Method for removing an item.
    * @param {Object} item - Item.
    * @param {?Object} callback - Callback for return the value if is defined.
    */ 
    remove(itemID: number, callback?: Common.Interfaces.ICallback): void
    /**
    * Method for adding a list of items.
    * @return {Object} any - Result's object.
    * @param {Object} items - List of items.
    * @param {?Object} callback - Callback for return the value if is defined.
    */ 
    addAll(items:Models.Interfaces.IItem[],  callback?: Common.Interfaces.ICallback): any
    /**
    * Method for updating a list of items.
    * @return {Object} any - Result's object.
    * @param {Object} items - List of items.
    * @param {?Object} callback - Callback for return the value if is defined.
    */ 
    updateAll(items:Models.Interfaces.IItem[],  callback?: Common.Interfaces.ICallback): any
    /**
    * Method for removing a list of items.
    * @return {Object} any - Result's object.
    * @param {Object} items - List of items.
    * @param {?Object} callback - Callback for return the value if is defined.
    */ 
    removeAll(items:Models.Interfaces.IItem[],  callback?: Common.Interfaces.ICallback): any
   /**
    * Method for getting the Items' settings.
    * @return {Object} ISettings -Items' settings.
    * @param {?Object} callback - Callback for return the value if is defined.
    */ 
    getSettings( callback?: Common.Interfaces.ICallback):Models.Interfaces.ISettings
     /**
    * Method for saving the Items' settings.
    * @param {Object} settings - Settings.
    * @param {?Object} callback - Callback for return the value if is defined.
    */ 
    updateSettings(settings:Models.Interfaces.ISettings,  callback?: Common.Interfaces.ICallback): void
   /**
    * Method for uploading a file.
    * @return {Object} any - Result's object.
    * @param {Object} file - File.
    * @param {Object} data - File's data.
    * @param {?Object} callback - Callback for return the value if is defined.
    */ 
    upload(file:any, data:any,  callback?: Common.Interfaces.ICallback): any
    /**
    * Method for attaching a file.
    * @return {Object} any - Result's object.
    * @param {number} itemID - Item ID.
    * @param {Object} file - File.
    * @param {?Object} callback - Callback for return the value if is defined.
    */ 
    postAttachmentToItem(itemID:number, file:any,  callback?: Common.Interfaces.ICallback): any
     /**
    * Method for getting an attachment.
    * @return {Object} any - Result's object.
    * @param {number} itemID - Item ID.
    * @param {?Object} callback - Callback for return the value if is defined.
    */ 
    getAttachmentsByItemID(itemID:number,  callback?: Common.Interfaces.ICallback): any
    /**
    * Method for exporting the Items as CSV.
    * @return {Object} any - Result's object.
    * @param {?Object} callback - Callback for return the value if is defined.
    */ 
    exportToCSV( callback?: Common.Interfaces.ICallback): any
}



