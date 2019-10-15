const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.port || 4000;
let jsonParser = bodyParser.json();
const MongoClient = require('mongodb').MongoClient;

app.use(express.static('public'));


/*
username: rmtar
pass: rmtar
mongodb+srv://rmtar:<password>@usersdb-zepwb.mongodb.net/test?retryWrites=true&w=majority
*/
const mongoClient = new MongoClient('mongodb+srv://rmtar:rmtar@usersdb-zepwb.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

mongoClient.connect(function(err, client) {

  const db = client.db('usersdb');
  const colliction = db.collection('users');
  let users = [{name: "Bob", age: 34} , {name: "Alice", age: 21}, {name: "Tom", age: 45}];

  colliction.insertMany(users, function(err, result) {
    if(err) {
      return console.log(err);
    }
    console.log(result.ops);
    client.close();
  });

  
});


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');  
});


app.listen(port, () => {
  console.log(`---server start on port ${port}---`);
});
