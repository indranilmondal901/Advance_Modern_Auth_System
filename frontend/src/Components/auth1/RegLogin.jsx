import React from "react";
import * as Components from "./componentTag.js";

const RegLogin = () => {
  const [signIn, toggle] = React.useState(true);

  /* Registration */
  const handleRegister = (e) => {
    e.preventDefault();
    let fromData = new FormData(e.target);
    let fromObject = Object.fromEntries(fromData);
    console.log(fromData, fromObject);
  };

  /* Login */
  const handleLogin = (e) => {
    e.preventDefault();
    let fromData = new FormData(e.target);
    let fromObject = Object.fromEntries(fromData);
    console.log(fromData, fromObject);
  };

  return (
    <Components.Container>
      {/* Register or Sign Up */}
      <Components.SignUpContainer signingIn={signIn}>
        <Components.Form onSubmit={handleRegister}>
          <Components.Title>Create Account</Components.Title>
          <Components.Input type="text" name="name" placeholder="Name" />
          <Components.Input type="email" name="email" placeholder="Email" />
          <Components.Input
            type="password"
            name="password"
            placeholder="Password"
          />
          <Components.Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
          />
          <Components.Button type="submit">Sign Up</Components.Button>
        </Components.Form>
      </Components.SignUpContainer>

      {/* Login or Sign In */}
      <Components.SignInContainer signingIn={signIn}>
        <Components.Form method="post" onSubmit={handleLogin}>
          <Components.Title>Sign in</Components.Title>
          <Components.Input type="email" name="email" placeholder="Email" />
          <Components.Input
            type="password"
            name="password"
            placeholder="Password"
          />
          <Components.Anchor href="/forgot-password">Forgot your password?</Components.Anchor>
          <Components.Button>Sign In</Components.Button>
        </Components.Form>
      </Components.SignInContainer>

      <Components.OverlayContainer signingIn={signIn}>
        <Components.Overlay signingIn={signIn}>
          <Components.LeftOverlayPanel signingIn={signIn}>
            <Components.Title>Welcome Back!</Components.Title>
            <Components.Paragraph>
              To keep connected with us please login with your credentials
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(true)}>
              Sign In
            </Components.GhostButton>
          </Components.LeftOverlayPanel>
          <Components.RightOverlayPanel signingIn={signIn}>
            <Components.Title>Hello, Friend!</Components.Title>
            <Components.Paragraph>
              Enter your personal details and start journey with us
            </Components.Paragraph>
            <Components.GhostButton onClick={() => toggle(false)}>
              Sign Up
            </Components.GhostButton>
          </Components.RightOverlayPanel>
        </Components.Overlay>
      </Components.OverlayContainer>
    </Components.Container>
  );
};

export default RegLogin;
