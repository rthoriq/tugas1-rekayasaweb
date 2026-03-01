import { useState } from 'react';
import Display from './Display';
import Tombol from './Tombol';
import './style.css';

function App() {
  const [jumlah, setJumlah] = useState(0);
  const batasMaksimal = 10;

  const handleTambah = () => {
    if (jumlah < batasMaksimal) {
      setJumlah(jumlah + 1);
    }
  };

  const handleKurang = () => {
    if (jumlah > 0) {
      setJumlah(jumlah - 1);
    }
  };

  const handleReset = () => {
    setJumlah(0);
  };

return (
  <div className="container">
    <h1>Keranjang Peminjaman Buku</h1>
    <p>Pilih jumlah buku yang ingin dipinjam (Maksimal {batasMaksimal})</p>
    <hr />
    <h1>Nama Anggota Kelompok</h1>
    <ul>
      <li>Muhammad Raihan Thoriq (231011094)</li>
      <li>Imam Hudzaifah (231011115)</li>
    </ul>
    <hr />
    
    <Display 
      namaBarang="Buku Pemrograman" 
      jumlah={jumlah} 
      batas={batasMaksimal} 
    />
    
    <Tombol 
      tambah={handleTambah} 
      kurang={handleKurang} 
      reset={handleReset}
      jumlahSaatIni={jumlah}
      batas={batasMaksimal}
    />
  </div>
);
}

export default App;