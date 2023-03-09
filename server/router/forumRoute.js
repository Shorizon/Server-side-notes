const { Router } = require("express")
const { returnPostNoteByCategory, returnCategoriesNumber } = require("../controller/note")
const { createNoteComment, returnNoteComment } = require('../controller/comment')
const forumRouter = Router()


forumRouter.get("/", returnCategoriesNumber)
forumRouter.get("/:category", returnPostNoteByCategory)
forumRouter.post("/comment", createNoteComment)
forumRouter.get("/comment/:id", returnNoteComment)

module.exports = forumRouter;
