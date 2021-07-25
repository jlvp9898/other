import css from "styled-jsx/css";

export default css`
  footer {
    padding-top: 50px;
    position: relative;
  }
  footer.white {
    background-color: #ffffff;
  }
  footer.white h3 {
    color: #0c0c0c;
  }
  footer.white a {
    color: #606060;
  }
  footer.black {
    background-image: url(static/img/fondos/img3.png);
  }
  footer.black h3 {
    color: #fff;
  }
  footer.black a {
    color: #f2f2f2;
  }
  footer .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
    grid-gap: 10px;
    padding-bottom: 1rem;
  }
  footer .grid .columns .iconos-footer {
    margin-right: 1rem;
    font-size: 2rem;
  }
  @media (min-width: 768px) {
    footer .grid {
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: 250px;
    }
  }
  footer .grid .columns h3 {
    font-family: "Roboto-Medium";
    font-size: 1.3rem;
    margin-bottom: 20px;
    font-weight: 400;
  }
  footer .grid .columns p {
    font-family: "Roboto-Light";
    font-size: 1.1rem;
    margin-bottom: 10px;
  }
  footer .grid .columns a {
    text-decoration: none;
  }
  footer .grid .columns a:hover {
    color: #f42434;
  }
  footer .footer-2 {
    font-family: "Roboto-Light";
    background-image: url(static/img/fondos/img3.png);
    background-size: inherit;
    background-position: bottom;
    color: #f2f2f2;
    padding-top: 15px;
    padding-bottom: 15px;
    text-align: center;
  }
  footer .reservar-mesa-footer {
    background-color: red;
    width: 350px;
    height: auto;
    padding: 50px 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: initial;
    margin: 10px auto;
  }
  @media (min-width: 992px) {
    footer .reservar-mesa-footer {
      position: absolute;
      bottom: 20px;
      right: 8%;
      height: 300px;
      margin: 0;
    }
  }
  footer .reservar-mesa-footer img {
    max-width: 100%;
  }
  footer .reservar-mesa-footer h3 {
    text-align: center;
    color: #f2f2f2;
    margin-top: 10px;
  }
`;
