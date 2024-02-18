import { FormContainerStyle, HeaderLogin, LoginImage } from "./loginPageStyle";
import { Grid } from "@mui/material";
import loginImage from "../../assets/loginSvg.svg";
import { useState } from "react";
import LoginForm from "./loginForm";

const LoginPage = () => {
  return (
    <HeaderLogin>
      <Grid
        container
        spacing={10}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Grid item md={6} xs={12}>
          <LoginForm />
        </Grid>
        <Grid item md={6} xs={12} sx={{ display: { md: "flex", xs: "none" } }}>
          <LoginImage>
            <img src={loginImage} alt="login" />
          </LoginImage>
        </Grid>
      </Grid>
    </HeaderLogin>
  );
};

export default LoginPage;
