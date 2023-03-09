CREATE TABLE comment (
    comment_id SERIAL NOT NULL UNIQUE,
    user_id SERIAL NOT NULL,
    note_id SERIAL NOT NULL,
    comment_content VARCHAR(500) NOT NULL,
    PRIMARY KEY(comment_id),
    CONSTRAINT fk_user_id FOREIGN KEY (user_id) REFERENCES users(user_id),
    CONSTRAINT fk_note_id FOREIGN KEY (note_id) REFERENCES note(note_id)
);
