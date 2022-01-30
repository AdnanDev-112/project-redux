const jwt = require("jsonwebtoken");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const authenticate = require("../middleware/authenticate");
const randomString = require('randomstring');


require("../db/conn");
const User = require("../db/model/userSchema");
const PublicProfileSchema = require("../db/model/publicProfileSchema");

router.post("/register", async (req, res) => {
    const { name, email, password, confirmpassword } = req.body;
    const joinedDate = new Date().getTime();

    if (!name || !email || !password || !confirmpassword) {
        return res.status(422).send("Please fill the field");
    }

    try {
        const userExist = await User.findOne({ email: email });

        if (userExist) {
            return res.status(422).send("Email Already Exists");
        } else if (password != confirmpassword) {
            return res.status(422).send("Password  Don't Match ");
        }
        const profileID = randomString.generate({ length: 24 })
        const user = new User({
            username: name,
            email,
            password,
            confirmpassword,
            joinedDate,
            profileID,
            Profile: [
                {
                    isProfileComplete: false,
                },
            ],
        });

        await user.save();
        // After Saving in the main Collection Save in the Public Profiles Schema
        const newProfile = new PublicProfileSchema({
            isProfileComplete: false,
            username: name,
            joinedDate,
            profileID,
        });
        await newProfile.save();


        res.status(201).json({ message: "User registered successfully" });
    } catch (error) { console.log(error); }
});

router.post("/login", async (req, res) => {
    try {
        let token;
        const { email, password } = req.body;
        if (!email || !password) {
            res.status(400).send("Please Fill the fields properly");
        }

        const userLogin = await User.findOne({ email: email });

        if (userLogin) {
            const isMatch = await bcrypt.compare(password, userLogin.password);

            token = await userLogin.generateAuthToken();
            res.cookie("sessiontoken", token, {
                expires: new Date(Date.now() + 432000000),
                httpOnly: true,
            });
            res.cookie("ssi", userLogin.profileID, {
                expires: new Date(Date.now() + 432000000),
                httpOnly: true,
            });

            if (!isMatch) {
                res.status(400).json({ Error: "Invalid Credentials" });
            } else {
                res.json({
                    message: "User Sign in Successfully",
                    token: token,
                });
            }
        } else {
            res.status(400).json({ Error: "Invalid Credentials" });
        }
    } catch (error) {
        console.log(error);
    }
});


router.post("/logout", async (req, res) => {

    res.cookie("sessiontoken", "", {
        expires: new Date(Date.now() + 5000),
        httpOnly: true
    });
    res.status(200).send("Logged Out")



});


module.exports = router;
