import styled from "styled-components";

const AboutWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 0 25px;
  @media (min-width: 768px) {
    padding: 0 50px;
  }
  @media (min-width: 865px) {
    padding: 0 50px;
  }
  @media (min-width: 992px) {
    padding: 0 130px;
  }
  @media (min-width: 1050px) {
    flex-direction: row;
    min-height: 600px;
    padding: 0;
  }
`;

export default AboutWrapper;
