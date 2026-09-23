# Bahura, spearo log (Phase 1)

Offline reef map and catch log for spearos. Free tier only; Premium features are shown but locked.

## Put it online (GitHub Pages)
1. Create a new public repo, e.g. `bahura`.
2. Upload all files in this folder (index.html, sw.js, manifest.webmanifest, icon-192.png, icon-512.png).
3. Settings > Pages > Deploy from branch > `main` / root > Save.
4. Open `https://<your-username>.github.io/bahura/` on your phone.
   - Android (Chrome): tap Install when the banner shows.
   - iPhone (Safari): Share > Add to Home Screen.

## Test offline
1. On Wi-Fi, zoom to your dive area, tap Offline map > Save this area.
2. Turn on airplane mode, open the app from the home screen. The saved area and your pins still load.

## Where data lives
Catches and photos stay on the phone (IndexedDB). Clearing the browser/app data deletes them.

## Before selling
The satellite imagery is Esri World Imagery, fine for personal testing. For a paid app, switch to a
commercially licensed tile provider (for example MapTiler or Mapbox satellite) and update TILE_URL
in index.html and the host check in sw.js.
