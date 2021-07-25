import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/globals.css";
import "../styles/effects.css";
// import { SwitchTransition, CSSTransition } from "react-transition-group";

// export default function MyApp({ Component, pageProps, router }) {
//   return (
//     <>
//       <style jsx global>{`
//         .fade-enter {
//           opacity: 0;
//           transform: translateX(-100%);
//         }
//         .fade-enter-active {
//           opacity: 1;
//           transform: translateX(0%);
//         }
//         .fade-exit {
//           opacity: 1;
//           transform: translateX(0%);
//         }
//         .fade-exit-active {
//           opacity: 0;
//           transform: translateX(100%);
//         }
//         .fade-enter-active,
//         .fade-exit-active {
//           transition: opacity 500ms, transform 500ms;
//         }
//       `}</style>
//       <SwitchTransition mode="out-in">
//         <CSSTransition
//           appear={true}
//           key={router.pathname}
//           classNames="fade"
//           timeout={1000}
//           addEndListener={(node, done) => {
//             node.addEventListener("transitionend", done, false);
//           }}
//         >
//           <Component {...pageProps} />
//         </CSSTransition>
//       </SwitchTransition>
//     </>
//   );
// }

import Layout_Iso from "../components/Layout_Iso";

const App = ({ Component, pageProps, router }) => {
  if (
    [
     // "/bebidas",
     // "/hamburguesas",
     // "/guarniciones",
     // "/entradas",
     // "/postres",
     // "/ensaladas",
     // "/cervezas",
     // "/vinos",
     // "/menus",
    ].includes(router.route)
  ) {
    return (
      <Layout_Iso>
        <Component {...pageProps} key={router.route} />
      </Layout_Iso>
    );
  } else {
    return <Component {...pageProps} key={router.route} />;
  }
  // return <Component {...pageProps} key={router.route} />;
};
export default App;
