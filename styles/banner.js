import css from "styled-jsx/css";

export default css`
  h1,
  p {
    text-align: center;
  }
  h1 {
    margin-bottom: 1rem;
    font-size: 2rem;
    text-align: center;
  }
  p {
    font-size: 0.8rem;
    color: #d4d4d4;
    font-family: "Montserrat-Medium";
    font-weight: 400;
    margin-top: 1rem;
  }
  a:hover {
    color: #F42434;
  }
  @media (min-width: 360px) {
    h1 {
      font-size: 2.2rem;
    }
  }
  @media (min-width: 576px) {
    h1 {
      font-size: 3.2rem;
    }
  }
`;
