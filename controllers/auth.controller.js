const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = mongoose.model("user");
const signin = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (user) {
        const valid = await bcrypt.compare(req.body.password, user.password);
        if (valid) {
            const token = jwt.sign(
                { id: user._id, email: user.email, role: user.role },
                "askdjhaklsjdhakjsdh"
            );
            res.status(200).json({
                token: token,
                user: {
                    email: user.email,
                    fullname: user.fullname,
                    role: user.role,
                    isAdmin: user.role === "admin",
                },
            });
        } else {
            res.status(400).json({
                message: "User password does not match!",
            });
        }
    } else {
        res.status(400).json({
            message: "User not registered!",
        });
    }
};

const signup = async (req, res) => {
    console.log(req.body);
    let user = await User.findOne({ email: req.body.email });
    if (!user) {
        const password = await bcrypt.hash(req.body.password, 10);
        const newUser = {
            fullname: req.body.fullname,
            email: req.body.email,
            password: password,
            role: "customer",
            cart: [],
            orders: [],
        };
        user = await User.create(newUser);
        res.status(200).json(user);
    } else {
        res.status(400).json({
            message: "User already registered!",
        });
    }
};
module.exports = { signin, signup };