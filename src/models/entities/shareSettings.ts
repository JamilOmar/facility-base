import { IShareSettings } from "../interfaces/shareSettings";
export class ShareSettings implements IShareSettings {
    advanceReserve: number = 0;
    advanceReserveUnit: string;
    reservationListName: string;
    reservationDeadline: number = 0.0;
    cancellationDeadline: number = 0;
    minSlotSize: number = 0;
    maxSlotSize: number = 0;
    displaySlotSize: number = 0;
    regularStartTime: Date;
    regularEndTime: Date;
    defaultCost: number = 0.0;
    options: string;
    operator: string;
    autoApprove: boolean = false;
    allowUserReservations: boolean = false;
    allowWeekends: boolean = false;
    showAvailableSlots: boolean = false;
    showReservationsToUsers: boolean = false;
    minimumUserLevel: number = 0;
}
