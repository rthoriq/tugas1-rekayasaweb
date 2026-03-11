import { create } from 'zustand'

const useStore = create((set) => ({
    // STATE: Data yang disimpan
    keranjang: [],

    // Fungsi tambah menerima 'bukuBaru', lalu menyalin isi keranjang lama dan menambahkannya di akhir
    tambahKeranjang: (bukuBaru) => set((state) => ({
        keranjang: [...state.keranjang, bukuBaru]
    })),

    // Fungsi hapus menggunakan metode filter berdasarkan index array
    hapusKeranjang: (indexYangDihapus) => set((state) => ({
        keranjang: state.keranjang.filter((_, index) => index !== indexYangDihapus)
    })),

    // Fungsi mengosongkan keranjang menjadi array kosong kembali
    konfirmasiBelanja: () => set({ keranjang: [] })
}));

export default useStore;