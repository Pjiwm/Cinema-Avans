import { MovieTicket } from "./MovieTicket";

export abstract class Pricing {
    premiumPrice: number;

    constructor() {
        this.premiumPrice = 3;
    }

    public calculatePrice(tickets: MovieTicket[]): number {
        let totalPrice = 0;

        let day = tickets[0].getDate().getDay();

        if (day >= 1 && day <= 4) {
            for (let i = 1; i <= tickets.length; i++) {
                if (i % 2 != 0) {
                    if (tickets[i - 1].isPremiumTicket()) {
                        totalPrice += this.premiumPrice;
                    }
                    totalPrice += tickets[i - 1].getPrice();
                }
            }
        } else {
            totalPrice = tickets
                .map(ticket => ticket.getPrice() + (ticket.isPremiumTicket() ? this.premiumPrice : 0))
                .reduce((a, b) => a + b, 0);
            totalPrice = tickets.length >= 6 ? totalPrice *= 0.9 : totalPrice;
        }

        return totalPrice;
    }
}