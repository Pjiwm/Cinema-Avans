import { MovieTicket } from "./MovieTicket";
import { TicketExportFormat } from "./TicketExportFormat";
import { writeFileSync, mkdirSync } from "fs";
import { Pricing } from "./Pricing";

export class Order {
    private orderNr: number;
    private movieTickets: MovieTicket[];
    private OrderPrice: Pricing;

    constructor(orderNr: number, orderPrice: Pricing) {
        this.orderNr = orderNr;
        this.movieTickets = [];
        this.OrderPrice = orderPrice;
    }

    public getOrder(): number {
        return this.orderNr;
    }

    public addSeatReservation(ticket: MovieTicket): void {
        this.movieTickets.push(ticket);
    }

    public calculatePrice(): number {
        return this.OrderPrice.calculatePrice(this.movieTickets);
    }

    public export(exportFormat: TicketExportFormat): void {
        mkdirSync("tickets", { recursive: true });

        switch (exportFormat) {
            case TicketExportFormat.JSON:
                writeFileSync(`tickets/${this.orderNr}.json`, JSON.stringify(this));
                break;
            case TicketExportFormat.PLAINTEXT:
                writeFileSync(`tickets/${this.orderNr}.txt`, this.toString());
                break;
        }
    }

    toString(): string {
        return "====================\n" +
        `Order: ${this.orderNr} Price: ${this.calculatePrice()} \nTickets: { ${this.movieTickets} }\n` +
        "====================";
    }
}