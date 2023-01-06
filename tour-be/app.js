const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

/// ROUTE IMPORTING
const api_routes = require('./routes');

// 1) GLOBAL MIDDLEWARE
app.use(cors());

// development logging
if (process.env.NODE_ENV !== 'production') {
   app.use(morgan('dev'));
}

// DATA PARSER MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({}));

// PUBLISHING STATIC FILES
app.use('/images', express.static('public/uploads/'));

// 2) CUSTOM MIDDLEWARE
app.use((req, res, next) => {
   req.requestTime = new Date().toISOString();
   console.log('This request is initiated at: ' + req.requestTime);
   next();
});

// ROUTE MOUNTING
app.use('/api/', api_routes);
// HANDLING UNDEFINED ROUTES
app.all('*', (req, res, next) => {
   res.status(404).json({
      status: false,
      msg: 'requested route not found',
   });
});

module.exports = app;
