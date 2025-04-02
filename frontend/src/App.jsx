import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import AddMovie from "./pages/AddMovie";
import { MovieProvider } from "./context/MovieProvider.jsx";

const App = () => {
  return (
    <MovieProvider>
      <Router>
        <div className="min-h-screen bg-gray-100">
          <Navbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add-movie" element={<AddMovie />} />
            </Routes>
          </div>
        </div>
      </Router>
    </MovieProvider >
  );
};

export default App;
