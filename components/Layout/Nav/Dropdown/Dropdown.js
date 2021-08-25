import React, { useState } from "react";

import styles from "./styles";
import Link from "next/link";

function Dropdown({ menu_items }) {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <style jsx>{styles}</style>
   
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <div className="popover-relleno"></div>
        <div className="popover-arrow"></div>
        {menu_items.map((item, index) => {
          return (
            <li key={index}>
              <Link href={item.path}>
                <a className={item.cName} onClick={() => setClick(false)}>
                  {item.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      
    </>
  );
}

export default Dropdown;
