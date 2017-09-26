import * as Common from "../../Common/";
import * as Models from "../../models/";
/**
 * Interface for Facility's methods.
 * @interface
 */
export interface IFacility {
    /**
    * Method for return the facility settings.
    *  @return {Object} IFacilitySettings - Facility Settings.
    * @param {?Object} callback - Callback for return the value if is defined.
    */
    settings(callback?: Common.Interfaces.ICallback): Models.Interfaces.IFacilitySettings;
    /**
    * Method for saving the facility settings.
    *  @return {Object} IFacilitySettings - Facility Settings.
    * @param {Object} settings - An object of type Models.Interfaces.IFacilitySettings with the facility settings for change.
    * @param {?Object} callback - Callback for return the value if is defined.
    */
    saveSettings(settings: Models.Interfaces.IFacilitySettings, callback?: Common.Interfaces.ICallback): Models.Interfaces.IFacilitySettings
    /**
    * Method for saving the LabWebConfig.
    * @deprecated use saveSettings instead of this.
    * @return {Object} ILabWebConfig - LabWebConfig.
    * @param {Object} labWebConfig - An object of type Models.Interfaces.ILabWebConfig with the LabWebConfig values for change.
    * @param {?Object} callback - Callback for return the value if is defined.
    */    
    saveWebConfig(labWebConfig: Models.Interfaces.ILabWebConfig, callback?: Common.Interfaces.ICallback): Models.Interfaces.ILabWebConfig;  
    /**
    * Method for return the LabWebConfig.
    * @deprecated use settings instead of this.
    * @return {Object} ILabWebConfig - LabWebConfig.
    * @param {?Object} callback - Callback for return the value if is defined.
    */    
    config(callback?: Common.Interfaces.ICallback): Models.Interfaces.ILabWebConfig;
    /**
    * Method for return all the facility configurations.
    * @return {Object} any - All the Facility configurations.
    * @param {?Object} callback - Callback for return the value if is defined.
    */    
    open(callback?: Common.Interfaces.ICallback): any;
    /**
    * Method for return the current user.
    * @return {Object} IUser - The current user.
    * @param {?Object} callback - Callback for return the value if is defined.
    */    
    currentUser(callback?: Common.Interfaces.ICallback): Models.Interfaces.IUser;
    /**
    * Method for return the staff of the current facility.
    * @return {Object} IStaff - Staff list.
    * @param {?Object} callback - Callback for return the value if is defined.
    */      
    staff(callback?: Common.Interfaces.ICallback): Models.Interfaces.IStaff[];
    /**
    * Method for return the admins of the current facility.
    * @return {Object} IAdmin - Admins list.
    * @param {?Object} callback - Callback for return the value if is defined.
    */   
    admins(callback?: Common.Interfaces.ICallback): Models.Interfaces.IAdmin[];
   /**
    * Method for creating a facility.
    * @return {Object} IFacilityWeb - Facility settings.
    * @param {Object} IFacilityWeb - Facility settings for creation.
    * @param {?Object} callback - Callback for return the value if is defined.
    */       
    createFacility(facilitySite: Models.Interfaces.IFacilityWeb, callback?: Common.Interfaces.ICallback): Models.Interfaces.IFacilityWeb
    /**
    * Method for deleting a facility.
    * @return {boolean} Boolean - True/False if the facility was deleted.
    * @param {string} name - Facility name.
    * @param {?Object} callback - Callback for return the value if is defined.
    */     
    deleteFacility(name: string, callback?: Common.Interfaces.ICallback): Boolean

}







