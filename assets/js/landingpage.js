const loginMahasiswa = document.querySelector(".login-mahasiswa");
const loginDosen = document.querySelector(".login-dosen");

document.querySelector(".login-mahasiswa").onclick = function () {
  loginMahasiswa.classList.add("active");
  loginDosen.classList.remove("active");
};
loginDosen.onclick = function () {
  loginDosen.classList.add("active");
  loginMahasiswa.classList.remove("active");
};
