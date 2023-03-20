const { default: mongoose } = require("mongoose");

let foodSchema = new mongoose.Schema({  //Schema aas Model vvsgeh jishee (foodSchema-Model in User.js)
    name: String,
    email: {
        type: String,
        unique: true
    },
    createdOn: {
        type: Date,
        default: Date.now
    },
    modifiedOn: Date,
    lastLogin: Date
})

foodSchema.static.findByFoodEmail = function (foodEmail) {
    return this.find({email: foodEmail}, "_id name email", {
        sort: "modifiedOn",
    });
}

const Food = mongoose.model("food", foodSchema);
module.exports = Food
