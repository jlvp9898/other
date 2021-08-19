import React from "react";

const TitleNegroLeft = ({ title, url, nickname, text }) => {
  return (
    <>
      <style jsx>{`
        .contenedor-text {
          padding-bottom: 5%;
        }
        .title-galeria {
          flex: 50%;
          max-width: 50%;
        }
        .title-galeria h2 {
          color: #0c0c0c;
          margin: 0.8rem 0;
          border-bottom: 4px solid #f42434;
          display: inline-block;
          padding-bottom: 0.5rem;
          font-size: 1.3rem;
          font-weight: 400;
        }
        .title-galeria h2 a {
          transition: all 0.3s;
        }
        .title-galeria h2 a:hover {
          color: #f42434;
        }
        .text-galeria {
          color: #c3ba98;
          margin: 0.1rem 0;
          flex: 50%;
          max-width: 50%;
        }
        @media (max-width: 767.98px) {
          .title-galeria {
            flex: 100%;
            max-width: 100%;
          }
          .text-galeria {
            flex: 100%;
            max-width: 100%;
          }
        }
      `}</style>
      <div className="contenedor-text">
        <div className="title-galeria">
        <h2 className="wow fadeInLeft">{title} <a href={url} target="_blank">{nickname}</a></h2>
        </div>
        <p className="text-galeria wow fadeInLeft">{text}</p>
      </div>
    </>
  );
};

export default TitleNegroLeft;
