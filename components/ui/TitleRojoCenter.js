import React from "react";

const TitleRojoCenter = ({ title }) => {
  return (
    <>
      <style jsx>{`
        .contenedor-text {
          display: flex;
          padding-bottom: 5%;
        }
        .title-center {
          text-align: center;
          padding-left: 8%;
          padding-right: 8%;
        }
        .title-center h2 {
          color: #f42434;
          font-size: 2rem;
          font-weight: 600;
          font-family: Gotham;
        }
        .line-doble {
          margin: auto;
          flex-grow: 100;
        }
        .line-doble hr {
          background: #808080;
          width: 100%;
          height: 1px;
          margin-bottom: 0.2rem;
        }
      `}</style>
      <div className="contenedor-text wow fadeInUp">
        <div className="line-doble">
          <hr className="line-doble" />
          <hr className="line-doble" />
        </div>
        <div className="title-center">
          <h2>{title}</h2>
        </div>
        <div className="line-doble">
          <hr className="line-doble" />
          <hr className="line-doble" />
        </div>
      </div>
    </>
  );
};

export default TitleRojoCenter;
