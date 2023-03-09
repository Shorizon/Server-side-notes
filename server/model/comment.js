const client = require("../db/connection")

class Comment {

    constructor({ comment_id, user_id, note_id, comment_content }) {
        this.comment_id = comment_id;
        this.user_id = user_id;
        this.note_id = note_id;
        this.comment_content = comment_content;

    }


    static async create(data) {

        if (!data) return ({
            error: true,
            message: "note post is missing"
        })

        try {
            const response = await client.query("INSERT INTO comment(user_id,note_id, comment_content) VALUES ($1,$2,$3);", [data.user_id, data.note_id, data.comment_content])
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }

    }

    static async showCurrentNoteComment(note) {

        try {
            const response = await client.query("SELECT * FROM comment WHERE note_id = $1 ORDER BY comment_id DESC", [note])
            return response.rows.map(m => new Comment(m))

        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }

    }



}
module.exports = { Comment };
