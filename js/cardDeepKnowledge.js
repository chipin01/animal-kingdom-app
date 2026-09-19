// Deep Knowledge Engine for all 8 Nature Categories
// Synthesizes rich, multi-paragraph educational profiles for:
// 1. How They Live (Habitat, Lifecycle, Ecology / Growth / Geological Genesis)
// 2. Superpowers & Adaptations (Defenses, Venom, Camouflage, Optical Effects, Hardness, Chemical Warfare)
// 3. Physical Characteristics & Anatomy (Build, Markings, Crystal Lattice, Floral Morphology)

(function(window) {
  'use strict';

  const CardKnowledgeEngine = {
    /**
     * Get 2-3 detailed paragraphs about how the specimen lives, grows, or formed.
     */
    getHowTheyLive(item) {
      if (!item) return [];
      const cat = item.category;
      const name = item.name || 'This specimen';
      const sci = item.scientific || '';
      const hab = item.habitat || 'diverse ecosystems worldwide';
      const diet = item.diet || 'specialized sustenance';
      const pred = item.predators || 'various natural challenges';

      if (cat === 'gemstones') {
        return [
          `**Geological Genesis & Formation**: ${name} is an extraordinary treasure born deep within the Earth over millions to billions of years. Originating from ${hab}, it crystallized under immense heat and crushing pressures in magmatic chambers, hydrothermal mineral veins, or metamorphic rock strata. Atoms of ${sci.split('•')[0] || sci} arranged themselves into a flawless, repeating crystalline lattice as superheated mineral-rich fluids slowly cooled inside host rock fissures.`,
          `**Mining Origins & Natural Environment**: Throughout geological history, tectonic uplift and volcanic eruptions brought these ancient mineral deposits closer to the Earth's surface. In its natural environment, ${name} occurs embedded within pegmatite dikes, alluvial river gravels, or solid metamorphic marble beds. Extracting high-grade specimens requires careful gemological mining in regions famous for rich mineral veins, where each raw crystal preserves a pristine geological record of our planet's deep interior.`
        ];
      }

      if (cat === 'plants') {
        return [
          `**Natural Habitat & Growing Environment**: ${name} (*${sci}*) thrives naturally across ${hab}. Adapted to its native climate, it flourishes with access to ${diet}, developing an extensive root system to anchor itself firmly into nutrient-rich soil and absorb vital groundwater and essential minerals.`,
          `**Lifecycle & Ecological Symphony**: Throughout the growing seasons, ${name} captures sunlight through chlorophyll-packed foliage to fuel vigorous vegetative growth. During its peak blooming period (${item.endangered || 'Seasonal flowering'}), it unfurls vibrant blossoms to engage in a vital dance with local pollinators such as bees, butterflies, and hummingbirds. Symbiotic mycorrhizal fungi in the surrounding soil assist in nutrient exchange, while natural defenses protect against herbivores (${pred}).`
        ];
      }

      if (cat === 'reptiles') {
        return [
          `**Habitat & Daily Survival**: As an ectothermic master of survival, the ${name} (*${sci}*) thrives across ${hab}. Being cold-blooded, it begins its day by basking atop sun-warmed rocks or branches to elevate its core body temperature, activating its metabolism before embarking on territorial patrols and foraging expeditions.`,
          `**Hunting Strategy & Seasonal Lifecycle**: In its daily routine, it hunts and consumes ${diet}, utilizing sharp stealth, ambush patience, or swift pursuit. It navigates a perilous ecosystem where it must remain vigilant against predators (${pred}). When cold weather or extreme drought arrives, it seeks refuge in deep underground burrows, rock crevices, or dense canopy foliage, conserving energy through brumation or dormancy.`
        ];
      }

      if (cat === 'birds') {
        return [
          `**Avian Habitat & Territory**: Soaring through the skies and nesting across ${hab}, the ${name} (*${sci}*) is an agile avian inhabitant of forest canopies, open grasslands, coastal cliffs, or wetlands. It establishes well-defined aerial and foraging territories, utilizing distinctive vocal calls and songs to communicate with flock mates and defend its nesting grounds.`,
          `**Daily Routine & Nesting Lifecycle**: Its daily life revolves around foraging for ${diet}, requiring keen vision, aerodynamic mastery, and high metabolic energy. During the breeding season, it constructs intricate nests to protect eggs from environmental hazards and predators (${pred}). Both parents often participate in incubating eggs and hunting continuously to nourish fast-growing chicks until they fledge.`
        ];
      }

      if (cat === 'marine') {
        return [
          `**Oceanic Realm & Aquatic Depths**: Navigating the world's waters across ${hab}, the ${name} (*${sci}*) is exquisitely adapted for marine life. It moves effortlessly through strong ocean currents, maintaining buoyancy and regulating salt and oxygen levels in aquatic environments ranging from sunlit coral reefs to abyssal oceanic trenches.`,
          `**Foraging Dynamics & Pod Lifecycle**: In the open ocean, it sustains itself on ${diet}, employing sophisticated schooling maneuvers, echolocation pulses, or stealthy reef ambushes. It plays a pivotal ecological role in maintaining marine food-web equilibrium while actively evading apex ocean predators (${pred}). Many species undertake vast annual migrations across thousands of nautical miles to reach traditional breeding and calving grounds.`
        ];
      }

      if (cat === 'insects') {
        return [
          `**Micro-Habitat & Daily Life**: Dwelling across ${hab}, the ${name} (*${sci}*) lives an action-packed life on a miniature scale. Whether navigating forest leaf litter, garden blossoms, or subterranean burrows, it spends its active hours harvesting ${diet} with pinpoint efficiency.`,
          `**Metamorphosis & Social Dynamics**: Its lifecycle showcases the wonder of complete or incomplete metamorphosis—transforming from an egg into an active larva or nymph, and ultimately emerging as a fully winged, armored adult. It communicates with fellows through chemical pheromones, antennae vibrations, or visual displays while evading insectivorous predators (${pred}).`
        ];
      }

      if (cat === 'amphibians') {
        return [
          `**Dual-World Habitat**: Living between fresh water and moist terrestrial ground across ${hab}, the ${name} (*${sci}*) depends on humid microclimates to thrive. Because its delicate, permeable skin must remain moist for cutaneous respiration, it is most active during warm, rainy nights and humid twilight hours, resting beneath mossy logs or wet stones during hot daylight.`,
          `**Lifecycle & Metamorphic Journey**: Its lifecycle begins as a jelly-coated egg laid in ponds, vernal pools, or moist leaf litter. The hatched aquatic tadpoles develop lungs, legs, and predatory hunting instincts, feeding on ${diet}. As adults, they play a crucial role as environmental bio-indicators, balancing insect populations while evading predators (${pred}).`
        ];
      }

      // Default Land Animals
      return [
        `**Territory & Daily Routine**: Roaming the diverse landscapes of ${hab}, the ${name} (*${sci}*) is a master of its native biome. It establishes foraging pathways, territorial scent markings, and safe resting dens, balancing periods of active hunting or grazing with quiet rest in shaded retreats.`,
        `**Dietary Strategy & Social Structure**: Daily survival centers on securing ${diet}, requiring acute sensory tracking, endurance, and physical prowess. Whether living in cooperative family social groups or solitary existence, it navigates complex territorial boundaries while managing threats from natural rivals and predators (${pred}).`
      ];
    },

    /**
     * Get 2 detailed paragraphs about superpowers, unique adaptations, and defense mechanisms.
     */
    getSuperpowers(item) {
      if (!item) return [];
      const cat = item.category;
      const name = item.name || 'This specimen';
      const sci = item.scientific || '';
      const fact = item.funFact || '';

      if (cat === 'gemstones') {
        return [
          `**Crystalline Superpowers & Physical Resistance**: ${name} possesses extraordinary mineralogical superpowers! Boasting a formidable ${sci.includes('Mohs') ? sci.split('•')[1] || sci : 'Mohs Hardness rating'}, its dense atomic structure delivers incredible resistance against scratching, weathering, and thermal stress. Many crystalline specimens exhibit piezoelectric and pyroelectric properties—generating electrical voltage when subjected to mechanical pressure or temperature fluctuations.`,
          `**Optical Phenomena & Luminescent Magic**: Beyond durability, ${name} dazzles with mesmerizing optical powers. When struck by light, it demonstrates high refractive dispersion, splitting incident white light into vibrant spectral fire, pleochroic color shifts from different viewing angles, or glowing with vivid fluorescence under ultraviolet blacklight. ${fact}`
        ];
      }

      if (cat === 'plants') {
        return [
          `**Botanical Superpowers & Chemical Warfare**: ${name} commands an arsenal of chemical and biological superpowers. It produces specialized secondary metabolites, aromatic essential oils, and bioactive alkaloids that act as natural shields against pests, fungi, and bacterial pathogens, while simultaneously releasing irresistible floral scents that attract beneficial pollinators from miles away.`,
          `**Adaptive Resilience & Solar Harvesting**: Equipped with advanced phototropic heliotropism, its leaves and petals can physically turn to track the sun across the sky, maximizing photosynthetic energy absorption. Its vascular xylem and phloem can transport gallons of water against gravity using capillary pressure. ${fact}`
        ];
      }

      if (cat === 'reptiles') {
        return [
          `**Reptilian Superpowers & Sensory Radar**: The ${name} is engineered with superhuman sensory and physical superpowers. Depending on the species, it may utilize specialized Jacobson's organs (vomeronasal sensing) to literally taste airborne scent molecules with its tongue, infrared loreal heat-sensing pits to track warm-blooded prey in pitch darkness, or ultra-flexible kinetic skull joints that swallow food far larger than its head.`,
          `**Armor, Camouflage & Tactical Defense**: Its rugged keratinized scales form an impenetrable moisture-locking shield that prevents dehydration in harsh environments. When threatened, it deploys rapid camouflage color shifting, lightning-fast defensive strikes, tail autotomy (detaching its tail to distract predators), or potent biochemical venoms. ${fact}`
        ];
      }

      if (cat === 'birds') {
        return [
          `**Aviation Superpowers & Aerial Mastery**: The ${name} possesses incredible aerodynamic superpowers! Equipped with hollow, pneumatic bones, an ultra-efficient four-chambered avian respiratory system with air sacs, and precision-engineered flight feathers, it achieves supreme aerial maneuverability, soaring effortlessly on thermal updrafts or executing lightning-fast predatory dives.`,
          `**Telescopic Vision & Earth-Magnetism Navigation**: Its eyesight is among the sharpest in the animal kingdom, featuring dual foveas and the ability to perceive ultraviolet light spectrums invisible to human eyes. During seasonal migrations, it navigates thousands of miles by sensing the Earth's magnetic field through quantum cryptochrome proteins in its retinas. ${fact}`
        ];
      }

      if (cat === 'marine') {
        return [
          `**Hydrodynamic Superpowers & Deep-Sea Mastery**: The ${name} rules the aquatic realm with unmatched physiological superpowers! It can withstand crushing hydrostatic pressures thousands of feet beneath the surface, hold its breath for extraordinary durations through high-density myoglobin oxygen storage in its muscle tissues, or navigate pitch-black oceanic depths using biological echolocation sonar.`,
          `**Bio-Optics & Aquatic Stealth**: Many marine creatures wield bioluminescent photophores to produce glowing light for communication, prey enticement, or counter-illumination camouflage that conceals their silhouette against downwelling ocean sunlight. Streamlined dermal denticles or hydrodynamic fin profiles minimize water drag for burst-speed agility. ${fact}`
        ];
      }

      if (cat === 'insects') {
        return [
          `**Micro-Engineering Superpowers**: Relative to its miniature body size, the ${name} possesses superhuman strength, agility, and sensory superpowers! It can lift dozens of times its own body weight, leap hundreds of times its body length, or beat its wings hundreds of times per second using specialized asynchronous flight muscles.`,
          `**Chitin Armor & Compound Vision**: Encased in a lightweight, ultra-tough chitinous exoskeleton, it is shielded against mechanical impacts and moisture loss. Its massive compound eyes consist of thousands of individual ommatidia lenses that detect microscopic movements at ultra-high frame rates, enabling instantaneous predator evasion. ${fact}`
        ];
      }

      if (cat === 'amphibians') {
        return [
          `**Regenerative & Cutaneous Superpowers**: The ${name} commands miraculous biological superpowers! It can absorb oxygen and moisture directly through its specialized permeable skin, allowing it to breathe underwater and on land. Many amphibians possess astonishing cellular regeneration powers—capable of regrowing lost limbs, toes, tail tissues, and even parts of internal organs without scarring.`,
          `**Toxin Secretion & Sticky Ballistic Tongues**: For defense and predation, granular skin glands can secrete potent peptide toxins, slippery mucus, or warning pigments that deter predators. Its lightning-fast tongue can shoot out in milliseconds using elastic muscle recoil to snatch prey with high-viscosity mucus adhesion. ${fact}`
        ];
      }

      // Land Animals
      return [
        `**Apex Physical Superpowers**: The ${name} is endowed with extraordinary biomechanical powers refined over millions of years of evolution. These include supreme muscular explosive power, acute olfactory senses capable of detecting scents miles away, and night vision augmented by a reflective tapetum lucidum behind the retinas.`,
        `**Tactical Adaptations & Survival Armor**: Whether utilizing razor-sharp claws, bone-crushing jaw bite force, dense thermal fur insulation, or disruptive camouflage coat patterns, it is perfectly equipped to dominate its ecological niche and overcome challenging environmental conditions. ${fact}`
      ];
    },

    /**
     * Get 2 detailed paragraphs about physical characteristics, anatomy, colors, and structure.
     */
    getCharacteristics(item) {
      if (!item) return [];
      const cat = item.category;
      const name = item.name || 'This specimen';
      const sci = item.scientific || '';

      if (cat === 'gemstones') {
        return [
          `**Crystal Lattice & Geometric Architecture**: Gemologically, ${name} exhibits a characteristic crystalline structure belonging to one of nature's fundamental crystal systems. Its chemical formulation (${sci}) governs the precise spacing and covalent bonding of constituent atoms, resulting in clean crystal faces, distinct cleavage angles, and geometric symmetries ranging from elongated prisms to cubic octahedrons.`,
          `**Luster, Color & Gemological Beauty**: It showcases captivating visual characteristics, including vibrant chromatic body colors caused by chromophore trace elements (such as chromium, iron, titanium, or copper). Its surface reflects light with an adamantine, vitreous, or silky luster, complemented by a specific gravity and fracture pattern that make it unmistakable under gemological microscope analysis.`
        ];
      }

      if (cat === 'plants') {
        return [
          `**Floral Anatomy & Petal Architecture**: The blossom of ${name} (*${sci}*) is an exquisite marvel of botanical architecture. It features symmetrical petal arrangements, rich corolla color pigments ranging through vibrant petals, prominent stamens bearing pollen, and a nectar-secreting pistil designed to guide pollinators straight into its reproductive center.`,
          `**Foliage, Stems & Growth Morphology**: Structurally, its vegetative body is composed of sturdy cellulose-reinforced stems, deep-green chlorophyllous leaves with intricate vascular venation, and protective epidermal cuticles that regulate stomatal transpiration and maintain crisp turgor pressure throughout the plant.`
        ];
      }

      if (cat === 'reptiles') {
        return [
          `**Anatomical Architecture & Scale Structure**: The physical build of the ${name} (*${sci}*) features an elongated, low-center-of-gravity or serpentine body covered in overlapping epidermal scales made of beta-keratin. These specialized scales provide armor against friction, sharp terrain, and moisture loss while creating a striking textural appearance.`,
          `**Coloration & Cranial Specializations**: Its coloration displays intricate patterns of bands, spots, or iridescent sheens designed for disruptive camouflage or threat displays. Its cranial anatomy includes specialized jaw articulations, vertically or horizontally slit pupils tailored for depth perception, and sensory scales that register subtle ground vibrations.`
        ];
      }

      if (cat === 'birds') {
        return [
          `**Avian Morphology & Plumage Design**: The plumage of the ${name} (*${sci}*) consists of thousands of specialized contour feathers, down feathers for thermal insulation, and stiff flight primaries that shape its wings. Its coloration ranges from vibrant iridescent pigments to cryptic earthy patterns that blend seamlessly into surrounding foliage or sky.`,
          `**Beak & Skeletal Architecture**: Its beak is a custom-engineered biological tool—shaped for seed cracking, insect snapping, flesh tearing, or nectar sipping without added weight. Lightweight hollow bones, powerful pectoral flight muscles anchored to a deep keel bone, and gripping talons complete its aerodynamic anatomy.`
        ];
      }

      if (cat === 'marine') {
        return [
          `**Hydrodynamic Build & Fin Anatomy**: The ${name} (*${sci}*) features a hydrodynamic, torpedo-like or undulating body plan that minimizes drag through water. Specialized pectoral, dorsal, and caudal fins provide surgical steering control, propulsion, and stability during deep dives and sudden bursts of speed.`,
          `**Skin Texture, Gills & Sensory Systems**: Its skin is equipped with specialized waterproof dermal layers or scales, paired with prominent gills or blowholes for respiration. A sophisticated lateral line system running along its flanks detects microscopic pressure waves and water currents created by nearby creatures.`
        ];
      }

      if (cat === 'insects') {
        return [
          `**Tripartite Anatomy & Exoskeleton**: The anatomical plan of the ${name} (*${sci}*) is divided into three distinct body segments: head, thorax, and abdomen. Six jointed legs attached to the thorax provide agility and traction, while hardened wing covers (elytra) or translucent membranous wings enable rapid flight.`,
          `**Antennae & Micro-Sensing Organs**: Its head bears prominent compound eyes and highly articulated antennae packed with olfactory and mechanoreceptor sensilla, allowing it to navigate, detect microscopic scent molecules in the air, and explore its micro-environment with surgical precision.`
        ];
      }

      if (cat === 'amphibians') {
        return [
          `**Body Plan & Permeable Skin**: The ${name} (*${sci}*) features a streamlined, moist-skinned anatomy with glandular skin layers that secrete protective moisture and antimicrobial compounds. Its limbs are engineered for explosive leaping, agile climbing with specialized toe pads, or swimming with webbed digits.`,
          `**Sensory Anatomy & Vocal Sacs**: Large, protruding eyes positioned on top of the head grant a wide field of vision for spotting approaching prey and predators without moving. Males frequently feature expandable vocal sacs that resonate loud mating calls across wetlands during the breeding season.`
        ];
      }

      // Default Land Animals
      return [
        `**Physical Build & Muscular Architecture**: The ${name} (*${sci}*) possesses a robust, balanced skeletal and muscular structure adapted for agility, endurance, or supreme physical strength in its native terrain. Powerful limbs, specialized paw pads or hooves, and a flexible spine grant it remarkable balance and agility.`,
        `**Coat, Facial Features & Sensory Organs**: Its coat consists of protective guard hairs and insulating underfur with distinctive camouflage markings, spots, or stripes. Expressive ears, binocular forward-facing or panoramic side-facing eyes, and a sensitive snout provide comprehensive environmental awareness.`
      ];
    }
  };

  window.CardKnowledgeEngine = CardKnowledgeEngine;
})(window);
