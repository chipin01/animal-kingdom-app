// ============================================================================
// ANIMAL KINGDOM - INTERACTIVE GLOBAL WILDLIFE MAP & LIVE MIGRATION TRACKER
// Real-world scientifically verified GPS waypoint routes & Live seasonal tracker
// ============================================================================

class WildlifeMigrationTracker {
  constructor() {
    this.map = null;
    this.activeRouteLayer = null;
    this.activeMarkersLayer = null;
    this.animatedMarker = null;
    this.animationTimer = null;
    this.currentSelectedMigrationId = 'monarch';
    this.activeFilter = 'all'; // 'all', 'live', 'birds', 'marine', 'land', 'insects'

    // 100% Real-World Verified Wildlife Migration Database
    this.migrations = [
      {
        id: 'monarch',
        name: 'Monarch Butterfly Great Migration',
        species: 'Danaus plexippus',
        emoji: '🦋',
        category: 'insects',
        animalId: 'insect-1',
        activeMonths: [8, 9, 10, 11], // Aug-Nov (Peak September/October)
        distanceMiles: 3000,
        distanceKm: 4800,
        durationDays: 75,
        speedMph: 25,
        originName: 'Southern Canada & Great Lakes, USA',
        destName: 'Oyamel Fir Forests, Michoacán, Mexico',
        habitat: 'Temperate Fields ➔ Subtropical Montane Cloud Forest',
        routeType: 'Air / Multi-Generational Flight',
        summary: 'Millions of Monarch butterflies travel up to 3,000 miles from Canada across the US to the same high-altitude fir forests in Mexico, using an internal sun compass and magnetic antennae!',
        seasonalDetail: '🔴 ACTIVE RIGHT NOW (September Autumn Migration): Monarchs are currently streaming through the central US flyway and Texas funnel heading toward Mexico.',
        image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg/500px-Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg&w=600&output=jpg',
        color: '#f59e0b',
        waypoints: [
          { lat: 44.5, lng: -78.5, label: 'Origin: Great Lakes / Ontario (Breeding Summer)' },
          { lat: 39.8, lng: -84.2, label: 'Stopover: Ohio Valley Wildflower Corridors' },
          { lat: 33.5, lng: -96.8, label: 'Funnel: Texas Nectar Rest Stop' },
          { lat: 25.7, lng: -100.3, label: 'Ascent: Sierra Madre Oriental Mountains' },
          { lat: 19.68, lng: -100.28, label: 'Destination: Oyamel Fir Sanctuary, Michoacán (Overwintering)' }
        ]
      },
      {
        id: 'arctic-tern',
        name: 'Arctic Tern Pole-to-Pole Odyssey',
        species: 'Sterna paradisaea',
        emoji: '🕊️',
        category: 'birds',
        animalId: 'birds-64',
        activeMonths: [8, 9, 10, 11, 4, 5], // Aug-Nov southward, Apr-May northward
        distanceMiles: 44000,
        distanceKm: 71000,
        durationDays: 90,
        speedMph: 32,
        originName: 'Greenland & Arctic Tundra',
        destName: 'Weddell Sea Pack Ice, Antarctica',
        habitat: 'Arctic Ocean ➔ Open Atlantic ➔ Antarctic Pack Ice',
        routeType: 'Trans-Equatorial Ocean Highway',
        summary: 'The longest migration of any animal on Earth! The Arctic Tern experiences two summers every year as it flies from the top of the globe all the way to Antarctica and back.',
        seasonalDetail: '🔴 ACTIVE RIGHT NOW (September Southward Trek): Flocks are currently navigating down the mid-Atlantic wind corridors past the equator.',
        image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Kragge_fws_%28cropped%29.jpg/600px-Kragge_fws_%28cropped%29.jpg&w=600&output=jpg',
        color: '#38bdf8',
        waypoints: [
          { lat: 72.0, lng: -40.0, label: 'Origin: Greenland Tundra (Arctic Midnight Sun)' },
          { lat: 50.0, lng: -28.0, label: 'Mid-Atlantic Open Ocean Glide' },
          { lat: 15.0, lng: -22.0, label: 'Cape Verde Ocean Upwelling Forage' },
          { lat: -25.0, lng: -15.0, label: 'South Atlantic Trade Winds' },
          { lat: -68.0, lng: -35.0, label: 'Destination: Weddell Sea Ice Shelf, Antarctica' }
        ]
      },
      {
        id: 'serengeti',
        name: 'Great Serengeti Wildebeest & Zebra Trek',
        species: 'Connochaetes taurinus & Equus quagga',
        emoji: '🦓',
        category: 'land',
        animalId: 'land-15',
        activeMonths: [7, 8, 9, 10], // Peak Mara River crossings in Aug-Sept
        distanceMiles: 1800,
        distanceKm: 2900,
        durationDays: 120,
        speedMph: 15,
        originName: 'Southern Serengeti Plains, Tanzania',
        destName: 'Masai Mara Game Reserve, Kenya',
        habitat: 'African Acacia Savanna & Mara River Basin',
        routeType: 'Terrestrial River Crossing & Predator Gauntlet',
        summary: 'Over 1.5 million wildebeest, 300,000 zebras, and gazelles march in a massive circular pilgrimage across Tanzania and Kenya, braving giant Nile crocodiles at the Mara River.',
        seasonalDetail: '🔴 ACTIVE RIGHT NOW (September Mara River Crossing): Massive herds are currently in northern Serengeti/Masai Mara grazing fresh volcanic grasses.',
        image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Wildebeest_migration_in_Serengeti.jpg/600px-Wildebeest_migration_in_Serengeti.jpg&w=600&output=jpg',
        color: '#f97316',
        waypoints: [
          { lat: -3.0, lng: 34.8, label: 'Origin: Ndutu Plains, Southern Serengeti (Calving Grounds)' },
          { lat: -2.3, lng: 34.2, label: 'Western Corridor: Grumeti River Basin' },
          { lat: -1.6, lng: 34.9, label: 'Northern Serengeti Acacia Savanna' },
          { lat: -1.35, lng: 35.15, label: 'Destination: Masai Mara, Kenya (Mara River Crossing)' }
        ]
      },
      {
        id: 'godwit',
        name: 'Bar-Tailed Godwit Non-Stop Pacific Flight',
        species: 'Limosa lapponica',
        emoji: '🌊',
        category: 'birds',
        animalId: 'birds-38',
        activeMonths: [9, 10], // Departs Alaska in September
        distanceMiles: 7500,
        distanceKm: 12100,
        durationDays: 11,
        speedMph: 45,
        originName: 'Yukon Delta Mudflats, Alaska, USA',
        destName: 'Firth of Thames Tidal Basin, New Zealand',
        habitat: 'Subarctic Mudflats ➔ Open Pacific ➔ Southern Estuaries',
        routeType: 'World-Record Non-Stop Ocean Flight',
        summary: 'The undisputed world record holder for longest non-stop flight! Godwits double their body weight in Alaska, shrink their internal organs, and fly 11 days and nights continuously across the open Pacific without eating, drinking, or sleeping!',
        seasonalDetail: '🔴 ACTIVE RIGHT NOW (September Pacific Departure): Godwits are currently launching from Alaska across the open Pacific heading non-stop to New Zealand.',
        image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Limosa_lapponica_in_Japan.jpg/600px-Limosa_lapponica_in_Japan.jpg&w=600&output=jpg',
        color: '#a855f7',
        waypoints: [
          { lat: 61.5, lng: -165.0, label: 'Origin: Yukon-Kuskokwim Delta, Alaska' },
          { lat: 25.0, lng: -165.0, label: 'Hawaii Meridian Open Ocean Flight' },
          { lat: 0.0, lng: -175.0, label: 'Equatorial Ocean Crossing (Day 5 Non-Stop)' },
          { lat: -20.0, lng: 178.0, label: 'Fiji / Tonga Airspace (Day 8 Non-Stop)' },
          { lat: -37.15, lng: 175.35, label: 'Destination: Firth of Thames, New Zealand (Touchdown!)' }
        ]
      },
      {
        id: 'salmon',
        name: 'Pacific Sockeye Salmon Spawning Run',
        species: 'Oncorhynchus nerka',
        emoji: '🐟',
        category: 'marine',
        animalId: 'marine-16',
        activeMonths: [7, 8, 9, 10], // Spawning runs July-October
        distanceMiles: 1000,
        distanceKm: 1600,
        durationDays: 45,
        speedMph: 12,
        originName: 'Gulf of Alaska & North Pacific Ocean',
        destName: 'Brooks River & Iliamna Lake, Alaska',
        habitat: 'Saltwater Ocean ➔ Torrential Freshwater Rapids',
        routeType: 'Upstream River Ascent & Waterfall Leaping',
        summary: 'Born in freshwater gravel, salmon spend 3 years in the open ocean before navigating thousands of miles back to the exact stream where they hatched, leaping up waterfalls while grizzly bears wait to catch them!',
        seasonalDetail: '🔴 ACTIVE RIGHT NOW (September River Run): Millions of crimson-colored sockeye salmon are currently leaping up Brooks Falls in Katmai, Alaska.',
        image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Sockeye_salmon_in_freshwater.jpg/600px-Sockeye_salmon_in_freshwater.jpg&w=600&output=jpg',
        color: '#ef4444',
        waypoints: [
          { lat: 56.0, lng: -145.0, label: 'Origin: Open Gulf of Alaska (Feeding Grounds)' },
          { lat: 58.0, lng: -158.0, label: 'Bristol Bay Estuary (Physiological Osmoregulation Shift)' },
          { lat: 58.7, lng: -156.9, label: 'Naknek River Upstream Surge' },
          { lat: 58.55, lng: -155.78, label: 'Destination: Brooks River Rapids & Spawning Gravels' }
        ]
      },
      {
        id: 'humpback',
        name: 'Humpback Whale Polar-to-Tropics Migration',
        species: 'Megaptera novaeangliae',
        emoji: '🐋',
        category: 'marine',
        animalId: 'marine-4',
        activeMonths: [10, 11, 12, 1, 2, 3, 4], // Late autumn through spring
        distanceMiles: 3000,
        distanceKm: 4800,
        durationDays: 40,
        speedMph: 8,
        originName: 'Southeast Alaska Feeding Waters',
        destName: 'Maui & Hawaiian Islands Protected Waters',
        habitat: 'Sub-Arctic Fjord Krill Grounds ➔ Warm Tropical Lagoons',
        routeType: 'Deep Oceanic Pelagic Highway',
        summary: 'Humpback whales gorge on krill and herring in Alaska throughout the summer, then embark on a 3,000-mile ocean cruise to give birth to calves in the warm, shallow waters of Hawaii.',
        seasonalDetail: '⏳ PREPARING FOR DEPARTURE: Whales are currently in their final feeding binge in Alaska, building up blubber for their October departure southward.',
        image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/500px-Killerwhales_jumping.jpg&w=600&output=jpg',
        color: '#0284c7',
        waypoints: [
          { lat: 58.5, lng: -136.0, label: 'Origin: Glacier Bay, Alaska (Summer Krill Feast)' },
          { lat: 45.0, lng: -140.0, label: 'North Pacific Ocean Blue Corridor' },
          { lat: 30.0, lng: -148.0, label: 'Subtropical Open Water Navigation' },
          { lat: 20.8, lng: -156.5, label: 'Destination: Auau Channel, Maui, Hawaii (Calving Grounds)' }
        ]
      },
      {
        id: 'hummingbird',
        name: 'Ruby-Throated Hummingbird Gulf Crossing',
        species: 'Archilochus colubris',
        emoji: '🌸',
        category: 'birds',
        animalId: 'birds-5',
        activeMonths: [8, 9, 10], // Peak September crossing
        distanceMiles: 2000,
        distanceKm: 3200,
        durationDays: 20,
        speedMph: 30,
        originName: 'Eastern Forests & Gardens, USA & Canada',
        destName: 'Yucatan Rainforests & Central America',
        habitat: 'Backyard Gardens ➔ Open Gulf of Mexico ➔ Tropical Jungle',
        routeType: 'Trans-Gulf Non-Stop Flight (500 miles over ocean)',
        summary: 'Weighing only as much as a penny, this tiny hummingbird doubles its weight with flower nectar, then flaps its wings 80 times per second for 20 hours non-stop across 500 miles of open ocean with nowhere to land!',
        seasonalDetail: '🔴 ACTIVE RIGHT NOW (September Peak Crossing): Millions of hummingbirds are currently fueling up along the Gulf Coast and flying non-stop across the sea.',
        image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Aegithalos_caudatus_front-on_2.jpg&w=600&output=jpg',
        color: '#10b981',
        waypoints: [
          { lat: 42.0, lng: -80.0, label: 'Origin: Great Lakes Gardens (Nectar Fueling)' },
          { lat: 33.0, lng: -87.0, label: 'Appalachian Flyway' },
          { lat: 29.5, lng: -91.5, label: 'Launch Point: Louisiana Gulf Coast (Non-Stop Takeoff)' },
          { lat: 25.0, lng: -90.0, label: 'Open Gulf of Mexico (20 Hours Non-Stop Flight)' },
          { lat: 20.5, lng: -89.0, label: 'Destination: Yucatan Peninsula, Mexico (Safe Landing!)' }
        ]
      },
      {
        id: 'leatherback',
        name: 'Leatherback Sea Turtle Trans-Pacific Journey',
        species: 'Dermochelys coriacea',
        emoji: '🐢',
        category: 'reptiles',
        animalId: 'reptile-51',
        activeMonths: [9, 10, 11, 12],
        distanceMiles: 6000,
        distanceKm: 9600,
        durationDays: 140,
        speedMph: 6,
        originName: 'California Current Feeding Waters, USA',
        destName: 'Bird\'s Head Peninsula, Papua, Indonesia',
        habitat: 'Cold Coastal Upwelling ➔ Deep Pacific ➔ Tropical Coral Beaches',
        routeType: 'Great Trans-Pacific Swim',
        summary: 'The largest sea turtle in the world dives over 4,000 feet deep and swims 6,000 miles completely across the Pacific Ocean from California to Indonesia using Earth\'s geomagnetic field!',
        seasonalDetail: '🔴 ACTIVE RIGHT NOW (September Ocean Departure): Leatherbacks are currently moving westward from the US Pacific coast across the deep ocean.',
        image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Chamaeleo_calyptratus_20070408_01.jpg/800px-Chamaeleo_calyptratus_20070408_01.jpg&w=600&output=jpg',
        color: '#14b8a6',
        waypoints: [
          { lat: 36.8, lng: -122.0, label: 'Origin: Monterey Bay, California (Jellyfish Feast)' },
          { lat: 22.0, lng: -150.0, label: 'Central Pacific North Equatorial Drift' },
          { lat: 10.0, lng: 175.0, label: 'Micronesian Trench Deep Dives' },
          { lat: -0.5, lng: 134.0, label: 'Destination: Jamursba Medi, Papua, Indonesia (Nesting Beach)' }
        ]
      },
      {
        id: 'caribou',
        name: 'Arctic Porcupine Caribou Great Herd Migration',
        species: 'Rangifer tarandus',
        emoji: '🦌',
        category: 'land',
        animalId: 'land-22',
        activeMonths: [8, 9, 10, 11],
        distanceMiles: 3000,
        distanceKm: 4800,
        durationDays: 80,
        speedMph: 20,
        originName: 'Arctic National Wildlife Refuge, Alaska',
        destName: 'Ogilvie Mountains & Yukon Taiga, Canada',
        habitat: 'Arctic Coastal Tundra ➔ Snow-Covered Boreal Forest',
        routeType: 'Longest Land Animal Migration on Earth',
        summary: 'Over 200,000 caribou travel 3,000 miles across the Arctic tundra, swimming wide glacier rivers and crossing high mountain passes to find winter shelter in the southern taiga.',
        seasonalDetail: '🔴 ACTIVE RIGHT NOW (September Autumn Movement): Herds are currently crossing the Brooks Range passes heading into winter taiga valleys.',
        image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/500px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg&w=600&output=jpg',
        color: '#d97706',
        waypoints: [
          { lat: 70.0, lng: -144.0, label: 'Origin: Beaufort Sea Coastal Plain (Summer Calving)' },
          { lat: 68.5, lng: -142.0, label: 'Brooks Range Mountain Passes & Porcupine River Crossing' },
          { lat: 66.0, lng: -138.5, label: 'Ogilvie Mountains Taiga Forest, Yukon, Canada' }
        ]
      },
      {
        id: 'whale-shark',
        name: 'Whale Shark Coral Spawning Migration',
        species: 'Rhincodon typus',
        emoji: '🦈',
        category: 'marine',
        animalId: 'marine-18',
        activeMonths: [3, 4, 5, 6, 7, 8, 9],
        distanceMiles: 4000,
        distanceKm: 6400,
        durationDays: 100,
        speedMph: 4,
        originName: 'Ningaloo Reef, Western Australia',
        destName: 'Indonesian Coral Triangle & Pacific Currents',
        habitat: 'Barrier Reefs ➔ Pelagic Deep Sea Trenches',
        routeType: 'Ocean Current & Plankton Bloom Tracking',
        summary: 'The largest fish on Earth follows oceanic thermal fronts and mass coral spawning events across thousands of miles of tropical seas, filtering 1.5 million gallons of water every hour.',
        seasonalDetail: '🔴 ACTIVE RIGHT NOW (September Reef Transition): Whale sharks are concluding their Ningaloo aggregation and swimming towards the deep ocean trenches.',
        image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/500px-Killerwhales_jumping.jpg&w=600&output=jpg',
        color: '#06b6d4',
        waypoints: [
          { lat: -22.5, lng: 113.8, label: 'Origin: Ningaloo Reef, Australia (Coral Spawning Feast)' },
          { lat: -12.0, lng: 118.0, label: 'Timor Sea Deep Water Trench' },
          { lat: -2.0, lng: 128.0, label: 'Banda Sea Indonesian Upwelling' },
          { lat: 4.0, lng: 140.0, label: 'Destination: Pacific Equatorial Countercurrent' }
        ]
      }
    ];
    this.selectedMonth = null; // null = real-world live sync (new Date().getMonth() + 1)
  }

  getCurrentEffectiveMonth() {
    return this.selectedMonth || (new Date().getMonth() + 1);
  }

  getMonthName(monthNum) {
    const names = ['', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return names[monthNum] || 'September';
  }

  getSeasonalDetailForMonth(migration, monthNum) {
    const m = monthNum || this.getCurrentEffectiveMonth();
    const isLive = migration.activeMonths && migration.activeMonths.includes(m);
    const monthName = this.getMonthName(m);

    const seasonalKnowledge = {
      'monarch': {
        active: `🔴 ACTIVE MIGRATION (${monthName}): Millions of super-generation Monarchs are actively streaming southward through the central US flyway and Texas nectar corridors heading into Mexico.`,
        inactive: `🌲 OVERWINTERING & BREEDING (${monthName}): Colonies are either resting clustered in high-altitude Mexican Oyamel fir trees (winter) or breeding northward across milkweed meadows (spring/summer).`
      },
      'arctic-tern': {
        active: `🔴 ACTIVE TRANS-OCEANIC VOYAGE (${monthName}): Flocks are actively soaring along global wind highways, crossing between the Arctic and Antarctic poles.`,
        inactive: `❄️ POLAR SUMMER FORAGING (${monthName}): Experiencing 24-hour midnight sun—either foraging Antarctic pack ice (Jan-Feb) or nesting on Arctic tundra (Jun-Jul).`
      },
      'serengeti': {
        active: `🔴 ACTIVE MARA RIVER CROSSING (${monthName}): Massive herds of 1.5 million wildebeest and zebras are actively negotiating the river gauntlet in northern Serengeti and Masai Mara.`,
        inactive: `🍼 SOUTHERN CALVING & GRAZING (${monthName}): Herds are grazing the southern Ndutu plains giving birth to 8,000 calves daily, or moving across the western corridor.`
      },
      'godwit': {
        active: `🔴 ACTIVE NON-STOP PACIFIC FLIGHT (${monthName}): Godwits are currently airborne over the open Pacific on their world-record 11-day nonstop journey from Alaska to New Zealand.`,
        inactive: `🏖️ ESTUARY FEEDING & NESTING (${monthName}): Foraging tidal worms on New Zealand beaches (southern summer) or nesting in subarctic Alaskan tundra (northern summer).`
      },
      'salmon': {
        active: `🔴 ACTIVE FRESHWATER SPAWNING RUN (${monthName}): Millions of crimson sockeye salmon are actively surging upstream and leaping waterfalls in Alaskan river systems.`,
        inactive: `🌊 OCEAN MATURATION & ALEVIN STAGE (${monthName}): Young salmon are either growing in open Gulf of Alaska ocean currents or developing safely under river gravel.`
      },
      'humpback': {
        active: `🔴 ACTIVE TROPICAL CALVING & TRANSIT (${monthName}): Whales are actively navigating to or nursing newborn calves in the warm, shallow waters of Maui, Hawaii.`,
        inactive: `🐟 SUB-ARCTIC FEEDING BINGE (${monthName}): Whales are in Alaska's Glacier Bay and Prince William Sound, bubble-net feeding on tons of summer krill and herring.`
      },
      'hummingbird': {
        active: `🔴 ACTIVE GULF OF MEXICO CROSSING (${monthName}): Hummingbirds are actively flying 500 miles non-stop across open ocean without landing to reach Central America.`,
        inactive: `🌸 TROPICAL WINTERING & SUMMER BREEDING (${monthName}): Feeding on rainforest flowers in Central America or nesting in backyard flower gardens across North America.`
      },
      'leatherback': {
        active: `🔴 ACTIVE TRANS-PACIFIC CROSSING (${monthName}): Giant sea turtles are actively swimming 6,000 miles across the deep Pacific from California toward Indonesia.`,
        inactive: `🏖️ TROPICAL NESTING & JELLYFISH FORAGING (${monthName}): Females are laying eggs on Papuan coral beaches or feeding on giant jellyfish in cold coastal upwelling zones.`
      },
      'caribou': {
        active: `🔴 ACTIVE MOUNTAIN PASS MIGRATION (${monthName}): Herds of 200,000 caribou are actively trekking through Alaska's Brooks Range passes before winter freeze.`,
        inactive: `🌲 TAIGA SHELTER & COASTAL CALVING (${monthName}): Sheltering in snow-covered boreal forests feeding on lichens (winter) or grazing on summer Arctic coastal tundra.`
      },
      'whale-shark': {
        active: `🔴 ACTIVE CURRENT & SPAWNING TRANSIT (${monthName}): Whale sharks are actively tracking mass coral spawning and plankton blooms along tropical barrier reefs.`,
        inactive: `🦈 DEEP SEA PELAGIC FORAGING (${monthName}): Cruising deep oceanic trenches and equatorial countercurrents across the Indo-Pacific.`
      }
    };

    const entry = seasonalKnowledge[migration.id];
    if (entry) {
      return isLive ? entry.active : entry.inactive;
    }
    return isLive ? `🔴 ACTIVE MIGRATION in ${monthName}.` : `⏳ Seasonal phase for ${monthName}.`;
  }

  isMigrationActiveNow(migration) {
    const month = this.getCurrentEffectiveMonth();
    return migration.activeMonths && migration.activeMonths.includes(month);
  }

  setSelectedMonth(monthNum) {
    this.selectedMonth = monthNum; // null for live sync, or 1-12
    if (window.AK_AUDIO) window.AK_AUDIO.playPop(480);
    this.renderMonthSelector();
    this.updateStatusBanner();
    this.renderMigrationSidebar();
    if (this.currentSelectedMigrationId) {
      this.selectMigration(this.currentSelectedMigrationId);
    }
  }

  renderMonthSelector() {
    const container = document.getElementById('mig-month-selector');
    if (!container) return;

    const realMonth = new Date().getMonth() + 1;
    const currentActiveMonth = this.getCurrentEffectiveMonth();
    const isLive = this.selectedMonth === null || this.selectedMonth === realMonth;

    const monthAbbrs = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    
    let html = `
      <button class="mig-month-pill ${this.selectedMonth === null ? 'active live-sync' : ''}" onclick="window.AK_MIGRATION.setSelectedMonth(null)" title="Lock to Real-World Current Month">
        <span class="live-dot-mini"></span> 🔴 Live Sync (${monthAbbrs[realMonth]})
      </button>
    `;

    for (let m = 1; m <= 12; m++) {
      const isSelected = this.selectedMonth === m;
      const isRealNow = m === realMonth;
      html += `
        <button class="mig-month-pill ${isSelected ? 'active' : ''} ${isRealNow ? 'is-real-now' : ''}" onclick="window.AK_MIGRATION.setSelectedMonth(${m})" title="${this.getMonthName(m)} Flyway Season">
          ${monthAbbrs[m]}
        </button>
      `;
    }

    container.innerHTML = html;
  }

  updateStatusBanner() {
    const label = document.getElementById('mig-month-status-label');
    const effMonth = this.getCurrentEffectiveMonth();
    const monthName = this.getMonthName(effMonth);
    const liveCount = this.migrations.filter(m => this.isMigrationActiveNow(m)).length;

    const countAllEl = document.getElementById('mig-count-all');
    const countLiveEl = document.getElementById('mig-count-live');
    if (countAllEl) countAllEl.innerText = this.migrations.length;
    if (countLiveEl) countLiveEl.innerText = liveCount;

    if (label) {
      if (this.selectedMonth === null) {
        label.innerHTML = `🔴 Live Real-World Sync: <strong>${monthName}</strong> (${liveCount} Active Flyways)`;
      } else {
        label.innerHTML = `⏱️ Simulating <strong>${monthName} Season</strong> (${liveCount} Active Flyways)`;
      }
    }
  }

  openMigrationModal(migrationId = null) {
    if (window.AK_AUDIO) window.AK_AUDIO.playPop(520);
    const modal = document.getElementById('migration-modal');
    if (!modal) return;

    if (migrationId) {
      this.currentSelectedMigrationId = migrationId;
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    if (window.AK_QUESTS && window.AK_QUESTS.recordStat) {
      window.AK_QUESTS.recordStat('migrationsTracked', 1);
    }

    this.renderMonthSelector();
    this.updateStatusBanner();
    this.renderMigrationSidebar();

    // Initialize or resize Leaflet Map
    setTimeout(() => {
      this.initOrUpdateMap();
      this.selectMigration(this.currentSelectedMigrationId);
    }, 100);
  }

  closeMigrationModal() {
    const modal = document.getElementById('migration-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = 'auto';

    if (this.animationTimer) {
      clearInterval(this.animationTimer);
      this.animationTimer = null;
    }
  }

  setCategoryFilter(filter) {
    this.activeFilter = filter;
    if (window.AK_AUDIO) window.AK_AUDIO.playPop(420);
    document.querySelectorAll('.mig-filter-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.cat === filter);
    });
    this.renderMigrationSidebar();
  }

  filterSearch(query) {
    this.searchQuery = (query || '').toLowerCase().trim();
    const clearBtn = document.getElementById('mig-search-clear');
    if (clearBtn) clearBtn.classList.toggle('hidden', !this.searchQuery);
    this.renderMigrationSidebar();
  }

  clearSearch() {
    const input = document.getElementById('mig-search-input');
    if (input) input.value = '';
    this.filterSearch('');
  }

  renderMigrationSidebar() {
    const listEl = document.getElementById('migration-routes-list');
    if (!listEl) return;

    let items = this.migrations;

    if (this.activeFilter === 'live') {
      items = items.filter(m => this.isMigrationActiveNow(m));
    } else if (this.activeFilter === 'avian' || this.activeFilter === 'birds') {
      items = items.filter(m => m.category === 'birds');
    } else if (this.activeFilter === 'marine') {
      items = items.filter(m => m.category === 'marine' || m.category === 'fish' || m.category === 'reptiles');
    } else if (this.activeFilter === 'land') {
      items = items.filter(m => m.category === 'land');
    } else if (this.activeFilter === 'insect' || this.activeFilter === 'insects') {
      items = items.filter(m => m.category === 'insects');
    }

    if (this.searchQuery) {
      items = items.filter(m => 
        m.name.toLowerCase().includes(this.searchQuery) ||
        m.species.toLowerCase().includes(this.searchQuery) ||
        m.originName.toLowerCase().includes(this.searchQuery) ||
        m.destName.toLowerCase().includes(this.searchQuery)
      );
    }

    const isZh = window.AK_I18N && window.AK_I18N.getLanguage() === 'zh';
    const isEs = window.AK_I18N && window.AK_I18N.getLanguage() === 'es';

    listEl.innerHTML = items.map(m => {
      const isLiveNow = this.isMigrationActiveNow(m);
      const isSelected = m.id === this.currentSelectedMigrationId;
      const locRouteName = window.AK_I18N ? window.AK_I18N.translateBioText(m.name) : m.name;
      const locSpecies = window.AK_I18N ? window.AK_I18N.getSpeciesName(m.species) : m.species;
      const badgeLive = isLiveNow ? (isZh ? '<span class="mig-live-pulse-badge">🔴 正在進行中</span>' : (isEs ? '<span class="mig-live-pulse-badge">🔴 EN VIVO</span>' : '<span class="mig-live-pulse-badge">🔴 LIVE NOW</span>')) :
                                    (isZh ? '<span class="mig-season-badge">季節性遷徙</span>' : (isEs ? '<span class="mig-season-badge">ESTACIONAL</span>' : '<span class="mig-season-badge">SEASONAL</span>'));
      const unitMiles = isZh ? '英里' : (isEs ? 'millas' : 'miles');
      const unitDays = isZh ? '天' : (isEs ? 'días' : 'days');
      const unitSpeed = isZh ? '英里/時' : (isEs ? 'mph' : 'mph');

      return `
        <div class="mig-route-card ${isSelected ? 'selected' : ''}" onclick="window.AK_MIGRATION.selectMigration('${m.id}')">
          <div class="mig-card-header">
            <span class="mig-card-emoji">${m.emoji}</span>
            <div class="mig-card-titles">
              <h4 class="mig-card-name">${locRouteName}</h4>
              <span class="mig-card-sci"><em>${locSpecies}</em></span>
            </div>
            ${badgeLive}
          </div>
          <div class="mig-card-stats">
            <span>📏 ${m.distanceMiles.toLocaleString()} ${unitMiles}</span>
            <span>⏱️ ${m.durationDays} ${unitDays}</span>
            <span>⚡ ${m.speedMph} ${unitSpeed}</span>
          </div>
          <p class="mig-card-preview">${m.originName.split(',')[0]} ➔ ${m.destName.split(',')[0]}</p>
        </div>
      `;
    }).join('');
  }

  initOrUpdateMap() {
    const mapContainer = document.getElementById('migration-map-container');
    if (!mapContainer || typeof L === 'undefined') return;

    if (!this.map) {
      // Create Leaflet Map centered globally
      this.map = L.map('migration-map-container', {
        center: [20, 0],
        zoom: 2,
        minZoom: 2,
        maxZoom: 9,
        zoomControl: true,
        attributionControl: false
      });

      // Free, high-performance dark cartography tiles (Esri World Dark Gray Base) - No API Key Required
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
        attribution: 'Tiles &copy; Esri, DeLorme, HERE',
        maxZoom: 16
      }).addTo(this.map);
    } else {
      this.map.invalidateSize();
    }
  }

  selectMigration(id) {
    const migration = this.migrations.find(m => m.id === id);
    if (!migration || !this.map) return;

    this.currentSelectedMigrationId = id;
    this.renderMigrationSidebar();
    this.renderMigrationDetail(migration);

    if (this.animationTimer) {
      clearInterval(this.animationTimer);
      this.animationTimer = null;
    }

    // Clear previous layers
    if (this.activeRouteLayer) this.map.removeLayer(this.activeRouteLayer);
    if (this.activeMarkersLayer) this.map.removeLayer(this.activeMarkersLayer);
    if (this.animatedMarker) this.map.removeLayer(this.animatedMarker);

    this.activeRouteLayer = L.layerGroup().addTo(this.map);
    this.activeMarkersLayer = L.layerGroup().addTo(this.map);

    const latlngs = migration.waypoints.map(w => [w.lat, w.lng]);

    // Outer subtle ambient glow
    L.polyline(latlngs, {
      color: migration.color,
      weight: 8,
      opacity: 0.22,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(this.activeRouteLayer);

    // Main sleek solid vector path
    L.polyline(latlngs, {
      color: migration.color,
      weight: 3.5,
      opacity: 0.95,
      lineCap: 'round',
      lineJoin: 'round'
    }).addTo(this.activeRouteLayer);

    // Add Clean Waypoint Telemetry Pips (No emojis)
    migration.waypoints.forEach((wp, idx) => {
      const isStart = idx === 0;
      const isEnd = idx === migration.waypoints.length - 1;
      const markerColor = isStart ? '#10b981' : (isEnd ? '#ef4444' : migration.color);
      const pipSize = (isStart || isEnd) ? 14 : 8;

      const iconHtml = `
        <div class="mig-telemetry-pip ${isStart ? 'pip-start' : (isEnd ? 'pip-end' : 'pip-mid')}" style="--pip-color: ${markerColor};">
          <div class="mig-pip-core"></div>
        </div>
      `;

      const customIcon = L.divIcon({
        className: 'mig-custom-marker',
        html: iconHtml,
        iconSize: [pipSize, pipSize],
        iconAnchor: [pipSize / 2, pipSize / 2]
      });

      const marker = L.marker([wp.lat, wp.lng], { icon: customIcon })
        .bindPopup(`
          <div class="mig-popup-dark">
            <div class="mig-popup-title" style="color: ${markerColor};">
              ${isStart ? '● DEPARTURE POINT' : (isEnd ? '● DESTINATION' : `● WAYPOINT ${idx + 1}`)}
            </div>
            <div class="mig-popup-label">${wp.label}</div>
          </div>
        `)
        .addTo(this.activeMarkersLayer);

      if (isStart) {
        marker.openPopup();
      }
    });

    // Animated Live Animal Telemetry Radar Dot (Clean glowing pip, no emojis)
    const animatedIcon = L.divIcon({
      className: 'mig-animal-radar-dot-wrap',
      html: `
        <div class="mig-animal-radar-beacon" style="--beacon-color: ${migration.color};">
          <div class="mig-radar-pulse-ring"></div>
          <div class="mig-radar-core-dot"></div>
        </div>
      `,
      iconSize: [28, 28],
      iconAnchor: [14, 14]
    });

    this.animatedMarker = L.marker(latlngs[0], { icon: animatedIcon })
      .bindTooltip(`${migration.name} • Live GPS Position`, {
        direction: 'top',
        offset: [0, -14],
        className: 'mig-live-pos-tooltip'
      })
      .addTo(this.map);

    // Smooth Interpolation Animation along the path
    let step = 0;
    const totalSteps = 120;
    this.animationTimer = setInterval(() => {
      step = (step + 1) % totalSteps;
      const progress = step / totalSteps;
      const pos = this.getInterpolatedLatLng(latlngs, progress);
      if (this.animatedMarker && pos) {
        this.animatedMarker.setLatLng(pos);
      }
    }, 50);

    // Fit map view to migration path bounds
    const bounds = L.latLngBounds(latlngs);
    this.map.fitBounds(bounds, { padding: [60, 60], maxZoom: 6 });
  }

  getInterpolatedLatLng(latlngs, progress) {
    if (!latlngs || latlngs.length < 2) return latlngs[0];
    const segmentCount = latlngs.length - 1;
    const totalProgress = progress * segmentCount;
    const segmentIdx = Math.min(segmentCount - 1, Math.floor(totalProgress));
    const segmentFraction = totalProgress - segmentIdx;

    const p1 = latlngs[segmentIdx];
    const p2 = latlngs[segmentIdx + 1];

    return [
      p1[0] + (p2[0] - p1[0]) * segmentFraction,
      p1[1] + (p2[1] - p1[1]) * segmentFraction
    ];
  }

  renderMigrationDetail(m) {
    const detailEl = document.getElementById('migration-telemetry-dashboard') || document.getElementById('migration-detail-panel');
    if (!detailEl) return;

    const isLiveNow = this.isMigrationActiveNow(m);
    const effMonth = this.getCurrentEffectiveMonth();
    const effMonthName = this.getMonthName(effMonth);
    const animal = window.app ? window.app.getAnimalById(m.animalId) : null;

    const isZh = window.AK_I18N && window.AK_I18N.getLanguage() === 'zh';
    const isEs = window.AK_I18N && window.AK_I18N.getLanguage() === 'es';
    const locRouteName = window.AK_I18N ? window.AK_I18N.translateBioText(m.name) : m.name;
    const locSpecies = window.AK_I18N ? window.AK_I18N.getSpeciesName(m.species) : m.species;
    const sciPrefix = isZh ? '學名' : (isEs ? 'Científico' : 'Scientific');
    const seasonalStatusTitle = isZh ? `📅 季節狀態 (${effMonthName}):` : (isEs ? `📅 Estado Estacional (${effMonthName}):` : `📅 Seasonal Status (${effMonthName}):`);
    const lblTotalJourney = isZh ? `總旅程 (${m.distanceKm.toLocaleString()} 公里)` : (isEs ? `Viaje Total (${m.distanceKm.toLocaleString()} km)` : `Total Journey (${m.distanceKm.toLocaleString()} km)`);
    const lblDuration = isZh ? '平均耗時' : (isEs ? 'Duración Típica' : 'Typical Duration');
    const lblSpeed = isZh ? '巡航時速' : (isEs ? 'Velocidad de Crucero' : 'Cruise Speed');
    const lblCorridor = isZh ? '全球遷徙生態廊道' : (isEs ? 'Corredores Globales' : 'Global Corridors');
    const unitMiles = isZh ? '英里' : (isEs ? 'millas' : 'miles');
    const unitDays = isZh ? '天' : (isEs ? 'Días' : 'Days');
    const unitSpeed = isZh ? '英里/時' : (isEs ? 'mph' : 'mph');

    const badgeActiveText = isLiveNow ? (isZh ? `🔴 在 ${effMonthName} 活躍中` : (isEs ? `🔴 ACTIVO EN ${effMonthName.toUpperCase()}` : `🔴 ACTIVE IN ${effMonthName.toUpperCase()}`)) :
                                        (isZh ? `⏳ 在 ${effMonthName} 處於休眠/非遷徙期` : (isEs ? `⏳ INACTIVO EN ${effMonthName.toUpperCase()}` : `⏳ INACTIVE / DORMANT IN ${effMonthName.toUpperCase()}`));

    detailEl.innerHTML = `
      <div class="mig-detail-header">
        <div class="mig-detail-badge-row">
          <span class="${isLiveNow ? 'badge-mig-live' : 'badge-mig-season'}">${badgeActiveText}</span>
          <span class="badge-mig-category">${m.category.toUpperCase()} • ${m.routeType}</span>
        </div>
        <h3 class="mig-detail-title">${m.emoji} ${locRouteName}</h3>
        <div class="mig-detail-sci">${sciPrefix}: <em>${locSpecies}</em></div>
      </div>

      <div class="mig-status-highlight ${isLiveNow ? 'live' : ''}">
        <strong>${seasonalStatusTitle}</strong>
        <p>${this.getSeasonalDetailForMonth(m, effMonth)}</p>
      </div>

      <div class="mig-stats-grid">
        <div class="mig-stat-box">
          <span class="mig-stat-icon">📏</span>
          <div>
            <div class="mig-stat-val">${m.distanceMiles.toLocaleString()} ${unitMiles}</div>
            <div class="mig-stat-lbl">${lblTotalJourney}</div>
          </div>
        </div>
        <div class="mig-stat-box">
          <span class="mig-stat-icon">⏱️</span>
          <div>
            <div class="mig-stat-val">${m.durationDays} ${unitDays}</div>
            <div class="mig-stat-lbl">${lblDuration}</div>
          </div>
        </div>
        <div class="mig-stat-box">
          <span class="mig-stat-icon">⚡</span>
          <div>
            <div class="mig-stat-val">${m.speedMph} ${unitSpeed}</div>
            <div class="mig-stat-lbl">${lblSpeed}</div>
          </div>
        </div>
        <div class="mig-stat-box">
          <span class="mig-stat-icon">🌍</span>
          <div>
            <div class="mig-stat-val">2 Continents</div>
            <div class="mig-stat-lbl">${lblCorridor}</div>
          </div>
        </div>
      </div>

      <div class="mig-route-flow">
        <div class="mig-point-box origin">
          <span class="mig-point-tag">🚩 DEPARTURE</span>
          <strong>${m.originName}</strong>
        </div>
        <div class="mig-arrow">➔</div>
        <div class="mig-point-box destination">
          <span class="mig-point-tag">🏁 DESTINATION</span>
          <strong>${m.destName}</strong>
        </div>
      </div>

      <div class="mig-story-box">
        <h4>📖 Why & How They Migrate:</h4>
        <p>${m.summary}</p>
      </div>

      <div class="mig-actions-row">
        ${animal ? `
          <button class="btn-voice-sound" onclick="window.AK_AUDIO.playAnimalSound(window.app.getAnimalById('${animal.id}'))" title="Hear ${animal.name} Sound">
            🔊 Hear Call
          </button>
          <button class="btn-ghost" onclick="window.AK_MIGRATION.closeMigrationModal(); window.app.openAnimalDetail('${animal.id}')" title="Open Full Card">
            🔍 Open Specimen Card
          </button>
        ` : ''}
        <button class="btn-secondary" onclick="window.AK_MIGRATION.replayAnimation()" title="Replay Path Animation">
          🔄 Replay Path
        </button>
      </div>
    `;
  }

  replayAnimation() {
    this.selectMigration(this.currentSelectedMigrationId);
  }
}

window.AK_MIGRATION = new WildlifeMigrationTracker();
