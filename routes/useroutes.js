const { Router } = require("express");
const { getUser, createUser } = require("../controllers/user.controller");


const userrouter=Router();

userrouter.get("/",getUser);
userrouter.post("/",createUser);


module.exports =userrouter