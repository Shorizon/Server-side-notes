const fs = require("fs")
const { setgroups } = require("process")
const client = require("./connection")

const userSchema = fs.readFileSync('./db/user.sql').toString()
const noteSchema = fs.readFileSync('./db/note.sql').toString()
const commentSchema = fs.readFileSync('./db/comment.sql').toString()
const seed = fs.readFileSync('./db/seed.sql').toString()

const clear = fs.readFileSync('./db/clean.sql').toString()

const setupDatabase = async () => {
    await client.query(userSchema);
    await client.query(noteSchema);
    await client.query(commentSchema);
    await client.query(seed);
}

setupDatabase()


module.exports = { setupDatabase };
