const mongoose = require("mongoose");
const User = mongoose.model("user");

const add = (req, res) => {
    User.findById(req._id).then((user) => {
        if (!user.cart.id(req.body._id)) user.cart.push(req.body);
        user.save().then((user) => res.json(user.cart))
            .catch((err) =>
                res.status(400).json({
                    message: "User already registered!",
                })
            );
    })
        .catch((err) =>
            res.status(400).json({
                message: "User not found!",
            })
        );
};

const get = (req, res) => {
    User.findById(req._id)
        .select("cart")
        .then((user) => res.json(user.cart))
        .catch((err) =>
            res.status(400).json({
                message: "User not found!",
            })
        );
};

const remove = (req, res) => {
    User.findById(req._id)
        .then((user) => {
            user.cart.id(req.params.id).remove();
            user
                .save()
                .then((user) => res.json(user.cart))
                .catch((err) =>
                    res.status(500).json({
                        message: "Something went wrong",
                    })
                );
        })
        .catch((err) =>
            res.status(400).json({
                message: "User not found!",
            })
        );
};

module.exports = { add, get, remove };