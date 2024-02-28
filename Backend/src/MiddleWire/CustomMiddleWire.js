/* model */
const UserModel = require("../Model/User/UserSchema");
/* helper functions */
const {
  logError,
  IsEmailExist,
  PasswordHash,
  IsCorrectPassword,
} = require("../Controller/Helper_Functions/HelperFunction");

const jwt = require("jsonwebtoken");
const JWT_Secret_Key = "qazwsxedcvfrbgtnhyujmik";

const VerifyToken = (req, res, next) => {
  //   const headers = req.headers["authorization"];
  const cookies = req.headers.cookie;
  const token = cookies.split("=")[1];

  if (!token) {
    return res.status(404).send({
      message: "Invalid token",
    });
  }
  jwt.verify(String(token), JWT_Secret_Key, (error, data) => {
    if (error) {
      logError(req.originalUrl, error);
      return res.status(404).send({
        message: "Invalid token",
      });
    }
    console.log(31, data);
    req.id = data.userId;
  });
  next();
};

module.exports = {
  VerifyToken,
};
