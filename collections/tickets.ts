import {Mongo} from 'meteor/mongo';

export let Tickets = new Mongo.Collection<Ticket>('tickets');
