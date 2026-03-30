import Produk from '../Produk';

function TokoSatu() {
    const daftarBarang = [
        { id: 1, nama: 'Laut Bercerita - Leila S. Chudori', harga: 115000 },
        { id: 2, nama: 'Filosofi Teras - Henry Manampiring', harga: 98000 },
        { id: 3, nama: 'Atomic Habits (Terjemahan) - James Clear', harga: 108000 },
    ];

    return (
        <div className="container">
            <h2>Daftar Buku Pilihan Toko Satu</h2>

            <div className="produk-grid">
            {daftarBarang.map((barang) => (
                <Produk key={barang.id} buku={barang} />
            ))}
            </div>
        </div>
    );
}

export default TokoSatu;