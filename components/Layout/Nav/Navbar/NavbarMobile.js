import React, { useState, useMemo } from "react";
import Link from "next/link";

import { CartaItems } from "../MenuItems";
import ItemsMenuMobile from "../ItemsMenuMobile/ItemsMenuMobile";
import {
  FaStar,
  FaTimes,
  FaBars,
  FaArrowCircleLeft,
  FaCaretRight,
} from "react-icons/fa";
import api from ".../../../api/api";
import Cookies from 'universal-cookie';
import styles from "./styles";

function Navbar() {
  const headers = api.head();
  const [_json, setJson] = useState(api.jsonApiHeader);
  const [menu, setMenu] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [items, setItems] = useState([]);

  const handleClick = () => {
    setMenu(!menu);
    setSubmenu(false);
  };

  const closeMobileMenuMenu = () => setSubmenu(false);

  const handleSubmenu = (tipo) => {
    tipo == "carta" ? setItems(CartaItems) : setItems(MenuItems);
    setSubmenu(!submenu);
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

  useMemo(async () => {
    
    const cookies = new Cookies();
  
    const lang = cookies.get('lang');
     fetch(api.urlApi("data_header&lang="+lang), { method: "GET", headers })
        .then((response) => response.json())
        .then((data) => setJson(data));
  
    }, []);

  return (
    <>
      <style jsx>{styles}</style>
      <style jsx global>{`
        svg {
          color: #fff;
        }
        .nav-links svg {
          font-size: 1.1rem;
        }
        .nav-links:hover svg {
          color: #f42434;
        }
        @media (max-width: 1199.98px) {
          .menu-icon svg {
            font-size: 2rem;
          }
        }
        @media (min-width: 1200px) {
          .menu-mobile {
            display: none !important;
          }
        }
      `}</style>

      <nav className="navbar">
        <div className="container">
          <Link href="/">
            <a className="logo_nav menu-mobile">
              <img src="/static/img/logos/logo.png" />
            </a>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {menu ? <FaTimes /> : <FaBars />}
          </div>
          <ul className={menu ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link href="/">
                <a className="nav-links">{_json.list_1}</a>
              </Link>
            </li>
            <li className="nav-item">
              <span
                className="nav-links"
                onClick={() => {
                  handleSubmenu("menu");
                }}
              >
                {_json.list_2} <FaCaretRight />
              </span>
            </li>
            <li className="nav-item">
              <Link href="/locales">
                <a className="nav-links">{_json.list_3}</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/te-unes-a-nuestro-equipo">
                <a className="nav-links">{_json.list_4}</a>
              </Link>
            </li>
          </ul>

          <div className={submenu ? "nav-menu-menu active" : "nav-menu-menu"}>
            {<ItemsMenuMobile menu_items={items} />}
            <br />
            <div className="menu-icon" onClick={closeMobileMenuMenu}>
              <FaArrowCircleLeft color="#f42434" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
