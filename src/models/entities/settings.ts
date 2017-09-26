import { ISettings } from "../interfaces/settings";
export class Settings implements ISettings {
    name: string;
    value: string;
    type: string;
}
