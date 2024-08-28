let url5 = window.location.pathname;
let s3 = url5.split("/");
let kabupaten2 = s3[3];
let tahapan2 = s3[2];
$.ajax({
  url: "/rinciann/" + tahapan2 + "/" + kabupaten2,
  method: "GET",
  success: function (response) {
    // Isi formulir dengan data catatan yang diperoleh
    const grahita = response[0].tuna_grahita;
    const netra = response[0].tuna_netra;
    const rungu = response[0].tuna_rungu;
    const daksa = response[0].tuna_daksa;
    const lainnya = response[0].disabilitas_lainnya;

    document.getElementById("daksa").innerHTML += daksa;
    document.getElementById("netra").innerHTML += netra;
    document.getElementById("rungu").innerHTML += rungu;
    document.getElementById("Grahita").innerHTML += grahita;
    document.getElementById("lain").innerHTML += lainnya;

    const bar1 = document.getElementById("myChart2");

    new Chart(bar1, {
      type: "bar",
      data: {
        labels: [
          "Tuna Daksa",
          "Tuna Netra",
          "Tuna Rungu",
          "Tuna Grahita",
          "Disabilitas Lainnya",
        ],
        datasets: [
          {
            label: "Pemilih Disabilitas",
            data: [daksa, netra, rungu, grahita, lainnya],
            borderColor: "white",
            backgroundColor: "#E57611",
            borderWidth: 1,
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
