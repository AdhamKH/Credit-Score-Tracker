import styled from "styled-components";
import { AddButton } from "./AddButton";

export const DeleteButton = styled(AddButton)`
  && {
    background-color: #c70000;
    border-radius: 6.01115px;
    color: #fcfcfc;
    font-size: 12.026px;
    display: flex;
    align-items: center;
    transition: all 0.5s;
    font-size: 14px;

    &:hover {
      background-color: #c70000;
      transform: translateY(-3px);
    }
    @media (max-width: 420px) {
      font-size: 8.026px;
    }
  }
`;
export const NoButton = styled(AddButton)`
  && {
    background-color: transparent;
    border-radius: 6.01115px;
    color: black;
    font-size: 12.026px;
    display: flex;
    align-items: center;
    transition: all 0.5s;
    border: 0.5px solid black;
    font-size: 14px;
    &:hover {
      background-color: transparent;
      transform: translateY(-3px);
    }
    @media (max-width: 420px) {
      font-size: 8.026px;
    }
  }
`;
