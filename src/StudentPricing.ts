import { Pricing } from "./Pricing";
import { MovieTicket } from "./MovieTicket";

export class StudentPricing extends Pricing {

    constructor() {
        super();
        super.premiumPrice = 2;
    }

    public calculatePrice(movieTickets: MovieTicket[]): number {
        let totalPrice = 0;
        for (let i = 1; i <= movieTickets.length; i++) {
            if (i % 2 != 0) {
                if (movieTickets[i - 1].isPremiumTicket()) {
                    totalPrice += this.premiumPrice;
                }
                totalPrice += movieTickets[i - 1].getPrice();
            }
        }
        totalPrice = movieTickets.length >= 6 ? totalPrice *= 0.9 : totalPrice;
        return totalPrice;
    }
}
