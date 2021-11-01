import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Schema';

const app = express();
app.use(express.json());
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = { ...defaultErr, ...err };
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });

app.listen(3000, () => {
  console.log('Running on port 3000');
});





// const path = require('path');
// const sessionController = require('./controllers/sessionController');
// const cookieController = require('./controllers/cookieController');
// const apiController = require('./controllers/apiController');

// const express = require('express');

// const app = express();
// const cookieParser = require('cookie-parser');
// const userController = require('./controllers/userController');

// const apiRouter = require(path.join(__dirname, 'routes/api.js'));

// const userRouter = require(path.join(__dirname, 'routes/user.js'));

// app.use(cookieParser());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// if (process.env.NODE_ENV === 'production') {
//   app.use('/build', express.static(path.join(__dirname, '../build')));

//   app.get('/', sessionController.isLoggedIn, (req, res) => res.status(200).sendFile(path.join(__dirname, '../public/index.html')));
// }

// app.get('/sessionCheck',
//   sessionController.isLoggedIn,
//   userController.getUserData,
//   (req, res) => {
//     res.status(200).json([res.locals.user, res.locals.data]);
//   });

// app.get('/signout',
//   sessionController.endSession,
//   cookieController.deleteCookies,
//   (req, res) => {
//     res.sendStatus(200);
//   });

// app.post('/signup',
//   userController.createUser,
//   cookieController.setSSIDCookie,
//   sessionController.startSession,
//   (req, res) => {
//     res.status(200).send(res.locals.user);
//   });

// app.post('/login',
//   userController.verifyUser,
//   cookieController.setSSIDCookie,
//   sessionController.startSession,
//   userController.getUserData,
//   (req, res) => {
//     res.status(200).json(res.locals.data);
//   });

// app.use('/user', userRouter);
// app.use('/api', apiRouter);

// app.use('/*', (req, res) => {
//   res.status(404).sendFile(path.join(__dirname, '../public/client/HTML404Page.html'));
// });

// app.use((err, req, res, next) => {
//   const defaultErr = {
//     log: 'Express error handler caught unknown middleware error',
//     status: 500,
//     message: { err: 'An error occurred' },
//   };
//   const errorObj = { ...defaultErr, ...err };
//   console.log(errorObj.log);
//   return res.status(errorObj.status).json(errorObj.message);
// });

// app.listen(3000, () => console.log('Listening on 3000'));
