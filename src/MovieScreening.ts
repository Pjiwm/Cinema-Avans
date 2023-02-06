import { Movie } from "./Movie";

export class MovieScreening {
    // Temporary
    public dateAndTime: Date;
    private pricePerSeat: number;
    private movie: Movie;

    constructor(movie: Movie, dateAndTime: Date, pricePerSeat: number) {
        this.dateAndTime = dateAndTime;
        this.pricePerSeat = pricePerSeat;
        this.movie = movie;
    }

    public getPricePerSeat(): number {
        return this.pricePerSeat;
    }

    public toString(): string {
        return `Date: ${this.dateAndTime} Price: ${this.pricePerSeat}`
    }
}