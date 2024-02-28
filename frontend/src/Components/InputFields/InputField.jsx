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

const InputField = ({
  type,
  label,
  name,
  isRequired,
  value,
  startIcon,
  endIcon,
  fullWidth
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  // console.log(type,label,name,isRequired, value)
  switch (type) {
    case "password":
      return (
        <TextField
          id="standard-input-with-icon-textfield"
          type={showPassword ? "text" : "password"}
          label={label}
          name={name}
          InputProps={
            startIcon || endIcon
              ? {
                  startAdornment: startIcon && (
                    <InputAdornment position="start">
                      {startIcon}
                    </InputAdornment>
                  ),
                  endAdornment: endIcon && (
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
                }
              : null
          }
          required
          fullWidth={fullWidth}
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
          InputProps={
            startIcon || endIcon
              ? {
                  startAdornment: startIcon && (
                    <InputAdornment position="start">
                      {startIcon}
                    </InputAdornment>
                  ),
                  endAdornment: endIcon && (
                    <InputAdornment position="end">
                      <IconButton edge="end">{endIcon}</IconButton>
                    </InputAdornment>
                  ),
                }
              : null
          }
          required={isRequired}
          fullWidth={fullWidth}
        />
      );
  }
};

export default InputField;
