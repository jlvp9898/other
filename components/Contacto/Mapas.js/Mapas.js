import React from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";
import Link from "next/link";
import style from "./style";

export const Mapas = ({ position = "left", lat, lng, text1, text2, bg }) => {
  const defaultCenter = { lat: Number(lat), lng: Number(lng) };

  const RegularMap = withScriptjs(
    withGoogleMap(() => (
      <GoogleMap
        defaultZoom={16}
        defaultCenter={defaultCenter}
        defaultOptions={{ scrollwheel: false }}
      >
        <Marker position={defaultCenter} />
      </GoogleMap>
    ))
  );

  return (
    <>
      <style jsx>{style}</style>
      <style jsx>{`
        .imagen-maps {
          background-image: linear-gradient(
              to right,
              rgba(49, 49, 47, 0.9),
              rgba(30, 33, 31, 0.4)
            ),
            url(${bg});
        }
      `}</style>
      <div className={`maps maps-${position}`}>
        <div className="imagen-maps">
          <div className="text-cards-maps" data-animation="diagonal">
            <p className="title-cards-map">{text1}</p>
            <p className="text-cards-map">{text2}</p>
            <Link href="/establecimientos">
              <a className="reservar-map">
                RESERVAR
                <span className="border border-top"></span>
                <span className="border border-right"></span>
                <span className="border border-bottom"></span>
                <span className="border border-left"></span>
              </a>
            </Link>
          </div>
        </div>
        <div className="mapa">
          {true && (
            <RegularMap
              googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyA_B8ATqmugsxXEQ1bgew8ZQi5hdD3uS3I"
              loadingElement={<div style={{ height: "100%" }} />}
              containerElement={<div style={{ height: "50vh" }} />}
              mapElement={<div style={{ height: "100%" }} />}
            />
          )}
        </div>
      </div>
    </>
  );
};
