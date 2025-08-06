// src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Embed from './pages/Embed';
import Extract from './pages/Extract';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Navigation */}
      <Navbar />

      {/* Page Content */}
      <div className="flex-grow">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/embed" element={<Embed />} />
          <Route path="/extract" element={<Extract />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

