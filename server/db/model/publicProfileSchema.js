const mongoose = require('mongoose');



const profileSchema = new mongoose.Schema({
    username: { type: String },
    isProfileComplete: { type: Boolean },
    joinedDate: {
        type: String
    },
    profileData: [{
        fullName: { type: String },
        image: { type: String },
        description: { type: String },
        occupation: { type: Array }
    }],
    gigs: []

})


const PublicProfileSchema = mongoose.model('public-profiles', profileSchema);

module.exports = PublicProfileSchema;
