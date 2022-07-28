const mongoose = require("mongoose");
const User = mongoose.model("user");
const checkout = (req, res) => {
    User.findById(req._id)
        .then((user) => {
            const order = {
                cardNumber: req.body.cardNumber,
                amount: user.cart.reduce((a, b) => { return a + b.price;}, 0),
                products: user.cart,
            };
            user.cart = [];
            user.orders.push(order);
            user
                .save()
                .then((user) => {
                    res.status(200).json(user.orders);
                })
                .catch((err) =>
                    res.status(500).json({
                        message: "Something went wrong!",
                    })
                );
        })
        .catch((err) =>
            res.status(400).json({
                message: "User not found!",
            })
        );
};
module.exports = { checkout };