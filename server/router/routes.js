
const express = require('express');
const router = express.Router();
const authenticate = require("../middleware/authenticate");


const CategoryProfiles = require("../db/model/categorySchema");


require("../db/conn");
const User = require("../db/model/userSchema");




router.get('/myprofile', authenticate, (req, res) => {

    res.send(req.userDetails);
    // res.send(req.userDetails);

});


router.get('/categories', async (req, res) => {
    const data = await CategoryProfiles.find({});
    res.status(200).send(data);


});

router.post("/complete_profile", authenticate, async (req, res) => {

    try {
        const token1 = req.cookies.sessiontoken;
        const { firstName, lastName, description, occupation, image } = req.body;
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
        if (user) {
            res.status(200).send("Profile Updated");
        }
    } catch (error) {
        res.send(error)
    }



})





module.exports = router;
