import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";

import { MenuItems, CartaItems } from "../MenuItems";
import Dropdown from "../Dropdown/Dropdown";
import { FaStar, FaCaretDown } from "react-icons/fa";
import BotonBanner from "../../../ui/BotonBanner";
import { useScroll } from "../../../../hooks/useMenu";
import styles from "./styles";

function Navbar() {
  const [carta, setCarta] = useState(false);
  const [menu, setMenu] = useState(false);
  const navRef = useRef();

  const MenuEntra = (tipo) => {
    tipo == "carta" ? setCarta(true) : setMenu(true);
  };

  const MenuSale = (tipo) => {
    tipo == "carta" ? setCarta(false) : setMenu(false);
  };

  useScroll(navRef, "");

  return (
    <>
      <style jsx>{styles}</style>
      <style jsx global>{`
        .min-width{
          min-width: 140px;
        }
        header svg {
          color: #fff;
        }
        .nav-links:hover svg {
          color: #f42434;
        }
        @media (max-width: 1199.98px) {
          header .menu-icon svg {
            font-size: 2rem;
          }
        }
        @media (min-width: 1200px) {
          .menu-mobile {
            display: none !important;
          }
        }
      `}</style>

      <nav className="navbar" ref={navRef}>
        <div className="container">
          <ul className="nav-menu nav-left">
            <li className="nav-item"></li>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-links">Inicio</a>
              </Link>
            </li>
            <li className="star-icon">
              <FaStar />
            </li>
            <li
              className="nav-item"
              onMouseEnter={() => {
                MenuEntra("menu");
              }}
              onMouseLeave={() => {
                MenuSale("menu");
              }}
            >
              <span className="nav-links">
                Menú <FaCaretDown />
                {menu && <Dropdown menu_items={MenuItems} />}
              </span>
            </li>
          </ul>
          <Link href="/">
            <a className="logo_nav">
              <img src="/static/img/logos/logo.png" />
            </a>
          </Link>
          <ul className="nav-menu nav-right">
            <li className=""></li>
            <li className="nav-item">
              <Link href="/locales">
                <a className="nav-links">Locales</a>
              </Link>
            </li>

            <li className="star-icon">
              <FaStar />
            </li>
            <li className="nav-item min-width">
              <Link href="/te-unes-a-nuestro-equipo">
                <a className="nav-links">Únete al equipo</a>
              </Link>
            </li>

            
            <li className="nav-item">
              <Link href="/locales">
                <a>
                <BotonBanner
                  text="RESERVAR"
                  icon="/static/img/icon-pedido-black.svg"
                />
                </a>
              </Link>
            </li>
         
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
