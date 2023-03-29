const express=require("express")
const { adduser,userlogin} = require("../controller/usercontroller")

const router=express.Router()

router.post("/adduser",adduser)
router.post("/userlogin",userlogin)

module.exports=router
