import "./App.css";
import Home from "./pages/homepage";
import Header from "./pages/header";

function App() {
  return (
    <div>
      <div className="textColorOne headerSize">
        <Header />
      </div>
      <Home />
    </div>
  );
}

export default App;
