import { IField } from "../interfaces/field";
export class Field implements IField {
    label: string;
    internalName: string;
    fieldType: number;
    defaultValue: string;
    choices: Array<string>;
    required: boolean;
    enforceUniqueValues: boolean;
}
