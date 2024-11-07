// Inisialisasi antrian dengan pembeli awal
let antrian = ['ray', 'fiki', 'fadhilla', 'farah'];

// Pembeli baru datang
antrian.push('nabila'); // Nabila datang
antrian.push('maza', 'elsi'); // Maza dan Elsi datang

// Antrian terakhir (Elsi) tidak jadi antri dan pulang ke rumah
antrian.pop(); // Menghapus Elsi dari antrian

// Antrian pertama (ray) sudah mendapatkan belanjaannya
antrian.shift(); // Menghapus Ray dari antrian

// Antrian kedua (fiki) juga sudah mendapatkan belanjaannya
antrian.shift(); // Menghapus Fiki dari antrian

// Pembeli baru yang nyerobot antrian yaitu tomi
antrian.unshift('tomi'); // Menambahkan Tomi ke depan antrian

// Menampilkan hasil akhir antrian di console
console.log(antrian);