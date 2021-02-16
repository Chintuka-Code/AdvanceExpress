require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyparser = require('body-parser');

const app = express();
const DB_URl = process.env.DB_URL;
const PORT = process.env.PORT || 4000;

// Inport Route

const defaultRoute = require('./Route/default');

app.use(cors());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());

// Config base URL
app.use('/', defaultRoute);

app.listen(PORT, () => console.log(`Application Start On Port ${PORT}`));
