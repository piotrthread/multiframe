import styled from "styled-components";

const FooterWrapper = styled.div`
  background-color: black;
  font-weight: 300px;
  font-size: 13px;
  min-height: 80vh;
  margin-top: 150px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 50px;
  position: relative;
  overflow: hidden;
  @media (min-width: 992px) {
    padding-left: 130px;
  }
  @media (min-width: 1200px) {
    padding-left: 230px;
  }
`;

export default FooterWrapper;
