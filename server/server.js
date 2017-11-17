var express = require('express');
let bodyParser = require('body-parser');
var path = require('path');
var app = express();
let passport = require('./strategies/userStrategy');
let sessionConfig = require('./modules/session.config');
var port = process.env.PORT || 5000;

let userRouter = require('./routers/user.router');
let registerRouter = require('./routers/register.router');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('server/public'));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/views/index.html'));
});


// Passport Session Configuration //
app.use(sessionConfig);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/register', registerRouter);
app.use('/user', userRouter);



let db = require('./modules/db.config.js');

app.listen(port, function() {
    console.log('Listening on port: ', port);
});