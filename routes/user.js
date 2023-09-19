const router = require('express').Router();

const {
  updateUserInfo,
  getCurrentUser,
} = require('../controllers/user');
const { validateUserUpdate } = require('../middlewares/userValidation');

router.get('/me', getCurrentUser);
router.patch('/me', validateUserUpdate, updateUserInfo);

module.exports = router;
