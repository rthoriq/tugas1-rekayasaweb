function Tombol(props) {
  return (
    <div>
      {/* Tombol akan 'disabled' (mati) jika jumlah saat ini adalah 0 */}
      <button 
        onClick={props.kurang} 
        disabled={props.jumlahSaatIni === 0}
      >
        Kurangi
      </button>

      {/* Tombol akan 'disabled' jika jumlah mencapai batas maksimal */}
      <button 
        onClick={props.tambah} 
        disabled={props.jumlahSaatIni === props.batas}
      >
        Tambah
      </button>

      <button onClick={props.reset}>
        Kosongkan Keranjang
      </button>
    </div>
  );
}

export default Tombol;