const UserData = require("../modals/userData")
const express = require("express")

const signUpController=(req,res)=>{
    // console.log(req.body.username)

    UserData.findOne({username:req.body.username}).exec((err,data)=>{
        console.log(data)
        if(err){
            res.send(err)
        }else if(data){
            res.send({
                msg:'user already exists'
            })
        }else{
            const newUser= new UserData(req.body);
            newUser.password=newUser.generateHash(req.body.password);
            // newUser.confirmPassword()

            newUser.save((err,data)=>{
                if(err) return res.send(err)
                else return res.send(newUser)
            })
        }
    })


    // res.send('signUp')
}
module.exports=signUpController