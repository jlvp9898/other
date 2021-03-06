import React, { useEffect, useState, useMemo } from "react";
import Head from "next/head";

import { useMenu } from "../hooks/useMenu";
import BannerIndex from "../components/index/BannerIndex/BannerIndex";

import { Contenido } from "../components/index/contenido";
import Slider_home from "../components/index/Slider/Slider_home";
import Header from "../components/Layout/Header";
import Navbar from "../components/Layout/Nav/Navbar/Navbar";
import NavbarMobile from "../components/Layout/Nav/Navbar/NavbarMobile";
import Redes from "../components/Layout/Redes";
import ReservarMesa from "../components/Layout/ReservarMesa";
import Footer from "../components/Layout/Footer/Footer";

import Nosotros from "../components/index/Nosotros";
import Novedades from "../components/index/Novedades/Novedades";
import TitleNegroLeft from "../components/ui/TitleNegroLeft";
import Galery from "../components/ui/Galery/Galery";
import Banner from "../components/Layout/Banner";

import Domicilio from "../components/index/Domicilio/Domicilio";
import Banner_one from "../components/index/Banner/banner";
import api from ".../../../api/api";
import Cookies from 'universal-cookie';

export default function Index() {
  const [_json, setJson] = useState(api.jsonApiHome);
 


  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW({
      live: false,
    }).init();

  
    //watchScroll();
  }, []);

  useMemo(async () => {
    const headers = api.head();

    
  const cookies = new Cookies();

  const lang = cookies.get('lang');


    fetch(api.urlApi("data_home&lang="+lang), { method: "GET", headers })
      .then((response) => response.json())
      .then((data) => setJson(data));
  }, []);

  const { isMobile } = useMenu();
  const regex = /(<([^>]+)>)/gi;

 

  return (
    <>
      <style jsx>{`
        .bg-video {
          position: absolute;
          overflow: hidden;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: -1;
        }
        .min-height{
          min-height:250px;
        }
        .placa-video {
          position: absolute;
          overflow: hidden;
          background: #000000b8;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
          z-index: -1;
        }
        iframe#video {
          width: 100%;
          height: 100%;
          position: absolute;
          top: 0;
          left: 0;
        }
        @media (min-aspect-ratio: 16/9) {
          iframe#video {
            height: 200%;
            top: -50%;
          }
        }
        @media (max-aspect-ratio: 16/9) {
          iframe#video {
            width: 200%;
            left: -50%;
          }
        }
        @media (max-width: 991.98px) {
          .bg-video,
          .placa-video {
            display: none;
          }
        }
      `}</style>
      <Head>
        <title>{_json.title_page}</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/animate.css@3.7.2/animate.min.css"
        />
       
      </Head>
      <Redes />
      {isMobile ? <NavbarMobile /> : <Navbar />}
      <Header
        style={{
          backgroundImage: `url(` + api.urlBackPanel() + _json.slider.img + `)`,
        }}
      >
        <div className="bg-video">
          <iframe
            id="video"
            width="560"
            height="315"
            src={
              _json.slider.video +
              "?loop=1&controls=0&autoplay=1&mute=1&playlist=" +
              _json.slider.video.split("/")[4]
            }
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="placa-video"></div>
        
        <Banner index={true}>
          <BannerIndex api={_json} />
        </Banner>
      </Header>
      <div className="container">
        <div className="min-height">
        <Slider_home api={_json} />
        </div>
        <Banner_one  />
        <Contenido api={_json} />
        <TitleNegroLeft
          title={_json.seccion_second.title}
          url={_json.seccion_second.url}
          nickname="@INSTAGRAM"
          text={_json.seccion_second.description.replace(regex, "")}
        />
        <Galery api={_json} urlBackPanel={api.urlBackPanel()} />
        <TitleNegroLeft
          title={_json.seccion_third.title}
          text={_json.seccion_third.description.replace(regex, "")}
        />
        <Domicilio api={_json} urlBackPanel={api.urlBackPanel()} />
      </div>
      <Novedades api={_json} />
      <ReservarMesa />
      <Footer index={false} />
    </>
  );
}