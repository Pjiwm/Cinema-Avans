import { Order } from "./Order";
import { Movie } from "./Movie";
import { MovieScreening } from "./MovieScreening";
import { MovieTicket } from "./MovieTicket";
import { TicketExportFormat } from "./TicketExportFormat";

let movie = new Movie("The Matrix");
let movieScreening = new MovieScreening(movie, new Date(), 10);

let studentOrder = new Order(1, true);
let normalOrder = new Order(2, false);

let studentTicket = new MovieTicket(movieScreening, false, 1, 1);
let premiumStudentTicket = new MovieTicket(movieScreening, true, 1, 2);
let normalTicket = new MovieTicket(movieScreening, false, 1, 3);
let premiumNormalTicket = new MovieTicket(movieScreening, true, 1, 4);

studentOrder.addSeatReservation(studentTicket);
studentOrder.addSeatReservation(premiumStudentTicket);
normalOrder.addSeatReservation(normalTicket);
normalOrder.addSeatReservation(premiumNormalTicket);

studentOrder.export(TicketExportFormat.PLAINTEXT);
normalOrder.export(TicketExportFormat.PLAINTEXT);