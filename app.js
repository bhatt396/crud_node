const express= require("express")
const app=express()


require("dotenv").config()





app.set("view engine","ejs")


app.get("/",(req,res)=>
{
res.send("site is live ")
})

app.get("/addBlog",(req,res)=>{
res.render("addBlog.ejs")
})

app.get("/update",(req,res)=>
    {
    res.render("update.ejs")
})





console.log(process.env.PORT)


app.listen(3001,()=>{
    console.log("project strted at 3001 port ")
})


//set the ejs to nodejs for UI  design 
