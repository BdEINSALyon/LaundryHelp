import { Tickets } from '../collections/tickets.ts';

export function initialTicket() {
  if (Tickets.find().count() === 0) {
      Tickets.insert({
        date: new Date(),
        laundry: "/",
        machine: "/",
        problem: "Bienvenue sur l'application de support des laveries",
        comment: "",
        person: {
          email: "contact@bde-insa-lyon.fr"
        },
        nbTokensToGive: 1
      });
  }
}
