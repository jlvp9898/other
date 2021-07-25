import css from "styled-jsx/css";

export default css`
  .line-doble {
    background: #808080;
    width: 100%;
    height: 1px;
    margin-bottom: 0.2rem;
  }
  .title-formulario {
    font-family: "BebasNeue";
    color: #F42434;
    padding: 5% 0;
    text-align: center;
    font-weight: bold;
  }
  .form-contacto {
    padding-bottom: 5%;
    width: 50%;
    margin: 0 auto;
  }
  .form-name,
  .form-email,
  .form-textarea {
    margin-bottom: 0.5rem;
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
    border: 1px solid #808080;
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
  .form-select {
    display: block;
    width: 100%;
    padding: 0.375rem 2.25rem 0.375rem 0.75rem;
    margin-bottom: 0.5rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #808080;
    background-color: #fff;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='%23343a40' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M2 5l6 6 6-6'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 0.75rem center;
    background-size: 16px 12px;
    border: 1px solid #808080;
    border-radius: 0.25rem;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  .form-select:focus {
    border-color: #f2f2f2;
    outline: 0;
  }
  .form-btn button {
    font-size: 1rem;
    padding: 1rem;
    width: auto;
  }
  @media (max-width: 991.98px) {
    .form-contacto {
      width: 100%;
    }
  }
`;
