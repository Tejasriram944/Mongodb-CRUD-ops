const MongoClient = require('mongodb').MongoClient;

const uri = "mongodb+srv://tejasriram:tejasriram@spa-pro-gno71.mongodb.net/test?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true });

const dbName = 'infosys_db';

client.connect(err => {

    const db = client.db(dbName);

    // const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    console.log('connected succesfully');
    // insert records
    // let employes = [
    //     {id:201, name: 'prabhas', age:36, location: 'Bang'},
    //     {id:202, name: 'teja', age:24, location: 'GnT'},
    //     {id:203, name: 'sriram', age:22, location: 'LONDAN'},
    //     {id:204, name: 'founder', age:25, location: 'GEORGE'},
    //     {id:205, name: 'creative', age:23, location: 'TNL'},
    //
    // ];
    // db.collection('employe').insertMany(employes, function (err, r) {
    //     if(err) throw err;
    //     console.log('Many records are inserted');
    // });
    // read records
    // db.collection('employe').find().toArray(function (err,docs) {
    //     if(err) throw err;
    //     console.log(docs);
    // });
    // update records
    // db.collection('employe').updateOne({id:205},{ $set: {
    //     age: 26, location: 'CANADA'
    // }},
    //     function(err,r){
    //     if(err) throw err;
    //     console.log('records are updated');
    //     });
    // delete the record
    db.collection('employe').deleteOne({id:205},
        function(err, r){
            if (err) throw err;
            console.log("Record is deleted!");
        });
    client.close();
});