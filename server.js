const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

/* Port for Heroku or locally */
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
