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

    // public calculatePrice(): number {
    //     let totalPrice = 0;
    //     let day = this.movieTickets[0].getDate().getDay();

    //     // Every second ticket free
    //     if (this.isStudentOrder) {
    //         totalPrice += this.paidTicketsPrice();
    //     } else if (day >= 1 && day <= 4) {
    //         totalPrice += this.paidTicketsPrice();
    //     } else {
    //         totalPrice = this.movieTickets.map(ticket => ticket.getPrice() + (ticket.isPremiumTicket() ? 3 : 0)).reduce((a, b) => a + b, 0);
    //         this.movieTickets.length >= 6 ? totalPrice *= 0.9 : totalPrice;
    //     }

    //     return totalPrice;
    // }

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

    // private paidTicketsPrice() {
    //     let premiumPrice = this.isStudentOrder ? 2 : 3;
    //     let totalPrice = 0;
    //     for (let i = 1; i <= this.movieTickets.length; i++) {
    //         if (i % 2 != 0) {
    //             if (this.movieTickets[i - 1].isPremiumTicket()) {
    //                 totalPrice += premiumPrice;
    //             }
    //             totalPrice += this.movieTickets[i - 1].getPrice();
    //         }
    //     }
    //     return totalPrice;
    // }

    toString(): string {
        return "====================\n" +
        `Order: ${this.orderNr} Price: ${this.calculatePrice()} \nTickets: { ${this.movieTickets} }\n` +
        "====================";
    }
}