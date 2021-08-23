import css from "styled-jsx/css";

export const Local = css`
.margin-link{
  margin-bottom:-5px;
}
  .galeria-ppal {
    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: auto;
    grid-template-areas:
      "item-1 item-1 item-2 item-3"
      "item-1 item-1 item-4 item-5"
      "item-6 item-7 item-8 item-8"
      "item-9 item-10 item-8 item-8";
    padding-bottom: 5%;
  }
  @media (max-width: 767.98px) {
    .galeria-ppal {
      grid-template-columns: repeat(2, 50%);
      grid-template-rows: auto;
      grid-template-areas:
        "item-1 item-1"
        "item-1 item-1"
        "item-2 item-3"
        "item-4 item-5"
        "item-8 item-8"
        "item-8 item-8"
        "item-6 item-7"
        "item-9 item-10";
    }
  }
  .items {
    display: flex;
  }

  .item-1 {
    grid-area: item-1;
  }
  .item-2 {
    grid-area: item-2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .item-3 {
    grid-area: item-3;
  }
  .item-4 {
    grid-area: item-4;
  }
  .item-5 {
    grid-area: item-5;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .item-6 {
    grid-area: item-6;
  }
  .item-7 {
    grid-area: item-7;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .item-8 {
    grid-area: item-8;
  }
  .item-9 {
    grid-area: item-9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .item-10 {
    grid-area: item-10;
  }
  .img-galeria {
    width: 100%;
    height: 100%;
  }
  .card-text {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 4rem;
  }
  @media (max-width: 1199.98px) {
    .card-text {
      padding: 0 3rem;
    }
  }
  @media (max-width: 991.98px) {
    .card-text {
      padding: 0 1rem;
    }
  }
  @media (max-width: 767.98px) {
    .card-text {
      padding: 0;
    }
  }
  .text1-card {
    color: #f42434;
  }
  .text2-card {
    color: #d4d4d4;
  }
  .title-card {
    color: #606060;
    margin: 2rem 0;
    font-weight: 400;
  }
  .arrow-right,
  .arrow-left {
    position: relative;
  }
  .arrow-right:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-left: 20px solid #000;
    position: absolute;
    top: 44%;
    right: -20px;
  }
  .arrow-left:before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-top: 20px solid transparent;
    border-bottom: 20px solid transparent;
    border-right: 20px solid #000;
    position: absolute;
    top: 44%;
    left: -20px;
  }
`;

export const Global = css.global`
  /* GALERIA */
  .galeria-ppal .img-galeria {
    position: relative;
    overflow: hidden;
    transition: all 0.5s;
  }
  @media (min-width: 992px) {
    .galeria-ppal .items {
      -webkit-transition: opacity 0.35s, -webkit-transform 0.35s;
      transition: opacity 0.35s, transform 0.35s;
    }
    .galeria-ppal .items:hover .img-galeria {
      -webkit-transform: scale3d(1, 1, 1);
      transform: scale(1.2);
    }
  }
`;
