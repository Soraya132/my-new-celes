const express = require("express");
const router = express.Router();
const formControllers = require("../controllers/formControllers");

router.route("/contact-us").post(formControllers.createForm);

//get form
router.route("/get-forms").get( formControllers.getAllForms);

//get form by id
router.route("/get-form/:uuid").get( formControllers.getFormById);

//upadte form
router.route("/update-form/:uuid").put(formControllers.updateForm);

//delete form
router.route("/delete-form/:uuid").delete(formControllers.deleteForm);

module.exports = router;
