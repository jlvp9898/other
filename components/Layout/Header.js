import styled from "@emotion/styled";

const Header = styled.header`
  background-size: cover;
  background-position: initial;
  background-position: center;
  position: relative;
  z-index: 0;
  padding-top: calc(180px + 1rem);
  @media screen and (max-width: 991.98px) {
    padding:120px 0px !important;
    margin-top: 0;
    z-index: 1000;
  }
`;
export default Header;
