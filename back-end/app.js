const cors = require('cors');
const express = require('express');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

module.exports = app;