self.addEventListener('install', (event) => {
  console.log('Service Worker installé');
});

self.addEventListener('fetch', (event) => {
  // Nécessaire pour que l'app soit considérée comme PWA
  return;
});
