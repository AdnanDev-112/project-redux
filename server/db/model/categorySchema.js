const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    category: {
        type: String
    },
    name: {
        type: String
    },
    description: {
        type: String
    }


});




const CategoryProfiles = mongoose.model('category-profiles', categorySchema);

module.exports = CategoryProfiles;
