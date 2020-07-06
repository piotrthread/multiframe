import React from "react";
import styled from "styled-components";
import FooterWrapper from "./FooterWrapper";

const MenuLogo = styled.span`
  font-size: 200px;
  font-weight: 900;
  color: white;
  position: absolute;
  top: -40px;
  right: 25px;
  &::before {
    content: "m.";
    display: block;
    position: absolute;
    color: white;
    width: 200px;
    height: 200px;
    opacity: 0.08;
    transform: scale(5);
    top: 100px;
    left: -400px;
    @media (min-width: 700px) {
      right: 50px;
      top: 200px;
    }
  }
`;
const Paragraph = styled.p`
  font-weight: 700;
  font-size: 20px;
  color: white;
  margin-top: 140px;
`;
const Adress = styled.p`
  color: white;
  font-weight: 300;
  font-size: 15px;
  margin-top: 25px;
`;
const SocialContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 25px;
`;
const Icon = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;
const SocialLink = styled.a`
  opacity: 1;
  transition: opacity 0.2s ease;
  &:hover {
    opacity: 0.6;
  }
`;
const ContactLink = styled.a`
  color: white;
  &:link {
    text-decoration: none;
  }
  &:visited {
    text-decoration: none;
  }
  &:hover {
    text-decoration: none;
    color: white;
    opacity: 0.5;
  }
  &:active {
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper id="kontakt">
      <MenuLogo>m.</MenuLogo>
      <Paragraph>Adsystem Sp. z o.o.</Paragraph>
      <Adress>
        Bielany Wrocławskie,
        <br />
        ul. Atramentowa 11
        <br />
        55-040 Kobierzyce
        <br />
        <br />
        <ContactLink href="tel:+48-672-672-000">
          tel. +48 672 672 000
        </ContactLink>
        <br />
        <br />
        Dział handlowy: <br />
        <ContactLink href="mailto:sales@adsystem.pl">
          sales@adsystem.pl
        </ContactLink>
        <br />
        <br />
        Biuro: <br />
        <ContactLink href="mailto:office@adsystem.pl">
          office@adsystem.pl
        </ContactLink>
      </Adress>
      <SocialContainer>
        <SocialLink
          href="https://www.facebook.com/AdsystemPOS/"
          target="_blank"
        >
          <Icon src="./images/facebook.png" />
        </SocialLink>
        <SocialLink
          href="https://www.youtube.com/playlist?list=PLIFbL5lAZKqd6XYvcgRr1EvaU0nHw4mm6"
          target="_blank"
        >
          <Icon src="./images/youtube.png" />
        </SocialLink>
        <SocialLink
          href="https://www.linkedin.com/company/adsystem/"
          target="_blank"
        >
          <Icon src="./images/linkedin.png" />
        </SocialLink>
        {/* <SocialLink href="#" target="_blank">
          <Icon src="./images/instagram.png" />
        </SocialLink> */}
      </SocialContainer>
    </FooterWrapper>
  );
};

export default Footer;
