import "./App.css";
import Home from "./pages/Homepage";
import Header from "./pages/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="textColorOne headerSize">
        <Header />
      </div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
