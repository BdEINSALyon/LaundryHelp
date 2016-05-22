import {Mongo} from 'meteor/mongo';

export let Laundries = new Mongo.Collection<Laundry>('laundries');
