let url2 = window.location.pathname;
let s2 = url2.split("/");
let kabupaten1 = s2[3];
let tahapan1 = s2[2];
$.ajax({
  url: "/rinciann/" + tahapan1 + "/" + kabupaten1,
  method: "GET",
  success: function (response) {
    // Isi formulir dengan data catatan yang diperoleh
    const z = response[0].gen_z;
    const milenial = response[0].gen_milenial;
    const x = response[0].gen_x;
    const baby_boomer = response[0].baby_boomer;
    const pre_boomer = response[0].pre_boomer;

    const ctx = document.getElementById("myChart1");

    new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Gen Z", "Gen Milenial", "Gen X", "Baby Boomer", "Pre Boomer"],
        datasets: [
          {
            label: "Usia Pemilih",
            data: [z, milenial, x, baby_boomer, pre_boomer],
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
