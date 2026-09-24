# Bahura, spearo log (Phase 1)

Offline reef map and catch log for spearos in the Philippines. Free tier only; Premium features are shown but locked.

## Reef map
- The map is locked to the Philippines.
- Reef layer (layers button, top right) switches between Reef zones, Seabed cover, and Off.
  It shows from zoom 10 and closer. Tap a reef at close zoom to see its zone name.
- Reef data: Allen Coral Atlas (allencoralatlas.org), CC BY 4.0. Commercial use is allowed as long as
  the credit stays on the map (it is in the attribution line).
- Reef spots: `spots.js` lists 69 named reef areas with region, protection status, and a short note.
  Coordinates are area centers (about 1 to 3 km). Edit or add spots in that file.
- Saving an area for offline now also saves the reef zones and seabed layers for that area.

## Put it online (GitHub Pages)
1. Create a new public repo, e.g. `bahura`.
2. Upload all files in this folder (index.html, spots.js, sw.js, manifest.webmanifest, icon-192.png, icon-512.png).
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
