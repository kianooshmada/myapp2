import "./App.css";
import { Selector } from "./components/Selector";
import { Test } from "./components/test";
function App() {
  return (
    <div className="App">
      <header>
        <Selector />
        <Test />
      </header>
    </div>
  );
}

export default App;
