const CACHE = 'guia-hinario5-v5';

const ASSETS = [
  './',
  './index.html',
  './manifest.webmanifest',
  './assets/icon-192.png',
  './assets/icon-512.png',
  './assets/card-compartilhamento-v1.jpg'
];

/*
  V5 — correção de mídia no celular/PWA

  - O cache do Guia muda de versão para descartar respostas antigas.
  - Requisições externas (Spotify/YouTube/YouTube Music)
    não passam pelo cache do PWA.
  - Áudios e requisições HTTP Range não passam pelo cache genérico.
  - Navegação continua network-first, com fallback offline para index.html.
*/

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('message', event => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(key => key !== CACHE)
          .map(key => caches.delete(key))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  const request = event.request;
  const url = new URL(request.url);

  /*
    Spotify, YouTube, YouTube Music e qualquer outro domínio externo
    devem ser carregados diretamente pelo navegador.
  */
  if (url.origin !== self.location.origin) {
    return;
  }

  /*
    MP3 e outros players podem utilizar requisições Range
    (206 Partial Content).

    Não devemos armazenar essas respostas no cache genérico.
  */
  if (
    request.headers.has('range') ||
    url.pathname.includes('/audio/')
  ) {
    event.respondWith(fetch(request));
    return;
  }

  /*
    Navegação:
    tenta primeiro buscar a versão mais nova na internet.
    Se estiver offline, usa o index.html salvo no cache.
  */
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then(response => {
          if (response && response.ok) {
            const copy = response.clone();

            caches
              .open(CACHE)
              .then(cache => cache.put('./index.html', copy));
          }

          return response;
        })
        .catch(() => caches.match('./index.html'))
    );

    return;
  }

  /*
    Recursos estáticos do próprio Guia:
    primeiro verifica o cache.
    Se não existir, busca na internet e salva.
  */
  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) {
        return cached;
      }

      return fetch(request).then(response => {
        if (response && response.ok) {
          const copy = response.clone();

          caches
            .open(CACHE)
            .then(cache => cache.put(request, copy));
        }

        return response;
      });
    })
  );
});