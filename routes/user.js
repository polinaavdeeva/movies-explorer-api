const router = require('express').Router();

const {
  updateUserInfo,
  getCurrentUser,
} = require('../controllers/user');

router.get('/me', getCurrentUser);
router.patch('/me', updateUserInfo);

module.exports = router;
