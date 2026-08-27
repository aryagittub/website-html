function kirimKeEmail() {
    let nama = document.getElementById("email-nama").value.trim();
    let pesan = document.getElementById("email-pesan").value.trim();

    if (nama === "" || pesan === "") {
        alert("Harap isi nama dan pesan terlebih dahulu!");
        return;
    }

    let emailTujuan = "emailkamu@gmail.com"; // Ganti dengan alamat email kamu
    let subjek = encodeURIComponent(`Pesan Website dari ${nama}`);
    let isiPesan = encodeURIComponent(`Halo, saya ${nama}.\n\nPesan:\n${pesan}`);

    window.location.href = `mailto:${emailTujuan}?subject=${subjek}&body=${isiPesan}`;
}