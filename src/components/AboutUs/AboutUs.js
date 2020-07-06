import React from "react";
import styled from "styled-components";

import AboutWrapper from "./AboutWrapper";
import Paragraph from "./Paragraph";
import Image from "./Image";
import VerticalContainer from "./VerticalContainer";

const ImageMobile = styled.div`
  background-image: url("./images/about.jpg");
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

const Button = styled.a`
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
  color: black;
  transition: all 0.3s ease;
  &:link {
    text-decoration: none;
    color: black;
  }
  &:hover {
    color: black;
    opacity: 0.6;
  }
`;

const AboutUs = () => {
  return (
    <AboutWrapper id="onas">
      <ImageMobile />
      <VerticalContainer>
        <Paragraph>
          Adsystem to jakość i wieloletnie doświadczenie, którym chętnie
          dzielimy się ze stale rosnącą rzeszą klientów. Materiały reklamowe i
          rozwiązania dla marketingu są naszą największą pasją. Wszystkie
          oferowane systemy wystawiennicze cechuje innowacyjność i skrupulatne
          zaprojektowanie spełniające najśmielsze wizje i oczekiwania. W naszej
          szerokiej i nowoczesnej ofercie znajdziecie też sprawdzone standy
          reklamowe, rollupy i stojaki.
        </Paragraph>
        <Paragraph>
          Marka Adsystem to także kompleksowo wykonane stoiska targowe. Ich cena
          jest zawsze doskonale skorelowana z jakością i materiałem użytym w
          produkcji. Jeżeli więc potrzebna ci solidna ścianka reklamowa,
          efektowny roll up, wszechstronny stand czy funkcjonalny stojak na
          ulotki, zapoznaj się z asortymentem na stronie lub skontaktuj się z
          nami. Służymy swoją pomocą przy wyborze najlepszych rozwiązań!
        </Paragraph>
        <Button href="http://www.adsystem.pl" target="_blank">
          + ADSYSTEM
        </Button>
      </VerticalContainer>
      <Image />
    </AboutWrapper>
  );
};

export default AboutUs;
