// src/App.jsx
import { useState } from 'react';
import Produk from './Produk';
import './App.css';

function App() {
  // 1. Data diubah menjadi daftar buku yang sedang hits
  const daftarBarang = [
    { id: 1, nama: 'Laut Bercerita - Leila S. Chudori', harga: 115000 },
    { id: 2, nama: 'Filosofi Teras - Henry Manampiring', harga: 98000 },
    { id: 3, nama: 'Atomic Habits - James Clear', harga: 108000 },
  ];

  const [keranjang, setKeranjang] = useState([]);

  const tanganiTambahKeranjang = (idBarang, namaBarang, hargaBarang) => {
    const barangBaru = { id: idBarang, nama: namaBarang, harga: hargaBarang };
    setKeranjang([...keranjang, barangBaru]);
  };

  // 2. Fungsi BARU: Menghapus item dari keranjang berdasarkan urutan (index)
  const tanganiHapusKeranjang = (indexYangDihapus) => {
    // Fungsi .filter() akan membuat array baru dan membuang item pada index yang dipilih
    const keranjangBaru = keranjang.filter((item, index) => index !== indexYangDihapus);
    setKeranjang(keranjangBaru);
  };

  // 3. Fungsi BARU: Mengonfirmasi pesanan
  const tanganiKonfirmasi = () => {
    // Cek jika keranjang kosong
    if (keranjang.length === 0) {
      alert("Keranjang masih kosong! Silakan pilih buku terlebih dahulu.");
      return; // Hentikan fungsi di sini
    }

    // Tampilkan pesan sukses
    alert(`Terima kasih! Pesanan ${keranjang.length} buku Anda dengan total Rp ${totalHarga.toLocaleString('id-ID')} sedang diproses.`);
    
    // Kosongkan keranjang setelah berhasil dikonfirmasi
    setKeranjang([]);
  };

  const totalHarga = keranjang.reduce((total, item) => total + item.harga, 0);

  return (
    <div className="container">
      <div className="header">
        <h1>Morod Store📚</h1>
      </div>

      <h2>Daftar Buku Pilihan</h2>
      <div className="produk-grid">
        {daftarBarang.map((barang) => (
          <Produk 
            key={barang.id} 
            id={barang.id}
            nama={barang.nama} 
            harga={barang.harga} 
            onTambah={tanganiTambahKeranjang} 
          />
        ))}
      </div>

      <div className="keranjang">
        <h2>Keranjang Belanja 🛒</h2>
        <p>Total Buku: <strong>{keranjang.length} item</strong></p>
        
        <ul>
          {keranjang.map((item, index) => (
            <li key={index}>
              {/* Teks nama buku dan harganya */}
              <span>{item.nama} - Rp {item.harga.toLocaleString('id-ID')}</span>
              
              {/* Tombol hapus yang memanggil fungsi tanganiHapusKeranjang */}
              <button 
                className="btn-hapus" 
                onClick={() => tanganiHapusKeranjang(index)}
              >
                Hapus
              </button>
            </li>
          ))}
        </ul>

        <hr />
        <h3>Total Bayar: Rp {totalHarga.toLocaleString('id-ID')}</h3>

        {/* Tombol konfirmasi belanja di bagian paling bawah keranjang */}
        <button className="btn-konfirmasi" onClick={tanganiKonfirmasi}>
          Konfirmasi Belanja
        </button>
      </div>
    </div>
  );
}

export default App;