import { Button } from "@mui/material";
import styled from "styled-components";

export const ButtonStyled = styled(Button)`
  && {
    background: var(--primary-color);
    width: ${({ props }: any) => (props ? props.width : "100%")};
    text-transform: capitalize;
    border-radius: 0.5rem;
    margin-block: 1rem;
    font-size: 1.3rem;
    color: #fff;
    font-weight: 500;
    transition: all 0.4s ease;
    &:hover {
      color: var(--primary-color);
      box-shadow: 0 0 0px 3px var(--primary-color);
      font-weight: bold;
    }
  }
`;
