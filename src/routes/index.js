const express = require('express');
const mainRouter = express.Router();

const authRouter = require('./authRouter');
const tourismRouter = require('./tourismRouter');
const welcomeRouter = require('./welcomeRouter');


const {checkLogin} = require('../helpers/checkUser')

mainRouter.use('/', welcomeRouter);
mainRouter.use('/auth', authRouter);
mainRouter.use('/tourism', checkLogin, tourismRouter);

module.exports = mainRouter;