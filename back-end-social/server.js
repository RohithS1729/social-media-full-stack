const express=require("express")
const mongoose=require("mongoose")

// environment file
const dotenv=require("dotenv")
dotenv.config()
//server
const app=express();
//cors
const cors=require('cors')
app.use(cors())
//image upload
const fileUpload=require("express-fileupload")
app.use(fileUpload({
    useTempFiles:true
}))

console.log('ddddddddddddddddddddddddddddddddddddddd')
//body parser
const bodyParser=require("body-parser")
app.use(bodyParser.json())
//local modules
const router=require('./api-router/index')

//dbms
mongoose.connect(process.env.CONNECTION_STRING);
const db= mongoose.connection;
db.on('error',()=>{console.log('did not connect to db')});
db.on('open',()=>{console.log('started listening to db')});



app.use(router)





app.listen(process.env.PORT,process.env.HOSTNAME,()=>{
    console.log('listening')
})