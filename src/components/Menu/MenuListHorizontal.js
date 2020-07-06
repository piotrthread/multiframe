import React from "react";

import HorizontalListWrapper from "./HorizontalListWrapper";
import HorizontalListItem from "./HorizontalListItem";

const MenuListHorizontal = () => {
  return (
    <HorizontalListWrapper>
      <HorizontalListItem id="osystemiebutton">O SYSTEMIE</HorizontalListItem>
      <HorizontalListItem id="wizualizacjebutton">WIZUALIZACJE</HorizontalListItem>
      <HorizontalListItem id="mozliwoscibutton">MOŻLIWOŚCI</HorizontalListItem>
      <HorizontalListItem id="realizacjebutton">REALIZACJE</HorizontalListItem>
      <HorizontalListItem id="onasbutton">O NAS</HorizontalListItem>
      <HorizontalListItem id="kontaktbutton">KONTAKT</HorizontalListItem>
    </HorizontalListWrapper>
  );
};

export default MenuListHorizontal;
