let url = window.location.pathname;
let s = url.split("/");
let tahapan = s[1];
let tahapann = s[2];
let tahapanstring = String(tahapann);

let url2 = window.location.hash;
let s2 = url2.split("#");
let kabupaten = s2[1];

const links = document.querySelectorAll("#link");

if (tahapanstring == "dpt") {
  links.forEach((linkk) => {
    linkk.addEventListener("click", function (event) {
      // Dapatkan nilai href dari elemen <a> yang diklik
      const hrefValue = this.getAttribute("href");

      const value1 = hrefValue.split("#");

      let keterangan1 = document.getElementById("keterangan1");
      let keterangan = document.getElementById("keterangan");
      let isi = document.querySelector(".isi1");

      keterangan1.innerHTML = ""; // Menghapus teks sebelumnya
      keterangan.innerHTML = ""; // Menghapus teks sebelumnya
      isi.innerHTML = ""; // Menghapus teks sebelumnya

      $.ajax({
        url: "/rinciann/" + tahapan + "/" + value1[1],
        method: "GET",
        success: function (response) {
          const prov = response[0].provinsi;
          const kab = response[0].kabupaten;
          const total =
            parseInt(response[0].pemilih_l) + parseInt(response[0].pemilih_p);
          const L = response [0].pemilih_l;
          const P = response [0].pemilih_p;
          const disabilitas =
            parseInt(response[0].tuna_daksa) +
            parseInt(response[0].tuna_rungu) +
            parseInt(response[0].tuna_netra) +
            parseInt(response[0].tuna_grahita) +
            parseInt(response[0].disabilitas_lainnya);

          keterangan1.innerHTML += `Provinsi <br> Kabupaten <br> Data Pemilih Tetap <br> jenis Kelamin L <br> Jenis Kelamin P`;
          keterangan.innerHTML += `${prov} <br> ${kab} <br> ${total} <br> ${L}<br>${P}`;

          isi.innerHTML += `${kab}`;
        },
        error: function (xhr, status, error) {
          console.log(error);
        },
      });
      // Anda juga dapat mencegah tindakan default (navigasi) dengan menggunakan:
      event.preventDefault();
    });
  });
}
if (tahapanstring == "disabilitas") {
  links.forEach((linkk) => {
    linkk.addEventListener("click", function (event) {
      // Dapatkan nilai href dari elemen <a> yang diklik
      const hrefValue = this.getAttribute("href");

      const value1 = hrefValue.split("#");

      let keterangan1 = document.getElementById("keterangan1");
      let keterangan = document.getElementById("keterangan");
      let isi = document.querySelector(".isi1");

      keterangan1.innerHTML = ""; // Menghapus teks sebelumnya
      keterangan.innerHTML = ""; // Menghapus teks sebelumnya
      isi.innerHTML = ""; // Menghapus teks sebelumnya

      $.ajax({
        url: "/rinciann/" + tahapan + "/" + value1[1],
        method: "GET",
        success: function (response) {
          const prov = response[0].provinsi;
          const kab = response[0].kabupaten;
          const total =
            parseInt(response[0].pemilih_l) + parseInt(response[0].pemilih_p);
            const td = response [0].tuna_daksa;
            const tr = response [0].tuna_rungu;
            const tn = response [0].tuna_netra;
            const tg = response [0].tuna_grahita;
            const dl = response [0].disabilitas_lainnya;
          const disabilitas =
            parseInt(response[0].tuna_daksa) +
            parseInt(response[0].tuna_rungu) +
            parseInt(response[0].tuna_netra) +
            parseInt(response[0].tuna_grahita) +
            parseInt(response[0].disabilitas_lainnya);

          keterangan1.innerHTML += `Provinsi <br> Kabupaten <br> Pemilih Disabilitas <br> Tuna Daksa <br> Tuna Netra <br> Tuna Rungu <br> Tuna Grahita <br> Disabilitas Lainnya`;
          keterangan.innerHTML += `${prov} <br> ${kab} <br> ${disabilitas} <br> ${td}<br> ${tn}<br> ${tr}<br> ${tg}<br> ${dl}`;

          isi.innerHTML += `${kab}`;
        },
        error: function (xhr, status, error) {
          console.log(error);
        },
      });
      // Anda juga dapat mencegah tindakan default (navigasi) dengan menggunakan:
      event.preventDefault();
    });
  });
}
if (tahapanstring == "klasifikasi_usia") {
  links.forEach((linkk) => {
    linkk.addEventListener("click", function (event) {
      // Dapatkan nilai href dari elemen <a> yang diklik
      const hrefValue = this.getAttribute("href");

      const value1 = hrefValue.split("#");

      let keterangan1 = document.getElementById("keterangan1");
      let keterangan = document.getElementById("keterangan");
      let isi = document.querySelector(".isi1");

      keterangan1.innerHTML = ""; // Menghapus teks sebelumnya
      keterangan.innerHTML = ""; // Menghapus teks sebelumnya
      isi.innerHTML = ""; // Menghapus teks sebelumnya

      $.ajax({
        url: "/rinciann/" + tahapan + "/" + value1[1],
        method: "GET",
        success: function (response) {
          const prov = response[0].provinsi;
          const kab = response[0].kabupaten;
          const total =
            parseInt(response[0].pemilih_l) + parseInt(response[0].pemilih_p);
          const gz = response [0].gen_z;
          const gm = response [0].gen_milenial;
          const gx = response [0].gen_x;
          const bb = response [0].baby_boomer;
          const pb = response [0].pre_boomer;

          const disabilitas =
            parseInt(response[0].tuna_daksa) +
            parseInt(response[0].tuna_rungu) +
            parseInt(response[0].tuna_netra) +
            parseInt(response[0].tuna_grahita) +
            parseInt(response[0].disabilitas_lainnya);

          keterangan1.innerHTML += `Provinsi <br> Kabupaten <br> Gen Z <br> Gen Milenial <br> Gen X <br> Baby Boomer <br> Pre Boomer`;
          keterangan.innerHTML += `${prov} <br> ${kab} <br> ${gz} <br> ${gm} <br> ${gx}<br> ${bb}<br> ${pb}`;

          isi.innerHTML += `${kab}`;
        },
        error: function (xhr, status, error) {
          console.log(error);
        },
      });
      // Anda juga dapat mencegah tindakan default (navigasi) dengan menggunakan:
      event.preventDefault();
    });
  });
} else {
  console.log("salah");
}
