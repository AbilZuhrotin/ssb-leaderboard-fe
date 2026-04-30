// Register Service Worker biar bisa di-install
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js")
      .then(reg => console.log("PWA Ready!"))
      .catch(err => console.log("PWA Error: ", err));
  });
}

function login() {
  const user = document.getElementById("user").value;
  const role = document.getElementById("role").value;

  if (user === "") {
    alert("Masukkan Username!");
    return;
  }

  if (role === "pelatih") {
    window.location.href = "dashboard.html";
  } else {
    window.location.href = "player.html";
  }
}