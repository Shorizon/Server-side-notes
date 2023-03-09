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
        const toDelete = await Note.getById(data)

        if (toDelete) {
            await Note.destroy(data)
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

async function returnPostNoteByCategory(req, res) {

    const category = req.params.category
    console.log(category)

    try {
        const result = await Note.getByCategory(category)
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({
            error: true,
            message: err.message
        })
    }

}

async function returnPostNoteByPublic(req, res) {

    const isPublic = true

    try {
        const result = await Note.getByPublic(isPublic)
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({
            error: true,
            message: err.message
        })
    }

}

async function returnPostNoteByPrivate(req, res) {

    const user_id = req.body.user_id
    const isPublic = false


    try {
        const result = await Note.getByPrivate(isPublic, user_id)
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({
            error: true,
            message: err.message
        })
    }

}



async function returnCategoriesNumber(req, res) {


    try {
        const result = await Note.getAllCategories()
        res.status(200).json(result)
    } catch (err) {
        res.status(404).json({
            error: true,
            message: err.message
        })
    }

}



module.exports = { createPostNote, deletePostNote, returnPostNote, returnPostNoteByCategory, returnPostNoteByPublic, returnPostNoteByPrivate, returnCategoriesNumber }
