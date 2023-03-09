
import { Comment } from "../model/comment";


async function createNoteComment(req, res) {

    const data = req.body;

    try {
        if (["user_id", "note_id", "comment_content"].every(key => Object.hasOwn(data, key))) {
            const post = await Comment.create(data)
            res.status(201).json({ message: "post created successfully" })
        } else {
            throw new Error("Invalid properties")
        }
    } catch (err) {
        res.status(404).json({
            error: true,
            message: err.message
        })
    }

}

async function returnNoteComment(req, res) {

    const note = req.params.note_id

    try {

        const result = await Comment.showCurrentNoteComment(note)
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({
            error: true,
            message: err.message
        })
    }

}

module.exports = { createNoteComment }
