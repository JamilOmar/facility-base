import { IAttachment } from  "../interfaces/attachment";
export class Attachment implements IAttachment {
    fileName: string;
    serverRelativeUrl: string;
}
