require('dotenv').config();
const config = require("./config.json");
const mongoose = require('mongoose');

mongoose.connect(config.connectionString);

const User= require("./models/user.model")

const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser')
const app=express();

const jwt = require("jsonwebtoken");
const {authenticateToken} = require("./utilities");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
app.use(
    cors({
        origin :"*",
    })
);

app.get("/",(req, res)=>{
    res.json({data:"hello"});
});

app.post('/create-account',async (req, res)=>{
    console.log(req.body);

    const { firstName,lastName,email,password} = req.body;

    if(!firstName){
        return res
        .status(400)
        .json({error: true, message: "First name is required"});
    }

    if(!lastName){
        return res
        .status(400)
        .json({error: true, message: "Last name is required"});
    }

    if(!email){
        return res
        .status(400)
        .json({error: true, message: "Email is required"});
    }

    if(!password){
        return res
        .status(400)
        .json({error: true, message: "Password is required"});
    }


    const isUser = await User.findOne({email: email});

    if(isUser){
        return res.json({
    error:true,
            message:"User already exist",
        });
    }
    const user = new User({
        firstName,
        lastName,
        email,
        password,
    });

    await user.save();

    const accessToken = jwt.sign({user}, process.env.ACCESS_TOKEN_SECRET,{
        expiresIn : "5000m",
    });



    return res.json({
        error: false,
        user,
        accessToken,
        message: "Registration Successful",
    });

});
app.listen(8000);

