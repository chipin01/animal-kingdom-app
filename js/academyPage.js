// ============================================================================
// WILDLIFE ACADEMY ENGINE - ADVANCED KHAN-STYLE MULTI-SKILL SYSTEM
// Units scaled by difficulty (15 to 22 skills each, 128 total skills)
// Multi-Question Practice, Skip Mechanics, Wrong-Answer Bonus Redemption Questions,
// and Dynamic End Screen ("Keep working! ➔ Go to next lesson")
// ============================================================================

(function(window) {
  'use strict';

  // Unit Difficulty Configurations (Requested: 15 to 22 skills based on difficulty)
  const UNITS_CONFIG = [
    {
      id: 'course-1',
      number: 1,
      title: 'How Animals Live: Habitats & Shelters',
      title_zh: '動物如何生活：棲息地與生存奧秘',
      title_es: 'Cómo Viven los Animales: Hábitats y Refugios',
      difficulty: 'Introductory',
      skillCount: 15, // 15 skills
      color: '#10b981',
      skills: [
        { name: 'What is a Habitat?', animal: '🦁 African Lion', fact: 'Every habitat must provide food, clean water, protective shelter, and sufficient geographic space.' },
        { name: 'Underground Burrows & Dens', animal: '🦡 European Badger', fact: 'Badger setts can be hundreds of years old with dozens of subterranean tunnels and chambers.' },
        { name: 'Forest Canopies & Microhabitats', animal: '🐸 Red-Eyed Tree Frog', fact: 'Tree frogs spend their entire lifecycle in high bromeliad water pools, never touching ground.' },
        { name: 'Arid Desert Survival', animal: '🐪 Dromedary Camel', fact: 'Camels store fat in humps to metabolize water and endure 120°F without sweating.' },
        { name: 'Wetlands, Bogs & Swamps', animal: '🐊 American Alligator', fact: 'Wetlands serve as Earth’s natural biological kidneys by filtering sediments and heavy toxins.' },
        { name: 'Polar Regions: Tundra & Ice', animal: '🐻‍❄️ Polar Bear', fact: 'Polar bears have black skin beneath transparent hollow guard hairs that trap heat from the sun.' },
        { name: 'Freshwater Rivers & Streams', animal: '🦦 River Otter', fact: 'River otters have water-repellent fur with over 150,000 hairs per square inch.' },
        { name: 'Grasslands, Prairies & Savannas', animal: '🦓 Plains Zebra', fact: 'Savannas cover 20% of Earth’s land surface and support massive seasonal migratory herds.' },
        { name: 'Alpine Treelines & High Mountains', animal: '🐆 Snow Leopard', fact: 'Snow leopards have giant nasal cavities that warm icy mountain air before reaching lungs.' },
        { name: 'Subterranean Caverns & Caves', animal: '🦇 Little Brown Bat', fact: 'Caves host blind, albino extremophiles adapted to total absence of solar radiation.' },
        { name: 'Coastal Shorelines & Tidal Pools', animal: '🦀 Ghost Crab', fact: 'Intertidal creatures survive changing salinity, pounding crashing waves, and air exposure daily.' },
        { name: 'Urban Wildlife Adaptation', animal: '🦝 Raccoon', fact: 'Raccoons have dexterous front paws that solve complex latches and thrive in human cities.' },
        { name: 'Nocturnal vs. Diurnal Cycles', animal: '🦉 Barn Owl', fact: 'Nocturnal animals evolved tapetum lucidum eye reflectors for seeing in near-pitch darkness.' },
        { name: 'Social Packs, Prides & Herds', animal: '🐺 Gray Wolf', fact: 'Pack living enables wolves to hunt massive ungulates 10 times their individual body weight.' },
        { name: 'Seasonal Shifts: Hibernation & Torpor', animal: '🐻 Brown Bear', fact: 'Bears reduce heart rates from 50 bpm to just 8 bpm during winter hibernation without bone loss.' }
      ]
    },
    {
      id: 'course-2',
      number: 2,
      title: 'Diets, Predators & Food Webs',
      title_zh: '飲食、掠食者與食物網',
      title_es: 'Dietas, Depredadores y Redes Tróficas',
      difficulty: 'Foundational',
      skillCount: 15, // 15 skills
      color: '#f59e0b',
      skills: [
        { name: 'Herbivores & Complex Ruminants', animal: '🐄 Giant Bison', fact: 'Ruminants utilize multi-chambered stomachs containing microbes to break down tough cellulose.' },
        { name: 'Carnivore Dentition & Speed', animal: '🐆 African Cheetah', fact: 'Cheetahs possess non-retractable claws that function as racing cleats on high-speed chases.' },
        { name: 'Omnivore Dietary Flexibility', animal: '🐻 Grizzly Bear', fact: 'Omnivores eat berries, roots, salmon, and carrion, adapting flexibly to seasons.' },
        { name: 'Scavengers: Nature’s Sanitizers', animal: '🦅 Turkey Vulture', fact: 'Vulture stomach acid is pH 1.0, capable of destroying anthrax, botulism, and cholera.' },
        { name: 'Decomposers, Fungi & Soil Microbes', animal: '🪱 Earthworm', fact: 'Decomposers break organic matter into essential nitrogen, phosphorus, and potassium.' },
        { name: 'Trophic Energy Pyramids', animal: '🦗 Desert Locust', fact: 'Only roughly 10% of energy is transferred from one trophic level up to the next.' },
        { name: 'Primary Autotrophs & Photosynthesis', animal: '🌿 Phytoplankton', fact: 'Ocean phytoplankton produces over 50% of the world’s atmospheric oxygen.' },
        { name: 'Apex Predators & Keystone Roles', animal: '🦈 Great White Shark', fact: 'Apex predators have no natural enemies and stabilize populations of mid-tier mesopredators.' },
        { name: 'Trophic Cascades in Nature', animal: '🐺 Yellowstone Wolf', fact: 'Reintroducing wolves to Yellowstone reduced overgrazing, allowing aspens and beavers to rebound.' },
        { name: 'Foraging: Grazers vs. Browsers', animal: '🦒 Giraffe', fact: 'Browsers eat leaves and bark from trees, whereas grazers eat ground grasses.' },
        { name: 'Ambush Hunters & Patience', animal: '🐊 Nile Crocodile', fact: 'Crocodiles can slow metabolic rates and wait motionless underwater for hours.' },
        { name: 'Cooperative Pack Tactics', animal: '🐋 Orca Killer Whale', fact: 'Orca pods generate synchronized wave washes to knock seals off ice floes into the sea.' },
        { name: 'Parasitism & Host Exploitation', animal: '🦟 Mosquito', fact: 'Parasites rely on host biological fluids without usually causing instantaneous death.' },
        { name: 'Mutualistic Symbiotic Partnerships', animal: '🐠 Clownfish & Anemone', fact: 'Clownfish produce protective mucus, allowing them to nest immune inside stinging anemone tentacles.' },
        { name: 'Commensalism in the Wild', animal: '🦈 Remora Suckerfish', fact: 'Remoras hitchhike on sharks to eat leftover crumbs without harming or helping the shark.' }
      ]
    },
    {
      id: 'course-3',
      number: 3,
      title: 'Animal Adaptations & Superpowers',
      title_zh: '動物適應力與生理超能力',
      title_es: 'Adaptaciones y Superpoderes Animales',
      difficulty: 'Intermediate',
      skillCount: 18, // 18 skills
      color: '#6366f1',
      skills: [
        { name: 'Background Camouflage & Disruptive Coloration', animal: '🦎 Common Chameleon', fact: 'Disruptive stripes and spots break up bodily outlines against foliage.' },
        { name: 'Mimicry: Batesian vs. Mullerian', animal: '🦋 Viceroy Butterfly', fact: 'Harmless mimics duplicate toxic species to ward off visual bird predators.' },
        { name: 'Venom vs. Poison Bio-Chemistry', animal: '🐍 Inland Taipan', fact: 'Venom is injected via fangs or stingers; poison is absorbed through ingestion or skin touch.' },
        { name: 'Echolocation: Acoustic Navigation', animal: '🐬 Bottlenose Dolphin', fact: 'Dolphins emit high-frequency clicks through a melon organ to map 3D underwater spaces.' },
        { name: 'Electroreception & Bio-Electric Senses', animal: '🦈 Hammerhead Shark', fact: 'Ampullae of Lorenzini detect heartbeat electrical micro-currents of buried flatfish.' },
        { name: 'Thermal Infrared Vision', animal: '🐍 Pit Viper', fact: 'Facial pit organs contain infrared radiation receptors that detect warm prey in pitch dark.' },
        { name: 'Bioluminescence: Cold Living Light', animal: '🏮 Deep Sea Anglerfish', fact: 'Bacterial symbiosis inside lures creates light with 98% efficiency and zero lost heat.' },
        { name: 'Hydrothermal Vent Extremophiles', animal: '🦐 Pompeii Worm', fact: 'Extremophiles withstand 176°F temperatures and toxic volcanic sulfur chimneys.' },
        { name: 'Cryogenic Freeze Tolerance', animal: '🐸 Wood Frog', fact: 'Wood frogs freeze solid with zero heartbeat in winter using glucose as biological antifreeze.' },
        { name: 'Super-Concentrated Water Retention', animal: '🐀 Kangaroo Rat', fact: 'Kangaroo rats never need to drink free water; they produce water entirely from metabolizing dry seeds.' },
        { name: 'G-Force Shock Absorption', animal: '🐦 Pileated Woodpecker', fact: 'Woodpecker spongy skulls and long hyoid bones absorb 1,200 Gs of impact force per peck.' },
        { name: 'Deep-Diving Myoglobin Reserves', animal: '🐋 Sperm Whale', fact: 'High myoglobin stores allow sperm whales to hold breath for 90 minutes down to 7,000 feet.' },
        { name: 'Complete Organ Regeneration', animal: '🦎 Axolotl', fact: 'Axolotls can regrow severed limbs, heart muscle, and even parts of their brain without scar tissue.' },
        { name: 'Proportional Super-Strength', animal: '🪲 Rhinoceros Beetle', fact: 'Rhinoceros beetles can lift up to 850 times their own body weight.' },
        { name: 'Sonic Cavitation Shockwaves', animal: '🦐 Pistol Shrimp', fact: 'Snapping claws create a cavitation bubble exceeding 8,000°F that stuns prey with loud sonic clicks.' },
        { name: 'Dynamic Chromatophore Color Shifts', animal: '🐙 Blue-Ringed Octopus', fact: 'Cephalopods contract radial muscles around pigment sacs in milliseconds.' },
        { name: 'High-Tensile Biomaterial Silk', animal: '🕷️ Golden Orb Weaver', fact: 'Spider dragline silk is five times stronger by tensile weight than structural steel.' },
        { name: 'Tool Crafting & High Intelligence', animal: '🦅 New Caledonian Crow', fact: 'Crows bend twigs into hooks and demonstrate multi-step causal reasoning.' }
      ]
    },
    {
      id: 'course-4',
      number: 4,
      title: 'Ocean & Marine Biology',
      title_zh: '海洋生物學與深海深淵',
      title_es: 'Biología Marina y Océanos',
      difficulty: 'Advanced',
      skillCount: 18, // 18 skills
      color: '#0284c7',
      skills: [
        { name: 'The Sunlight Zone (Epipelagic)', animal: '🐟 Bluefin Tuna', fact: 'The top 200 meters receives 90% of marine sunlight and hosts all photosynthetic algae.' },
        { name: 'Coral Reef Metropolises', animal: '🐠 Clown Anemonefish', fact: 'Coral polyps build calcium carbonate structures that protect coastal communities from tidal surges.' },
        { name: 'Open Ocean Pelagic Nomads', animal: '🦈 Oceanic Whitetip Shark', fact: 'Pelagic fish cruise endless nutrient-poor open oceanic deserts with countershaded camouflage.' },
        { name: 'Marine Mammalian Physiology', animal: '🐋 Blue Whale', fact: 'Blue whales have hearts the size of golf carts that pump 10 tons of blood.' },
        { name: 'The Twilight Zone (Mesopelagic)', animal: '🐟 Lanternfish', fact: 'Bioluminescent photophores break silhouettes against downward faint surface light.' },
        { name: 'The Midnight Zone (Bathypelagic)', animal: '🐙 Dumbo Octopus', fact: 'Complete darkness reigns from 1,000m to 4,000m, where temperatures hover near 39°F.' },
        { name: 'Abyssal Plains & Crushing Pressure', animal: '🪱 Giant Tube Worm', fact: 'Pressures exceed 600 atmospheres—equivalent to an elephant standing on your thumb.' },
        { name: 'Hadal Trenches: Earth’s Deepest Chasm', animal: '🐟 Mariana Snailfish', fact: 'Snailfish thrive at 26,000 feet depth thanks to cell-stabilizing piezolyte molecules.' },
        { name: 'Whale Fall Ecosystem Succession', animal: '🦀 Osedax Bone Worm', fact: 'A single sunken whale carcass feeds specialized deep-sea scavengers for up to 100 years.' },
        { name: 'Black Smokers & Chemosynthesis', animal: '🦐 Vent Shrimp', fact: 'Chemosynthetic bacteria synthesize sugars from hydrogen sulfide rather than sunlight.' },
        { name: 'Deep-Sea Cephalopod Wonders', animal: '🦑 Giant Squid', fact: 'Giant squids possess dinner-plate-sized eyes (10 inches wide) to spot faint bioluminescent blooms.' },
        { name: 'Electric Marine Predators', animal: '⚡ Torpedo Ray', fact: 'Specialized electrocytes produce electric discharges exceeding 220 volts to stun prey.' },
        { name: 'Pelagic Seabird Dynamics', animal: '🦅 Wandering Albatross', fact: 'Albatrosses have 11-foot wingspans and can circle the globe without flapping using dynamic soaring.' },
        { name: 'Coastal Mangrove Ecosystems', animal: '🦀 Fiddler Crab', fact: 'Mangrove stilt roots shelter 75% of commercial fish fingerlings from larger ocean predators.' },
        { name: 'Kelp Forest Ecology & Otters', animal: '🦦 Sea Otter', fact: 'Sea otters protect kelp forests by consuming herbivorous sea urchins that would otherwise clearcut them.' },
        { name: 'Ocean Acidification Chemistry', animal: '🐚 Pteropod Sea Butterfly', fact: 'Excess atmospheric CO2 lowers seawater pH, dissolving fragile aragonite calcium shells.' },
        { name: 'Thermohaline Global Conveyor Belt', animal: '🐢 Leatherback Sea Turtle', fact: 'Cold salty water sinks in the North Atlantic, driving a 1,000-year worldwide ocean circulatory current.' },
        { name: 'Deep-Sea Gigantism Phenomenon', animal: '🦀 Giant Isopod', fact: 'Cold temperatures and high pressure cause deep-sea arthropods to grow 10 times larger than shallow relatives.' }
      ]
    },
    {
      id: 'course-5',
      number: 5,
      title: 'Birds & The Skies',
      title_zh: '鳥類學與飛行力學',
      title_es: 'Ornitología y Aves del Cielo',
      difficulty: 'Expert',
      skillCount: 20, // 20 skills
      color: '#0d9488',
      skills: [
        { name: 'Flight Skeletal Anatomy: Hollow Bones', animal: '🦅 Golden Eagle', fact: 'Pneumatized bones with internal honeycombed trusses make bird skeletons ultra-light yet rigid.' },
        { name: 'Feather Aerodynamics: Vanes & Barbs', animal: '🪶 Barn Owl', fact: 'Interlocking microscopic barbules zip together like velcro to form airtight flight surfaces.' },
        { name: 'Wing Shapes: Soaring, Gliding & Speed', animal: '🦅 Red-Tailed Hawk', fact: 'Broad slotted wings provide high lift for thermal soaring; narrow swept wings maximize dive speed.' },
        { name: 'Avian One-Way Respiratory Air Sacs', animal: '🦆 Mallard Duck', fact: 'Birds cycle oxygen continuously during both inhalation and exhalation via auxiliary air sacs.' },
        { name: 'Raptor Talons & Crushing Force', animal: '🦅 Harpy Eagle', fact: 'Harpy eagles exert 530 PSI crushing talon grip, equal to the bite of a Rottweiler.' },
        { name: 'Owl Acoustics & Asymmetrical Ears', animal: '🦉 Great Horned Owl', fact: 'Asymmetrical ear openings allow owls to triangulate the vertical and horizontal location of prey.' },
        { name: 'Peregrine Falcon 240 mph Dive Physics', animal: '🦅 Peregrine Falcon', fact: 'Special bony tubercles in nostrils prevent air pressure shock from bursting falcon lungs in stoops.' },
        { name: 'Magnetic Navigation & Cryptochromes', animal: '🕊️ Homing Pigeon', fact: 'Cryptochrome retinal proteins allow migratory birds to visually perceive Earth’s magnetic field lines.' },
        { name: 'The Bar-Tailed Godwit 7,000-Mile Nonstop Flight', animal: '🐦 Bar-Tailed Godwit', fact: 'Godwits fly nonstop for 11 days from Alaska to New Zealand without eating, drinking, or resting.' },
        { name: 'Hummingbird 80-Beats-Per-Second Physics', animal: '🐦 Ruby-Throated Hummingbird', fact: 'Hummingbirds rotate wings in figure-eights, generating lift on both upstroke and downstroke.' },
        { name: 'Flightless Giants: Ratite Biology', animal: '🦤 Common Ostrich', fact: 'Ostriches can sprint 45 mph on two-toed feet and lack the keeled breastbone needed for flight.' },
        { name: 'Penguin Marine Torpedo Mechanics', animal: '🐧 Emperor Penguin', fact: 'Penguins release microscopic air bubbles from plumage to lubricate water flow and double swim speed.' },
        { name: 'Corvid Intelligence & Spatial Memory', animal: '🦅 Common Raven', fact: 'Ravens memorize hundreds of food caches and deceive rival birds by creating fake caches.' },
        { name: 'The Avian Syrinx: Dual Voice Boxes', animal: '🐦 Northern Mockingbird', fact: 'The syrinx at the trachea base allows songbirds to sing two independent musical notes simultaneously.' },
        { name: 'Elaborate Sexual Selection Displays', animal: '🦚 Indian Peafowl', fact: 'Peacock trains reflect structural iridescent photonic crystals that dazzle peahens during courtship.' },
        { name: 'Architectural Nest Engineering', animal: '🐦 Sociable Weaver', fact: 'Sociable weavers build apartment nests in trees housing up to 100 bird families for decades.' },
        { name: 'Eggshell Micro-Pores & Respiration', animal: '🦆 Mandarin Duck', fact: 'Eggshells have thousands of microscopic pores allowing oxygen intake while preventing water dehydration.' },
        { name: 'Darwin’s Finches & Adaptive Radiation', animal: '🐦 Medium Ground Finch', fact: 'Galapagos finch beak depths evolved rapidly in response to droughts and hard seeds.' },
        { name: 'Wetland Waders: Herons & Flamingos', animal: '🦩 Greater Flamingo', fact: 'Flamingos filter upside-down using keratinous lamellae in beaks to trap brine shrimp and carotenoids.' },
        { name: 'Avian Conservation: Condor Recovery', animal: '🦅 California Condor', fact: 'Intensive captive breeding rescued the California Condor from just 22 individuals in 1987 to over 500 today.' }
      ]
    },
    {
      id: 'course-6',
      number: 6,
      title: 'Reptiles, Amphibians & Insects',
      title_zh: '爬蟲類、兩棲類與昆蟲世界',
      title_es: 'Herpetología y Entomología',
      difficulty: 'Expert',
      skillCount: 20, // 20 skills
      color: '#e11d48',
      skills: [
        { name: 'Ectothermy & Solar Thermoregulation', animal: '🦎 Marine Iguana', fact: 'Ectotherms warm up on dark volcanic rocks before diving into chilly oceanic waters.' },
        { name: 'Amphibian Metamorphosis: Gills to Lungs', animal: '🐸 American Bullfrog', fact: 'Thyroid hormones trigger tadpole tail absorption and the development of limbs and adult lungs.' },
        { name: 'Cutaneous Skin Breathing', animal: '🦎 Hellbender Salamander', fact: 'Amphibians absorb dissolved oxygen directly through moist vascularized dermal skin layers.' },
        { name: 'Poison Dart Alkaloid Chemistry', animal: '🐸 Golden Poison Frog', fact: 'A single 2-inch golden poison frog carries enough batrachotoxin to stop the hearts of 10 humans.' },
        { name: 'Salamander Blastema Regeneration', animal: '🦎 Tiger Salamander', fact: 'Salamander cells revert to undifferentiated pluripotent stem cells to regrow intact limbs.' },
        { name: 'The Amniotic Egg Evolutionary Leap', animal: '🐢 Green Sea Turtle', fact: 'Amnion, chorion, and allantois membranes allowed tetrapods to reproduce on dry land without ponds.' },
        { name: 'Reptilian Keratin Scales & Shedding', animal: '🐍 Ball Python', fact: 'Keratin beta-layers prevent desiccation and are shed periodically as animals grow.' },
        { name: 'Kinetic Skulls & Limbless Locomotion', animal: '🐍 King Cobra', fact: 'Flexible mandibular ligaments let snakes swallow whole prey five times the width of their heads.' },
        { name: 'Jacobson’s Vomeronasal Organ', animal: '🦎 Komodo Dragon', fact: 'Forked tongues deliver airborne scent molecules to the roof of the mouth for 3D chemical mapping.' },
        { name: 'Constrictors vs. Hemotoxic/Neurotoxic Venom', animal: '🐍 Timber Rattlesnake', fact: 'Hemotoxins destroy red blood cells and tissue; neurotoxins paralyze respiratory diaphragms.' },
        { name: 'Crocodilian 200-Million-Year Lineage', animal: '🐊 Saltwater Crocodile', fact: 'Crocodiles have a four-chambered heart and valve of Panizza to redirect blood while diving.' },
        { name: 'Chelonian Shell Anatomy (Carapace & Plastron)', animal: '🐢 Galapagos Giant Tortoise', fact: 'A turtle’s shell is fused directly into its spine and ribcage; it cannot crawl out of its shell.' },
        { name: 'Chameleon Eyes & Zygodactylous Feet', animal: '🦎 Veiled Chameleon', fact: 'Chameleon eyes move independently with 360-degree field of vision and monocular stereoscopy.' },
        { name: 'Exoskeletons: Chitin & Sclerotization', animal: '🪲 Goliath Beetle', fact: 'Arthropod exoskeletons provide muscle anchor points and watertight armor against desiccation.' },
        { name: 'Holometabolous Complete Metamorphosis', animal: '🦋 Monarch Butterfly', fact: 'Holometabolous insects undergo egg, larva, pupa, and adult stages with complete tissue remodeling.' },
        { name: 'Superorganism Social Castes', animal: '🐜 Leafcutter Ant', fact: 'Colonies function as single organism with specialized queens, minor workers, and major soldiers.' },
        { name: 'Honeybee Waggle Dance Semiotics', animal: '🐝 Western Honeybee', fact: 'The angle of the waggle run relative to gravity communicates exact direction to nectar flowers.' },
        { name: 'Coleoptera: 400,000 Species of Beetles', animal: '🪲 Hercules Beetle', fact: 'One out of every four named animal species on Earth is a beetle (Order Coleoptera).' },
        { name: 'Monarch Multi-Generational Migration', animal: '🦋 Monarch Butterfly', fact: 'It takes four successive generations of monarchs to complete their annual migration journey.' },
        { name: 'Parasitoid Wasp Ecological Balance', animal: '🐝 Jewel Wasp', fact: 'Parasitoids inject precise neurotoxins that turn cockroaches into compliant live food for larvae.' }
      ]
    },
    {
      id: 'course-7',
      number: 7,
      title: 'Prehistoric Evolution & Extinction',
      title_zh: '史前演化、化石與大滅絕',
      title_es: 'Evolución Prehistórica y Extinciones',
      difficulty: 'Master',
      skillCount: 22, // 22 skills
      color: '#7c3aed',
      skills: [
        { name: 'Deep Geologic Time: 4.6-Billion-Year Clock', animal: '🪨 Stromatolite', fact: 'If Earth’s history were a 24-hour day, humans only appeared in the final 4 seconds before midnight.' },
        { name: 'The Cambrian Explosion of Body Plans', animal: '🦐 Anomalocaris', fact: '541 million years ago, almost all modern animal phyla emerged in a 20-million-year burst.' },
        { name: 'Tiktaalik: Walking Tetrapod Ancestor', animal: '🐟 Tiktaalik roseae', fact: 'Tiktaalik fossils possess wrist bones and a mobile neck bridging the gap between fish and tetrapods.' },
        { name: 'Carboniferous Oxygen & Giant Arthropods', animal: '🦗 Meganeura Dragonfly', fact: 'Atmospheric oxygen reached 35%, allowing dragonflies with 2.5-foot wingspans to evolve.' },
        { name: 'The Permian Great Dying (The Great Reset)', animal: '🦎 Dimetrodon', fact: 'The largest mass extinction wiped out 96% of all marine species and 70% of terrestrial vertebrates.' },
        { name: 'The Triassic Dawn of Early Dinosaurs', animal: '🦖 Coelophysis', fact: 'Dinosaurs began as agile bipedal carnivores before diversifying across continents.' },
        { name: 'Jurassic Sauropod Gigantism Mechanics', animal: '🦕 Brachiosaurus', fact: 'Sauropods had hollow bird-like air sacs inside neck vertebrae that reduced weight without loss of strength.' },
        { name: 'Theropod Apex Anatomy: T-Rex', animal: '🦖 Tyrannosaurus Rex', fact: 'T-Rex had 12,800 PSI crushing bite force, capable of pulverizing bone into digestible fragments.' },
        { name: 'Pterosaurs: Airborne Reptilian Kings', animal: '🦅 Quetzalcoatlus', fact: 'Quetzalcoatlus stood as tall as a giraffe with a 36-foot wingspan and launched off four limbs.' },
        { name: 'Mesozoic Oceans: Mosasaurs & Plesiosaurs', animal: '🐊 Mosasaurus', fact: 'Mosasaurs were giant marine squamates related to modern monitor lizards with hinged jaws.' },
        { name: 'Archaeopteryx: Dinosaur-Bird Transition', animal: '🦅 Archaeopteryx', fact: 'Fossils exhibit flight feathers alongside dinosaurian teeth, claws on wings, and a bony tail.' },
        { name: 'The Chicxulub K-Pg Asteroid Impact', animal: '☄️ 6-Mile Asteroid', fact: 'A 6-mile-wide asteroid struck the Yucatan peninsula 66 million years ago, ending the reign of non-avian dinosaurs.' },
        { name: 'Mammalian Radiation in the Cenozoic', animal: '🦣 Eohippus', fact: 'Mammals diversified rapidly to fill ecological niches vacated by extinct giant dinosaurs.' },
        { name: 'Otodus Megalodon: Apex Ocean Predator', animal: '🦈 Megalodon Shark', fact: 'Megalodon grew to 60 feet in length with 7-inch teeth designed to bite through whale ribcages.' },
        { name: 'Pleistocene Megafauna: Woolly Mammoths', animal: '🦣 Woolly Mammoth', fact: 'Mammoths survived arctic freezes with 3-foot outer guard hair and a 4-inch layer of insulating subcutaneous fat.' },
        { name: 'Smilodon: Sabertooth Precision Predators', animal: '🐅 Smilodon fatalis', fact: 'Sabertooth cats used 11-inch curved canines to deliver precision bites to the throats of prey.' },
        { name: 'Giant Ground Sloths: Megatherium', animal: '🦥 Megatherium', fact: 'Megatherium weighed 4 tons and stood 12 feet tall, browsing high trees with massive curved claws.' },
        { name: 'Island Gigantism & Dwarfism (Foster’s Rule)', animal: '🦤 Dodo Bird', fact: 'Islands cause small animals to grow gigantic (Moas, Dodos) and large herbivores to shrink (Pygmy Elephants).' },
        { name: 'The Quaternary Megafaunal Extinction', animal: '🦣 Woolly Rhino', fact: 'A combination of rapid climate warming and human hunting drove large megafauna to extinction 11,000 years ago.' },
        { name: 'Paleogenomics & De-Extinction Possibilities', animal: '🧬 Ancient DNA', fact: 'Scientists have sequenced full woolly mammoth genomes and explore CRISPR genetic restoration.' },
        { name: 'Living Fossils: Coelacanths & Horseshoe Crabs', animal: '🐟 Coelacanth', fact: 'Coelacanths were thought extinct for 66 million years until a live specimen was hauled up off South Africa in 1938.' },
        { name: 'The Anthropocene & Earth’s 6th Extinction', animal: '🐅 Sumatran Tiger', fact: 'Human habitat fragmentation, warming, and invasive species cause extinction rates 1,000 times background rates.' }
      ]
    },
    {
      id: 'course-8',
      number: 8,
      title: 'Botany & The Plant Kingdom',
      title_zh: '植物學與綠色植物王國',
      title_es: 'Botánica y el Reino Vegetal',
      difficulty: 'Advanced',
      skillCount: 18,
      color: '#16a34a',
      skills: [
        { name: 'Plant Cell Anatomy: Chloroplasts & Walls', animal: '🌿 Plant Cell', fact: 'Plant cells have rigid cellulose walls and chloroplasts containing chlorophyll for solar energy capture.' },
        { name: 'Photosynthesis Chemistry: Solar to Sugar', animal: '☀️ Leaf Stomata', fact: 'Plants convert sunlight, water, and atmospheric CO2 into energy-rich glucose and oxygen gas.' },
        { name: 'Carnivorous Plants: Bug Trappers', animal: '🪴 Venus Flytrap', fact: 'Carnivorous plants digest insects with enzymes to obtain essential nitrogen in acidic, nutrient-depleted bogs.' },
        { name: 'The Wood Wide Web: Mycorrhizal Networks', animal: '🍄 Forest Mycorrhizae', fact: 'Underground fungal mycelium networks connect tree roots, trading soil minerals for plant sugars and sending hazard warnings.' },
        { name: 'Vascular Plumbing: Xylem & Phloem', animal: '🌲 Coast Redwood', fact: 'Xylem pulls water hundreds of feet upward via capillary transpirational pull; phloem distributes photosynthesized sugars.' },
        { name: 'Desert Succulents & CAM Photosynthesis', animal: '🌵 Saguaro Cactus', fact: 'CAM plants only open leaf stomata at night to absorb CO2, minimizing daytime evaporation.' },
        { name: 'Ancient Botanical Giants: Sequoias', animal: '🌲 General Sherman Tree', fact: 'Giant Sequoias contain thick fire-resistant tannin bark and can live for over 3,000 years.' },
        { name: 'Flower Reproductive Anatomy', animal: '🌸 Tropical Orchid', fact: 'Pistils receive pollen on stigmas, while stamens produce microspores to fertilize ovules into seeds.' },
        { name: 'Co-evolution with Animal Pollinators', animal: '🐝 Honeybee & Blossom', fact: 'Flowers evolved vivid ultraviolet petal runway patterns specifically visible only to insect eyes.' },
        { name: 'Seed Dispersal Engineering', animal: '🌾 Dandelion & Coconut', fact: 'Seeds travel via wind parachutes, ocean floatation, animal fur hooks, and explosive ballistic pods.' },
        { name: 'Botanical Chemical Defenses & Toxins', animal: '🌹 Poison Ivy & Rose', fact: 'Plants produce urushiol oils, bitter tannins, and caffeine to poison or deter herbivore insects.' },
        { name: 'Epiphytes: Living on Canopies', animal: '🌿 Spanish Moss & Bromeliad', fact: 'Epiphytes grow harmlessly on tree branches, deriving water and nutrients directly from mist and rainfall.' },
        { name: 'Parasitic Flora: The Corpse Flower', animal: '🌺 Rafflesia arnoldii', fact: 'Rafflesia has no roots, stems, or leaves; it steals nutrients from vine hosts and smells of rotting meat.' },
        { name: 'Aquatic Giants: Water Lilies & Mangroves', animal: '🪷 Giant Amazon Water Lily', fact: 'Amazon water lily pads grow up to 10 feet wide with notched rims and underside spines to support 100 lbs.' },
        { name: 'Ancient Seedless Ferns & Spores', animal: '🌿 Giant Tree Fern', fact: 'Ferns originated 360 million years ago and reproduce via microscopic spores released from underside sori.' },
        { name: 'Gymnosperms: Conifers & Cones', animal: '🌲 Bristlecone Pine', fact: 'Gymnosperms bear unenclosed naked seeds inside protective wooden cones and survive in harsh subalpine climes.' },
        { name: 'Angiosperms: The Flowering Revolution', animal: '🌻 Common Sunflower', fact: 'Flowering angiosperms dominate 80% of terrestrial flora thanks to enclosed seeds inside nutritious fruit.' },
        { name: 'Ethnobotany & Global Forest Conservation', animal: '🌱 Willow & Cinchona', fact: 'Over 25% of modern prescription medicines originate from wild rainforest botanical compounds.' }
      ]
    }
  ];

  class WildlifeAcademyPageController {
    constructor() {
      this.units = UNITS_CONFIG;
      this.totalSkills = this.units.reduce((acc, u) => acc + u.skillCount, 0); // 128 skills
      this.totalMasteryPoints = this.totalSkills * 100 + (24 * 150) + (7 * 300) + 500; // ~20,000 pts
      this.storageKey = 'ak_academy_skill_levels';

      // Current Exam / Practice State
      this.activeLesson = null;
      this.activeUnit = null;
      this.currentQIndex = 0;
      this.coreQuestions = [];
      this.bonusQuestion = null;
      this.inBonusMode = false;
      this.correctCount = 0;
      this.hasSkipped = false;
      this.userAnswers = [];

      this.initStorage();
    }

    initStorage() {
      if (!localStorage.getItem(this.storageKey)) {
        localStorage.setItem(this.storageKey, JSON.stringify({}));
      }
      if (!localStorage.getItem('ak_academy_xp')) {
        localStorage.setItem('ak_academy_xp', '0');
      }
    }

    getSkillLevels() {
      try {
        return JSON.parse(localStorage.getItem(this.storageKey) || '{}');
      } catch (e) {
        return {};
      }
    }

    setSkillLevel(id, status) {
      const data = this.getSkillLevels();
      data[id] = status; // 'unstarted', 'needs_work', 'familiar', 'proficient'
      localStorage.setItem(this.storageKey, JSON.stringify(data));
      this.updateMasteryHeader();
      this.renderUnitsGrid();
    }

    getSkillStatus(id) {
      const data = this.getSkillLevels();
      return data[id] || 'unstarted';
    }

    getLang() {
      return (window.AK_I18N && window.AK_I18N.getLanguage) ? window.AK_I18N.getLanguage() : 'en';
    }

    getText(obj, key) {
      if (!obj) return '';
      const lang = this.getLang();
      if (lang === 'zh' && obj[key + '_zh']) return obj[key + '_zh'];
      if (lang === 'es' && obj[key + '_es']) return obj[key + '_es'];
      return obj[key] || '';
    }

    calculateMastery() {
      const levels = this.getSkillLevels();
      let earned = 0;
      Object.keys(levels).forEach(id => {
        const st = levels[id];
        let maxVal = 100;
        if (id.includes('quiz')) maxVal = 150;
        if (id.includes('test')) maxVal = 300;
        if (id === 'capstone-exam') maxVal = 500;

        if (st === 'proficient') earned += maxVal;
        else if (st === 'familiar') earned += Math.round(maxVal * 0.6);
        else if (st === 'needs_work') earned += Math.round(maxVal * 0.2);
      });

      earned = Math.min(earned, this.totalMasteryPoints);
      const percent = Math.round((earned / this.totalMasteryPoints) * 100);
      return { earned, total: this.totalMasteryPoints, percent };
    }

    getUpNextUnitId() {
      const levels = this.getSkillLevels();
      for (let u of this.units) {
        for (let i = 1; i <= u.skillCount; i++) {
          const sid = `${u.id}-s${i}`;
          if (levels[sid] !== 'proficient') return u.id;
        }
      }
      return this.units[0].id;
    }

    init() {
      this.updateHeaderStats();
      this.renderSidebar();
      this.updateMasteryHeader();
      this.renderUnitsGrid();
      this.bindEvents();
    }

    updateHeaderStats() {
      const xp = parseInt(localStorage.getItem('ak_academy_xp') || '0', 10);
      const coins = parseInt(localStorage.getItem('ak_user_coins') || '150', 10);

      const xpEl = document.getElementById('ka-header-xp');
      if (xpEl) xpEl.textContent = `${xp} XP`;

      const coinEl = document.getElementById('ka-header-coins');
      if (coinEl) coinEl.textContent = `${coins}`;

      if (window.AK_ACADEMY && window.AK_ACADEMY.getCurrentLevelObj) {
        const lvlObj = window.AK_ACADEMY.getCurrentLevelObj(xp);
        const lvlEl = document.getElementById('ka-header-level');
        if (lvlEl) lvlEl.textContent = `${lvlObj.badge} Lv.${lvlObj.level}`;
      }
    }

    updateMasteryHeader() {
      const m = this.calculateMastery();
      const pctEl = document.getElementById('ka-mastery-pct');
      if (pctEl) pctEl.textContent = `${m.percent}%`;

      const ptsEl = document.getElementById('ka-mastery-pts');
      if (ptsEl) ptsEl.textContent = `${m.earned.toLocaleString()} / ${m.total.toLocaleString()} mastery points`;

      const fillEl = document.getElementById('ka-mastery-fill');
      if (fillEl) fillEl.style.width = `${m.percent}%`;
    }

    renderSidebar() {
      const listEl = document.getElementById('ka-sidebar-units-list');
      if (!listEl) return;

      const upNextId = this.getUpNextUnitId();
      let html = '';

      this.units.forEach((u) => {
        const isActive = u.id === upNextId;
        const title = this.getText(u, 'title');
        html += `
          <li class="ka-sidebar-item ${isActive ? 'active' : ''}" id="sidebar-item-${u.id}">
            <a href="#unit-card-${u.id}" class="ka-sidebar-link" onclick="window.AK_PAGE.onSelectSidebarUnit('${u.id}')">
              <span class="ka-sidebar-unit-num">Unit ${u.number} • ${u.skillCount} Skills</span>
              <span class="ka-sidebar-unit-title">${title}</span>
            </a>
          </li>
        `;
      });

      html += `
        <li class="ka-sidebar-item" id="sidebar-item-capstone">
          <a href="#unit-card-capstone" class="ka-sidebar-link" onclick="window.AK_PAGE.onSelectSidebarUnit('capstone')">
            <span class="ka-sidebar-unit-num">GRAND CAPSTONE</span>
            <span class="ka-sidebar-unit-title">The Ultimate Wildlife Test</span>
          </a>
        </li>
      `;

      listEl.innerHTML = html;
    }

    onSelectSidebarUnit(id) {
      document.querySelectorAll('.ka-sidebar-item').forEach(el => el.classList.remove('active'));
      const activeEl = document.getElementById(`sidebar-item-${id}`);
      if (activeEl) activeEl.classList.add('active');

      const target = document.getElementById(`unit-card-${id}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.style.transition = 'box-shadow 0.3s ease';
        target.style.boxShadow = '0 0 0 4px rgba(59, 130, 246, 0.4)';
        setTimeout(() => { target.style.boxShadow = ''; }, 1500);
      }
    }

    // Render 2-Column Grid of Units
    renderUnitsGrid() {
      const gridEl = document.getElementById('ka-units-grid');
      if (!gridEl) return;

      const upNextId = this.getUpNextUnitId();
      let html = '';

      this.units.forEach((u) => {
        const isUpNext = u.id === upNextId;
        const unitTitle = this.getText(u, 'title');
        const squaresHtml = this.renderUnitSquares(u);

        html += `
          <div class="ka-unit-card ${isUpNext ? 'active-unit' : ''}" id="unit-card-${u.id}">
            <div class="ka-unit-header-row">
              <div class="ka-unit-title-wrap">
                <div class="ka-unit-number-tag">
                  Unit ${u.number} (${u.difficulty} • ${u.skillCount} Skills)
                  ${isUpNext ? '<span class="ka-badge-up-next">✦ UP NEXT FOR YOU!</span>' : ''}
                </div>
                <h3 class="ka-unit-name">${unitTitle}</h3>
              </div>
              <span class="ka-unit-points-meta">${this.getUnitPointsMeta(u)} pts</span>
            </div>

            <!-- Tiny Squares Grid -->
            <div class="ka-squares-wrapper">
              ${squaresHtml}
            </div>
          </div>
        `;
      });

      // Capstone Card
      html += `
        <div class="ka-unit-card capstone-card" id="unit-card-capstone">
          <div class="ka-unit-header-row">
            <div class="ka-unit-title-wrap">
              <div class="ka-unit-number-tag">
                GRAND CAPSTONE EXAM
              </div>
              <h3 class="ka-unit-name">The Ultimate Wildlife Test</h3>
            </div>
            <span class="ka-unit-points-meta">500 pts</span>
          </div>

          <p style="font-size: 13px; color: #78350f; margin-bottom: 12px;">
            The grand examination testing all 128 skills across Earth’s wild kingdoms! Earn the Grand Master Zoologist Diploma.
          </p>

          <div class="ka-squares-wrapper">
            <div class="ka-cluster-group">
              <div class="ka-sq sq-capstone ${this.getSquareClass('capstone-exam')}"
                   data-tooltip="The Ultimate 25-Question Capstone Exam (Grand Diploma)"
                   onclick="window.AK_PAGE.openCapstoneTest()">
                ⭐
              </div>
            </div>
          </div>
        </div>
      `;

      gridEl.innerHTML = html;
    }

    getUnitPointsMeta(unit) {
      const levels = this.getSkillLevels();
      let earned = 0;
      let total = unit.skillCount * 100 + (3 * 150) + 300;

      for (let i = 1; i <= unit.skillCount; i++) {
        const sid = `${unit.id}-s${i}`;
        const st = levels[sid];
        if (st === 'proficient') earned += 100;
        else if (st === 'familiar') earned += 60;
        else if (st === 'needs_work') earned += 20;
      }
      return `${earned} / ${total}`;
    }

    getSquareClass(id) {
      const st = this.getSkillStatus(id);
      if (st === 'proficient') return 'sq-proficient';
      if (st === 'familiar') return 'sq-familiar';
      if (st === 'needs_work') return 'sq-needs-work';
      return 'sq-unstarted';
    }

    getSquareContent(id, isQuiz = false, isTest = false) {
      const st = this.getSkillStatus(id);
      if (st === 'proficient') return '✓';
      if (isTest) return '⭐';
      if (isQuiz) return '❔';
      return '';
    }

    // Build clusters of tiny squares with Quiz ❔ and Test ⭐
    renderUnitSquares(unit) {
      let html = '';
      const total = unit.skillCount;
      const clusterSize = Math.ceil(total / 3);

      let currentSkillIndex = 1;

      // Group 1
      html += `<div class="ka-cluster-group">`;
      for (let i = 0; i < clusterSize && currentSkillIndex <= total; i++, currentSkillIndex++) {
        html += this.renderSingleSquare(unit, currentSkillIndex);
      }
      html += `</div>`;

      // Quiz 1 (❔)
      const q1Id = `${unit.id}-quiz-1`;
      html += `
        <div class="ka-sq sq-quiz ${this.getSquareClass(q1Id)}"
             data-tooltip="Checkpoint Quiz 1 (❔)"
             onclick="window.AK_PAGE.openQuizModal('${unit.id}', 1)">
          ${this.getSquareContent(q1Id, true, false)}
        </div>
      `;

      // Group 2
      html += `<div class="ka-cluster-group">`;
      for (let i = 0; i < clusterSize && currentSkillIndex <= total; i++, currentSkillIndex++) {
        html += this.renderSingleSquare(unit, currentSkillIndex);
      }
      html += `</div>`;

      // Quiz 2 (❔)
      const q2Id = `${unit.id}-quiz-2`;
      html += `
        <div class="ka-sq sq-quiz ${this.getSquareClass(q2Id)}"
             data-tooltip="Checkpoint Quiz 2 (❔)"
             onclick="window.AK_PAGE.openQuizModal('${unit.id}', 2)">
          ${this.getSquareContent(q2Id, true, false)}
        </div>
      `;

      // Group 3
      html += `<div class="ka-cluster-group">`;
      while (currentSkillIndex <= total) {
        html += this.renderSingleSquare(unit, currentSkillIndex);
        currentSkillIndex++;
      }
      html += `</div>`;

      // Unit Test (⭐)
      const testId = `${unit.id}-unit-test`;
      html += `
        <div class="ka-sq sq-test ${this.getSquareClass(testId)}"
             data-tooltip="Unit ${unit.number} Comprehensive Exam (⭐)"
             onclick="window.AK_PAGE.openUnitTestModal('${unit.id}')">
          ${this.getSquareContent(testId, false, true)}
        </div>
      `;

      return html;
    }

    renderSingleSquare(unit, index) {
      const skill = unit.skills[index - 1] || { name: `Skill ${index}`, animal: '🐾', fact: 'Wildlife Biology Concept' };
      const sid = `${unit.id}-s${index}`;
      const status = this.getSkillStatus(sid);

      let statusLabel = 'Unstarted ⬜';
      if (status === 'needs_work') statusLabel = 'Needs Work 🟥';
      if (status === 'familiar') statusLabel = 'Familiar 🟧';
      if (status === 'proficient') statusLabel = 'Proficient ✅';

      return `
        <div class="ka-sq ${this.getSquareClass(sid)}"
             data-tooltip="${index}. ${skill.name} (${statusLabel})"
             onclick="window.AK_PAGE.openSkillModal('${unit.id}', ${index})">
          ${this.getSquareContent(sid, false, false)}
        </div>
      `;
    }

    // ========================================================================
    // LESSON QUESTION GENERATION & MULTI-QUESTION QUIZ ENGINE
    // Rules from user:
    // 1. Multiple questions per lesson
    // 2. If wrong -> Bonus question appears; get bonus right -> can get proficient
    // 3. Can skip question -> but won't get proficient (max familiar)
    // 4. If get most wrong -> end page says "Keep working!" & button "Go to next lesson"
    // ========================================================================
    openSkillModal(unitId, skillIndex) {
      const unit = this.units.find(u => u.id === unitId);
      if (!unit) return;
      const skill = unit.skills[skillIndex - 1] || { name: `Skill ${skillIndex}`, animal: '🐾', fact: 'Wildlife concept' };

      this.activeUnit = unit;
      this.activeLesson = { ...skill, index: skillIndex, id: `${unit.id}-s${skillIndex}` };
      this.currentQIndex = 0;
      this.correctCount = 0;
      this.hasSkipped = false;
      this.inBonusMode = false;

      // Generate 3 core questions + 1 bonus redemption question for this skill
      this.coreQuestions = this.generateQuestionsForSkill(skill, unit);
      this.bonusQuestion = this.generateBonusQuestionForSkill(skill);

      // STEP 1: Display long reading paragraph first!
      this.renderLessonReadingScreen();
    }

    // Vocabulary Dictionary with kid-friendly (9-year-old) explanations and awesome facts
    getVocabDefinitions() {
      return {
        'habitat': {
          term: 'Habitat',
          category: 'Ecology',
          icon: '🏡',
          pronounce: 'HAB-ih-tat',
          def: 'The natural home where an animal or plant lives and finds everything it needs: food, clean water, shelter, and safe space.',
          fact: 'Tropical rainforest habitats cover only 6% of Earth’s land, but over half of all the world’s animals and plants live there!'
        },
        'habitats': {
          term: 'Habitats',
          category: 'Ecology',
          icon: '🏡',
          pronounce: 'HAB-ih-tats',
          def: 'Natural homes where animals or plants live and find food, water, and shelter.',
          fact: 'Habitats can be as huge as an entire ocean or as tiny as a single puddle inside a tree!'
        },
        'adaptation': {
          term: 'Adaptation',
          category: 'Survival',
          icon: '⚡',
          pronounce: 'ad-ap-TAY-shun',
          def: 'A special body part or clever behavior that helps a creature survive and thrive in its wild home.',
          fact: 'Polar bears have black skin hidden under see-through fur to absorb warm heat directly from the sun!'
        },
        'adaptations': {
          term: 'Adaptations',
          category: 'Survival',
          icon: '⚡',
          pronounce: 'ad-ap-TAY-shunz',
          def: 'Special body features or clever behaviors that help creatures survive in their wild homes.',
          fact: 'Woodpeckers have super spongy skulls that absorb shocks like football helmets when pecking trees!'
        },
        'adapt': {
          term: 'Adapt',
          category: 'Survival',
          icon: '🔄',
          pronounce: 'uh-DAPT',
          def: 'To develop special body features or habits over time to survive easily in an environment.',
          fact: 'Camels adapt to desert heat by storing fat inside humps so they can go weeks without drinking water.'
        },
        'adapted': {
          term: 'Adapted',
          category: 'Survival',
          icon: '🔄',
          pronounce: 'uh-DAP-tid',
          def: 'Having special features or skills that make it easy to survive.',
          fact: 'Deep sea fish are adapted to survive water pressure strong enough to crush a car!'
        },
        'predator': {
          term: 'Predator',
          category: 'Food Web',
          icon: '🦁',
          pronounce: 'PRED-uh-ter',
          def: 'An animal that hunts and catches other animals for food, like a lion, eagle, or shark.',
          fact: 'Cheetahs are the fastest land predators on Earth, accelerating from 0 to 60 mph in just 3 seconds!'
        },
        'predators': {
          term: 'Predators',
          category: 'Food Web',
          icon: '🦅',
          pronounce: 'PRED-uh-terz',
          def: 'Animals that hunt and eat other animals for food.',
          fact: 'Barn owls have asymmetrical ears (one higher than the other) to pinpoint mice in total darkness!'
        },
        'predation': {
          term: 'Predation',
          category: 'Food Web',
          icon: '🏹',
          pronounce: 'preh-DAY-shun',
          def: 'When a hungry hunter catches and eats another creature.',
          fact: 'Predation helps keep nature healthy by stopping herbivore populations from eating all the plants.'
        },
        'prey': {
          term: 'Prey',
          category: 'Food Web',
          icon: '🐰',
          pronounce: 'PRAY',
          def: 'An animal that is hunted and eaten by predators, like a rabbit, gazelle, or tiny fish.',
          fact: 'Rabbits have eyes placed on the sides of their head so they can see nearly 360 degrees around them!'
        },
        'ecosystem': {
          term: 'Ecosystem',
          category: 'Ecology',
          icon: '🌍',
          pronounce: 'EE-koh-sis-tem',
          def: 'A community where living animals, plants, water, air, and rocks all interact and share life together.',
          fact: 'The Great Barrier Reef is the largest living ecosystem on Earth and can even be seen from outer space!'
        },
        'ecosystems': {
          term: 'Ecosystems',
          category: 'Ecology',
          icon: '🌍',
          pronounce: 'EE-koh-sis-temz',
          def: 'Communities of living things and nature sharing air, water, and food.',
          fact: 'A single rotting tree log in the forest is its own miniature ecosystem housing thousands of critters!'
        },
        'food web': {
          term: 'Food Web',
          category: 'Food Web',
          icon: '🕸️',
          pronounce: 'FOOD WEB',
          def: 'A connected network of food chains showing how sun energy moves through plants, herbivores, and predators.',
          fact: 'If you remove one keystone species from a food web, the whole ecosystem can shift completely!'
        },
        'herbivore': {
          term: 'Herbivore',
          category: 'Diet',
          icon: '🦒',
          pronounce: 'HER-bih-vor',
          def: 'An animal that eats only plants, grasses, leaves, tree bark, and sweet fruits.',
          fact: 'Giraffes spend up to 18 hours every day chewing leaves using long, blue-black 18-inch tongues!'
        },
        'herbivores': {
          term: 'Herbivores',
          category: 'Diet',
          icon: '🦓',
          pronounce: 'HER-bih-vorz',
          def: 'Plant-eating animals that munch on grasses, leaves, and berries.',
          fact: 'Giant pandas eat up to 28 pounds of tough bamboo every single day to stay full!'
        },
        'carnivore': {
          term: 'Carnivore',
          category: 'Diet',
          icon: '🐅',
          pronounce: 'KAR-nih-vor',
          def: 'A meat-eating animal equipped with sharp teeth or claws to eat other animals.',
          fact: 'The blue whale is technically a carnivore—it eats up to 4 tons of tiny shrimp-like krill every day!'
        },
        'carnivores': {
          term: 'Carnivores',
          category: 'Diet',
          icon: '🐊',
          pronounce: 'KAR-nih-vorz',
          def: 'Meat-eating hunters that survive on animal protein.',
          fact: 'Crocodiles can go for over a whole year without eating food because their body burns energy very slowly.'
        },
        'omnivore': {
          term: 'Omnivore',
          category: 'Diet',
          icon: '🐻',
          pronounce: 'OM-nih-vor',
          def: 'An animal that eats both meat and plants (like bears, raccoons, and human beings!).',
          fact: 'Grizzly bears eat sweet salmon fish in the fall and wild berries and tree roots in the spring!'
        },
        'omnivores': {
          term: 'Omnivores',
          category: 'Diet',
          icon: '🦝',
          pronounce: 'OM-nih-vorz',
          def: 'Animals that happily eat both plant foods and animal foods.',
          fact: 'Raccoons have super sensitive front paws that they use to wash fruits, nuts, frogs, and fish in rivers!'
        },
        'camouflage': {
          term: 'Camouflage',
          category: 'Survival',
          icon: '🦎',
          pronounce: 'KAM-uh-flahzh',
          def: 'Colors, patterns, or textures that help an animal blend into its background so no one can spot it.',
          fact: 'Octopuses can change both the color and texture of their skin to look like sandy coral in less than one second!'
        },
        'nocturnal': {
          term: 'Nocturnal',
          category: 'Habits',
          icon: '🌙',
          pronounce: 'nok-TER-nul',
          def: 'Animals that sleep during the daytime and wake up to hunt, play, or forage in the dark night.',
          fact: 'Bats are nocturnal mammals that can catch more than 1,000 pesky mosquitoes in just one hour of night flight!'
        },
        'diurnal': {
          term: 'Diurnal',
          category: 'Habits',
          icon: '☀️',
          pronounce: 'dy-ER-nul',
          def: 'Animals that are awake and busy during daylight hours and sleep soundly when night comes.',
          fact: 'Most songbirds and butterflies are diurnal because they need warm sunshine to see colorful flowers.'
        },
        'hibernation': {
          term: 'Hibernation',
          category: 'Survival',
          icon: '❄️',
          pronounce: 'hy-ber-NAY-shun',
          def: 'A deep, dormant winter sleep where an animal slows its heart and breathing to survive freezing cold.',
          fact: 'Arctic ground squirrels can let their body temperature drop below freezing without their blood freezing solid!'
        },
        'migrate': {
          term: 'Migrate',
          category: 'Habits',
          icon: '✈️',
          pronounce: 'MY-grayt',
          def: 'To travel a long distance with the seasons to find warmth, food, or a safe nursery for babies.',
          fact: 'Arctic Terns migrate 44,000 miles every year from the North Pole to the South Pole and back!'
        },
        'migration': {
          term: 'Migration',
          category: 'Habits',
          icon: '🗺️',
          pronounce: 'my-GRAY-shun',
          def: 'A seasonal journey made by groups of animals to find better weather and plenty of food.',
          fact: 'Millions of wildebeest and zebras travel together across the Serengeti in the Great Migration!'
        },
        'photosynthesis': {
          term: 'Photosynthesis',
          category: 'Plants',
          icon: '🌱',
          pronounce: 'foh-toh-SIN-thuh-sis',
          def: 'The magical process where green plants turn sunshine, water, and air into delicious plant sugar and fresh oxygen.',
          fact: 'Tiny ocean phytoplankton make over half of the oxygen gas that all humans and animals breathe on Earth!'
        },
        'species': {
          term: 'Species',
          category: 'Classification',
          icon: '🏷️',
          pronounce: 'SPEE-sheez',
          def: 'A specific group of living things that look similar and can have healthy babies together.',
          fact: 'Scientists estimate there are over 8.7 million different species of animals, plants, and fungi on Earth!'
        },
        'organism': {
          term: 'Organism',
          category: 'Biology',
          icon: '🔬',
          pronounce: 'OR-guh-niz-um',
          def: 'Any single living creature, including animals, tall trees, tiny mushrooms, and swimming pond bugs.',
          fact: 'The largest living organism on Earth is a giant honey fungus in Oregon that spreads over 3.5 square miles!'
        },
        'organisms': {
          term: 'Organisms',
          category: 'Biology',
          icon: '🔬',
          pronounce: 'OR-guh-niz-umz',
          def: 'Living creatures, including all animals, plants, trees, and fungi.',
          fact: 'There are more single-celled organisms in one spoonful of garden dirt than people living on Earth!'
        },
        'scavenger': {
          term: 'Scavenger',
          category: 'Food Web',
          icon: '🦅',
          pronounce: 'SKAV-en-jer',
          def: 'An animal that cleans up nature by eating animals or food that have already died.',
          fact: 'Vultures have stomach acid that is so powerful it safely destroys deadly germs like rabies and anthrax!'
        },
        'scavengers': {
          term: 'Scavengers',
          category: 'Food Web',
          icon: '🦀',
          pronounce: 'SKAV-en-jerz',
          def: 'Animals that clean up leftovers and dead matter in the wild.',
          fact: 'Crabs and hermit crabs act as underwater ocean vacuum cleaners by eating fallen organic matter on the seabed.'
        },
        'decomposer': {
          term: 'Decomposer',
          category: 'Ecology',
          icon: '🪱',
          pronounce: 'dee-kum-POH-zer',
          def: 'Living helpers like earthworms and mushrooms that turn dead leaves and wood into super rich, dark garden soil.',
          fact: 'Earthworms can eat their own body weight in soil and decaying leaves every single day!'
        },
        'decomposers': {
          term: 'Decomposers',
          category: 'Ecology',
          icon: '🍄',
          pronounce: 'dee-kum-POH-zerz',
          def: 'Helpful recyclers like fungi and worms that renew soil nutrients.',
          fact: 'Without decomposers, forests would quickly become buried under miles of dead fallen logs and leaves!'
        },
        'echolocation': {
          term: 'Echolocation',
          category: 'Superpowers',
          icon: '🐬',
          pronounce: 'ek-oh-loh-KAY-shun',
          def: 'A biological superpower where animals make clicking sounds and listen to the echoes to "see" in the dark.',
          fact: 'Dolphins and bats can use sound echoes to detect an object as thin as a single strand of human hair!'
        },
        'bioluminescence': {
          term: 'Bioluminescence',
          category: 'Superpowers',
          icon: '🏮',
          pronounce: 'by-oh-loo-mih-NES-ens',
          def: 'The magical ability of living creatures like fireflies and anglerfish to create their own glowing light.',
          fact: 'Deep in the ocean, over 75% of all sea creatures make their own colorful bioluminescent light!'
        },
        'metamorphosis': {
          term: 'Metamorphosis',
          category: 'Growth',
          icon: '🦋',
          pronounce: 'met-uh-MOR-fuh-sis',
          def: 'A magnificent life change where a young animal completely rebuilds its body into an adult (like a tadpole into a frog).',
          fact: 'Inside a chrysalis, a caterpillar’s body dissolves into liquid goo before assembling into butterfly wings!'
        },
        'exoskeleton': {
          term: 'Exoskeleton',
          category: 'Anatomy',
          icon: '🪲',
          pronounce: 'ek-soh-SKEL-eh-tun',
          def: 'A tough shell armor worn on the outside of an insect or crab’s body that protects it and supports muscles.',
          fact: 'Because exoskeletons are hard and cannot stretch, growing bugs have to molt and shed their old shells!'
        },
        'extinct': {
          term: 'Extinct',
          category: 'History',
          icon: '🦕',
          pronounce: 'ek-STINKT',
          def: 'When every single member of an animal or plant species has passed away and none live on Earth anymore.',
          fact: 'Dinosaurs roamed Earth for over 160 million years before going extinct 66 million years ago!'
        },
        'extinction': {
          term: 'Extinction',
          category: 'History',
          icon: '☄️',
          pronounce: 'ek-STINK-shun',
          def: 'When a whole family of animals or plants disappears forever from our planet.',
          fact: 'Protecting wild parks and forests prevents endangered species from facing extinction.'
        },
        'fossil': {
          term: 'Fossil',
          category: 'History',
          icon: '🦴',
          pronounce: 'FOSS-ul',
          def: 'The ancient stone print or preserved bony remains of a plant or animal that lived millions of years ago.',
          fact: 'Some fossilized dinosaur footprints are so clear you can see individual scale textures from the creature’s skin!'
        },
        'fossils': {
          term: 'Fossils',
          category: 'History',
          icon: '🪨',
          pronounce: 'FOSS-ulz',
          def: 'Rocky clues left behind by prehistoric creatures.',
          fact: 'Fossils of ancient sea shells have been discovered at the very peak of Mount Everest!'
        },
        'chloroplasts': {
          term: 'Chloroplasts',
          category: 'Plants',
          icon: '🍃',
          pronounce: 'KLOR-oh-plasts',
          def: 'Tiny green sun-cookers inside plant cells that trap solar rays to bake food for the plant.',
          fact: 'Chloroplasts give leaves their beautiful bright green color!'
        },
        'pollinator': {
          term: 'Pollinator',
          category: 'Plants',
          icon: '🐝',
          pronounce: 'PAHL-ih-nay-ter',
          def: 'A helpful animal like a bee, butterfly, or hummingbird that carries flower dust so plants can make fruits and seeds.',
          fact: 'Honeybees visit about 2,000 flowers each day to collect nectar and pollinate blooms!'
        },
        'pollinators': {
          term: 'Pollinators',
          category: 'Plants',
          icon: '🌸',
          pronounce: 'PAHL-ih-nay-terz',
          def: 'Friends of nature like bees, bats, and butterflies that spread pollen.',
          fact: 'One out of every three bites of delicious food we eat exists thanks to wild animal pollinators!'
        },
        'symbiosis': {
          term: 'Symbiosis',
          category: 'Friendship',
          icon: '🐠',
          pronounce: 'sim-by-OH-sis',
          def: 'A special partnership where two different kinds of creatures live closely together and help one another.',
          fact: 'Clownfish live safely inside stinging sea anemones, keeping the anemone clean while getting safe shelter!'
        },
        'venom': {
          term: 'Venom',
          category: 'Defense',
          icon: '🐍',
          pronounce: 'VEN-um',
          def: 'A defensive potion that an animal injects directly into prey or attackers using sharp fangs, teeth, or stingers.',
          fact: 'The Inland Taipan snake has enough venom in one bite to ward off 100 adult attackers!'
        },
        'poison': {
          term: 'Poison',
          category: 'Defense',
          icon: '🐸',
          pronounce: 'POY-zun',
          def: 'A harmful chemical defense that works if a predator tries to touch, bite, or swallow the animal.',
          fact: 'A golden poison frog has bright yellow skin to warn hungry jungle predators: "Do not lick me!"'
        }
      };
    }

    // Wrap vocabulary words inside clickable badge buttons that 9-year-olds can tap
    enrichTextWithVocab(text) {
      if (!text) return '';
      const vocabs = this.getVocabDefinitions();
      const keys = Object.keys(vocabs).sort((a, b) => b.length - a.length);
      const pattern = new RegExp(`\\b(${keys.join('|')})\\b`, 'gi');

      return text.replace(pattern, (match) => {
        const lower = match.toLowerCase();
        return `<button type="button" class="ka-vocab-word" onclick="window.AK_PAGE.showVocabPopup('${lower}', event)" title="Tap to see what '${match}' means!">${match} <span class="ka-vocab-hint-icon">❓</span></button>`;
      });
    }

    showVocabPopup(wordKey, event) {
      if (event) {
        event.preventDefault();
        event.stopPropagation();
      }
      const vocabs = this.getVocabDefinitions();
      const item = vocabs[wordKey.toLowerCase()] || { term: wordKey, def: 'A special science word in this lesson!' };

      const popBox = document.getElementById('ka-vocab-popover-box');
      if (popBox) {
        popBox.innerHTML = `
          <div class="ka-vocab-popover">
            <div class="ka-vocab-popover-title">
              <span>💡 Vocabulary Helper: <strong>${item.term}</strong></span>
              <button type="button" class="ka-vocab-popover-close" onclick="window.AK_PAGE.hideVocabPopup()">✕</button>
            </div>
            <div>${item.def}</div>
          </div>
        `;
        popBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      } else {
        alert(`${item.term}: ${item.def}`);
      }
    }

    hideVocabPopup() {
      const popBox = document.getElementById('ka-vocab-popover-box');
      if (popBox) popBox.innerHTML = '';
    }

    generateReadingPassage(skill, unit) {
      // Clear, engaging, friendly paragraph tailored for 9-year-olds
      return `Welcome to **Unit ${unit.number}: ${unit.title}**! In this lesson, we are exploring **${skill.name}** and getting to know our amazing wildlife friend, the **${skill.animal}**. Every animal has a home called a habitat, and each creature needs healthy food, clean water, and safe shelter to grow big and strong. To stay safe from predators and bad weather, animals develop special super skills called adaptations. For example, did you know? **${skill.fact}** By learning how the ${skill.animal} uses these clever tricks, young nature scientists like you can understand how all living creatures stay healthy in their ecosystem. Look closely at the cool facts below, tap any word you want to learn more about, and then show what you know in the questions!`;
    }

    formatMarkdown(text) {
      if (!text) return '';
      return String(text)
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
    }

    renderLessonReadingScreen() {
      const modal = document.getElementById('ka-modal-backdrop');
      const content = document.getElementById('ka-modal-content');
      if (!modal || !content) return;

      const curSkill = this.activeLesson;
      const unit = this.activeUnit;
      const rawPassage = this.generateReadingPassage(curSkill, unit);
      const markdownPassage = this.formatMarkdown(rawPassage);
      const interactivePassage = this.enrichTextWithVocab(markdownPassage);
      const enrichedFact = this.enrichTextWithVocab(curSkill.fact);

      content.innerHTML = `
        <div class="ka-modal-header">
          <div>
            <span class="ka-modal-tag">Unit ${unit.number} • Step 1: Read About This Animal</span>
            <h2 class="ka-modal-title">${curSkill.animal} — ${curSkill.name}</h2>
          </div>
          <button class="ka-modal-close-btn" onclick="window.AK_PAGE.closeModal()">✕</button>
        </div>

        <div class="ka-modal-body" style="padding: 24px 22px;">
          <!-- Kid-friendly guidance banner -->
          <div class="ka-vocab-banner">
            <span>✨ <strong>Reading Tip:</strong> Read the story below! If you see a blue dotted word with a question mark (❓), you can <strong>tap it</strong> to see what it means in plain words!</span>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 14px;">
            <span style="font-size: 13px; font-weight: 700; color: #2563eb; background: #eff6ff; padding: 5px 14px; border-radius: 20px;">
              📖 Step 1: Read this friendly story first!
            </span>
            <span style="font-size: 12px; color: #64748b; font-weight: 600;">
              Skill ${curSkill.index} of ${unit.skillCount}
            </span>
          </div>

          <div style="background: #ffffff; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 22px; font-size: 16px; line-height: 1.85; color: #1e293b; box-shadow: 0 4px 12px rgba(0,0,0,0.03); margin-bottom: 20px;">
            <p style="margin-bottom: 14px;">${interactivePassage}</p>
            
            <div style="background: #f0fdf4; border-left: 4px solid #10b981; padding: 14px 16px; border-radius: 6px; font-size: 15px; color: #065f46; margin-top: 14px; line-height: 1.6;">
              <strong>🔍 Cool Animal Fact:</strong> ${enrichedFact}
            </div>

            <!-- Vocabulary definition popup appears right here when clicked -->
            <div id="ka-vocab-popover-box"></div>
          </div>

          <div style="text-align: center;">
            <button class="ka-boost-btn" style="background: linear-gradient(135deg, #2563eb, #1d4ed8); color: #ffffff; font-size: 15px; padding: 12px 28px; border-radius: 8px; cursor: pointer; box-shadow: 0 4px 14px rgba(37,99,235,0.3);" onclick="window.AK_PAGE.renderLessonQuestionScreen()">
              ➔ I Read the Story! Let's Start the Questions
            </button>
          </div>
        </div>
      `;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    generateQuestionsForSkill(skill, unit) {
      return [
        {
          prompt: `1. Main Superpower: In our story about ${skill.name}, what makes the ${skill.animal} so special?`,
          options: [
            { text: skill.fact, correct: true },
            { text: 'It flies to the moon every single night.', correct: false },
            { text: 'It can turn into pure sunlight when it is scared.', correct: false }
          ]
        },
        {
          prompt: `2. How It Helps: Why is this special feature a big help for the ${skill.animal}?`,
          options: [
            { text: 'It helps it stay safe, find food, and survive easily in its home.', correct: true },
            { text: 'It means the animal never ever needs to drink water or eat food.', correct: false },
            { text: 'It lets the animal live without breathing any air at all.', correct: false }
          ]
        },
        {
          prompt: `3. Finding Food & Friends: How does ${skill.name} help in nature\'s food web?`,
          options: [
            { text: `It helps ${skill.animal} catch its dinner or stay hidden from hungry predators.`, correct: true },
            { text: 'It lets animals survive by eating only rocks and dirt.', correct: false },
            { text: 'It stops the seasons from ever getting cold or warm.', correct: false }
          ]
        },
        {
          prompt: `4. Weather and Changes: When the weather gets tough, how does the ${skill.animal} use this skill?`,
          options: [
            { text: `By using its clever body parts and smart natural habits to stay protected.`, correct: true },
            { text: 'By falling asleep for 500 years in a cave.', correct: false },
            { text: 'By growing extra legs and arms overnight.', correct: false }
          ]
        },
        {
          prompt: `5. Nature Explorers: How do scientists learn about the ${skill.animal} and its amazing skills?`,
          options: [
            { text: `By watching real animals carefully in the wild and taking field notes.`, correct: true },
            { text: 'By guessing randomly without ever looking at the animals.', correct: false },
            { text: 'By asking cartoon characters on television.', correct: false }
          ]
        },
        {
          prompt: `6. Helping Nature: Why is it important to protect the wild home of the ${skill.animal}?`,
          options: [
            { text: 'Because if their natural home is destroyed, these special animals cannot survive.', correct: true },
            { text: 'Because wild animals would rather live inside shopping malls.', correct: false },
            { text: 'Because ecosystems stay exactly the same even if animals disappear.', correct: false }
          ]
        }
      ];
    }

    generateBonusQuestionForSkill(skill) {
      return {
        prompt: `🌟 BONUS REDEMPTION QUESTION: Can you pick the true fact about the ${skill.animal}?`,
        options: [
          { text: `True Nature Fact: ${skill.fact}`, correct: true },
          { text: 'This animal is made entirely out of plastic.', correct: false },
          { text: 'This animal does not need to live on planet Earth.', correct: false }
        ]
      };
    }


    renderLessonQuestionScreen() {
      const modal = document.getElementById('ka-modal-backdrop');
      const content = document.getElementById('ka-modal-content');
      if (!modal || !content) return;

      const q = this.inBonusMode ? this.bonusQuestion : this.coreQuestions[this.currentQIndex];
      const curSkill = this.activeLesson;
      const unit = this.activeUnit;

      content.innerHTML = `
        <div class="ka-modal-header">
          <div>
            <span class="ka-modal-tag">Unit ${unit.number} • Step 2: Skill Review (Show What You Know)</span>
            <h2 class="ka-modal-title">${curSkill.animal} — ${curSkill.name}</h2>
          </div>
          <button class="ka-modal-close-btn" onclick="window.AK_PAGE.closeModal()">✕</button>
        </div>

        <div class="ka-modal-body">
          <!-- Lesson Spotlight Fact -->
          <div style="background: #eff6ff; border-left: 4px solid #3b82f6; padding: 12px 16px; border-radius: 6px; margin-bottom: 20px; font-size: 14px; color: #1e3a8a;">
            <strong>💡 Key Zoology Insight:</strong> ${curSkill.fact}
          </div>

          <!-- Question Tracker -->
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-size: 13px; font-weight: 700; color: #64748b;">
              ${this.inBonusMode ? '🌟 BONUS REDEMPTION ROUND' : `Question ${this.currentQIndex + 1} of ${this.coreQuestions.length}`}
            </span>
            ${!this.inBonusMode ? `
              <button class="ka-boost-btn" style="background: #f1f5f9; color: #64748b; font-size: 12px; padding: 5px 12px;" onclick="window.AK_PAGE.skipCurrentQuestion()">
                Skip Question ⏭️ (No Proficient)
              </button>
            ` : ''}
          </div>

          <!-- Question Prompt -->
          <div class="ka-quiz-prompt" style="${this.inBonusMode ? 'color: #d97706;' : ''}">
            ${q.prompt}
          </div>

          <!-- Options -->
          <div class="ka-quiz-options" id="active-question-options">
            ${q.options.map((opt, idx) => `
              <button class="ka-quiz-btn" onclick="window.AK_PAGE.submitLessonOptionAnswer(${idx})">
                <strong>${String.fromCharCode(65 + idx)}.</strong> ${opt.text}
              </button>
            `).join('')}
          </div>

          <div id="active-question-feedback"></div>
        </div>
      `;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    submitLessonOptionAnswer(optIdx) {
      const q = this.inBonusMode ? this.bonusQuestion : this.coreQuestions[this.currentQIndex];
      const opt = q.options[optIdx];
      const isCorrect = opt && opt.correct;

      const buttons = document.querySelectorAll('#active-question-options .ka-quiz-btn');
      buttons.forEach((b, idx) => {
        b.disabled = true;
        if (q.options[idx].correct) b.classList.add('opt-correct');
        else if (idx === optIdx) b.classList.add('opt-wrong');
      });

      const fb = document.getElementById('active-question-feedback');

      if (this.inBonusMode) {
        // Handled bonus question
        if (isCorrect) {
          this.correctCount++;
          if (fb) {
            fb.innerHTML = `
              <div class="ka-quiz-feedback fb-win">
                <strong>🌟 Bonus Correct!</strong> You redeemed your mistake! Continuing to next question...
              </div>
            `;
          }
        } else {
          if (fb) {
            fb.innerHTML = `
              <div class="ka-quiz-feedback fb-lose">
                <strong>Bonus Incorrect!</strong> Let’s keep moving forward!
              </div>
            `;
          }
        }

        setTimeout(() => {
          this.inBonusMode = false;
          this.currentQIndex++;
          if (this.currentQIndex < this.coreQuestions.length) {
            this.renderLessonQuestionScreen();
          } else {
            this.finishLessonAndShowEndPage();
          }
        }, 1300);

      } else {
        // Core Question
        if (isCorrect) {
          this.correctCount++;
          if (fb) {
            fb.innerHTML = `
              <div class="ka-quiz-feedback fb-win">
                <strong>✓ Correct!</strong> Great scientific deduction!
              </div>
            `;
          }
          if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(520);

          setTimeout(() => {
            this.currentQIndex++;
            if (this.currentQIndex < this.coreQuestions.length) {
              this.renderLessonQuestionScreen();
            } else {
              this.finishLessonAndShowEndPage();
            }
          }, 900);

        } else {
          // USER GOT IT WRONG -> Trigger Bonus Question!
          if (fb) {
            fb.innerHTML = `
              <div class="ka-quiz-feedback fb-lose">
                <strong>✕ Incorrect!</strong> But wait — a <strong>🌟 Bonus Question</strong> is unlocking! Answer it right to redeem and get Proficient ✅!
              </div>
            `;
          }
          if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(280);

          setTimeout(() => {
            this.inBonusMode = true;
            this.renderLessonQuestionScreen();
          }, 1500);
        }
      }
    }

    skipCurrentQuestion() {
      this.hasSkipped = true;
      this.currentQIndex++;
      if (this.currentQIndex < this.coreQuestions.length) {
        this.renderLessonQuestionScreen();
      } else {
        this.finishLessonAndShowEndPage();
      }
    }

    // ========================================================================
    // END PAGE SCENARIOS
    // 1. 100% (or redeemed bonus) & no skip -> Proficient ✅
    // 2. Partial / skipped -> Familiar 🟧
    // 3. Most wrong (<50%) -> "Keep working! 🟥" & button "Go to next lesson"
    // ========================================================================
    finishLessonAndShowEndPage() {
      const content = document.getElementById('ka-modal-content');
      if (!content) return;

      const total = this.coreQuestions.length;
      const sid = this.activeLesson.id;
      const unit = this.activeUnit;
      const nextIndex = this.activeLesson.index + 1;
      const hasNext = nextIndex <= unit.skillCount;

      let status = 'needs_work';
      let title = 'Keep working! 🟥';
      let message = 'You got most questions wrong on this skill. Keep working and explore the next lesson!';
      let badgeHtml = '<span style="color: #ef4444; font-weight: 800;">🟥 Needs Work</span>';

      if (this.correctCount === total && !this.hasSkipped) {
        status = 'proficient';
        title = '🎉 Mastered! Proficient ✅';
        message = 'Outstanding! You answered every question correctly (or redeemed via the bonus question) without skipping!';
        badgeHtml = '<span style="color: #10b981; font-weight: 800;">✅ Proficient</span>';
        this.awardRewards(100, 50);
        if (window.AK_AUDIO && window.AK_AUDIO.playVictory) window.AK_AUDIO.playVictory();
      } else if (this.correctCount >= Math.ceil(total / 2)) {
        status = 'familiar';
        title = 'Good progress! Familiar 🟧';
        message = this.hasSkipped
          ? 'You skipped questions, so maximum rank is Familiar 🟧. Practice again without skipping to reach Proficient ✅!'
          : 'Solid attempt! Practice again to reach 100% and unlock Proficient ✅.';
        badgeHtml = '<span style="color: #f97316; font-weight: 800;">🟧 Familiar</span>';
        this.awardRewards(60, 25);
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(480);
      } else {
        // Most wrong
        status = 'needs_work';
        title = 'Keep working! 🟥';
        message = 'You struggled with this skill. The square is marked Needs Work 🟥. Move on to the next lesson or retry anytime!';
        badgeHtml = '<span style="color: #ef4444; font-weight: 800;">🟥 Needs Work</span>';
        this.awardRewards(20, 10);
      }

      this.setSkillLevel(sid, status);

      content.innerHTML = `
        <div class="ka-modal-header">
          <div>
            <span class="ka-modal-tag">Unit ${unit.number} • Skill Results</span>
            <h2 class="ka-modal-title">${title}</h2>
          </div>
          <button class="ka-modal-close-btn" onclick="window.AK_PAGE.closeModal()">✕</button>
        </div>

        <div class="ka-modal-body" style="text-align: center; padding: 36px 20px;">
          <div style="font-size: 56px; margin-bottom: 12px;">
            ${status === 'proficient' ? '🏆' : (status === 'familiar' ? '🌿' : '📚')}
          </div>

          <h3 style="font-size: 24px; font-weight: 800; margin-bottom: 8px;">
            Result: ${badgeHtml}
          </h3>

          <p style="font-size: 15px; color: #475569; max-width: 520px; margin: 0 auto 24px auto; line-height: 1.5;">
            ${message}
          </p>

          <div style="display: flex; justify-content: center; gap: 12px; flex-wrap: wrap;">
            <button class="ka-boost-btn" style="background: #f1f5f9; color: #0f172a;" onclick="window.AK_PAGE.openSkillModal('${unit.id}', ${this.activeLesson.index})">
              Retry Skill 🔄
            </button>

            ${hasNext ? `
              <button class="ka-boost-btn" style="background: #2563eb; color: #ffffff;" onclick="window.AK_PAGE.openSkillModal('${unit.id}', ${nextIndex})">
                Go to next lesson ➔
              </button>
            ` : `
              <button class="ka-boost-btn" style="background: #10b981; color: #ffffff;" onclick="window.AK_PAGE.closeModal()">
                Complete Unit & Return to Dashboard 🎓
              </button>
            `}
          </div>
        </div>
      `;
    }

    // Checkpoint Quizzes (❔) and Unit Tests (⭐)
    openQuizModal(unitId, quizNum) {
      const unit = this.units.find(u => u.id === unitId);
      if (!unit) return;

      const qid = `${unit.id}-quiz-${quizNum}`;
      const questions = [
        {
          prompt: `Checkpoint Question: How do animals in Unit ${unit.number} stay safe in their home habitats?`,
          options: [
            { text: 'By using special body features and behaviors called adaptations.', correct: true },
            { text: 'By never moving or eating anything at all.', correct: false }
          ]
        },
        {
          prompt: `True or False: Living creatures in Unit ${unit.number} share food webs and depend on one another.`,
          options: [
            { text: 'True! Animals and plants are closely connected in nature.', correct: true },
            { text: 'False! Every animal lives alone in a bubble.', correct: false }
          ]
        },
        {
          prompt: `Food & Energy: Where does energy in nature come from first?`,
          options: [
            { text: 'From the warm sun and green plants making food!', correct: true },
            { text: 'From magic clouds with endless battery power.', correct: false }
          ]
        }
      ];

      this.runExamModal(qid, `Unit ${unit.number} • Checkpoint Quiz ${quizNum} (❔)`, questions, 150, 50);
    }

    openUnitTestModal(unitId) {
      const unit = this.units.find(u => u.id === unitId);
      if (!unit) return;

      const tid = `${unit.id}-unit-test`;
      const questions = [
        {
          prompt: `Unit ${unit.number} Big Test: Why do creatures develop amazing adaptations?`,
          options: [
            { text: 'To find food, protect their babies, and survive in the wild.', correct: true },
            { text: 'To show off for video games.', correct: false }
          ]
        },
        {
          prompt: `Nature Protection: What is one of the biggest dangers to wild animals today?`,
          options: [
            { text: 'Losing their natural homes and forests when habitats are destroyed.', correct: true },
            { text: 'Having too many clean trees and fresh rivers.', correct: false }
          ]
        },
        {
          prompt: `Ecosystem Balance: What happens when an important animal or plant is protected?`,
          options: [
            { text: 'The whole natural community stays healthy and balanced!', correct: true },
            { text: 'Nothing at all because nature doesn\'t matter.', correct: false }
          ]
        },
        {
          prompt: `Energy in Nature: How does energy travel through a food web?`,
          options: [
            { text: 'Plants catch sunlight, herbivores eat plants, and predators hunt for food.', correct: true },
            { text: 'Animals plug themselves into electric wall sockets.', correct: false }
          ]
        },
        {
          prompt: `Junior Ranger Goal: What is the main mission of caring for wildlife?`,
          options: [
            { text: 'Keeping Earth\'s wild lands, waters, plants, and animals safe and healthy!', correct: true },
            { text: 'Moving all wild animals into plastic cages indoors.', correct: false }
          ]
        }
      ];

      this.runExamModal(tid, `Unit ${unit.number} Comprehensive Exam (⭐)`, questions, 300, 100);
    }

    runExamModal(examId, titleText, questions, pts, coins) {
      let qIdx = 0;
      let score = 0;

      const renderStep = () => {
        const content = document.getElementById('ka-modal-content');
        const modal = document.getElementById('ka-modal-backdrop');
        if (!content || !modal) return;

        if (qIdx >= questions.length) {
          const pct = Math.round((score / questions.length) * 100);
          let status = 'needs_work';
          if (pct === 100) status = 'proficient';
          else if (pct >= 60) status = 'familiar';

          this.setSkillLevel(examId, status);
          this.awardRewards(score * Math.round(pts / questions.length), score * Math.round(coins / questions.length));

          content.innerHTML = `
            <div class="ka-modal-header">
              <h2 class="ka-modal-title">${titleText} - Results</h2>
              <button class="ka-modal-close-btn" onclick="window.AK_PAGE.closeModal()">✕</button>
            </div>
            <div class="ka-modal-body" style="text-align: center; padding: 40px 20px;">
              <div style="font-size: 52px; margin-bottom: 12px;">${pct >= 60 ? '⭐' : '📚'}</div>
              <h3 style="font-size: 24px; font-weight: 800;">Scored ${score} / ${questions.length} (${pct}%)</h3>
              <p style="margin: 12px 0 20px 0; font-size: 15px; color: #475569;">
                Status updated to: <strong>${status === 'proficient' ? '✅ Proficient' : (status === 'familiar' ? '🟧 Familiar' : '🟥 Needs Work')}</strong>
              </p>
              <button class="ka-boost-btn" style="background: #2563eb; color: #fff;" onclick="window.AK_PAGE.closeModal()">Return to Dashboard ➔</button>
            </div>
          `;
          return;
        }

        const q = questions[qIdx];
        content.innerHTML = `
          <div class="ka-modal-header">
            <div>
              <span class="ka-modal-tag">${titleText}</span>
              <h2 class="ka-modal-title">Question ${qIdx + 1} of ${questions.length}</h2>
            </div>
            <button class="ka-modal-close-btn" onclick="window.AK_PAGE.closeModal()">✕</button>
          </div>
          <div class="ka-modal-body">
            <div class="ka-quiz-prompt">${q.prompt}</div>
            <div class="ka-quiz-options">
              ${q.options.map((opt, i) => `
                <button class="ka-quiz-btn" onclick="window.AK_PAGE.handleExamAnswer(${i})">
                  <strong>${String.fromCharCode(65 + i)}.</strong> ${opt.text}
                </button>
              `).join('')}
            </div>
          </div>
        `;

        modal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
      };

      this.handleExamAnswer = (idx) => {
        if (questions[qIdx].options[idx] && questions[qIdx].options[idx].correct) score++;
        qIdx++;
        renderStep();
      };

      renderStep();
    }

    openCapstoneTest() {
      if (window.AK_ULTIMATE_TEST && window.AK_ULTIMATE_TEST.openModal) {
        window.AK_ULTIMATE_TEST.openModal();
      }
    }

    startMasteryChallenge() {
      const upNextId = this.getUpNextUnitId();
      this.openUnitTestModal(upNextId);
    }

    awardRewards(xpAmount, coinAmount) {
      if (window.AK_ACADEMY && window.AK_ACADEMY.addXp) window.AK_ACADEMY.addXp(xpAmount);
      if (window.AK_QUESTS && window.AK_QUESTS.addCoins) window.AK_QUESTS.addCoins(coinAmount);
      this.updateHeaderStats();
    }

    closeModal() {
      const modal = document.getElementById('ka-modal-backdrop');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    onSearch(query) {
      const q = (query || '').toLowerCase().trim();
      const cards = document.querySelectorAll('.ka-unit-card');
      if (!q) {
        cards.forEach(c => c.style.display = '');
        return;
      }
      cards.forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(q) ? '' : 'none';
      });
    }

    // ========================================================================
    // FULL VOCABULARY & SCIENCE FACTS EXPLORER SECTION
    // ========================================================================
    openVocabSection(filterCategory = 'ALL') {
      const modal = document.getElementById('ka-modal-backdrop');
      const content = document.getElementById('ka-modal-content');
      if (!modal || !content) return;

      this.currentVocabFilter = filterCategory || 'ALL';
      const vocabs = this.getVocabDefinitions();
      const entries = Object.entries(vocabs);

      // Collect unique categories
      const categories = ['ALL'];
      entries.forEach(([_, item]) => {
        if (item.category && !categories.includes(item.category)) {
          categories.push(item.category);
        }
      });

      // Pick a random fun spotlight word
      const randomEntry = entries[Math.floor(Math.random() * entries.length)][1];

      content.innerHTML = `
        <div class="ka-modal-header">
          <div>
            <span class="ka-modal-tag" style="color: #0284c7;">Junior Naturalist Dictionary</span>
            <h2 class="ka-modal-title">📖 Wildlife Vocabulary & Amazing Science Facts</h2>
          </div>
          <button class="ka-modal-close-btn" onclick="window.AK_PAGE.closeModal()">✕</button>
        </div>

        <div class="ka-modal-body ka-vocab-section-modal" style="padding: 24px;">
          <!-- Random Fun Fact Spotlight Banner -->
          <div class="ka-vocab-spotlight-bar">
            <div class="ka-vocab-spotlight-text">
              <h4>${randomEntry.icon} Featured Word of the Moment: <strong>${randomEntry.term}</strong></h4>
              <p>💡 <em>"${randomEntry.fact}"</em></p>
            </div>
            <button class="ka-boost-btn" style="background: rgba(255,255,255,0.2); color: #fff; border: 1px solid rgba(255,255,255,0.4); padding: 8px 14px; font-size: 13px;" onclick="window.AK_PAGE.openVocabSection()">
              🎲 Surprise Me!
            </button>
          </div>

          <!-- Controls: Category Filters + Search Bar -->
          <div class="ka-vocab-controls">
            <div class="ka-vocab-filters" id="ka-vocab-filters-bar">
              ${categories.map(cat => `
                <button type="button" class="ka-vocab-filter-btn ${cat === this.currentVocabFilter ? 'active' : ''}" onclick="window.AK_PAGE.filterVocabSection('${cat}')">
                  ${cat === 'ALL' ? '🌟 All Words' : cat}
                </button>
              `).join('')}
            </div>

            <div class="ka-vocab-search-wrap">
              <span class="ka-vocab-search-icon">🔍</span>
              <input type="text" id="ka-vocab-search-box" class="ka-vocab-search-input" placeholder="Search words or facts..." oninput="window.AK_PAGE.searchVocabCards(this.value)" />
            </div>
          </div>

          <!-- Cards Grid -->
          <div class="ka-vocab-grid" id="ka-vocab-cards-grid">
            ${this.renderVocabCardsHtml(entries, this.currentVocabFilter, '')}
          </div>
        </div>
      `;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    renderVocabCardsHtml(entries, activeCategory, searchQ) {
      const q = (searchQ || '').trim().toLowerCase();

      const filtered = entries.filter(([key, item]) => {
        const matchesCategory = (activeCategory === 'ALL') || (item.category === activeCategory);
        if (!matchesCategory) return false;
        if (!q) return true;
        return item.term.toLowerCase().includes(q) ||
               (item.def && item.def.toLowerCase().includes(q)) ||
               (item.fact && item.fact.toLowerCase().includes(q)) ||
               (item.category && item.category.toLowerCase().includes(q));
      });

      if (filtered.length === 0) {
        return `
          <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: #64748b; font-size: 15px;">
            🔍 No vocabulary words found matching "<strong>${searchQ}</strong>". Try searching another term!
          </div>
        `;
      }

      return filtered.map(([key, item]) => `
        <div class="ka-vocab-card">
          <div>
            <div class="ka-vocab-card-header">
              <div class="ka-vocab-card-term">
                <span>${item.icon || '🌱'}</span>
                <span>${item.term}</span>
              </div>
              <span class="ka-vocab-card-category">${item.category || 'Science'}</span>
            </div>

            <div style="font-size: 11.5px; color: #64748b; margin-bottom: 8px; display: flex; align-items: center; justify-content: space-between;">
              <span>🗣️ Pronounce: <em>${item.pronounce || item.term}</em></span>
              <button type="button" class="ka-vocab-btn-speak" onclick="window.AK_PAGE.speakVocabTerm('${item.term.replace(/'/g, "\\'")}')" title="Listen to pronunciation">
                🔊 Listen
              </button>
            </div>

            <div class="ka-vocab-card-def">
              ${item.def}
            </div>
          </div>

          ${item.fact ? `
            <div class="ka-vocab-card-fact">
              <strong>🤯 Cool Fact:</strong> ${item.fact}
            </div>
          ` : ''}
        </div>
      `).join('');
    }

    filterVocabSection(category) {
      this.currentVocabFilter = category;
      document.querySelectorAll('#ka-vocab-filters-bar .ka-vocab-filter-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.trim() === (category === 'ALL' ? '🌟 All Words' : category));
      });
      const grid = document.getElementById('ka-vocab-cards-grid');
      const searchBox = document.getElementById('ka-vocab-search-box');
      const q = searchBox ? searchBox.value : '';
      if (grid) {
        grid.innerHTML = this.renderVocabCardsHtml(Object.entries(this.getVocabDefinitions()), category, q);
      }
    }

    searchVocabCards(query) {
      const grid = document.getElementById('ka-vocab-cards-grid');
      if (grid) {
        grid.innerHTML = this.renderVocabCardsHtml(Object.entries(this.getVocabDefinitions()), this.currentVocabFilter || 'ALL', query);
      }
    }

    speakVocabTerm(term) {
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(term);
        utterance.rate = 0.9;
        utterance.pitch = 1.0;
        window.speechSynthesis.speak(utterance);
      } else {
        alert(`Pronunciation: ${term}`);
      }
    }

    restartAllProgress() {
      const confirmReset = confirm(
        '⚠️ RESTART EVERYTHING?\n\n' +
        'Are you sure you want to restart all progress?\n' +
        '• All 146 skill squares will be reset back to Unstarted (⬜)\n' +
        '• Mastery Points will be reset to 0\n' +
        '• Academy XP will be reset to 0\n' +
        '• All quizzes and unit tests will be reset\n\n' +
        'Click OK to wipe clean and start completely fresh!'
      );

      if (!confirmReset) return;

      localStorage.setItem(this.storageKey, JSON.stringify({}));
      localStorage.setItem('ak_academy_xp', '0');
      localStorage.setItem('ak_academy_completed_lessons', JSON.stringify([]));
      localStorage.setItem('ak_academy_quiz_scores', JSON.stringify({}));

      this.updateHeaderStats();
      this.updateMasteryHeader();
      this.renderSidebar();
      this.renderUnitsGrid();

      if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(450);
      alert('✨ Restart Complete! All 146 skills, quizzes, and mastery squares have been restarted to unstarted (⬜).');
    }

    bindEvents() {
      if (typeof window !== 'undefined' && window.addEventListener) {
        window.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') this.closeModal();
        });
      }
    }
  }

  // Instantiate and Auto-init
  window.AK_PAGE = new WildlifeAcademyPageController();

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => window.AK_PAGE.init());
    } else {
      window.AK_PAGE.init();
    }
  }

})(typeof window !== 'undefined' ? window : global);
