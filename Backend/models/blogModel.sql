-- Create the 'blog' table
CREATE TABLE IF NOT EXISTS blogs (
    uuid CHAR(36) PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    author VARCHAR(100) NOT NULL,
    publication_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    category_tags VARCHAR(255),
    image_url VARCHAR(255)
);