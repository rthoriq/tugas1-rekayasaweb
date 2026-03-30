import Produk from '../Produk';

function TokoDua() {
    const daftarBarang = [
        { id: 4, nama: 'Deep Work - Cal Newport', harga: 120000 },
        { id: 5, nama: 'The Psychology of Money - Morgan Housel', harga: 105000 },
    ];

    return (
        <div className="container">
            <h2>Toko Dua</h2>

            <div className="produk-grid">
                {daftarBarang.map((barang) => (
                    <Produk key={barang.id} buku={barang} />
                ))}
            </div>
        </div>
    );
}

export default TokoDua;