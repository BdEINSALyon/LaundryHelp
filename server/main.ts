import {loadLaundries} from './load-laundries.ts';
import {Meteor} from 'meteor/meteor';
import './laundries.ts'
import './tickets.ts'
import '../collections/methods.ts'

Meteor.startup(loadLaundries);
