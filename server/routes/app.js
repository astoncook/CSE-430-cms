var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');


//mongoose.connect("mongodb+srv://cms:cms@cms.0nybt.mongodb.net/?retryWrites=true&w=majority")
  //.then(() => {
  //  console.log("Connected to MongoDB")
  //})
  //.catch(() => {
  //  console.log("Connection failed")
  //});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, 'dist/cms/index.html'));
});

module.exports = router;
