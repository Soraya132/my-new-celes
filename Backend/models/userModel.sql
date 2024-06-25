CREATE TABLE IF NOT EXISTS users (
    uuid VARCHAR(36),
    username VARCHAR(50) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    role ENUM('user', 'editor', 'admin') DEFAULT 'user'
);