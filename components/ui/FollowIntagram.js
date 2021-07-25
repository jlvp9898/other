import React from "react";

const TitleRojoLeft = ({ title, text }) => {
  return (
    <>
      <style jsx>{`
        .contenedor-text {
          display: flex;
          padding-top: 5%;
        }
        .title-galeria {
          padding-right: 4%;
        }
        .title-galeria h2 {
          color: #f42434;
          font-size: 1.8rem;
          font-weight: 600;
          font-family: "BebasNeue";
          margin-top: 0.18rem;
        }
        .text-galeria {
          color: #606060;
          width: 50%;
          margin-top: 0.5rem;
          padding-bottom: 5%;
        }
        .line-doble {
          flex-grow: 100;
          margin: auto;
        }
        .line-doble hr {
          background: #808080;
          width: 100%;
          height: 1px;
          margin-bottom: 0.2rem;
        }
        @media (max-width: 767.98px) {
          .title-galeria {
          }
          .text-galeria {
            width: 100%;
          }
        }
      `}</style>
      <div className="contenedor-text">
        <div className="title-galeria">
          <h2 className="wow fadeInLeft">{title}</h2>
        </div>
        <div className="line-doble">
          <hr className="line-doble" />
          <hr className="line-doble" />
        </div>
      </div>
      <p className="text-galeria wow fadeInLeft">{text}</p>
    </>
  );
};

export default TitleRojoLeft;
