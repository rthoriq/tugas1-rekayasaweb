// src/App.jsx
import Produk from './Produk';
import useStore from './store'; // Memanggil gudang Zustand
import './App.css';

function App() {
  const daftarBarang = [
    { id: 1, nama: 'Laut Bercerita - Leila S. Chudori', harga: 115000 },
    { id: 2, nama: 'Filosofi Teras - Henry Manampiring', harga: 98000 },
    { id: 3, nama: 'Atomic Habits (Terjemahan) - James Clear', harga: 108000 },
  ];

  // Mengambil state dan aksi HANYA yang dibutuhkan oleh komponen App
  const keranjang = useStore((state) => state.keranjang);
  const hapusKeranjang = useStore((state) => state.hapusKeranjang);
  const konfirmasiBelanja = useStore((state) => state.konfirmasiBelanja);

  const totalHarga = keranjang.reduce((total, item) => total + item.harga, 0);

  const tanganiKonfirmasi = () => {
    if (keranjang.length === 0) {
      alert("Keranjang masih kosong! Silakan pilih buku terlebih dahulu.");
      return;
    }
    alert(`Terima kasih! Pesanan ${keranjang.length} buku Anda sedang diproses.`);
    konfirmasiBelanja(); // Menjalankan fungsi reset dari Zustand
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Toko Buku Kekinian 📚</h1>
      </div>

      <h2>Daftar Buku Pilihan</h2>
      <div className="produk-grid">
        {/* PERUBAHAN PENTING: Kita tidak lagi mengirim fungsi 'onTambah' lewat props! */}
        {daftarBarang.map((barang) => (
          <Produk key={barang.id} buku={barang} />
        ))}
      </div>

      <div className="keranjang">
        <h2>Keranjang Belanja 🛒</h2>
        <p>Total Buku: <strong>{keranjang.length} item</strong></p>
        
        <ul>
          {keranjang.map((item, index) => (
            <li key={index}>
              <span>{item.nama} - Rp {item.harga.toLocaleString('id-ID')}</span>
              <button className="btn-hapus" onClick={() => hapusKeranjang(index)}>Hapus</button>
            </li>
          ))}
        </ul>

        <hr />
        <h3>Total Bayar: Rp {totalHarga.toLocaleString('id-ID')}</h3>
        <button className="btn-konfirmasi" onClick={tanganiKonfirmasi}>Konfirmasi Belanja</button>
      </div>
    </div>
  );
}

export default App;