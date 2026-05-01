// Register Service Worker biar bisa di-install
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .then(reg => console.log("PWA Ready!"))
      .catch(err => console.log("PWA Error: ", err));
  });
}

function login() {
  const userElement = document.getElementById("user");
  const roleElement = document.getElementById("role");

  // Cek dulu elemennya ada atau nggak biar nggak error
  if (!userElement || !roleElement) {
    console.error("Elemen input tidak ditemukan!");
    return;
  }

  const user = userElement.value.trim();
  const role = roleElement.value;

  if (user === "") {
    alert("Masukkan Username!");
    return;
  }

  // Redirect sesuai pilihan akses
  if (role === "pelatih") {
    window.location.href = "dashboard.html";
  } else {
    window.location.href = "player.html";
  }
}