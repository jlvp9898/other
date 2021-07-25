import React from 'react'
import styled from "@emotion/styled";

const LineDoble = styled.hr`
background: #808080;
width: 100%;
height: 1px;
margin-bottom: 0.2rem;
`;

const DobleLinea = () => {
  return (
    <>
      <LineDoble />
      <LineDoble />
    </>
  )
}

export default DobleLinea