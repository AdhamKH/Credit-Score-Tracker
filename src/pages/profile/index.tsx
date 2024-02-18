import React, { useEffect, useState } from "react";
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

import { toast } from "react-toastify";
import { Tlogin } from "../../types/loginType";
import { allData } from "../../staticData/loginData";
import StanderInput from "../../shared/inputs/standerInput";
import { SubmitButton } from "../../shared/Buttons/SubmitButton";
const Profile = () => {
  const schema = yup.object({
    email: yup.string().email().required("email is required"),
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
  const [allUsers, setAllusers] = useState<Tlogin[]>(allData);
  const user: string | null = localStorage.getItem("cashDash");
  let userPars = JSON.parse(user || "");
  const localStorageUsers: string | null = localStorage.getItem("users");
  let localStorageUsersPars = JSON.parse(localStorageUsers || "");
  useEffect(() => {
    setAllusers(localStorageUsersPars);
  }, []);
  console.log("allUsers", allUsers);
  const findUser = allUsers.find((item) => item.email === userPars.email);

  useEffect(() => {
    methods.setValue("name", findUser?.name);
    methods.setValue("email", findUser?.email);
    methods.setValue("address", findUser?.address);
    methods.setValue("phoneNumber", findUser?.phoneNumber);
  }, [findUser]);

  const onSubmit = async (data: Tlogin) => {
    try {
      const objectExists: boolean = allData.some(
        (item) => item.email === data.email
      );
      if (objectExists) {
        const newArr = allUsers?.map((user: Tlogin) => {
          if (user.email === findUser?.email) {
            return {
              ...user,
              name: data.name,
              email: data.email,
              phoneNumber: data.phoneNumber,
              address: data.address,
            };
          }

          return user;
        });
        toast.success("User has been updated");
        localStorage.setItem("users", JSON.stringify(newArr));
      } else {
      }
      console.log("objectExists", objectExists);
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
                Edit
              </SubmitButton>
            </Grid>
          </Grid>
        </form>
      </FormProvider>
    </div>
  );
};

export default Profile;
