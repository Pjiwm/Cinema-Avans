import { Movie } from "./Movie";
import { MovieScreening } from "./MovieScreening";

export class MovieTicket {
    rowNr: number;
    seatNr: number;
    isPremium: boolean;
    movie: Movie;

    constructor(movieScreening: MovieScreening, isPremiumReservation: boolean, seatRow: number, seatNr: number) {
        this.rowNr = seatRow;
        this.seatNr = seatNr;
        this.isPremium = isPremiumReservation;
    }

    public isPremiumTicket(): boolean {
        return this.isPremium;
    }
    // TODO
    public getPrice(): number {
        return 0;
    }

    public toString(): string {
        return "Row: " + this.rowNr + " Seat: " + this.seatNr;
    }
}