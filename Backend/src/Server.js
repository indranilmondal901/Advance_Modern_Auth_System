const express = require('express');
const cors = require("cors");
const cookieParser = require('cookie-parser');
const PORT = process.env.PORT || 8080;
const app = express();

//DB connection
require("./DB/Connection");

//router
const UserRoutes = require("./Routes/User/UserRoutes");

app.use(cors());
app.use(cookieParser());
app.use(express.json());

app.use("/api/v1/user",UserRoutes);

//listen(server)
app.listen(PORT, () => {
    console.log("Your Server is running on PORT no ==> " + PORT)
})