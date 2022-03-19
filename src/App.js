import "./App.css";
import Burger from "./components/Burger";
import Menu from "./components/Menu";

function App() {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-12 col-md-6">
          <Burger />
        </div>
        <div className="col-12 col-md-6">
          <Menu />
        </div>
      </div>
    </div>
  );
}

export default App;
