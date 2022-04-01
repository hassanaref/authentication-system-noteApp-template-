const express = require('express');
const { handleErrors, requireAuth } = require('./middlewares');
const { getName } = require("../../view/helpers")
const usersRepo = require('../../repositories/users');
const signupTemplate = require('../../view/admin/auth/signup');
const signinTemplate = require('../../view/admin/auth/signin');
const home = require('../../home');
const createNote = require('../../create-note')
const userDB = require('../../repositories/userDB');



const {
  requireEmail,
  requirePassword,
  requirePasswordConfirmation,
  requireEmailExists,
  requireValidPasswordForUser
} = require('./validators');
const { Router } = require('express');

const router = express.Router();

router.get('/signup', (req, res) => {
  res.send(signupTemplate({ req }));
});

router.post(
  '/signup',
  [requireEmail, requirePassword, requirePasswordConfirmation],
  handleErrors(signupTemplate),
  async (req, res) => {
    const { name, email, password } = req.body;
    const user = await usersRepo.create({ name, email, password });
    req.session.userId = user.id;

    res.redirect('/signin');
  }
);

router.get('/signout', (req, res) => {
  req.session = null;
  res.send('You are logged out');
});

router.get('/signin', (req, res) => {
  res.send(signinTemplate({}));
});

router.post(
  '/signin',
  [requireEmailExists, requireValidPasswordForUser],
  handleErrors(signinTemplate),
  async (req, res) => {
    const { email } = req.body;
    const user = await userDB.findOne({ email:email });
    req.session.userId = user.id;
    getName(user[0].id);
    res.redirect('../../home');
  }
);

router.get('/home', (req,res) => {

  res.send(home({}));
});

router.get('/create-note', (req,res) => {
  res.send(createNote({}));
});

module.exports = router;

