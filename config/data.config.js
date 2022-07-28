const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const User = mongoose.model("user");
const init = () => {
  User.findOne({ username: "admin" }).then((user) => {
    if (!user) {
      bcrypt.genSalt(10).then((salt) => {
        bcrypt.hash("admin", salt).then((hash) => {
          const newUser = {
            email: "admin@product.com",
            password: hash,
            role: "admin",
          };
          User.create(newUser).then((user) => {
            console.log("Admin user created", user);
          });
        });
      });
    }
  });
};
module.exports = { init };