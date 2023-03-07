const { Note } = require("../model/note");

async function createPostNote(req, res) {


    const data = req.body;

    try {
        if (["content", "user_id", "category", "title", "isPublic"].every(key => Object.hasOwn(data, key))) {
            const post = await Note.create(data)
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

async function deletePostNote(req, res) {

    const data = parseInt(req.body.note_id);

    try {

        const toDelete = await Marketplace.getById(data)
        //console.log(toDelete)
        if (toDelete) {
            //console.log("deleting")
            await Note.destroy(data)
            //console.log("deleted")
            res.status(200).json({ message: "post deleted successfully" })
        } else {
            throw new Error("cannot locate post with this ID")
        }

    } catch (err) {
        res.status(404).json({
            error: true,
            message: err.message
        })
    }

}


async function returnPostNote(req, res) {

    try {
        const result = await Note.showAll()
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({
            error: true,
            message: err.message
        })
    }

}

module.exports = { createPostNote, deletePostNote, returnPostNote }
