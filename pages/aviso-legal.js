import React, { useEffect, useMemo, useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Layout/Banner";
import TitleRojoLeft from "../components/ui/TitleRojoLeft";
import Galery from "../components/ui/Galery/Galery";
import banner from "../styles/banner";
import style from "../styles/textosLargos";
import { Aviso } from "../components/Aviso/Aviso";
import api from ".../../../api/api";

export default function AvisoLegal() {
  const [_json, setJson] = useState(api.jsonApiLegalWarning);
  const regex = /(<([^>]+)>)/ig;
  useMemo(async () => {
  
    const headers = api.head();
    fetch(api.urlApi("data_legal_warning"), { method: 'GET', headers})
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
      <Layout>
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
        <Aviso api={_json} />
        <TitleRojoLeft
          title= {_json.seccion_second.title }
          url={_json.seccion_second.url }
          nickname="@INSTAGRAM"
          text={_json.seccion_second.description.replace(regex, '')}
        />
        <Galery api={_json} urlBackPanel={api.urlBackPanel()} />
      </Layout>
    </>
  );
}
