import React, { useState, useMemo } from "react";
import Cookies from 'universal-cookie';
import Link from "next/link";
import styled from "@emotion/styled";
import { GrClose, GrFormUp } from "react-icons/gr";

const VentanaGrande = styled.div`
  width: 320px;
  height: 300px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10000;
  background-color: #f42434;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & svg {
    position: relative;
    font-size: 1.3rem;
    top: -10px;
    left: 40%;
    cursor: pointer;
    transition: all 0.5s;
  }
  & svg:hover path {
    stroke: #ffffff;
  }
  & img {
    width: 50%;
    margin-bottom: 2rem;
  }
  & a {
    font-size: 1.2rem;
    color: #ffffff;
    font-weight: bold;
    transform: perspective(1px) translateZ(0);
  }
  & a:hover {
    color: #cfc493;
  }
  @media (max-width: 992px) {
    display: none;
  }
  .br-reserva{
    display:block;
    text-align:center;
    margin-top:5px;
  }

  .ocultar-banner{
    display:none;
  }
`;

const VentanaPeq = styled.div`
  width: 320px;
  height: 43px;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 10000;
  background-color: #f42434;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    cursor: pointer;
    font-size: 2rem;
    position: absolute;
    right: 10px;
    top: 8px;
    transition: all 0.5s;
  }
  & svg:hover polyline {
    stroke: #ffffff;
  }
  & a {
    font-size: 1.2rem;
    color: #ffffff;
    font-weight: bold;
    transform: perspective(1px) translateZ(0);
  }
  & a:hover {
    color: #cfc493;
  }
  @media (max-width: 992px) {
    display: none;
  }
`;

const ReservarMesa = () => {
  const [click, setClick] = useState(false);

  const cookies = new Cookies();

  const BannerReserva = cookies.get('BannerReserva');

  const handleClick = () => {
    setClick(!click);
    cookies.set('BannerReserva',click, { path: '/' });
  };

 
  return (
    <>
      <VentanaPeq
        className={
          BannerReserva == "true" ? "animated fadeInUp delay-0-5s" : "animated fadeOutDown"
         
        }
      >
        <GrFormUp onClick={handleClick} />
        <Link href="/locales">
          <a className="btn-reservaF">RESERVAR TU MESA </a>
        </Link>
      </VentanaPeq>
      <VentanaGrande
        className={
          BannerReserva == "true" ? "animated fadeOutDown" : "animated fadeInUp delay-0-5s"
        }
      >
        <GrClose onClick={handleClick} />
        <img src="/static/img/logos/logo-white.png" alt="logo-blanco" />
        <Link href="/locales">
          <a className="btn-reservaF">RESERVAR TU MESA <span className="br-reserva">HAZ TU PEDIDO </span></a>
        </Link>
      </VentanaGrande>
    </>
  );
};

export default ReservarMesa;
