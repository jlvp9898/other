import React, { useState } from "react";
import { MenuItems2 } from "../MenuItems";

import styles from "./styles";
import Link from "next/link";

function Dropdown2() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <style jsx>{styles}</style>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        <div className="popover-arrow"></div>
        {MenuItems2.map((item, index) => {
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

export default Dropdown2;
