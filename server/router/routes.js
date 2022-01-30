
const express = require('express');
const router = express.Router();
const authenticate = require("../middleware/authenticate");


const CategoryProfiles = require("../db/model/categorySchema");


require("../db/conn");
const User = require("../db/model/userSchema");
const PbProfile = require("../db/model/publicProfileSchema");




router.get('/myprofile', authenticate, (req, res) => {

    res.send(req.userDetails);
    // res.send(req.userDetails);

});


router.get('/categories', async (req, res) => {
    const data = await CategoryProfiles.find({});
    res.status(200).send(data);


});

router.get("/profile/:profileName", async (req, res) => {
    try {


        const profileName = req.params.profileName;
        const fetchProfile = await PbProfile.findOne({ username: profileName });

        if (fetchProfile) {
            res.status(200).send(fetchProfile);
        } else {
            res.status(404).send();
        }
    } catch (error) {
        res.send(error)
    }




})





router.post("/complete_profile", authenticate, async (req, res) => {

    try {
        const token1 = req.cookies.sessiontoken;
        const profielID = req.cookies.ssi;
        const { firstName, lastName, description, occupation, image } = req.body;
        const Pbprfile = await PbProfile.findOneAndUpdate({ profielID }, {
            isProfileComplete: true,
            profileData: [{
                fullName: `${firstName} ${lastName}`,
                image,
                description,
                occupation,
            }]

        })
        const user = await User.findOneAndUpdate({ token: token1 },
            {
                Profile: [{
                    isProfileComplete: true,
                    profileData: [{
                        fullName: `${firstName} ${lastName}`,
                        image,
                        description,
                        occupation,
                    }]
                }]
            }

        );

        if (user && PbProfile) {

            res.status(200).send("Profile Updated");
        }
    } catch (error) {
        res.send(error)
    }



})





module.exports = router;
