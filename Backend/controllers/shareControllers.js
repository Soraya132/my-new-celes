const pool = require("../config/db");
const asyncHandler = require("express-async-handler");

const sharePost = asyncHandler(async (req, res) => {
  const postId = req.params.id;
  const platform = req.params.platform.toLowerCase();
  const postUrl = process.env.URL;

  try {
    //increment the share count in the databse
    const [result] = await pool.execute(
      `UPDATE blogs SET shares = shares + 1 WHERE uuid = ?`,
      [postId]
    );

    if (result.affectedRows > 0) {
      //construct a share URL based on platform
      let shareUrl;
      switch (platform) {
        case "facebook":
          shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            postUrl
          )}`;
          break;
        case "twitter":
          const text = encodeURIComponent("Check out this awesome post!");
          shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            postUrl
          )}&text=${text}`;
          break;
        default:
          return res
            .status(400)
            .json({ message: "Invalid social media platform" });
      }

      console.log(`Post with ID ${postId} shared on ${platform} platform`);
      // Return the share URL in the response JSON
      res.status(200).json({ shareUrl });

      //Redirect the user to share URL
      return res.redirect(shareUrl);
    } else {
      return res.status(404).json({ message: "Post not found" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

module.exports = sharePost;
