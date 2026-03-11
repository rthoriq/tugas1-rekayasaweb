// src/Produk.jsx
import useStore from './store'; // Produk memanggil gudang sendiri

function Produk({ buku }) { 
  // Mengambil aksi 'tambahKeranjang' secara mandiri dari Zustand
  const tambahKeranjang = useStore((state) => state.tambahKeranjang);

  return (
    <div className="kartu-produk">
      <h3>{buku.nama}</h3>
      <p className="harga">Rp {buku.harga.toLocaleString('id-ID')}</p>
      
      {/* Saat tombol diklik, langsung kirim data buku ke store Zustand */}
      <button onClick={() => tambahKeranjang(buku)}>
        Tambah ke Keranjang
      </button>
    </div>
  );
}

export default Produk;