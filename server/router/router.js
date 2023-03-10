const { Router } = require("express")
const { registerUser, loginUser, findById } = require("../controller/user")
const router = Router()


router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/user/:id", findById)



module.exports = router
