const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');

// Connection URL
const url = 'mongodb://127.0.0.1:27017';

// Database Name
const dbName = 'infosys_db';

// Create a new MongoClient
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
    // assert.equal(null, err);
    console.log("Connected successfully to server ");
    const db = client.db(dbName);

    // insert a multiple document
    // let employes = [
    //     {id:202, name: 'teja', age:24, location: 'GnT'},
    //     {id:203, name: 'sriram', age:22, location: 'LONDAN'},
    //     {id:204, name: 'founder', age:25, location: 'GEORGE'},
    //     {id:205, name: 'creative', age:23, location: 'TNL'},
    //
    // ];
    // db.collection('employe').insertMany(employes, function (err, r) {
    // read the data
    // db.collection('employe').find().toArray(function (err,docs) {
    // update the data
    // db.collection('employe').updateOne({id:205},{ $set: {
    //     age: 26, location: 'CANADA'
    //     }},
    // delete the record
    db.collection('employe').deleteOne({id:205},
        function(err, r){
        if (err) throw err;
        console.log("Record is deleted!");
    });

    client.close();
});
