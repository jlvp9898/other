import styled from "@emotion/styled";

const Banner = ({ children, index }) => {
  const BannerHome = styled.div`
    color: #f2f2f2;
    font-weight: 600;
    height: ${index ? "70vh" : "48vh"};
    font-family: "American";
    padding-top: 5%;
    @media (max-width: 767.98px) {
      height: ${index ? "70vh" : "48vh"};
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 30px;
      padding-bottom: 30px;
    }
  `;
  return <BannerHome className={`container `}>{children}</BannerHome>;
};

export default Banner;
