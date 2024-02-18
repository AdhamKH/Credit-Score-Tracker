import { Grid } from "@mui/material";
import React from "react";
import { Bigsection } from "./style";
import SignUpForm from "./components/signupForm";
import singUpImage from "../../assets/sign_up.svg";
import { LoginImage } from "../login/loginPageStyle";
const SingUp = () => {
  return (
    <Bigsection>
      <Grid
        container
        alignItems={"center"}
        justifyContent={"space-between"}
        spacing={10}
      >
        <Grid item md={6} xs={12}>
          <h3>SignUp</h3>
          <SignUpForm />
        </Grid>
        <Grid item md={6} xs={12}>
          <LoginImage sx={{ display: { md: "flex", xs: "none" } }}>
            <img src={singUpImage} alt="login" />
          </LoginImage>
        </Grid>
      </Grid>
    </Bigsection>
  );
};

export default SingUp;
