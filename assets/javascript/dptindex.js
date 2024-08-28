$.ajax({
  url: "/dpt",
  method: "GET",
  success: function (response) {
    let totall = 0;
    for (i = 0; i < response.length; i++) {
      totall += parseInt(response[i].pemilih_l);
    }

    let totalp = 0;
    for (i = 0; i < response.length; i++) {
      totalp += parseInt(response[i].pemilih_p);
    }

    const dpt = totall + totalp;

    document.getElementById("dpt").innerHTML += dpt;
  },
  error: function (xhr, status, error) {
    console.log(error);
  },
});
