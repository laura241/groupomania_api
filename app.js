const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/user');
const messageRoutes = require('./routes/message');
const helmet = require('helmet')

const app = express();

app.use(helmet());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//Configuration of the application
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);


app.use('/api/auth', userRoutes);
app.use('/api/messages', messageRoutes);

const db = require('./config/db');

db.sequelize
  .sync({
    force: false,
  })
  .then(() => {
    console.log("Drop and Resync with {force: true}");
  });

module.exports = app;