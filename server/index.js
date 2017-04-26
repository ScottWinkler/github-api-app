const express = require('express');
const path = require('path');
const bodyParser=require('body-parser');
var MongoClient = require('mongodb').MongoClient
const assert=require('assert');
const app = express();
const PORT = process.env.PORT || 5000;
var url = 'mongodb://root:1234@ds121091.mlab.com:21091/heroku_10j3swtz';
// Priority serve any static files.
app.use(express.static(path.resolve(__dirname, '../react-ui/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// Answer API requests.
app.post('/db',function(req,res){
  id_user = req.body.id_user;
  var searched = req.body.searched;
  var cur_date=new Date();
  MongoClient.connect(url, function (err, db) {
    assert.equal(null, err);
    // Insert a single document
    var searches = db.collection('searches');
    searches.insertOne({
      id_user,
      searched,
      date: cur_date
    }, {
        w: 'majority'
        , wtimeout: 10000
        , serializeFunctions: true
      }, function (err, r) {
        assert.equal(null, err);
        assert.equal(1, r.insertedCount);
      });

    if (searches.find(
      {
       // $and: [
         // { "searched": searched }, { "id_user": { $ne: id_user }, }
        //]
      }
    )) { res.send("FOUND") }
    db.close();
})})
// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
