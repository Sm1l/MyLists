import Form from "../Form/Form";
import ListItemContainer from "../ListItemContainer/ListItemContainer";
// import StyledApp from "./StyledApp";
// import StyledGlobal from "./StyledGlobal";
import "./app.scss";

function App() {
  return (
    // <StyledApp>
    <div className="app">
      <h1 className="app__title">My Lists</h1>
      {/* <StyledGlobal /> */}
      <Form />
      <ListItemContainer />
      {/* <ListItem name="name" number="number" /> */}
    </div>
    // </StyledApp>
  );
}

export default App;
