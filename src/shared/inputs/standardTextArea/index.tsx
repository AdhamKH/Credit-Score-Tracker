import { ErrorMessage } from "@hookform/error-message";
import { FormHelperText, Box, TextareaAutosize } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";
import { MyInputLable } from "../standardSelect";

type Tinput = {
  name: string;
  control?: any;
  defaultValue?: any;
  value?: any;
  placeholder?: string;
  type?: string;
  Label?: string;
  error?: any;
  required?: boolean;
  isSelect?: boolean;
  children?: any;
  disabled?: boolean;
  minRows?: number;
};
const StanderTextArea = ({
  name,
  defaultValue,
  value,
  placeholder,
  type,
  Label,
  required,
  isSelect,
  children,
  disabled,
  minRows,
}: Tinput) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <InputFieldStyle>
      <MyInputLable
        sx={{ color: "#344054" }}
        htmlFor={name}
        required={required}
      >
        {Label}
      </MyInputLable>

      <Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextFieldStyle
            onBlur={onBlur}
            onChange={onChange}
            value={value}
            placeholder={placeholder}
            // fullWidth
            minRows={minRows}
            // type={type}
            // size="small"
            required={required}
            // select={isSelect}
            disabled={disabled}
          ></TextFieldStyle>
        )}
      />
      <ErrorMessage
        render={({ message }) => (
          <FormHelperText sx={{ color: "#f00" }}>{message}</FormHelperText>
        )}
        errors={errors}
        name={name}
      />
    </InputFieldStyle>
  );
};

const InputFieldStyle = styled(Box)`
  && {
    /* height: 95px;
    overflow: hidden;
    width: 100%; */
  }
`;

const TextFieldStyle = styled(TextareaAutosize)`
  && {
    width: 100%;
    .MuiOutlinedInput-root {
      border-radius: 0.6rem;
      width: 100%;
      .MuiOutlinedInput-input {
        /* padding: 13px 1rem; */
      }
    }
    border-radius: 0.5rem;
  }
`;
export default StanderTextArea;
