import styled from "styled-components";
import React from "react";

const HeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin: 50px 0;
`;

const HeadingBold = styled.h1`
  display: inline-block;
  font-size: 30px;
  font-weight: 700;
`;
const HeadingThin = styled.h1`
  display: inline-block;
  font-size: 30px;
  font-weight: 300;
  margin-left: 10px;
`;
const Bullet = styled.div`
  background-color: black;
  width: 71px;
  height: 7px;
  margin-right: 16px;
  margin-bottom:10px;
`;

const Heading = ({ bold, thin }) => (
  <HeadingWrapper>
    <Bullet />
    {bold ? <HeadingBold>{bold}</HeadingBold> : null}
    {thin ? <HeadingThin>{thin}</HeadingThin> : null}
  </HeadingWrapper>
);

export default Heading;
