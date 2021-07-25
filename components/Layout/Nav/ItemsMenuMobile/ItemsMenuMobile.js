import React from "react";
import Link from "next/link";
import styles from "./styles";

function ItemsMenuMobile({ menu_items }) {
  return (
    <>
      <style jsx>{styles}</style>
      <ul className="items-menu">
        {menu_items.map((item, index) => {
          return (
            <li key={index} className="nav-menu-item">
              <Link href={item.path}>
                <a className="nav-menu-links">{item.title}</a>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default ItemsMenuMobile;
