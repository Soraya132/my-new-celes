-- Create table to store form submissions
CREATE TABLE  IF NOT EXISTS form_submissions (
    uuid CHAR(36) PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phoneNumber VARCHAR(20) UNIQUE NOT NULL,
    location VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    submission_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)