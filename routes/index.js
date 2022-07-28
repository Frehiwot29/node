const express = require("express");

const router = express.Router();

const authRoutes = require("./auth.routes");
const productRoutes = require("./product.routes");
const cartRoutes = require("./cart.routes");
const paymentRoutes = require("./payment.routes");
const orderRoutes = require("./order.routes");

router.use("/auth", authRoutes);
router.use("/products", productRoutes);
router.use("/cart", cartRoutes);
router.use("/payment", paymentRoutes);
router.use("/orders", orderRoutes);

module.exports = router;