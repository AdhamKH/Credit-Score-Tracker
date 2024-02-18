import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root {
        --primary-color: #6b69dc;
        --body-bg: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
    --msger-bg: #fff;
    --border: 2px solid #ddd;
    --left-msg-bg: #ececec;
    --right-msg-bg: #579ffb;
    }
   * {
       margin: 0;
       padding: 0;
       outline:0;
       font-family: 'Inter', sans-serif;
       box-sizing: border-box;
       }
   body{
    transition: all 0.3s ease;
   }
   a{
    text-decoration: none;
    color: inherit;
   }
   body{
    overflow-x: hidden;
   }
   .err{
    color: #f00;
    font-size: 0.75rem;
   }
   label{
    display: block;
    color: #344054;
    font-size: 1rem;
   }
   table{
    td ,tr{
        img{
            width: 3rem;
            height: 3rem;
            aspect-ratio: 5 / 4;
            object-fit: cover;
        }
    }
   }
   @media (max-width: 767px) {
    h1 {
      font-size: 1rem;
    }
  }
`;
