const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const router = require('./routes/index');

const app = express();

// Rate limit config
const limiter = rateLimit({
  windowMs: 60 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res, next, options) => {
    res.status(options.statusCode).json({
      status: 'err',
      messages: ['Too many requests, please try again later.'],
    });
  },
});

app.use(limiter);

// Body parser config
// urlencoded: Analyse sended date through the codification application/x-www-form-urlencoded
// urlencoded.extended: If false, uses querystring, otherwise, it uses qs
// json: Analyse data sended by using JSON format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// CORS config
// cors: Allows all cors requests from any domain
app.use(cors());

// Helmet config
app.use(helmet());

// Routes SetUp
app.use('/', router);

module.exports = app;
