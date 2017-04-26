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
//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Answer API requests.


app.post('/db', function (req, res) {
  console.log(req.body);
  var id_user = req.body.id_user;
  var searched = req.body.searched;
  var cur_date = new Date();
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
    var msg = "UNIQUE_SEARCH";
    var count=searches.find(
      {
        id_user:{$ne:id_user},
        searched: searched
        //,
        //date:{$gt:cur_date-1000*60*2}
      }
    ).toArray(function(err, documents) {
        if(documents.length>=1){
           msg = "NOT_UNIQUE_SEARCH";
        }
    console.log(documents);
      db.close();
      console.log(msg);
    res.send(msg);
  })
})})
// All remaining requests return the React app, so it can handle routing.
app.get('*', function(request, response) {
  response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
});

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});
