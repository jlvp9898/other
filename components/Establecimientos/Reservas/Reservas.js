import React from "react";
import Link from "next/link";
import styles from "./styles";

const Reservas = (props) => {
  return (
    <>
      <style jsx>{styles}</style>
      <style jsx>{`
        .img_1 {
          background-image: url(${props.urlBackPanel+props.api.seccion_one.banner_one.img});
        }
        .img_2 {
          background-image: url(${props.urlBackPanel+props.api.seccion_one.banner_second.img});
        }
        .img_3 {
          background-image: url(${props.urlBackPanel+props.api.seccion_one.banner_third.img});
        }
        .img_4 {
          background-image: url(${props.urlBackPanel+props.api.seccion_one.banner_fourth.img});
        }
      `}</style>
      <div className="grid">
        <div className="columns">
          <div className="item-img img_1"></div>
          <div className="item">
            <div className="item-content">
              <h4>{props.api.seccion_one.banner_one.header}</h4>
              <small>
                <p>{props.api.seccion_one.banner_one.content}</p>
              </small>
              <Link href={props.api.seccion_one.banner_one.url}>
                <a className="btn-reserva btn-red" target="_blank">Reservar</a>
              </Link>
              <a href="https://bookings.agorapos.com/pedidos/widget/widget_horas/531/2/f00795ce1ea5d6d83ee0556de020aaf3d4d01825" target="_blank" className="btn-reserva btn-red">Para recoger</a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="item-img img_2"></div>
          <div className="item">
            <div className="item-content">
              <h4>{props.api.seccion_one.banner_second.header}</h4>
              <small>
                <p>{props.api.seccion_one.banner_second.content}</p>
              </small>
              <a href={props.api.seccion_one.banner_second.url} className="btn-reserva btn-red" target="_blank">
                Reservar
              </a>
            
                <a href="https://bookings.agorapos.com/pedidos/widget/widget_horas/530/2/7e0045eb68880e2fbcf18c7f19e94a0d10cb82d5" target="_blank" className="btn-reserva btn-red">Para recoger</a>
            
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="item-img img_3"></div>
          <div className="item">
            <div className="item-content">
              <h4>{props.api.seccion_one.banner_third.header}</h4>
              <small>
                <p>{props.api.seccion_one.banner_third.content}</p>
              </small>
              <a href={props.api.seccion_one.banner_third.url} className="btn-reserva btn-red" target="_blank">
                Reservar
              </a>
              <a href="https://bookings.agorapos.com/pedidos/widget/widget_horas/529/2/8e48d922d5546042258be6e5f9991f761c0436d1" target="_blank" className="btn-reserva btn-red">Para recoger</a>
            </div>
          </div>
        </div>
        <div className="columns">
          <div className="item-img img_4"></div>
          <div className="item">
            <div className="item-content">
              <h4>{props.api.seccion_one.banner_fourth.header}</h4>
              <small>
                <p>{props.api.seccion_one.banner_fourth.content}</p>
              </small>
              <a href={props.api.seccion_one.banner_fourth.url} className="btn-reserva btn-red" target="_blank">
                Reservar
              </a>
         
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reservas;
