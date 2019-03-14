require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const favicon      = require('serve-favicon');
const hbs          = require('hbs');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const passport     = require('./helpers/passport')
const cors         = require('cors')


mongoose
  .connect(process.env.DB, {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].user}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app_name = require('./package.json').name;
const debug = require('debug')(`${app_name}:${path.basename(__filename).split('.')[0]}`);

const app = express();

const corsOpts = { credentials: true, origin: true }

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

const session    = require('express-session')
const MongoStore = require("connect-mongo")(session);

const sessionOpts = {
  secret: process.env.SECRET,
  resave: false,
  httpOnly: true,
  saveUninitialized: true,
  cookie: { httpOnly: true, maxAge: 2419200000 },
  store: new MongoStore({
    mongooseConnection: mongoose.connection,
    ttl: 24 * 60 * 60 // 1 day
  })
}

app.use(cors(corsOpts))
app.use(session(sessionOpts))

// Express View engine setup

app.use(require('node-sass-middleware')({
  src:  path.join(__dirname, 'public'),
  dest: path.join(__dirname, 'public'),
  sourceMap: true
}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'images', 'favicon.ico')));

app.use(passport.initialize())
app.use(passport.session())

const index = require('./routes/index');
app.use('/', index);
let auth = require('./routes/auth')
app.use('/', auth)
let pets = require('./routes/pets')
app.use('/', pets)

app.use('*', (req, res)=>{
  res.sendFile('index')
})

module.exports = app;
