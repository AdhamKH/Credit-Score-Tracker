import styled from "styled-components";
import { Button } from "@mui/material";

export const AddButton = styled(Button)`
  && {
    background-color: #01545a;
    border-radius: 6.01115px;
    color: #fcfcfc;
    font-size: 12.026px;
    display: flex;
    align-items: center;
    transition: all 0.5s;
    &:hover {
      background-color: #01545a;
      transform: translateY(-3px);
    }
    @media (max-width: 420px) {
      font-size: 8.026px;
    }
  }
`;
