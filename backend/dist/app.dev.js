"use strict";

var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var session = require('express-session');
var cookieParser = require('cookie-parser');
var cors = require('cors');
var MongoStore = require("connect-mongo")(session);
var routes = require('./routes/routes');
var app = express();
var database = "mongodb+srv://username:123password@cluster0.2sv4t.gcp.mongodb.net/fabulab?retryWrites=true&w=majority";


app.use(cors({
  origin: true,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
  secret: "teamworkfablabproject2020",
  resave: false,
  saveUninitialized: true,
  cookie: {
    maxAge: 30 * 60000
  } // store: new MongoStore({
  //     mongooseConnection: mongoose.connection,
  //     ttl: (30 * 60000 ) / 1000
  //   })

}));
app.use('/', routes);
var port = process.env.PORT || 8080;
mongoose.connect(database, {
  useCreateIndex: true,
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false
}).then(function () {
  app.listen(port, function () {
    return console.log("Server and Database running on ".concat(port, ", http://localhost:").concat(port));
  });
})["catch"](function (err) {
  console.log(err);
});