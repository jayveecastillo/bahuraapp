/* Bahura reef spots, Philippines.
   Each spot is the centre of a known reef area, accurate to roughly 1 to 3 km.
   The reef layer on the map shows the actual reef outline once you zoom in.
   p: 2 = no-take protected area (fishing banned), 1 = partly protected (zones or rules apply), 0 = no known protection.
   Always check local rules with the barangay or LGU before diving. */
window.REEF_SPOTS = [
  // ---- Luzon ----
  { id: 'anilao', n: 'Anilao reefs', a: 'Mabini, Batangas', r: 'Luzon', lat: 13.735, lng: 120.875, p: 1, t: 'Long coastline of walls and slopes. Many small sanctuaries along the shore.' },
  { id: 'sombrero', n: 'Sombrero Island', a: 'Tingloy, Batangas', r: 'Luzon', lat: 13.690, lng: 120.835, p: 1, t: 'Small island with sloping reef all around.' },
  { id: 'maricaban', n: 'Maricaban Island (Sepok)', a: 'Tingloy, Batangas', r: 'Luzon', lat: 13.655, lng: 120.850, p: 1, t: 'Walls and slopes on the north and east sides.' },
  { id: 'mainit', n: 'Mainit Point', a: 'Mabini, Batangas', r: 'Luzon', lat: 13.675, lng: 120.887, p: 1, t: 'Point with strong current and big schools.' },
  { id: 'verde', n: 'Verde Island', a: 'Batangas City', r: 'Luzon', lat: 13.550, lng: 121.075, p: 1, t: 'Center of the Verde Island Passage. Very strong current.' },
  { id: 'lobo', n: 'Lobo coast', a: 'Lobo, Batangas', r: 'Luzon', lat: 13.600, lng: 121.240, p: 1, t: 'Fringing reef along the coast, several sanctuaries.' },
  { id: 'fortune', n: 'Fortune Island', a: 'Nasugbu, Batangas', r: 'Luzon', lat: 14.050, lng: 120.505, p: 0, t: 'Offshore island with fringing reef.' },
  { id: 'calatagan', n: 'Calatagan reefs', a: 'Calatagan, Batangas', r: 'Luzon', lat: 13.830, lng: 120.615, p: 1, t: 'Wide shallow reef flats and seagrass.' },
  { id: 'lubang', n: 'Lubang Island reefs', a: 'Lubang, Occidental Mindoro', r: 'Luzon', lat: 13.800, lng: 120.150, p: 0, t: 'Fringing reefs around the island group.' },
  { id: 'subic', n: 'Subic Bay', a: 'Olongapo, Zambales', r: 'Luzon', lat: 14.800, lng: 120.260, p: 0, t: 'Wrecks and reef patches inside the bay.' },
  { id: 'capones', n: 'Capones Island', a: 'San Antonio, Zambales', r: 'Luzon', lat: 14.930, lng: 120.015, p: 0, t: 'Rocky island with reef on the lee side.' },
  { id: 'bolinao', n: 'Bolinao reefs', a: 'Bolinao, Pangasinan', r: 'Luzon', lat: 16.400, lng: 119.900, p: 1, t: 'Large reef flat system in the Lingayen Gulf mouth.' },
  { id: 'hundred', n: 'Hundred Islands', a: 'Alaminos, Pangasinan', r: 'Luzon', lat: 16.200, lng: 120.030, p: 2, t: 'National park. Fishing inside the park is not allowed.' },
  { id: 'polillo', n: 'Polillo Islands', a: 'Polillo, Quezon', r: 'Luzon', lat: 14.750, lng: 121.950, p: 0, t: 'Pacific side islands with fringing reef.' },
  { id: 'calaguas', n: 'Calaguas Islands', a: 'Vinzons, Camarines Norte', r: 'Luzon', lat: 14.460, lng: 122.950, p: 0, t: 'Remote island group with fringing reef.' },
  { id: 'caramoan', n: 'Caramoan islands', a: 'Caramoan, Camarines Sur', r: 'Luzon', lat: 13.770, lng: 123.870, p: 0, t: 'Limestone islets with reef patches.' },
  { id: 'tresreyes', n: 'Tres Reyes Islands', a: 'Gasan, Marinduque', r: 'Luzon', lat: 13.225, lng: 121.830, p: 1, t: 'Three small islands with fringing reef.' },
  { id: 'ticao', n: 'Ticao Island reefs', a: 'San Miguel, Masbate', r: 'Luzon', lat: 12.610, lng: 123.730, p: 0, t: 'Faces the Ticao Pass, known for pelagics.' },
  { id: 'batanes', n: 'Batanes reefs', a: 'Basco, Batanes', r: 'Luzon', lat: 20.450, lng: 121.970, p: 0, t: 'Rocky reefs, rough seas most of the year.' },

  // ---- Mindoro ----
  { id: 'puertogalera', n: 'Puerto Galera (Sabang)', a: 'Puerto Galera, Oriental Mindoro', r: 'Mindoro', lat: 13.520, lng: 120.973, p: 1, t: 'Many named reefs close together. Several sanctuaries.' },
  { id: 'aporeef', n: 'Apo Reef', a: 'Sablayan, Occidental Mindoro', r: 'Mindoro', lat: 12.665, lng: 120.450, p: 2, t: 'Natural park. All fishing is banned.' },

  // ---- Palawan ----
  { id: 'tubbataha-n', n: 'Tubbataha North Atoll', a: 'Cagayancillo, Palawan', r: 'Palawan', lat: 8.930, lng: 119.890, p: 2, t: 'UNESCO site. All fishing is banned.' },
  { id: 'tubbataha-s', n: 'Tubbataha South Atoll', a: 'Cagayancillo, Palawan', r: 'Palawan', lat: 8.800, lng: 119.830, p: 2, t: 'UNESCO site. All fishing is banned.' },
  { id: 'jessiebeazley', n: 'Jessie Beazley Reef', a: 'Cagayancillo, Palawan', r: 'Palawan', lat: 9.045, lng: 119.815, p: 2, t: 'Part of Tubbataha park. All fishing is banned.' },
  { id: 'cagayancillo', n: 'Cagayancillo', a: 'Cagayancillo, Palawan', r: 'Palawan', lat: 9.580, lng: 121.200, p: 0, t: 'Remote island municipality with wide reefs.' },
  { id: 'cuyo', n: 'Cuyo Islands', a: 'Cuyo, Palawan', r: 'Palawan', lat: 10.850, lng: 121.010, p: 0, t: 'Island group with many reefs and shoals.' },
  { id: 'coron', n: 'Coron Bay', a: 'Coron, Palawan', r: 'Palawan', lat: 11.970, lng: 120.200, p: 1, t: 'Wrecks and reefs around Busuanga and Coron.' },
  { id: 'sietepecados', n: 'Siete Pecados', a: 'Coron, Palawan', r: 'Palawan', lat: 12.000, lng: 120.212, p: 2, t: 'Marine park. No fishing.' },
  { id: 'elnido', n: 'Bacuit Bay', a: 'El Nido, Palawan', r: 'Palawan', lat: 11.150, lng: 119.370, p: 1, t: 'Managed protected area. Zoning rules apply.' },
  { id: 'portbarton', n: 'Port Barton', a: 'San Vicente, Palawan', r: 'Palawan', lat: 10.400, lng: 119.150, p: 1, t: 'Bay with island reefs.' },
  { id: 'hondabay', n: 'Honda Bay', a: 'Puerto Princesa, Palawan', r: 'Palawan', lat: 9.880, lng: 118.800, p: 1, t: 'Shallow bay with many reef islets.' },

  // ---- Visayas ----
  { id: 'pescador', n: 'Pescador Island', a: 'Moalboal, Cebu', r: 'Visayas', lat: 9.924, lng: 123.341, p: 2, t: 'Marine sanctuary. No fishing.' },
  { id: 'panagsama', n: 'Panagsama reef', a: 'Moalboal, Cebu', r: 'Visayas', lat: 9.945, lng: 123.368, p: 1, t: 'Wall close to shore. Sardine run area.' },
  { id: 'malapascua', n: 'Malapascua Island', a: 'Daanbantayan, Cebu', r: 'Visayas', lat: 11.330, lng: 124.112, p: 1, t: 'Island reefs and the nearby Monad Shoal.' },
  { id: 'gato', n: 'Gato Island', a: 'Daanbantayan, Cebu', r: 'Visayas', lat: 11.465, lng: 123.995, p: 2, t: 'Marine reserve. No fishing.' },
  { id: 'bantayan', n: 'Bantayan Island', a: 'Bantayan, Cebu', r: 'Visayas', lat: 11.170, lng: 123.720, p: 1, t: 'Wide shallow reef flats around the island.' },
  { id: 'camotes', n: 'Camotes Islands', a: 'Camotes, Cebu', r: 'Visayas', lat: 10.650, lng: 124.350, p: 1, t: 'Fringing reefs around Pacijan and Poro.' },
  { id: 'hilutungan', n: 'Hilutungan Island', a: 'Lapu-Lapu, Cebu', r: 'Visayas', lat: 10.230, lng: 124.030, p: 2, t: 'Marine sanctuary. No fishing.' },
  { id: 'olango', n: 'Olango reef flat', a: 'Lapu-Lapu, Cebu', r: 'Visayas', lat: 10.255, lng: 124.060, p: 1, t: 'Huge reef flat. Wildlife sanctuary on the south side.' },
  { id: 'sumilon', n: 'Sumilon Island', a: 'Oslob, Cebu', r: 'Visayas', lat: 9.432, lng: 123.390, p: 2, t: 'Marine sanctuary. No fishing.' },
  { id: 'balicasag', n: 'Balicasag Island', a: 'Panglao, Bohol', r: 'Visayas', lat: 9.517, lng: 123.683, p: 2, t: 'Marine sanctuary. No fishing.' },
  { id: 'panglao', n: 'Panglao reefs', a: 'Panglao, Bohol', r: 'Visayas', lat: 9.555, lng: 123.750, p: 1, t: 'Walls along Alona and Doljo.' },
  { id: 'pamilacan', n: 'Pamilacan Island', a: 'Baclayon, Bohol', r: 'Visayas', lat: 9.490, lng: 123.930, p: 1, t: 'Island reef with a sanctuary.' },
  { id: 'cabilao', n: 'Cabilao Island', a: 'Loon, Bohol', r: 'Visayas', lat: 9.880, lng: 123.770, p: 1, t: 'Walls around the island.' },
  { id: 'danajon', n: 'Danajon Bank', a: 'Northern Bohol', r: 'Visayas', lat: 10.150, lng: 124.350, p: 1, t: 'Rare double barrier reef. Many small islands.' },
  { id: 'anda', n: 'Anda reefs', a: 'Anda, Bohol', r: 'Visayas', lat: 9.740, lng: 124.580, p: 1, t: 'Fringing reef along the east coast.' },
  { id: 'apoisland', n: 'Apo Island', a: 'Dauin, Negros Oriental', r: 'Visayas', lat: 9.075, lng: 123.270, p: 2, t: 'Protected landscape and seascape. No-take sanctuary.' },
  { id: 'dauin', n: 'Dauin coast', a: 'Dauin, Negros Oriental', r: 'Visayas', lat: 9.190, lng: 123.270, p: 1, t: 'Sand slopes with many small sanctuaries.' },
  { id: 'siquijor', n: 'Siquijor west reefs', a: 'San Juan, Siquijor', r: 'Visayas', lat: 9.170, lng: 123.470, p: 1, t: 'Walls and slopes on the west side.' },
  { id: 'danjugan', n: 'Danjugan Island', a: 'Cauayan, Negros Occidental', r: 'Visayas', lat: 9.870, lng: 122.380, p: 2, t: 'Marine reserve. No fishing.' },
  { id: 'sipalay', n: 'Sipalay reefs', a: 'Sipalay, Negros Occidental', r: 'Visayas', lat: 9.750, lng: 122.400, p: 1, t: 'Coastal reefs and small islands.' },
  { id: 'guimaras', n: 'Guimaras south reefs', a: 'Nueva Valencia, Guimaras', r: 'Visayas', lat: 10.520, lng: 122.530, p: 1, t: 'Islets and fringing reefs.' },
  { id: 'gigantes', n: 'Islas de Gigantes', a: 'Carles, Iloilo', r: 'Visayas', lat: 11.600, lng: 123.330, p: 0, t: 'Island group with reef flats and shoals.' },
  { id: 'boracay', n: 'Boracay reefs', a: 'Malay, Aklan', r: 'Visayas', lat: 11.930, lng: 121.960, p: 1, t: 'Reefs off the east side and Crocodile Island.' },
  { id: 'carabao', n: 'Carabao Island', a: 'San Jose, Romblon', r: 'Visayas', lat: 12.070, lng: 121.930, p: 0, t: 'Fringing reef around the island.' },
  { id: 'romblon', n: 'Romblon Island reefs', a: 'Romblon, Romblon', r: 'Visayas', lat: 12.580, lng: 122.270, p: 1, t: 'Reefs around Romblon and nearby islets.' },
  { id: 'sogod', n: 'Sogod Bay', a: 'Padre Burgos, Southern Leyte', r: 'Visayas', lat: 10.030, lng: 125.020, p: 1, t: 'Deep bay with steep reef walls.' },
  { id: 'limasawa', n: 'Limasawa Island', a: 'Limasawa, Southern Leyte', r: 'Visayas', lat: 9.920, lng: 125.070, p: 1, t: 'Island reefs at the mouth of Sogod Bay.' },
  { id: 'guiuan', n: 'Guiuan reefs', a: 'Guiuan, Eastern Samar', r: 'Visayas', lat: 11.030, lng: 125.720, p: 1, t: 'Pacific facing reefs and islands.' },

  // ---- Mindanao ----
  { id: 'whiteisland', n: 'White Island', a: 'Mambajao, Camiguin', r: 'Mindanao', lat: 9.260, lng: 124.660, p: 1, t: 'Sandbar with reef around it.' },
  { id: 'mantigue', n: 'Mantigue Island', a: 'Mahinog, Camiguin', r: 'Mindanao', lat: 9.170, lng: 124.830, p: 2, t: 'Marine sanctuary. No fishing.' },
  { id: 'aliguay', n: 'Aliguay Island', a: 'Dapitan, Zamboanga del Norte', r: 'Mindanao', lat: 8.725, lng: 123.350, p: 1, t: 'Offshore island with fringing reef.' },
  { id: 'santacruz', n: 'Santa Cruz Islands', a: 'Zamboanga City', r: 'Mindanao', lat: 6.870, lng: 122.055, p: 2, t: 'Protected landscape and seascape.' },
  { id: 'siargao', n: 'Siargao reefs', a: 'General Luna, Siargao', r: 'Mindanao', lat: 9.780, lng: 126.160, p: 1, t: 'Reef flats and channels between islands.' },
  { id: 'britania', n: 'Britania Islands', a: 'San Agustin, Surigao del Sur', r: 'Mindanao', lat: 8.700, lng: 126.330, p: 0, t: 'Group of small islands with reef.' },
  { id: 'samal', n: 'Samal Island', a: 'Island Garden City of Samal, Davao del Norte', r: 'Mindanao', lat: 7.080, lng: 125.720, p: 1, t: 'Reefs and walls along the coast.' },
  { id: 'talikud', n: 'Talikud Island', a: 'Samal, Davao del Norte', r: 'Mindanao', lat: 6.950, lng: 125.700, p: 1, t: 'Island with walls and sanctuaries.' },
  { id: 'pujada', n: 'Pujada Bay', a: 'Mati, Davao Oriental', r: 'Mindanao', lat: 6.870, lng: 126.250, p: 1, t: 'Protected seascape. Zoning rules apply.' },
  { id: 'sarangani', n: 'Sarangani Bay', a: 'Glan, Sarangani', r: 'Mindanao', lat: 5.820, lng: 125.200, p: 1, t: 'Protected seascape along the bay.' }
];
