import styled from "styled-components";
import { AddButton } from "./AddButton";

export const UploadButton = styled(AddButton)`
  && {
    /* background: #ffffff; */
    border: none;
    /* border-radius: 16px; */
    font-family: "Roboto";
    font-style: normal;
    /* font-weight: 500; */
    font-size: 13px;
    box-shadow: none;
    /* color: #027a48; */
    color: #ffffff;
    padding: 4px 10px;
    &:hover {
      color: white;
    }
  }
`;
