let url = window.location.pathname;
let s = url.split("/");
let kabupaten = s[3];
let url1 = window.location.pathname;
let tahapan = s[2];

$.ajax({
  url: "/rinciann/" + tahapan + "/" + kabupaten,
  method: "GET",
  success: function (response) {
    // Isi formulir dengan data catatan yang diperoleh
    console.log(response[0].pemilih_p);
    const l = response[0].pemilih_l;
    const p = response[0].pemilih_p;

    const gen_z = response[0].gen_z;
    const gen_milenial = response[0].gen_milenial;
    const gen_x = response[0].gen_x;
    const pre_boomer = response[0].pre_boomer;
    const baby_boomer = response[0].baby_boomer;

    document.getElementById(
      "gen_z"
    ).innerHTML += `Gen Z <br> ${gen_z} <br> Usia 17-26 Tahun`;

    document.getElementById(
      "gen_milenial"
    ).innerHTML += `Gen Milenial <br> ${gen_milenial} <br> Usia 27-42 Tahun`;

    document.getElementById(
      "gen_x"
    ).innerHTML += `Gen X <br> ${gen_x} <br> Usia 43-58 Tahun`;

    document.getElementById(
      "pre_boomer"
    ).innerHTML += `Pre Boomer <br> ${pre_boomer} <br> Usia 59-77 Tahun`;

    document.getElementById("baby_boomer"
    ).innerHTML += `Baby Boomer <br> ${baby_boomer} <br> Usia Diatas 78 Tahun`;

    const bulat = document.getElementById("myChart");

    new Chart(bulat, {
      type: "doughnut",
      data: {
        labels: ["Laki-laki", "Perempuan"],
        datasets: [
          {
            label: "Sebanyak ",
            data: [l, p],
            borderWidth: 1,
            borderColor: ["#E57611", "#7A1005"],
            backgroundColor: ["#E57611", "#7A1005"],
          },
        ],
      },
      options: {
        scales: {
          x: {
            ticks: {
              color: "white",
            },
          },
          y: {
            ticks: {
              color: "white",
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            labels: {
              color: "#ffff",
              font: {
                size: 14,
                family: "Poppins",
              },
            },
            datalabels: {
              color: "white",
            },
          },
        },
      },
    });
  },
  error: function (xhr, status, error) {
    console.log(error);
  },
});
