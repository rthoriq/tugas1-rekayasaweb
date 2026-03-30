import useStore from '../store';

function Keranjang() {
    const keranjang = useStore((state) => state.keranjang);
    const hapusKeranjang = useStore((state) => state.hapusKeranjang);
    const konfirmasiBelanja = useStore((state) => state.konfirmasiBelanja);

    const totalHarga = keranjang.reduce((total, item) => total + item.harga, 0);

    const tanganiKonfirmasi = () => {
        if (keranjang.length === 0) {
            alert("Keranjang masih kosong!");
            return;
        }
        alert(`Pesanan ${keranjang.length} buku diproses`);
        konfirmasiBelanja();
    };

    return (
    <div className="keranjang">
        <h2>Keranjang</h2>
            <p>{keranjang.length} item</p>

        <ul>
            {keranjang.map((item, index) => (
                <li key={index}>
                    {item.nama} - Rp {item.harga.toLocaleString('id-ID')}
                    <button onClick={() => hapusKeranjang(index)}>Hapus</button>
                </li>
            ))}
        </ul>

        <h3>Total: Rp {totalHarga.toLocaleString('id-ID')}</h3>
        <button onClick={tanganiKonfirmasi}>Konfirmasi</button>
    </div>
    );
}

export default Keranjang;