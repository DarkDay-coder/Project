const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');
const apiError = require('./middleware/apiError.middleware');

/// ROUTE IMPORTING
const userRouter = require('./router/user.router');

// 1) GLOBAL MIDDLEWARE
app.use(cors());

// development logging
if (process.env.NODE_ENV !== 'production') {
   app.use(morgan('dev'));
}

// DATA PARSER MIDDLEWARE
app.use(express.json({ limit: '10kb' }));
app.use(
   express.urlencoded({
      extended: false,
   })
);

// PUBLISHING STATIC FILES
app.use(express.static(`${__dirname}/public`));

// 2) CUSTOM MIDDLEWARE
// test middleware
app.use((req, res, next) => {
   req.requestTime = new Date().toISOString();
   console.log('This request is initiated at: ' + req.requestTime);
   next();
});

// ROUTE MOUNTING
app.use('/api/users', userRouter);

// HANDLING UNDEFINED ROUTES
app.all('*', (req, res, next) => {
   next(new apiError(`Can't find ${req.originalUrl} on this server!!`, 404));
});

module.exports = app;
