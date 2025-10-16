const tombol = document.getElementById("tombol");
const judul = document.getElementById("judul");

tombol.addEventListener("click", () => {
  judul.style.color = judul.style.color === "blue" ? "#F90001" : "blue";
  alert("Kamu klik tombolnya, mantap!");
});