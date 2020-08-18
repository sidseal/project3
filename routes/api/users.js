const express= require ("express");
const router = require("express").Router();
const controllers= require("../../controllers/login");

// Matches with "/api/users/login"
router
  .route("/login")
  //.get(controllers.findAll)
  .post(controllers.loginUser);

// Matches with "/api/users"
router
  .route("/")
  .get(controllers.findAll)
  .post(controllers.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(controllers.findById)
  .put(controllers.update)
  .delete(controllers.remove);

//Matches with "/api/users/matches"
router
  .route("/matches")
  .post(controllers.getMatches)

module.exports = router;

  // module.exports= router;