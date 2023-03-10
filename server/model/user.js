const client = require("../db/connection")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

class User {
    constructor({ user_id, user_username, user_password, user_isAdmin, user_email, profile_pic }) {
        this.id = user_id
        this.username = user_username
        this.email = user_email
        this.password = user_password
        this.profile_pic = profile_pic
        this.isAdmin = user_isAdmin
    }


    static async getById(id) {

        try {
            const response = await client.query("SELECT * FROM users WHERE user_id = $1;", [id])
            return response.rows[0]
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }
    }

    static async getByUsername(username) {
        try {
            const response = await client.query("SELECT * FROM users WHERE username = $1;", [username])

            return response.rows[0]
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }
    }

    static async getByEmail(email) {
        try {
            const response = await client.query("SELECT * FROM users WHERE user_email = $1;", [email])

            return response.rows[0]
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }
    }

    static async create({ username, password, email }) {

        if (!username || !password || !email) {
            throw new Error("Please provide both an username and password")
        }
        if (await this.getByUsername(username)) {
            throw new Error("Username already taken")
        } if (await this.getByEmail(email)) {
            throw new Error("email already registered with")
        }
        try {
            const hashedPassword = await bcrypt.hash(password, Number(process.env.SALT))
            const response = await client.query("INSERT INTO users (username, password, user_email) VALUES ($1, $2, $3);", [username, hashedPassword, email])
            return ({
                message: "User registration successful"
            })
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }
    }



    static async login({ username, password }) {
        if (!username || !password) {
            throw new Error("Please provide both an username and password")
        }
        if (!await this.getByUsername(username)) {
            throw new Error("Incorrect username or password")
        }
        try {
            const user = await this.getByUsername(username)
            if (!user) {
                throw new Error("Incorrect username or password")
            }
            const passwordMatch = await bcrypt.compare(password, user.password)
            if (!passwordMatch) {
                throw new Error("Incorrect username or password")
            }

            const token = jwt.sign({ sub: user.user_id, username: user.username }, process.env.SECRET, { expiresIn: "1 day" })

            if (user.isadmin == true) {
                const permission = true;
                return [token, permission]
            } else {
                return [token]
            }
        } catch (err) {
            return ({
                error: true,
                message: err.message
            })
        }
    }
}



module.exports = User;
