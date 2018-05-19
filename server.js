const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const serveStatic = require('serve-static');
const path = require('path');

const app = express();

app.use(serveStatic(path.join(__dirname, 'splash-page')));

/* Port for Heroku or locally */
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));
