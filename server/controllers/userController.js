const bcrypt = require('bcryptjs');
const models = require('../models/mapModels');

const userController = {};

userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const newUser = {
      username,
      password,
    };

    const user = await models.Users.findOne({ username });

    if (user) return res.send('User already created').status(304);

    await models.Users.create(newUser);

    console.log(`User: ${username} signed up`);

    res.locals.user = username;
    return next();
  } catch (err) {
    console.log(err);
    return next({
      log: 'Express error handler caught in userController.createUser middleware',
      status: 500,
      message: { err },
    });
  }
};

// function to verify user when the user tries to login
userController.verifyUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;

    const user = await models.Users.findOne({ username });

    const hashedPW = user.password;

    const compare = bcrypt.compareSync(password, hashedPW);

    if (!compare) throw Error('Incorrect username or password. Please try again.');

    console.log(`User: ${username} logged in`);
    res.locals.user = username;
    next();
  } catch (err) {
    next({
      log: 'Express error handler caught in userController.verifyUser middleware',
      status: 500,
      message: { err },
    });
  }
};

userController.getUserData = async (req, res, next) => {
  try {
    const user = await models.Users.findOne({ username: res.locals.user });

    res.locals.data = user.favorites;
    next();
  } catch (err) {
    next({
      log: 'Express error handler caught in userController.getUserData middleware',
      status: 500,
      message: { err },
    });
  }
};

userController.googleSignIn = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await models.Users.findOne({ username });

    if (!user) {
      const newUser = {
        username,
        password,
      };
      await models.Users.create(newUser);
      console.log(`User: ${username} signed up`);
      res.locals.user = username;
      return next();
    }

    res.locals.user = username;
    return next();
  } catch (err) {
    next({
      log: 'Express error handler caught in userController.googleSignIn middleware',
      status: 500,
      message: { err },
    });
  }
};


userController.addFav = async (req, res, next) => {
  try {
    const { currentUser, title, link } = req.body;

    const query = {
      username: currentUser,
    };

    const update = {
      favorites: { title, link },
    };

    if (!currentUser) return res.status(500).send('Please log in to save favorites');

    await models.Users.findOneAndUpdate(query, { $push: update });

    console.log(`${currentUser} added title: ${title}, link: ${link}`);

    next();
  } catch (err) {
    next({
      log: 'Express error handler caught in userController.addFav middleware',
      status: 500,
      message: `Express error handler caught in userController.addFav middleware ${err}`,
    });
  }
};

userController.deleteFav = async (req, res, next) => {
  try {
    const { currentUser, title, link } = req.body;

    const query = {
      username: currentUser,
    };

    const update = {
      favorites: { title, link },
    };

    if (!currentUser) return res.status(500).send('Please log in to delete favorites');
    await models.Users.findOneAndUpdate(query, { $pull: update });

    console.log(`${currentUser} deleted title: ${title}, link: ${link}`);

    next();
  } catch (err) {
    next({
      log: 'Express error handler caught in userController.deleteFav middleware',
      status: 500,
      message: `Express error handler caught in userController.deleteFav middleware ${err}`,
    });
  }
};

module.exports = userController;
