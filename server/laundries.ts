import {Laundries} from '../collections/laundries';
import {Meteor} from 'meteor/meteor';

Meteor.publish('laundries', function() {
  return Laundries.find();
});
