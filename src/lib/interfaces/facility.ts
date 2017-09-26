import * as Common from "../../Common/";
import * as Models from "../../models/";

export interface IFacility {
    settings(callback?: Common.Interfaces.ICallback): Models.Interfaces.IFacilitySettings;
    //***************************************************************************************************************
    saveSettings(settings: Models.Interfaces.IFacilitySettings, callback?: Common.Interfaces.ICallback): Models.Interfaces.IFacilitySettings
    //***************************************************************************************************************
    saveWebConfig(webConfig: Models.Interfaces.ILabWebConfig, callback?: Common.Interfaces.ICallback): any;
    //***************************************************************************************************************
    config(callback?: Common.Interfaces.ICallback): Models.Interfaces.ILabWebConfig;
    //***************************************************************************************************************
    open(callback?: Common.Interfaces.ICallback): any;
    //***************************************************************************************************************
    currentUser(callback?: Common.Interfaces.ICallback): Models.Interfaces.IUser;
    //***************************************************************************************************************
    staff(callback?: Common.Interfaces.ICallback): Models.Interfaces.IStaff[];
    //***************************************************************************************************************
    admins(callback?: Common.Interfaces.ICallback): Models.Interfaces.IAdmin[];
    //***************************************************************************************************************
    createFacility(facilitySite: Models.Interfaces.IFacilityWeb, callback?: Common.Interfaces.ICallback): Models.Interfaces.IFacilityWeb
    //***************************************************************************************************************
    deleteFacility(name: string, callback?: Common.Interfaces.ICallback): Boolean

}







