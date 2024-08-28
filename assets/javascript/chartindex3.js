$.ajax({
  url: "/provinsi",
  method: "GET",
  success: function (response) {
    // Isi formulir dengan data catatan yang diperoleh
    let totaltuna_daksa = 0;
    for (i = 0; i < response.length; i++) {
      totaltuna_daksa += parseInt(response[i].tuna_daksa);
    }

    let totaltuna_netra = 0;
    for (i = 0; i < response.length; i++) {
      totaltuna_netra += parseInt(response[i].tuna_netra);
    }

    let totaltuna_rungu = 0;
    for (i = 0; i < response.length; i++) {
      totaltuna_rungu += parseInt(response[i].tuna_rungu);
    }

    let totaltuna_grahita = 0;
    for (i = 0; i < response.length; i++) {
      totaltuna_grahita += parseInt(response[i].tuna_grahita);
    }

    let totallainnya = 0;
    for (i = 0; i < response.length; i++) {
      totallainnya += parseInt(response[i].disabilitas_lainnya);
    }

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
            data: [
              totaltuna_daksa,
              totaltuna_netra,
              totaltuna_rungu,
              totaltuna_grahita,
              totallainnya,
            ],
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
