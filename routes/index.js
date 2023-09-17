const router = require('express').Router();
const usersRouter = require('./user');
const moviesRouter = require('./movie');

const { createUser, login } = require('../controllers/user');

router.post('/signup', createUser);
router.post('/signin', login);

router.use('/users', usersRouter);
router.use('/movies', moviesRouter);

router.use('*', () => { throw new NotFoundError('Ресурс не найден.'); });

module.exports = router;
