const express = require("express")

const app = express();

app.get("/" , (req , res)=>{
    res.json({
        message : "Server running successfully , updated message"
    })
});

app.listen(3000 , ()=>{
    console.log("server running successfully on port 3000")
});