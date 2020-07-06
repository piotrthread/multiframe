import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { reals } from "../../data";
import ImageGallery from "react-image-gallery";

import Heading from "../Heading/Heading";

const Button = styled.button`
  -webkit-appearance: none;
  -moz-appearance: none;
  background-color: rgba(0, 0, 0, 0);
  cursor: pointer;
  outline: none;
  border: 0;
  position: absolute;
  top: 0;
  right: 0;
  margin: 25px;
  color: ${(props) => (props.white ? "white" : "black")};
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.6;
  }
`;

const Icon = styled.img`
  height: 20px;
  width: 20px;
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
  padding-top: 135px;
  overflow: scroll;
`;

const Smaller = styled.div`
  transform: scale(0.8);
  position: absolute;
  top: 0;
  left: 15px;
`;
const GalleryWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RealizationsModal = () => {
  let history = useHistory();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <ModalWrapper>
        <Smaller>
          <Heading bold="Realizacje" thin="mframe" />
        </Smaller>
        <GalleryWrapper>
          <ImageGallery
            items={reals}
            showFullscreenButton={false}
            showPlayButton={false}
            showThumbnails={false}
          />
        </GalleryWrapper>
        <Button onClick={() => history.goBack()}>
          <Icon src="./images/close.png" />
        </Button>
      </ModalWrapper>
    </>
  );
};

export default RealizationsModal;
