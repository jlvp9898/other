// import {
//   TransitionGroup,
//   Transition as ReactTransition,
// } from "react-transition-group";
// const TIMEOUT = 800;
// const getTransitionStyles = {
//   entering: {
//     position: `absolute`,
//     transform: `translateX(50px)`,
//   },
//   entered: {
//     transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
//     transform: `translateX(0px)`,
//   },
//   exiting: {
//     transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
//     transform: `translateX(-50px)`,
//   },
// };
// const Transition = ({ children, location }) => {
//   return (
//     <TransitionGroup style={{ position: "relative" }}>
//       <ReactTransition
//         key={location}
//         timeout={{
//           enter: TIMEOUT,
//           exit: TIMEOUT,
//         }}
//       >
//         {(status) => (
//           <div
//             style={{
//               ...getTransitionStyles[status],
//             }}
//           >
//             {children}
//           </div>
//         )}
//       </ReactTransition>
//     </TransitionGroup>
//   );
// };
// export default Transition;
import React from "react";
import { SwitchTransition, CSSTransition } from "react-transition-group";

const Transition = ({ children, location }) => {
  return (
    <>
      <style jsx global>{`
        .fade-enter {
          opacity: 0;
          transform: translateX(-100%);
        }
        .fade-enter-active {
          opacity: 1;
          transform: translateX(0%);
        }
        .fade-exit {
          opacity: 1;
          transform: translateX(0%);
        }
        .fade-exit-active {
          opacity: 0;
          transform: translateX(100%);
        }
        .fade-enter-active,
        .fade-exit-active {
          transition: opacity 500ms, transform 500ms;
        }
      `}</style>

      <SwitchTransition mode="out-in">
        <CSSTransition
          appear={true}
          key={location}
          classNames="fade"
          timeout={1000}
          addEndListener={(node, done) => {
            node.addEventListener("transitionend", done, false);
          }}
        >
          {children}
        </CSSTransition>
      </SwitchTransition>
    </>
  );
};
export default Transition;
