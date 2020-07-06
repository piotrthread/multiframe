import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

import HeadingModal from "../HeadingModal/HeadingModal";
import HeadingMedium from "../HeadingMedium/HeadingMedium";

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  outline: none;
  border: 0;
  position: fixed;
  top: 0;
  right: 0;
  margin: 25px;
  color: ${(props) => (props.white ? "white" : "black")};
  transition: opacity 0.3s ease;
  &:hover {
    opacity: 0.6;
  }
  @media (min-width: 570px) {
    margin: 50px;
  }
`;

const Icon = styled.img`
  height: 25px;
  width: 25px;
`;

const ModalWrapper = styled.div`
  background-color: white;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 50px;
  padding-top: 0;
  overflow: scroll;
`;
const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70vh;
  justify-content: flex-start;
  width: 100%;
  @media (min-width: 1020px) {
    flex-direction: row;
  }
`;
const Img = styled.img`
  width: 100%;
  @media (min-width: 825px) {
    width: 500px;
    height: 500px;
  }
`;
const Paragraph = styled.p`
  padding-top: 50px;
  text-indent: 50px;
  text-align: justify;
  padding-bottom: 100px;
  @media (min-width: 825px) {
    padding-top: 50px;
    padding-bottom: 25px;
  }
  @media (min-width: 1020px) {
    padding: 50px;
    padding-right: 0;
    padding-top: 0;
  }
`;

const Modal = (props) => {
  let history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ModalWrapper>
        <HeadingModal
          bold={props.modal.name}
          thin={props.modal.subname ? props.modal.subname : null}
        />
        <HeadingMedium
          bold={props.modal.name}
          thin={props.modal.subname ? props.modal.subname : null}
        />
        <SectionWrapper>
          {props.modal.images.map((img, index) => (
            <Img src={img} alt={index} />
          ))}
          <Paragraph>{props.modal.info}</Paragraph>
        </SectionWrapper>
        <Button>
          <Icon onClick={() => history.push("/")} src="./images/close.png" />
        </Button>
      </ModalWrapper>
    </>
  );
};

export default Modal;
