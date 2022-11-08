const {Router } = require("express");
const express = require("express");
const auth = require ('../middleware/auth')

const { indexView,addNewView,loginView, signupView,allNewsView } = require("../controllers/dashboardController");
const router = express.Router();


router.get("/", loginView);
router.get('/signup',signupView);
router.get("/home", indexView);
router.get("/addNews", addNewView);
router.get('/allNews', allNewsView);
router.get('/logout', loginView);


module.exports = {
    routes: router
  };
