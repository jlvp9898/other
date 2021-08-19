import css from "styled-jsx/css";

export default css`
  .domicilio-ppal {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: auto;
    grid-template-areas: "item-1 item-2 item-3 item-4";
  }
  @media (max-width: 767.98px) {
    .domicilio-ppal {
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: auto;
      grid-template-areas:
        "item-1 item-3"
        "item-2 item-4";
    }
  }
  .items {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.5s;
    cursor: pointer;
  }
  .items .link-items {
    line-height: 0;
  }
  @media (min-width: 992px) {
    .items:hover {
      transform: scale(1.1);
      z-index: 1;
    }
  }
  .item-1 {
    grid-area: item-1;
  }
  .item-2 {
    grid-area: item-2;
  }
  .item-3 {
    grid-area: item-3;
  }
  .item-4 {
    grid-area: item-4;
    align-items: start;
    padding: 1.5rem;
    font-size: 0.8rem;
    background-color: #c3ba98;
  }
  .item-4 h2 {
    font-family: "Roboto-Black";
    margin-bottom: 1rem;
    color: #222;
    font-size: 1.7rem;
  }
  .item-4 p {
    margin-bottom: 3rem;
    color: #222;
  }
  .img-domicilio {
    width: 100%;
    height: 100%;
  }
  @media (max-width: 991.98px) {
    .item-4 p {
      margin-bottom: 1rem;
      font-size: 0.6rem;
    }
    .item-4 h2 {
      font-size: 0.8rem;
    }
    .btn-domicilio {
      padding: 0.5rem 1rem;
    }
  }
  @media (max-width: 424.98px) {
    .item-4 p {
      margin-bottom: 1rem;
      font-size: 0.5rem;
    }
    .item-4 h2 {
      font-size: 0.6rem;
    }
    .btn-domicilio {
      padding: 0.5rem 0.5rem !important;
    }
  }
  .text-cards {
    padding: 1.3rem;
    background-color: #0c0c0c;
    color: #f2f2f2;
  }
  .text-cards p {
    color: #d4d4d4;
  }
  .btn-domicilio {
    padding: 0.5rem 1.5rem;
  }
`;
