$.ajax({
  url: "/provinsi",
  method: "GET",
  success: function (response) {
    // Isi formulir dengan data catatan yang diperoleh
    let totalgen_z = 0;
    for (i = 0; i < response.length; i++) {
      totalgen_z += parseInt(response[i].gen_z);
    }

    let totalgen_milenial = 0;
    for (i = 0; i < response.length; i++) {
      totalgen_milenial += parseInt(response[i].gen_milenial);
    }

    let totalgen_x = 0;
    for (i = 0; i < response.length; i++) {
      totalgen_x += parseInt(response[i].gen_x);
    }

    let totalpre_boomer = 0;
    for (i = 0; i < response.length; i++) {
      totalpre_boomer += parseInt(response[i].pre_boomer);
    }

    let totalbaby_boomer = 0;
    for (i = 0; i < response.length; i++) {
      totalbaby_boomer += parseInt(response[i].baby_boomer);
    }

    const ctx = document.getElementById("myChart1");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Gen Z", "Gen Milenial", "Gen X", "Baby Boomer", "Pre Boomer"],
        datasets: [
          {
            label: "Usia Pemilih",
            data: [
              totalgen_z,
              totalgen_milenial,
              totalgen_x,
              totalbaby_boomer,
              totalpre_boomer,
            ],
            borderWidth: 1,
            borderColor: "white",
            backgroundColor: "#E57611",
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
