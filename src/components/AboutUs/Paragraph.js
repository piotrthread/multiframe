import styled from "styled-components";

const Paragraph = styled.p`
  font-weight: 300;
  text-align: justify;
  text-indent: 50px;
  @media (min-width: 1050px) {
    padding-left: 130px;
  }
  @media (min-width: 1200px) {
    padding-left: 230px;
  }
`;

export default Paragraph;
