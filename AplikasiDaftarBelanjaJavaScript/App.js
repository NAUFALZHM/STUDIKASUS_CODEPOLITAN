// Array untuk menyimpan daftar belanja
let daftarBelanja = [];

// Fungsi untuk menambahkan barang
const tambahBarang = (nama,jumlah,harga) => {
    if(jumlah <= 0 || harga <= 0 ){
        console.log("Jumlah dan harga barang harus lebih besar dari 0!");
        return;
    };

    const barang = {
        nama,
        jumlah,
        harga,
        total: jumlah * harga,
    };

    daftarBelanja.push(barang);
    // push() = Fungsi ini menambahkan elemen ke akhir array.
    console.log(`barang ${nama} berhasil di tambahkan!`);
};

// Fungsi untuk menampilkan daftar belanja
const tampilkanDaftar = () => {
    if(daftarBelanja.length === 0) {
        console.log("Daftar belanja kosong!")
        return;
    }

    daftarBelanja.forEach((barang,index) => {
        // forEach() = Fungsi ini digunakan untuk melakukan sesuatu pada setiap elemen dalam array, seperti mencetak data.
        console.log(
            `${index + 1 }. Nama: ${barang.nama}, Jumlah: ${barang.jumlah}, Harga: ${barang.harga}, Total: ${barang.total}`
        );
    });

    const totalBelanja = daftarBelanja.reduce((total, barang) => total + barang.total, 0);
    // reduce() = Fungsi ini menjumlahkan atau menggabungkan semua elemen dalam array menjadi satu nilai.
    console.log(`Total Keseluruhan: Rp ${totalBelanja}`);
};

// Fungsi Mengahapus barang
const hapusBarang = (nama) => {
    const panjangAwal = daftarBelanja.length;
    daftarBelanja = daftarBelanja.filter((barang) => barang.nama !== nama);
    //filter() = Fungsi ini menyaring array berdasarkan kondisi tertentu, menghasilkan array baru.

    if (daftarBelanja.length === panjangAwal) {
        console.log(`Barang dengan nama ${nama} tidak ditemukan!`);
    } else {
        console.log(`Barang ${nama} berhasil dihapus!`);
    }
};

// Penggunaan
tambahBarang("Sabun",4, 3000);
tambahBarang("Pasta gigi",1,5000);
tampilkanDaftar();
hapusBarang('Sabun');
tampilkanDaftar();
