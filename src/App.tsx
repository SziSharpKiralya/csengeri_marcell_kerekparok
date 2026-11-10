import { KerekparLista } from "./components/KerekparLista";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Kiadó kerékpárok</h1>
        <KerekparLista></KerekparLista>
      </div>
    </>
  );
}

export default App;