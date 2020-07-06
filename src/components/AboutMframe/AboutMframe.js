import React from "react";
import styled from "styled-components";

import AboutWrapper from "./AboutWrapper";
import Paragraph from "./Paragraph";
import Image from "./Image";
import VerticalContainer from "./VerticalContainer";

const ImageMobile = styled.div`
  background-image: url("./images/hero.jpg");
  background-size: cover;
  background-position: center;
  width: 100%;
  display: block;
  margin-bottom: 50px;
  padding: 0 25px;
  height: 400px;
  @media (min-width: 768px) {
    padding: 0 50px;
    height: 600px;
  }
  @media (min-width: 992px) {
    padding: 0 130px;
    height: 500px;
  }
  @media (min-width: 1050px) {
    display: none;
  }
`;

const Strong = styled.span`
  font-weight: 500;
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
  margin-top: 50px;
  cursor: pointer;
  max-width: 200px;
  outline: none;
  color: ${(props) => (props.white ? "white" : "black")};
  transition: all 0.3s ease;
  &:hover {
    opacity: 0.6;
  }
`;

const AboutMframe = () => {
  return (
    <AboutWrapper id="osystemie">
      <ImageMobile />
      <VerticalContainer>
        <Paragraph>
          <Strong>Jeden system, wiele zastosowań, pełnia swobody.</Strong>
          <br />
          <br />
          Mframe to nowoczesna i innowacyjna <Strong>zabudowa targowa</Strong>.
          Jest <Strong>modułowa</Strong> i w pełni <Strong>mobilna</Strong>.
          Nasz system zapewnia Ci to, czego najbardziej potrzebujesz – wygodę i
          wolność użytkowania!
          <br />
          Dlaczego właśnie Mframe? To proste! To wygodny w montażu, całkowicie
          modyfikowalny system wielokrotnego użytku. Konstrukcja jest oparta na
          prostym stelażu i wymiennych modułach. Bez trudu dopasujesz swoje
          stoisko do każdej przestrzeni.
        </Paragraph>
        <Paragraph>
          Elementy konstrukcji w systemie Mframe zostały wykonane z aluminium,
          który nadaje im niezbędnej wytrzymałości, a jednocześnie lekkości.
          Wypełnienie modułów to nadruk na płycie PCV lub materiale
          poliestrowym. Taka <Strong>zabudowa stoiska targowego</Strong> nie
          tylko będzie solidna, ale też bardzo trwała. Bez problemu użyjesz tych
          samych elementów do budowy swojego standu na kolejnych imprezach i
          eventach.
          <br />
          <br />
          Pozostaje jeszcze wygoda i mobilność. Cały system Mframe możesz złożyć
          do pojedynczych elementów. To całkowicie upraszcza transport i
          przechowywanie. A gdy zajdzie potrzeba, bez trudu złożysz swój stand w
          dowolny sposób i bez narzędzi. Ogranicza Cię tylko wyobraźnia!
          <br />
          <br />
          Uniwersalne elementy, wygodny montaż, solidna konstrukcja i szeroki
          zakres modyfikacji. Czy potrzebujesz czegoś jeszcze? Nie, bo to
          wszystkie daje Ci Mframe!
        </Paragraph>
        <Button id="mozliwosci-hero">+ MOŻLIWOŚCI</Button>
      </VerticalContainer>
      <Image />
    </AboutWrapper>
  );
};

export default AboutMframe;
