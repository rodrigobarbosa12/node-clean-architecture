const express = require('express');
const cors = require('cors');
const fileupload = require('express-fileupload');
const routes = require('../../interfaces/routes/routes');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(fileupload());
app.use(routes);

module.exports = app;
