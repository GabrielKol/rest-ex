const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

/*
app.use((req, res, next) => {
    res.status(200).json({
        message: 'It works!',
        items: {
          item1: "a",
          item2: "b",
          item3: "c",
        }
    });
});*/

const productRoutes = require('./api/routes/products');
const orderRoutes = require('./api/routes/orders');

// Connect to database

mongoose.Promise = global.Promise;
mongoose.connect(
  "mongodb://test:pass1234@ds255924.mlab.com:55924/rest-app-db",
  { useNewUrlParser: true }
);
/*
mongoose.connect(
  "mongodb+srv://gbk:" +
    process.env.MONGO_ATLAS_PW +
    "@node-rest-app-uv1vi.mongodb.net/test?retryWrites=true",
  {
    useMongoClient: true
  }
);*/


app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Allow cross-origin
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
    return res.status(200).json({});
  }
  next();
});

// Routes which should handle requests
app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;
