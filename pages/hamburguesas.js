import React, {  useState, useMemo} from "react";
import Link from "next/link";
// import Slider from "react-slick";
import Head from "next/head";
import Layout from "../components/Layout/Layout";
import Banner from "../components/Layout/Banner";
import BebidasList from "../components/Bebidas/BebidasList/BebidasList";
import GalleryModal from "../components/Bebidas/GalleryModal/GalleryModal";
import style from "../styles/banner";
import api from ".../../../api/api";
import { getAllMenusIds, getMenuData } from "../lib/menu";

export default function Hamburguesas({ data, banner }) {
  const [_json, setJson] = useState(api.jsonMenus);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrow: true,
  };

  const [{ isOpen, url }, setModal] = useState({
    isOpen: false,
    url: "",
  });

  const handleImg = (img) => {
    setModal({ isOpen: true, url: img });
  };
  const handleOpenClose = () => {
    setModal({ isOpen: false, url });
  };

  useMemo(async () => {
  
    const headers = api.head();
    fetch(api.urlApi("data_burger"), { method: 'GET', headers})
    .then(response => response.json())
    .then(data => setJson(data));

  }, []);
  

  return (
    <>
      <Head>
        <title>{_json.title_page}</title>
      </Head>
      <style jsx>{style}</style>

      <Layout bg={api.urlBackPanel()+_json.slider.img}>
        <Banner alto={false}>
          <div className="slider_banner">
          <div className="d-block m-none">
            <h1 className="border-text title-banner wow fadeInUp">{_json.slider.title}</h1>
            </div>
            <Link href={banner.prev_page}>
              <a className="btn_slider_banner">
                <img
                  src="/static/img/arrow-left-slick.svg"
                  alt="prev"
                  className="arrow-left"
                />
              </a>
            </Link>
            <Link href={banner.next_page}>
              <a className="btn_slider_banner">
                <img
                  src="/static/img/arrow-right-slick.svg"
                  alt="next"
                  className="arrow-right"
                />
              </a>
            </Link>
          </div>
        </Banner>
        <BebidasList onImg={handleImg} datos={_json} />
      </Layout>
      <GalleryModal show={isOpen} onOpenClose={handleOpenClose} src={url} />
    </>
  );
}

export async function getStaticProps() {
  const menuData = getMenuData("hamburguesas");
  return {
    props: menuData,
  };
}
