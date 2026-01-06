function pesanSekarang() {
    document.getElementById("alertBox").style.display = "flex";
}

function tutupAlert() {
    document.getElementById("alertBox").style.display = "none";

    window.location.href = "menu.html";
}

document.querySelector(".btn").onclick = pesanSekarang;

//  <script>
    
//     function pesanSekarang() {
//         alert("Terima kasih telah memesan Matcha Latte!");
//     }
//     document.querySelector(".btn").onclick = pesanSekarang;

//     </script> 
