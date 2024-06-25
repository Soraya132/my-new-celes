const express = require("express");
const router = express.Router();
const blogControllers = require("../controllers/blogControllers");
const sharePost = require("../controllers/shareControllers");
const isAdmin = require("../middlewares/authenticateAdmin");
const authenticateToken = require("../middlewares/authenticateToken");

router.use(authenticateToken);

//create post route
router.route("/create-post").post(isAdmin, blogControllers.createPost);

//get pots route
router.route("/get-posts").get(blogControllers.getPosts);

//get pos by id
router.route("/get-post/:uuid").get(blogControllers.getPostById);

//Update Post routes
router.route("/update-post/:uuid").put(isAdmin, blogControllers.updatePost);

//delete post
router.route("/delete-post/:uuid").delete(isAdmin, blogControllers.deletePost);

//delete selected post
router
  .route("/delete-selected")
  .delete(isAdmin, blogControllers.deleteSelectedPosts);

//delete all posts
router.route("/delete-all").delete(isAdmin, blogControllers.deleteAllPosts);

//share on social media
router.get("/share/:platform/:id", sharePost);

module.exports = router;
