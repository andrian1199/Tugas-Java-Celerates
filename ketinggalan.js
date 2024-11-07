// Inisialisasi antrian pembeli
let antrian = ["ray", "fiki", "fadhilla", "farah"];

// Fungsi untuk memperbarui tampilan antrian
function updateQueue() {
    console.log("Daftar Antrian:");
    antrian.forEach(pembeli => {
        console.log(pembeli);
    });
}

// Proses sesuai urutan
// 1. Nabila datang
antrian.push("nabila");

// 2. Maza dan Elsi datang
antrian.push("maza", "elsi");

// 3. Antrian terakhir (Elsi) tidak jadi antri
antrian.pop();

// 4. Antrian pertama (Ray) sudah mendapatkan belanjaannya
antrian.shift();

// 5. Antrian kedua (Fiki) sudah mendapatkan belanjaannya
antrian.shift();

// 6. Tomi datang dan nyerobot antrian
antrian.unshift("tomi");

// Update tampilan antrian
updateQueue();
