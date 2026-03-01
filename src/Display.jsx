function Display(props) {
  let pesanStatus = "";
  if (props.jumlah === 0) {
    pesanStatus = "Belum ada buku yang dipinjam.";
  } else if (props.jumlah === props.batas) {
    pesanStatus = "Batas maksimal pembelian tercapai!";
  } else {
    pesanStatus = "Stok aman.";
  }

  return (
    <div>
      <h1>Jenis Buku: {props.namaBarang}</h1>
      <h3>Buku yang Dipinjam: {props.jumlah}</h3>
      <p><i>Status: {pesanStatus}</i></p>
    </div>
  );
}
export default Display;