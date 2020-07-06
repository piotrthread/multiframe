import styled from "styled-components";

const HamburgerButton = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  display: flex;
  align-items: center;
  background-color: white;
  border: 0;
  width: 27px;
  height: 27px;
  outline: none;
  cursor: pointer;
  transform: scale(0.8);

  &:hover {
    opacity: 0.4;
  }
  @media (min-width: 1075px) {
    display: none;
  }
`;

export default HamburgerButton;
