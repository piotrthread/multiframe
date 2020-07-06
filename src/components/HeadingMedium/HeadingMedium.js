import styled from "styled-components";
import React from "react";

const HeadingWrapper = styled.div`
  display: none;
  flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    margin: 25px 0;
    align-self: flex-start;
  @media (max-width: 570px) {
    display: flex;
    
  }
`;

const HeadingBold = styled.h1`
  display: inline-block;
  font-size: 25px;
  font-weight: 700;
`;
const HeadingThin = styled.h1`
  display: inline-block;
  font-size: 25px;
  font-weight: 300;
  margin-left: 10px;
`;
const Bullet = styled.div`
  background-color: black;
  width: 32px;
  height: 4px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

const HeadingMedium = ({ bold, thin }) => (
  <HeadingWrapper>
    <Bullet />
    {bold ? <HeadingBold>{bold}</HeadingBold> : null}
    {thin ? <HeadingThin>{thin}</HeadingThin> : null}
  </HeadingWrapper>
);

export default HeadingMedium;
