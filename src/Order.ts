import { MovieTicket } from "./MovieTicket";
import { TicketExportFormat } from "./TicketExportFormat";

export class Order {
    private orderNr: number;
    private isStudentOrder: boolean;
    private movieTickets: MovieTicket[];

    constructor(orderNr: number, isStudentOrder: boolean) {
        this.orderNr = orderNr;
        this.isStudentOrder = isStudentOrder;
    }

    public getOrder(): number {
        return this.orderNr;
    }
    // TODO
    public addSeatReservation(x: void): void {
    }
    // TODO
    public calculatePrice(): number {
        return 0;
    }
    // TODO
    public export(exportFormat: TicketExportFormat): void {

    }
}