// const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', {
    useNewUrlParser: true
}, (error, client) => {
    if(error) {
        return console.log('Unable to connect to MongoDB server.');     
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    // db.collection('Todos').find({
    //     _id: new ObjectID('5bcdd0d85bd512cf0e07f29e')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 4));
    // }, (err) =>{
    //     console.log('Error:', err);
    // });

    // db.collection('Todos').find().count().then((count) => {
    //     console.log('Todos', count); 
    // }, (err) => {
    //     console.log('Error:', err);
    // });

    db.collection('Users')
        .find({name: 'Mihailo'})
        .toArray().then((users) => {
            console.log('Users');
            console.log(JSON.stringify(users, undefined, 2));
        }, (err) => {
            console.log(err);
    });


    // client.close();
});