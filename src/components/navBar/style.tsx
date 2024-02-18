import styled from "styled-components";

export const Bigsection = styled.div`
  .navContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 80dvh;
    svg {
      width: 24px;
      height: 24px;
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    a.active {
      li {
        background-color: #f7fbfc;
      }
      svg {
        color: #769fcd;
      }
      span {
        color: #769fcd;
      }
    }
    .first {
      li {
        &:hover {
          background-color: #f7fbfc;
        }
      }
    }
  }
  .imgContainer {
    display: flex;
    align-items: center;
    width: 100%;
    flex-direction: row-reverse;
  }
  .img {
    width: 80%;
  }
`;
