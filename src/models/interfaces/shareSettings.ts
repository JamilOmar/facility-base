export interface IShareSettings {
    advanceReserve: number;
    advanceReserveUnit: string;
    reservationListName: string;
    reservationDeadline: number;
    cancellationDeadline: number;
    minSlotSize: number;
    maxSlotSize: number;
    displaySlotSize: number;
    regularStartTime: Date;
    regularEndTime: Date;
    defaultCost: number;
    options: string;
    operator: string;
    autoApprove: boolean;
    allowUserReservations: boolean;
    allowWeekends: boolean;
    showAvailableSlots: boolean;
    showReservationsToUsers: boolean;
    minimumUserLevel: number;
}
