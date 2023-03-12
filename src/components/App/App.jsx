//*react
import React from "react";
//*redux
import { useSelector } from "react-redux";
//*components
import AppContainer from "../AppContainer/AppContainer";
import ModalCleanList from "../ModalCleanList/ModalCleanList";
//*scss
import "./app.scss";
// import StyledApp from "./StyledApp";
// import StyledGlobal from "./StyledGlobal";

function App() {
  const modalIsVisible = useSelector((state) => state.modal.modalIsVisible);

  return (
    // <StyledApp>
    <div className="app">
      <AppContainer />
      {modalIsVisible && <ModalCleanList />}
    </div>
    // </StyledApp>
  );
}

export default App;
