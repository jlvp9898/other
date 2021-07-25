import React from "react";
import LineDoble from "../ui/LineDoble";
import style from "../../styles/textosLargos";

export const Terminos = (props) => {
  return (
    <>
      <style jsx>{style}</style>
      <LineDoble />
      <div className="text-largos">
      <p className="text-nosotros wow fadeInUp" dangerouslySetInnerHTML={{__html: props.api.seccion_one}}></p>
      </div>
    </>
  );
};
