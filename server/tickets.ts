import {Tickets} from '../collections/tickets';
import {Meteor} from 'meteor/meteor';
import {check} from 'meteor/check';

//TODO : check if the user is an admin

Meteor.publish('tickets', function() {
  return Tickets.find();
});

Meteor.publish('ticket', function(ticketId: string) {
  check(ticketId, String);
  return Tickets.find({ _id: ticketId});
});
