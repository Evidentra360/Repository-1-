<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

    <!-- ── Primary Meta ─────────────────────────────────────── -->
    <title>Evidentra360 — Governance · Compliance · Assurance</title>
    <meta name="description" content="CQC compliance management for registered managers, directors, and operations managers of adult social care services in England." />
    <meta name="author" content="Evidentra360 Limited" />
    <meta name="robots" content="noindex, nofollow" />

    <!-- ── PWA Theme ─────────────────────────────────────────── -->
    <meta name="theme-color" content="#1C3252" />
    <meta name="background-color" content="#101E30" />

    <!-- ── PWA Manifest ──────────────────────────────────────── -->
    <link rel="manifest" href="/manifest.json" />

    <!-- ── Apple / iOS PWA Support ──────────────────────────── -->
    <!-- This is what makes it installable on iPhone and iPad -->
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
    <meta name="apple-mobile-web-app-title" content="Evidentra" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta name="application-name" content="Evidentra360" />

    <!-- Apple touch icons - shown on home screen when installed on iPhone/iPad -->
    <link rel="apple-touch-icon" href="/icons/icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="72x72"   href="/icons/icon-72x72.png" />
    <link rel="apple-touch-icon" sizes="96x96"   href="/icons/icon-96x96.png" />
    <link rel="apple-touch-icon" sizes="128x128" href="/icons/icon-128x128.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/icons/icon-144x144.png" />
    <link rel="apple-touch-icon" sizes="152x152" href="/icons/icon-152x152.png" />
    <link rel="apple-touch-icon" sizes="192x192" href="/icons/icon-192x192.png" />

    <!-- Apple splash screens - shown while app loads after being installed -->
    <link rel="apple-touch-startup-image"
      media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3)"
      href="/splash/splash-390x844.png" />
    <link rel="apple-touch-startup-image"
      media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3)"
      href="/splash/splash-428x926.png" />
    <link rel="apple-touch-startup-image"
      media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2)"
      href="/splash/splash-768x1024.png" />
    <link rel="apple-touch-startup-image"
      media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2)"
      href="/splash/splash-1024x1366.png" />

    <!-- ── Microsoft / Windows PWA support ───────────────────── -->
    <meta name="msapplication-TileColor" content="#1C3252" />
    <meta name="msapplication-TileImage" content="/icons/icon-144x144.png" />
    <meta name="msapplication-config" content="/browserconfig.xml" />

    <!-- ── Favicon ────────────────────────────────────────────── -->
    <link rel="icon" type="image/png" sizes="32x32" href="/icons/icon-96x96.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/icons/icon-72x72.png" />
    <link rel="shortcut icon" href="/icons/icon-192x192.png" />

    <!-- ── Fonts ──────────────────────────────────────────────── -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

    <!-- ── App loading styles ─────────────────────────────────── -->
    <style>
      * { box-sizing: border-box; margin: 0; padding: 0; }
      html, body { height: 100%; width: 100%; overflow: hidden; }
      body {
        font-family: 'Inter', 'Manrope', 'Plus Jakarta Sans', 'Segoe UI', sans-serif;
        background-color: #101E30;
        color: #ffffff;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      #root { height: 100%; width: 100%; }

      /* Loading screen shown before React mounts */
      #loading-screen {
        position: fixed;
        inset: 0;
        background: linear-gradient(145deg, #101E30 0%, #0D2233 60%, #0A1F1D 100%);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        transition: opacity 0.4s ease;
      }
      #loading-screen.hidden {
        opacity: 0;
        pointer-events: none;
      }
      .loading-logo {
        width: 64px;
        height: 64px;
        margin-bottom: 20px;
        animation: pulse 1.5s ease-in-out infinite;
      }
      .loading-text {
        font-size: 18px;
        font-weight: 800;
        color: #ffffff;
        letter-spacing: -0.3px;
        margin-bottom: 4px;
      }
      .loading-sub {
        font-size: 11px;
        font-weight: 600;
        color: rgba(255,255,255,0.35);
        letter-spacing: 1.5px;
        text-transform: uppercase;
      }
      .loading-bar {
        width: 120px;
        height: 3px;
        background: rgba(255,255,255,0.1);
        border-radius: 2px;
        margin-top: 24px;
        overflow: hidden;
      }
      .loading-bar-inner {
        height: 100%;
        width: 0%;
        background: linear-gradient(90deg, #2BBFB2, #1A9E93);
        border-radius: 2px;
        animation: load 1.8s ease-in-out forwards;
      }
      @keyframes pulse {
        0%, 100% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.05); opacity: 0.8; }
      }
      @keyframes load {
        0% { width: 0%; }
        60% { width: 75%; }
        100% { width: 100%; }
      }

      /* iOS safe area padding */
      @supports (padding-top: env(safe-area-inset-top)) {
        body {
          padding-top: env(safe-area-inset-top);
          padding-bottom: env(safe-area-inset-bottom);
          padding-left: env(safe-area-inset-left);
          padding-right: env(safe-area-inset-right);
        }
      }
    </style>
  
<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=Manrope:wght@400;500;600;700;800&display=swap');
@keyframes e360spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
@keyframes e360fadein { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
body { margin:0; background:#041D56; font-family:'Inter','Manrope','Segoe UI',sans-serif; }
#root:empty::before {
  content:'';
  position:fixed;inset:0;
  background:linear-gradient(145deg,#041D56,#031648);
  display:flex;align-items:center;justify-content:center;
  z-index:9999;
}
</style>
</head>

  <body>

    <!-- Loading screen shown while React loads -->
    <div id="loading-screen">
      <!-- Inline SVG shield logo in navy/teal -->
      <svg class="loading-logo" viewBox="0 0 80 93" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="nv" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stop-color="#1E3554"/>
            <stop offset="100%" stop-color="#132030"/>
          </linearGradient>
          <linearGradient id="tl" x1="0%" y1="0%" x2="70%" y2="100%">
            <stop offset="0%" stop-color="#48D8C4"/>
            <stop offset="45%" stop-color="#2BBDB0"/>
            <stop offset="100%" stop-color="#1A9B8E"/>
          </linearGradient>
        </defs>
        <path d="M9,22 L40,6 L71,22 L71,60 Q71,82 40,93 Q9,82 9,60 Z" fill="url(#nv)"/>
        <path d="M48,7 L71,22 L71,60 Q71,82 40,93 L27,85 Z" fill="url(#tl)" opacity="0.9"/>
        <text x="40" y="62" text-anchor="middle" font-family="Arial" font-weight="900" font-size="32" fill="white">e</text>
      </svg>
      <div class="loading-text">Evidentra360</div>
      <div class="loading-sub">CQC Compliance Platform</div>
      <div class="loading-bar">
        <div class="loading-bar-inner"></div>
      </div>
    </div>

    <!-- React mounts here -->
    <div id="root"></div>

    <!-- Hide loading screen once React has mounted -->
    <script>
      window.addEventListener('load', function() {
        setTimeout(function() {
          var screen = document.getElementById('loading-screen');
          if (screen) {
            screen.classList.add('hidden');
            setTimeout(function() { screen.remove(); }, 400);
          }
        }, 800);
      });
    </script>

    <!-- ── Register Service Worker ───────────────────────────── -->
    <script>
      if ('serviceWorker' in navigator) {
        window.addEventListener('load', function() {
          navigator.serviceWorker
            .register('/service-worker.js')
            .then(function(registration) {
              console.log('[PWA] Service worker registered:', registration.scope);

              // Check for updates every 30 minutes
              setInterval(function() {
                registration.update();
              }, 30 * 60 * 1000);

              // Notify user when a new version is available
              registration.addEventListener('updatefound', function() {
                var newWorker = registration.installing;
                newWorker.addEventListener('statechange', function() {
                  if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                    console.log('[PWA] New version available');
                    // In production: show a "New version available — tap to update" banner
                  }
                });
              });
            })
            .catch(function(error) {
              console.log('[PWA] Service worker registration failed:', error);
            });
        });
      }
    </script>

    <!-- ── iOS install prompt helper ─────────────────────────── -->
    <script>
      // Detect if running as installed PWA
      var isInStandaloneMode = function() {
        return (window.matchMedia('(display-mode: standalone)').matches)
          || (window.navigator.standalone)
          || document.referrer.includes('android-app://');
      };

      // Store install state
      if (isInStandaloneMode()) {
        document.body.classList.add('pwa-installed');
        console.log('[PWA] Running as installed app');
      }

      // Capture beforeinstallprompt for Android Chrome install banner
      var deferredPrompt;
      window.addEventListener('beforeinstallprompt', function(e) {
        e.preventDefault();
        deferredPrompt = e;
        // In production: show your own "Install App" button
        // deferredPrompt.prompt() to trigger install
        console.log('[PWA] Install prompt available');
      });

      window.addEventListener('appinstalled', function() {
        console.log('[PWA] App installed successfully');
        deferredPrompt = null;
      });
    </script>

  </body>
</html>
