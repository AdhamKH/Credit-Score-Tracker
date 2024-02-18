// import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { BigSection } from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { toast } from "react-toastify";

const GeneralData = () => {
  let x = 123;
  return (
    <BigSection>
      <div className="container">
        <h1>
          Your current credit score prominently is{" "}
          <span className="green">{x}</span>
        </h1>
      </div>
    </BigSection>
  );
};

export default GeneralData;
