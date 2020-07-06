import React, { useContext } from "react";
import Context from "../../context";

import VerticalListWrapper from "./VerticalListWrapper";
import VerticalListItem from "./VerticalListItem";

const MenuListVertical = () => {
  const { state, dispatch } = useContext(Context);
  return (
    <VerticalListWrapper
      style={{
        right: state.menuActive ? 0 : "100vw",
      }}
    >
      <VerticalListItem id="onas-vert" onClick={() => dispatch("TOGGLE_MENU")}>
        o nas
      </VerticalListItem>
      <VerticalListItem
        id="osystemie-vert"
        onClick={() => dispatch("TOGGLE_MENU")}
      >
        o systemie
      </VerticalListItem>
      <VerticalListItem
        id="wizualizacje-vert"
        onClick={() => dispatch("TOGGLE_MENU")}
      >
        wizualizacje
      </VerticalListItem>
      <VerticalListItem
        id="realizacje-vert"
        onClick={() => dispatch("TOGGLE_MENU")}
      >
        realizacje
      </VerticalListItem>
      <VerticalListItem
        id="mozliwosci-vert"
        onClick={() => dispatch("TOGGLE_MENU")}
      >
        możliwości
      </VerticalListItem>
      <VerticalListItem
        id="kontakt-vert"
        onClick={() => dispatch("TOGGLE_MENU")}
      >
        kontakt
      </VerticalListItem>
    </VerticalListWrapper>
  );
};

export default MenuListVertical;
