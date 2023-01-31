import { MovieScreening } from "./MovieScreening";

export class Movie {
    private title: string;

    constructor(title: string) {
        this.title = title
    }

    public addScreening(screening: MovieScreening): void {

    }

    public toString(): String {
        return this.title;
    }
}