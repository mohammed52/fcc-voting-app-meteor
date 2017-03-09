import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
// import { Factory } from 'meteor/factory';
import faker from 'faker';
import { Meteor } from 'meteor/meteor';

class PollsCollection extends Mongo.Collection {
  insert(doc, callback) {
    const ourDoc = doc;
    ourDoc.createdAt = ourDoc.createdAt || new Date();
    const result = super.insert(ourDoc, callback);
    // incompleteCountDenormalizer.afterInsertTodo(ourDoc);
    return result;
  }
  update(selector, modifier) {
    const result = super.update(selector, modifier);
    // incompleteCountDenormalizer.afterUpdateTodo(selector, modifier);
    return result;
  }
  remove(selector) {
    const polls = this.find(selector).fetch();
    const result = super.remove(selector);
    // incompleteCountDenormalizer.afterRemoveTodos(todos);
    return result;
  }
}

Meteor.call("logStringToConsole", "test");

export const Polls = new PollsCollection('Polls');

// Polls.deny({
//   insert() { return true; },
//   update() { return true; },
//   remove() { return true; },
// });

// Polls.schema = new SimpleSchema({
//   question: {
//     type: String,
//     max: 100,
//   },
//   createdAt: {
//     type: Date,
//     denyUpdate: true,
//   },
// });

// Polls.attachSchema(Polls.schema);

// Polls.publicFields = {
//   question: 1,
//   createdAt: 1,
// };

// Factory.define('polls', Polls, {
//   userId: () => Factory.get('user'),
//   text: () => faker.lorem.sentence(),
//   createdAt: () => new Date(),
// });


// Todos.helpers({
//   list() {
//     return Lists.findOne(this.listId);
//   },
//   editableBy(userId) {
//     return this.list().editableBy(userId);
//   },
// });