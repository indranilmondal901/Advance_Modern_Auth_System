const express = require("express");
const router = express.Router();

/* Controller */
const {
  Registration,
  Login,
  GetUser,
} = require("../../Controller/Routes_Controller/UserController.js");
/* Middlewire */
const { VerifyToken } = require("../../MiddleWire/CustomMiddleWire.js");

/* test routes */
router.get("/", async (req, res) => {
  res.send("user routes tested");
});

router.post("/sign-up", Registration);
router.post("/sign-in", Login);
router.get("/user", VerifyToken, GetUser);

module.exports = router;
