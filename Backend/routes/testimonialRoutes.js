const express = require("express");
const router = express.Router();
const testimonialsController = require("../controllers/testimonialsController");
const isAuthor = require("../middlewares/authenticateUser");
const authenticateToken = require("../middlewares/authenticateToken");


//create testimonial routes
router
  .route("/create-testimonial")
  .post(testimonialsController.createTestimonial);

//Get all testimonials route
router.route("/get-testimonials").get(testimonialsController.getTestimonials);

//update route
router
  .route("/update-testimonial/:id")
  .put(testimonialsController.updateTestimonial);

//delete route
router
  .route("/delete-testimonial/:id")
  .delete(testimonialsController.deleteTestimonial);

module.exports = router;
