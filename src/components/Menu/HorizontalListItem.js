import styled from "styled-components";

const HorizontalListItem = styled.li`
  display: inline-block;
  font-weight: 600;
  font-size: 14px;
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  padding: 0 10px;

  &:hover {
    color: #b6b6b6;
  }
  &:first-child {
    border: 0;
  }
  &:last-child {
    padding-right: 0;
  }
`;

export default HorizontalListItem;
