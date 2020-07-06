import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const MasonryWrapper = styled.div`
  column-count: 2;
  column-gap: 0.6em;
  @media (min-width: 900px) {
    column-count: 2;
  }
  @media (min-width: 1600px) {
    column-count: 2;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  transition: all 1s ease;
`;

const Image = styled.img`
  display: inline-block;
  margin: 0 0 0.6em;
  width: 100%;
  z-index: 9999;
  filter: saturate(0) contrast(0.7) brightness(1.2);
  transition: filter 0.2s ease;
  &:hover {
    filter: saturate(1) contrast(1) brightness(1);
  }
`;

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  font-weight: 600;
  font-size: 15px;
  border: 1px solid ${(props) => (props.white ? "white" : "black")};
  background-color: rgba(0, 0, 0, 0);
  padding: 25px 40px;
  letter-spacing: 0.5px;
  align-self: flex-end;
  cursor: pointer;
  max-width: 155px;

  outline: none;
  color: ${(props) => (props.white ? "white" : "black")};
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.6;
  }
`;

const Visuals = () => {
  let history = useHistory();
  const pics = Array(4).fill(null);
  return (
    <Container>
      <MasonryWrapper id="wizualizacje">
        {pics.map((element, index) => {
          return (
            <Image
              src={`./images/wizualizacje/mframe_ (${index + 1}).jpg`}
              alt={index}
              key={index}
            />
          );
        })}
      </MasonryWrapper>
      <Button onClick={() => history.push("/wizualizacje")}>+ WIĘCEJ</Button>
    </Container>
  );
};

export default Visuals;
