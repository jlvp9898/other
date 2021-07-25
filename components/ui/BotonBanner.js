import styled from "@emotion/styled";
import { FaCheck } from "react-icons/fa";

const Boton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat-Medium";
  background-color: transparent;
  color: #f42434;
  letter-spacing: 4px;
  font-size: 0.9rem;
  text-transform: uppercase;
  text-align: center;
  position: relative;

  &:last-of-type {
    margin-right: 0;
  }

  &:hover {
    cursor: pointer;
  }
  @media(max-width:992px){
    background-color: #f42434;
    color: #111;
    padding:8px 5px;

    &:hover {
      background-color: transparent;
      color: #f42434;
    }
  }
`;
const Reservar = styled.span`
  padding: 0 1rem;
`;

const Container = styled.span`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  background: #f42434;

  & svg {
    background: #f42434;
    padding: 0.3rem;
    color: #0c0c0c;
    font-size: 1.8rem;
    border-radius: 50%;
    border: 2px solid;
  }
  & img {
    width: 40px;
  }
`;

const Border = styled.svg`
  height: 40px;
  position: absolute;
  width: 100%;

  &:hover {
    background: rgba(225, 51, 45, 0);
    font-weight: 900;
    letter-spacing: 1px;
  }
  & rect {
    fill: none;
    stroke: #f42434;
    stroke-width: 2;
    stroke-dasharray: 422, 0;
    transition: all 0.35s linear;
  }
  &:hover rect {
    stroke-width: 5;
    stroke-dasharray: 15, 310;
    stroke-dashoffset: 48;
    transition: all 1.35s cubic-bezier(0.19, 1, 0.22, 1);
  }
`;

const BotonBanner = ({ text, icon }) => {
  return (
    <Boton>
      <Border>
        <rect x="0" y="0" fill="none" width="100%" height="100%" />
      </Border>
      <Reservar>{text}</Reservar>
      <Container>
        <img src={icon} />
      </Container>
    </Boton>
  );
};

export default BotonBanner;
