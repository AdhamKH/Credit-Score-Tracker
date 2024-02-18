import { Controller, useFormContext } from "react-hook-form";
import styled from "styled-components";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import TextField from "@mui/material/TextField";
import { TextareaAutosize } from "@mui/base";
import { MyInputLable, StadardSelect } from "../standardSelect";
import { FormHelperText, MenuItem } from "@mui/material";
import { ErrorMessage } from "@hookform/error-message";

interface InputProps {
  label: string;
  defaultValue?: string | number;
  name: string;
  required?: boolean;
  placeholder?: string;
  data: any;
  valueName?: boolean;
}

const SelectInput = ({
  defaultValue,
  label,
  name,
  required,
  placeholder,
  data,
  valueName,
}: InputProps) => {
  const {
    control,
    formState: { errors },
  } = useFormContext<any>();
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue ? defaultValue : ""}
      render={({ field: { onChange, value } }) => (
        <div className={"mb-10"}>
          <MyInputLable htmlFor={name} required={required}>
            {label}
          </MyInputLable>
          <div className="mt-3">
            <StadardSelect
              fullWidth
              size="small"
              value={value}
              placeholder={placeholder}
              onChange={onChange}
              id={name}
            >
              {data?.map((item: any) => (
                <MenuItem key={item.id} value={valueName ? item.name : item.id}>
                  {item.name}
                </MenuItem>
              ))}
            </StadardSelect>
            <ErrorMessage
              render={({ message }) => (
                <FormHelperText sx={{ color: "#f00" }}>
                  {message}
                </FormHelperText>
              )}
              errors={errors}
              name={name}
            />
          </div>
        </div>
      )}
    />
  );
};

export default SelectInput;
