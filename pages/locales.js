import React, { useEffect, useState, useMemo } from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Layout/Banner";
import TitleRojoCenter from "../components/ui/TitleRojoCenter";
import Reservas from "../components/Establecimientos/Reservas/Reservas";
import TitleRojoLeft from "../components/ui/TitleRojoLeft";
import Galery from "../components/ui/Galery/Galery";
import style from "../styles/banner";
import api from ".../../../api/api";
import Cookies from 'universal-cookie';
export default function Establecimientos() {
  const [_json, setJson] = useState(api.jsonApiLocale);
  const regex = /(<([^>]+)>)/ig;
  useMemo(async () => {
  
    const headers = api.head();
    const cookies = new Cookies();
    const lang = cookies.get('lang');
    fetch(api.urlApi("data_local&lang="+lang), { method: 'GET', headers})
    .then(response => response.json())
    .then(data => setJson(data));

  }, []);

  return (
    <>
      <Head>
        <title>{_json.title_page }</title>
      </Head>
      <style jsx>{style}</style>
      <style jsx>{`
        @media (min-width: 360px) {
          .h1 {
            font-size: 2.2rem;
          }
        }
        @media (min-width: 576px) {
          .h1 {
            font-size: 3.2rem;
          }
        }
      `}</style>
      <Layout bg={api.urlBackPanel()+_json.slider.img }>
        <Banner alto={false}>
          <div className="d-block">
          <h1 className="wow fadeInUp border-text">{_json.slider.title }</h1>
          </div>
          <div className="d-block">
          <p className="wow fadeInUp border-text">
          {_json.slider.subtitle }
          </p>
          </div>
        </Banner>
        <TitleRojoCenter title="RESERVA" />
        <Reservas api={_json} urlBackPanel={api.urlBackPanel()} />
        <TitleRojoLeft
          title={_json.seccion_second.title }
          url={_json.seccion_second.url }
          nickname="@INSTAGRAM"
          text={_json.seccion_second.description.replace(regex, '') }
        />
        <Galery api={_json} urlBackPanel={api.urlBackPanel()} />
      </Layout>
    </>
  );
}
