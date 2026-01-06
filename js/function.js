function pesanSekarang() {
    document.getElementById("alertBox").style.display = "flex";
}

function tutupAlert() {
    document.getElementById("alertBox").style.display = "none";

    window.location.href = "menu.html";
}

document.querySelector(".btn").onclick = pesanSekarang;

// AMBIL ELEMEN
var btnPesan = document.getElementById("btnPesan");
var orderForm = document.getElementById("orderForm");
var alertBox = document.getElementById("alertBox");
var kirimBtn = document.getElementById("kirimBtn");
var batalBtn = document.getElementById("batalBtn");
var okBtn = document.getElementById("okBtn");

// Buka form
btnPesan.onclick = function() {
  orderForm.style.display = "flex";
}

// Tutup form
batalBtn.onclick = function() {
  orderForm.style.display = "none";
}

// Kirim form
kirimBtn.onclick = function() {
  var nama = document.getElementById("nama").value.trim();
  var jumlah = document.getElementById("jumlah").value.trim();

  if(nama === "" || jumlah === "") {
    alert("Nama dan jumlah wajib diisi!");
    return;
  }

  // Tutup form
  orderForm.style.display = "none";

  // Reset form
  document.getElementById("nama").value = "";
  document.getElementById("jumlah").value = "";
  document.getElementById("catatan").value = "";

  // Tampilkan alert sukses
  alertBox.style.display = "flex";
}

// Tutup alert + balik ke menu
okBtn.onclick = function() {
  alertBox.style.display = "none";
  window.location.href = "menu.html";
}
