require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const DB_URl = process.env.DB_URL;
const PORT = process.env.PORT || 4000;

mongoose
  .connect(DB_URl, {
    dbName: 'learnexpress',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('DataBase Connected'))
  .catch((error) => console.log(error));

// Import Middle Ware
const auth = require('./MiddleWare/Auth');

// Inport Route
const defaultRoute = require('./Route/default');

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Global MiddleWare
app.use(auth);

// Config base URL
app.use('/', defaultRoute);

app.listen(PORT, () => console.log(`Application Start On Port ${PORT}`));
