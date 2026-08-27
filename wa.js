function kirimKeWA() {
    let nama = document.getElementById("wa-nama").value.trim();
    let pesan = document.getElementById("wa-pesan").value.trim();

    if (nama === "" || pesan === "") {
        alert("Harap isi nama dan pesan terlebih dahulu!");
        return;
    }

    let nomorWA = "6283813419260";

    let teksWA = `Halo, saya ${nama}.%0A%0APesan:%0A${pesan}`;

    let url = `https://wa.me/${nomorWA}?text=${teksWA}`;

    window.open(url, '_blank');
}