import React, { useState } from "react";
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

const InputField = ({ type,label,name,isRequired, value}) => {
  
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // console.log(type,label,name,isRequired, value)
  switch (type) {
    case "password":
      return (
        <TextField
          id="standard-input-with-icon-textfield"
          type={showPassword ? "text" : "password"}
          label="Password"
          name="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <KeyOutlinedIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
        />
      );

    default:
      return (
        <TextField
          id="standard-input-with-icon-textfield"
          type={type}
          label={label}
          name={name}
          value={value}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <AlternateEmailIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          required={isRequired}
        />
      );
  }
};

export default InputField;
