const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const express = require('express');
const routes = require('./routes/routes');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const MongoStore = require("connect-mongo")(session);

// Create main app as an express app
const app = express();
// Define database link
const database = "mongodb+srv://username:123password@cluster0.2sv4t.gcp.mongodb.net/fabulab?retryWrites=true&w=majority";

// Use cors
app.use(cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({
    secret: "teamworkfablabproject2020",
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 30 * 60000 },
    store: new MongoStore({
        mongooseConnection: mongoose.connection,
        ttl: (30 * 60000 ) / 1000
      })
}));

app.use('/', routes);

// Database connection
const port = process.env.PORT || 8080;
mongoose.connect(database, {
        useCreateIndex: true,
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
    })
    .then(() => {
        app.listen(port, () => console.log(`Server and Database running on ${port}, http://localhost:${port}`));
    })
    .catch((err) => {
        console.log(err);
    });