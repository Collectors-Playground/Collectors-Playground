import express, { Application, Request, Response, NextFunction } from 'express';
import bodyParser from 'body-parser';
import { graphqlHTTP } from 'express-graphql';
import { schema } from './Schema';
import routes from './routes/api';
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

app.use('/*', (req: Request, res: Response) => {
  res
    .status(404)
    .sendFile(path.join(__dirname, '../public/client/HTML404Page.html'));
});

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = { ...defaultErr, ...err };
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(3000, () => {
  console.log('Running on port 3000');
  routes(app);
});
