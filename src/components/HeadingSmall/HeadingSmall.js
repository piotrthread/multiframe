import styled from "styled-components";
import React from "react";

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 25px 0;
  margin-bottom:6px;
  align-self: flex-start;
`;

const HeadingBold = styled.h1`
  display: inline-block;
  font-size: 18px;
  font-weight: 700;
`;
const HeadingThin = styled.h1`
  display: inline-block;
  font-size: 18px;
  font-weight: 300;
  margin-left: 10px;
`;
const Bullet = styled.div`
  background-color: black;
  width: 25px;
  height: 3px;
  margin-right: 8px;
  margin-bottom: 8px;
`;

const HeadingSmall = ({ bold, thin }) => (
  <HeadingWrapper>
    <Bullet />
    {bold ? <HeadingBold>{bold}</HeadingBold> : null}
    {thin ? <HeadingThin>{thin}</HeadingThin> : null}
  </HeadingWrapper>
);

export default HeadingSmall;
