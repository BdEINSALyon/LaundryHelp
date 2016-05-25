import { Component } from '@angular/core';
import { Tickets }     from '../../../../collections/tickets';
import { Mongo }       from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';

@Component({
  selector: 'ticketsList',
  templateUrl: '/client/imports/manager/ticketsList/ticketsList.html'
})
export class TicketsList extends MeteorComponent {

  tickets: Mongo.Cursor<Tickets>;
  selectedTicket: Ticket;

  constructor() {
    super();

    this.subscribe('tickets', () => {
      this.tickets = Tickets.find({}, {sort: {date: -1}});
    }, true);

    document.title = "BDE - Support des laveries";
  }

  onSelectTicket(ticket:Ticket) {
    this.selectedTicket=ticket;
    console.log(ticket.date);
  }
}
