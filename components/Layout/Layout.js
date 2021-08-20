import React, { useEffect } from "react";
import Head from "next/head";

import { useMenu } from "../../hooks/useMenu";

import Header from "./Header";
import Navbar from "./Nav/Navbar/Navbar";
import NavbarMobile from "./Nav/Navbar/NavbarMobile";
import Redes from "./Redes";
import ReservarMesa from "./ReservarMesa";
import Footer from "./Footer/Footer";

const Layout = ({ children, bg = "static/img/fondos/img2.png", index = true }) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  const { isMobile } = useMenu();

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css"
        />
      </Head>
      <style jsx>{`
        .fondo-personal {
          position: absolute;
          width: 100%;
          height: 100%;
          background-position: bottom right;
          background-size: cover;
          background-repeat: no-repeat;
          z-index: -1;
        }
        .menu-fixed {
          position: fixed;
          top: 0px;
        }
        .fondo {
          background-color: #0c0c0c;
          padding: 3%;
          position: relative;
          top: 0;
        }
        @media (min-width: 1200px) {
          .fondo {
            margin-top: -100px;
          }
        }
      `}</style>
      <Redes />
      {isMobile ? <NavbarMobile /> : <Navbar />}
      <Header style={{ backgroundImage: `url(${bg})` }}>{children[0]}</Header>
      <main
      >
        <div className="container fondo">
          {children.map((c, i) => i > 0 && c)}
        </div>
      </main>
      <ReservarMesa />
      <Footer theme={index} />
    </>
  );
};

export default Layout;
