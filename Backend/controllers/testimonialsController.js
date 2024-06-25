const asyncHandler = require("express-async-handler");
const pool = require("../config/db");
const validator = require("validator");
const { v4: uuidv4 } = require("uuid");

const testimonialsController = {
  // Create testimonial
  createTestimonial: asyncHandler(async (req, res) => {
    const { name, email, message, company } = req.body;

    /* Check if the user is authenticated and has a UUID
    if (!req.user || !req.user.uuid) {
      return res.status(401).json({ error: "User is not authenticated" });
    }
    */
    if (!name || !email || !message) {
      return res.status(400).json({ error: "Name, email and message must be provided." });
    }

    try {
      const uuid = uuidv4();
      // const author = req.user.uuid; // Get the UUID of the authenticated user
      const query = `INSERT INTO testimonials (name, email, message, company, uuid) VALUES (?, ?, ?, ?, ?);`;
      const values = [name, email, message, company, uuid];
      const [result] = await pool.execute(query, values);

      if (result.affectedRows > 0) {
        /*const [newTestimonial] = await pool.execute(
          `SELECT * FROM testimonials WHERE uuid = ?;`, [uuid]
        );
       
        return res.status(201).json({ newTestimonial: newTestimonial[0] });
        */
        return res.status(201).json({ message: 'Testimonial created successfully' })
      } else {
        return res.status(400).json({ message: "Invalid data" });
      }
    
    } catch (error) {
      console.error(error);
      return res.status(500).json({ Error: "Internal server error" });
    }
  }),

  getTestimonials: asyncHandler(async (req, res) => {
    try {
      const [result] = await pool.execute(`SELECT * FROM testimonials;`);
      const testimonials = result;

      res.status(201).json({ testimonials });
    } catch (error) {
      console.error("Error retrieving testimonial:".magenta, error);
      res.status(500).json("Internal server error");
    }
  }),

  // Update testimonial
  updateTestimonial: asyncHandler(async (req, res) => {
    const uuid = req.params.id;
    const { name, email, message, company } = req.body;
    // const author = req.user.uuid; // Assuming you have user authentication middleware

    try {
      // Retrieve the testimonial from the database
      const [testimonial] = await pool.execute(
        `SELECT * FROM testimonials WHERE uuid = ?;`,
        [uuid]
      );
      if (testimonial.length === 0) {
        return res
          .status(404)
          .json({ error: "Testimonial not found" });
      }

      // Check if the testimonial belongs to the authenticated user
      if (testimonial[0].uuid !== uuid) {
        return res.status(403).json({ error: 'You are not authorized to update this testimonial' })
      }
      
      // Update the testimonial
      const updatedValues = [name, email, message, company, uuid];
      const [result] = await pool.execute(
        `UPDATE testimonials SET name = ?, email = ?, message = ?, company = ? WHERE uuid = ?;`,
        updatedValues
      );
      if (result.affectedRows > 0) {
        /*const [updatedTestimonial] = await pool.execute(
          `SELECT * FROM testimonials WHERE uuid = ?`,
          [uuid]
        );
        return res
          .status(200)
          .json({ updatedTestimonial: updatedTestimonial[0] });
        */
        return res.status(200).json({ message: 'Testimonial updated successfully' })
      
      } else {
        return res.status(500).json({ error: "Failed to update testimonial" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }),

  // Delete testimonial
  deleteTestimonial: asyncHandler(async (req, res) => {
    const uuid = req.params.id;
    //const author = req.user.uuid; // Assuming you have user authentication middleware

    try {
      // Check if the testimonial belongs to the authenticated user
      const [testimonial] = await pool.execute(
        `SELECT * FROM testimonials WHERE uuid = ?;`,
        [uuid]
      );

      if (testimonial.length === 0) {
        return res
        .status(404)
        .json({ error: "Testimonial not found" });
      }

      // Check if the testimonial belongs to the authenticated user
      if (testimonial[0].uuid !== uuid) {
        return res.status(403).json({ error: 'You are not authorized to update this testimonial' })
      }

      // Delete the testimonial
      const [result] = await pool.execute(
        `DELETE FROM testimonials WHERE uuid = ?;`,
        [uuid]
      );
      if (result.affectedRows > 0) {
        return res.status(200).json({ message: "Testimonial deleted" });
      } else {
        return res.status(500).json({ error: "Failed to delete testimonial" });
      }
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: "Internal server error" });
    }
  }),
};

module.exports = testimonialsController;
