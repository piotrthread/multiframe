import styled from "styled-components";

const VerticalListItem = styled.li`
  color: black;
  background-color: white;
  font-weight: 900;
  font-size: 27px;
  display: flex;
  cursor: pointer;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.4;
    padding-right: 20px;
  }
`;

export default VerticalListItem;
