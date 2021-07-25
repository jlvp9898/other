import React from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./style";

const Domicilio = (props) => {
  return (
    <>
      <style jsx>{style}</style>
      <style jsx>{`
       .content-image{
         background-size:cover !important;
         width:100%;
         height:100%;
         background-position: center !important;
         min-height: 180px !important;
       }
       .img_1{
         background:url('${props.urlBackPanel+props.api.seccion_third.logo_1}');
       }
       .img_2{
        background:url('${props.urlBackPanel+props.api.seccion_third.logo_2}');
      }
      .img_3{
        background:url('${props.urlBackPanel+props.api.seccion_third.logo_3}');
      }
       
      `}</style>
      <div className="domicilio-ppal">
        <div className="items item-1 wow fadeInLeft content-image img_1">
          <Link className="link-items" href={""+props.api.seccion_third.url_logo1}>
            <a className="link-items">
             
            </a>
          </Link>
        </div>
        <div className="items item-2 wow fadeInLeft content-image img_2">
          <Link className="link-items" href={""+props.api.seccion_third.url_logo2}>
            <a className="link-items">
            
            </a>
          </Link>
        </div>
        <div className="items item-3 wow fadeInRight content-image img_3">
          <Link className="link-items" href={""+props.api.seccion_third.url_logo3}>
            <a className="link-items">
              
            </a>
          </Link>
        </div>
        <div className="items item-4 wow fadeInRight">
          <h2>{props.api.seccion_third.title_service}</h2>
          <p>{props.api.seccion_third.content}</p>
          <div>
            <Link href={props.api.seccion_third.url}>
              <a className="btn-domicilio btn-red">Ver más</a>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Domicilio;
