const { default: mongoose } = require("mongoose");

let UserSchema = new mongoose.Schema({
  email: {
    type: String,
    require: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },
  password: {
    type: String,
    require: [true, "Please provide a password"],
    unique: false,
  },
});

module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);
