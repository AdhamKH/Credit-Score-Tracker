import styled from "styled-components";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/base";

export const StadardSelect = styled(Select)`
  && {
    .MuiSelect-select {
      border-radius: 0.6rem;
      width: 100%;
    }
    &.MuiInputBase-root {
      border-radius: 0.6rem;
      width: 100%;
    }
  }
`;

export const MyTextFiled = styled(TextField)`
  && {
    .MuiTextField-root {
      border: 1px solid #d0d5dd;
      border-radius: 4px;
    }
  }
`;

export const MyInputLable = styled(InputLabel)`
  && {
    font-size: 12px;
  }
`;

export const StyledTextarea = styled(TextareaAutosize)(
  ({ theme }) => `
  width: 320px;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.5;
  padding: 12px;
  border-radius: 4px;
  &:hover {
    border-color: ;
  }

  &:focus {
    border: 2px solid #3399FF ;


  }

  // firefox
  &:focus-visible {
    outline: 0;
  }
`
);
