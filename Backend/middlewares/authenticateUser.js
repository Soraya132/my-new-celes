const asyncHandler = require("express-async-handler");
const pool = require("../config/db");

const isAuthor = asyncHandler(async (req, res, next) => {
  const testimonialId = req.params.id;
  const userId = req.user.uuid; // Assuming user UUID is stored in req.user

  try {
    // Check if the testimonial belongs to the authenticated user
    const [testimonial] = await pool.execute(
      `SELECT * FROM testimonials WHERE uuid = ?;`,
      [testimonialId]
    );
    if (testimonial.length === 0 || testimonial[0].author !== userId) {
      return res
        .status(403)
        .json({ error: "You are not authorized to access this testimonial" });
    }

    next(); // If the user is the author, proceed to the next middleware/route handler
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = isAuthor;
