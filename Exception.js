function updateCurrentTime() {
    try {
        const timeElement = document.getElementById("time");
        const currentTime = new Date();
        const hours = String(currentTime.getHours()).padStart(2, '0');
        const minutes = String(currentTime.getMinutes()).padStart(2, '0');
        const seconds = String(currentTime.getSeconds()).padStart(2, '0');
        const formattedTime = `${hours}:${minutes}:${seconds}`;

        timeElement.innerText = `Waktu saat ini: ${formattedTime}`;
    } catch (error) {
        console.error("Terjadi kesalahan saat mendapatkan waktu:", error);
        alert("Maaf, terjadi kesalahan saat menampilkan waktu.");
    }
}


function showCurrentTimeOnce() {
    setTimeout(() => {
        try {
            const currentTime = new Date();
            const hours = String(currentTime.getHours()).padStart(2, '0');
            const minutes = String(currentTime.getMinutes()).padStart(2, '0');
            const seconds = String(currentTime.getSeconds()).padStart(2, '0');
            const formattedTime = `${hours}:${minutes}:${seconds}`;
            console.log(`Waktu satu kali: ${formattedTime}`);
            alert(`Waktu satu kali: ${formattedTime}`);
        } catch (error) {
            console.error("Terjadi kesalahan saat mendapatkan waktu sekali:", error);
        }
    }, 2000); 
}
setInterval(updateCurrentTime, 1000);



//2
function bagi(a, b) {
    try {
      if (b === 0) {
        throw new Error("Pembagian dengan 0 tidak diizinkan.");
      }
      
      const hasil = a / b;
      console.log("Hasil pembagian: " + hasil);
    } catch (error) {
      console.error("Terjadi error: " + error.message);
    }
  }

  bagi(10, 2); 
  bagi(10, 0);  
  
