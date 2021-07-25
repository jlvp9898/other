import css from "styled-jsx/css";

export default css.global`
  .italica svg {
    color: #f42434;
  }
  .video svg {
    color: #f42434;
    font-size: 5rem;
    background-color: #ffffff;
    border-radius: 50%;
    cursor: pointer;
    transition: all 0.5s;
  }
  .video svg:hover {
    color: #CFC493;
  }
  @keyframes modal-video {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @keyframes modal-video-inner {
    from {
      transform: translate(0, 100px);
    }
    to {
      transform: translate(0, 0);
    }
  }
  .modal-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000000;
    cursor: pointer;
    opacity: 1;
    animation-timing-function: ease-out;
    animation-duration: 0.3s;
    animation-name: modal-video;
    -webkit-transition: opacity 0.3s ease-out;
    -moz-transition: opacity 0.3s ease-out;
    -ms-transition: opacity 0.3s ease-out;
    -o-transition: opacity 0.3s ease-out;
    transition: opacity 0.3s ease-out;
  }
  .modal-video-effect-exit {
    opacity: 0;
  }
  .modal-video-effect-exit .modal-video-movie-wrap {
    -webkit-transform: translate(0, 100px);
    -moz-transform: translate(0, 100px);
    -ms-transform: translate(0, 100px);
    -o-transform: translate(0, 100px);
    transform: translate(0, 100px);
  }
  .modal-video-body {
    max-width: 940px;
    width: 100%;
    height: 100%;
    margin: 0 auto;
    display: table;
  }
  .modal-video-inner {
    display: table-cell;
    vertical-align: middle;
    width: 100%;
    height: 100%;
  }
  .modal-video-movie-wrap {
    width: 100%;
    height: 0;
    position: relative;
    padding-bottom: 56.25%;
    background-color: #333;
    animation-timing-function: ease-out;
    animation-duration: 0.3s;
    animation-name: modal-video-inner;
    -webkit-transform: translate(0, 0);
    -moz-transform: translate(0, 0);
    -ms-transform: translate(0, 0);
    -o-transform: translate(0, 0);
    transform: translate(0, 0);
    -webkit-transition: -webkit-transform 0.3s ease-out;
    -moz-transition: -moz-transform 0.3s ease-out;
    -ms-transition: -ms-transform 0.3s ease-out;
    -o-transition: -o-transform 0.3s ease-out;
    transition: transform 0.3s ease-out;
  }
  .modal-video-movie-wrap iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .modal-video-close-btn {
    position: absolute;
    z-index: 2;
    top: -35px;
    right: -35px;
    display: inline-block;
    width: 35px;
    height: 35px;
    overflow: hidden;
    border: none;
    background: transparent;
  }
  .modal-video-close-btn:before {
    transform: rotate(45deg);
  }
  .modal-video-close-btn:after {
    transform: rotate(-45deg);
  }
  .modal-video-close-btn:before,
  .modal-video-close-btn:after {
    content: "";
    position: absolute;
    height: 2px;
    width: 100%;
    top: 50%;
    left: 0;
    margin-top: -1px;
    background: #fff;
    border-radius: 5px;
    margin-top: -6px;
  }
`;
