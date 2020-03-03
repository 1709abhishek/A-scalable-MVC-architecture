const express = require('express');
const router = express.Router();
const passport = require('passport');
// const passport-local = require('passport-local');

const postsController = require('../controllers/posts_controller');

console.log('router loaded');

router.post('/create',passport.checkAuthentication, postsController.create);
router.get('/destroy/:id', passport.checkAuthentication, postsController.destroy);

module.exports = router;