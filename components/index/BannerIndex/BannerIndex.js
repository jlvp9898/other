import React, { useEffect, useState} from "react";
import Link from "next/link";
import BotonBanner from "../../ui/BotonBanner";
import TitleResaltado from "../../ui/TitleResaltado";
import styles from "./styles";



const BannerIndex = (props) => {

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW({
      live: false,
    }).init();

 console.log(props.api);
  }, []);
  if(props.api.slider.title == ""){
    return ("");
  }
  return (
    <>
      <style jsx>{styles}</style>
      <p className="p1 wow fadeInLeft">{props.api.slider.title}</p>
      <p className="p2 wow fadeInLeft">
        <TitleResaltado>{props.api.slider.subtitle}</TitleResaltado>
      </p>
      <div className="btn-banner">
        <div className="btn-banner-1 wow fadeInUp">
          <div>
            <Link href={props.api.slider.btn1_url}>
              <a className="nav-links-mobile">
                <BotonBanner
                  text={props.api.slider.btn1_title}
                  icon="/static/img/icon-reservar-black.svg"
                />
              </a>
            </Link>
          </div>
        </div>
        <div className="btn-banner-2 wow fadeInUp">
          <div>
            <Link href={props.api.slider.btn2_url}>
              <a className="nav-links-mobile">
                <BotonBanner
                  text={props.api.slider.btn2_title}
                  icon="/static/img/icon-pedido-black.svg"
                />
              </a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BannerIndex;
