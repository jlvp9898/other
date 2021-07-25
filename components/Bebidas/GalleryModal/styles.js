import css from "styled-jsx/css";

export default css`
  .gallery-container {
    padding-top: 0.9375rem;
  }

  .gallery-card {
    position: relative;
    overflow: hidden;
    margin-bottom: 1.875rem;
  }

  .gallery-thumbnail {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
  }

  .card-icon-open {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    font-size: 2rem;
    color: #fff;
    cursor: pointer;
    opacity: 0;
    transform: translate(-50%, -50%);
    transition: all 0.25s ease-in-out;
  }
  .card-icon-open:focus,
  .card-icon-open:hover {
    color: #111;
  }

  .gallery-thumbnail:focus ~ .card-icon-open,
  .gallery-thumbnail:hover ~ .card-icon-open,
  .gallery-thumbnail ~ .card-icon-open:focus,
  .gallery-thumbnail ~ .card-icon-open:hover {
    opacity: 1;
  }

  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10000;
    width: 100vw;
    height: 100vh;
    background: rgba(21, 21, 21, 0.75);
  }

  .modal-body {
    position: relative;
    width: 100vw;
    height: 100vh;
    z-index: 10001;
    padding: 0;
    overflow: auto;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 100vw;
    height: auto;
  }

  @media (orientation: landscape) {
    img {
      width: auto;
      height: 100vh;
    }
  }
  .modal-close {
    position: fixed;
    top: 20px;
    right: 20px;
    font-size: 2rem;
    color: #f42434;
    transition: all 0.25s ease-in-out;
  }
  .modal-close:focus,
  .modal-close:hover {
    color: #fff;
  }
  @media (max-width: 424.98px) {
    .modal-close {
      top: 20%;
      right: 0;
    }
  }
`;
