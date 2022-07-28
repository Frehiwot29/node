const jwt = require("jsonwebtoken");
const checkAuthorization = (req, res, next) => {
    if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];
        if (token) {
            const data = jwt.verify(token, "askdjhaklsjdhakjsdh");
            req._id = data.id;
            req.email = data.email;
            req.role = data.role;
            next();
        } else {
            res.status(403).json({
                message: "You must provide JWT token!",
            });
        }
    } else {
        res.status(403).json({
            message: "You must be authorized!",
        });
    }
};

const checkAdmin = (req, res, next) => {
    if (req.role === "admin") next();
    else
        res.status(403).json({
            message: "Access forbidden!",
        });
};

module.exports = { checkAuthorization, checkAdmin,};
