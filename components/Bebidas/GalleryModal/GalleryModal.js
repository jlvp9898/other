import React from "react";
import { FaTimes } from "react-icons/fa";

import styles from "./styles";

const GalleryModal = ({ show, onOpenClose, src }) => {
  if (show === false) {
    return null;
  }

  return (
    <>
      <style jsx>{styles}</style>
      <div className="modal-overlay animated fadeIn" onClick={onOpenClose}>
        <div className="modal-body">
          <a className="modal-close" href="#url" onClick={onOpenClose}>
            <FaTimes />
          </a>
          <img className="img-modal" src={src} alt="" />
        </div>
      </div>
    </>
  );
};

export default GalleryModal;
