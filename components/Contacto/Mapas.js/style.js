import css from "styled-jsx/css";

export default css`
  .maps {
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: auto;
    padding: 0.5rem;
    border: 1px solid #808080;
    margin-bottom: 1rem;
  }
  .maps-left {
    grid-template-areas: "mapa mapa foto";
  }
  .maps-right {
    grid-template-areas: "foto mapa mapa";
  }
  .mapa {
    grid-area: mapa;
  }
  .imagen-maps {
    grid-area: foto;
  }
  .mapa > div {
    height: 30vh !important;
  }
  .imagen-maps {
    background-size: cover;
    background-position: center;
  }
  .text-cards-maps {
    padding: 0.8rem;
    position: relative;
    top: 45%;
  }
  .text-cards-maps p {
    margin-bottom: 1rem;
  }
  .title-cards-map {
    font-family: "BebasNeue";
    font-weight: bold;
    color: #c3ba98;
    font-size: 1.1rem;
  }
  .text-cards-map {
    font-size: 0.8rem;
    color: #c3ba98;
    margin-bottom: 1rem;
  }
  .reservar-map {
    color: #f42434;
    font-family: "BebasNeue";
    font-size: 1.2rem;
    font-weight: bold;
    transition: all 0.5s;
  }
  .reservar-map:hover {
    color: #CFC493;
  }
  @media (max-width: 1199.98px) {
    .text-cards-maps {
      top: 35%;
    }
  }
  @media (max-width: 991.98px) {
    .text-cards-maps {
      top: 7%;
    }
  }
  @media (max-width: 767.98px) {
    .maps {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(2, 1fr);
      grid-template-areas:
        "foto"
        "mapa";
      border: 1px solid #808080;
      padding: 0;
    }
    .mapa {
      padding: 0.5rem;
    }
    .imagen-maps {
      margin: 0.5rem 0.5rem 0 0.5rem;
    }
    .text-cards-maps {
      top: 30%;
    }
  }
`;
