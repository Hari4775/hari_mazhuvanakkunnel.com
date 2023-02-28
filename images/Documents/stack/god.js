const express=require("express")
const app=express()


app.get("/signup", function(req,res){
   res.sendFile(path.join(__dirname,"signup.html"))

})
app.listen(4000,function(){
    console.log("server started")
})
