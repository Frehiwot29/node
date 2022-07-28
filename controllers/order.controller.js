const mongoose = require("mongoose");
const User = mongoose.model("user");
const get = (req, res) => {
    User.findById(req._id)
        .then((user) => {
            res.status(200).json(user.orders);
        })
        .catch((err) =>
            res.status(500).json({
                message: "Something went wrong!",
            })
        );
};
module.exports = { get };