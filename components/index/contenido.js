import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import styles from "./styles";
import styles_global from "./styles_global";
import { FaPlayCircle } from "react-icons/fa";

export const Contenido = (props) => {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW({
      live: false,
    }).init();
  }, []);

  return (
    <>
      <style jsx>{styles}</style>
      <style jsx>{styles_global}</style>
      <div className="text-equipo show-title-mobile">
      <h2 className="show-title-mobile">{props.api.seccion_one.title}</h2>
      </div>
      <div className="video-equipo">
        <div className="video">
          <FaPlayCircle onClick={() => setOpen(true)} />
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId="fpKMHzqBDwo"
            onClose={() => setOpen(false)}
          />
        </div>
        <div className="text-equipo wow fadeInRight slow">
          <h2 className="hidde-title-mobile">{props.api.seccion_one.title}</h2>
          <span dangerouslySetInnerHTML={{__html: props.api.seccion_one.description}}></span>
        </div>
      </div>
    </>
  );
};
