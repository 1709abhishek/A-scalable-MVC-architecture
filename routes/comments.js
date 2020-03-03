const express = require('express');
const router = express.Router();
const passport = require('passport');
// const passport-local = require('passport-local');

const commentsController = require('../controllers/comments_controller');

console.log('router loaded');

router.post('/create',passport.checkAuthentication, commentsController.create);
router.get('/destroy/:id', passport.checkAuthentication, commentsController.destroy);

module.exports = router;