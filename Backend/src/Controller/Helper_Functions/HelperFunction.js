/* model */
const fs = require("fs");
const UserModel = require("../../Model/User/UserSchema");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const saltValue = 12;
const JWT_SECRET_KEY = "qazwsxedcvfrbgtnhyujmik";
const JWT_TOKEN_VALIDITY = "1hr";

const logError = (routePath, error) => {
  // Log the error to a file (append to an error log file).
  fs.appendFile(
    "error.log",
    `${new Date().toISOString()} [${routePath}]: \n ${error}\n`,
    (err) => {
      if (err) {
        console.error("Error logging to file:", err);
      }
    }
  );
};

const IsEmailExist = async (email) => {
  try {
    /* unique email check */
    const isEmailExist = await UserModel.findOne({ email: email });
    if (isEmailExist) {
      return { status: true, data: isEmailExist };
    } else {
      return { status: false, data: null };
    }
  } catch (error) {
    return { status: false, data: null };
  }
};

const PasswordHash = async (password) => {
  try {
    const result = await bcrypt.hash(password, saltValue);
    return {
      status: true,
      hashedPassword: result,
      message: "Password hashed successfully.",
    };
  } catch (err) {
    return {
      status: false,
      hashedPassword: null,
      message: "Error hashing password",
    };
  }
};

const IsCorrectPassword = async (EnteredPassword, OriginalPassword) => {
  try {
    let result = await bcrypt.compare(EnteredPassword, OriginalPassword);
    return result;
  } catch (error) {
    console.error("Error comparing passwords:", error);
    logError("Error comparing passwords", error);
    return false;
  }
};

const GenerateToken = (payload) => {
  try {
    console.log("first", payload);
    const token = jwt.sign(payload, JWT_SECRET_KEY, {
      expiresIn: JWT_TOKEN_VALIDITY,
    });
    console.log(token);
    return token;
  } catch (error) {
    logError(error);
  }
};

module.exports = {
  logError,
  IsEmailExist,
  PasswordHash,
  IsCorrectPassword,
  GenerateToken,
};
