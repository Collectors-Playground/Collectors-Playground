const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const cookieParser = require('cookie-parser');
import { Request, Response } from 'express';
import { schema } from './Schema/index';
import routes from './routes/api';
import path from 'path';

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

app.use('/graphql', (req: Request, res: Response) => {
  graphqlHTTP({
    schema: schema,
    graphiql: true,
    context: { res },
  })(req, res);
});

routes(app);

// app.use('/dashboard', (req: Request, res: Response) => {
//   res.status(404).sendFile(path.join(__dirname, '../public/index.html'));
// });

// app.use('/*', (req: Request, res: Response) => {
//   res
//     .status(404)
//     .sendFile(path.join(__dirname, '../public/client/HTML404Page.html'));
// });

// app.use((err: any, req: Request, res: Response, next: NextFunction) => {
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
