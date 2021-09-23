import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";

import Dropdown from "../Dropdown/Dropdown";
import { FaStar, FaCaretDown } from "react-icons/fa";
import BotonBanner from "../../../ui/BotonBanner";
import { useScroll } from "../../../../hooks/useMenu";
import styles from "./styles";
import api from ".../../../api/api";
import Cookies from 'universal-cookie';

function Navbar() {
  const headers = api.head();
  const [_json, setJson] = useState(api.jsonApiHeader);
  const [carta, setCarta] = useState(false);
  const [menu, setMenu] = useState(false);
  const navRef = useRef();

  const MenuEntra = (tipo) => {
    tipo == "carta" ? setCarta(true) : setMenu(true);
  };

  const MenuSale = (tipo) => {
    tipo == "carta" ? setCarta(false) : setMenu(false);
  };

  const MenuItems = [
    {
      title: _json.menus[0],
      path: "/hamburguesas",
      cName: "dropdown-link",
    },
    {
      title: _json.menus[1],
      path: "/guarniciones",
      cName: "dropdown-link",
    },
    {
      title: _json.menus[2],
      path: "/ensaladas",
      cName: "dropdown-link",
    },
    {
      title: _json.menus[3],
      path: "/entradas",
      cName: "dropdown-link",
    },
    {
      title: _json.menus[4],
      path: "/postres",
      cName: "dropdown-link",
    },
    {
      title: _json.menus[5],
      path: "/cervezas",
      cName: "dropdown-link",
    },
    {
      title: _json.menus[6],
      path: "/vinos",
      cName: "dropdown-link",
    },
    {
      title: _json.menus[7],
      path: "/zumos-y-cocktails",
      cName: "dropdown-link",
    },
    {
      title: _json.menus[8],
      path: "/menus",
      cName: "dropdown-link",
    },

  ];

  useScroll(navRef, "");

  useEffect(async () => {


  getRecipes();
    

  }, []);

  const getRecipes = async () => {
     
  const cookies = new Cookies();

  const lang = cookies.get('lang');

    if(window.localStorage.getItem("data_header") == null || window.localStorage.getItem("lang") != lang){
        const response = await fetch(api.urlApi("data_header&lang="+lang), { method: "GET", headers }
        ) .then(async response => {
        const data = await response.json();
        setJson(data);
        window.localStorage.setItem("data_header",  JSON.stringify(data));  
        window.localStorage.setItem("lang",  lang);
        console.log(window.localStorage.getItem("data_header"));
        console.log(window.localStorage.getItem("lang"));

      });
  }else{
    setJson(JSON.parse(window.localStorage.getItem("data_header")));
  }

  }

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
                <a className="nav-links">{_json.list_1}</a>
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
              
              {_json.list_2} <FaCaretDown />
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
                <a className="nav-links">{_json.list_3}</a>
              </Link>
            </li>

            <li className="star-icon">
              <FaStar />
            </li>
            <li className="nav-item min-width">
              <Link href="/te-unes-a-nuestro-equipo">
                <a className="nav-links">{_json.list_4}</a>
              </Link>
            </li>

            
            <li className="nav-item">
              <Link href="/locales">
                <a>
                <BotonBanner
                  text={_json.btn_rsv}
                  icon="/static/img/hamburger-solid.svg"
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
