import styled from "styled-components";

export const BigSection = styled.div`
  width: 100%;

  .container {
    box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
    width: 100%;
    border-radius: 2rem;
    background-color: #fff;
    padding: 1rem 2rem;
    min-height: 30dvh;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 3rem;
    .btnContainer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      button {
        border: none;
        cursor: pointer;
        padding: 1rem;
        transition: 0.3s all;
        background: none;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
  }
`;
