import css from "styled-jsx/css";

export default css`
  .cards-paginacion {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 270px;
    grid-gap: 60px;
  }
  @media (min-width: 1750px) {
    .cards-paginacion {
      grid-template-rows: 315px;
    }
  }
  @media (min-width: 1900px) {
    .cards-paginacion {
      grid-template-rows: 352px;
    }
  }
  @media (max-width: 1199.98px) {
    .cards-paginacion {
      grid-template-rows: 217px;
    }
  }
  @media (max-width: 991.98px) {
    .cards-paginacion {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: 246px;
    }
  }
  @media (max-width: 767.98px) {
    .cards-paginacion {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 396px);
    }
  }
  @media (max-width: 526.98px) {
    .cards-paginacion {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 340px);
    }
  }

  @media (max-width: 415px) {
    .cards-paginacion {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(6, 270px);
      margin-bottom:60px;
    }
  }

`;
