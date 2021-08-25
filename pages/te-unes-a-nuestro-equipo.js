import React, { useEffect, useState, useMemo} from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import TitleRojoLeft from "../components/ui/TitleRojoLeft";
import { Video } from "../components/NuestroEquipo/Video";
import Galery from "../components/ui/Galery/Galery";
import Banner from "../components/Layout/Banner";
import TitleResaltado from "../components/ui/TitleResaltado";
import style from "../styles/banner";
import api from ".../../../api/api";
import Cookies from 'universal-cookie';
export default function NuestroEquipo() {
  const [_json, setJson] = useState(api.jsonApiHome);
  useMemo(async () => {
  
    const headers = api.head();
    const cookies = new Cookies();
    const lang = cookies.get('lang');
    fetch(api.urlApi("data_home&lang="+lang), { method: 'GET', headers})
    .then(response => response.json())
    .then(data => setJson(data));

  }, []);
  return (
    <>
      <Head>
        <title>Unete a nuestro equipo</title>
      </Head>
      <style jsx>{style}</style>
      <Layout bg="/static/img/fondos/nuestro-equipo.png">
        <Banner alto={false}>
        <div className="d-block">
          <h1 className="border-text title-banner wow fadeInUp">
        ¿Te unes a nuestro equipo?
        </h1>
          </div>
          <div className="d-block">
          <p className="wow fadeInUp border-text">
          Ninguno de nosotros es tan bueno como todos <br />
            nosotros juntos
          </p>
          </div>
       
        </Banner>
        <Video />
        <TitleRojoLeft
          title="SIGUENOS"
          url="https://www.instagram.com/200gramos"
          nickname="@INSTAGRAM"
        />
        <Galery api={_json} urlBackPanel={api.urlBackPanel()} />
      </Layout>
    </>
  );
}
