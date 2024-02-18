import React from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  Controller,
  FormProvider,
  SubmitHandler,
  useFieldArray,
  useForm,
} from "react-hook-form";
import { Grid } from "@mui/material";
import StanderInput from "../../../../shared/inputs/standerInput";
import { SubmitButton } from "../../../../shared/Buttons/SubmitButton";
import { allData } from "../../../../staticData/loginData";
import { Tlogin } from "../../../../types/loginType";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const SignUpForm = () => {
  const navigate = useNavigate();
  const schema = yup.object({
    email: yup.string().email().required("email is required"),
    password: yup
      .string()
      .required("password is required")
      .min(8, "must be atleast 8 digits"),
    address: yup.string().required("address field cannot be empty"),
    name: yup.string().required("name field cannot be empty"),
    phoneNumber: yup
      .string()
      .required("phoneNumber field cannot be empty")
      .matches(/^[0-9]+$/, "phone number must only contain numbers"),
  });
  const methods = useForm<any>({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: Tlogin) => {
    try {
      const objectExists: boolean = allData.some(
        (item) => item.email === data.email
      );
      console.log("objectExists", objectExists);
      if (objectExists) {
        toast.error("User already exists");
      } else {
        allData.push(data);
        localStorage.setItem("users", JSON.stringify(allData));
        toast.success("Contgratulations You have created new account");
        navigate("/login");
      }
      console.log("allData", allData);
    } catch (error: any) {}
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid container columns={12} spacing={2}>
            <Grid item xs={12}>
              <StanderInput
                // required
                name="name"
                placeholder="name"
                Label="name"
                type="string"
                defaultValue=""
              ></StanderInput>
            </Grid>
            <Grid item xs={12}>
              <StanderInput
                // required
                name="email"
                placeholder="email"
                Label="email"
                type="string"
                defaultValue=""
              ></StanderInput>
            </Grid>
            <Grid item xs={12}>
              <StanderInput
                // required
                name="password"
                placeholder="password"
                Label="password"
                type="password"
                defaultValue=""
              ></StanderInput>
            </Grid>
            <Grid item xs={12}>
              <StanderInput
                // required
                name="address"
                placeholder="address"
                Label="address"
                type="string"
                defaultValue=""
              ></StanderInput>
            </Grid>
            <Grid item xs={12}>
              <StanderInput
                // required
                name="phoneNumber"
                placeholder="phoneNumber"
                Label="phoneNumber"
                type="string"
                defaultValue=""
              ></StanderInput>
            </Grid>

            <Grid item xs={12}>
              <SubmitButton type="submit" fullWidth>
                Create
              </SubmitButton>
            </Grid>
            <Grid item xs={12}>
              {/* <Errors errors={error}></Errors> */}
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
};

export default SignUpForm;
