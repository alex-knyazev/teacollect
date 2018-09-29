const createError = require('http-errors');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const MongooseConnector = require('./MongooseConnector');

// const {typeDefs, resolvers} = require('./graphql/index');
const models = require('./models');

const { typeDefs, resolvers } = require('./graphql');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const createDbConnection = async () => {
  const connection = await mongoose.connect('mongodb://localhost:27017/teacollect');
  return connection;
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: async ({ req }) => ({
    db: new MongooseConnector(await createDbConnection()),
    models,
  }),
});
server.applyMiddleware({ app });

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
