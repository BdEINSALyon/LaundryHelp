import {Tickets} from './tickets.ts';
import {check, Match} from 'meteor/check';
import {Meteor} from 'meteor/meteor';


Meteor.methods({
  sendTicket: function (ticket: Ticket) {

    check(ticket, {
      date: Match.Any,
      laundry: String,
      machine: String,
      problem: String,
      comment: String,
      person: {
        firstName: String,
        lastName: String,
        room: String,
        phone: String,
        email: String
      }
    });
    ticket.date=new Date();

    Tickets.insert(ticket);
  }
});
