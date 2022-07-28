const express = require("express");
const router = express.Router();
const controller = require("../controllers/cart.controller");
const authMiddleware = require("../middleware/auth.middleware");
router.post("/", authMiddleware.checkAuthorization, controller.add);
router.get("/", authMiddleware.checkAuthorization, controller.get);
router.delete("/:id", authMiddleware.checkAuthorization, controller.remove);

module.exports = router;