const express = require("express");
require("dotenv").config();
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const rateLimit = require('express-rate-limit');
require("colors");
const errorHandler = require("./middlewares/errorHandler");

const app = express();
const port = process.env.PORT || 3000;
app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // Limit each IP to 100 requests per windowMs
});

app.use(cors());
app.use(helmet());
app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Limit each IP to 100 requests per windowMs
  }));
//Use morgan to record info about incoming HTTP request to server
app.use(morgan("dev"));

//parse incoming requests to JSON format
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//post routes
app.use("/api/post", require("./routes/blogRoutes"));

//user routes
app.use("/api/user", require("./routes/userRoutes"));

//testimonial routes
app.use("/api/testimonials", require("./routes/testimonialRoutes"));

//form routes
app.use("/api", require("./routes/formRoutes"));

//reset password routes
app.use("/api", require("./routes/passwordResetRoute"));

app.use("/submit-form", require("./controllers/internshipForm"));

app.use("/api", require("./routes/recurringPaymentRoute"));


//Error handling middleware
app.use(errorHandler);

//start server
app.listen(port, () => console.log(`Server running on port: ${port}`.cyan));
