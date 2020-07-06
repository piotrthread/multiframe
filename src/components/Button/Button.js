import styled from "styled-components";

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  font-weight: 600;
  font-size: 15px;
  border: 1px solid ${(props) => (props.white ? "white" : "black")};
  background-color: rgba(0, 0, 0, 0);
  padding: 25px 40px;
  letter-spacing: 0.5px;
  cursor: pointer;
  max-width: 155px;
  outline: none;
  color: ${(props) => (props.white ? "white" : "black")};
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.6;
  }
`;

export default Button;
