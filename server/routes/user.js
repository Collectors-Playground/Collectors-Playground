const express = require('express');
const userController = require('../controllers/userController');
const cookieController = require('../controllers/cookieController');
const sessionController = require('../controllers/sessionController');

const router = express.Router();

router.post('/addFav',
  userController.addFav,
  (req, res) => {
    res.status(200).json(res.locals.user);
  });

router.post('/loginWithGoogle/:name',
  userController.googleSignIn,
  cookieController.setSSIDCookie,
  sessionController.startSession,
  userController.getUserData,
  (req, res) => {
    res.status(200).json(res.locals.data);
  });

router.delete('/deleteFav', userController.deleteFav, (req, res) => {
  res.status(200).json(res.locals.user);
});
module.exports = router;
