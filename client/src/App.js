import "./App.css";
import Home from "./pages/Homepage";
import Header from "./pages/Header";
import BookPage from "./pages/BookPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

export default function App() {
  const [currentBookId, setCurrentBookId] = useState("/");
  
  useEffect(() => {
    console.log(currentBookId);
  }, [currentBookId]);

  return (
    <div>
      <div className="textColorOne headerSize">
        <Header />
      </div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                bookState={[currentBookId, setCurrentBookId]}
              />
            }
          />
          <Route
            path={`/book/`}
            element={<BookPage currentBook={currentBookId} />}
          />
        </Routes>
      </Router>
    </div>
  );
}