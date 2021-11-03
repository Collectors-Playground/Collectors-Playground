import express from 'express';
import bodyParser from 'body-parser';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Schema';
import nftController from './controllers/nftController';
import path from 'path';

const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
//pass in endpoint, middleware that is graphqlHTTP
//graphqlHTTP brings together the schemas and resolvers
app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    // schema: buildSchema(`
    //   type User {
    //     user_name: String!
    //     password: String
    //   }

    //   input UserInput {
    //     user_name: String!
    //     password: String!
    //   }

    //   type RootQuery {

    //   }

    //   type RooMutation {
    //     createUser(userInput: UserInput): User
    //   }

    //   schema {
    //     query: RootQuery
    //     mutation: RooMutation
    //   }
    // `),
    // rootValue: {
    //   createUser: async (args: any) => {
    //     const { user_name, password } = args.userInput;
    //     return await bcrypt
    //       .hash(password, 10)
    //       .then((hashedPW: any) => {
    //         const SQLquery: any = `INSERT INTO user (user_name, password) VALUES (${user_name}, ${hashedPW}) RETURNING user_id`;
    //         const { rows } = db.query(SQLquery);
    //         return rows[0].user_id;
    //       })
    //       .catch((err: any) => {
    //         throw err;
    //       });
    //   },
    //},
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

// const sessionController = require('./controllers/sessionController');
// const cookieController = require('./controllers/cookieController');

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
