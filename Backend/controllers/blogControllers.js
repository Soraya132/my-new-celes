const pool = require("../config/db");
const asyncHandler = require("express-async-handler");
const { v4: uuidv4 } = require("uuid");
const validator = require("validator");

const blogControllers = {
  // Create blog post
  createPost: asyncHandler(async (req, res) => {
    const { title, content, author, category_tags, image_url } = req.body; //Access the req.body to access th data from the request;

    //Validation of required fields
    if (!title || !content || !author || !category_tags || !image_url) {
      res.status(400).json({ error: "All fields are required." });
      return;
    }

    // Validate datatypes and length
    if (typeof title !== "string" || title.length > 100) {
      return res.status(400).json({
        error: "Title must be a string with max length 100 characters.",
      });
    }

    if (typeof category_tags !== "string" || category_tags.length > 100) {
      return res.status(400).json({
        error: "Category_tag must be a string with max length 100 characters.",
      });
    }

    if (content.length > 2000) {
      return res.status(400).json({
        error: "Content length exceeds the maximum limit of 200 characters.",
      });
    }

    // Validate image URL format
    if (!validator.isURL(image_url)) {
      return res.status(400).json({ error: "Invalid image URL format." });
    }

    try {
      const uuid = uuidv4();
      //Insert data into the blogs table in the mentioned columns
      const query = `
    INSERT INTO blogs (title, content, author, category_tags, image_url, uuid)
    VALUES (?, ?, ?, ?, ?, ?);
    `;

      // An array 'values' to hold the values extracted from the 'blogData' object
      const values = [title, content, author, category_tags, image_url, uuid];

      const [result] = await pool.execute(query, values); // Execute the SQL query

      // Return the ID of the newly inserted blog post
      if (result.affectedRows > 0) {
        /*const [newBlog] = await pool.execute(
          `SELECT * FROM blogs WHERE uuid=?`,
          [uuid]
        );
        res.status(201).json({ blog: newBlog });*/
        res.status(201).json({ message: 'Blog created created successfully' });
      }
    } catch (error) {
      if (error.code === "ER_DUP_ENTRY") {
        console.error(error);
        return res.status(400).json({ error: 'Duplicate entry' });
      } else {
        console.error("Error creating blog:".magenta, error);
        res.status(500).json({ error: "Internal server error" });
      }
    }
  }),

  //Get posts from the databse
  getPosts: asyncHandler(async (req, res) => {
    try {
      const [result] = await pool.execute(`SELECT * FROM blogs`);
      const blogs = result;

      res.json({ blogs });
    } catch (error) {
      console.log("Error retrieving the blogs:".magenta, error);
      res.status(500).json({ error: "Internal server error" });
    }
  }),

  //Get Pots by id
  getPostById: asyncHandler(async (req, res) => {
    const uuid = req.params.uuid;

    if (!uuid) {
      return res.status(400).json({ error: "Post ID is required" });
    }

    const query = `SELECT * FROM blogs WHERE uuid=?`;

    try {
      const [result] = await pool.execute(query, [uuid]);

      if (result.length === 0) {
        res.status(404).json({ message: "Blog not found" });
      }

      const blog = result[0];
      res.json({ blog });
    } catch (error) {
      console.error("Error retrieving blog by ID:".magenta, error);
      res.status(500).json({ error: "Internal server error" });
    }
  }),

  //Update post in the databse
  updatePost: asyncHandler(async (req, res) => {
    const uuid = req.params.uuid;

    const { title, content, image_url, category_tags, author } = req.body;

    if (!title || !content || !image_url || !category_tags || !author) {
      res.status(400).json({ error: "All fields are required." });
      return;
    }

    const updatedQuery = `
    UPDATE blogs
    SET title=?, content=?, category_tags=?, author=?, image_url=?
    WHERE uuid=?
    `;

    const updatedValues = [
      title,
      content,
      author,
      category_tags,
      image_url,
      uuid,
    ];

    //Execute the update query
    await pool.execute(updatedQuery, updatedValues);

    const [updatedData] = await pool.execute(
      `SELECT * FROM blogs WHERE uuid = ?`,
      [uuid]
    );

    if (updatedData.length === 0) {
      return res.status(404).json({ error: "Blog not found" });
    }

    res.json({ blog: updatedData[0] });
  }),

  //DElete posts
  deletePost: asyncHandler(async (req, res) => {
    const uuid = req.params.uuid;

    //Execute the query
    const [result] = await pool.execute(
      `DELETE FROM blogs
      WHERE uuid=?`,
      [uuid]
    );

    console.log(result);

    if (result.affectedRows === 0) {
    
      console.error("Error deleting the blog:".magenta, err);
      return res.status(404).json({ error: "Blog not found" });
    
    } else if (result.affectedRows !== 0) {
      res.json({ message: "Blog deleted successfully" });
    
    } else {
      res.status(500);
      throw new Error("Internal server error");
    }
  }),

  //Delete selected posts
  deleteSelectedPosts: asyncHandler(async (req, res) => {
    const { blogIds } = req.body;

    console.log(blogIds);
    if (!blogIds || blogIds.length === 0) {
      console.error(error);
      return res.status(400).json({ error: "No blog IDs provided" });
    }

    try {
      const placeholders = blogIds.map(() => "?").join(", "); // Create placeholders for each ID
      const deleteQuery = `DELETE FROM blogs WHERE uuid IN (${placeholders})`;
      const [result] = await pool.execute(deleteQuery, blogIds);

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "No blogs were deleted" });
      } else {
        return res
          .status(201)
          .json({ message: "Selected blogs deleted successfully" });
      }
    } catch (error) {
      console.error("Error deleting selected blogs:", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }),

  //Delete all posts
  deleteAllPosts: asyncHandler(async (req, res) => {
    try {
      const deleteQuery = `DELETE FROM blogs`;
      const [result] = await pool.execute(deleteQuery);

      console.log(result);
      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "No blogs were deleted" });
      } else {
        return res.status(201).json({ message: "blogs deleted succcessfully" });
      }
    } catch (error) {
      console.error("Error deleting the blogs", error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }),
};

module.exports = blogControllers;
