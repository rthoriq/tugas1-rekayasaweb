function Tombol(props) {
  return (
    <div className="button-group">
      <button 
        className="kurang"
        onClick={props.kurang} 
        disabled={props.jumlahSaatIni === 0}
      >
        Kurangi
      </button>

      <button 
        className="tambah"
        onClick={props.tambah} 
        disabled={props.jumlahSaatIni === props.batas}
      >
        Tambah
      </button>

      <button 
        className="reset"
        onClick={props.reset}
      >
        Kosongkan Keranjang
      </button>
    </div>
  );
}

export default Tombol;