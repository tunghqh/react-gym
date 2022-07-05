import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ExercisesDetail from "./pages/ExercisesDetail/ExercisesDetail";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises/:id" element={<ExercisesDetail />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
