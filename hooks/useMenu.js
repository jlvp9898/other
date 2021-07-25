import { useState, useEffect } from "react";

export const useMenu = () => {
  const [size, setSize] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function updateSize() {
      setSize(window.innerWidth);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    size < 1200 ? setIsMobile(true) : setIsMobile(false);
  }, [size]);

  return {
    isMobile,
  };
};

export const useScroll = (ref, tipo) => {
  const [y, setY] = useState(0);
  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (y > 100) {
      if (tipo == "redes") {
        ref.current.style.height = "0";
      } else {
        ref.current.style.backgroundColor = "#202020";
        ref.current.style.top = "0";
      }
    } else if (y < 100) {
      if (tipo == "redes") {
        ref.current.style.height = "50px";
      } else {
        ref.current.style.backgroundColor = "transparent";
        ref.current.style.top = "50px";
      }
    }
    setY(window.scrollY);
  };

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);
    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);
};
