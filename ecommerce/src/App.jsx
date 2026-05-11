import "./App.css";
import {Button} from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <h1 className="text-danger">Hello React Bootstrap</h1>
        <Button variant="primary">Click Me {process.env.REACT_APP_BASE_URL}</Button>
      </div>
    </div>
  );
}

export default App;
