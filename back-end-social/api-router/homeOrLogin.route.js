const route=require('express').Router()
const homeOrLogin=require("../controllers/homeOrLoginController")



route.post('/',homeOrLogin)

module.exports=route