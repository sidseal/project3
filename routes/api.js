const express= require ("express");
const router = require("express").Router();
const controllers= require("../controllers/login")

router
  .route("/login")
//   .get(postsController.findAll)
  .post(controllers.login);

  module.exports= router;