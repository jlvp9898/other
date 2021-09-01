import styled from "@emotion/styled";
import React, { useEffect, useState, useMemo} from "react";
import api from ".../../../api/api";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const RedesNavI = styled.span`
  font-size: 1.3rem;
  display: flex;
  & a {
    & div {
      vertical-align: middle;
      transform: perspective(1px) translateZ(0);
      box-shadow: 0 0 1px rgba(0, 0, 0, 0);
      position: relative;
      transition-property: color;
      transition-duration: 0.3s;

      margin-left: 0.5rem;
      border-radius: 3px;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    & div:before {
      border-radius: 3px;
      width: 30px;
      height: 30px;
      content: "";
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      transform: scaleY(0);
      transform-origin: 50% 100%;
      transition-property: transform;
      transition-duration: 0.3s;
      transition-timing-function: ease-out;
    }
    & .fb:before {
      background-color: #3b5998;
    }
    & .tw:before {
      background-color: #00acee;
    }
    & .it:before {
      background: linear-gradient(
        45deg,
        #f09433 0%,
        #e6683c 25%,
        #dc2743 50%,
        #bc1888 75%,
        #833ab4 100%
      ) !important;
    }
    & .wa:before {
      background-color: #c4302b;
    }
    & .fb:hover {
      color: #ffffff;
    }
    & .tw:hover {
      color: #000000;
    }
    & .it:hover {
      color: #ffffff;
    }
    & .wa:hover {
      color: #ffffff;
    }
    & .fb:hover:before {
      transform: scaleY(1);
    }
    & .tw:hover:before {
      transform: scaleY(1);
    }
    & .it:hover:before {
      transform: scaleY(1);
    }
    & .wa:hover:before {
      transform: scaleY(1);
    }
  }
`;

const BtnRedes = () => {
  const [_json, setJson] = useState(api.jsonApiRedes);
  useMemo(async () => {
  
    const headers = api.head();
    fetch(api.urlApi("data_top_bar"), { method: 'GET', headers})
    .then(response => response.json())
    .then(data => setJson(data));

  }, []);
  return (
    <RedesNavI>
      <a href={_json.facebook} target="_blank">
        <div className="fb wow fadeInRight">
          <FaFacebookF />
        </div>
      </a>
      <a href={_json.twitter} target="_blank">
        <div className="tw wow fadeInRight">
          <FaTwitter />
        </div>
      </a>
      <a href={_json.instagram} target="_blank">
        <div className="it wow fadeInRight">
          <FaInstagram />
        </div>
      </a>
      <a href={_json.whatsapp} target="_blank">
        <div className="wa wow fadeInRight">
          <FaYoutube />
        </div>
      </a>
    </RedesNavI>
  );
};

export default BtnRedes;
