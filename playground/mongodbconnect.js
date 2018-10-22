// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

// Object destructuring
// var user = {name: 'Mihailo', age: 27};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to MongoDB server.');     
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (error, results) => {
    //     if(error) {
    //         return console.log('Unable to insert todo', error);
    //     }

    //     console.log(JSON.stringify(results.ops, undefined, 4));
    // });

    // db.collection('Users').insertOne({
    //     // _id: 123,
    //     name: 'Mihailo',
    //     age: 27,
    //     location: 'Belgrade'
    // }, (error, result) => {
    //     if(error) {
    //         return console.log('Unable to insert user', error);
    //     }

    //     console.log('User successfully created', result.ops[0]._id.getTimestamp());
    // });

    client.close();
});