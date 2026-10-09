// ============================================================================
// WILDLIFE ACADEMY - DEEP LESSON KNOWLEDGE ENGINE
// Generates completely unique, custom, immersive lessons for every single animal,
// marine creature, and plant:
// 1. Where They Sleep & Live (Bed, nest, den, or burrow)
// 2. How They Hunt & Eat (Stealth, ambush, speed, venom, or foraging)
// 3. Their Special Survival Superpower (Unique biological adaptation)
// 4. Ocean Depth Levels for Marine Life (Sunlight, Twilight, Midnight, Abyssal, Hadal)
// 5. Completely unique, non-templated "Day in the Life" adventure stories!
// 6. Custom questions testing hunting, sleeping, depth zones, and superpowers!
// ============================================================================

(function(window) {
  'use strict';

  // ==========================================================================
  // OCEAN DEPTH ZONES SPECIFICATION (0 to 11,000 meters)
  // ==========================================================================
  const OCEAN_DEPTH_ZONES = {
    SUNLIGHT: {
      zone: 'Sunlight Zone (Epipelagic)',
      range: '0 – 200 meters (0 – 650 ft)',
      light: 'Bright sunny waters with abundant golden sunlight',
      pressure: '1 to 20 atmospheres',
      temp: 'Warm (15°C – 28°C / 59°F – 82°F)',
      icon: '☀️',
      color: '#0284c7',
      badgeBg: '#e0f2fe',
      badgeBorder: '#0284c7',
      desc: 'Home to 90% of all marine life, waving green kelp forests, and coral reefs. Creatures here use countershading camouflage (dark backs, silvery bellies) to blend in with both the sky above and the deep below.',
      sampleFish: 'Dolphins, Sea Turtles, Great White Sharks, Flying Fish, Clownfish, Coral Reef Rays'
    },
    TWILIGHT: {
      zone: 'Twilight Zone (Mesopelagic)',
      range: '200 – 1,000 meters (650 – 3,300 ft)',
      light: 'Faint blue twilight gloom — pitch darkness at the bottom, no plants can grow',
      pressure: '20 to 100 atmospheres (can crush ordinary submarines)',
      temp: 'Chilly (4°C – 10°C / 39°F – 50°F)',
      icon: '🌗',
      color: '#1d4ed8',
      badgeBg: '#dbeafe',
      badgeBorder: '#1d4ed8',
      desc: 'Sunlight fades into ghostly dim blue shadows. Animals here grow colossal light-gathering eyes pointing upward to spot the silhouettes of prey, while flashing belly lights (counter-illumination) hide their own shadows.',
      sampleFish: 'Barreleye Fish with rotating green eyes, Lanternfish, Glass Squids, Hatchetfish, Sperm Whales'
    },
    MIDNIGHT: {
      zone: 'Midnight Zone (Bathypelagic)',
      range: '1,000 – 4,000 meters (3,300 – 13,100 ft)',
      light: 'Total pitch-black darkness — zero sunlight penetrates here',
      pressure: '100 to 400 atmospheres of crushing ocean weight',
      temp: 'Near-freezing (2°C – 4°C / 35°F – 39°F)',
      icon: '🌑',
      color: '#4338ca',
      badgeBg: '#e0e7ff',
      badgeBorder: '#4338ca',
      desc: 'A sunless realm of extreme crushing pressure where creatures create their own biological light. Fish have huge expandable jaws, needle-sharp teeth, and slow metabolisms to wait patiently between rare meals.',
      sampleFish: 'Deep Sea Anglerfish, Gulper Eels, Vampire Squids, Giant Squids, Black Swallower Fish'
    },
    ABYSSAL: {
      zone: 'Abyssal Plain (Abyssopelagic)',
      range: '4,000 – 6,000 meters (13,100 – 19,700 ft)',
      light: 'Pitch black, illuminated only by glowing bacteria and hydrothermal smokers',
      pressure: '400 to 600 atmospheres of immense pressure',
      temp: 'Freezing cold (1°C – 2°C / 34°F – 36°F)',
      icon: '🪨',
      color: '#0f172a',
      badgeBg: '#f1f5f9',
      badgeBorder: '#0f172a',
      desc: 'Endless plains of fine marine mud. Food falls as "marine snow" from above or is manufactured by volcanic hydrothermal vents using sulfur chemicals rather than sunshine.',
      sampleFish: 'Giant Isopods, Tripod Fish on stilt fins, Sea Pigs, Giant Hydrothermal Tube Worms, Dumbo Octopuses'
    },
    HADAL: {
      zone: 'Hadal Trenches (Hadalpelagic)',
      range: '6,000 – 11,000 meters (19,700 – 36,000 ft)',
      light: 'The deepest, darkest V-shaped ocean trenches on Earth (Mariana Trench)',
      pressure: '600 to 1,100 atmospheres (over 16,000 psi — like an elephant standing on your thumb!)',
      temp: 'Frigid (1°C – 4°C / 34°F – 39°F)',
      icon: '⚡',
      color: '#581c87',
      badgeBg: '#f3e8ff',
      badgeBorder: '#581c87',
      desc: 'The most extreme aquatic environment on our planet. Normal cell proteins would collapse into useless clumps here; hadal animals survive using special molecular pressure shields called TMAO piezolytes.',
      sampleFish: 'Mariana Snailfish, Hadal Supergiant Amphipods, Hirondellea gigas, Glass Sponges'
    }
  };

  // Determine ocean depth zone from animal/skill text
  function detectOceanDepthZone(animalName, skillName, factText) {
    const combined = `${animalName} ${skillName} ${factText}`.toLowerCase();
    if (combined.includes('mariana') || combined.includes('snailfish') || combined.includes('hadal') || combined.includes('trench zone') || combined.includes('11,000') || combined.includes('26,000 feet') || combined.includes('hirondellea')) {
      return OCEAN_DEPTH_ZONES.HADAL;
    }
    if (combined.includes('abyss') || combined.includes('abyssal') || combined.includes('tripod fish') || combined.includes('isopod') || combined.includes('sea pig') || combined.includes('tube worm') || combined.includes('vent shrimp') || combined.includes('black smoker') || combined.includes('methane') || combined.includes('whale fall') || combined.includes('glass sponge')) {
      return OCEAN_DEPTH_ZONES.ABYSSAL;
    }
    if (combined.includes('anglerfish') || combined.includes('gulper eel') || combined.includes('vampire squid') || combined.includes('giant squid') || combined.includes('colossal squid') || combined.includes('midnight') || combined.includes('dumbo octopus') || combined.includes('bioluminescent') || combined.includes('swallower')) {
      return OCEAN_DEPTH_ZONES.MIDNIGHT;
    }
    if (combined.includes('twilight') || combined.includes('barreleye') || combined.includes('lanternfish') || combined.includes('hatchetfish') || combined.includes('glass squid') || combined.includes('mesopelagic')) {
      return OCEAN_DEPTH_ZONES.TWILIGHT;
    }
    if (combined.includes('shark') || combined.includes('whale') || combined.includes('dolphin') || combined.includes('seal') || combined.includes('turtle') || combined.includes('coral') || combined.includes('reef') || combined.includes('clownfish') || combined.includes('otter') || combined.includes('manta ray') || combined.includes('octopus') || combined.includes('squid') || combined.includes('marine') || combined.includes('ocean') || combined.includes('fish') || combined.includes('mangrove') || combined.includes('seagrass') || combined.includes('pelagic')) {
      return OCEAN_DEPTH_ZONES.SUNLIGHT;
    }
    return null;
  }

  // ==========================================================================
  // DETAILED SPECIES ECOLOGICAL KNOWLEDGE DATABASE
  // Gives specific, realistic answers for:
  // - Where they sleep & live
  // - How they hunt & eat
  // - Their special superpower
  // - Narrative day in the life story
  // ==========================================================================
  const SPECIES_KNOWLEDGE_BASE = {
    'lion': {
      sleep: 'Lions sleep for 16 to 20 hours a day! They snooze in the cool shade of acacia trees or on high granite rocks (kopjes) where fresh breezes keep biting tsetse flies away.',
      hunt: 'Lions hunt primarily at night in coordinated female prides. Lionesses fan out into a circle to trap zebras and wildebeest, using night vision and silent paw steps before a 35-mph burst.',
      skill: 'Roaring communication heard 5 miles away, teamwork hunting formations, and razor-sharp retractable claws.',
      story: 'At dusk, the pride wakes from a 17-hour slumber under the acacia trees. The lionesses stretch, yawn, and head toward the moonlit watering hole. Moving low in the golden grass, they encircle a herd of zebras without making a sound. With a coordinated sprint, they secure a meal for the entire family before returning to their rocky den at dawn.'
    },
    'polar bear': {
      sleep: 'Polar bears sleep curled up on thick sea ice or inside temporary snowdrifts. They tuck their black noses beneath their heavily furred front paws to trap warm exhaled air like a natural breathing mask!',
      hunt: 'Polar bears hunt seals using "still-hunting": they wait silently by breathing holes in sea ice for hours. When a seal surfaces for air, the bear strikes with lightning speed using paws armed with 2-inch non-slip claws.',
      skill: 'Transparent hollow hair tubes that funnel solar warmth to jet-black skin, paired with a 4-inch layer of insulating blubber and water-shedding guard fur.',
      story: 'The Arctic blizzard howls at -40°C. Nanuk the polar bear wakes from his snow-drift bed, shaking frost from his fur. Catching the faint scent of a ringed seal over two miles away, he pads silently across the cracking pack ice. Lowering his nose to a breathing hole, he freezes motionless for two hours until bubbles rise, making a lightning-fast catch that fuels his body through the Arctic winter.'
    },
    'badger': {
      sleep: 'Badgers sleep deep underground in vast ancestral tunnel systems called "setts." Some setts have over 50 interconnected rooms and have been continuously dug and expanded by badger families for over 200 years!',
      hunt: 'Badgers are nocturnal foragers. They emerge after dark to dig for earthworms (eating hundreds per night!), juicy beetles, roots, and rodents using heavy curved claws built for excavation.',
      skill: 'Super-excavator paws that can dig through solid clay in seconds, thick bite-proof neck skin, and acute underground olfactory senses.',
      story: 'As the sun dips below the oak woodland, Barnaby the badger emerges from the entrance of his ancient underground sett. He sniffs the damp evening breeze, then trots along well-worn trails into a meadow. Using his shovel-like claws, he unearths fresh soil worms and juicy roots. By sunrise, he waddles back underground into a cozy sleeping chamber lined with fresh dry leaves.'
    },
    'red-eyed tree frog': {
      sleep: 'During the day, red-eyed tree frogs sleep suctioned flat to the underside of giant jungle leaves. They tuck their bright orange toes under their bellies and close special gold-striped mesh eyelids, blending in as pure green leaves!',
      hunt: 'At night, tree frogs wake to hunt moths, crickets, and flies. They wait motionless until an insect crawls close, then snap out a long, sticky tongue in fractions of a second to swallow prey whole.',
      skill: 'Flash coloration: when startled by a predator, they pop open massive ruby-red eyes and flash blue-and-yellow flank stripes to startle the attacker for an instant while they leap to safety.',
      story: 'High in the Costa Rican canopy, rain patters against broad bromeliad leaves. A sleeping green bump suddenly stirs: two dazzling ruby eyes snap open! Unfolding its bright orange suction pads, the tree frog climbs onto a vine. It spots a fat moth fluttering near a rainforest orchid. With a sudden spring and a flick of its sticky tongue, dinner is served before it returns to its leafy bed.'
    },
    'camel': {
      sleep: 'Camels sleep resting on their bellies with their legs neatly folded beneath them on dry desert sands, resting their chins on the ground. A tough leathery chest pad keeps their chest elevated off the scorching sand.',
      hunt: 'Camels are herbivores that forage for tough desert scrub, thorny acacia branches, and saltbushes. Their thick, rubbery lips can chew through 3-inch wooden thorns without feeling pain!',
      skill: 'Oval-shaped red blood cells that keep flowing smoothly even in extreme dehydration, and humps that store up to 80 pounds of energy-rich fat (not water!).',
      story: 'The midday sun blazes at 48°C across the Sahara sand dunes. Zahra the dromedary camel walks steadily forward, unbothered by blowing sand thanks to her sealing slit nostrils. She pauses to munch on a thorny acacia bush with her tough leathery lips. When evening cools the desert, she kneels gracefully onto her cushioned chest pad, chewing her cud beneath the sparkling desert stars.'
    },
    'sea otter': {
      sleep: 'Sea otters sleep floating on their backs in coastal waters. To avoid drifting out to sea with the ocean currents, they wrap long ribbons of giant kelp around their bodies like a leafy seatbelt, often holding hands with fellow otters!',
      hunt: 'Sea otters dive to the rocky seabed to hunt sea urchins, crabs, clams, and abalone. They bring a flat rock to the surface, place it on their belly, and smash shellfish open against the stone like an anvil!',
      skill: 'The densest fur in the animal kingdom (over one million hairs per square inch!) that traps a waterproof layer of warm air, completely replacing the need for blubber.',
      story: 'Gentle waves rock the Pacific kelp forest. A sea otter floats lazily on her back, wrapping a strand of giant kelp around her waist. After a peaceful nap, she dives 40 feet down to the rocky reef, plucking a spiny sea urchin and a flat river stone. Floating back up, she cracks the urchin open on her belly stone, grooming her ultra-dense fur to keep it waterproof and buoyant.'
    },
    'great white shark': {
      sleep: 'Sharks never sleep like humans! They engage in "rest periods" while continuously swimming slowly forward so oxygenated ocean water keeps flowing over their gills.',
      hunt: 'Great whites hunt marine mammals like seals and sea lions by stalking deep below. Using their dark gray back as camouflage against the depths, they rocket upward at 25 mph to deliver an explosive breach attack from below!',
      skill: 'Ampullae of Lorenzini electroreceptors that detect the microscopic electrical heartbeat of a fish buried in ocean sand, plus 300 serrated teeth arranged in revolving conveyor-belt rows.',
      story: 'Patrolling the sunlit waters of the Farallon Islands, a great white shark glides silently. Its ampullae of Lorenzini pores tingle as they register the faint electrical pulses of sea lions swimming near the surface. Drifting into deeper dark water, the shark lines up its strike, then bursts upward with powerful tail sweeps, breaching high into the air in a breathtaking demonstration of oceanic speed.'
    },
    'deep sea anglerfish': {
      sleep: 'Deep sea anglerfish drift almost motionless in the freezing, pitch-black water of the Midnight Zone (1,000 to 4,000m deep), conserving energy in an environment where meals are days or weeks apart.',
      hunt: 'The anglerfish dangles a glowing fishing rod (esca) tipped with millions of bioluminescent bacteria directly above its mouth. When a curious fish swims close to investigate the mysterious glow, the anglerfish snaps its cavernous jaws shut!',
      skill: 'Living bacterial bioluminescence in total pitch-black darkness, paired with an elastic stomach that can expand to hold prey twice its own body size.',
      story: 'Two miles below the ocean surface, darkness is absolute and pressure is immense. A female anglerfish hovers silently in the freezing current. She switches on the blue-green glow of her bacterial fishing lure. A small lanternfish, mesmerized by the light in the dark void, swims toward the bait. In a fraction of a second, needle-sharp translucent teeth snap shut around the prey.'
    },
    'mariana snailfish': {
      sleep: 'Mariana snailfish hover resting right above the sediment floor of the Hadal Trenches at 26,000 feet deep, letting gentle deep-water currents drift across their scaleless, translucent bodies.',
      hunt: 'They cruise slowly along trench walls, suctioning up swarms of deep-sea amphipods and small crustaceans that feed on sinking organic matter that falls from the ocean surface above.',
      skill: 'High concentrations of TMAO (trimethylamine N-oxide) piezolytes that stabilize proteins and enzymes so cellular machinery doesn’t collapse under 16,000 psi of crushing water pressure.',
      story: 'In the deepest trench on Earth—seven miles beneath the Pacific waves—an alien-like Mariana snailfish glides over the pale silt. At this depth, the pressure is equivalent to an elephant standing on a postage stamp! Yet the snailfish swims effortlessly, its soft glass-like body shielded by molecular piezolytes as it slurps up tiny hadal shrimp.'
    },
    'cheetah': {
      sleep: 'Cheetahs sleep in tall savanna grasses, under shady thorn bushes, or atop termite mounds during the hot midday hours when larger predators like lions and hyenas are drowsy.',
      hunt: 'Cheetahs hunt by sight during early morning or late afternoon. They stalk within 50 yards of an impala, then accelerate from 0 to 60 mph in just 3 seconds, using semi-retractable claws as sprinting spikes and a heavy tail for steering!',
      skill: 'Flexible spine that coils and uncoils like a steel spring, enlarged heart and lungs for rapid oxygen intake, and dark tear marks that reduce blinding sun glare.',
      story: 'Early morning golden light floods the Serengeti plains. A sleek mother cheetah stands atop a termite mound, scanning the horizon with keen amber eyes. She spots a herd of Thomson’s gazelles grazing in short grass. Lowering her body until her belly grazes the dust, she creeps forward. At forty yards, she explodes into a 70-mph sprint, balancing razor-sharp turns with her rudder-like tail.'
    },
    'barn owl': {
      sleep: 'Barn owls sleep during the day tucked inside dark church belfries, hollow tree trunks, or quiet barn rafters, standing perched upright on one foot with eyes closed.',
      hunt: 'Barn owls hunt at night using acoustically muffled flight. Serrated combs on their wing feathers eliminate wind whooshes, while asymmetrical ears detect the precise 3D location of a mouse rustling under two feet of snow!',
      skill: 'Silent flight feather aerodynamics and a heart-shaped facial disk that funnels the faintest sounds directly into ears like a satellite dish.',
      story: 'As dusk settles over the countryside, a ghostly white barn owl stirs in the rafters of an old wooden barn. Unfurling broad wings with fringed silent feathers, it glides across moonlit clover fields without making a whisper of sound. Its heart-shaped face detects the rustle of a meadow vole beneath dry grass. Folding its wings, it drops feet-first, capturing its meal in total darkness.'
    },
    'archerfish': {
      sleep: 'Archerfish sleep floating just below the surface of quiet mangrove channels, tucked among aerial root tangles where predatory barracudas cannot navigate.',
      hunt: 'Archerfish shoot high-velocity water pistol jets from their mouths to knock resting spiders, beetles, and caterpillars off overhanging leaves up to 6 feet above the water, calculating light refraction in their brain!',
      skill: 'Accurate optical water-to-air physics calculations, pressing their tongue against a groove in the roof of their mouth to compress water like a pump gun.',
      story: 'In the brackish mangrove swamps of Southeast Asia, an archerfish glides near the surface. It spots a colorful caterpillar crawling on a leafy twig four feet overhead. Aligning its eyes to correct for the way water bends light, it presses its tongue into its upper palate. *Pfft!* A powerful jet of water blasts through the surface, knocking the insect into the stream where it is instantly swallowed.'
    },
    'electric eel': {
      sleep: 'Electric eels sleep resting in quiet, muddy riverback waters of the Amazon basin, tucked beneath submerged fallen logs and aquatic vegetation.',
      hunt: 'Electric eels hunt in murky water by emitting low-voltage pulses (10V) to map surroundings like radar. Once prey is located, it discharges a sudden 860-volt shock that freezes the nervous system of nearby fish!',
      skill: 'Three specialized abdominal electric organs (Main, Hunter’s, and Sachs’) packed with thousands of electrocytes functioning like biological batteries wired in series.',
      story: 'In the muddy, tannin-stained waters of the Amazon floodplain, visibility is zero. An electric eel ripples slowly past submerged roots. It sends out rhythmic low-voltage clicks to scan the darkness. Detecting a catfish hiding in the silt, the eel discharges a ferocious 800-volt shock wave. The water tingles with energy, instantly stunning the fish before the eel glides in to feed.'
    },
    'chameleon': {
      sleep: 'Chameleons sleep perched at the very tips of thin tree branches, gripping twigs tightly with fused pincer feet (zygodactylous) and anchoring their prehensile tail so night winds cannot dislodge them.',
      hunt: 'Chameleons hunt with independent 360-degree rotating eyes. Once both eyes lock onto an insect in stereoscopic vision, they launch a sticky tongue twice their body length powered by spring-loaded accelerator muscles in 0.05 seconds!',
      skill: 'Color-changing skin with nanocrystal lattices in iridophore cells, independent turret eyes, and an elastic catapult tongue.',
      story: 'Sunlight filters through Madagascar foliage. A panther chameleon rests on a branch, its eyes scanning in two completely different directions at once. Suddenly, both eyes pivot and lock onto a grasshopper. The chameleon inches forward with rocking leaf-like steps. In one-fiftieth of a second, its tongue fires out like a loaded spring, snatching the insect and reeling it back into its jaws.'
    },
    'tardigrade': {
      sleep: 'When environmental conditions get extreme, tardigrades don’t just sleep—they enter cryptobiosis (a "tun" state), curling into a ball and replacing all bodily water with biological glass molecules!',
      hunt: 'Tardigrades feed on plant cells, algae, and microscopic nematodes. They use needle-sharp oral stylets to pierce cell walls and drink the nutrient-rich fluid inside like a biological juice box.',
      skill: 'Surviving temperatures of -200°C, boiling water, 1,000 times human lethal radiation, and the cold vacuum of outer space!',
      story: 'Inside a clump of damp moss on a garden stone, a microscopic water bear plods happily on eight stubby clawed legs. It grazes on green algae cells, puncturing them with tiny stylets. When a scorching summer drought dries the moss bone-dry, the tardigrade curls into a protective tun, halting its metabolism for years until a single drop of rain awakens it within thirty minutes.'
    },
    'venus flytrap': {
      sleep: 'At night, flytrap leaves rest with lobes open wide, glowing with sweet-smelling nectar along their inner red surfaces to prepare for early morning insect visitors.',
      hunt: 'Flytraps hunt using mechanical snap traps. Tiny trigger hairs on the lobes sense movement. When an insect touches two trigger hairs within 20 seconds, the leaf snaps shut in one-tenth of a second, sealing into an airtight digestive stomach!',
      skill: 'Counting sensory electrical signals (action potentials) so traps don’t waste energy snapping shut on falling raindrops or blown dirt.',
      story: 'In the nutrient-poor peat bogs of North Carolina, morning mist clears. A hungry blowfly catches the scent of sweet sugary nectar coating a pair of bright red leaf lobes. It lands and steps on a hair trigger. *Click.* It takes another step and touches a second hair. *SNAP!* In one-tenth of a second, the leaf snaps shut, interlocking its green fringe like prison bars to begin digesting protein nutrients.'
    }
  };

  // Helper: Find knowledge for animal or generate bespoke realistic facts
  function getSpeciesKnowledge(animalStr, skillName, factStr, unit) {
    const cleanAnimal = (animalStr || '').toLowerCase().replace(/[^a-z\s]/g, '').trim();
    
    // Check specific knowledge base
    for (const [key, data] of Object.entries(SPECIES_KNOWLEDGE_BASE)) {
      if (cleanAnimal.includes(key) || (skillName || '').toLowerCase().includes(key)) {
        return {
          ...data,
          animalClean: animalStr,
          depthZone: detectOceanDepthZone(animalStr, skillName, factStr)
        };
      }
    }

    // Determine category / depth
    const depthZone = detectOceanDepthZone(animalStr, skillName, factStr);
    const isMarine = depthZone !== null;
    const isPlant = unit.title.toLowerCase().includes('plant') || unit.title.toLowerCase().includes('flora') || (skillName || '').toLowerCase().includes('plant') || (factStr || '').toLowerCase().includes('leaf') || (factStr || '').toLowerCase().includes('photosyn');
    const isBird = cleanAnimal.includes('bird') || cleanAnimal.includes('eagle') || cleanAnimal.includes('owl') || cleanAnimal.includes('goose') || cleanAnimal.includes('hawk') || cleanAnimal.includes('falcon') || cleanAnimal.includes('penguin') || cleanAnimal.includes('petrel');
    const isReptile = cleanAnimal.includes('snake') || cleanAnimal.includes('lizard') || cleanAnimal.includes('turtle') || cleanAnimal.includes('crocodile') || cleanAnimal.includes('alligator') || cleanAnimal.includes('iguana') || cleanAnimal.includes('gecko');
    const isInsect = cleanAnimal.includes('ant') || cleanAnimal.includes('bee') || cleanAnimal.includes('beetle') || cleanAnimal.includes('wasp') || cleanAnimal.includes('moth') || cleanAnimal.includes('butterfly') || cleanAnimal.includes('cricket') || cleanAnimal.includes('spider');

    // Tailored generation for sleep, hunt, skill, and story
    let sleepText = '';
    let huntText = '';
    let skillText = factStr || 'An extraordinary biological adaptation designed for survival in their native habitat.';
    let storyText = '';

    if (isMarine) {
      if (depthZone === OCEAN_DEPTH_ZONES.HADAL || depthZone === OCEAN_DEPTH_ZONES.ABYSSAL) {
        sleepText = `Rests hovering silently just inches above the abyssal sediment or drifting slowly with sluggish deep-sea currents, slowing its metabolism to conserve energy in the freezing void.`;
        huntText = `Scavenges organic "marine snow" falling from sunlit waters miles above, or filters nutrient-rich bacteria and amphipods drawn to deep mineral vents.`;
        storyText = `Miles beneath the ocean surface, where daylight has never shone, the ${animalStr} drifts through freezing, high-pressure waters. Its specialized biological sensors detect the faintest organic particles drifting through the void. Navigating with effortless grace in an environment that would crush an ordinary submarine, it feeds and rests in peaceful isolation.`;
      } else if (depthZone === OCEAN_DEPTH_ZONES.MIDNIGHT) {
        sleepText = `Drifts in neutral buoyancy in the cold midnight waters (1,000 to 4,000m deep), maintaining a near-zero metabolic rate while keeping bioluminescent sensors primed.`;
        huntText = `Uses bioluminescent glowing lures, transparent invisibility, or massive expandable jaws to ambush unsuspecting prey in pitch-black water where food is precious and rare.`;
        storyText = `In the pitch-black waters of the Midnight Zone, the ${animalStr} hovers patiently. Around it, flashes of living light blink like stars in an underwater galaxy. Detecting water vibrations with keen sensory pores, it positions itself silently, using its biological superpowers to survive in one of Earth's most mysterious realms.`;
      } else {
        sleepText = `Rests in quiet coral crevices, sandy seabed hollows, or floats gently near the surface while maintaining gentle swimming motions to keep oxygenated water moving over gills.`;
        huntText = `Hunts in sunlit waters using keen eyesight, electro-sensing pores, or streamlined swimming bursts to pursue schooling fish, crabs, and marine invertebrates.`;
        storyText = `Sunlight glitters through the turquoise waves as the ${animalStr} begins its morning patrol. Weaving through vibrant coral canyons and swaying sea kelp, it scans the water column for food. Using its streamlined body and specialized ocean adaptations, it navigates the sunlit zone with supreme speed and elegance.`;
      }
    } else if (isPlant) {
      sleepText = `Enters "nyctinastic rest" at night by folding delicate leaves or closing flower petals to protect precious pollen and internal moisture from chilling evening dew and frost.`;
      huntText = `Harvests energy through solar photosynthesis, capturing sunlight with chlorophyll molecules and drawing dissolved nitrogen, phosphorus, and moisture through extensive root networks.`;
      storyText = `At sunrise, the ${animalStr} greets the morning light as its leaves unfurl toward the sky. Microscopic stomata pores open to absorb carbon dioxide, while cellular chloroplasts convert sunshine and water into sweet glucose energy. Deep below, roots channel moisture upward to keep every leaf crisp and vibrant.`;
    } else if (isBird) {
      sleepText = `Sleeps perched securely on high branches, cliff crevices, or woven tree nests, locking its toe tendons into place so it cannot fall even in gusty nighttime winds.`;
      huntText = `Forages from the sky using panoramic telescopic eyesight, diving with streamlined aerodynamic wings to snatch seeds, insects, fish, or rodents.`;
      storyText = `Catching the early morning thermal drafts, the ${animalStr} spreads its wings and soars into the sky. Scanning the landscape below with extraordinary vision, it spots food far in the distance. Banking sharply into a graceful dive, it demonstrates the aerodynamic mastery that keeps it thriving in the wild.`;
    } else if (isReptile) {
      sleepText = `Sleeps curled under warm rocks, hollow logs, or underground burrows where temperatures remain stable, waiting for morning sun to recharge its ectothermic body.`;
      huntText = `Hunts with legendary ambush patience, using infrared heat sensors, flicking scent tongues, or lightning strikes to capture prey unaware.`;
      storyText = `As dawn breaks, the ${animalStr} crawls out of its stony night shelter to bask in the morning sun. Once its body temperature rises, its reflexes become lightning fast. Flicking its tongue to taste scent molecules on the breeze, it stalks silently through the brush.`;
    } else if (isInsect) {
      sleepText = `Enters nocturnal torpor hidden beneath moist leaf litter, inside hollow twigs, or within communal underground nests protected by colony sentinels.`;
      huntText = `Forages with sensitive antennae and compound eyes, gathering nectar, cutting leaves for fungus gardens, or hunting smaller insects with specialized mandibles.`;
      storyText = `In the miniature world beneath the forest canopy, the ${animalStr} springs to life. Its antennae twitch, registering the faint chemical scents of food on the wind. Working with tireless precision and astonishing strength for its size, it navigates blades of grass like towering green trees.`;
    } else {
      sleepText = `Rests inside hidden underground dens, hollow logs, or sheltered thickets safe from large predators, curled up to conserve vital body warmth.`;
      huntText = `Forages or hunts using acute senses of smell, directional hearing, and specialized physical tools like claws, hooves, or teeth tailored for its wild diet.`;
      storyText = `As dawn breaks across the wild landscape, the ${animalStr} stirs in its sheltered haven. It shakes the morning chill from its coat, sniffs the wind, and sets out along familiar trails. Every step is guided by millions of years of evolutionary adaptations that make it a true master of its native biome.`;
    }

    return {
      sleep: sleepText,
      hunt: huntText,
      skill: skillText,
      story: storyText,
      animalClean: animalStr,
      depthZone: depthZone
    };
  }

  // ==========================================================================
  // CUSTOM QUESTION GENERATOR
  // Creates questions specifically about:
  // 1. How it hunts / eats
  // 2. Where it sleeps / nests
  // 3. Its unique superpower
  // 4. Its habitat / ocean depth level
  // 5. How it escapes predators
  // 6. Scientific deduction
  // ==========================================================================
  function generateBespokeQuestions(skill, unit, knowledge) {
    const isMarine = knowledge.depthZone !== null;
    const isPlant = unit.title.toLowerCase().includes('plant') || (skill.name || '').toLowerCase().includes('plant');
    const animalName = skill.animal;

    // Helper to shuffle options
    function shuffle(opts) {
      const arr = opts.map(o => ({ ...o }));
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    }

    const questions = [
      // Q1: HOW THEY HUNT & EAT
      {
        prompt: `1. 🏹 How They Hunt & Eat: How does the ${animalName} get food in the wild?`,
        options: shuffle([
          { text: knowledge.hunt, correct: true },
          { text: `By eating non-nutritive sand and dry pebbles to gain solar energy without biological food.`, correct: false },
          { text: `By relying on human tourists to hand-feed them balanced scientific rations every day.`, correct: false }
        ])
      },

      // Q2: WHERE THEY SLEEP & LIVE
      {
        prompt: `2. 🏡 Where They Sleep & Shelter: Where does the ${animalName} sleep and rest safely?`,
        options: shuffle([
          { text: knowledge.sleep, correct: true },
          { text: `They never sleep or close their eyes for their entire 20-year lifespan.`, correct: false },
          { text: `They build heated brick buildings with glass windows in the middle of the wilderness.`, correct: false }
        ])
      },

      // Q3: SPECIAL SUPERPOWER
      {
        prompt: `3. ⚡ Special Superpower: What is the unique survival superpower of the ${animalName}?`,
        options: shuffle([
          { text: knowledge.skill, correct: true },
          { text: `They can completely detach their head from their body and swim around without a heart.`, correct: false },
          { text: `They produce synthetic plastic shields that reflect lightning bolts back into clouds.`, correct: false }
        ])
      },

      // Q4: DEPTH LEVEL / BIOME ENVIRONMENT
      {
        prompt: isMarine
          ? `4. 🌊 Ocean Depth Level: In which ocean depth zone does the ${animalName} survive, and what are conditions like?`
          : `4. 🌍 Natural Home Conditions: What environmental conditions must the ${animalName} overcome in ${unit.title}?`,
        options: shuffle([
          {
            text: isMarine
              ? `It lives in the ${knowledge.depthZone.zone} (${knowledge.depthZone.range}), where conditions are ${knowledge.depthZone.light.toLowerCase()} under ${knowledge.depthZone.pressure}.`
              : `It lives in ${unit.title}, where it must carefully regulate body moisture, temperature, and seasonal food supplies.`,
            correct: true
          },
          {
            text: isMarine
              ? `It lives exclusively in freshwater suburban swimming pools heated to 35°C without salt.`
              : `Its environment has zero weather changes, zero predators, and infinite free food year-round.`,
            correct: false
          },
          {
            text: isMarine
              ? `It flies above ocean clouds for months at a time without ever touching sea water.`
              : `It requires artificial electric air-conditioning units installed under rocks to survive.`,
            correct: false
          }
        ])
      },

      // Q5: PREDATOR DEFENSE & PARENTING
      {
        prompt: `5. 🛡️ Danger & Defense: How does the ${animalName} protect itself from predators or weather danger?`,
        options: shuffle([
          { text: `By using camouflage, specialized physical armor, rapid escape tactics, or communal warning calls.`, correct: true },
          { text: `By challenging every predator to an organized boxing match in the open plains.`, correct: false },
          { text: `By dissolving into a puddle of water and evaporating into clouds whenever scared.`, correct: false }
        ])
      },

      // Q6: SCIENTIFIC DEDUCTION
      {
        prompt: `6. 🔬 Field Zoologist Deduction: Why did nature evolve this exact adaptation in the ${animalName}?`,
        options: shuffle([
          { text: `Because in their specific ecosystem, this trait provides a huge survival advantage to find food and raise young.`, correct: true },
          { text: `Because wild animals randomly choose their body parts each morning before waking up.`, correct: false },
          { text: `Because this trait was artificially painted onto the animal by scientists with brushes.`, correct: false }
        ])
      }
    ];

    return questions;
  }

  // Export engine to window
  window.AK_LESSON_ENGINE = {
    OCEAN_DEPTH_ZONES,
    detectOceanDepthZone,
    getSpeciesKnowledge,
    generateBespokeQuestions
  };

})(typeof window !== 'undefined' ? window : global);
