const loginMahasiswa = document.querySelector(".login-mahasiswa");
const loginDosen = document.querySelector(".login-dosen");

document.querySelector(".login-mahasiswa").onclick = function () {
  loginMahasiswa.classList.add("btn-status-active");
  loginDosen.classList.remove("btn-status-active");
};
loginDosen.onclick = function () {
  loginDosen.classList.add("btn-status-active");
  loginMahasiswa.classList.remove("btn-status-active");
};
