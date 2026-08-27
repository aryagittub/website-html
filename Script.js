console.log("File JavaScript berhasil terhubung!");
const tombolMode = document.getElementById("btn-mode");
tombolMode.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});