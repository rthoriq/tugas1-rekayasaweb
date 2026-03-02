// src/Produk.jsx
function Produk(props) {
  return (
    <div className="kartu-produk">
      <h3>{props.nama}</h3>
      <p className="harga">Rp {props.harga.toLocaleString('id-ID')}</p>
      
      {/* Saat tombol diklik, jalankan fungsi dari App.jsx dan kirim data barang ini */}
      <button onClick={() => props.onTambah(props.id, props.nama, props.harga)}>
        Tambah ke Keranjang
      </button>
    </div>
  );
}

export default Produk;