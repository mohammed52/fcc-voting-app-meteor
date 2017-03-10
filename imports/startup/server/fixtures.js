import { Meteor } from 'meteor/meteor';
import { Polls } from '../../api/polls/polls.js';
// import { Lists } from '../../api/lists/lists.js';
// import { Todos } from '../../api/todos/todos.js';

// if the database is empty on server start, 
// create some sample data.
Meteor.startup(() => {
  Meteor.call("logStringToConsole", "test-2");
  Polls.remove({});
  // Lists.remove({});
  Polls.insert({
        name: "hello",
        details: "hello2",
      });

  // if (Lists.find().count() === 0) {
  //   const data = [
  //     {
  //       name: 'Meteor Principles',
  //       items: [
  //         'Data on the Wire',
  //         'One Language',
  //         'Database Everywhere',
  //         'Latency Compensation',
  //         'Full Stack Reactivity',
  //         'Embrace the Ecosystem',
  //         'Simplicity Equals Productivity',
  //       ],
  //     },
  //     {
  //       name: 'Languages',
  //       items: [
  //         'Lisp',
  //         'C',
  //         'C++',
  //         'Python',
  //         'Ruby',
  //         'JavaScript',
  //         'Scala',
  //         'Erlang',
  //         '6502 Assembly',
  //       ],
  //     },
  //     {
  //       name: 'Favorite Scientists',
  //       items: [
  //         'Ada Lovelace',
  //         'Grace Hopper',
  //         'Marie Curie',
  //         'Carl Friedrich Gauss',
  //         'Nikola Tesla',
  //         'Claude Shannon',
  //       ],
  //     },
  //   ];

  //   let timestamp = (new Date()).getTime();

  //   data.forEach((list) => {
  //     const listId = Lists.insert({
  //       name: list.name,
  //       incompleteCount: list.items.length,
  //     });

  //     list.items.forEach((text) => {
  //       Todos.insert({
  //         listId,
  //         text,
  //         createdAt: new Date(timestamp),
  //         rank: Math.floor(Math.random() * 11),
  //         // rank: 1,
  //       });

  //       timestamp += 1; // ensure unique timestamp.
  //     });
  //   });
  // }
});
