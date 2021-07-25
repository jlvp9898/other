import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./styles";

export const Card = ({ img, alt, text, title, url }) => {
  return (
    <>
      <style jsx>{styles}</style>
      <div className="img-card">
        <Image src={img} alt={alt} width={500} height={400} />
        <div className="text-cards-paginacion">
          <p>{text}</p>
          <h2 className="title-que-deseas">{title}</h2>
          <Link href={url}>
            <a className="btn_mas btn-red" target="_blank">Ver más</a>
          </Link>
        </div>
      </div>
    </>
  );
};
