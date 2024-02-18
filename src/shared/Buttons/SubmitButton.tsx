import { Button } from "@mui/material";
import styled from "styled-components";

export const SubmitButton = styled(Button)`
  && {
    background: #425a8b;
    border-radius: 6.01115px;
    color: white;
    padding: 10.0186px 15.0279px;
    transition: 0.5s all;

    &:hover {
      background: #425a8b;
      color: white;
      transform: translateY(-2px);
    }
    &:active {
      transform: scale(0.9);
    }
  }
`;
