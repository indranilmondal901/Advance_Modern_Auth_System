import React, { useState } from "react";
import InputField from "../../../Components/InputFields/InputField";
import {
  Box,
  Input,
  FilledInput,
  OutlinedInput,
  InputLabel,
  InputAdornment,
  FormHelperText,
  FormControl,
  TextField,
  IconButton,
  Paper,
  Grid,
  styled,
  Button,
} from "@mui/material";
// import { styled } from "@mui/material/styles";
import {
  AccountCircle,
  Visibility,
  VisibilityOff,
  KeyOutlined as KeyOutlinedIcon,
  AlternateEmail as AlternateEmailIcon,
  Send as SendIcon,
} from "@mui/icons-material";
// import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
// import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Login = () => {

  /* Login */
  const handleLogin = (e) => {
    e.preventDefault();
    let fromData = new FormData(e.target);
    let fromObject = Object.fromEntries(fromData);
    console.log(fromData, fromObject);
  };

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Box className="auth-box-left" textAlign={"center"}>
              <h1 className="auth-box-left-heading">Welcome Back!</h1>
              <p className="auth-box-left-paragraph">
                To keep connected with us please login with your credentials
              </p>
            </Box>
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <Box sx={{ flexGrow: 1, mt: "2rem" }}>
              <Grid container justifyContent="center" spacing={3}>
                <form method="post" onSubmit={handleLogin}>
                  <Grid item xs={12} md={12} lg={12} m={2}>
                    <InputField
                      type="email"
                      label="Email"
                      name="email"
                      isRequired
                    />
                  </Grid>
                  <Grid item xs={12} md={12} lg={12} m={2}>
                    <InputField
                      type="password"
                      label="Paaword"
                      name="password"
                      isRequired
                    />
                  </Grid>

                  <Grid item xs={12} md={12} lg={12} m={2}>
                    <Button
                      type="submit"
                      variant="contained"
                      endIcon={<SendIcon />}
                      fullWidth
                    >
                      Login
                    </Button>
                  </Grid>
                </form>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Login;
