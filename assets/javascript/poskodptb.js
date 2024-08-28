let url5 = window.location.pathname;
let s3 = url5.split("/");
$.ajax({
  url: "/poskodptb",
  method: "GET",
success: function (response) {
  // Isi formulir dengan data catatan yang diperoleh
  for (let i = 0; i <= 26; i++) {
  const nama = response[i].nama;
  const prov = response[i].provinsi;
  const ala = response[i].Alamat;
  const no = response[i].No_Hp;
  const ti = response[i].Titik_Koordinat;

  document.getElementById("namaa").
  innerHTML += `<div class="boxposko">
  <div class="boxkecil">
  <p class="judul-bagian"> ${prov}</p></div>
  <div class="isi-bagian">
    <div class="bagian-kiri">
      <table>
      <tr>
      <td>Kab/kota</td>
      
      <td> ${nama} </td>
      </tr>
      <tr>
      <td>No Hp</td>
      
      <td> ${no} </td>
      </tr>
      <tr>
      <td>Alamat</td>
      
      <td> ${ala} </td>
      </tr>
      </table>
    </div>
  </div>
  <div class="selengkapnya">
    <a href="https://www.google.com/maps/d/edit?mid=1UWeKaLbaPGzw9Gna5DWggReTKfFwdHc&usp=sharing">
    Lokasi Posko -> </a>
  </div>
</div>
<br>`;
}
 
},
error: function (xhr, status, error) {
  console.log(error);
},
});