const express= require ("express");
const router = require("express").Router();
const controllers= require("../../controllers/login");


router
  .route("/login")
  // function (req,res,next){
  //   if currUser
  // })
// //   .get(controllers.findAll)
  .post(controllers.loginUser);

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
  .delete(controllers.remove)

  router
  .route("/matches")
  .post(controllers.getMatches)
module.exports = router;




  // module.exports= router;