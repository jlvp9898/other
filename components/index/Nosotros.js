import React,{ useState, useMemo} from "react";

const Nosotros = (props) => {
  
  return (
    <>
      <style jsx>{`
        .seccion-nosotros {
          padding: 5% 0 5% 0;
        }
        .title-nosotros {
          font-family: "Roboto-Black";
          font-weight: bold;
          color: #2d2c2c;
          text-align: center;
          font-size: 2.6rem;
          margin-bottom: 1rem;
        }
        .text-nosotros {
          color: #606060;
          text-align: center;
        }
        @media (min-width: 768px) {
          .seccion-nosotros {
            padding: 0 0 5% 0;
            margin-top: -110px;
          }
        
        }
        @media(max-width:420px){
          .title-nosotros{
            font-size: 2rem;
          }
        }
            @media(max-width:420px){
          .title-nosotros{
            font-size: 2rem;
          }
        }
      `}</style>
      <div className="seccion-nosotros">
        <p className="title-nosotros wow zoomIn">{props.api.seccion_one.title}</p>
        <p className="text-nosotros wow fadeInUp" dangerouslySetInnerHTML={{__html: props.api.seccion_one.description}}>
        
        </p>
      </div>
    </>
  );
};

export default Nosotros;
