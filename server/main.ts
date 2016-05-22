import {loadLaundries} from './load-laundries.ts';
import {Meteor} from 'meteor/meteor';

Meteor.startup(loadLaundries);
