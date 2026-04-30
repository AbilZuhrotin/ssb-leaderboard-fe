// Fungsi Login
function login() {
  const userField = document.getElementById("user");
  const roleField = document.getElementById("role");

  // Cek apakah elemen ada (biar gak error di halaman lain)
  if (!userField || !roleField) return;

  const user = userField.value;
  const role = roleField.value;

  if (user === "") {
    alert("Masukkan Username!");
    return;
  }

  // Efek Loading
  const btn = document.querySelector(".btn-ssb") || document.querySelector("button");
  const originalText = btn.innerHTML;
  btn.innerHTML = '<span class="loading loading-spinner"></span> Loading...';
  btn.disabled = true;

  setTimeout(() => {
    if (role === "pelatih") {
      window.location.href = "dashboard.html";
    } else {
      window.location.href = "player.html";
    }
  }, 1000);
}

// Register PWA Service Worker
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .then(reg => console.log("SW Registered!"))
      .catch(err => console.log("SW Error: ", err));
  });
}