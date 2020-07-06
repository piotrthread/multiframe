import React, { useState } from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  z-index: 3;
  transition: all 0.4s ease;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 10px;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  height: 40vw;
  overflow: hidden;
  margin-bottom: 50px;
  cursor: pointer;

  @media (min-width: 920px) {
    display: flex;
  }
  @media (min-width: 992px) {
    height: 33vw;
  }
  @media (min-width: 1200px) {
    height: 28vw;
  }
  @media (min-width: 1430px) {
    height: 30vw;
  }
  @media (min-width: 1590px) {
    height: 32vw;
  }
`;

const Animage = () => {
  const [hover, setHover] = useState(false);
  const toggleImage = () => setHover(!hover);
  const hideImage = () => setHover(false);
  const showImage = () => setHover(true);
  return (
    <Container>
      <Wrapper
        onMouseOver={showImage}
        onMouseOut={hideImage}
        onClick={toggleImage}
        id="mozliwosci"
      >
        <Image src="./images/rama.jpg" />
        <Image
          src="./images/grafa.jpg"
          style={!hover ? { opacity: 0 } : { opacity: 1 }}
        />
      </Wrapper>
    </Container>
  );
};

export default Animage;
