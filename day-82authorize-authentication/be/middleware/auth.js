const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  //next gj orj irwel middleware ym bn gej oilgono
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(403).json({
      success: false,
      message: "Hereglegchiin token oruulah shaardlagatai",
    });
  }
  try {
    const decoded = jwt.verify(token, "MySuperDuperPrivateKey");
    req.user = decoded;
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Hereglegchiin token buruu, eswel idewhgui baina !!!",
    });
  }
  return next();
};

module.exports = verifyToken;
