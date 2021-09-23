import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import styles from "./styles";
import styles_global from "./styles_global";
import LineDoble from "../ui/LineDoble";
import { GoMail } from "react-icons/go";
import { FaPlayCircle } from "react-icons/fa";

export const Video = (props) => {
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
      <LineDoble />
      <div className="video-equipo">
        <div className="video">
          <FaPlayCircle onClick={() => setOpen(true)} />
          <ModalVideo
            channel="youtube"
            autoplay
            isOpen={isOpen}
            videoId={props.api.seccion_one.url_movie}
            onClose={() => setOpen(false)}
          />
        </div>
        <div className="text-equipo wow fadeInRight slow">
          <h2>{props.api.seccion_one.title}</h2>
         <div dangerouslySetInnerHTML={{__html: props.api.seccion_one.description}}></div>
          <p className="italica">
            <GoMail /> {props.api.seccion_one.text_contact}{" "}
            <a href={"mailto:"+props.api.seccion_one.email}>
            {props.api.seccion_one.email}
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
