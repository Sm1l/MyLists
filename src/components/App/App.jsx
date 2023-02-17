import Form from "../Form/Form";
import ListItem from "../ListItem/ListItem";
import ListItemContainer from "../ListItemContainer/ListItemContainer";
import "./app.scss";

function App() {
  return (
    <div className="app">
      <h1 className="app__title">My Lists</h1>
      <Form />
      <ListItemContainer />
      {/* <ListItem name="name" number="number" /> */}
    </div>
  );
}

export default App;
