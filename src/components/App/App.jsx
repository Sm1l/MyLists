//*react
import React from "react";
//*components
import AppContainer from "../AppContainer/AppContainer";
import Modal from "../Modal/Modal";
//*scss
import "./app.scss";
// import StyledApp from "./StyledApp";
// import StyledGlobal from "./StyledGlobal";

function App() {
  return (
    // <StyledApp>
    <div className="app">
      <AppContainer />
      {/* <Modal /> */}
    </div>
    //!вернуть modal
    // </StyledApp>
  );
}

export default App;
