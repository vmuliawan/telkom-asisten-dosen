const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".container-page");
const linkSidebar = document.querySelectorAll(".text-link");
const iconSidebar = document.querySelectorAll(".icon-sidebar");
const backgroundLogoSidebar = document.querySelectorAll(".bg-logo-sidebar");
const modalNotif = document.querySelector(".container-notif");
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
};

document.querySelector(".btn-notif").onclick = function () {
  if (modalNotif.style.display === "block") {
    modalNotif.style.display = "none";
  } else {
    modalNotif.style.display = "block";
  }
};
