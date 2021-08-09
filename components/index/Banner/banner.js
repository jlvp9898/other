import React,{useMemo} from "react";
import Link from "next/link";
import Image from "next/image";
import style from "./style";

const Banner_one = () => {

  useMemo(async () => {
   
    var img = document.querySelectorAll(".content-image"); 
    var i = 0;
    for (i = 0; i < img.length; i++) {
      var ancho = img[i].offsetWidth;
      
      img[i].style.height=ancho+"px";
    }
    
  }, []);

  return (
    <>
      <style jsx>{style}</style>
      <style jsx>{`
       .content-image{
        background-size: 100% 100% !important;
        background-repeat: no-repeat !important;
         width:100%;
         height:100%;
         background-position: center !important;
       }
       .img_1{
         background:url('/static/img/fondos/home-1.jpg');
       }
       .img_2{
        background:url('/static/img/fondos/home-2.jpg');
      }
      .img_3{
        background:url('/static/img/fondos/home-3.jpg');
      }
      .img_4{
        background:url('/static/img/fondos/home-4.jpg');
      }
      `}</style>
      <div className="domicilio-ppal">
        <div className=" item-1 wow fadeInLeft content-image img_1">
        
        </div>
        <div className="item-2 wow fadeInLeft content-image img_2">
         
        </div>
        <div className="item-3 wow fadeInRight content-image img_3">
      
        </div>
        <div className="item-4 wow content-image img_4 fadeInRight">
     
           <div>
         
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner_one;
