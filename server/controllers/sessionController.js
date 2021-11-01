const models = require('../models/mapModels');

const sessionController = {};

sessionController.isLoggedIn = async (req, res, next) => {
  try {
    const { ssid } = req.cookies;

    if (ssid) {
      const cookieCheck = await models.Session.findOne({ cookieId: ssid });
      if (cookieCheck) {
        res.locals.user = ssid;
        return next();
      }
      throw Error('No cookie in DB');
    }
    throw Error('No cookie in DB');
  } catch (err) {
    const defaultErr = {
      log: 'Error handler caught an error inside sessionController.isLoggedIn',
      status: 200,
      message: {
        err: `An error occurred inside a middleware named sessionController.isLoggedIn : ${err}`,
      },
    };
    return next(defaultErr);
  }
};

/**
 * startSession - create and save a new Session into the database.
 */
sessionController.startSession = async (req, res, next) => {
  try {
    const session = await models.Session.findOne({ cookieId: res.locals.user });

    if (!session) {
      const newSession = {
        cookieId: res.locals.user,
      };

      await models.Session.create(newSession);
    }
    next();
  } catch (err) {
    const defaultErr = {
      log: 'Error handler caught an error inside sessionController.startSession',
      status: 500,
      message: {
        err: `An error occurred inside a middleware named sessionController.startSession : ${err}`,
      },
    };
    return next(defaultErr);
  }
};

sessionController.endSession = async (req, res, next) => {
  try {
    const { ssid } = req.cookies;
    await models.Session.findOneAndDelete({ cookieId: ssid });
    res.locals.id = ssid;
    next();
  } catch (err) {
    const defaultErr = {
      log: 'Error handler caught an error inside sessionController.endSession',
      status: 500,
      message: {
        err: `An error occurred inside a middleware named sessionController.endSession : ${err}`,
      },
    };
    return next(defaultErr);
  }
};

module.exports = sessionController;
