const jwt = require('jsonwebtoken');
const User = require('../db/model/userSchema');




// const Authenticate = async (req, res, next) => {
//     try {

//         const token = req.cookies.sessiontoken;
//         const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
//         console.log(verifyToken);

//         const userDetails = await User.findOne({ _id: verifyToken._id, "tokens.token": token });

//         if (!userDetails) {
//             console.log("User Not Found");
//         }
//         req.token = token;
//         req.userDetails = userDetails;
//         req.userID = userDetails._id;
//         next();


//     } catch (error) {
//         res.status(401).send("Unauthorized");
//         // console.log(error)
//     }


// }

const Authenticate = async (req, res, next) => {
    try {

        const token = req.cookies.sessiontoken;
        const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
        // console.log(verifyToken);

        const userDetails = await User.findOne({ _id: verifyToken._id, "token": token });

        if (!userDetails) {
            console.log("User Not Found");
        } else {
            const { username, joinedDate, Profile } = (userDetails)
            const newData = { username, joinedDate, Profile };

            req.token = token;
            // req.userDetails = userDetails;
            req.userDetails = newData;
            req.userID = userDetails._id;
            next();
        }



    } catch (error) {
        res.status(401).send("Unauthorized");
        console.log(error)
    }


}



module.exports = Authenticate;