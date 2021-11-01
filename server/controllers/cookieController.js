const cookieController = {};

cookieController.deleteCookies = (req, res, next) => {
  try {
    res.clearCookie('ssid');
    next();
  } catch (err) {
    const defaultErr = {
      log: 'Error handler caught an error inside cookieController.deleteCookie',
      status: 500,
      message: { err: `An error occurred inside a middleware named cookieController.deleteCookie : ${err}` },
    };
    next(defaultErr);
  }
};
cookieController.setSSIDCookie = (req, res, next) => {
  try {
    const numOfSeconds = 600;
    const cookieOptions = {
      maxAge: 1000 * numOfSeconds, // ms
      httpOnly: true,
    };

    res.cookie('ssid', `${res.locals.user}`, cookieOptions);
    next();
  } catch (err) {
    const defaultErr = {
      log: 'Error handler caught an error inside cookieController.setSSIDCookie',
      status: 500,
      message: { err: `An error occurred inside a middleware named cookieController.setSSIDCookie : ${err}` },
    };
    next(defaultErr);
  }
};

module.exports = cookieController;
