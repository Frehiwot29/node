const express = require("express");
const router = express.Router();
const controller = require("../controllers/order.controller");
const authMiddleware = require("../middleware/auth.middleware");
router.get("/", authMiddleware.checkAuthorization, controller.get);
module.exports = router;