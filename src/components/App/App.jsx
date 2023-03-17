//*react
import React, { useState } from "react";
//*redux
import { useSelector } from "react-redux";
//*components
import AppContainer from "../AppContainer/AppContainer";
import ModalCleanList from "../ModalCleanList/ModalCleanList";
import { AnimatePresence } from "framer-motion";
//*scss
import "./app.scss";
// import StyledApp from "./StyledApp";
// import StyledGlobal from "./StyledGlobal";

function App() {
  const modalIsVisible = useSelector((state) => state.modal.modalIsVisible);
  const [appList, setAppList] = useState({});

  return (
    // <StyledApp>
    <div className="app">
      <AppContainer setAppList={setAppList} />
      <AnimatePresence>{modalIsVisible && <ModalCleanList list={appList} />}</AnimatePresence>
    </div>
    // </StyledApp>
  );
}

export default App;
