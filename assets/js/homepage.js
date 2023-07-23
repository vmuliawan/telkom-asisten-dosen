const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".container-page");
const linkSidebar = document.querySelectorAll(".text-link");
const iconSidebar = document.querySelectorAll(".icon-sidebar");
const backgroundLogoSidebar = document.querySelectorAll(".bg-logo-sidebar");
const modalNotif = document.querySelector(".container-notif");
const vacancies = document.querySelectorAll(".col-vacancies");
const btnSeemore = document.querySelector(".btn-seemore");

document.querySelector(".hamburger-menu").onclick = function () {
  sidebar.classList.toggle("sidebar-small");
  mainContent.classList.toggle("container-page-large");

  linkSidebar.forEach((el) => {
    el.classList.toggle("text-dissapear");
  });
  iconSidebar.forEach((al) => {
    al.classList.toggle("icon-sidebar-margin");
  });
  backgroundLogoSidebar.forEach((sl) => {
    sl.classList.toggle("bg-logo-rounded");
  });
  vacancies.forEach((vl) => {
    vl.classList.toggle("col-5");
  });
  btnSeemore.classList.toggle("more-vacancies-resp");
};

document.querySelector(".btn-notif").addEventListener("click", function () {
  if (modalNotif.style.display === "block") {
    modalNotif.style.display = "none";
  } else {
    modalNotif.style.display = "block";
  }
});

window.onclick = function (event) {
  if (event.target == modalNotif) {
    modalNotif.style.display = "none";
  }
};
