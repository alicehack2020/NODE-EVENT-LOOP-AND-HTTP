const express=require("express") 
const Router=express.Router()

var list=[{name:"stp1 education",price:200},
{name:"stp3 education",price:200},
{name:"stp4 education",price:200},
{name:"stp5 education",price:200}]

Router.get("/",(req,res)=>{
    res.send("hello")
})


Router.get("/books",(req,res)=>{
     res.json(list)
})

module.exports=Router;