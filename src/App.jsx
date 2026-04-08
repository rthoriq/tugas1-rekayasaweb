import { Routes, Route, Link } from 'react-router-dom';

import TokoSatu from './pages/tokoSatu';
import TokoDua from './pages/tokoDua';
import Profile from './pages/profile';
import Keranjang from './components/Keranjang';
import './App.css';

function App() {
  return (
    <div>
      <h2>Toko Buku Kekinian</h2>
      <h3>
        <nav className="navbar1">
        <Link to="/toko1" className="navbar">Toko 1</Link> |{" "}
        <Link to="/toko2" className="navbar">Toko 2</Link> |{" "}
        <Link to="/profile" className="navbar">Profile</Link>
        </nav>
      </h3>
      <Routes>
        <Route path="/toko1" element={<TokoSatu />} />
        <Route path="/toko2" element={<TokoDua />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      <Keranjang />
    </div>
  );
}

export default App;