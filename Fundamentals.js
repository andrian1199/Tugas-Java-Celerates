let nama = "John Doe";
console.log("Nama:", nama);
alert("Tipe Data String: Nama adalah " + nama);

let umur = 25;
console.log("Umur:", umur);
alert("Tipe Data Number: Umur adalah " + umur);


let isStudent = true;
console.log("Apakah Mahasiswa:", isStudent);
alert("Tipe Data Boolean: Apakah Mahasiswa? " + isStudent);


let hobi = ["Membaca", "Olahraga", "Bermain Musik"];
console.log("Hobi:", hobi);
alert("Tipe Data Array: Hobi adalah " + hobi.join(", "));


let alamat = {
    jalan: "Jl. Merdeka No. 10",
    kota: "Jakarta",
    kodePos: 12345
};
console.log("Alamat:", alamat);
alert("Tipe Data Object: Alamat adalah " + alamat.jalan + ", " + alamat.kota + ", " + alamat.kodePos);
