const { Router } = require("express")
const { createPostNote, deletePostNote, returnPostNote } = require("../controller/note")
const noteRouter = Router()


noteRouter.post("/create", createPostNote)
noteRouter.post("/delete", deletePostNote)
noteRouter.get("/", returnPostNote)

module.exports = noteRouter;
