
const express = require('express');
const router = express.Router();
const authenticate = require("../middleware/authenticate");


const CategoryProfiles = require("../db/model/categorySchema");


require("../db/conn");
const User = require("../db/model/userSchema");
const PbProfile = require("../db/model/publicProfileSchema");


const randomString = require('randomstring');


router.get('/myprofile', authenticate, (req, res) => {

    res.send(req.userDetails);
    // res.send(req.userDetails);

});


router.get('/categories', async (req, res) => {
    const data = await CategoryProfiles.find({});
    res.status(200).send(data);


});

// Public User Profile
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




});

router.get("/profile/getGigDisplay/:ownerID", async (req, res) => {
    try {


        const ownerID = req.params.ownerID;
        const fetchProfile = await PbProfile.findOne({ profileID: ownerID });

        if (fetchProfile) {
            console.log(fetchProfile);
            const { profileData, joinedDate, username } = fetchProfile;
            res.status(200).send({ profileData, joinedDate, username });
        } else {
            res.status(404).send();
        }
    } catch (error) {
        res.send(error)
    }




});

// Gig Page 
router.get("/categories/gig/:gigID", async (req, res) => {
    try {
        const gigID = req.params.gigID;
        const fetchGig = await CategoryProfiles.findOne({ gigID });
        if (fetchGig) {
            res.status(200).send(fetchGig)
        }
    } catch (error) {
        res.status(404).send(error);
    }


})





router.post("/complete_profile", authenticate, async (req, res) => {

    try {
        const token1 = req.cookies.sessiontoken;
        const profileID = req.cookies.ssi;
        const { firstName, lastName, description, occupation, image } = req.body;
        const Pbprfile = await PbProfile.findOneAndUpdate({ profileID }, {
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

//  GIG FORM HERE 
router.post("/complete_gig", authenticate, async (req, res) => {

    try {
        const token1 = req.cookies.sessiontoken;
        const profileID = req.cookies.ssi;
        const { title, image } = req.body;
        const gigID = randomString.generate({ length: 24 })
        const Pbprfile = await PbProfile.findOneAndUpdate({ profileID }, { $push: { gigs: req.body } })
        const user = await User.findOneAndUpdate({ token: token1 },
            {
                $push: { gigsOwned: { gigID, title, image } }
            }

        );
        const catSaved = await new CategoryProfiles({ ...req.body, gigID, ownerID: profileID }).save()

        if (user && PbProfile && catSaved) {

            res.status(200).send("Profile Updated");
        }
    } catch (error) {
        res.send(error);
        console.log(error);
    }



})





module.exports = router;
