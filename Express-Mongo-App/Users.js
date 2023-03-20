let userSchema = new mongoose.Schema({  //Schema aas Model vvsgeh jishee (UserSchema-Model in User.js)
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

const User = mongoose.model("User", userSchema);
module.exports = User



// -------------------------------------------------

const userOne = User({name : "Tushigee"}); // 2 Model shineer vvsgeh
const userTwo = User({name : "Neozx"});



// -------------------------------------------------

let userSchemaSecond = new mongoose.Schema({ // Ene n UserSchema deer Collection shiner vvsgeh
    name: String,
    email: {
        type: String, unique: true
    }
},
{
    collection: "myuserlist"
});




// -------------------------------------------------

mongoose.model("User", userSchema, "myuserlist"); // userSchema deer Collection oruulj irj vvsgeh