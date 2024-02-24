import React from "react";
import * as Components from "./componentTag.js";
import FPgif from "./Forgot_password.gif";

const ForgotPassword = () => {
  return (
    <Components.Container>
      <Components.ForgotPasswordContainer_Left>
          <Components.Title style={{color:"Green",padding:"1rem"}}>Do'nt worry, Friend!</Components.Title>
        <Components.Paragraph style={{color:"Green",backgroundColor:"wheat", fontWeight:"bolder",marginTop:"15rem"}}>
          Type your email to reset your password
        </Components.Paragraph>
      </Components.ForgotPasswordContainer_Left>

      <Components.ForgotPasswordContainer_Rigth>
      <Components.Title style={{color:"Green",backgroundColor:"wheat", fontWeight:"bolder"}}>Enter Email Here</Components.Title>

          <div>
            <form>
              <input type="email"/>
            </form>
          </div>
      </Components.ForgotPasswordContainer_Rigth>
    </Components.Container>
  );
};

export default ForgotPassword;
