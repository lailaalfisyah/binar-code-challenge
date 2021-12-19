const express = require('express');
const app = express();
const port = 3000;

// middleware
const logger = (req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
}
app.use(logger);
app.use(express.json());
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false}));

// session handler
const session = require('express-session')
app.use(session({
    secret: 'Buat ini jadi rahasia',
    resave: false,
    saveUninitialized: false
}))

// passport
const passport = require('./lib/passport.js')
// app.use(passport.initialize())
// app.use(passport.session())

// flash
const flash = require('express-flash')
app.use(flash())

// menggunakan view engine ejs
app.set('view engine', 'ejs');

// route
const router = require('./router');
const folderRouter = require('./routers')
app.use(router);
app.use(folderRouter);

// nyalakan web server
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});