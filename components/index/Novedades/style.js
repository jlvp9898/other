import css from "styled-jsx/css";

export default css`
  .novedades {
    background-image: linear-gradient(
        to right,
        rgba(49, 49, 47, 0.9),
        rgba(30, 33, 31, 0.6)
      ),
      url(/static/img/fondos/img16.png);
    background-position: 100% 80%;
    background-size: cover;
    padding: 4.8%;
    margin-top: 5%;
  }
  .text-novedades {
    color: #d4d4d4;
    font-size: 2rem;
    text-align: center;
    margin-bottom: 4rem;
    font-family: "Roboto-Light";
  }
  .text-novedades span {
    color: #f2f2f2;
    font-family: "Roboto-Black";
  }

  .form-novedades {
    display: flex;
    flex-wrap: wrap;
  }
  .form-novedades input {
    padding: 0.88rem;
  }
  .form-nombre {
    flex: 38%;
    max-width: 38%;
  }
  .form-email {
    flex: 34%;
    max-width: 34%;
    margin: 0 2rem;
  }
  .form-btn {
    flex: 20%;
    max-width: 20%;
  }
  .form-btn button {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
  .form-check {
    margin: 1rem 0;
    display: flex;
    align-items: center;
  }
  .form-check-label {
    color: #606060;
    margin-left: 0.5rem;
  }
  .form-check-label a:hover {
    color: #d4d4d4;
  }
  .form-control {
    display: block;
    width: 100%;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #212529;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .form-control:focus {
    color: #0c0c0c;
    background-color: #fff;
    border-color: #f2f2f2;
    outline: 0;
  }
  .form-control::placeholder {
    color: #808080;
    opacity: 1;
  }
  .form-check {
    display: block;
    min-height: 1.5rem;
    margin-bottom: 0.125rem;
  }
  .form-check .form-check-input {
    margin-left: -1.5em;
  }
  input[type="checkbox"] + label:before {
    content: "";
    width: 15px;
    height: 15px;
    float: left;
    margin: 0;
    border: 2px solid #fff;
    background: #fff;
  }
  input[type="checkbox"]:checked + label:before {
    border-color: #ee2737;
    background: #ee2737;
  }
  input[type="checkbox"]:checked + label:after {
    content: "";
    width: 10px;
    height: 5px;
    border: 4px solid #fff;
    float: left;
    margin-left: -17px;
    border-right: 0;
    border-top: 0;
    margin-top: 3px;
    transform: rotate(-55deg);
  }
  input[type="checkbox"] {
	  display: none;
  }
  @media (max-width: 991.98px) {
    .text-novedades {
      margin-top: 3rem;
    }
    .form-nombre {
      flex: 100%;
      max-width: 100%;
    }
    .form-email {
      flex: 100%;
      max-width: 100%;
      margin: 1rem 0;
    }
    .form-btn {
      flex: 100%;
      max-width: 100%;
      order: 2;
    }
    .form-btn button {
      font-size: 1rem;
      padding: 1rem;
    }
    .form-check {
      margin: 0 0 0.5rem 0;
    }
  }
  @media (max-width: 424.98px) {
    .form-btn button {
      font-size: 0.6rem;
    }
  }
`;
