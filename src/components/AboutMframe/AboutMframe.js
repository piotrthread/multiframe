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
          <Strong>
            Doświadczenie – najważniejszy element współczesnego marketingu.
          </Strong>
          <br />
          <br />
          Jako Adsystem budowaliśmy je przez wiele lat, obserwując trendy.
          Dzięki temu stworzyliśmy <Strong>modułowe zabudowy targowe</Strong>,
          nowoczesne rozwiązanie, które pozwala Ci na przygotowanie
          <Strong>stoiska targowego</Strong> w{" "}
          <Strong>łatwy, szybki i bezproblemowy sposób</Strong>. Nasza oferta to
          innowacyjny produkt, który łączy w sobie prostotę i dowolność montażu,
          niską cenę oraz wysoką jakość.{" "}
          <Strong>Zapraszamy do naszego biura</Strong>, którego siedzibą jest
          Wrocław – zaproponujemy Ci rozwiązanie idealne dla Twojej firmy!
          <br />
          <br />
          Dlaczego my? Budowa stoisk targowych to dla nas codzienność, a
          konstrukcje oparte o rozwiązania Adsystem znajdziesz na wszystkich
          targach w kraju i za granicą. Wiemy, że w dużych miastach, jak Wrocław
          lub Warszawa, wybicie się ponad konkurencję wymaga wielu starań. To
          właśnie tu przychodzimy z pomocą oraz efektywnie zaprojektowanym{" "}
          <Strong>stoiskiem targowym</Strong> dopasowanym w pełni do potrzeb
          Twojej firmy. Pomożemy Ci stworzyć <Strong>zabudowę targową</Strong>,
          która wzmocni przekaz reklamowy i skuteczność działań pracowników
          marketingu.
        </Paragraph>
        <Paragraph>
          Nasza <Strong>modułowa zabudowa targowa</Strong> to system
          wielorazowego użytku z możliwością modyfikacji. Możesz dopasować swoje{" "}
          <Strong>stoisko</Strong> do sytuacji i bieżących potrzeb. Jeden
          zaprojektowany dla Ciebie system sprawdzi się doskonale na wielu
          targach, eventach, w ciągach komunikacyjnych, showroom'ach czy nawet w
          formie ścianki brandingowej w siedzibie Twojej firmy.
          <br />
          <br />
          Konstrukcja modułów opiera się na aluminium, które nadaje elementom{" "}
          <Strong>stabilność</Strong> i relatywnie niską wagę. Wydruki są
          wykonane na tekstyliach metodą <Strong>sublimacji</Strong>. Materiał
          blockoutowy nie przepuszcza światła, a dzięki domieszce stretchu nie
          wymaga prasowania. Po założeniu na konstrukcję materiał napina się i
          nie ma widocznych zagnieceń. Dzięki temu w transporcie możesz złożyć{" "}
          <Strong>wydruk</Strong> w kostkę, bez obaw o uszkodzenie. Do
          czyszczenia wystarczy Ci tylko wilgotna ściereczka.
        </Paragraph>
        <Button id="mozliwosci-hero">+ MOŻLIWOŚCI</Button>
      </VerticalContainer>
      <Image />
    </AboutWrapper>
  );
};

export default AboutMframe;
