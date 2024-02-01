CREATE DATABASE chatapp;

CREATE TABLE users (
    users_id SERIAL PRIMARY KEY,
    username VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

CREATE TABLE messages (
    messages_id SERIAL PRIMARY KEY,
    message VARCHAR(255) NOT NULL,
    sender VARCHAR(255) REFERENCES users(username),
    receiver VARCHAR(255) REFERENCES users(username)
);