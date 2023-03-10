const { Router } = require("express")
const { createPostNote, deletePostNote, returnPostNote, returnPostNoteByCategory, returnPostNoteByPublic, returnPostNoteByPrivate } = require("../controller/note")
const noteRouter = Router()



noteRouter.get("/public", returnPostNoteByPublic)
noteRouter.post("/private", returnPostNoteByPrivate)
noteRouter.post("/create", createPostNote)
noteRouter.post("/delete", deletePostNote)
noteRouter.get("/", returnPostNote)



module.exports = noteRouter;
