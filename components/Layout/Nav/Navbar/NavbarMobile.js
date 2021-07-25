import React, { useState } from "react";
import Link from "next/link";

import { MenuItems, CartaItems } from "../MenuItems";
import ItemsMenuMobile from "../ItemsMenuMobile/ItemsMenuMobile";
import {
  FaStar,
  FaTimes,
  FaBars,
  FaArrowCircleLeft,
  FaCaretRight,
} from "react-icons/fa";
import styles from "./styles";

function Navbar() {
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
                <a className="nav-links">Inicio</a>
              </Link>
            </li>
            <li className="nav-item">
              <span
                className="nav-links"
                onClick={() => {
                  handleSubmenu("menu");
                }}
              >
                Menú <FaCaretRight />
              </span>
            </li>
            <li className="nav-item">
              <Link href="/locales">
                <a className="nav-links">Locales</a>
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
