import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import GlobalStyle from "./GlobalStyle";
import StateProvider from "./StateProvider";

import LandingPage from "./components/LandingPage/LandingPage";
// import Modal from "./components/Modal/Modal";
import VisualsModal from "./components/VisualsModal/VisualsModal";
import RealizationsModal from "./components/RealizationsModal/RealizationsModal";
// import { modals } from "./data";

const App = () => {
  return (
    <StateProvider>
      <GlobalStyle />
      <Router basename="/">
        {/* {Object.keys(modals).map((id, index) => {
          return (
            <Route path={`/${id}`} key={index}>
              <Modal modal={modals[id]} />
            </Route>
          );
        })} */}
        <Route path="/wizualizacje">
          <VisualsModal />
        </Route>
        <Route path="/realizacje">
          <RealizationsModal />
        </Route>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Router>
    </StateProvider>
  );
};

export default App;
