const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/index');
const mongoose = require('mongoose');
const config = require('./config/config.json');
const app = express();

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));


//Custom middleware
app.use((req, res, next)=>{
  console.log("middleware run!");
  next();
});

app.get('/', (req, res) => {
  return res.send("Hello World!");
});

app.use('/api', routes);
mongoose.connect(config.MONGO_URI, ()=>{
  console.log('App is connected to mongodb');
});


app.listen(config.SERVER_PORT, () => {
  console.log("Running on port 4000");
});
