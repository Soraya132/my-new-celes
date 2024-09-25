CREATE TABLE testimonials (
    uuid CHAR(36) PRIMARY KEY,
    author VARCHAR(255) NOT NULL,
    content TEXT NOT NULL ,
    rating INT NOT NULL CHECK (rating >= 0  AND rating <= 5),
    publication_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    image_url VARCHAR(255)
)