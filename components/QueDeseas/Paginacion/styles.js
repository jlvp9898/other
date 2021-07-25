import css from "styled-jsx/css";

export default css`
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 3rem;
  }
  .pagination p {
    margin-right: 0.5rem;
    font-size: 0.8rem;
    color: #808080;
  }
  .pagination a {
    color: black;
    float: left;
    padding: 8px 12px;
    text-decoration: none;
    transition: background-color 0.3s;
    border: 1px solid #ddd;
    border-bottom: 3px solid;
    margin: 0 4px;
  }
  .pagination .next {
    color: #ffffff;
    background-color: #373a36;
  }
  .pagination a.active {
    background-color: #373a36;
    color: white;
    border: 1px solid #373a36;
  }
  .pagination a:hover:not(.active) {
    background-color: #ddd;
  }
`;
