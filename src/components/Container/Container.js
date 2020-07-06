import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 0 25px;
  @media (min-width: 768px) {
    padding: 0 50px;
  }
  @media (min-width: 992px) {
    padding: 0 130px;
  }
  @media (min-width: 1200px) {
    padding: 0 230px;
  }
`;

export default Container;
