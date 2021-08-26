import css from "styled-jsx/css";

export default css`
  .p1 {
    font-size: 2rem;
  }
  .p2 {
    line-height: 50px;
    font-size: 1.4rem;
    font-family: "Montserrat-Medium";
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 767.98px) {
    .btn-banner {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .btn-banner-1 {
      display: flex;
      margin: 0.5rem 0;
    }
    .btn-banner-2 {
      display: flex;
      margin: 0.5rem 0;
    }
  }
  @media (min-width: 360px) {
    .p1 {
      font-size: 2.2rem;
    }
    .p2 {
      font-size: 1.7rem;
    }
  }
  @media (min-width: 576px) {
    .p1 {
      font-size: 3.2rem;
    }
    .p2 {
      font-size: 2.3rem;
    }
  }
  @media (min-width: 768px) {
    .btn-banner {
      display: flex;
      justify-content: center;
      margin-top: 5rem;
    }
    .btn-banner a {
      margin-left: 1rem;
      margin-right: 1rem;
    }
    .btn-banner-1 {
      flex: 50%;
      max-width: 50%;
    }
    .btn-banner-2 {
      flex: 50%;
      max-width: 50%;
    }
    .btn-banner-1 div {
      display: flex;
      justify-content: flex-end;
    }
    .btn-banner-2 div {
      display: flex;
      justify-content: flex-start;
    }
  }
  @media (min-width: 1200px) {
    .p2 br {
      display: none;
    }
  }
`;
