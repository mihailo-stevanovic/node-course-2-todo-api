const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5bd1c909228aa21c081f5b5f11';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('ID not found.')
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.findById('5bd0ec8fe8ba2c25fcb39875')
    .then((user) => {
        if(!user){
            return console.log('ID not found.');
        }
        console.log('User', user);
    }).catch((e) => console.log(e));