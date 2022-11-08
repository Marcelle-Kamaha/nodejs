const express = require('express');
const router = express.Router();
const passport =require('passport');
const User = require ('../models/User')

const userCtrl = require('../controllers/user');



router.post('/signup', userCtrl.signup);
router.post('/login', userCtrl.login);

// router.post('/signup', (req,res)=>{
   
module.exports = router;