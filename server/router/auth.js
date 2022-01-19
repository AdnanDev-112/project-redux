const jwt = require('jsonwebtoken');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const authenticate = require("../middleware/authenticate");



require('../db/conn');
const User = require('../db/model/userSchema');
const CategoryProfiles = require("../db/model/categorySchema");

router.post('/register', async (req, res) => {
    const { name, email, password, confirmpassword } = req.body;
    if (!name || !email || !password || !confirmpassword) {
        return res.status(422).send('Please fill the field')
    }

    try {
        const userExist = await User.findOne({ email: email });


        if (userExist) {
            return res.status(422).send('Email Already Exists')

        } else if (password != confirmpassword) {
            return res.status(422).send('Password  Don\'t Match ');

        }


        const user = new User({
            name, email, password, confirmpassword, Profile: [{
                isProfileComplete: false,
            }]
        });

        await user.save();
        res.status(201).json({ message: "User registered successfully" });



    } catch (error) {

    }

})


router.post('/login', async (req, res) => {
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
                httpOnly: true
            });

            if (!isMatch) {
                res.status(400).json({ Error: "Invalid Credentials" });
            }
            else {

                res.json({
                    message: "User Sign in Successfully",
                    token: token
                });
            }
        } else {
            res.status(400).json({ Error: "Invalid Credentials" });

        }





    } catch (error) {
        console.log(error)
    }

})

router.get('/profile', authenticate, (req, res) => {
    res.send(req.userDetails);

});


router.get('/categories', async (req, res) => {
    const data = await CategoryProfiles.find({});
    res.status(200).send(data);


});

router.post("/logout", async (req, res) => {

    res.cookie("sessiontoken", "", {
        expires: new Date(Date.now() + 5000),
        httpOnly: true
    });
    res.status(200).send("Logged Out")



});


router.post("/complete_profile", authenticate, async (req, res) => {

    try {
        const token1 = req.cookies.sessiontoken;
        const { firstName, lastName, description, occupation } = req.body;
        const user = await User.findOneAndUpdate({ token: token1 },
            {
                Profile: [{
                    isProfileComplete: true,
                    profileData: [{
                        fullName: `${firstName} ${lastName}`,
                        image: "",
                        description,
                        occupation,
                    }]
                }]
            }

        );
        if (user) {
            res.status(200).send("Profile Updated");
        }
    } catch (error) {
        res.send(error)
    }



})



module.exports = router;