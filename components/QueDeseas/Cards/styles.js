import css from "styled-jsx/css";

export default css`
  .text-cards-paginacion {
    position: relative;
    top: -150px;
    padding-right: 2rem;

    color: #ffff;
    transition: all 0.5s;
  }
  .img-card {
    transition: all 0.5s;
  }
  .img-card img {
    width: 100%;
    box-shadow: 0px 32px 16px -11px rgba(200, 200, 200, 1) !important;
  }
  .text-cards-paginacion a {
    padding: 0.5rem 2rem;
    background-color: red;
    transition: all 0.5s;
    float:right;
  }
  .text-cards-paginacion p {
    margin-bottom: 1rem;
  }
  .text-cards-paginacion h2 {
    margin-bottom: 2rem;
  }
  .img-card:hover .btn-red {
    opacity: 1;
  }
  .title-que-deseas{
    padding:8px;
    padding-left: 2rem;

    background:rgba(255,0,0,0.5);
  }
  @media (min-width: 1024px) {
    .img-card:hover {
      transform: scale(1.2);
      z-index: 1;
    }
    .img-card .btn-red {
      opacity: 0;
    }
  }
`;
