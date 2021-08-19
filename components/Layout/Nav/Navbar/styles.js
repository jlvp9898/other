import css from "styled-jsx/css";

export default css`
  /**/
  .navbar {
    font-size: 0.8rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
    position: fixed;
    top: 50px;
    width: 100%;
    z-index: 1050;
    transition: all 0.3s;
  }
  .navbar .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .logo_nav {
    display: flex;
    align-items: center;
    margin: 0 30px;
  }
  .logo_nav img {
    width: 115px;
  }
  .nav-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 40px;
    list-style: none;
    text-align: center;
    width: 100vw;
    align-items: center;
  }
  .nav-left {
    justify-content: end;
  }
  .nav-right {
    justify-content: start;
  }
  .star-icon {
    color: #c3ba98;
  }
  .nav-menu-menu {
    display: none;
  }

  .nav-item {
    font-family: "Montserrat-Medium";
    font-size: 0.88rem;
    display: flex;
    align-items: center;
    text-transform: uppercase;
    cursor: pointer;
    color: #fff;
  }
  .nav-item i {
    font-size: 0.5rem;
  }

  .nav-links {
    color: #c3ba98;
    text-decoration: none;
    padding: 0.5rem 0rem;
    position: relative;
  }

  .nav-links:hover {
    color: #f42434;
  }

  .nav-links-mobile {
    display: none;
  }

  .menu-icon {
    display: none;
  }
  @media screen and (max-width: 1199.98px) {
    .logo_nav {
      margin: 0;
    }
    .logo_nav img {
      width: 60px;
    }
    .navbar {
      z-index: 1050;
      position: fixed;
      top: 0;
      background: #0e0e0e;
      min-width: 100%;
      height: 80px;
    }
    .star-icon {
      display: none;
    }

    .menu-icon {
      display: block;
    }

    .NavbarItems {
      position: relative;
    }

    .nav-menu,
    .nav-menu-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: calc(100vh - 80px);
      position: fixed;
      top: 80px;
      left: -0%;
      opacity: 1;
      transition: all 0.5s ease;
      align-items: center;
      justify-content: center;
      transform: scale(0);
    }

    .nav-menu.active,
    .nav-menu-menu.active {
      background: #242222;
      top: 80px;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      transform: scale(1);
      padding-bottom: 100px;
    }

    .nav-links {
      text-align: center;
      padding: 1rem;
      width: 100%;
      display: flex;
      align-items: flex-end;
    }

    .nav-links:hover {
      color: #f42434;
      border-radius: 0;
    }

    .menu-icon i {
      font-size: 1.8rem;
    }

    .nav-links-mobile {
      display: block;
      text-align: center;
      margin: 0rem auto;
      border-radius: 4px;
      width: 80%;
      text-decoration: none;
      color: #fff;
      font-size: 1.5rem;
    }

    .nav-links-mobile:hover {
      background: #fff;
      color: #f42434;
      transition: 250ms;
    }

    button {
      display: none;
    }
  }
`;
