import css from "styled-jsx/css";

export default css`
  
  .grid .columns .item {
    width: 48%;
    display: inline-block;
    margin-top: 10px;
    padding:15px;
  }
  .grid .columns .item .item-img {
    position: relative;
    width: 25%;
    line-height: 0;
    float: left;
    margin-right: 20px;
  }
  .grid .columns .item .item-img img {
    width: 100%;
    cursor: pointer;
  }
  .grid .columns .item .item-img div {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    color: #f2f2f2;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #0c0c0c55;
    font-size: 2rem;
    opacity: 0;
    transition: all 0.3s;
  }
  .grid .columns .item .item-img div:hover {
    opacity: 1;
  }
  .grid .columns .item h3 {
    margin: 0;
    line-height: 1.5;
    font-family: "BebasNeue";
    font-weight: 600;
    font-size: 1.3rem;
    color: #2d2c2c;
  }
  .grid .columns .item h3:hover {
    color: #f42434;
  }
  .grid .columns .item p {
    margin: 0;
    color: #808080;
    font-size: 0.8rem;
  }
  .grid .columns .item .item-content {
    width: 100%;
    padding-left: 10px;
  }
  .grid .columns .item .item-content .item-title {
    display: flex;
    justify-content: space-between;
  }
  .grid .columns .item .item-content .item-description {
    display: flex;
    justify-content: space-between;
  }
  .grid .columns .item .item-points {
    flex-grow: 1;
    height: 100%;
    border-bottom: 3px dotted #808080;
    padding-top: 1rem;
    margin-left: 5px;
  }
  .grid .columns .item .item-price {
    padding-left: 5px;
    text-align: right;
  }
  .grid .columns .item .item-description .label {
    margin: 0;
    padding: 2px 5px;
    background-color: #f42434;
    color: #f2f2f2;
  }
  @media(max-width:768px){
    .grid .columns .item {
      width: 100%;
      display: inline-block;
      margin-top: 10px;
      padding:15px;
    }
  }
`;
