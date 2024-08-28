$.ajax({
  url: "/provinsi",
  method: "GET",
  success: function (response) {
    // Isi formulir dengan data catatan yang diperoleh

    let totall = 0;
    for (i = 0; i < response.length; i++) {
      totall += parseInt(response[i].pemilih_l);
    }

    let totalp = 0;
    for (i = 0; i < response.length; i++) {
      totalp += parseInt(response[i].pemilih_p);
    }

    console.log(dpt);
    const bulat = document.getElementById("myChart");

    new Chart(bulat, {
      type: "doughnut",
      data: {
        labels: ["Laki-laki", "Perempuan"],
        datasets: [
          {
            label: "Sebanyak ",
            data: [totall, totalp],
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
