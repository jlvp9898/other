import React, { useEffect, useState, useMemo} from "react";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Layout/Banner";
import TitleResaltado from "../components/ui/TitleResaltado";
import TitleRojoCenter from "../components/ui/TitleRojoCenter";
import { Card } from "../components/QueDeseas/Cards/Card";
import paginacion from "../styles/que-deseas";
import style from "../styles/banner";
import { Paginacion } from "../components/QueDeseas/Paginacion/Paginacion";
import api from ".../../../api/api";

export default function QueDeseas() {
  const [_json, setJson] = useState(api.jsonMenus);


  useMemo(async () => {
  
    const headers = api.head();
    fetch(api.urlApi("data_menus"), { method: 'GET', headers})
    .then(response => response.json())
    .then(data => setJson(data));

  }, []);
  

  return (
    <>
      <Head>
        <title>{_json.title_page}</title>
      </Head>
      <style jsx>{paginacion}</style>
      <style jsx>{style}</style>
      <Layout bg={api.urlBackPanel()+_json.slider.img}>
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
        <TitleRojoCenter title="Menús" />
        <div className="cards-paginacion wow fadeIn">

        {_json.seccion_one.title.map(
            ({ title_menu, subtitle, image1, image }, j) => {
              return (
                <Card
                  img={api.urlBackPanel()+image1}
                  alt="img1"
                  title={title_menu}
                  text={subtitle}
                  url={api.urlBackPanel()+image}
                />
              );
            }
          )}
  </div>
  
      </Layout>
    </>
  );
}
