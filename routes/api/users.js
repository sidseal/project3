const express= require ("express");
const router = require("express").Router();
const controllers= require("../../controllers/login");


// router
//   .route("/login")
// //   .get(controllers.findAll)
//   .post(controllers.login);

// Matches with "/api/posts"
router
  .route("/")
  .get(controllers.findAll)
  .post(controllers.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(controllers.findById)
  .put(controllers.update)
  .delete(controllers.remove);

module.exports = router;




  // module.exports= router;