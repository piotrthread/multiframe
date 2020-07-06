import styled from "styled-components";

const HamburgerIcon = styled.div`
  background-color: ${(props) => (props.active ? "rgba(0, 0, 0, 0)" : "black")};
  height: 3px;
  border-radius: 2px;
  width: 25px;
  position: relative;

  &:before,
  &:after {
    content: "";
    position: absolute;
    display: block;
    background-color: black;
    height: 3px;
    border-radius: 2px;
    width: 25px;
  }

  &:before {
    top: ${(props) => (props.active ? 0 : "-9px")};
    transform: rotate(${(props) => (props.active ? "45deg" : 0)});
    transform-origin: 50% 50%;
  }

  &:after {
    bottom: ${(props) => (props.active ? 0 : "-9px")};
    transform: rotate(${(props) => (props.active ? "-45deg" : 0)});
    transform-origin: 50% 50%;
  }
`;

export default HamburgerIcon;
