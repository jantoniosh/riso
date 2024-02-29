import "./App.css";
import { Descripcion, RisoIlustracion } from "./components";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="a">
          <Descripcion />
        </div>
        <div className="b">
          <RisoIlustracion />
        </div>
      </div>
    </>
  );
}

export default App;
