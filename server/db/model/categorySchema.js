const mongoose = require('mongoose');


const categorySchema = new mongoose.Schema({
    gigID: { type: String },
    ownerID: { type: String },
    title: { type: String },
    category: { type: String },
    category1: { type: String },
    description: { type: String },
    image: { type: String },
    price: { type: Array },
    pricingPage: {
        title1: { type: String },
        description1: { type: String },
        deadline1: { type: String },
        revision1: { type: String },
        title2: { type: String },
        description2: { type: String },
        deadline2: { type: String },
        revision2: { type: String },
        checkedBoxes: { type: Array }

    }


});




const CategoryProfiles = mongoose.model('category-profiles', categorySchema);

module.exports = CategoryProfiles;
