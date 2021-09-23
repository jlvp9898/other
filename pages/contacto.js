import React, { useEffect, useState, useMemo } from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Layout/Banner";
import { Formulario } from "../components/Contacto/Formulario/Formulario";
import TitleRojoCenter from "../components/ui/TitleRojoCenter";
import { Mapas } from "../components/Contacto/Mapas.js/Mapas";
import TitleRojoLeft from "../components/ui/TitleRojoLeft";
import Galery from "../components/ui/Galery/Galery";
import banner from "../styles/banner";
import style from "../styles/textosLargos";
import api from ".../../../api/api";
import Cookies from 'universal-cookie';
export default function Contacto() {
  const [_json, setJson] = useState(api.jsonApiContact);
  const regex = /(<([^>]+)>)/ig;
  useMemo(async () => {
  
    const headers = api.head();
    const cookies = new Cookies();
    const lang = cookies.get('lang');
    fetch(api.urlApi("data_contact&lang="+lang), { method: 'GET', headers})
    .then(response => response.json())
    .then(data => setJson(data));

  }, []);
  return (
    <>
      <Head>
        <title>{_json.title_page }</title>
      </Head>
      <style jsx>{banner}</style>
      <style jsx>{style}</style>
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
        <Formulario api={_json.form} />
        <TitleRojoCenter title={_json.seccion_one.banner_one.title } />
        <Mapas
          position="right"
          lat="27.767775649069748"
          lng="-15.577190493920039"
          text1={_json.seccion_one.banner_one.header }
          text2={_json.seccion_one.banner_one.content }
          bg={api.urlBackPanel()+_json.seccion_one.banner_one.img }
        />
        <Mapas
          lat="28.1296972374451"
          lng="-15.44665260244467"
          text1={_json.seccion_one.banner_second.header }
          text2={_json.seccion_one.banner_second.content }
          bg={api.urlBackPanel()+_json.seccion_one.banner_second.img }
        />
        <Mapas
          position="right"
          lat="28.135975081103272"
          lng="-15.432781700595065"
          text1={_json.seccion_one.banner_third.header }
          text2={_json.seccion_one.banner_third.content }
          bg={api.urlBackPanel()+_json.seccion_one.banner_third.img }
        />
        <Mapas
          lat="28.103279933055685"
          lng="-15.41627672943"
          text1={_json.seccion_one.banner_fourth.header }
          text2={_json.seccion_one.banner_fourth.content }
          bg={api.urlBackPanel()+_json.seccion_one.banner_fourth.img }
        />
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
