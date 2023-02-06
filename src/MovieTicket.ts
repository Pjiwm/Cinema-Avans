import { Movie } from "./Movie";
import { MovieScreening } from "./MovieScreening";

export class MovieTicket {
    private rowNr: number;
    private seatNr: number;
    private isPremium: boolean;
    private movieScreening: MovieScreening;

    constructor(movieScreening: MovieScreening, isPremiumReservation: boolean, seatRow: number, seatNr: number) {
        this.rowNr = seatRow;
        this.seatNr = seatNr;
        this.isPremium = isPremiumReservation;
        this.movieScreening = movieScreening;
    }

    public isPremiumTicket(): boolean {
        return this.isPremium;
    }

    public getPrice(): number {
        return this.movieScreening.getPricePerSeat();
    }

    public toString(): string {
        return this.rowNr + "-" + this.seatNr;
    }
    /**
     * Might be temporary
     */
    public getDate(): Date {
        return this.movieScreening.dateAndTime;
    }
}