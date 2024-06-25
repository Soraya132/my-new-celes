const express = require("express");
const router = express.Router();
const formControllers = require("../controllers/formControllers");
const isAdmin = require("../middlewares/authenticateAdmin");
const authenticateToken = require("../middlewares/authenticateToken");



//create routes
router.route('/contact-us').post(formControllers.createForm);
router.use(authenticateToken);
//get form
router.route("/get-forms").get(isAdmin, formControllers.getAllForms);

//get form by id
router.route("/get-form/:uuid").get(isAdmin, formControllers.getFormById);

//upadte form
router.route("/update-form/:uuid").put(isAdmin, formControllers.updateForm);

//delete form
router.route("/delete-form/:uuid").delete(isAdmin, formControllers.deleteForm);

module.exports = router;
