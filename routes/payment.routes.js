const express = require("express");
const router = express.Router();
const controller = require("../controllers/payment.controller");
const authMiddleware = require("../middleware/auth.middleware");
router.post("/", authMiddleware.checkAuthorization, controller.checkout);
module.exports = router;