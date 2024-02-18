import { Box, Typography } from "@mui/material";
import styled from "styled-components";

export const HeaderLogin = styled(Box)`
  && {
    padding: 2rem 4rem;
    display: grid;
    place-items: center;
    background: #f9f9f9;
    width: 100%;
    height: 100dvh;
  }
`;

export const FormContainerStyle = styled(Box)`
  && {
    background: #fff;
    border-radius: 1rem;
    padding: 1rem;

    height: calc(100dvh - 4rem);
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
`;

export const LoginImage = styled(Box)`
  && {
    height: calc(100dvh - 4rem);
    border-radius: 1rem;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

export const LoginHeading = styled.h1`
  text-align: center;
  color: #a370f0;
  font-weight: 700;
  margin-bottom: 2rem;
`;

export const LoginContainer = styled(Box)`
  width: 100%;
  padding-inline: calc(15vw - 10rem);
  .right {
    color: #667085;
    text-align: right;
    width: 100%;
    display: block;
    margin-top: 0.5rem;
  }
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .notAmember {
    text-align: right;
    color: rgb(102, 112, 133);
    span {
      color: #a370f0;
      font-weight: 700;
    }
  }
`;

export const SignUpText = styled(Typography)`
  && {
    text-align: center;
    font-size: 1.1rem;
    margin-top: 20%;
    color: #667085;

    button {
      color: var(--primary-color);
      font-weight: 400;
      border: none;
      background: none;
      font-size: 16px;
      margin-inline: 5px;
      font-weight: bold;
      cursor: pointer;
    }
  }
`;
