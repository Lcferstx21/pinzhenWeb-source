import "./App.css";
import Navbar from "./components/Navbar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import InfoPage from "./pages/InfoPage";
import GalleryPage from "./pages/GalleryPage";
import IndexPage from "./pages/IndexPage";
import PrjDetail from "./pages/PrjDetail";
import CustomCursor from "./components/CustomCursor";

function App() {
  return (
    <Router>
      <CustomCursor />
      <div className="min-h-screen">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<InfoPage />} />
            <Route path="/info" element={<InfoPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/index" element={<IndexPage />} />
            <Route path="/project/:id" element={<PrjDetail />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
