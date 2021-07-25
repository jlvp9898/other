import React, { useState, useEffect } from "react";
import ModalVideo from "react-modal-video";
import styles from "./styles";
import styles_global from "./styles_global";
import LineDoble from "../ui/LineDoble";
import { GoMail } from "react-icons/go";
import { FaPlayCircle } from "react-icons/fa";

export const Video = () => {
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
            videoId="TmJRFCsGIUE"
            onClose={() => setOpen(false)}
          />
        </div>
        <div className="text-equipo wow fadeInRight slow">
          <h2>CRECE CON NUESTRA FAMILIA</h2>
          <p>
            Buscamos gente alegre, con ganas de aprender y mucho buen rollo.
          </p>
          <p>En constante evolución y pasión por hacer las cosas bien.</p>
          <p>
            Si quieres formar parte de nuestra gran familia y llevar el espíritu
            200 Gramos contigo, te esperamos.
          </p>
          <p>
            <strong>
              Buscamos cocineros, camareros, bartenders y hostess.
            </strong>
          </p>
          <p className="italica">
            No es necesaria gran experiencia pero si una gran actitud.
          </p>
          <br />
          <p className="italica">
            <GoMail /> Envíanos tu CV a{" "}
            <a href="mailto:empleo@grupomaridaje.com">
              empleo@grupomaridaje.com
            </a>
          </p>
        </div>
      </div>
    </>
  );
};
