import React, { useEffect } from "react";
import Link from "next/link";
import styles from "./styles";

export const Paginacion = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.WOW = require("wowjs");
    }
    new WOW.WOW({
      live: false,
    }).init();
  }, []);
  return (
    <>
      <style jsx>{styles}</style>
      <div className="pagination wow fadeInUp">
        <p>Pagina 1 de 6</p>
        <Link href="#">
          <a className="active">1</a>
        </Link>
        <Link href="#">
          <a className="">2</a>
        </Link>
        <Link href="#">
          <a className="">3</a>
        </Link>
        <Link href="#">
          <a className="">...</a>
        </Link>
        <Link href="#">
          <a className="">6</a>
        </Link>
        <Link href="#">
          <a className="next">></a>
        </Link>
      </div>
    </>
  );
};
