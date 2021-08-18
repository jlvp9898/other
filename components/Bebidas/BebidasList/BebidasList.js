import React, { useEffect} from "react";
import { FaExpand } from "react-icons/fa";

import TitleRojoLeft from "../../ui/TitleRojoLeft";
import style from "./style";
import api from ".../../../api/api";

const BebidasList = ({ onImg, datos }) => {

  useEffect(async () => {
    
    setTimeout(function(){
    var img = document.querySelectorAll(".content-image"); 
    var i = 0;
    for (i = 0; i < img.length; i++) {
      var ancho = img[i].offsetWidth;
      
      img[i].style.height=ancho+"px";
    }
  }, 1000);

  setTimeout(function(){
    var img = document.querySelectorAll(".content-image"); 
    var i = 0;
    for (i = 0; i < img.length; i++) {
      var ancho = img[i].offsetWidth;
      
      img[i].style.height=ancho+"px";
    }
  }, 3000);

  setTimeout(function(){
    var img = document.querySelectorAll(".content-image"); 
    var i = 0;
    for (i = 0; i < img.length; i++) {
      var ancho = img[i].offsetWidth;
      
      img[i].style.height=ancho+"px";
    }
  }, 10000);

  }, [0]);

  return (
    <>
      <style jsx>{style}</style>
      <TitleRojoLeft title={datos.title_page} />
      <div className="grid">
        <div className="columns">
          {datos.seccion_one.title.map(
            ({ image, name_pl, descripcion_pl, price_pl }, j) => {
              return (
                <div className="item" key={`${name_pl}-${j}`}>
                  <div className="item-img wow fadeIn">
                    <section className="content-image" style={{backgroundImage: `url("`+api.urlBackPanel()+image+`")` }}   onClick={() => {
                        onImg(api.urlBackPanel()+image);
                      }}></section>
                    
                    <div
                      onClick={() => {
                        onImg(api.urlBackPanel()+image);
                      }}
                    >
                      <FaExpand />
                    </div>
                  </div>
                  <div className="item-content">
                    <div className="item-title">
                      <h3 className="wow fadeInUp">{name_pl}</h3>
                      <div className="item-points wow fadeInUp"></div>
                      <div className="item-price wow fadeInUp">
                        <h3>{price_pl}</h3>
                      </div>
                    </div>
                    <div className="item-description wow fadeInUp">
                      <p dangerouslySetInnerHTML={{__html: descripcion_pl}}></p>
                     
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default BebidasList;
