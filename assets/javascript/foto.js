let url4 = window.location.pathname;
let s4 = url4.split("/");
let kabupaten4 = s4[3];

document.getElementById("map").src += `${kabupaten4}.png`;
