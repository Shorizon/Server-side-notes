CREATE TABLE notes (
    note_id SERIAL NOT NULL UNIQUE,
    note_title VARCHAR(255) NOT NULL,
    note_content VARCHAR(500) NOT NULL,
    note_category VARCHAR(255) NOT NULL,
    isPublic BOOLEAN DEFAULT FALSE NOT NULL,
    user_id SERIAL NOT NULL,
    img_url VARCHAR(500),
    PRIMARY KEY (note_id),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(user_id)
);
