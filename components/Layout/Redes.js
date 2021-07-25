import styled from "@emotion/styled";
import BtnRedes from "./BtnRedes";
import React, { useRef, useEffect, useState } from "react";
import { useScroll } from "../../hooks/useMenu";

const Line = styled.section`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1050;
  @media screen and (max-width: 991.98px) {
    position: fixed;
    top: 0;
    background-color: #0e0e0e;
    z-index: 2;
    height: 41px;
    width: 100%;
    display: none;
  }
`;

const UpNav = styled.div`
  color: #fff;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.3s;
  & .reservaciones_nav {
    text-align: right;
  }
`;

const RedesC = styled.div`
  font-size: 0.72rem;
  font-family: "Roboto-Medium";
  padding: 0.6rem 0.3rem;
  color: #d4d4d4;
  display: flex;
  align-items: center;
  @media (max-width: 991.98px) {
    padding: 0;
  }
`;

const Number = styled.span`
  font-family: "Montserrat-Bold";
  font-weight: bold;
  color: #f2f2f2;
`;
const Reservations = styled.span`
  font-family: "Montserrat-Medium";
  color: #d4d4d4;
  & a {
    transition: all 0.5s;
  }
  & a:hover {
    color: #f42434;
  }
`;

const Redes = () => {
  const upNav = useRef();
  useScroll(upNav, "redes");

  // const [y, setY] = useState(0);
  // const upNav = useRef();

  // const handleNavigation = (e) => {
  //   const window = e.currentTarget;
  //   if (y > 150) {
  //     upNav.current.style.backgroundColor = "red";
  //     console.log("scrolling up");
  //   } else if (y < 150) {
  //     upNav.current.style.backgroundColor = "transparent";
  //     console.log("scrolling down");
  //   }
  //   setY(window.scrollY);
  // };

  // useEffect(() => {
  //   setY(window.scrollY);
  //   window.addEventListener("scroll", handleNavigation);

  //   return () => {
  //     window.removeEventListener("scroll", handleNavigation);
  //   };
  // }, [handleNavigation]);

  return (
    <Line ref={upNav}>
      <UpNav className="container">
        <RedesC>
          <span>Síguenos </span>
          <BtnRedes />
        </RedesC>
      </UpNav>
    </Line>
  );
};

export default Redes;
