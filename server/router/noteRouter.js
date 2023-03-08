const { Router } = require("express")
const { createPostNote, deletePostNote, returnPostNote, returnPostNoteByCategory, returnPostNoteByPublic, returnPostNoteByPrivate, returnCategoriesNumber } = require("../controller/note")
const noteRouter = Router()


noteRouter.get("/forum", returnCategoriesNumber)
noteRouter.get("/forum/:category", returnPostNoteByCategory)
noteRouter.post("/public", returnPostNoteByPublic)
noteRouter.post("/private", returnPostNoteByPrivate)
noteRouter.post("/create", createPostNote)
noteRouter.post("/delete", deletePostNote)
noteRouter.get("/", returnPostNote)

module.exports = noteRouter;
