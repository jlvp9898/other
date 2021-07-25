import React from "react";
import { useRouter } from "next/router";
import Transition from "../Transition";

const Layout_Iso = ({ children }) => {
  const router = useRouter();
  return (
    <>
      <Transition location={router.pathname}>{children}</Transition>
    </>
  );
};
export default Layout_Iso;
