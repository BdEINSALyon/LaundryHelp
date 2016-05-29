import { Component } from '@angular/core';
import { Tickets }     from '../../../../collections/tickets';
import { Mongo }       from 'meteor/mongo';
import { MeteorComponent } from 'angular2-meteor';
import { RouterLink }  from '@angular/router-deprecated';

@Component({
  selector: 'ticketsList',
  templateUrl: '/client/imports/manager/ticketsList/ticketsList.html',
  directives: [RouterLink]
})
export class TicketsList extends MeteorComponent {

  tickets: Mongo.Cursor<Ticket>;
  selectedTicket: Ticket;

  constructor() {
    super();

    this.subscribe('tickets', () => {
      this.tickets = Tickets.find({}, {sort: {date: -1}});
    }, true);

    document.title = "Manager - BDE - Support des laveries";
  }

  onSelectTicket(ticket:Ticket) {
    this.selectedTicket=ticket;
  }
}
