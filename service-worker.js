const cacheName = "ssb-v1";
const assets = [
  "/", 
  "/index.html", 
  "/dashboard.html", 
  "/player.html", 
  "/leaderboard.html", 
  "/input.html", 
  "/style.css", 
  "/app.js", 
  "/assets/logo.jpg"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log("Caching assets...");
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => {
      return res || fetch(e.request);
    })
  );
});