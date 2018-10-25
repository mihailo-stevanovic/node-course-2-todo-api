const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// });

// Todo.findOneAndRemove
Todo.findByIdAndRemove('5bd20bf65bd512cf0e0817e7').then((todo) => {
    console.log(todo);
});