function Display(props) {
  let pesanStatus = "";
  let statusClass = "";

  if (props.jumlah === 0) {
    pesanStatus = "Belum ada buku yang dipinjam.";
    statusClass = "status-kosong";
  } else if (props.jumlah === props.batas) {
    pesanStatus = "Batas maksimal peminjaman tercapai!";
    statusClass = "status-penuh";
  } else {
    pesanStatus = "Stok aman.";
    statusClass = "status-aman";
  }

  return (
    <div className="display-box">
      <h2>Jenis Buku</h2>
      <h1 className="nama-barang">{props.namaBarang}</h1>
      
      <div className="jumlah-box">
        {props.jumlah}
      </div>

      <p className={statusClass}>
        Status: {pesanStatus}
      </p>
    </div>
  );
}

export default Display;