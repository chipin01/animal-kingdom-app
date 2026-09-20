// ============================================================================
// ANIMAL KINGDOM - INTERACTIVE ANIMAL X-RAY & INTERNAL ANATOMY SCANNER
// Comprehensive biological engine: Bones, Digestion, Organs, Brain & Muscles
// ============================================================================

class AnimalAnatomyScanner {
  constructor() {
    this.currentAnimal = null;
    this.activeLayer = 'all'; // 'all', 'skeleton', 'digestion', 'organs', 'brain', 'muscles'
    this.depthPercent = 100; // 0% (Outer Skin) -> 100% (Deep Skeleton)
    this.selectedHotspot = 'stomach';

    // Anatomical Archetypes & Specific Blueprint Intelligence
    this.archetypes = {
      'shark': {
        type: 'Chondrichthyes (Cartilaginous Apex Marine Predator)',
        skeleton: {
          title: 'Full Cartilage Chondrocranium & 3,000+ Replaceable Teeth',
          desc: 'Sharks have ZERO true bones! Their entire skeleton is sculpted from lightweight, ultra-flexible cartilage reinforced with calcified prisms (tesserae). Jaws are loosely suspended from the skull, allowing them to thrust their entire mouth forward during a bite with 4,000 PSI of shearing force. Teeth are arranged in 5-15 conveyor-belt rows that continuously replace lost teeth throughout life (up to 30,000 teeth in a lifetime!).',
          boneDensity: 'Flexible Lightweight Cartilage (0 True Bones)',
          skullMechanics: 'Hyostylic jaw suspension; protrusible upper and lower jaw with serrated triangular cutting blades.',
          specialAdaptations: 'Tapered cartilage vertebral column and fin radials flex without breaking under high-speed oceanic breaches.'
        },
        digestion: {
          title: 'Spiral Valve Intestine & Giant Oily Hydrostatic Liver',
          stomachType: 'J-Shaped Acid Vat with Spiral Valve Gut',
          phLevel: '1.2 - 1.8 (Dissolves Bones, Shells & Marine Mammal Blubber)',
          digestTime: '12 - 36 Hours',
          desc: 'Features a massive 2-lobed liver filled with low-density squalene oil (accounting for up to 25% of the shark\'s total body weight), which acts as an internal buoyancy tank so the shark doesn\'t sink! The stomach produces concentrated gastric juices to digest whole seals, fish, and turtles, which pass into a compact spiral valve intestine that forces food along a corkscrew pathway to maximize nutrient absorption in a short body space.',
          organs: ['Massive Squalene-Rich Buoyancy Liver', 'J-Shaped Muscular Stomach', 'Spiral Valve Corkscrew Intestine', 'Rectal Salt-Excreting Gland']
        },
        cardiopulmonary: {
          title: '2-Chambered Heart & 5-7 Countercurrent Gill Slits',
          heartRate: '15 - 45 BPM',
          desc: 'Blood flows from a 2-chambered heart directly through 5 to 7 pairs of gill arches. Water flowing over the gills moves in the opposite direction of blood flow (countercurrent exchange), extracting over 80% of dissolved oxygen from the ocean.',
          lungCapacity: 'Ram ventilation: must swim continuously to force oxygenated water through gills.'
        },
        nervous: {
          title: 'Bio-Electric Radar & Olfactory Super-Center',
          superpower: 'Ampullae of Lorenzini & 1-Drop-in-an-Ocean Olfaction',
          desc: 'Thousands of gel-filled pores around the snout (Ampullae of Lorenzini) detect the microscopic electrical nerve impulses (down to 0.00000001 volts!) produced by the beating heart or moving muscle of hidden prey buried under seabed sand. Two-thirds of the shark\'s brain is dedicated entirely to smell.'
        },
        muscles: {
          title: 'Dual Red/White Swimming Muscle System',
          desc: 'Deep red slow-twitch muscle along the spine provides endless endurance swimming, while outer white fast-twitch muscle produces explosive 35+ mph ambush attack bursts.'
        },
        hotspots: [
          { key: 'skull', label: '🦈 Chondrocranium & Teeth', top: '35%', left: '16%' },
          { key: 'brain', label: '⚡ Ampullae & Senses', top: '22%', left: '12%' },
          { key: 'heart', label: '🫀 Gills & 2-Chamber Heart', top: '48%', left: '28%' },
          { key: 'stomach', label: '🍖 Spiral Valve Stomach', top: '42%', left: '46%' },
          { key: 'intestines', label: '🛢️ Giant Squalene Liver', top: '56%', left: '40%' },
          { key: 'spine', label: '🦴 Cartilage Spine & Fins', top: '26%', left: '55%' }
        ]
      },
      'snake': {
        type: 'Squamate Kinetic-Skulled Constrictor & Viper',
        skeleton: {
          title: 'Unhinging Quadrate Skull & 400+ Flexible Rib Pairs',
          desc: 'Possesses 200 to 400 vertebrae, each with a pair of flexible, detached ribs that have no breastbone. The lower jaw (mandible) is split into two halves connected by stretchy elastic ligaments and an unhinging quadrate bone, allowing the skull to expand around prey 3x wider than its own head!',
          boneDensity: 'Lightweight & Ultra-Elastic',
          skullMechanics: 'Kinetic skull with 8 independently movable bone units that \'walk\' prey down the throat.',
          specialAdaptations: 'No sternum or pelvic girdle, allowing unbroken large prey to travel down the body.'
        },
        digestion: {
          title: 'Extreme Elastic Gastric Chamber & Bone-Melting Acid',
          stomachType: 'Distensible Tubular Acid Furnace',
          phLevel: '1.0 - 1.5 (Dissolves Teeth, Antlers & Fur)',
          digestTime: '3 - 10 Days',
          desc: 'Stomach expands to 5x its resting volume. Produces immense amounts of hydrochloric acid and digestive enzymes that dissolve flesh, bones, and feathers completely, leaving only indigestible claws.',
          organs: ['Elongated Right Lung', 'Expandable Tubular Stomach', 'Linear Compressed Liver', 'Cloaca']
        },
        cardiopulmonary: {
          title: '3-Chambered Mobile Sliding Heart',
          heartRate: '12 - 60 BPM',
          desc: 'The 3-chambered heart can physically slide along the body cavity to prevent being crushed when large prey passes through the esophagus!',
          lungCapacity: 'Single elongated right lung spans up to 80% of body length; left lung is vestigial.'
        },
        nervous: {
          title: 'Chemosensory & Thermal Radar',
          superpower: 'Jacobson\'s Vomeronasal Organ & Infrared Heat Pits',
          desc: 'Forked tongue collects airborne odor molecules and inserts them into the Jacobson\'s organ on the roof of the mouth. Infrared pit organs detect temperature changes down to 0.003°C!'
        },
        muscles: {
          title: 'Segmental Constrictor Coils',
          desc: 'Thousands of interlocking intercostal muscle bundles generate up to 12 PSI of continuous circulatory-stopping constriction pressure.'
        },
        hotspots: [
          { key: 'skull', label: '🐍 Unhinging Quadrate Skull', top: '30%', left: '15%' },
          { key: 'brain', label: '👅 Jacobson\'s Sense Organ', top: '20%', left: '18%' },
          { key: 'heart', label: '🫀 Mobile Sliding Heart', top: '36%', left: '34%' },
          { key: 'stomach', label: '🍖 Expandable Tubular Stomach', top: '46%', left: '52%' },
          { key: 'intestines', label: '🧬 Elongated Digestive Tract', top: '56%', left: '68%' },
          { key: 'spine', label: '🦴 400+ Ribs & Vertebrae', top: '32%', left: '60%' }
        ]
      },
      'bird': {
        type: 'Avian Aerial Specialist & Raptor',
        skeleton: {
          title: 'Pneumatic (Hollow) Honeycomb Skeleton & Deep Keel',
          desc: 'Bones are filled with air pockets and reinforced with internal strut bridges (pneumatic bone structure), reducing weight by 40% while maintaining immense structural rigidity. A massive blade-like sternum keel anchors flight pectorals.',
          boneDensity: 'Ultra-Lightweight Pneumatic Honeycomb',
          skullMechanics: 'Toothless lightweight keratin bill; flexible craniofacial hinge; sclerotic eye rings.',
          specialAdaptations: 'Fused vertebrae (synsacrum) provide a solid airframe that handles aerodynamic G-forces.'
        },
        digestion: {
          title: 'Two-Stage Gizzard & Gastrolith Grinding Mill',
          stomachType: 'Proventriculus (Acid) + Muscular Gizzard (Grinding)',
          phLevel: '1.5 - 2.5',
          digestTime: '1 - 4 Hours (Rapid for Flight Weight)',
          desc: 'Food is stored in the crop, pre-digested with enzymes in the proventriculus, then mechanically pulverized in the thick muscular gizzard using swallowed stones (gastroliths) instead of teeth!',
          organs: ['Nectar/Seed Crop', 'Proventriculus Acid Chamber', 'Stone-Grinding Gizzard', 'Compact Intestine']
        },
        cardiopulmonary: {
          title: 'Continuous Unidirectional 9-Air-Sac Respiration',
          heartRate: '200 - 1,000 BPM',
          desc: 'Possesses 9 internal air sacs that act as bellows. Air flows in a continuous ONE-WAY loop through the lungs during both inhalation and exhalation, providing 100% fresh oxygen at all times—even at 30,000 feet!',
          lungCapacity: 'Highest oxygen exchange efficiency in the animal kingdom.'
        },
        nervous: {
          title: 'High-Density Celestial & Geomagnetic Brain',
          superpower: 'Cryptochrome Quantum Magnetoreception & 8x Visual Acuity',
          desc: 'Cryptochrome proteins in the eyes allow birds to literally SEE Earth\'s magnetic field lines for global navigation. Eyes have dual foveas for simultaneous forward and lateral telephoto focus.'
        },
        muscles: {
          title: 'Pectoralis & Supracoracoideus Flight Engine',
          desc: 'Flight muscles account for up to 35% of total body mass, delivering continuous wing flaps fueled by high-density myoglobin.'
        },
        hotspots: [
          { key: 'skull', label: '🦅 Pneumatic Skull & Beak', top: '22%', left: '20%' },
          { key: 'brain', label: '🧠 Optic Tectum & Senses', top: '16%', left: '25%' },
          { key: 'heart', label: '🫀 4-Chamber Heart & Air Sacs', top: '42%', left: '38%' },
          { key: 'stomach', label: '🍖 Crop & Stone Gizzard', top: '50%', left: '46%' },
          { key: 'intestines', label: '🧬 High-Speed Gut', top: '58%', left: '56%' },
          { key: 'spine', label: '🦴 Keel Blade & Wishbone', top: '38%', left: '32%' }
        ]
      },
      'big-cat': {
        type: 'Apex Mammalian Predator & Carnivore',
        skeleton: {
          title: 'Flexible Lumbar Spine & Retractable Claws',
          desc: 'Features a free-floating clavicle (collarbone) allowing huge stride length, 30 highly flexible vertebrae for explosive acceleration, and specialized ungual phalanx bones that retract claws into protective sheaths.',
          boneDensity: 'High (Dense Cortical Bone)',
          skullMechanics: 'Short, wide sagittal crest anchoring massive temporalis bite muscles; large canines with periodontal shock absorbers.',
          specialAdaptations: 'Loose scapular attachment enables 35+ mph bursts and 12-foot vertical leaps.'
        },
        digestion: {
          title: 'High-Acid Carnivore Fast Digestive Tract',
          stomachType: 'Single-Chambered Acid Vat (Monogastric)',
          phLevel: '1.2 - 2.0 (Ultra-Acidic)',
          digestTime: '8 - 14 Hours',
          desc: 'Short, efficient digestive tract (only 3-4x body length). Hydrochloric acid and pepsin rapidly dissolve raw meat, sinew, and small bones. Small intestine rapidly absorbs amino acids before bacterial putrefaction occurs.',
          organs: ['Acidic Glandular Stomach', 'Enlarged Protein-Processing Liver', 'Short Colon (prevents rotting meat toxicity)']
        },
        cardiopulmonary: {
          title: 'High-Output 4-Chambered Mammalian Heart',
          heartRate: '40 - 180 BPM',
          desc: 'Enlarged left ventricle pumps oxygenated blood at high pressure. Lungs expand against elastic rib cage for explosive short-distance sprinting.',
          lungCapacity: 'High tidal volume during sprint bursts.'
        },
        nervous: {
          title: 'Binocular Night Hunter Brain',
          superpower: 'Tapetum Lucidum & Stereoscopic Vision',
          desc: 'Expanded visual cortex with tapetum lucidum reflective layer behind the retina, amplifying night vision by 6x. Whiskers rooted in deep nerve beds detect micro-vibrations in air currents.'
        },
        muscles: {
          title: 'Fast-Twitch Sprint Musculature',
          desc: 'High concentration of Type IIb fast-twitch muscle fibers engineered for explosive 0-60 mph acceleration and jaw-clamping strength.'
        },
        hotspots: [
          { key: 'skull', label: '🦁 Sagittal Crest & Canines', top: '24%', left: '18%' },
          { key: 'brain', label: '🧠 Visual Cortex & Senses', top: '16%', left: '22%' },
          { key: 'heart', label: '🫀 4-Chamber Sprint Heart', top: '44%', left: '36%' },
          { key: 'stomach', label: '🍖 High-Acid Stomach Vat', top: '48%', left: '50%' },
          { key: 'intestines', label: '🧬 Protein Absorption Gut', top: '56%', left: '62%' },
          { key: 'spine', label: '🦴 Flexible Spine & Ribs', top: '28%', left: '50%' }
        ]
      },
      'reptile': {
        type: 'Ectothermic Armored Crocodilian & Lizard',
        skeleton: {
          title: 'Osteoderm Bone Armor & Crushing Quadrate Jaws',
          desc: 'Bones reinforced with dermal osteoderm armor plates embedded in skin. Quadrate jaw suspension delivers up to 3,700 PSI crushing bite force. Tail vertebrae capable of autotomy (defensive detachment) in lizards.',
          boneDensity: 'Dense & Compact',
          skullMechanics: 'Diapsid skull with dual temporal fenestrae for massive jaw adductor attachments.',
          specialAdaptations: 'Zygodactylous grasping feet and prehensile tail in chameleons.'
        },
        digestion: {
          title: 'Bone-Dissolving Gastric Vat with Gastrolith Stones',
          stomachType: 'Monogastric Muscular Stomach with Gastroliths',
          phLevel: '1.0 - 2.0 (Dissolves Turtle Shells, Horns & Hooves)',
          digestTime: '24 - 96 Hours (Temperature Dependent)',
          desc: 'Ectothermic digestion speeds up with basking heat. Stomach acid is so concentrated that crocodiles can digest solid turtle shells, hooves, and horns with zero waste.',
          organs: ['Heavy Acidic Stomach', 'Large Bile-Producing Liver', 'Cloacal Excretory Chamber']
        },
        cardiopulmonary: {
          title: 'Heart with Foramen of Panizza Gastric Shunt',
          heartRate: '10 - 50 BPM',
          desc: 'Crocodilians possess the most sophisticated heart in the animal kingdom, able to shunt deoxygenated blood directly to the stomach to dramatically boost gastric acid production after large meals!',
          lungCapacity: 'Hepatic piston mechanism (liver acts as a diaphragm) pumps lungs for deep underwater breath-holds.'
        },
        nervous: {
          title: 'Independent 360° Monocular Brain',
          superpower: 'Dual Independent Eye Rotation & Parietal (Third) Eye',
          desc: 'Chameleons rotate each eye independently to track two separate targets simultaneously before locking stereoscopic focus. Many lizards possess a parietal third eye on top of the head for solar compass sensing.'
        },
        muscles: {
          title: 'Explosive Hyoid Tongue Launcher & Crushing Jaws',
          desc: 'Chameleon tongue accelerator muscle fires tongue at 2,500 m/s² (0 to 60 mph in 1/100th second!). Crocodile pterygoid jaw muscles deliver 3,700 PSI of bone-shattering bite force.'
        },
        hotspots: [
          { key: 'skull', label: '🐊 Crushing Jaws (3,700 PSI)', top: '30%', left: '16%' },
          { key: 'brain', label: '👁️ Independent 360° Vision', top: '18%', left: '22%' },
          { key: 'heart', label: '🫀 Foramen of Panizza Heart', top: '44%', left: '36%' },
          { key: 'stomach', label: '🍖 Shell-Dissolving Stomach', top: '48%', left: '50%' },
          { key: 'intestines', label: '🧬 Liver & Digestive Tract', top: '56%', left: '64%' },
          { key: 'spine', label: '🦴 Dermal Osteoderm Armor', top: '26%', left: '54%' }
        ]
      },
      'amphibian': {
        type: 'Permeable Skin Leaping Specialist',
        skeleton: {
          title: 'Urostyle Pelvis Rod & Elastic Leaping Framework',
          desc: 'Possesses a shortened vertebral column with a fused urostyle rod in the pelvis that acts as a shock absorber during massive leaps up to 50 times its body length.',
          boneDensity: 'Lightweight & Cartilaginous',
          skullMechanics: 'Broad, flat skull with immense eye sockets and specialized pedicellate teeth.',
          specialAdaptations: 'Fused radius-ulna and tibia-fibula limb bones provide immense leverage.'
        },
        digestion: {
          title: 'Retractable Eyeball-Assisted Swallowing Tract',
          stomachType: 'Simple Monogastric Distensible Stomach',
          phLevel: '2.0 - 3.0',
          digestTime: '6 - 18 Hours',
          desc: 'Frogs use their eyeballs to swallow! When prey is caught, the frog retracts its large eyeballs downward through holes in the roof of the mouth to physically push food down the esophagus into the stomach!',
          organs: ['Eye-Retraction Oropharynx', 'Short Glandular Stomach', 'Tri-Lobed Liver', 'Cloaca']
        },
        cardiopulmonary: {
          title: '3-Chambered Heart & Cutaneous (Skin) Respiration',
          heartRate: '20 - 60 BPM',
          desc: 'Can breathe entirely through moist permeable skin! Blood vessels located right beneath the skin absorb dissolved oxygen directly from air or pond water, bypassing lungs when submerged.',
          lungCapacity: 'Simple sac-like lungs filled via buccal cavity throat pumping.'
        },
        nervous: {
          title: 'Motion-Sensitive Visual Brain',
          superpower: 'Tympanic Ear Membrane & Motion-Only Retina',
          desc: 'Frog retinas filter out still backgrounds and only send electrical signals to the brain when an object is moving, creating instant reflex strikes.'
        },
        muscles: {
          title: 'Hydraulic Plantaris Leaping Catapult',
          desc: 'Massive leg extensors store elastic kinetic energy in long tendons, releasing explosive leaping force like a catapult.'
        },
        hotspots: [
          { key: 'skull', label: '🐸 Eyeball Swallowing Skull', top: '26%', left: '22%' },
          { key: 'brain', label: '🧠 Motion-Triggered Brain', top: '16%', left: '26%' },
          { key: 'heart', label: '🫀 Cutaneous 3-Chamber Heart', top: '44%', left: '36%' },
          { key: 'stomach', label: '🍖 Distensible Stomach', top: '48%', left: '48%' },
          { key: 'intestines', label: '🧬 Glandular Liver & Gut', top: '56%', left: '58%' },
          { key: 'spine', label: '🦴 Fused Urostyle Pelvis', top: '34%', left: '60%' }
        ]
      },
      'herbivore': {
        type: 'Ruminant & Herbivorous Grazer (e.g. Meerkat / Zebra / Elephant)',
        skeleton: {
          title: 'Fused Metapodials & Shock-Absorbing Bone Pillars',
          desc: 'Elongated limb bones and specialized shock-absorbing joints elevate the body for high endurance or agile burrowing. Heavy lumbar spine supports digestive chambers.',
          boneDensity: 'Heavy Load-Bearing',
          skullMechanics: 'Specialized dentition for foraging, grinding fibrous vegetation, or rapid invertebrate mastication.',
          specialAdaptations: 'Wide visual field with lateral eye orbits providing panoramic predator detection.'
        },
        digestion: {
          title: 'High-Efficiency Digestive Chamber & Fermentation',
          stomachType: 'Monogastric / Multi-Chambered Fermentation Gut',
          phLevel: '4.5 - 6.5 in Fermentation; 2.0 in Glands',
          digestTime: '12 - 36 Hours',
          desc: 'Features highly specialized digestive enzymes and prolonged intestinal transit to maximize nutrient absorption from specialized wild diets.',
          organs: ['Digestive Glandular Stomach', 'Extended Nutrient Intestine', 'Active Bile Liver', 'Fermentation Cecum']
        },
        cardiopulmonary: {
          title: 'High-Endurance 4-Chambered Heart',
          heartRate: '45 - 120 BPM',
          desc: 'High blood volume and expansive lungs built for sustained vigilance, running, or burrowing.',
          lungCapacity: 'High residual volume supporting endurance activity.'
        },
        nervous: {
          title: 'Panoramic Threat Detection Brain',
          superpower: 'Extreme Alert Senses & Auditory Radar',
          desc: 'Large sensory lobes and acute hearing allow detecting vibrations and calls from miles away across open savanna or desert.'
        },
        muscles: {
          title: 'Agile Endurance Musculature',
          desc: 'Specialized flexors and stay-apparatus tendons provide swift sprinting and rapid digging power.'
        },
        hotspots: [
          { key: 'skull', label: '🦴 Dentition & Skull', top: '28%', left: '18%' },
          { key: 'brain', label: '🧠 Panoramic Senses & Vision', top: '16%', left: '22%' },
          { key: 'heart', label: '🫀 High-Endurance Heart', top: '44%', left: '34%' },
          { key: 'stomach', label: '🍖 Digestive Stomach Chamber', top: '50%', left: '50%' },
          { key: 'intestines', label: '🧬 Extended Intestines', top: '58%', left: '66%' },
          { key: 'spine', label: '🦴 Load-Bearing Vertebrae', top: '26%', left: '48%' }
        ]
      },
      'insect': {
        type: 'Chitinous Exoskeleton Invertebrate',
        skeleton: {
          title: 'External Chitin & Sclerotin Exoskeleton Armor',
          desc: 'Has no internal bones! Instead, the entire body is encased in a lightweight, watertight armor of cross-linked chitin and sclerotin protein that provides attachment points for over 4,000 internal muscles.',
          boneDensity: 'Lightweight External Cuticle',
          skullMechanics: 'Chewing mandibles or coiled siphon proboscis; no internal skull bones.',
          specialAdaptations: 'Flexible articular membranes between abdominal segments allow movement and expansion.'
        },
        digestion: {
          title: 'Tripartite Foregut, Midgut & Hindgut System',
          stomachType: 'Crop + Proventriculus (Gizzard) + Gastric Caeca',
          phLevel: '6.5 - 7.5',
          digestTime: '2 - 6 Hours',
          desc: 'Food is stored in the crop, filtered through the proventriculus, digested in the midgut (ventriculus) with gastric caeca enzymes, and excreted via Malpighian renal tubules.',
          organs: ['Storage Crop', 'Grinding Proventriculus', 'Midgut Stomach Caeca', 'Malpighian Tubules (Kidneys)']
        },
        cardiopulmonary: {
          title: 'Open Hemolymph Circulatory System & Tracheal Tubes',
          heartRate: '30 - 150 BPM (Dorsal Vessel Pulsing)',
          desc: 'Has no red blood or lungs! Instead, green/clear hemolymph flows openly through the body cavity (hemocoel), while oxygen is delivered directly to every individual cell through an intricate branching network of microscopic tracheal air tubes connected to spiracle valves on the body sides.',
          lungCapacity: 'Passive diffusion through spiracle valves.'
        },
        nervous: {
          title: 'Segmental Ganglia & Compound Vision Brain',
          superpower: 'Compound Eyes & Micro-Sensory Antennae',
          desc: 'Features thousands of individual ommatidia lenses in compound eyes that process up to 300 visual frames per second (compared to 60 in humans). Antennae detect single scent molecules across miles.'
        },
        muscles: {
          title: 'Resilin-Powered Asynchronous Flight Muscles',
          desc: 'Indirect flight muscles deform the thorax box at 200 - 1,000 wing beats per second, powered by elastic resilin protein—the most efficient biological rubber on Earth.'
        },
        hotspots: [
          { key: 'skull', label: '🦋 Chitinous Head & Proboscis', top: '24%', left: '20%' },
          { key: 'brain', label: '👁️ Compound Eye Ommatidia', top: '16%', left: '22%' },
          { key: 'heart', label: '🫀 Dorsal Vessel & Spiracles', top: '40%', left: '42%' },
          { key: 'stomach', label: '🍖 Crop & Gastric Caeca', top: '48%', left: '52%' },
          { key: 'intestines', label: '🧬 Midgut & Malpighian Tubules', top: '56%', left: '65%' },
          { key: 'spine', label: '🦴 Segmented Exoskeleton', top: '30%', left: '55%' }
        ]
      }
    };
  }

  getAllLivingAnimals() {
    const lists = [
      window.LAND_DATA || [],
      window.MARINE_DATA || [],
      window.BIRDS_DATA || [],
      window.REPTILES_DATA || [],
      window.AMPHIBIANS_DATA || [],
      window.INSECTS_DATA || []
    ];
    const flat = [];
    lists.forEach(arr => {
      arr.forEach(item => {
        if (item && item.id && item.category !== 'gemstones' && item.category !== 'plants') {
          flat.push(item);
        }
      });
    });
    return flat;
  }

  getAnatomyForAnimal(animal) {
    if (!animal) return null;

    let archetypeKey = 'big-cat';
    const cat = (animal.category || '').toLowerCase();
    const name = (animal.name || '').toLowerCase();
    const diet = (animal.diet || '').toLowerCase();

    if (name.includes('shark') || name.includes('sawfish') || name.includes('ray') || name.includes('skate')) {
      archetypeKey = 'shark';
    } else if (cat === 'birds' || cat.includes('bird')) {
      archetypeKey = 'bird';
    } else if (cat === 'marine' || cat === 'fish' || name.includes('whale') || name.includes('dolphin') || name.includes('seal') || name.includes('otter') || name.includes('orca')) {
      archetypeKey = 'shark';
    } else if (cat === 'insects' || cat.includes('insect') || cat.includes('arthropod') || name.includes('butterfly') || name.includes('beetle') || name.includes('ant') || name.includes('mantis') || name.includes('bee')) {
      archetypeKey = 'insect';
    } else if (cat === 'amphibians' || cat.includes('amphibian') || name.includes('frog') || name.includes('toad') || name.includes('axolotl') || name.includes('salamander') || name.includes('newt')) {
      archetypeKey = 'amphibian';
    } else if (name.includes('snake') || name.includes('python') || name.includes('cobra') || name.includes('boa') || name.includes('viper') || name.includes('mamba') || name.includes('anaconda') || name.includes('rattlesnake')) {
      archetypeKey = 'snake';
    } else if (cat === 'reptiles' || cat.includes('reptile') || name.includes('crocodile') || name.includes('alligator') || name.includes('chameleon') || name.includes('gecko') || name.includes('lizard') || name.includes('iguana') || name.includes('komodo')) {
      archetypeKey = 'reptile';
    } else if (diet.includes('herbivore') || diet.includes('grazer') || diet.includes('grass') || diet.includes('leaves') || name.includes('elephant') || name.includes('deer') || name.includes('zebra') || name.includes('cow') || name.includes('bison') || name.includes('horse') || name.includes('camel') || name.includes('giraffe') || name.includes('rhino') || name.includes('hippo') || name.includes('meerkat') || name.includes('squirrel') || name.includes('rabbit') || name.includes('kangaroo')) {
      archetypeKey = 'herbivore';
    } else {
      archetypeKey = 'big-cat';
    }

    const base = this.archetypes[archetypeKey] || this.archetypes['big-cat'];

    return {
      animal: animal,
      archetypeKey: archetypeKey,
      typeName: base.type,
      skeleton: {
        ...base.skeleton,
        customNote: `The ${animal.name} (${animal.species || 'specimen'}) has evolved specialized skeletal adaptations for ${animal.habitat || 'its wild environment'}.`
      },
      digestion: {
        ...base.digestion,
        dietNote: `Dietary Profile: ${animal.diet || 'Specialized'}. ${animal.funFact ? 'Fun Biological Fact: ' + animal.funFact : ''}`
      },
      cardiopulmonary: base.cardiopulmonary,
      nervous: base.nervous,
      muscles: base.muscles,
      hotspots: base.hotspots || []
    };
  }

  openAnatomyModal(animalId = null) {
    if (window.AK_AUDIO) window.AK_AUDIO.playPop(520);
    const modal = document.getElementById('anatomy-modal');
    if (!modal) return;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    const all = this.getAllLivingAnimals();
    let targetAnimal = null;

    if (animalId) {
      targetAnimal = all.find(a => a.id === animalId);
    }
    if (!targetAnimal && all.length > 0) {
      targetAnimal = all.find(a => a.name.toLowerCase().includes('great white shark')) ||
                     all.find(a => a.name.toLowerCase().includes('lion')) ||
                     all[0];
    }

    this.selectAnimal(targetAnimal);
  }

  closeAnatomyModal() {
    const modal = document.getElementById('anatomy-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  selectAnimal(animal) {
    if (!animal) return;
    this.currentAnimal = animal;
    
    // Update input box text to the chosen animal name
    const input = document.getElementById('anatomy-search-input');
    if (input) input.value = animal.name;

    const dropdown = document.getElementById('anatomy-search-dropdown');
    if (dropdown) dropdown.classList.add('hidden');

    this.renderSpecimenSelector();
    this.renderAnatomyVisualizer();
    this.renderAnatomyFactCard();
  }

  selectAnimalById(id) {
    const all = this.getAllLivingAnimals();
    const a = all.find(x => x.id === id);
    if (a) {
      if (window.AK_AUDIO) window.AK_AUDIO.playPop(440);
      this.selectAnimal(a);
    }
  }

  setLayer(layer) {
    this.activeLayer = layer;
    if (window.AK_AUDIO) window.AK_AUDIO.playPop(480);
    document.querySelectorAll('.anatomy-layer-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.layer === layer);
    });
    this.renderAnatomyVisualizer();
    this.renderAnatomyFactCard();
  }

  setDepth(percent) {
    this.depthPercent = parseInt(percent, 10);
    const label = document.getElementById('anatomy-depth-val');
    if (label) label.innerText = this.depthPercent + '%';

    if (this.depthPercent < 25) {
      this.activeLayer = 'muscles';
    } else if (this.depthPercent < 55) {
      this.activeLayer = 'organs';
    } else if (this.depthPercent < 80) {
      this.activeLayer = 'digestion';
    } else {
      this.activeLayer = 'skeleton';
    }

    document.querySelectorAll('.anatomy-layer-btn').forEach(b => {
      b.classList.toggle('active', b.dataset.layer === this.activeLayer);
    });

    this.renderAnatomyVisualizer();
    this.renderAnatomyFactCard();
  }

  selectHotspot(organKey) {
    this.selectedHotspot = organKey;
    if (window.AK_AUDIO) window.AK_AUDIO.playPop(560);
    document.querySelectorAll('.anatomy-hotspot-pin').forEach(p => {
      p.classList.toggle('selected', p.dataset.organ === organKey);
    });
    this.renderAnatomyFactCard();
  }

  filterSearch(query) {
    const q = (query || '').toLowerCase().trim();
    const dropdown = document.getElementById('anatomy-search-dropdown');
    const clearBtn = document.getElementById('anatomy-search-clear');
    if (clearBtn) clearBtn.classList.toggle('hidden', !q);

    if (!dropdown) return;

    if (!q) {
      dropdown.classList.add('hidden');
      return;
    }

    const livingAnimals = this.getAllLivingAnimals();

    // Priority ranking:
    // 1. Name starts with q (e.g. "m" -> "Meerkat", "Monarch")
    // 2. Name contains whole word q (e.g. "shark" -> "Great White Shark")
    // 3. Name contains q
    // 4. Species or category contains q
    const matches = livingAnimals.filter(a => 
      a.name.toLowerCase().includes(q) || 
      (a.species && a.species.toLowerCase().includes(q)) ||
      (a.category && a.category.toLowerCase().includes(q))
    ).sort((a, b) => {
      const aName = a.name.toLowerCase();
      const bName = b.name.toLowerCase();
      const aStarts = aName.startsWith(q);
      const bStarts = bName.startsWith(q);
      if (aStarts && !bStarts) return -1;
      if (!aStarts && bStarts) return 1;

      const aWord = aName.split(' ').some(w => w.startsWith(q));
      const bWord = bName.split(' ').some(w => w.startsWith(q));
      if (aWord && !bWord) return -1;
      if (!aWord && bWord) return 1;

      return aName.localeCompare(bName);
    }).slice(0, 12);

    if (matches.length === 0) {
      dropdown.innerHTML = '<div class="anatomy-search-no-results" style="padding: 12px; color: #94a3b8; font-size: 0.88rem; text-align: center;">No species matching &quot;' + query + '&quot;</div>';
      dropdown.classList.remove('hidden');
      return;
    }

    dropdown.innerHTML = `
      <div class="anatomy-dropdown-header" style="padding: 6px 12px; font-size: 0.72rem; color: #64748b; font-weight: 800; text-transform: uppercase; border-bottom: 1px solid #1e293b;">
        Select an Animal to Scan Inside (${matches.length} Options):
      </div>
    ` + matches.map(m => `
      <div class="anatomy-search-item" onclick="window.AK_ANATOMY.selectAnimalById('${m.id}'); document.getElementById('anatomy-search-dropdown').classList.add('hidden');">
        <span class="search-item-emoji">${m.emoji || '🐾'}</span>
        <div class="search-item-info">
          <span class="search-item-name">${m.name}</span>
          <span class="search-item-sci">${m.species || m.category}</span>
        </div>
        <span class="search-item-btn-tag">See Anatomy 🔬</span>
      </div>
    `).join('');
    dropdown.classList.remove('hidden');
  }

  triggerSearch() {
    const input = document.getElementById('anatomy-search-input');
    const q = (input ? input.value : '').toLowerCase().trim();
    if (!q) return;

    const livingAnimals = this.getAllLivingAnimals();
    
    // Find best matching animal
    const match = livingAnimals.find(a => a.name.toLowerCase() === q) ||
                  livingAnimals.find(a => a.name.toLowerCase().startsWith(q)) ||
                  livingAnimals.find(a => a.name.toLowerCase().split(' ').some(w => w.startsWith(q))) ||
                  livingAnimals.find(a => a.name.toLowerCase().includes(q)) ||
                  livingAnimals.find(a => a.species && a.species.toLowerCase().includes(q)) ||
                  livingAnimals.find(a => a.category && a.category.toLowerCase().includes(q));

    if (match) {
      if (window.AK_AUDIO) window.AK_AUDIO.playPop(520);
      this.selectAnimal(match);
      const dropdown = document.getElementById('anatomy-search-dropdown');
      if (dropdown) dropdown.classList.add('hidden');
      if (input) input.blur();
    }
  }

  handleSearchKeyDown(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      this.triggerSearch();
    }
  }

  clearSearch() {
    const input = document.getElementById('anatomy-search-input');
    if (input) input.value = '';
    const dropdown = document.getElementById('anatomy-search-dropdown');
    if (dropdown) dropdown.classList.add('hidden');
    const clearBtn = document.getElementById('anatomy-search-clear');
    if (clearBtn) clearBtn.classList.add('hidden');
  }

  renderSpecimenSelector() {
    const presetsContainer = document.getElementById('anatomy-preset-pills');
    if (!presetsContainer) return;

    const all = this.getAllLivingAnimals();
    const presetIds = [
      { id: 'marine-1', label: '🦈 Great White Shark' },
      { id: 'land-1', label: '🦁 African Lion' },
      { id: 'land-6', label: '🐾 Meerkat' },
      { id: 'reptile-49', label: '🐍 Ball Python' },
      { id: 'birds-1', label: '🦅 Peregrine Falcon' },
      { id: 'reptile-33', label: '🦎 Chameleon' },
      { id: 'amphibians-1', label: '🐸 Poison Dart Frog' },
      { id: 'insects-1', label: '🦋 Monarch' }
    ];

    presetsContainer.innerHTML = presetIds.map(p => {
      const match = all.find(x => x.id === p.id || x.name.toLowerCase().includes(p.label.split(' ')[1].toLowerCase()));
      const realId = match ? match.id : p.id;
      const isSelected = this.currentAnimal && this.currentAnimal.id === realId;
      const emoji = p.label.split(' ')[0];
      const localizedName = match && window.AK_I18N ? window.AK_I18N.getSpeciesName(match) : p.label.substring(2).trim();
      return `
        <button class="anatomy-preset-btn ${isSelected ? 'active' : ''}" onclick="window.AK_ANATOMY.selectAnimalById('${realId}')">
          ${emoji} ${localizedName}
        </button>
      `;
    }).join('');
  }

  renderAnatomyVisualizer() {
    const visualizer = document.getElementById('anatomy-viewport');
    if (!visualizer || !this.currentAnimal) return;

    const data = this.getAnatomyForAnimal(this.currentAnimal);
    const arch = data.archetypeKey;

    const layerColors = {
      'skeleton': '#38bdf8',
      'digestion': '#f59e0b',
      'organs': '#ef4444',
      'brain': '#a855f7',
      'muscles': '#ec4899',
      'all': '#10b981'
    };
    const activeColor = layerColors[this.activeLayer] || '#38bdf8';

    const svgGraphic = this.generateAnatomySVG(arch, this.activeLayer, activeColor, this.currentAnimal);

    const hotspots = data.hotspots && data.hotspots.length > 0 ? data.hotspots : [
      { key: 'skull', label: '🦴 Skull & Jaw', top: '22%', left: '18%' },
      { key: 'brain', label: '🧠 Brain & Senses', top: '15%', left: '24%' },
      { key: 'heart', label: '🫀 Heart & Lungs', top: '42%', left: '36%' },
      { key: 'stomach', label: '🍖 Stomach (Digestion)', top: '48%', left: '52%' },
      { key: 'intestines', label: '🧬 Intestines & Guts', top: '55%', left: '66%' },
      { key: 'spine', label: '🦴 Vertebrae & Spine', top: '30%', left: '55%' }
    ];

    const hotspotsHtml = hotspots.map(h => `
      <button class="anatomy-hotspot-pin ${this.selectedHotspot === h.key ? 'selected' : ''}" data-organ="${h.key}" style="top: ${h.top}; left: ${h.left};" onclick="window.AK_ANATOMY.selectHotspot('${h.key}')">
        <span class="pin-ring"></span>
        <span class="pin-dot"></span>
        <span class="pin-label">${h.label}</span>
      </button>
    `).join('');

    visualizer.innerHTML = `
      <div class="anatomy-scanner-hud">
        <div class="hud-top-bar">
          <span class="hud-tag">🔬 CT X-RAY SCANNER • 100% ANATOMICAL RECONSTRUCTION</span>
          <span class="hud-specimen-id">${this.currentAnimal.name.toUpperCase()} (${this.currentAnimal.species || 'WILD SPECIES'})</span>
        </div>

        <div class="anatomy-stage-box">
          <div class="anatomy-scanline-beam"></div>
          
          <div class="anatomy-svg-wrapper">
            ${svgGraphic}
          </div>

          <div class="anatomy-hotspots-layer">
            ${hotspotsHtml}
          </div>

          <div class="hud-bottom-stats">
            <span>DEPTH: <strong>${this.depthPercent}%</strong></span>
            <span>SYSTEM: <strong>${this.activeLayer.toUpperCase()}</strong></span>
            <span>STRUCTURE: <strong>${data.typeName}</strong></span>
          </div>
        </div>
      </div>
    `;
  }

  generateAnatomySVG(arch, layer, color, animal) {
    const isSkel = layer === 'all' || layer === 'skeleton';
    const isDig = layer === 'all' || layer === 'digestion';
    const isOrg = layer === 'all' || layer === 'organs';
    const isBrain = layer === 'all' || layer === 'brain';
    const isMusc = layer === 'all' || layer === 'muscles';

    // 1. SHARK / MARINE PREDATOR ANATOMY
    if (arch === 'shark') {
      return `
        <svg viewBox="0 0 800 400" class="anatomy-vector-art" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="sharkBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#0284c7" stop-opacity="0.25" />
              <stop offset="100%" stop-color="#0f172a" stop-opacity="0.85" />
            </linearGradient>
            <linearGradient id="liverGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#d97706" stop-opacity="0.9" />
              <stop offset="100%" stop-color="#b45309" stop-opacity="0.75" />
            </linearGradient>
            <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <!-- Outer Shark Torpedo Silhouette -->
          <path d="M 60,200 C 90,160 160,130 250,130 C 350,130 460,110 520,70 C 530,120 590,160 670,180 L 750,130 L 720,200 L 760,270 L 670,220 C 590,240 500,280 430,280 L 370,350 L 350,280 C 250,280 140,260 60,200 Z" 
                fill="url(#sharkBodyGrad)" stroke="#38bdf8" stroke-width="2" opacity="0.8" />

          <!-- SKELETAL CARTILAGE SYSTEM (Chondrocranium, Teeth, Cartilage Spine, Fin Radials) -->
          <g class="svg-layer-skeleton" opacity="${isSkel ? '1' : '0.15'}">
            <!-- Chondrocranium (Cartilage Skull) -->
            <path d="M 90,190 C 100,160 150,150 180,165 C 200,175 200,210 170,225 C 130,235 90,220 90,190 Z" fill="none" stroke="#38bdf8" stroke-width="3" filter="url(#neonGlow)" />
            <!-- Jaws & Conveyor-Belt Teeth Rows -->
            <path d="M 120,215 Q 160,230 190,215" fill="none" stroke="#ffffff" stroke-width="2.5" />
            <path d="M 125,213 L 130,222 L 135,214 L 140,223 L 145,215 L 150,223 L 155,216 L 160,224 L 165,216" stroke="#ffffff" stroke-width="2" />
            <path d="M 128,218 L 133,225 L 138,219 L 143,226 L 148,220 L 153,227 L 158,221" stroke="#38bdf8" stroke-width="1.5" />

            <!-- Cartilage Vertebral Column -->
            <path d="M 180,180 Q 400,160 600,190 T 730,170" fill="none" stroke="#38bdf8" stroke-width="4.5" stroke-dasharray="7,4" filter="url(#neonGlow)" />
            
            <!-- Pectoral & Dorsal Fin Cartilage Radials -->
            <path d="M 460,120 L 510,80 L 515,115" fill="none" stroke="#38bdf8" stroke-width="2" stroke-dasharray="3,3" />
            <path d="M 280,240 L 350,330 L 335,250" fill="none" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,3" />
            <path d="M 670,185 L 735,145 M 680,210 L 745,255" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,3" />
          </g>

          <!-- DIGESTIVE SYSTEM (Giant Oily Liver + Spiral Valve Stomach) -->
          <g class="svg-layer-digestion" opacity="${isDig ? '1' : '0.12'}">
            <!-- Esophagus -->
            <path d="M 180,200 L 260,205" stroke="#f59e0b" stroke-width="4" stroke-dasharray="4,3" fill="none" />

            <!-- Massive Oily Squalene Liver (2 Large Lobes) -->
            <path d="M 240,190 C 300,170 420,180 470,205 C 420,235 300,245 240,220 Z" fill="url(#liverGrad)" stroke="#f59e0b" stroke-width="2.5" filter="url(#neonGlow)" />

            <!-- J-Shaped Stomach -->
            <path d="M 270,195 C 330,185 390,195 380,230 C 370,255 320,250 300,230 Z" fill="#f59e0b" opacity="0.85" stroke="#fbbf24" stroke-width="2" />

            <!-- Spiral Valve Corkscrew Intestine -->
            <g transform="translate(390, 210)">
              <rect x="0" y="0" width="75" height="24" rx="12" fill="#b45309" stroke="#f59e0b" stroke-width="2" />
              <!-- Spiral Valve Internal Baffles -->
              <path d="M 12,2 L 20,22 M 25,2 L 33,22 M 38,2 L 46,22 M 51,2 L 59,22" stroke="#ffffff" stroke-width="2" />
            </g>
          </g>

          <!-- CARDIOPULMONARY & GILLS -->
          <g class="svg-layer-organs" opacity="${isOrg ? '1' : '0.12'}">
            <!-- 5 Gill Slits -->
            <path d="M 215,185 L 210,225 M 225,185 L 220,225 M 235,185 L 230,225 M 245,185 L 240,225 M 255,185 L 250,225" stroke="#ef4444" stroke-width="2.5" />

            <!-- 2-Chambered Heart -->
            <circle cx="230" cy="235" r="14" fill="#ef4444" stroke="#ffffff" stroke-width="2" filter="url(#neonGlow)">
              <animate attributeName="r" values="12;15;12" dur="1.2s" repeatCount="indefinite" />
            </circle>
          </g>

          <!-- SENSES & AMPULLAE OF LORENZINI -->
          <g class="svg-layer-brain" opacity="${isBrain ? '1' : '0.12'}">
            <!-- Ampullae of Lorenzini Snout Electro-Sensors -->
            <circle cx="75" cy="195" r="3" fill="#a855f7" />
            <circle cx="85" cy="185" r="3" fill="#a855f7" />
            <circle cx="95" cy="175" r="3" fill="#a855f7" />
            <circle cx="85" cy="205" r="3" fill="#a855f7" />
            <circle cx="95" cy="215" r="3" fill="#a855f7" />
            <!-- Brain / Olfactory Lobe -->
            <ellipse cx="155" cy="175" rx="16" ry="10" fill="#c084fc" stroke="#ffffff" stroke-width="1.5" filter="url(#neonGlow)" />
          </g>
        </svg>
      `;
    }

    // 2. SNAKE / CONSTRICTOR ANATOMY
    if (arch === 'snake') {
      return `
        <svg viewBox="0 0 800 400" class="anatomy-vector-art" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="neonGlow2" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <!-- Serpentine S-Curve Body Outline -->
          <path d="M 80,180 C 140,120 220,130 300,200 C 380,270 480,270 560,200 C 640,130 720,160 760,220 C 740,240 650,170 560,230 C 470,300 370,290 300,230 C 230,170 150,160 80,210 Z" 
                fill="#0f172a" stroke="#10b981" stroke-width="2.5" opacity="0.8" />

          <!-- SKELETON (Kinetic Quadrate Skull + 300 Ribs) -->
          <g class="svg-layer-skeleton" opacity="${isSkel ? '1' : '0.15'}">
            <!-- Unhinging Quadrate Skull -->
            <path d="M 80,185 C 100,165 140,165 155,185 L 140,205 L 90,200 Z" fill="none" stroke="#38bdf8" stroke-width="3" filter="url(#neonGlow2)" />
            <!-- Recurved Needle Fangs -->
            <path d="M 120,195 L 123,206 M 128,195 L 131,206 M 136,195 L 139,206" stroke="#ffffff" stroke-width="2" />
            
            <!-- Continuous Vertebral Column Spine -->
            <path d="M 155,185 Q 220,140 300,215 T 560,215 T 750,220" fill="none" stroke="#38bdf8" stroke-width="4" stroke-dasharray="6,4" filter="url(#neonGlow2)" />
            
            <!-- Flexible Detached Rib Pairs along the body -->
            <path d="M 180,165 Q 190,195 180,205 M 220,150 Q 235,185 220,200 M 260,155 Q 280,195 265,220 M 320,210 Q 335,250 320,270 M 360,230 Q 380,270 360,285 M 420,250 Q 440,285 425,295 M 480,235 Q 500,275 485,285 M 540,205 Q 555,245 540,260 M 600,165 Q 615,200 600,220 M 660,150 Q 675,185 660,205" stroke="#38bdf8" stroke-width="2" />
          </g>

          <!-- DIGESTIVE SYSTEM (Elastic Stomach & Linear Guts) -->
          <g class="svg-layer-digestion" opacity="${isDig ? '1' : '0.12'}">
            <path d="M 155,190 L 300,215" stroke="#f59e0b" stroke-width="3.5" stroke-dasharray="4,3" fill="none" />
            <!-- Expandable Distensible Stomach -->
            <path d="M 300,215 C 360,260 450,280 500,230 C 470,250 380,240 300,215 Z" fill="#f59e0b" stroke="#fbbf24" stroke-width="2.5" filter="url(#neonGlow2)" />
            <!-- Long Liver & Intestines -->
            <path d="M 500,230 Q 560,190 620,180 T 720,215" fill="none" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round" />
          </g>

          <!-- MOBILE SLIDING HEART & ELONGATED RIGHT LUNG -->
          <g class="svg-layer-organs" opacity="${isOrg ? '1' : '0.12'}">
            <!-- Long Right Lung -->
            <path d="M 260,175 Q 380,210 500,220" stroke="#f43f5e" stroke-width="6" opacity="0.4" fill="none" />
            <!-- 3-Chambered Mobile Heart -->
            <circle cx="260" cy="180" r="12" fill="#ef4444" stroke="#ffffff" stroke-width="2" filter="url(#neonGlow2)">
              <animate attributeName="r" values="10;13;10" dur="1s" repeatCount="indefinite" />
            </circle>
          </g>

          <!-- JACOBSON'S ORGAN & HEAT PITS -->
          <g class="svg-layer-brain" opacity="${isBrain ? '1' : '0.12'}">
            <!-- Forked Tongue -->
            <path d="M 60,190 L 80,188 M 60,190 L 45,182 M 60,190 L 45,198" stroke="#ef4444" stroke-width="2" />
            <!-- Jacobson's Organ in Roof of Mouth -->
            <circle cx="105" cy="180" r="5" fill="#a855f7" stroke="#ffffff" stroke-width="1.5" />
          </g>
        </svg>
      `;
    }

    // 3. AVIAN / BIRD / RAPTOR ANATOMY
    if (arch === 'bird') {
      return `
        <svg viewBox="0 0 800 400" class="anatomy-vector-art" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <filter id="neonGlow3" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="4" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <!-- Aerodynamic Avian Silhouette -->
          <path d="M 160,140 C 180,90 240,110 320,160 C 440,110 600,100 700,70 C 660,140 600,200 520,240 C 580,280 660,330 680,360 C 580,330 460,300 400,280 C 320,320 220,310 180,240 C 140,210 130,170 160,140 Z" 
                fill="#0f172a" stroke="#8b5cf6" stroke-width="2" opacity="0.85" />

          <!-- SKELETON (Hollow Pneumatic Bones, Blade Keel, Wishbone, Wing Bones) -->
          <g class="svg-layer-skeleton" opacity="${isSkel ? '1' : '0.15'}">
            <!-- Pneumatic Honeycomb Skull & Keratin Beak -->
            <path d="M 140,160 L 190,140 C 210,140 230,160 220,185 C 200,200 170,190 140,160 Z" fill="none" stroke="#38bdf8" stroke-width="3" filter="url(#neonGlow3)" />
            <!-- Eye Orbit with Sclerotic Bone Ring -->
            <circle cx="195" cy="160" r="10" stroke="#38bdf8" stroke-width="2" fill="#050811" />
            
            <!-- Curved Cervical Spine into Rigid Synsacrum -->
            <path d="M 215,180 Q 250,220 300,200 T 460,220 T 620,280" fill="none" stroke="#38bdf8" stroke-width="4" stroke-dasharray="6,4" filter="url(#neonGlow3)" />

            <!-- Massive Blade-Like Keel (Sternum) -->
            <path d="M 260,220 C 270,270 330,280 370,260 L 320,220 Z" fill="#0284c7" opacity="0.4" stroke="#38bdf8" stroke-width="3" />

            <!-- Wing Phalanges & Humerus -->
            <path d="M 290,200 L 420,140 L 560,110 L 660,80" fill="none" stroke="#38bdf8" stroke-width="3.5" />
          </g>

          <!-- DIGESTIVE SYSTEM (Crop, Proventriculus, Gizzard with Stones) -->
          <g class="svg-layer-digestion" opacity="${isDig ? '1' : '0.12'}">
            <!-- Seed/Meat Crop -->
            <ellipse cx="250" cy="210" rx="14" ry="10" fill="#f59e0b" stroke="#fbbf24" stroke-width="2" />
            <!-- Proventriculus (Acid Vat) -->
            <path d="M 265,215 L 300,225" stroke="#f59e0b" stroke-width="4" fill="none" />
            <!-- Muscular Stone Gizzard -->
            <circle cx="330" cy="235" r="18" fill="#d97706" stroke="#f59e0b" stroke-width="2.5" filter="url(#neonGlow3)" />
            <!-- Gastrolith Grinding Stones inside Gizzard -->
            <circle cx="325" cy="232" r="2.5" fill="#ffffff" />
            <circle cx="332" cy="238" r="3" fill="#ffffff" />
            <circle cx="336" cy="230" r="2" fill="#ffffff" />
            <!-- Rapid Intestines -->
            <path d="M 345,240 Q 400,260 450,250" stroke="#f59e0b" stroke-width="4" fill="none" />
          </g>

          <!-- CARDIOPULMONARY & 9 CONTINUOUS AIR SACS -->
          <g class="svg-layer-organs" opacity="${isOrg ? '1' : '0.12'}">
            <!-- 9 Unidirectional Air Sacs -->
            <ellipse cx="280" cy="190" rx="14" ry="10" fill="#f43f5e" opacity="0.4" />
            <ellipse cx="340" cy="190" rx="16" ry="12" fill="#f43f5e" opacity="0.4" />
            <ellipse cx="400" cy="200" rx="18" ry="12" fill="#f43f5e" opacity="0.4" />
            <!-- High-Output Avian Heart (Up to 1,000 BPM) -->
            <circle cx="300" cy="215" r="14" fill="#ef4444" stroke="#ffffff" stroke-width="2" filter="url(#neonGlow3)">
              <animate attributeName="r" values="12;15;12" dur="0.6s" repeatCount="indefinite" />
            </circle>
          </g>

          <!-- CRYPTOCHROME EYE MAGNETORECEPTION -->
          <g class="svg-layer-brain" opacity="${isBrain ? '1' : '0.12'}">
            <circle cx="195" cy="160" r="4" fill="#a855f7" />
            <path d="M 205,160 L 225,165" stroke="#c084fc" stroke-width="2" />
          </g>
        </svg>
      `;
    }

    // 4. DEFAULT: QUADRUPED / BIG CAT / HERBIVORE / GENERAL ANATOMY
    return `
      <svg viewBox="0 0 800 400" class="anatomy-vector-art" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="boneGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#38bdf8" stop-opacity="0.9" />
            <stop offset="100%" stop-color="#818cf8" stop-opacity="0.7" />
          </linearGradient>
          <linearGradient id="stomachGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.85" />
            <stop offset="100%" stop-color="#ef4444" stop-opacity="0.7" />
          </linearGradient>
          <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#ef4444" stop-opacity="0.9" />
            <stop offset="100%" stop-color="#f43f5e" stop-opacity="0.8" />
          </linearGradient>
          <filter id="xrayGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <!-- Outer Quadruped Silhouette -->
        <path d="M 120,200 C 120,120 180,90 260,110 C 340,90 520,100 640,160 C 700,190 740,240 700,280 C 640,320 540,310 440,310 C 340,310 240,320 170,290 C 130,270 120,240 120,200 Z" 
              fill="#0f172a" stroke="#334155" stroke-width="2" stroke-dasharray="4,4" opacity="0.65" />

        <!-- SKELETAL SYSTEM LAYER (Bones & Spine) -->
        <g class="svg-layer-skeleton" opacity="${isSkel ? '1' : '0.2'}">
          <!-- Skull & Mandible -->
          <path d="M 150,180 C 150,140 190,130 220,150 C 240,165 240,195 210,210 C 180,225 150,210 150,180 Z" fill="none" stroke="#38bdf8" stroke-width="3.5" filter="url(#xrayGlow)" />
          <path d="M 180,210 L 220,215" stroke="#ffffff" stroke-width="2" />
          <circle cx="185" cy="165" r="10" fill="#090d16" stroke="#38bdf8" stroke-width="2" />

          <!-- Vertebral Column / Spine -->
          <path d="M 220,160 Q 360,130 520,160 T 680,210" fill="none" stroke="#38bdf8" stroke-width="4" stroke-dasharray="8,5" filter="url(#xrayGlow)" />
          
          <!-- Rib Cage Struts -->
          <path d="M 280,150 Q 290,210 270,240" fill="none" stroke="#38bdf8" stroke-width="2.5" />
          <path d="M 320,145 Q 335,215 310,250" fill="none" stroke="#38bdf8" stroke-width="2.5" />
          <path d="M 360,143 Q 380,220 350,255" fill="none" stroke="#38bdf8" stroke-width="2.5" />
          <path d="M 400,145 Q 420,220 390,255" fill="none" stroke="#38bdf8" stroke-width="2.5" />
          <path d="M 440,148 Q 460,215 430,250" fill="none" stroke="#38bdf8" stroke-width="2.5" />
          <path d="M 480,155 Q 500,210 470,245" fill="none" stroke="#38bdf8" stroke-width="2.5" />

          <!-- Limb Bones -->
          <path d="M 270,240 L 260,320 L 240,330" fill="none" stroke="#38bdf8" stroke-width="3" />
          <path d="M 520,160 L 550,250 L 570,330 L 590,335" fill="none" stroke="#38bdf8" stroke-width="3.5" />
        </g>

        <!-- DIGESTIVE SYSTEM LAYER -->
        <g class="svg-layer-digestion" opacity="${isDig ? '1' : '0.15'}">
          <path d="M 220,185 Q 280,180 340,195" fill="none" stroke="#f59e0b" stroke-width="3.5" stroke-dasharray="5,3" />
          <!-- Stomach Acid Chamber -->
          <path d="M 340,185 C 380,170 440,180 440,225 C 440,260 380,265 350,245 C 330,230 325,200 340,185 Z" 
                fill="url(#stomachGrad)" stroke="#f59e0b" stroke-width="3" filter="url(#xrayGlow)" />
          
          <path d="M 310,210 C 330,190 350,200 340,240 C 330,255 310,245 310,210 Z" fill="#b45309" opacity="0.8" stroke="#d97706" stroke-width="2" />

          <!-- Intestinal Loops -->
          <path d="M 435,230 Q 460,240 480,230 T 510,240 T 540,230 T 570,245 T 600,240 L 630,260" 
                fill="none" stroke="#f59e0b" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round" filter="url(#xrayGlow)" />
        </g>

        <!-- CARDIOPULMONARY LAYER -->
        <g class="svg-layer-organs" opacity="${isOrg ? '1' : '0.15'}">
          <ellipse cx="320" cy="180" rx="35" ry="25" fill="#f43f5e" opacity="0.35" stroke="#f43f5e" stroke-width="1.5" />
          <circle cx="300" cy="205" r="16" fill="url(#heartGrad)" stroke="#ffffff" stroke-width="2" filter="url(#xrayGlow)">
            <animate attributeName="r" values="14;17;14" dur="0.9s" repeatCount="indefinite" />
          </circle>
        </g>

        <!-- BRAIN & SENSORY NERVOUS LAYER -->
        <g class="svg-layer-brain" opacity="${isBrain ? '1' : '0.15'}">
          <ellipse cx="190" cy="155" rx="18" ry="12" fill="#a855f7" opacity="0.85" stroke="#c084fc" stroke-width="2" filter="url(#neonGlow)" />
          <path d="M 205,158 Q 360,135 520,165" fill="none" stroke="#c084fc" stroke-width="2" stroke-dasharray="4,3" />
        </g>
      </svg>
    `;
  }

  renderAnatomyFactCard() {
    const cardEl = document.getElementById('anatomy-fact-card');
    if (!cardEl || !this.currentAnimal) return;

    const data = this.getAnatomyForAnimal(this.currentAnimal);
    const skel = data.skeleton;
    const dig = data.digestion;
    const cardio = data.cardiopulmonary;
    const nerv = data.nervous;

    let selectedHighlightHtml = '';

    if (this.selectedHotspot === 'stomach') {
      selectedHighlightHtml = `
        <div class="anatomy-spotlight-box stomach-focus">
          <div class="spotlight-header">
            <span class="spotlight-badge">🍖 DIGESTIVE SYSTEM SPOTLIGHT</span>
            <h3 class="spotlight-title">${dig.title}</h3>
          </div>
          <div class="spotlight-specs-grid">
            <div class="spec-cell">
              <span class="spec-label">STOMACH TYPE</span>
              <strong class="spec-val">${dig.stomachType}</strong>
            </div>
            <div class="spec-cell">
              <span class="spec-label">GASTRIC ACID pH</span>
              <strong class="spec-val text-amber">${dig.phLevel}</strong>
            </div>
            <div class="spec-cell">
              <span class="spec-label">TRANSIT & DIGEST TIME</span>
              <strong class="spec-val">${dig.digestTime}</strong>
            </div>
          </div>
          <p class="spotlight-desc">${dig.desc}</p>
          <div class="spotlight-tags">
            <strong>Key Digestive Organs:</strong> ${dig.organs.join(' • ')}
          </div>
        </div>
      `;
    } else if (this.selectedHotspot === 'skull' || this.selectedHotspot === 'spine') {
      selectedHighlightHtml = `
        <div class="anatomy-spotlight-box skeleton-focus">
          <div class="spotlight-header">
            <span class="spotlight-badge">🦴 SKELETAL & BONE SPOTLIGHT</span>
            <h3 class="spotlight-title">${skel.title}</h3>
          </div>
          <div class="spotlight-specs-grid">
            <div class="spec-cell">
              <span class="spec-label">BONE DENSITY</span>
              <strong class="spec-val text-cyan">${skel.boneDensity}</strong>
            </div>
            <div class="spec-cell">
              <span class="spec-label">SKULL & JAW KINETICS</span>
              <strong class="spec-val">${skel.skullMechanics}</strong>
            </div>
          </div>
          <p class="spotlight-desc">${skel.desc}</p>
          <div class="spotlight-tags">
            <strong>Biomechanical Superpower:</strong> ${skel.specialAdaptations}
          </div>
        </div>
      `;
    } else if (this.selectedHotspot === 'heart') {
      selectedHighlightHtml = `
        <div class="anatomy-spotlight-box heart-focus">
          <div class="spotlight-header">
            <span class="spotlight-badge">🫀 CARDIOPULMONARY & RESPIRATION</span>
            <h3 class="spotlight-title">${cardio.title}</h3>
          </div>
          <div class="spotlight-specs-grid">
            <div class="spec-cell">
              <span class="spec-label">TYPICAL HEART RATE</span>
              <strong class="spec-val text-red">${cardio.heartRate}</strong>
            </div>
            <div class="spec-cell">
              <span class="spec-label">RESPIRATORY EFFICIENCY</span>
              <strong class="spec-val">${cardio.lungCapacity}</strong>
            </div>
          </div>
          <p class="spotlight-desc">${cardio.desc}</p>
        </div>
      `;
    } else if (this.selectedHotspot === 'brain') {
      selectedHighlightHtml = `
        <div class="anatomy-spotlight-box brain-focus">
          <div class="spotlight-header">
            <span class="spotlight-badge">🧠 NERVOUS SYSTEM & SENSES</span>
            <h3 class="spotlight-title">${nerv.title}</h3>
          </div>
          <div class="spotlight-specs-grid">
            <div class="spec-cell">
              <span class="spec-label">SENSORY SUPERPOWER</span>
              <strong class="spec-val text-purple">${nerv.superpower}</strong>
            </div>
          </div>
          <p class="spotlight-desc">${nerv.desc}</p>
        </div>
      `;
    } else {
      selectedHighlightHtml = `
        <div class="anatomy-spotlight-box stomach-focus">
          <div class="spotlight-header">
            <span class="spotlight-badge">🧬 INTESTINAL & ABSORPTION TRACT</span>
            <h3 class="spotlight-title">Nutrient Extraction & Excretory System</h3>
          </div>
          <p class="spotlight-desc">${dig.desc}</p>
          <div class="spotlight-tags">
            <strong>Dietary Adaptation:</strong> ${dig.dietNote}
          </div>
        </div>
      `;
    }


    const isZh = window.AK_I18N && window.AK_I18N.getLanguage() === 'zh';
    const isEs = window.AK_I18N && window.AK_I18N.getLanguage() === 'es';

    const sysSkel = isZh ? '骨骼系統骨架' : (isEs ? 'Sistema Esquelético' : 'Skeletal Framework');
    const sysDig = isZh ? '消化系統與臟器' : (isEs ? 'Digestión y Vísceras' : 'Digestion & Guts');
    const sysOrg = isZh ? '心肺循環系統' : (isEs ? 'Corazón y Pulmones' : 'Heart & Lungs');
    const sysBrain = isZh ? '大腦與感覺神經' : (isEs ? 'Cerebro y Sentidos' : 'Brain & Senses');

    const btnHearCall = isZh ? '🔊 聆聽叫聲' : (isEs ? '🔊 Escuchar Llamada' : '🔊 Hear Call');
    const btnFullCard = isZh ? '🔍 完整物種標本卡' : (isEs ? '🔍 Ficha de Especie Completa' : '🔍 Full Species Specimen Card');
    const btnFullXray = isZh ? '✨ 全透視 X 光視圖' : (isEs ? '✨ Vista Completa Rayos X' : '✨ Full X-Ray View');

    cardEl.innerHTML = `
      <!-- Spotlight Hotspot Detail -->
      ${selectedHighlightHtml}

      <!-- Comprehensive Multi-System Comparison Grid -->
      <div class="anatomy-systems-overview-grid">
        <div class="system-mini-card ${this.activeLayer === 'skeleton' ? 'active' : ''}" onclick="window.AK_ANATOMY.setLayer('skeleton')">
          <div class="system-mini-top">
            <span class="system-mini-icon">🦴</span>
            <strong>${sysSkel}</strong>
          </div>
          <p>${skel.boneDensity} • ${skel.specialAdaptations.substring(0, 75)}...</p>
        </div>

        <div class="system-mini-card ${this.activeLayer === 'digestion' ? 'active' : ''}" onclick="window.AK_ANATOMY.setLayer('digestion')">
          <div class="system-mini-top">
            <span class="system-mini-icon">🍖</span>
            <strong>${sysDig}</strong>
          </div>
          <p>pH ${dig.phLevel} • ${dig.stomachType} (${dig.digestTime})</p>
        </div>

        <div class="system-mini-card ${this.activeLayer === 'organs' ? 'active' : ''}" onclick="window.AK_ANATOMY.setLayer('organs')">
          <div class="system-mini-top">
            <span class="system-mini-icon">🫀</span>
            <strong>${sysOrg}</strong>
          </div>
          <p>${cardio.heartRate} • ${cardio.title}</p>
        </div>

        <div class="system-mini-card ${this.activeLayer === 'brain' ? 'active' : ''}" onclick="window.AK_ANATOMY.setLayer('brain')">
          <div class="system-mini-top">
            <span class="system-mini-icon">🧠</span>
            <strong>${sysBrain}</strong>
          </div>
          <p>${nerv.superpower}</p>
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="anatomy-actions-bar">
        <button class="btn-voice-sound" onclick="window.AK_AUDIO.playAnimalSound(window.AK_ANATOMY.currentAnimal)" title="Hear Sound">
          ${btnHearCall}
        </button>
        <button class="btn-ghost" onclick="window.AK_ANATOMY.closeAnatomyModal(); window.app.openAnimalDetail(window.AK_ANATOMY.currentAnimal.id)" title="Open Full Field Guide Card">
          ${btnFullCard}
        </button>
        <button class="btn-secondary" onclick="window.AK_ANATOMY.setLayer('all')" title="Reset Full Scan">
          ${btnFullXray}
        </button>
      </div>
    `;
  }
}

window.AK_ANATOMY = new AnimalAnatomyScanner();
