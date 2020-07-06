import React, { useEffect } from "react";
import styled from "styled-components";

import Heading from "../Heading/Heading";
import Menu from "../Menu/Menu";
import AboutUs from "../AboutUs/AboutUs";
import Container from "../Container/Container";
import Video from "../Video/Video";
import Visuals from "../Visuals/Visuals";
import Possibilities from "../Possibilities/Possibilities";
import Footer from "../Footer/Footer";
import Realizations from "../Realizations/Realizations";
import Animage from "../Animage/Animage";
import AboutMframe from "../AboutMframe/AboutMframe";
import $ from "jquery";

const Spacer = styled.div`
  height: 75px;
`;
const VideoWrapper = styled.div`
  height: 45vw;
  overflow: hidden;
  position: relative;
  @media (min-width: 1075px) {
    height: 42vw;
  }
`;

const LandingPage = () => {
  useEffect(() => {
    //----------------------
    //Horizontal
    //----------------------
    $("#osystemiebutton").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: $("#osystemie").offset().top - 200,
        },
        "slow"
      );
    });
    $("#wizualizacjebutton").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: $("#wizualizacje").offset().top - 200,
        },
        "slow"
      );
    });
    $("#mozliwoscibutton").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: $("#mozliwosci").offset().top - 200,
        },
        "slow"
      );
    });
    $("#realizacjebutton").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: $("#realizacje").offset().top - 200,
        },
        "slow"
      );
    });
    $("#onasbutton").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: $("#onas").offset().top - 200,
        },
        "slow"
      );
    });
    $("#kontaktbutton").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: $("#kontakt").offset().top,
        },
        "slow"
      );
    });
    $("#mozliwosci-hero").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: $("#mozliwosci").offset().top - 200,
        },
        "slow"
      );
    });
    // ----------------------
    //Vertical
    //-----------------------
    $("#osystemie-vert").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: $("#osystemie").offset().top - 200,
        },
        "slow"
      );
    });
    $("#wizualizacje-vert").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: $("#wizualizacje").offset().top - 200,
        },
        "slow"
      );
    });
    $("#mozliwosci-vert").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: $("#mozliwosci").offset().top - 200,
        },
        "slow"
      );
    });
    $("#realizacje-vert").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: $("#realizacje").offset().top - 200,
        },
        "slow"
      );
    });
    $("#onas-vert").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: $("#onas").offset().top - 200,
        },
        "slow"
      );
    });
    $("#kontakt-vert").on("click", function () {
      $("html,body").animate(
        {
          scrollTop: $("#kontakt").offset().top,
        },
        "slow"
      );
    });
  }, []);
  return (
    <>
      <Menu />
      <Spacer />
      <VideoWrapper>
        <Video
          loop
          muted={true}
          autoPlay={true}
          playsInline={true}
          width="100vw"
          height="auto"
        >
          <source src="http://adsystem.pl/video/MFRAME.mp4" type="video/mp4" />
        </Video>
      </VideoWrapper>
      <Container>
        <Heading bold="O" thin="systemie" />
      </Container>
      <AboutMframe />
      <Container>
        <Heading bold="Wizualizacje" thin="mframe" />
        <Visuals />
        <Heading bold="Możliwości" thin="mframe" />
        <Animage />
        <Possibilities />
        <Heading bold="Realizacje" thin="mframe" />
        <Realizations />
        <Heading bold="O" thin="nas" />
      </Container>
      <AboutUs />
      <Footer />
    </>
  );
};

export default LandingPage;
