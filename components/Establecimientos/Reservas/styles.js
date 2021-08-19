import css from "styled-jsx/css";

export default css`
  .title {
    display: flex;
    align-items: center;
    padding: 10px 0;
    margin-bottom: 20px;
  }
  .title h2 {
    color: #f42434;
    margin: 10px 8%;
  }
  .title .hrs {
    width: 100%;
  }
  .title .hrs hr {
    background-color: #808080;
    margin-top: 2px;
    margin-bottom: 2px;
  }
  .grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(4, 100vw);
    grid-gap: 10px;
  }
  @media (min-width: 768px) {
    .grid {
      grid-template-columns: repeat(2, 1fr);
      grid-template-rows: repeat(2, 50vw);
    }
  }
  @media (min-width: 1200px) {
    .grid {
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 25vw;
    }
  }
  .grid .columns {
    position: relative;
    padding: 5px;
    padding-right: 6px;
    border: 1px solid #808080;
  }
  .grid .columns img {
    max-width: 100%;
  }
  .grid .columns .item {
    position: absolute;
    bottom: 40px;
  }
  .grid .columns .item-img {
    width: 100%;
    height: 100%;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    transition: all 0.5s;
  }
  .grid .columns:hover .item-img {
    background-size: 120% 120%;
  }
  .grid .columns .item h4 {
    color: #c3ba98;
    margin: 0;
  }
  .grid .columns .item p {
    margin: 0;
    color: #c3ba98;
  }
  .grid .columns .item .item-content {
    padding-left: 10px;
  }
  .grid .columns .item .btn-reserva {
    display: inline-block;
    color: #c3ba98;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    background-color: #f42434;
    border: 1px solid transparent;
    padding: 10px 20px;
    margin-top: 10px;
    margin-right: 10px;
  }

`;
