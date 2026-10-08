// ============================================================================
// SURVIVORS OF THE EXTREME WILD: Journey Across Earth's Harshest Lands
// Official 90-Page Bonus Adventure Book
// A thrilling fictional animal expedition packed with 100% real survival science facts!
// ============================================================================

(function(root) {
  'use strict';

  const ADVENTURE_BOOK_DATA = {
    title: "Survivors of the Extreme Wild",
    subtitle: "Journey Across Earth's Harshest Lands: 90 Days in the Extreme Earth",
    author: "E. P. Wild & Junior Naturalists",
    coverImage: "assets/images/bonus_adventure_book_cover.jpg",
    totalPages: 90,
    chapters: [
      { id: 1, title: "The Frozen Whiteout (The Polar Tundra)", pages: [1, 10] },
      { id: 2, title: "The Blazing Dunes (The Great Deserts)", pages: [11, 20] },
      { id: 3, title: "The Roof of the World (High Mountain Peaks)", pages: [21, 30] },
      { id: 4, title: "The Twilight Trench (The Abyssal Deep Sea)", pages: [31, 40] },
      { id: 5, title: "The Boiling Craters (Volcanic & Hydrothermal Vents)", pages: [41, 50] },
      { id: 6, title: "The Eternal Night (Subterranean Karst Caves)", pages: [51, 60] },
      { id: 7, title: "The Great Monsoon Torrent (Flooded Forests & Swamps)", pages: [61, 70] },
      { id: 8, title: "The Firelands & Droughtveld (Bushfires & Drylands)", pages: [71, 80] },
      { id: 9, title: "The Grand Crossing & The Sanctuary Oasis", pages: [81, 90] }
    ],
    pages: [
      // CHAPTER 1: THE FROZEN WHITEOUT (PAGES 1-10)
      {
        page: 1,
        chapter: "Chapter 1: The Frozen Whiteout",
        title: "The Blizzard of Whispering Ice",
        habitat: "Arctic Tundra & Sea Ice",
        story: "The biting gale shrieked across the endless expanse of frozen sea ice. Maya the young snow-leopard expedition scout paused as blinding snow swirled around her whiskers. Beside her, Nanuk the polar bear pushed forward into the howling wind without flinching. Even though the air temperature had plummeted to minus fifty degrees Celsius, Nanuk seemed completely cozy inside his thick white coat.",
        factTitle: "Transparent Hollow Solar Fur",
        fact: "A polar bear's fur isn't actually white! Each hair is a transparent, hollow tube that traps solar heat and reflects ambient light, while the skin beneath is jet black to absorb every photon of warmth."
      },
      {
        page: 2,
        chapter: "Chapter 1: The Frozen Whiteout",
        title: "The Great Huddle of Emperor Penguins",
        habitat: "Antarctic Ice Shelf",
        story: "Moving further south into the frozen wastes, Maya encountered a massive circular fortress of feathers. Hundreds of emperor penguins stood shoulder-to-shoulder against screaming winds. Slowly, methodically, birds on the frigid outer edge stepped inwards, while warm birds in the center took their turn shielding their companions.",
        factTitle: "The Rotating Thermal Huddle",
        fact: "Emperor penguins take turns standing on the freezing outer perimeter of massive rotating huddles. Inside the dense center, ambient temperatures can reach a cozy 37°C (99°F), preventing any bird from freezing."
      },
      {
        page: 3,
        chapter: "Chapter 1: The Frozen Whiteout",
        title: "Frostwalker's Snowshoe Secrets",
        habitat: "Arctic Pack Ice",
        story: "A flash of silver darted over the razor-sharp crust of ice. Kiko the arctic fox trotted lightly alongside the team, making no sound at all. Where Maya's paws felt the sting of subzero frost, Kiko's paws stepped warmly as if he wore boots lined with down feathers.",
        factTitle: "Fur-Lined Footpads",
        fact: "The Arctic fox is the only canid species whose footpads are completely covered in dense, thick fur. This acts like natural thermal snowshoes, insulating delicate foot tissues against ice."
      },
      {
        page: 4,
        chapter: "Chapter 1: The Frozen Whiteout",
        title: "The Creature That Froze Solid",
        habitat: "Sub-Arctic Peat Bog",
        story: "Beneath a blanket of frosted moss, the travelers discovered a tiny wood frog lying motionless, hard as stone. Maya gasped, thinking the creature had perished. But the guide smiled: 'Wait for spring thaw. His heart has stopped, yet life waits inside like an ember.'",
        factTitle: "Natural Cryoprotectant Antifreeze",
        fact: "Wood frogs survive freezing winters by packing their cells with glucose and urea. Up to 65% of their bodily water can freeze into solid ice while vital organs remain perfectly protected."
      },
      {
        page: 5,
        chapter: "Chapter 1: The Frozen Whiteout",
        title: "The Spiral Spear of the Deep Ice",
        habitat: "Glacial Leads & Ocean Fjord",
        story: "A narrow crack split the polar sea ice, revealing dark, crystal-clear water. Suddenly, a spiral ivory tusk broke through the surface! A narwhal blew a misty breath into the freezing air, turning its sensory horn towards the distant open ocean.",
        factTitle: "The Ten-Million Nerve Tusk",
        fact: "A narwhal's spiral tusk is an elongated canine tooth packed with over 10 million sensory nerve endings. It detects tiny changes in water salinity, temperature, and atmospheric pressure."
      },
      {
        page: 6,
        chapter: "Chapter 1: The Frozen Whiteout",
        title: "The Blubber Shield of the Floes",
        habitat: "Bering Sea Ice Floes",
        story: "Resting on a floating berg was a giant bull walrus, snoring peacefully while icy waves crashed over his flank. His skin turned pale pink under the Arctic sun as he regulated his core blood flow, unbothered by the freezing spray.",
        factTitle: "Four Inches of Thermal Blubber",
        fact: "A walrus is insulated by a layer of blubber up to 4 inches (10 cm) thick that makes up a third of its entire body weight, shielding inner vital organs against near-freezing polar seawater."
      },
      {
        page: 7,
        chapter: "Chapter 1: The Frozen Whiteout",
        title: "Acoustic Lens in the Frozen Maze",
        habitat: "High Arctic Open Water",
        story: "Lost in a maze of shifting pack ice, the expedition heard a chorus of high-pitched trills and whistles. A pod of white beluga whales surfaced in unison. Their round, bulbous foreheads shifted shape as they scanned the ice maze ahead.",
        factTitle: "The Flexible Melon Sonar",
        fact: "Belugas can physically change the shape of their forehead 'melon'—a fatty acoustic lens—to focus sound waves, allowing them to locate tiny breathing holes in solid pack ice miles away."
      },
      {
        page: 8,
        chapter: "Chapter 1: The Frozen Whiteout",
        title: "Nests Carved in Glacier Cliffs",
        habitat: "Inland Antarctic Nunataks",
        story: "Climbing sheer glacial rocks over two hundred miles inland from the sea, Maya marveled at tiny white snow petrels nesting on barren, sub-zero stone ledges where no green plant had ever grown.",
        factTitle: "Sub-Zero Cliff Dwellers",
        fact: "Snow petrels breed further south than almost any other bird on Earth, flying hundreds of miles over ice to nest on Antarctic inland nunataks and defending their eggs with foul-smelling stomach oil."
      },
      {
        page: 9,
        chapter: "Chapter 1: The Frozen Whiteout",
        title: "The Golden Wool of the Muskox",
        habitat: "Canadian Arctic Tundra",
        story: "A howling blizzard battered the tundra plain, but a ring of shaggy muskox stood like an ancient stone fortress, their long brown skirts swaying in sixty-mile-per-hour gusts while tiny calves huddled safely inside the circle.",
        factTitle: "Qiviut: Nature's Warmest Coat",
        fact: "Muskox have an underwool called qiviut that is eight times warmer than sheep's wool and softer than cashmere. It does not shrink when wet and keeps the muskox warm down to -70°C (-94°F)."
      },
      {
        page: 10,
        chapter: "Chapter 1: The Frozen Whiteout",
        title: "Blood of Glass and Crystal",
        habitat: "Southern Ocean Sub-Zero Depths",
        story: "Before bidding farewell to the ice kingdom, the team peered into the polar depths where a pale, ghostly icefish glided effortlessly. Its translucent gills glowed faintly against the midnight blue brine.",
        factTitle: "Antifreeze Glycoproteins & Clear Blood",
        fact: "Antarctic icefish have zero hemoglobin in their blood, making it completely clear. They produce specialized antifreeze glycoproteins that bind to microscopic ice crystals so their blood never freezes."
      },

      // CHAPTER 2: THE BLAZING DUNES (PAGES 11-20)
      {
        page: 11,
        chapter: "Chapter 2: The Blazing Dunes",
        title: "The Shifting Sea of Gold",
        habitat: "Sahara Desert Erg",
        story: "Leaving the ice behind, the expedition crossed into an ocean of rolling golden sand where midday heat pushed the mercury to 52°C. A ferocious haboob wind blew blinding dust, but Zahra the dromedary camel stepped forward without blinking.",
        factTitle: "Sealing Slit Nostrils & Double Eyelashes",
        fact: "Camels have muscular nostrils they can squeeze completely shut during violent sandstorms, along with two rows of interlocking extra-long eyelashes and a clear third eyelid."
      },
      {
        page: 12,
        chapter: "Chapter 2: The Blazing Dunes",
        title: "Water Secrets in the Bloodstream",
        habitat: "Hyper-Arid Salt Flats",
        story: "Three days without an oasis did not slow Zahra down. Maya worried the camel was parched, but the caravan elder explained that Zahra's true superpower was not water in her hump, but resilience in her veins.",
        factTitle: "Oval Red Blood Cells",
        fact: "Camels store fat (energy), not water, in their humps. Their red blood cells are unique oval disks that can flow smoothly through thick, dehydrated blood and safely expand to 240% volume during drinking."
      },
      {
        page: 13,
        chapter: "Chapter 2: The Blazing Dunes",
        title: "Radar Ears in the Twilight",
        habitat: "Desert Scrubland",
        story: "As dusk painted the dunes purple, a tiny creature with huge triangular ears emerged from a cool burrow. Rusty the fennec fox tilted his head, listening to the movement of a beetle three inches beneath the sand.",
        factTitle: "Ears That Radiate Heat",
        fact: "A fennec fox's ears are up to 6 inches long—nearly half its body length! They are lined with dense capillaries that radiate body heat away into the night air like biological cooling fins."
      },
      {
        page: 14,
        chapter: "Chapter 2: The Blazing Dunes",
        title: "The Lizard That Drinks With Its Feet",
        habitat: "Australian Great Sandy Desert",
        story: "Scorching dry winds blew across cracked red dirt. Maya watched a thorny devil stand motionlessly in a tiny puddle of morning dew. To her amazement, moisture seemed to climb upward across its prickly skin like ink on a paper towel!",
        factTitle: "Capillary Micro-Groove Skin",
        fact: "The thorny devil's scales have microscopic capillary channels between them. When its feet touch moisture or dew, capillary action pulls water upward directly into the corners of its mouth."
      },
      {
        page: 15,
        chapter: "Chapter 2: The Blazing Dunes",
        title: "The Mouse That Never Drank Water",
        habitat: "Mojave Desert Basin",
        story: "Deep beneath the sun-baked crust, a tiny kangaroo rat rested inside its underground pantry. In its entire life, it had never visited a river or tasted a raindrop, yet its eyes were bright and its whiskers twitching.",
        factTitle: "Super-Concentrated Kidney Alchemy",
        fact: "Kangaroo rats can survive their entire lives without drinking liquid water. Their super-efficient kidneys extract metabolic water directly from dry seeds, producing urine five times more concentrated than humans."
      },
      {
        page: 16,
        chapter: "Chapter 2: The Blazing Dunes",
        title: "Harvesting Clouds on Foggy Ridges",
        habitat: "Namib Coastal Dunes",
        story: "At dawn, ocean fog rolled over the razor-edge crest of a tall dune. A black Namib beetle stood on its head, pointing its rear end up into the ocean breeze as tiny water droplets formed on its textured shell.",
        factTitle: "The Fog-Basking Beetle",
        fact: "The Stenocara beetle has bumpy hydrophobic ridges on its back that condense airborne sea fog into water droplets. The droplets roll down smooth wax channels straight into the beetle's mouth."
      },
      {
        page: 17,
        chapter: "Chapter 2: The Blazing Dunes",
        title: "The Sidewinder's Skipping Track",
        habitat: "Sonoran Desert Sands",
        story: "The midday sand was hot enough to fry an egg. Instead of slithering on its belly, a horned sidewinder moved diagonally in graceful rolling loops, leaving J-shaped tracks in the golden dust.",
        factTitle: "Two-Point Thermal Looping",
        fact: "Sidewinder rattlesnakes move in an S-shaped lateral wave where only two tiny sections of their body touch the 60°C (140°F) sand at any single split-second, preventing thermal overheating."
      },
      {
        page: 18,
        chapter: "Chapter 2: The Blazing Dunes",
        title: "The Cocoon of Sleeping Clay",
        habitat: "Chihuahuan Arid Playa",
        story: "For two blistering years, no rain fell on the baked cracked clay. But deep underground in a humid chamber, a desert spadefoot toad slept soundly inside a glistening transparent cocoon made from shed layers of skin.",
        factTitle: "Estivation Inside Shed Skin Cocoons",
        fact: "Spadefoot toads survive multi-year droughts by burrowing several feet underground and locking themselves in a waterproof cocoon of dried skin layers, waking only when thunder vibrations shake the soil."
      },
      {
        page: 19,
        chapter: "Chapter 2: The Blazing Dunes",
        title: "The Silver Bullet of the Midday Sun",
        habitat: "Sahara Salt Flats",
        story: "When the sun reached its zenith and every predator retreated into shade, tiny silvery flashes burst across the blinding dunes. Saharan silver ants sprinted across the sand like glittering shooting stars.",
        factTitle: "Prismatic Heat-Reflecting Hairs",
        fact: "Saharan silver ants possess triangular-shaped hairs that reflect visible and infrared sunlight like miniature prisms. They can withstand temperatures up to 53.6°C (128.5°F) while foraging."
      },
      {
        page: 20,
        chapter: "Chapter 2: The Blazing Dunes",
        title: "Nomads of the Waterless Waste",
        habitat: "Central Saharan Sand Sea",
        story: "On the distant horizon, a herd of pale addax antelopes trotted steadily over loose shifting sand. They moved with relaxed ease, their splayed hooves gliding like snowshoes across dunes that swallowed normal footsteps.",
        factTitle: "Splayed Hooves & Water-Extracting Diet",
        fact: "Addax antelopes have wide, flat splayed hooves that prevent them from sinking into dunes. They survive without freestanding water by grazing on succulents and desert melons before sunrise."
      },

      // CHAPTER 3: THE ROOF OF THE WORLD (PAGES 21-30)
      {
        page: 21,
        chapter: "Chapter 3: The Roof of the World",
        title: "The Ghost of the Vertical Crags",
        habitat: "Himalayan Cliffs",
        story: "Leaving the burning sands, the travelers ascended into thin mountain air where razor-sharp cliffs rose into the clouds. A snow leopard stood on a rock spire only inches wide, its massive furry tail curving like a gymnast's balance beam.",
        factTitle: "The Counterweight Tail & Big Nasal Cavity",
        fact: "A snow leopard's tail is up to 3 feet long and acts as a counterweight when leaping 50 feet across gorges. Its oversized nasal cavities warm frigid, thin mountain air before it reaches the lungs."
      },
      {
        page: 22,
        chapter: "Chapter 3: The Roof of the World",
        title: "Defying Gravity on Sheer Rock",
        habitat: "Gran Paradiso Alpine Peaks",
        story: "Maya gripped the rope tightly as sheer granite dropped thousands of feet below. Above her, an Alpine ibex stepped casually across near-vertical stone, licking mineral salts from tiny rock crevices.",
        factTitle: "Concave Rubbery Hoof Cushions",
        fact: "Ibex hooves have hard, sharp outer edges for grabbing tiny cracks and soft, rubbery concave centers that act like suction cups, allowing them to scale 90-degree dam walls and cliffs."
      },
      {
        page: 23,
        chapter: "Chapter 3: The Roof of the World",
        title: "The Flight Over Mount Everest",
        habitat: "Himalayan Jet Stream",
        story: "A flock of bar-headed geese flew high in the troposphere, passing directly over the icy peak of Mount Everest. Where human mountaineers gasped for bottled oxygen, the geese honked joyfully in the thin sky.",
        factTitle: "High-Affinity Oxygen Hemoglobin",
        fact: "Bar-headed geese possess specialized hemoglobin that binds oxygen exceptionally fast in thin air, along with dense muscle capillaries that allow them to fly above 29,000 feet without resting."
      },
      {
        page: 24,
        chapter: "Chapter 3: The Roof of the World",
        title: "The High-Altitude Engine",
        habitat: "Tibetan Plateau Steppes",
        story: "Through blinding gale-force sleet, a shaggy black yak plodded steadily up the rocky pass. Its rhythmic breathing was calm and deep, untroubled by the atmospheric pressure that made Maya's head spin.",
        factTitle: "Triple Lung Capacity & Giant Red Blood Cells",
        fact: "Himalayan yaks have three times the lung capacity of ordinary cattle, a larger heart, and smaller, more abundant red blood cells that transport oxygen efficiently at 15,000 feet elevation."
      },
      {
        page: 25,
        chapter: "Chapter 3: The Roof of the World",
        title: "The Tiny Haymaker of the Scree",
        habitat: "Rocky Alpine Scree",
        story: "A sharp 'Eeep!' echoed from a boulder pile. A round, fluffy pika rushed back and forth, carrying bouquets of mountain wildflowers in its mouth and spreading them out on flat warm rocks to dry.",
        factTitle: "Underground Winter Hay Caches",
        fact: "Pikas do not hibernate in winter. Instead, they harvest hundreds of pounds of mountain vegetation during short summers, curing it into nutritious 'hay piles' tucked deep into insulating rock crevasses."
      },
      {
        page: 26,
        chapter: "Chapter 3: The Roof of the World",
        title: "Gliding on Mountain Thermals",
        habitat: "Andean Mountain Canyons",
        story: "High above a yawning gorge, a magnificent Andean condor spread its ten-foot wings. For over two hours, the giant bird soared gracefully without flapping its wings a single time.",
        factTitle: "Riding Thermal Updrafts for 100 Miles",
        fact: "Andean condors can soar for over 100 miles (160 km) without a single wingbeat by locating and riding warm thermal updrafts swirling off steep mountain cliff faces."
      },
      {
        page: 27,
        chapter: "Chapter 3: The Roof of the World",
        title: "The Golden Fleece of the Altiplano",
        habitat: "High Andean Plateau",
        story: "A graceful herd of vicuñas trotted across the freezing Altiplano plateau at 14,000 feet. Despite sub-zero winds, their slender bodies remained cozy inside the softest, warmest wool in the animal kingdom.",
        factTitle: "Hollow-Cored Ultra-Fine Fibers",
        fact: "Vicuña wool fibers are hollow, trapping an insulating barrier of air against freezing winds. The fibers are less than 12 microns thick—twice as fine as cashmere!"
      },
      {
        page: 28,
        chapter: "Chapter 3: The Roof of the World",
        title: "The Sixty-Hair Blanket",
        habitat: "Rocky Andean Foothills",
        story: "Huddled between two cold granite boulders, a chinchilla washed its whiskers. Maya gently touched its velvety coat, astounded by the unbelievable plush density beneath her fingers.",
        factTitle: "Dense Fur Follicles",
        fact: "While humans usually have one hair per follicle, chinchillas have up to 60 ultra-fine hairs sprouting from every single follicle—yielding the densest fur of any land animal on Earth."
      },
      {
        page: 29,
        chapter: "Chapter 3: The Roof of the World",
        title: "The Bone-Crusher of the Crags",
        habitat: "High Mountain Ranges",
        story: "A majestic bearded vulture—the lammergeier—dropped a massive dry sheep bone from 300 feet onto a flat rock table below. The bone shattered into fragments, which the bird swallowed whole.",
        factTitle: "Stomach Acid of pH 1",
        fact: "The lammergeier is the only vertebrate whose diet is 85-90% bone. Its stomach acid has a pH lower than 1 (more acidic than battery acid), easily dissolving dense bone calcium within 24 hours."
      },
      {
        page: 30,
        chapter: "Chapter 3: The Roof of the World",
        title: "Breath of the Sky Nomad",
        habitat: "Qinghai-Tibet Plateau",
        story: "Across the windy highlands, a herd of chiru (Tibetan antelopes) sprinted at 50 miles per hour across rocky soil. Their distinctive puffed muzzles flared wide as they drew in the thin mountain air.",
        factTitle: "Inflated Nasal Air Conditioning",
        fact: "Tibetan antelopes have swollen, inflatable nasal sacs that warm, moisten, and filter freezing thin air before it hits their bronchial passages, allowing sustained high-speed sprints at 16,000 feet."
      },

      // CHAPTER 4: THE TWILIGHT TRENCH (PAGES 31-40)
      {
        page: 31,
        chapter: "Chapter 4: The Twilight Trench",
        title: "The Lantern in the Abyss",
        habitat: "Midnight Ocean Zone (Bathypelagic)",
        story: "The expedition embarked aboard a deep-diving exploration submersible, descending past the reach of sunlight into midnight darkness. Suddenly, a pale blue glowing orb drifted past the viewport—the lure of an anglerfish.",
        factTitle: "Bioluminescent Symbionts",
        fact: "The deep-sea anglerfish's glowing lure (the esca) is filled with millions of bioluminescent bacteria (Photobacterium) that produce light through a chemical luciferin reaction in pitch-black waters."
      },
      {
        page: 32,
        chapter: "Chapter 4: The Twilight Trench",
        title: "Eyes the Size of Dinner Plates",
        habitat: "Antarctic Abyssal Waters",
        story: "Descending through 3,000 feet, a colossal shape materialized in the murky depths. Giant tentacles curled gracefully as an eye the size of a dinner plate turned toward the submersible's headlights.",
        factTitle: "Eleven-Inch Light Gathering Eyes",
        fact: "Colossal squids possess the largest eyes in the animal kingdom, measuring up to 11 inches (27 cm) across. They are optimized to detect the faint bioluminescent silhouettes of approaching sperm whales."
      },
      {
        page: 33,
        chapter: "Chapter 4: The Twilight Trench",
        title: "Armor Under Crushing Depths",
        habitat: "Mariana Trench (Hadopelagic)",
        story: "At seven miles deep, the water pressure reached an unimaginable eight tons per square inch. Yet translucent deep-sea amphipods swam gracefully over the sediment, unaffected by the weight of the ocean.",
        factTitle: "Piezolyte Cellular Pressure Shields",
        fact: "Creatures living thousands of meters deep produce high concentrations of organic molecules called piezolytes (such as TMAO) that prevent cellular proteins and enzymes from collapsing under crushing pressure."
      },
      {
        page: 34,
        chapter: "Chapter 4: The Twilight Trench",
        title: "Blue Blood of the Oxygen Minimum",
        habitat: "Oxygen Minimum Zone",
        story: "In a layer of ocean with almost no dissolved oxygen, a vampire squid hovered motionlessly like an umbrella of dark crimson velvet, its glowing blue photophores pulsing slowly at the tips of its arms.",
        factTitle: "Copper-Based Hemocyanin Affinity",
        fact: "The vampire squid survives in water with less than 3% oxygen saturation by using copper-based hemocyanin blood that binds oxygen with extraordinary efficiency, paired with an ultra-slow metabolic rate."
      },
      {
        page: 35,
        chapter: "Chapter 4: The Twilight Trench",
        title: "The Pelican of the Void",
        habitat: "Abyssal Pelagic Plain",
        story: "A long, ribbon-like gulper eel undulated past the viewport. Its jaws appeared larger than the rest of its entire body, hinged loosely like an expandable net waiting for an opportunistic meal.",
        factTitle: "Expandable Jaws for Rare Feasts",
        fact: "Because food is scarce in the deep ocean, the gulper eel has loosely hinged jaws and an expandable stomach that can swallow prey significantly larger than itself to store vital energy."
      },
      {
        page: 36,
        chapter: "Chapter 4: The Twilight Trench",
        title: "Furry Farmers of the Chimneys",
        habitat: "Hydrothermal Vent Fields",
        story: "Beside a bubbling fissure where boiling black mineral water gushed from the seabed, hundreds of ghostly white yeti crabs waved their bristly, fur-covered pincers in the warm thermal currents.",
        factTitle: "Farming Epibiotic Bacteria on Pincers",
        fact: "Yeti crabs wave their bristled claws in mineral-rich hydrothermal vent plumes to cultivate thick mats of chemosynthetic bacteria, which they then scrape off and eat as their primary food."
      },
      {
        page: 37,
        chapter: "Chapter 4: The Twilight Trench",
        title: "Dancing Under Four Thousand Atmospheres",
        habitat: "Abyssal Benthic Zone",
        story: "A charming dumbo octopus flapped its ear-like fins, hovering effortlessly above the abyssal mud like an underwater elephant. It possessed no hard shell, no rigid bones, and no ink sac.",
        factTitle: "Gelatinous Incompressible Tissues",
        fact: "Dumbo octopuses lack rigid internal skeletons and ink sacs, having soft, gelatinous bodies that are virtually immune to pressure because liquids and water-filled tissues cannot be compressed."
      },
      {
        page: 38,
        chapter: "Chapter 4: The Twilight Trench",
        title: "The Fish With a Transparent Skull",
        habitat: "Mesopelagic Twilight Zone",
        story: "A strange and wondrous fish drifted by with a completely transparent, fluid-filled dome over its head. Inside its glass-like skull, two bright emerald-green tubular eyes rotated upward toward the surface.",
        factTitle: "Rotating Green Tubular Eyes",
        fact: "The barreleye fish has a transparent shield on its head protecting two upward-pointing tubular eyes that can rotate forward to spot bioluminescent prey illuminated against downwelling sunlight."
      },
      {
        page: 39,
        chapter: "Chapter 4: The Twilight Trench",
        title: "Torches Beneath the Ocean Waves",
        habitat: "Deep Coral Seamounts",
        story: "Suddenly, a constellation of twinkling green lights flickered in the blackness. A school of flashlight fish swam in sync, snapping their sub-ocular light organs on and off like submarine Morse code.",
        factTitle: "Shutter-Controlled Photophore Torches",
        fact: "Flashlight fish possess bean-shaped pockets of glowing symbiotic bacteria beneath their eyes, which they can turn off instantly using muscular black skin flaps like window shades."
      },
      {
        page: 40,
        chapter: "Chapter 4: The Twilight Trench",
        title: "The Five-Year Fast of the Deep",
        habitat: "Abyssal Seabed Plains",
        story: "Resting on the ocean floor, a giant isopod looked up with large reflective eyes. When whale falls or carrion drop from above, it feasts voraciously, but between meals, its internal clock slows to a gentle crawl.",
        factTitle: "Ultra-Low Metabolic Hibernation",
        fact: "Giant isopods can slow their basal metabolic rate to near zero in the cold abyssal waters, with one specimen in a Japanese aquarium surviving over five continuous years without eating a single meal."
      },

      // CHAPTER 5: THE BOILING CRATERS (PAGES 41-50)
      {
        page: 41,
        chapter: "Chapter 5: The Boiling Craters",
        title: "The Worm in the Boiling Cauldron",
        habitat: "Deep Pacific Hydrothermal Vents",
        story: "Emerging from the submarine into a volcanic trench, the crew investigated towering black smoker chimneys spewing 350°C superheated water. Clinging to the rock walls was a colony of Pompeii worms.",
        factTitle: "Surviving in 80°C (176°F) Water",
        fact: "The Pompeii worm is one of the most heat-tolerant animals known, resting its tail in water up to 80°C (176°F) while protected by a dense fleece of heat-absorbing epibiotic bacteria on its back."
      },
      {
        page: 42,
        chapter: "Chapter 5: The Boiling Craters",
        title: "The Snail With Iron Armor",
        habitat: "Indian Ocean Vent Fields",
        story: "On the base of a mineral spire, Maya examined a remarkable snail. Its shell was covered in scales of dark metallic iron that clicked like miniature knight's armor against her sample scoop.",
        factTitle: "Magnetic Iron Sulfide Armor",
        fact: "The scaly-foot gastropod builds a multi-layered shell reinforced with iron sulfides (pyrite and greigite) drawn from mineral vents, making it the only animal known to incorporate iron into its skeleton."
      },
      {
        page: 43,
        chapter: "Chapter 5: The Boiling Craters",
        title: "Dancing on Lakes of Caustic Soda",
        habitat: "East African Rift Valley (Lake Natron)",
        story: "The expedition returned to dry land near the steaming rim of a volcanic lake. The crimson water was burning hot and caustic enough to strip paint, yet two million lesser flamingos danced gracefully on its surface.",
        factTitle: "Leathery Alkaline-Resistant Legs",
        fact: "Lesser flamingos wade safely in toxic alkaline soda lakes with a pH up to 10.5 because their legs are covered in tough, leathery skin that prevents corrosive caustic chemicals from penetrating."
      },
      {
        page: 44,
        chapter: "Chapter 5: The Boiling Craters",
        title: "Creatures Without Mouths or Stomachs",
        habitat: "Hydrothermal Rift Vents",
        story: "Eight-foot-long giant tube worms swayed like underwater red flowers inside white porcelain tubes near a boiling hydrothermal vent. Maya was amazed to discover they possessed neither mouths nor digestive tracts.",
        factTitle: "100% Chemosynthetic Symbiosis",
        fact: "Riftia tube worms have no mouth, gut, or digestive organs. They rely entirely on billions of endosymbiotic bacteria inside an organ called a trophosome that convert toxic hydrogen sulfide into organic nutrients."
      },
      {
        page: 45,
        chapter: "Chapter 5: The Boiling Craters",
        title: "Hot Springs of Boiling Fire",
        habitat: "Geothermal Calderas",
        story: "Steam rose from turquoise geyser pools where bubbling mineral water hissed against volcanic rock. Inside the steaming shallows, tiny brine shrimp darted playfully through water hot enough to steep tea.",
        factTitle: "Heat-Shock Protective Proteins",
        fact: "Extremophile brine shrimp and thermophiles produce specialized molecular chaperones called heat-shock proteins that prevent vital cellular enzymes from denaturing in scalding geothermal springs."
      },
      {
        page: 46,
        chapter: "Chapter 5: The Boiling Craters",
        title: "The Caldera Climbers",
        habitat: "Galapagos Volcanic Rim",
        story: "Hiking along the steaming rim of an active volcano on Fernandina Island, the team watched yellow land iguanas climb down steep volcanic slopes directly into the smoking caldera to dig their nesting burrows.",
        factTitle: "Using Earth's Volcanic Heat as Incubators",
        fact: "Galapagos land iguanas hike miles into active volcanic craters to bury their eggs in warm geothermal ash, allowing natural geothermal heat to incubate their clutches without maternal brooding."
      },
      {
        page: 47,
        chapter: "Chapter 5: The Boiling Craters",
        title: "Burrows in Warm Volcanic Sand",
        habitat: "Melanesian Volcanic Islands",
        story: "Near active steam vents on a tropical island, a male megapode bird tested the warm volcanic soil with his sensitive beak, carefully scooping sand in and out of a massive mound over his mate's eggs.",
        factTitle: "Tongue Thermometers in Volcanic Ash",
        fact: "Male megapodes use heat sensors in their beaks and tongues to monitor geothermal soil temperature, adding or removing volcanic ash to keep developing eggs at an exact 33°C (91.4°F)."
      },
      {
        page: 48,
        chapter: "Chapter 5: The Boiling Craters",
        title: "Rainbow Mats of Ancient Microbes",
        habitat: "Yellowstone Geothermal Basin",
        story: "Surrounding the Great Prismatic Spring, vibrant concentric rings of bright gold, orange, and emerald spread across the scalding rock terrace, formed by trillions of ancient extremophile microbes.",
        factTitle: "Carotenoid Sunscreens in Hot Water",
        fact: "Thermophilic cyanobacteria in hot springs produce bright carotenoid pigments that act like natural sunscreens, protecting their cellular machinery from intense UV rays in near-boiling waters."
      },
      {
        page: 49,
        chapter: "Chapter 5: The Boiling Craters",
        title: "Fish of the Poison Caves",
        habitat: "Cueva del Azufre",
        story: "Inside a cavern filled with noxious volcanic hydrogen sulfide gas and dripping with natural sulfuric acid, schools of sulfur mollies swam peacefully near the surface of a milky, mineral-laden stream.",
        factTitle: "Detoxifying Lethal Hydrogen Sulfide",
        fact: "Sulfur mollies have evolved the rare ability to metabolize and detoxify deadly concentrations of hydrogen sulfide gas by skimming the oxygen-rich surface boundary layer of toxic volcanic streams."
      },
      {
        page: 50,
        chapter: "Chapter 5: The Boiling Craters",
        title: "Sanctuary of the Steaming Springs",
        habitat: "Sub-Arctic Geothermal Valleys",
        story: "As icy winter blizzards raged outside the volcanic valley, arctic birds and mammals gathered in lush green moss patches warmed by natural geothermal steam vents, creating a thriving tropical oasis in the snow.",
        factTitle: "Geothermal Microclimate Sanctuaries",
        fact: "Natural geothermal springs create warm microclimates in sub-arctic regions where plant life grows year-round, offering vital food and thermal refuges for wildlife during brutal winter freezes."
      },

      // CHAPTER 6: THE ETERNAL NIGHT (PAGES 51-60)
      {
        page: 51,
        chapter: "Chapter 6: The Eternal Night",
        title: "Eyes Lost in the Subterranean Dark",
        habitat: "Mexican Karst Caverns",
        story: "Deep beneath the earth in pitch-black limestone grottos, Maya switched off her flashlight. In the darkness, schools of blind cavefish darted effortlessly around stalagmites without bumping into a single wall.",
        factTitle: "Supercharged Lateral Line Vibrations",
        fact: "Mexican blind cavefish evolved without eyes to conserve 15% of their bodily energy. Instead, they developed super-sensitive neuromast receptors on their lateral lines that detect the tiniest water ripples."
      },
      {
        page: 52,
        chapter: "Chapter 6: The Eternal Night",
        title: "The Dragon of the Underworld",
        habitat: "Dinaric Karst Underground Rivers",
        story: "In an underground river a thousand feet beneath the Slovenian mountains, a slender, translucent white amphibian swam lazily past. Known locally as the olm or 'baby dragon', it showed zero fear of the dark.",
        factTitle: "Ten Years Without Food & 100-Year Life",
        fact: "The olm can survive for up to 10 continuous years without eating a single bite of food, lives for over 100 years, and detects prey using magnetic and electrical fields in complete darkness."
      },
      {
        page: 53,
        chapter: "Chapter 6: The Eternal Night",
        title: "Ghostly Gills in the Artesian Well",
        habitat: "Edwards Aquifer (Texas Caves)",
        story: "Peering into a crystal-clear subterranean aquifer, the team observed a Texas blind salamander. Its skin was translucent white, revealing its delicate heart, while bright red external gills fanned the still water.",
        factTitle: "External Oxygen-Harvesting Gills",
        fact: "Living in deep underground aquifers with low dissolved oxygen, the Texas blind salamander retains bright crimson external gills throughout its entire life to maximize oxygen absorption."
      },
      {
        page: 54,
        chapter: "Chapter 6: The Eternal Night",
        title: "The Ceiling of Living Stars",
        habitat: "Waitomo Glowworm Caves (New Zealand)",
        story: "Gliding on a quiet raft into the cathedral chamber of a vast limestone cave, Maya gasped in wonder. The vaulted ceiling sparkled with thousands of bioluminescent turquoise stars reflecting on the black water.",
        factTitle: "Bioluminescent Silk Fishing Lines",
        fact: "Glowworm larvae (Arachnocampa luminosa) produce blue-green light from their excretory organs to lure flying cave insects into sticky silk threads hanging like fishing lines from the ceiling."
      },
      {
        page: 55,
        chapter: "Chapter 6: The Eternal Night",
        title: "Heat-Vision in the Shadow Realm",
        habitat: "Tropical Cavern Roosts",
        story: "Suspended upside down from the cavern ceiling, a colony of common vampire bats rustled their wings. When a sleeping tapir wandered into the cave entrance, a bat took flight, homing in directly on its warmth.",
        factTitle: "Infrared Heat-Seeking Nose Pits",
        fact: "Vampire bats possess specialized infrared pit sensors near their noses packed with TRPV1 thermal proteins, allowing them to detect the exact location of warm blood vessels beneath animal fur from inches away."
      },
      {
        page: 56,
        chapter: "Chapter 6: The Eternal Night",
        title: "Clicks in the Pitch-Black Cathedral",
        habitat: "Borneo Gomantong Caves",
        story: "High up in the pitch-black domes of giant limestone caverns, thousands of swiftlets zipped through narrow twisting tunnels at top speed, making rapid, metallic clicking noises with their tongues.",
        factTitle: "Avian Echolocation Clicks",
        fact: "Cave swiftlets are among the very few birds capable of echolocation. By clicking their tongues and listening to returning echoes, they navigate intricate pitch-black cave labyrinths without colliding."
      },
      {
        page: 57,
        chapter: "Chapter 6: The Eternal Night",
        title: "The Fish in Earth's Deepest Hole",
        habitat: "Devils Hole (Nevada Desert Chasm)",
        story: "At the bottom of a 500-foot limestone fissure in the Mojave Desert, a tiny blue fish swam in an isolated underground thermal pool. For 10,000 years, its entire species had lived in an area smaller than a swimming pool.",
        factTitle: "Isolated Extreme Relict Survival",
        fact: "The Devils Hole pupfish survives in 93°F (34°C) water with very low oxygen inside a single deep geothermal cavern pool, having adapted to extreme isolation since the end of the last Ice Age."
      },
      {
        page: 58,
        chapter: "Chapter 6: The Eternal Night",
        title: "Sonar Master of the Night",
        habitat: "Limestone Karst Corridors",
        story: "A greater horseshoe bat darted through a narrow cave opening cluttered with falling water droplets. Its leaf-shaped nose pulsed rapidly as it locked onto a fluttering moth behind a stalactite.",
        factTitle: "Doppler-Shift Compensated Biosonar",
        fact: "Horseshoe bats emit constant-frequency ultrasound through their complex nose-leaves and automatically adjust their voice pitch mid-flight to compensate for Doppler shift frequency changes."
      },
      {
        page: 59,
        chapter: "Chapter 6: The Eternal Night",
        title: "Whiskers That Feel the Breath of Stone",
        habitat: "Appalachian Karst System",
        story: "On the moist cave wall, a wingless cave cricket sat motionless. Its delicate antennae were nearly four times longer than its entire body, trembling gently as it registered the faintest air draft from Maya's hand.",
        factTitle: "Air-Current Sensing Mechanoreceptors",
        fact: "Cave crickets have elongated antennae and sensory hairs on their cerci that detect microscopic changes in air pressure and drafts, warning them of approaching predators in total darkness."
      },
      {
        page: 60,
        chapter: "Chapter 6: The Eternal Night",
        title: "Ancient Scent Trackers of the Stone Rivers",
        habitat: "Ozark Subterranean Streams",
        story: "Wading through an underground river, the expedition found an albino cave crayfish with slender translucent claws. Devoid of eyes and pigment, it navigated smoothly using chemosensory hair clusters along its legs.",
        factTitle: "Slow Metabolism & 60-Year Lifespan",
        fact: "Cave crayfish can live for over 60 years due to their remarkably slow metabolism. They rely on dense chemoreceptive setae on their antennae and walking legs to detect food molecules in cave streams."
      },

      // CHAPTER 7: THE GREAT MONSOON TORRENT (PAGES 61-70)
      {
        page: 61,
        chapter: "Chapter 7: The Great Monsoon Torrent",
        title: "The Fish That Walked on Land",
        habitat: "Tropical Mangrove Mudflats",
        story: "Emerging from the caves into a tropical river delta, torrential monsoon rains flooded the banks. Scuttling across the muddy roots of a mangrove tree, a pair of mudskippers hopped gracefully out of the water.",
        factTitle: "Crutch-Walking Pectoral Fins & Gill Chambers",
        fact: "Mudskippers can breathe air through vascularized gill chambers that trap water like scuba tanks, using muscular pectoral fins like crutches to walk, skip, and climb mangrove tree roots."
      },
      {
        page: 62,
        chapter: "Chapter 7: The Great Monsoon Torrent",
        title: "The Sharpshooter of the Flooded Forest",
        habitat: "Brackish Estuary River",
        story: "Resting just beneath the surface of the flooded river, an archerfish spotted a caterpillar perched on a leaf five feet above the water. With surgical precision, it fired a pressurized water jet, knocking the insect into the stream.",
        factTitle: "Refraction-Correcting Water Pistols",
        fact: "Archerfish press their tongue against a groove in their mouth to fire high-velocity water jets up to 6 feet away. They instinctively calculate and correct for light refraction at the water-air interface."
      },
      {
        page: 63,
        chapter: "Chapter 7: The Great Monsoon Torrent",
        title: "The Periscope of the Swamplands",
        habitat: "Flooded Amazon Igapó",
        story: "As rising floodwaters submerged the jungle forest floor, a family of capybaras swam peacefully among the treetops. Their broad heads were barely visible, keeping watchful eyes on caimans beneath the surface.",
        factTitle: "Facial Periscope Layout & Webbed Feet",
        fact: "Capybaras have their eyes, nostrils, and ears aligned on the top of their head like a hippopotamus, allowing them to remain 95% submerged while breathing and monitoring the water with webbed swimming feet."
      },
      {
        page: 64,
        chapter: "Chapter 7: The Great Monsoon Torrent",
        title: "The Electric Thunder of the Murky Deep",
        habitat: "Flooded Basin Backwaters",
        story: "In a murky pool filled with fallen tree trunks and muddy monsoon silt, Maya's battery tester suddenly beeped wildly. An eight-foot electric eel glided past, illuminating its sensory field with mild electrical pulses.",
        factTitle: "860-Volt Biological Bio-Batteries",
        fact: "Electric eels have three abdominal organs (Main, Hunter's, and Sach's) packed with electrocytes that can generate up to 860 volts and 1 ampere of current—enough to stun prey and deter large caimans."
      },
      {
        page: 65,
        chapter: "Chapter 7: The Great Monsoon Torrent",
        title: "The Floating Balloon of the River Giants",
        habitat: "Amazonian Varzea Lakes",
        story: "A gentle Amazonian manatee drifted through flooded canopies, munching on floating aquatic grasses. Despite its massive size, it rose and sank through the water with effortless, weightless control.",
        factTitle: "Heavy Solid Ribs as Diving Weights",
        fact: "Manatees have extremely dense, solid rib bones without marrow cavities that act like a scuba diver's weight belt, counteracting buoyant digestive gas and allowing effortless neutral buoyancy control."
      },
      {
        page: 66,
        chapter: "Chapter 7: The Great Monsoon Torrent",
        title: "Running on Water Across the Rapids",
        habitat: "Central American Rainforest Rivers",
        story: "Startled by a falling branch, an emerald-green basilisk lizard dropped from a tree and sprinted upright directly across the surface of the rushing river, churning tiny white ripples beneath its feet.",
        factTitle: "Air Cavity Slapping at 5 Feet Per Second",
        fact: "The green basilisk ('Jesus Christ lizard') runs across water by slapping its fringed toes into the surface at rapid speed, trapping small air pockets that provide upward hydrodynamic lift."
      },
      {
        page: 67,
        chapter: "Chapter 7: The Great Monsoon Torrent",
        title: "The Tree-Climbing Lung of the Tide",
        habitat: "Mangrove Forest Canopies",
        story: "As the monsoon storm drove towering ocean tides into the delta, red mangrove crabs scurried up the tree trunks, grazing on green leaves high above the surging waves.",
        factTitle: "Vascularized Aerial Gill Chambers",
        fact: "Mangrove tree-climbing crabs have specialized folded vascular gills that absorb oxygen directly from moist air, allowing them to live out of water for weeks while avoiding marine predators."
      },
      {
        page: 68,
        chapter: "Chapter 7: The Great Monsoon Torrent",
        title: "Claws on Dinosaur Wings",
        habitat: "Flooded Oxbow Lagoon",
        story: "Near the river edge, a young hoatzin chick spotted a hawk and plunged into the river below. After swimming underwater to safety, it used two tiny clawed fingers on its wing joints to climb back up the thorny vines.",
        factTitle: "Wing Claws in Modern Birds",
        fact: "Hoatzin chicks are born with functional claws on their wing digits reminiscent of ancient Archaeopteryx. They use these claws to climb trees after diving into floodwaters to escape aerial predators."
      },
      {
        page: 69,
        chapter: "Chapter 7: The Great Monsoon Torrent",
        title: "The Barking Alarm in the Torrent",
        habitat: "Turbid Floodwaters",
        story: "As the swollen river churned with muddy sediment, Maya heard sharp clicking barks underwater through the hydrophone. A school of red-bellied piranhas circled, drumming warning vibrations through the murk.",
        factTitle: "Sonic Muscle Swim-Bladder Barking",
        fact: "Piranhas produce acoustic sounds resembling dog barks and drumbeats by rapidly contracting sonic muscles against their resonant gas bladders to communicate territory in muddy floodwaters."
      },
      {
        page: 70,
        chapter: "Chapter 7: The Great Monsoon Torrent",
        title: "Sleeping in Mud for Four Years",
        habitat: "Drying Floodplains",
        story: "When the monsoon abruptly receded and the muddy marsh baked into hard dry clay, an ancient African lungfish burrowed deep into the sediment, wrapping itself in a glossy sleeping cocoon.",
        factTitle: "Four-Year Mucus Estivation & True Lungs",
        fact: "African lungfish have true lungs rather than gills for breathing air. When floodwaters dry up, they secrete a mucus cocoon and can survive estivating in dry mud without food or water for up to 4 years."
      },

      // CHAPTER 8: THE FIRELANDS & DROUGHTVELD (PAGES 71-80)
      {
        page: 71,
        chapter: "Chapter 8: The Firelands & Droughtveld",
        title: "Footsteps That Hear the Distant Rain",
        habitat: "African Acacia Savanna",
        story: "Entering a vast savanna scorched by months of severe drought, an elephant matriarch suddenly stopped. She placed the flat soles of her front feet firmly against the dry red earth, turning her ears toward the horizon.",
        factTitle: "Seismic Ground Vibration Detection",
        fact: "Elephants possess sensitive Pacinian corpuscle mechanoreceptors in their footpads and trunk tips that detect low-frequency seismic vibrations from thunderclouds and footfalls over 100 miles away."
      },
      {
        page: 72,
        chapter: "Chapter 8: The Firelands & Droughtveld",
        title: "Steered by the Milky Way",
        habitat: "Arid Bushveld",
        story: "Under the glittering canopy of a desert night sky, a small dung beetle rolled a perfectly spherical ball across the dry savanna, moving in a dead-straight line without ever veering off course.",
        factTitle: "Milky Way Celestial Navigation",
        fact: "African dung beetles are the only known insects that navigate using the polarization of starlight and the streak of the Milky Way galaxy, allowing them to roll their food in straight lines away from competitors."
      },
      {
        page: 73,
        chapter: "Chapter 8: The Firelands & Droughtveld",
        title: "Surviving the Wall of Flame",
        habitat: "Australian Eucalyptus Bush",
        story: "A raging bushfire swept through the dry eucalyptus forest with terrifying speed. While birds took to the sky, a short-beaked echidna dug vigorously straight down into the dirt, burying itself beneath the flames.",
        factTitle: "Subterranean Torpor in Wildfires",
        fact: "When bushfires strike, echidnas burrow deep into cool, moist soil and enter a temporary torpor state, dropping their heart rate and body temperature until the intense firestorm passes overhead."
      },
      {
        page: 74,
        chapter: "Chapter 8: The Firelands & Droughtveld",
        title: "The Water Tank of the Savanna",
        habitat: "Arid Baobab Woodland",
        story: "Standing like ancient wooden towers, giant baobab trees dotted the cracked plains. While other vegetation withered in the heat, the baobabs remained lush and full of life.",
        factTitle: "Storing 30,000 Gallons in Spongy Trunks",
        fact: "A single large baobab tree can store up to 30,000 gallons (120,000 liters) of water in its fibrous, spongy trunk to survive years of brutal drought, serving as a vital moisture reservoir for wildlife."
      },
      {
        page: 75,
        chapter: "Chapter 8: The Firelands & Droughtveld",
        title: "The Firehawks of the Bush",
        habitat: "Northern Australian Savanna",
        story: "Above the smoking front of a dry grass fire, black kites and whistling kites wheeled in the updrafts. Maya gasped as a kite picked up a burning twig in its talons and dropped it into unburnt grass nearby.",
        factTitle: "Raptors Spreading Fire to Flush Prey",
        fact: "Australian raptors known as 'firehawks' (black kites and whistling kites) have been documented picking up burning embers to intentionally spread brushfires, flushing out lizards and small rodents."
      },
      {
        page: 76,
        chapter: "Chapter 8: The Firelands & Droughtveld",
        title: "Water From Leaves in the Canopy",
        habitat: "Drying Eucalyptus Forests",
        story: "High in the fork of a gum tree, a koala snoozed through the scorching afternoon heat. Despite 40°C temperatures and empty watering holes below, the marsupial was calm and hydrated.",
        factTitle: "90% Hydration From Eucalyptus",
        fact: "Koalas rarely drink standing water; they obtain over 90% of their daily hydration from eucalyptus leaves and sleep up to 20 hours a day to dramatically reduce metabolic water loss."
      },
      {
        page: 77,
        chapter: "Chapter 8: The Firelands & Droughtveld",
        title: "The Armored Shield of the Underground",
        habitat: "Australian Semiarid Scrub",
        story: "Chased by a dingo near its burrow, a wombat dove headfirst into its underground tunnel. It wedged its rear end firmly into the entrance, forming a living stone wall that blocked the predator completely.",
        factTitle: "Cartilage Rear Armor & Backward Pouch",
        fact: "Wombats have tough cartilage plates in their rumps that can deflect predator bites. Their pouches face backward so dirt does not spray onto their joeys while digging deep burrows."
      },
      {
        page: 78,
        chapter: "Chapter 8: The Firelands & Droughtveld",
        title: "Feathers of Dual Air Conditioning",
        habitat: "Arid Outback Plains",
        story: "Running alongside the expedition across the sunbaked plains was a flock of tall emus. Their feathers looked shaggy and loose, swaying in the dry breeze like natural thatched parasols.",
        factTitle: "Double-Shafted Solar Heat Shields",
        fact: "Emu feathers have double shafts that create a thick, insulating air pocket. This reflects up to 85% of solar radiation away from the body while allowing internal body heat to radiate out freely."
      },
      {
        page: 79,
        chapter: "Chapter 8: The Firelands & Droughtveld",
        title: "Natural Sunglasses of the Sentinels",
        habitat: "Kalahari Dune Country",
        story: "On a sun-bleached termite mound, a meerkat sentinel stood tall on its hind legs, staring directly into the blazing blue sky without squinting as it watched for distant martial eagles.",
        factTitle: "Dark Eye Rings as Built-In Sunglasses",
        fact: "Meerkats have dark fur patches around their eyes that act like natural sunglasses, reducing the glare of the bright sun so sentinels can scan the sky directly for approaching birds of prey."
      },
      {
        page: 80,
        chapter: "Chapter 8: The Firelands & Droughtveld",
        title: "The Fortress Beneath the Baked Earth",
        habitat: "African Highveld",
        story: "As the drought reached its peak, a massive African bullfrog squeezed into the subterranean mud beneath a drying watering hole, secreting layers of skin until it was completely sealed inside.",
        factTitle: "Forty Layers of Shed Skin Armor",
        fact: "African bullfrogs can shed up to 40 layers of skin to form a waterproof cocoon during severe droughts, slowing their metabolic rate and waiting underground until torrential rains return."
      },

      // CHAPTER 9: THE GRAND CROSSING & SANCTUARY (PAGES 81-90)
      {
        page: 81,
        chapter: "Chapter 9: The Grand Crossing & Sanctuary",
        title: "The Three-Thousand-Mile Flutter",
        habitat: "Transcontinental Migration Corridor",
        story: "Leaving the droughtveld, the expedition witnessed an orange-and-black cloud filling the sky. Millions of monarch butterflies were embarking on an epic journey across North America to high mountain firs.",
        factTitle: "Circadian Clocks & Sun Compasses",
        fact: "Monarch butterflies use circadian clocks in their antennae and sun compasses in their brains to navigate up to 3,000 miles to the exact groves in Mexico where their great-grandparents roosted."
      },
      {
        page: 82,
        chapter: "Chapter 9: The Grand Crossing & Sanctuary",
        title: "Champion of the Two Poles",
        habitat: "Global Oceanic Airway",
        story: "Gliding across the open sky was a slender white bird with a black cap. The Arctic tern dipped its beak into the wave crests, continuing its annual pole-to-pole round trip from the Arctic to Antarctica.",
        factTitle: "44,000 Miles of Daylight Every Year",
        fact: "The Arctic tern flies over 44,000 miles (70,000 km) round-trip every year, migrating from the Arctic to the Antarctic and back, soaking in more daylight than any creature on Earth."
      },
      {
        page: 83,
        chapter: "Chapter 9: The Grand Crossing & Sanctuary",
        title: "The Scent of the River of Home",
        habitat: "Pacific Coastal River Delta",
        story: "Swimming against churning whitewater rapids and leaping over waterfalls, wild Pacific salmon pushed upstream with unstoppable determination, guided by the familiar mineral scent of their birth stream.",
        factTitle: "Olfactory Memory & Magnetic Imprinting",
        fact: "Pacific salmon use magnetite crystals in their brains to navigate thousands of miles across open ocean, then use their acute sense of smell to identify the unique chemical scent of their home river."
      },
      {
        page: 84,
        chapter: "Chapter 9: The Grand Crossing & Sanctuary",
        title: "The Million Hoof March",
        habitat: "Serengeti Migration Plains",
        story: "The earth shook with the thunder of over a million wildebeest, zebras, and gazelles charging across the Mara River. They moved in unison, guided by the scent of ozone and distant thunderstorm rain.",
        factTitle: "Rain-Sensing Olfactory Navigation",
        fact: "Over 1.5 million wildebeest migrate 1,000 miles every year in an endless circle, tracking rainstorms and fresh phosphorus-rich grass by detecting rain scents from tens of miles away."
      },
      {
        page: 85,
        chapter: "Chapter 9: The Grand Crossing & Sanctuary",
        title: "The Shimmering Net of Bubbles",
        habitat: "Sub-Polar Coastal Waters",
        story: "In a stormy coastal fjord, a pod of humpback whales dove deep together. Suddenly, a spiral ring of rising bubbles broke the surface, corralling thousands of herring into a glittering ball.",
        factTitle: "Cooperative Bubble-Net Hunting",
        fact: "Humpback whales practice cooperative bubble-net hunting, where one whale blows a spiral curtain of rising bubbles to trap fish while others sing loud feeding calls before lunging together."
      },
      {
        page: 86,
        chapter: "Chapter 9: The Grand Crossing & Sanctuary",
        title: "The Warmth of the Pack",
        habitat: "Sub-Arctic Mountain Pass",
        story: "As a sudden blizzard trapped the travelers on a mountain ledge, a pack of gray wolves settled nearby. They curled tightly nose-to-tail in a warm circle, their bushy tails tucked over their faces.",
        factTitle: "The Tail-Muzzle Air Preheater",
        fact: "Wolves survive sub-zero mountain gales by curling into tight circles and wrapping their bushy tails over their noses, trapping warm exhaled breath to preheat incoming freezing air."
      },
      {
        page: 87,
        chapter: "Chapter 9: The Grand Crossing & Sanctuary",
        title: "The Map of the Waggle Dance",
        habitat: "Wild Flower Meadow",
        story: "Entering a green meadow valley, Maya observed a honeybee hive in a hollow cedar trunk. A returning scout danced a figure-eight pattern on the dark comb, sharing the coordinates of an oasis.",
        factTitle: "The Solar Angle Waggle Code",
        fact: "Honeybees communicate the exact direction and distance of remote nectar sources relative to the sun using the angle and duration of their 'waggle dance' inside the pitch-black hive."
      },
      {
        page: 88,
        chapter: "Chapter 9: The Grand Crossing & Sanctuary",
        title: "The Engineers of the Living Oasis",
        habitat: "Montane Wetland Basin",
        story: "The travelers arrived at a magnificent lush wetland where clear water pooled peacefully behind a sturdy wooden dam. Beaver kits swam happily among willows and flowering reeds.",
        factTitle: "Keystone Wetland Creation",
        fact: "Beavers are keystone ecological engineers. Their dams create resilient wetland ponds that raise groundwater tables, prevent wildfire spread, and provide safe habitats for hundreds of species."
      },
      {
        page: 89,
        chapter: "Chapter 9: The Grand Crossing & Sanctuary",
        title: "The Web of Living Wonders",
        habitat: "The Great Sanctuary Valley",
        story: "Standing at the crest of the lush Sanctuary Valley, Maya looked back across the snowy peaks, burning dunes, deep oceans, and volcanic valleys the fellowship had crossed together. Every single animal carried a unique superpower.",
        factTitle: "Interdependence & Biodiversity",
        fact: "In nature, no creature survives entirely alone. Predators, prey, pollinators, decomposers, and plants form an intricate, interdependent web where biodiversity is Earth's greatest defense."
      },
      {
        page: 90,
        chapter: "Chapter 9: The Grand Crossing & Sanctuary",
        title: "The Young Naturalist's Oath",
        habitat: "The Wildlife Sanctuary of Earth",
        story: "Maya placed her hand on her naturalist journal, smiling proudly. 'We have journeyed through Earth's harshest extremes and uncovered the secrets of survival. Now, it is our duty to protect their wild homes forever!'",
        factTitle: "Master Wilderness Survivor Badge",
        fact: "You have completed all 90 pages of Survivors of the Extreme Wild! By understanding animal adaptations and respecting wild habitats, young scientists like you ensure our wondrous planet thrives for generations to come."
      }
    ]
  };

  // ============================================================================
  // ADVENTURE BOOK READER CONTROLLER
  // ============================================================================
  class AdventureBookController {
    constructor() {
      this.book = ADVENTURE_BOOK_DATA;
      this.currentPage = 1;
      this.isNarrating = false;
      this.storageKey = 'ak_adventure_book_bookmark';
      this.savedBookmark = 1;
      this.initBookmark();
    }

    initBookmark() {
      try {
        const saved = localStorage.getItem(this.storageKey);
        if (saved) {
          const num = parseInt(saved, 10);
          if (num >= 1 && num <= this.book.totalPages) {
            this.savedBookmark = num;
          }
        }
      } catch(e) {}
    }

    saveBookmark(pageNum) {
      this.savedBookmark = pageNum;
      try {
        localStorage.setItem(this.storageKey, String(pageNum));
      } catch(e) {}
    }

    openBook(startPage = null) {
      if (startPage !== null) {
        this.currentPage = Math.max(1, Math.min(this.book.totalPages, startPage));
      } else {
        this.currentPage = this.savedBookmark || 1;
      }
      this.renderReaderModal();
    }

    closeBook() {
      this.stopNarration();
      const modal = document.getElementById('ka-adventure-book-modal');
      if (modal) {
        modal.classList.add('hidden');
      }
      document.body.style.overflow = 'auto';
    }

    goToPage(pageNum) {
      this.stopNarration();
      this.currentPage = Math.max(1, Math.min(this.book.totalPages, pageNum));
      this.saveBookmark(this.currentPage);
      this.renderPageContent();
    }

    nextPage() {
      if (this.currentPage < this.book.totalPages) {
        this.goToPage(this.currentPage + 1);
      }
    }

    prevPage() {
      if (this.currentPage > 1) {
        this.goToPage(this.currentPage - 1);
      }
    }

    toggleNarration() {
      if (this.isNarrating) {
        this.stopNarration();
      } else {
        this.startNarration();
      }
    }

    startNarration() {
      const pageData = this.book.pages[this.currentPage - 1];
      if (!pageData) return;

      const btn = document.getElementById('ka-book-narrate-btn');
      if (btn) {
        btn.innerHTML = '<span>⏹️</span> <span>Stop Voice</span>';
        btn.classList.add('speaking-active');
      }

      this.isNarrating = true;
      const textToRead = `${pageData.title}. ${pageData.story}. Real survival fact: ${pageData.factTitle}. ${pageData.fact}`;

      if (window.AK_AUDIO && window.AK_AUDIO.speakAnimalText) {
        window.AK_AUDIO.speakAnimalText(textToRead, () => {
          this.stopNarration();
        });
      }
    }

    stopNarration() {
      this.isNarrating = false;
      if (window.AK_AUDIO && window.AK_AUDIO.stopSpeech) {
        window.AK_AUDIO.stopSpeech();
      }
      const btn = document.getElementById('ka-book-narrate-btn');
      if (btn) {
        btn.innerHTML = '<span>🔊</span> <span>Read Aloud</span>';
        btn.classList.remove('speaking-active');
      }
    }

    renderReaderModal() {
      let modal = document.getElementById('ka-adventure-book-modal');
      if (!modal) {
        modal = document.createElement('div');
        modal.id = 'ka-adventure-book-modal';
        modal.className = 'ka-modal-backdrop';
        document.body.appendChild(modal);
      }

      modal.innerHTML = `
        <div class="ka-modal-box ka-book-modal-box" style="max-width: 860px; width: 94%; max-height: 92vh; display: flex; flex-direction: column; padding: 0; overflow: hidden; background: #fffbeb; border: 2px solid #f59e0b; box-shadow: 0 20px 40px rgba(180,83,9,0.35);">
          <!-- Top Navigation Header -->
          <div style="background: linear-gradient(135deg, #78350f, #92400e, #b45309); color: #ffffff; padding: 14px 20px; display: flex; justify-content: space-between; align-items: center; border-bottom: 3px solid #fde68a;">
            <div style="display: flex; align-items: center; gap: 12px;">
              <span style="font-size: 26px;">📕</span>
              <div>
                <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #fde68a; font-weight: 800;">
                  ⭐ BONUS ADVENTURE BOOK • 90 PAGES
                </div>
                <h3 style="margin: 0; font-size: 17px; font-weight: 800; color: #ffffff;">
                  ${this.book.title}
                </h3>
              </div>
            </div>
            
            <div style="display: flex; align-items: center; gap: 10px;">
              <button id="ka-book-narrate-btn" class="ka-boost-btn" style="background: #10b981; color: #fff; font-size: 12px; padding: 6px 14px; border-radius: 20px; display: flex; align-items: center; gap: 6px;" onclick="window.AK_BOOK.toggleNarration()">
                <span>🔊</span> <span>Read Aloud</span>
              </button>
              <button class="ka-modal-close-btn" style="background: rgba(255,255,255,0.2); color: #fff; border: none; width: 34px; height: 34px; border-radius: 50%; font-size: 18px; cursor: pointer; display: flex; align-items: center; justify-content: center;" onclick="window.AK_BOOK.closeBook()">✕</button>
            </div>
          </div>

          <!-- Progress & Chapter Bar -->
          <div style="background: #fef3c7; border-bottom: 1px solid #fde68a; padding: 8px 20px; display: flex; align-items: center; justify-content: space-between; font-size: 13px;">
            <div id="ka-book-chapter-title" style="font-weight: 700; color: #92400e; display: flex; align-items: center; gap: 8px;">
              <!-- Filled dynamically -->
            </div>
            <div style="display: flex; align-items: center; gap: 14px;">
              <span id="ka-book-page-counter" style="font-weight: 800; color: #b45309;">Page 1 of 90</span>
              <button style="background: transparent; border: 1px solid #d97706; color: #b45309; padding: 3px 8px; border-radius: 6px; font-size: 11px; font-weight: 700; cursor: pointer;" onclick="window.AK_BOOK.saveBookmark(window.AK_BOOK.currentPage); alert('🔖 Bookmarked Page ' + window.AK_BOOK.currentPage + '!');">
                🔖 Bookmark
              </button>
            </div>
          </div>

          <!-- Progress Bar Line -->
          <div style="background: #fde68a; height: 4px; width: 100%;">
            <div id="ka-book-progress-fill" style="background: #d97706; height: 100%; width: 1%; transition: width 0.2s ease;"></div>
          </div>

          <!-- Scrollable Book Body -->
          <div id="ka-book-body-pane" style="flex: 1; overflow-y: auto; padding: 24px 28px; background: #fffdf5;">
            <!-- Rendered by renderPageContent() -->
          </div>

          <!-- Bottom Paging Footer -->
          <div style="background: #fffbeb; border-top: 1.5px solid #fde68a; padding: 12px 20px; display: flex; justify-content: space-between; align-items: center; gap: 12px;">
            <button id="ka-book-prev-btn" class="ka-boost-btn" style="background: #ffffff; border: 1.5px solid #d97706; color: #92400e; font-weight: 700; padding: 8px 18px; border-radius: 8px;" onclick="window.AK_BOOK.prevPage()">
              ◀ Previous Page
            </button>

            <!-- Quick Page Jump Dropdown & Slider -->
            <div style="display: flex; align-items: center; gap: 8px;">
              <span style="font-size: 12px; color: #78350f; font-weight: 700;">Jump:</span>
              <select id="ka-book-page-select" style="padding: 6px 10px; border-radius: 6px; border: 1.5px solid #d97706; background: #fff; font-weight: 700; font-size: 13px; color: #78350f;" onchange="window.AK_BOOK.goToPage(parseInt(this.value, 10))">
                ${this.book.pages.map(p => `
                  <option value="${p.page}" ${p.page === this.currentPage ? 'selected' : ''}>
                    P.${p.page}: ${p.title}
                  </option>
                `).join('')}
              </select>
            </div>

            <button id="ka-book-next-btn" class="ka-boost-btn" style="background: linear-gradient(135deg, #d97706, #b45309); color: #ffffff; font-weight: 800; padding: 8px 22px; border-radius: 8px; box-shadow: 0 4px 10px rgba(180,83,9,0.3);" onclick="window.AK_BOOK.nextPage()">
              Next Page ▶
            </button>
          </div>
        </div>
      `;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';

      this.renderPageContent();
    }

    renderPageContent() {
      const pageData = this.book.pages[this.currentPage - 1];
      const bodyPane = document.getElementById('ka-book-body-pane');
      const counterEl = document.getElementById('ka-book-page-counter');
      const chapterEl = document.getElementById('ka-book-chapter-title');
      const progressEl = document.getElementById('ka-book-progress-fill');
      const selectEl = document.getElementById('ka-book-page-select');
      const prevBtn = document.getElementById('ka-book-prev-btn');
      const nextBtn = document.getElementById('ka-book-next-btn');

      if (!bodyPane || !pageData) return;

      // Update counters & selects
      if (counterEl) counterEl.innerText = `Page ${this.currentPage} of ${this.book.totalPages}`;
      if (chapterEl) chapterEl.innerHTML = `<span>🧭</span> <span>${pageData.chapter}</span> <span style="color:#d97706;">•</span> <span style="font-weight: 600; color:#b45309;">${pageData.habitat}</span>`;
      if (progressEl) progressEl.style.width = `${Math.round((this.currentPage / this.book.totalPages) * 100)}%`;
      if (selectEl) selectEl.value = this.currentPage;

      if (prevBtn) prevBtn.disabled = this.currentPage <= 1;
      if (nextBtn) {
        if (this.currentPage >= this.book.totalPages) {
          nextBtn.innerText = '🏆 Finish Book';
          nextBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
        } else {
          nextBtn.innerText = 'Next Page ▶';
          nextBtn.style.background = 'linear-gradient(135deg, #d97706, #b45309)';
        }
      }

      // Check if page 1 (show cover thumbnail intro) or page 90 (celebration completion)
      const isFirst = this.currentPage === 1;
      const isLast = this.currentPage === 90;

      bodyPane.innerHTML = `
        <div style="max-width: 760px; margin: 0 auto;">
          ${isFirst ? `
            <div style="display: flex; gap: 24px; align-items: center; margin-bottom: 24px; background: #fef3c7; border: 2px dashed #f59e0b; padding: 18px 20px; border-radius: 12px;">
              <img src="${this.book.coverImage}" alt="Book Cover" style="width: 130px; height: 175px; object-fit: cover; border-radius: 8px; box-shadow: 0 6px 16px rgba(0,0,0,0.25); border: 2px solid #ffffff; flex-shrink: 0;" />
              <div>
                <span style="background: #d97706; color: #fff; font-size: 11px; font-weight: 800; padding: 3px 10px; border-radius: 12px; text-transform: uppercase;">Original Illustrated Edition</span>
                <h2 style="font-size: 22px; font-weight: 900; color: #78350f; margin: 8px 0 6px 0;">${this.book.title}</h2>
                <div style="font-size: 13px; font-weight: 600; color: #92400e; margin-bottom: 8px;">By ${this.book.author}</div>
                <p style="font-size: 13px; color: #451a03; line-height: 1.5; margin: 0;">
                  Welcome, young explorer! Join Maya the snow leopard guide and brave animals across 9 extreme biomes on a 90-page quest. Every single page reveals a <strong>100% genuine scientific survival fact</strong>!
                </p>
              </div>
            </div>
          ` : ''}

          <!-- Page Title & Habitat Header -->
          <div style="margin-bottom: 18px; border-bottom: 2px solid #fed7aa; padding-bottom: 12px;">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span style="font-size: 12px; font-weight: 800; color: #ea580c; text-transform: uppercase; letter-spacing: 0.5px;">
                Page ${pageData.page} • ${pageData.habitat}
              </span>
              <span style="font-size: 12px; font-weight: 700; color: #78350f; background: #fed7aa; padding: 2px 10px; border-radius: 12px;">
                ${Math.round((pageData.page / 90) * 100)}% Complete
              </span>
            </div>
            <h1 style="font-size: 26px; font-weight: 900; color: #7c2d12; margin: 0;">
              ${pageData.title}
            </h1>
          </div>

          <!-- Narrative Adventure Story -->
          <div style="background: #ffffff; border: 1.5px solid #fed7aa; border-radius: 14px; padding: 24px; font-size: 16.5px; line-height: 1.9; color: #292524; box-shadow: 0 4px 14px rgba(0,0,0,0.04); margin-bottom: 20px;">
            <p style="margin: 0; font-family: Georgia, 'Times New Roman', serif;">
              ${pageData.story}
            </p>
          </div>

          <!-- Real Science Survival Fact Box -->
          <div style="background: linear-gradient(135deg, #ecfdf5, #d1fae5); border: 2px solid #10b981; border-radius: 12px; padding: 18px 22px; margin-bottom: 24px; box-shadow: 0 4px 12px rgba(16,185,129,0.12);">
            <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
              <span style="font-size: 20px;">🔬</span>
              <strong style="color: #065f46; font-size: 15px; text-transform: uppercase; letter-spacing: 0.5px;">
                Real Science Survival Fact: ${pageData.factTitle}
              </strong>
            </div>
            <p style="margin: 0; font-size: 15px; color: #047857; line-height: 1.65; font-weight: 500;">
              ${pageData.fact}
            </p>
          </div>

          ${isLast ? `
            <!-- Page 90 Grand Celebration & Badge -->
            <div style="text-align: center; background: linear-gradient(135deg, #fef3c7, #fde68a); border: 2px solid #d97706; padding: 28px; border-radius: 16px; margin-top: 20px; box-shadow: 0 8px 24px rgba(217,119,6,0.25);">
              <div style="font-size: 54px; margin-bottom: 10px;">🏆</div>
              <h2 style="font-size: 24px; font-weight: 900; color: #78350f; margin: 0 0 8px 0;">Congratulations, Master Wilderness Survivor!</h2>
              <p style="font-size: 15px; color: #92400e; max-width: 580px; margin: 0 auto 18px auto; line-height: 1.6;">
                You have read all 90 pages of <strong>Survivors of the Extreme Wild</strong>! You learned real zoological adaptations across the Polar Ice, Deserts, Mountains, Deep Ocean, Boiling Vents, Caves, Flooded Jungles, Bushfires, and Migrations!
              </p>
              <div style="display: inline-block; background: #ffffff; border: 2px solid #b45309; padding: 12px 24px; border-radius: 12px; font-weight: 800; color: #b45309; font-size: 16px; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
                🏅 Certified Junior Naturalist Explorer
              </div>
            </div>
          ` : ''}

          <!-- Page Flip Navigation Shortcuts -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 10px; font-size: 13px; color: #78350f;">
            <span>Keyboard: Press <kbd style="background:#e2e8f0; padding:2px 6px; border-radius:4px;">◀</kbd> and <kbd style="background:#e2e8f0; padding:2px 6px; border-radius:4px;">▶</kbd> arrows to turn pages</span>
            <span style="font-weight: 700;">Page ${this.currentPage} / 90</span>
          </div>
        </div>
      `;

      // Play chime when reaching page 90
      if (isLast && window.AK_AUDIO && window.AK_AUDIO.playReviewChime) {
        window.AK_AUDIO.playReviewChime(true);
      }
    }
  }

  // Bind keyboard navigation
  if (typeof window !== 'undefined') {
    window.AK_BOOK = new AdventureBookController();

    window.addEventListener('keydown', (e) => {
      const modal = document.getElementById('ka-adventure-book-modal');
      if (modal && !modal.classList.contains('hidden')) {
        if (e.key === 'ArrowRight' || e.key === 'PageDown') {
          window.AK_BOOK.nextPage();
        } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
          window.AK_BOOK.prevPage();
        } else if (e.key === 'Escape') {
          window.AK_BOOK.closeBook();
        }
      }
    });
  }

})(typeof window !== 'undefined' ? window : global);
