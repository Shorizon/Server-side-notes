const client = require("../db/connection")

class Note {


    constructor({ note_id, note_title, node_content, note_category, isPublic, user_id }) {

        this.note_id = note_id;
        this.note_title = note_title
        this.node_content = node_content
        this.note_category = note_category
        this.isPublic = isPublic;
        this.user_id = user_id;

    }

    static async getById(id) {
        try {
            const response = await client.query("SELECT * FROM note WHERE note_id = $1;", [id])
            return response.rows[0]
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }
    }



    static async create(data) {

        if (!data) return ({
            error: true,
            message: "note post is missing"
        })

        try {
            const response = await client.query("INSERT INTO note(user_id,note_content,note_title,isPublic,note_category) VALUES ($1,$2,$3,$4,$5);", [data.user_id, data.content, data.title, data.isPublic, data.category])
            const check = await client.query("SELECT note_id FROM note WHERE user_id = $1 LIMIT 1", [data.user_id])
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }

    }

    static async showAll() {

        try {
            const response = await client.query("SELECT * FROM note ORDER BY note_id DESC")
            return response.rows.map(m => new Note(m))

        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }

    }

    static async destroy(id) {

        if (!id) return ({
            error: true,
            message: "note post is missing"
        })

        try {
            const response = await client.query("DELETE FROM note * WHERE note_id = $1;", [id])

        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }

    }

    static async getByCategory(category) {

        try {
            const response = await client.query("SELECT * FROM note WHERE note_category = $1 AND ispublic = true", [category])
            return response.rows
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }
    }

    static async getByPublic(isPublic) {

        try {
            const response = await client.query("SELECT * FROM note WHERE ispublic = $1;", [isPublic])
            return response.rows[0]
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }
    }


    static async getByPrivate(isPublic, user_id) {

        try {
            const response = await client.query("SELECT * FROM note WHERE ispublic = $1 AND user_id = $2;", [isPublic, user_id])
            return response.rows
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }
    }


    static async getAllCategories() {

        try {
            const response = await client.query("SELECT  DISTINCT note_category FROM note WHERE ispublic = true")
            return response.rows
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }
    }

}

module.exports = { Note };
