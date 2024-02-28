import React, { useState } from "react";
import { motion } from "framer-motion";
import InputField from "../../../Components/InputFields/InputField";
import { Box, Paper, Grid, styled, Button } from "@mui/material";
import {
  AccountCircle,
  KeyOutlined as KeyOutlinedIcon,
  AlternateEmail as AlternateEmailIcon,
  Send as SendIcon,
} from "@mui/icons-material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  margin: "2rem",
}));

const BackGroundCanvas = styled("div")({
  height: "100vh",
  color: "darkslategray",
  // backgroundImage:`url(${require("./Computer_login.gif")})`,
  // backgroundSize: 'contain',
  // backgroundPosition: 'center center',
  // backgroundRepeat: 'no-repeat',
  backgroundColor: "aliceblue",
  padding: 0,
  margin: 0,
  borderRadius: 4,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

const Registration = () => {
  /* Registrartion */
  const handleSigUp = (e) => {
    e.preventDefault();
    let fromData = new FormData(e.target);
    let fromObject = Object.fromEntries(fromData);
    console.log(fromData, fromObject);
  };
console.log(window.location.origin, window.location.pathname)
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2 }}
      style={{ padding: 0, margin: 0, justifyContent: "Center" }}
    >
      <BackGroundCanvas>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Item>
              <div style={{width:"100%", height:"100%"}}>
                <img src={require("../../../Assets/Computer_login.gif")} alt="uuu"  
                style={{ width:"50%", height:"50%"}}/>
                <h1>Welcome Back!</h1>
                <p className="animated-text">
                  Connect with us
                </p>
              </div>
            </Item>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Item>
              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { mt: 1, mb: 1 },
                }}
                // noValidate
                // autoComplete="off"
                onSubmit={handleSigUp}
              >
                <h1 className="glowing-text">Sign Up</h1>

                <div>
                  <InputField
                    type="text"
                    label="Name"
                    name="name"
                    startIcon={<AccountCircle />}
                    // endIcon={<AlternateEmailIcon />}
                    isRequired
                    fullWidth
                  />
                </div>

                <div>
                  <InputField
                    type="email"
                    label="Email"
                    name="email"
                    startIcon={<AccountCircle />}
                    endIcon={<AlternateEmailIcon />}
                    isRequired
                    fullWidth
                  />
                </div>

                <div>
                  <InputField
                    type="password"
                    label="Paaword"
                    name="password"
                    startIcon={<KeyOutlinedIcon />}
                    endIcon={true} // for password visibility
                    isRequired
                    fullWidth
                  />
                </div>

                <div>
                  <InputField
                    type="password"
                    label="Confirm Paaword"
                    name="ConfirmPassword"
                    startIcon={<KeyOutlinedIcon />}
                    endIcon={true} // for password visibility
                    isRequired
                    fullWidth
                  />
                </div>

                <Grid item xs={12} md={12} lg={12} m={2}>
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    // startIcon=
                    fullWidth
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Box>
            </Item>
          </Grid>
        </Grid>
      </BackGroundCanvas>
    </motion.div>
  );
};

export default Registration;
