import {Tickets} from '../collections/tickets';
import {Meteor} from 'meteor/meteor';

Meteor.publish('tickets', function() {
  return Tickets.find();
});
