import styled from "styled-components";

const VerticalListWrapper = styled.ul`
  list-style-type: none;
  background-color: white;
  height: 100vh;
  width: 100vw;
  border-top: 1px solid rgba(255, 255, 255, 0.3);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 3;
  padding-right: 25px;
  position: absolute;
  right: 0;
  transition: right .6s ease;

  @media (min-width: 1075px) {
    display: none;
  }
`;

export default VerticalListWrapper;
