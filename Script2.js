function updateJam() {
    const waktuSekarang = new Date();

    const jam = String(waktuSekarang.getHours()).padStart(2, '0');
    const menit = String(waktuSekarang.getMinutes()).padStart(2, '0');
    const detik = String(waktuSekarang.getSeconds()).padStart(2, '0');

    const elemenJam = document.getElementById("jam-digital");
    if (elemenJam) {
        elemenJam.textContent = `Waktu Saat Ini: ${jam}:${menit}:${detik} WITA`;
    }
}

setInterval(updateJam, 1000);
updateJam();

const jamSekarang = new Date().getHours();
let sapaan = "";

if (jamSekarang >= 5 && jamSekarang < 12) {
    sapaan = "Selamat Pagi! 🌄";
} else if (jamSekarang >= 12 && jamSekarang < 15) {
    sapaan = "Selamat Siang! ☀️";
} else if (jamSekarang >= 15 && jamSekarang < 18) {
    sapaan = "Selamat Sore! 🌆"
} else {
    sapaan = "Selamat Malam! 🌙" 
}

const elemenSapaan = document.getElementById("sapaan");
if (elemenSapaan) {
    elemenSapaan.textContent = sapaan;
}