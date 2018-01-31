const mongoose = require('mongoose');

//Constructor takes an object
const JobSchema = new mongoose.Schema({
   firstName:{
     type: String,
     required: true
   },
   lastName:{
     type: String,
     required: true
   }
});

// takes JobSchema and creates a model called Job which will be exported.
module.exports = mongoose.model('User', JobSchema);
