let TombolSidebar = document.querySelector(".sidebar-tombol");
let sidebar = document.querySelector(".sidebar");
let icon = document.querySelector(".bx-menu");

TombolSidebar.onclick = function () {
  sidebar.classList.toggle("aktif");
  if (sidebar.classList.contains("aktif")) {
    icon.classList.replace("bx-menu", "bx-menu-alt-right");
  } else icon.classList.replace("bx-menu-alt-right", "bx-menu");
};

let dpt = document.querySelector(".dpt");
let jk = document.querySelector(".jk");
let td = document.querySelector(".td");
let tr = document.querySelector(".tr");
let tg = document.querySelector(".tg");
let lain = document.querySelector(".lain");

dpt.addEventListener("mouseenter", function () {
  dpt.style.background =
    "linear-gradient(90.53deg, #ce3e12 4.92%, #e57611 75.31%)";
});
dpt.addEventListener("mouseleave", function () {
  dpt.style.background = "#ce3e12";
});

jk.addEventListener("mouseenter", function () {
  jk.style.background =
    "linear-gradient(90.53deg, #ce3e12 4.92%, #e57611 75.31%)";
});
jk.addEventListener("mouseleave", function () {
  jk.style.background = "#ce3e12";
});

tr.addEventListener("mouseenter", function () {
  tr.style.background =
    "linear-gradient(90.53deg, #ce3e12 4.92%, #e57611 75.31%)";
});
tr.addEventListener("mouseleave", function () {
  tr.style.background = "#ce3e12";
});

td.addEventListener("mouseenter", function () {
  td.style.background =
    "linear-gradient(90.53deg, #ce3e12 4.92%, #e57611 75.31%)";
});
td.addEventListener("mouseleave", function () {
  td.style.background = "#ce3e12";
});

tg.addEventListener("mouseenter", function () {
  tg.style.background =
    "linear-gradient(90.53deg, #ce3e12 4.92%, #e57611 75.31%)";
});
tg.addEventListener("mouseleave", function () {
  tg.style.background = "#ce3e12";
});

lain.addEventListener("mouseenter", function () {
  lain.style.background =
    "linear-gradient(90.53deg, #ce3e12 4.92%, #e57611 75.31%)";
});
lain.addEventListener("mouseleave", function () {
  lain.style.background = "#ce3e12";
});

function tampilkanElemen() {
  var elemen = document.querySelector(".modal__container");
  elemen.className += " show-modal";
}

window.addEventListener("dblclick", function () {
  const modal = document.querySelector(".modal__container");
  modal.classList.remove("show-modal");
});
