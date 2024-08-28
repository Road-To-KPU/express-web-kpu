$.ajax({
  url: "/dpk",
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

    const dpt = totall + totalp;

    document.getElementById("dpk").innerHTML += dpt;
  },
  error: function (xhr, status, error) {
    console.log(error);
  },
});
