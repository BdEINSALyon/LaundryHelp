import {loadLaundries} from './load-laundries.ts';
import {initialTicket} from './initial-ticket.ts';
import {Meteor} from 'meteor/meteor';
import './laundries.ts'
import './tickets.ts'
import '../collections/methods.ts'

Meteor.startup(loadLaundries);
Meteor.startup(initialTicket);
