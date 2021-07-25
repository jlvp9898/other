import React, { useEffect, useState, useMemo} from "react";
import Link from "next/link";
import Image from "next/image";
import Slider from "react-slick";
import api from ".../../../api/api";




const Slider_home = () => {

  const [_json, setJson] = useState(api.jsonMenus);

  useMemo(async () => {
  
    const headers = api.head();
    fetch(api.urlApi("data_menus"), { method: 'GET', headers})
    .then(response => response.json())
    .then(data => setJson(data));
    
    }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrow: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          arrow: false,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrow: false,
          dots: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false,
          dots: true,
          centerPadding: '20px',
        },
      },
    ],
  };
  return (
    <>
      <style jsx>{`
        .content-interest-ppal {
          position: relative;
          width: 100%;
          text-align: center;
          padding-bottom: 15px;
        }
        .slider-interest-ppal .slick-slide {
          height: auto !important;
          padding: 10px;
        }
        .slider-interest-ppal .slide {
          position: relative;
          transition: all 0.5s;
        }
        .slider-interest-ppal .slide img {
          width: 100%;
          box-shadow: 0px 32px 16px -11px rgba(200, 200, 200, 1) !important;
        }
        .slider-interest-ppal .slide .text {
          position: absolute;
          bottom: 30%;
          text-align: initial;
          transition: all 0.5s;
        }
        .slider-interest-ppal .text p {
          margin-bottom: 0.5rem;
          color: #e6e6e4;
        }
        .slider-interest-ppal .text h2 {
          color: #f2f2f2;
        }
        .slider-interest-ppal .btn_mas {
          position: absolute;
          left: 5%;
          bottom: 5%;
          padding: 0.5rem 1.5rem;
          font-size: 0.9rem;
          opacity: 1;
          transition: all 0.5s;
        }
        .title-que-deseas{
          padding:8px;
          padding-left: 2rem;
      
          background:rgba(255,0,0,0.5);
        }
        @media (min-width: 768px) {
          .content-interest-ppal {
            margin-bottom: 4rem;
          }
        }
        @media (min-width: 992px) {
          .content-interest-ppal {
            top: -100px;
            margin-bottom: 0;
          }
        }
        @media (min-width: 1024px) {
          .slider-interest-ppal .btn_mas {
            opacity: 0;
          }
          .slider-interest-ppal .slide:hover {
            transform: scale(1.2);
            z-index: 1;
          }
          .slider-interest-ppal .slide:hover .text {
           
            bottom: 35%;
            opacity: 1;
          }
          .slider-interest-ppal .slide:hover .btn_mas {
            left: 7%;
            bottom: 10%;
            opacity: 1;
          }
        }
      `}</style>
      <div className="content-interest-ppal">
        <div className="slider-interest-ppal wow fadeIn">
          <Slider {...settings}>

          {_json.seccion_one.title.map(
            ({ title_menu, subtitle, image1, image }, j) => {
              return (
                <div className="slide">
                <Image
                  src={api.urlBackPanel()+image1}
                  alt="img2"
                  className="img-fluid"
                  width={500}
                  height={400}
                />
                <div className="text">
                  <p className="title-que-deseas">{title_menu}</p>
                  <h2>{subtitle}</h2>
                </div>
                <Link href={api.urlBackPanel()+image}>
                  <a className="btn_mas btn-red" target="_blank">Ver más</a>
                </Link>
              </div>
                
              );
            }
          )}
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Slider_home;
