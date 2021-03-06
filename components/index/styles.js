import css from "styled-jsx/css";

export default css`
  .video-equipo {
    display: flex;
    flex-direction: column;
    margin-bottom:50px;
  }
  .video,
  .text-equipo {
    flex: 100%;
    max-width: 100%;
  }
  .text-equipo {
    padding-left: 0;
    padding-top: 5%;
  }
  .hidde-title-mobile, .show-title-mobile{
    font-family: Gotham;
    font-size:35px !important;
    }
  @media (min-width: 992px) {
    .video-equipo {
      flex-direction: row;
    }
    .text-equipo {
      padding-left: 4rem;
      padding-top: 0;
    }
  }
  .video {
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(/static/img/Video/img1.png);
    background-size: cover;
    background-position: center;
    padding: 10%;
    max-height:350px !important;
  }

  .text-equipo h2 {
    color: #f42434;
    font-family: "BebasNeue";
    margin-bottom: 1rem;
  }
  .text-equipo p {
    color: #606060;
    margin-bottom: 0.5rem;
  }
  .italica {
    font-style: italic;
  }
  a {
    color: #060606;
    text-decoration: underline;
  }
  a:hover {
    color: #f42434;
  }
  .hidde-title-mobile{
    display:none;
    
  }
  .show-title-mobile{
    font-size:22px;
    text-align:center;
  }
  @media(min-width:992px){
    .show-title-mobile{
      display:none;
    }
    .hidde-title-mobile{
      display:block;
    }
  }
`;
