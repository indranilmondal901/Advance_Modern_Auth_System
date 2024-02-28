/* model */
const UserModel = require("../../Model/User/UserSchema");
/* helper functions */
const {
  logError,
  IsEmailExist,
  PasswordHash,
  IsCorrectPassword,
  GenerateToken,
} = require("../Helper_Functions/HelperFunction");

const Registration = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    /* unique email check */
    const isExist = await IsEmailExist(email);
    if (isExist.status) {
      return res.status(404).send({
        message: "Email already exists",
      });
    }

    /* hashing password */
    const { status, hashedPassword, message } = await PasswordHash(password);
    if (!status) {
      return res.status(404).send({ message: message });
    }
    /* add to user */
    await UserModel.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(404).send({
      message: "registration successfully done",
    });
  } catch (error) {
    logError(req.originalUrl, error);
    return res.status(500).send({
      message: error.message,
    });
  }
};

const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    /* email check */
    const { status, data } = await IsEmailExist(email);
    if (!status) {
      return res.status(400).send({
        message: "Invalid credential.",
      });
    }

    /* hashing password */
    const result = await IsCorrectPassword(password, data.password);
    if (!result) {
      return res.status(400).send({
        message: "Invalid credential.",
      });
    }

    /* generate jwt token */
    const payload = { userId: data._id };
    const token = GenerateToken(payload);

    if (!token) {
      logError(req.originalUrl, "Error generating token.");
      return res.status(404).send({
        message: "Error generating token.",
      });
    }

    /* save into http only cookie */
    res.cookie(String(data._id), token, {
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60),
      httpOnly: true,
      sameSite:"lax"
    });

    return res.status(200).send({
      message: "Login successfull",
      token: token,
    });
  } catch (error) {
    logError(req.originalUrl, error);
    return res.status(500).send({
      message: error,
    });
  }
};

const GetUser = async (req, res) => {
  try {
    const userId = req.id;
    let user = await UserModel.findOne({ _id: userId }, "-password");
    if (!user) {
      return res.status(404).send({
        message: "User not found",
      });
    }
    return res.status(200).send({
      message: "User get sucessfully.",
      data: user,
    });
  } catch (error) {
    logError(req.originalUrl, error);
    return res.status(500).send({
      message: "User not found",
    });
  }
};

module.exports = {
  Registration,
  Login,
  GetUser,
};
