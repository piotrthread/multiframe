import styled from "styled-components";

const VerticalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  
  @media (min-width: 1050px) {
    padding-right: 50px;
    padding-bottom: 50px;
    padding-top:25px;
    width: 50%;
  }
`;

export default VerticalContainer;
