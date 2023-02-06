import { Order } from "../src/Order";
import { Movie } from "../src/Movie";
import { MovieScreening } from "../src/MovieScreening";
import { MovieTicket } from "../src/MovieTicket";
import { TicketExportFormat } from "../src/TicketExportFormat";
import { readFileSync } from "fs";

describe('Order tickets', () => {
    let movie = new Movie("The Matrix");

    it('Should give total price of 2 students', () => {
        let movieScreening = new MovieScreening(movie, new Date(), 10);
        let studentOrder = new Order(1, true);
        studentOrder.addSeatReservation(new MovieTicket(movieScreening, false, 1, 1));
        studentOrder.addSeatReservation(new MovieTicket(movieScreening, false, 1, 2));
        expect(studentOrder.calculatePrice()).toBe(10)
    })

    it('Should give total price of 3 students of which one is premium', () => {
        let movieScreening = new MovieScreening(movie, new Date(), 10);
        let studentOrder = new Order(1, true);
        studentOrder.addSeatReservation(new MovieTicket(movieScreening, false, 1, 1));
        studentOrder.addSeatReservation(new MovieTicket(movieScreening, false, 1, 2));
        studentOrder.addSeatReservation(new MovieTicket(movieScreening, true, 1, 3));
        expect(studentOrder.calculatePrice()).toBe(22)
    })

    it('Should give the total price of 3 non students on a Monday', () => {
        let movieScreening = new MovieScreening(movie, new Date("2023-02-6"), 10);
        let normalOrder = new Order(1, false);
        normalOrder.addSeatReservation(new MovieTicket(movieScreening, false, 1, 1));
        normalOrder.addSeatReservation(new MovieTicket(movieScreening, true, 1, 2));
        normalOrder.addSeatReservation(new MovieTicket(movieScreening, true, 1, 2));
        expect(normalOrder.calculatePrice()).toBe(23)
    })

    it('Should give the total price of 2 non students on a Sunday', () => {
        let movieScreening = new MovieScreening(movie, new Date("2023-02-5"), 10);
        let normalOrder = new Order(1, false);
        normalOrder.addSeatReservation(new MovieTicket(movieScreening, false, 1, 1));
        normalOrder.addSeatReservation(new MovieTicket(movieScreening, true, 1, 2));
        normalOrder.addSeatReservation(new MovieTicket(movieScreening, true, 1, 2));
        expect(normalOrder.calculatePrice()).toBe(36)
    })


    it('Should give the total price of 7 non students on a Sunday', () => {
        let movieScreening = new MovieScreening(movie, new Date("2023-02-5"), 10);
        let normalOrder = new Order(1, false);
        normalOrder.addSeatReservation(new MovieTicket(movieScreening, false, 1, 1));
        normalOrder.addSeatReservation(new MovieTicket(movieScreening, false, 1, 2));
        normalOrder.addSeatReservation(new MovieTicket(movieScreening, false, 1, 3));
        normalOrder.addSeatReservation(new MovieTicket(movieScreening, false, 1, 4));
        normalOrder.addSeatReservation(new MovieTicket(movieScreening, false, 1, 5));
        normalOrder.addSeatReservation(new MovieTicket(movieScreening, false, 1, 6));
        normalOrder.addSeatReservation(new MovieTicket(movieScreening, false, 1, 7));
        expect(normalOrder.calculatePrice()).toBe(63)
    })
});


describe('Export Tickets', () => {
    let movie = new Movie("The Matrix");
    let movieScreening = new MovieScreening(movie, new Date(), 10);
    let order = new Order(6969, true);

    it('Should export student tickets in plaintext', () => {
        order.addSeatReservation(new MovieTicket(movieScreening, false, 1, 1));
        order.addSeatReservation(new MovieTicket(movieScreening, false, 1, 2));
        order.export(TicketExportFormat.PLAINTEXT)
        let contents = readFileSync("tickets/6969.txt", "utf8");
        expect(contents.startsWith("===")).toBe(true)
    })

    it('Should export student tickets in JSON', () => {
        order.addSeatReservation(new MovieTicket(movieScreening, false, 1, 1));
        order.addSeatReservation(new MovieTicket(movieScreening, false, 1, 2));
        order.export(TicketExportFormat.JSON)
        let contents = readFileSync("tickets/6969.json", "utf8");
        expect(contents.startsWith("{")).toBe(true)
    })
})