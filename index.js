const express=require('express');
const dbconnect = require('./config/db');
const userroute = require('./routes/useroutes');

const app=express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("working..");
});

app.use("/user",userroute);
app.listen(8090,()=>{
    console.log("started server..");
    dbconnect();
});