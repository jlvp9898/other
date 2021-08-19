import css from "styled-jsx/css";

export default css`
  .dropdown-menu {
    background: #000;
    width: 200px;
    position: absolute;
    top: 42px;
    list-style: none;
    text-align: start;
    padding: 20px;
    border-top: 4px solid #c4bb9e;
  }

  .popover-arrow {
    position: absolute;
    display: block;
    width: 1rem;
    height: 0.5rem;
    position: absolute;

    left: -16px;
    transform: translate(66px, 0px);
    top: calc(-0.5rem - 1px);
  }
  .popover-arrow::before,
  .popover-arrow::after {
    position: absolute;
    display: block;
    content: "";
    border-color: transparent;
    border-style: solid;
    top: -7px;
    left: -32px;
    border-width: 0 0.5rem 1rem 0.5rem;
  }

  .popover-arrow::before {
    border-bottom-color: rgba(0, 0, 0, 0.25);
  }
  .popover-arrow::after {
    border-bottom-color: #c4bb9e;
  }
  .dropdown-menu li {
    background: #000;
    cursor: pointer;
  }

  .dropdown-menu.clicked {
    display: none;
  }

  .dropdown-link {
    display: block;
    height: 100%;
    width: 100%;
    text-decoration: none;
    color: #c3ba98;

    padding: 2px 9px;
    text-transform: initial;
  }
  .dropdown-link:hover {
    color: #f42434;
  }

  @media screen and (max-width: 960px) {
    .fa-caret-down {
      display: none;
    }
  }
`;
