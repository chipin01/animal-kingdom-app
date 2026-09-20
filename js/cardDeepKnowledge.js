// Deep Knowledge Engine for all 8 Nature Categories (Multilingual: EN, ZH, ES)
// Synthesizes rich, multi-paragraph educational profiles for:
// 1. How They Live (Habitat, Lifecycle, Ecology / Growth / Geological Genesis)
// 2. Superpowers & Adaptations (Defenses, Venom, Camouflage, Optical Effects, Hardness, Chemical Warfare)
// 3. Physical Characteristics & Anatomy (Build, Markings, Crystal Lattice, Floral Morphology)

(function(window) {
  'use strict';

  const CardKnowledgeEngine = {
    _getActiveLang(lang) {
      if (lang && ['en', 'zh', 'es'].includes(lang)) return lang;
      return (window.AK_I18N ? window.AK_I18N.getLanguage() : 'en');
    },

    _getName(item) {
      return (window.AK_I18N ? window.AK_I18N.getSpeciesName(item) : (item.name || 'This specimen'));
    },

    /**
     * Get 2-3 detailed paragraphs about how the specimen lives, grows, or formed.
     */
    getHowTheyLive(item, lang = null) {
      if (!item) return [];
      const activeLang = this._getActiveLang(lang);
      const cat = item.category;
      const name = this._getName(item);
      const sci = item.scientific || '';
      const hab = item.habitat || 'diverse ecosystems worldwide';
      const diet = item.diet || 'specialized sustenance';
      const pred = item.predators || 'various natural challenges';

      // -------------------------------------------------------------
      // TRADITIONAL CHINESE (zh)
      // -------------------------------------------------------------
      if (activeLang === 'zh') {
        if (cat === 'gemstones') {
          return [
            `**地質成因與結晶歷程**：${name}是大自然歷經數百萬至數十億年高溫高壓淬鍊而成的地質奇蹟。它源自${hab}，在地函深處的岩漿庫、熱液礦脈或變質岩層中緩慢結晶。化學組分（${sci}）在極端壓力與熾熱流體中逐漸冷卻，原子排列成完美有序的微觀晶體晶格，凝聚了地球內部的浩瀚能量。`,
            `**原生礦床與開採背景**：在地質歷史的板塊運動與造山抬升過程中，這些古老的礦床被帶往地表附近。在自然界中，${name}常賦存於偉晶岩脈、沖積砂礦或堅硬的大理岩中。每一顆未經雕琢的天然原石，都忠實記錄著地球板塊變遷與地質演變的壯麗篇章。`
          ];
        }

        if (cat === 'plants') {
          return [
            `**原生棲地與生長環境**：${name}（*${sci}*）生長於${hab}。在長期演化中，牠高度適應當地的氣候與微環境，藉由${diet}的滋養，深扎強健的根系於土壤之中，高效吸收地下水分與關鍵礦物質元素。`,
            `**生命週期與生態共生**：在每年蓬勃生長季節，${name}展開葉片捕捉陽光進行光合作用。花期來臨時（${item.endangered || '季節性盛開'}），綻放絢麗的花朵，吸引蜜蜂、蝴蝶等傳粉者進行生態授粉，同時合成次生代謝物以抵禦草食性威脅（${pred}），構成森林與草地中不可或缺的生命篇章。`
          ];
        }

        if (cat === 'reptiles') {
          return [
            `**棲息環境與每日生活**：作為大自然的冷血生存大師，${name}（*${sci}*）棲息於${hab}。作為變溫動物，牠在清晨通常會爬上向陽岩石或樹枝沐浴陽光，迅速提升核心體溫並啟動新陳代謝，隨後展開領地巡視與捕食行動。`,
            `**獵食策略與季節節奏**：在日常生活中，牠以${diet}為主要食糧，展現出驚人的伏擊耐心、敏銳視力或迅雷不及掩耳的撲咬。在面對天敵威脅（${pred}）時，牠依靠偽裝或毒素自我防禦；遇到乾旱或寒冬時，則會進入冬眠或休眠狀態以保存體力。`
          ];
        }

        if (cat === 'birds') {
          return [
            `**飛行領域與築巢棲所**：展翅翱翔於天際的${name}（*${sci}*）棲息於${hab}。牠擁有極為開闊的飛行領域與空中視野，透過豐富的鳴唱與羽翼展示來宣告領地主權，並與同伴建立緊密的社交互動。`,
            `**覓食動態與繁殖撫育**：在日常生活中，牠專注於覓食${diet}，依靠敏銳的雙眼與高超的空氣動力學技巧穿梭林間或俯衝捕食。繁殖季節時，牠會精心構築安全的巢穴撫育雛鳥，警惕並防範來自天敵（${pred}）的窺伺。`
          ];
        }

        if (cat === 'marine') {
          return [
            `**深藍海洋與水下領域**：徜徉在廣袤水域之中的${name}（*${sci}*），棲息於${hab}。牠完美適應了不同深度的水壓、鹽度與洋流，流線型身軀在蔚藍水下自在穿梭。`,
            `**覓食策略與群落洄游**：在深海與珊瑚礁間，牠以${diet}維持生命能量。許多海洋物種擁有卓越的群體協同狩獵本能或回聲定位天賦，每年更會展開跨越數千浬的壯麗大遷徙。`
          ];
        }

        if (cat === 'insects') {
          return [
            `**微觀世界與生存天地**：活躍於微觀視角的${name}（*${sci}*），廣泛分佈在${hab}。無論穿梭於落葉層、花叢間或地底巢穴，牠都能以驚人的效率採集${diet}。`,
            `**完全變態與社交智慧**：牠的生命歷程展現了昆蟲完全變態或不完全變態的演化奇蹟。透過費洛蒙氣味訊號、觸角微震動進行精密溝通，並巧妙躲避各類捕食者（${pred}）。`
          ];
        }

        if (cat === 'amphibians') {
          return [
            `**水陸雙棲與濕潤秘境**：生活於清泉與濕地之間的${name}（*${sci}*），主要棲息在${hab}。因為需要透過通透柔軟的皮膚輔助呼吸，牠最喜愛在溫暖多雨的夜晚與黎明時分活動。`,
            `**發育變態與生態指針**：生命從水中的卵與蝌蚪開始，逐步長出四肢與肺部，長大後以${diet}為食。作為對環境極為敏感的生態指針生物，牠在平衡昆蟲數量與守護濕地生態方面扮演關鍵角色。`
          ];
        }

        // Default Land Animals
        return [
          `**領地漫步與日行節律**：漫遊在${hab}的廣袤生境中，${name}（*${sci}*）是其原生生物群落的生存大師。牠建立固定的漫步路徑與領地標記，在充沛的狩獵採食與陰涼樹蔭下的休養中取得完美平衡。`,
          `**覓食智略與社會結構**：日常生存核心在於獲取${diet}。無論是集體群居還是獨來獨往，牠都展現出高度的環境警覺性，隨時戒備自然對手與捕食威脅（${pred}）。`
        ];
      }

      // -------------------------------------------------------------
      // SPANISH (es)
      // -------------------------------------------------------------
      if (activeLang === 'es') {
        if (cat === 'gemstones') {
          return [
            `**Génesis Geológica y Formación**: El espécimen de ${name} es un tesoro extraordinario nacido en las profundidades de la Tierra a lo largo de millones de años. Con origen en ${hab}, cristalizó bajo temperaturas y presiones inmensas en cámaras magmáticas y vetas hidrotermales (${sci}).`,
            `**Entorno Minero y Naturaleza**: A lo largo de la historia tectónica, los movimientos de placas acercaron estos depósitos a la superficie. Cada cristal en bruto conserva un registro prístino del interior de nuestro planeta.`
          ];
        }

        if (cat === 'plants') {
          return [
            `**Hábitat Natural y Crecimiento**: ${name} (*${sci}*) prospera en ${hab}. Adaptada al clima local, florece con ${diet}, desarrollando raíces profundas para absorber agua subterránea y minerales vitales.`,
            `**Ciclo de Vida y Polinización**: A lo largo de las estaciones, captura la luz solar mediante fotosíntesis. Durante su floración (${item.endangered || 'Temporada de floración'}), interactúa con polinizadores nativos mientras se defiende de herbívoros (${pred}).`
          ];
        }

        if (cat === 'reptiles') {
          return [
            `**Hábitat y Supervivencia Diaria**: Como maestro ectotérmico de la adaptación, ${name} (*${sci}*) habita en ${hab}. Al ser de sangre fría, comienza su jornada calentándose bajo el sol para activar su metabolismo antes de patrullar o cazar.`,
            `**Estrategia de Caza y Vida Estacional**: Se alimenta principalmente de ${diet}, empleando paciencia de emboscada o velocidad fulminante, mientras se mantiene alerta ante depredadores (${pred}).`
          ];
        }

        if (cat === 'birds') {
          return [
            `**Territorio y Vuelo Aéreo**: Surcando los cielos y anidando en ${hab}, ${name} (*${sci}*) es un habitante ágil del dosel forestal o costas abiertas, comunicándose mediante cantos territoriales distintivos.`,
            `**Rutina Diaria y Crianza**: Busca incansablemente ${diet}, utilizando visión telescópica y gran destreza aerodinámica para proteger a sus crías de depredadores (${pred}).`
          ];
        }

        if (cat === 'marine') {
          return [
            `**Profundidades Oceánicas y Vida Acuática**: Navegando por aguas de ${hab}, ${name} (*${sci}*) está adaptado de forma óptima para la vida marina, regulando la flotabilidad y oxígeno en corrientes oceánicas.`,
            `**Caza Marina y Migración**: Se sustenta con ${diet}, empleando ecolocalización o maniobras en cardumen, desempeñando un papel clave en la cadena trófica marina.`
          ];
        }

        if (cat === 'insects') {
          return [
            `**Micro-Hábitat y Vida Diminuta**: Habitante de ${hab}, ${name} (*${sci}*) vive una existencia intensa en escala miniatura, cosechando ${diet} con precisión milimétrica.`,
            `**Metamorfosis y Feromonas**: Su ciclo de vida muestra el milagro de la metamorfosis, comunicándose mediante señales químicas y vibraciones para evitar amenazas (${pred}).`
          ];
        }

        if (cat === 'amphibians') {
          return [
            `**Mundo Anfibio y Humedad**: Viviendo entre agua dulce y tierra húmeda en ${hab}, ${name} (*${sci}*) depende de microclimas húmedos para respirar a través de su piel permeable.`,
            `**Metamorfosis Acuática y Terrestre**: Desde renacuajo hasta adulto cazador de ${diet}, actúa como un bioindicador ecológico indispensable.`
          ];
        }

        return [
          `**Territorio y Rutina Diaria**: Recorriendo los paisajes de ${hab}, ${name} (*${sci}*) domina su bioma nativo, equilibrando períodos de caza y descanso en refugios protegidos.`,
          `**Estrategia de Supervivencia**: Se alimenta de ${diet}, aprovechando sus sentidos agudos y resistencia ante rivales naturales (${pred}).`
        ];
      }

      // -------------------------------------------------------------
      // DEFAULT ENGLISH (en)
      // -------------------------------------------------------------
      if (cat === 'gemstones') {
        return [
          `**Geological Genesis & Formation**: ${name} is an extraordinary treasure born deep within the Earth over millions to billions of years. Originating from ${hab}, it crystallized under immense heat and crushing pressures in magmatic chambers, hydrothermal mineral veins, or metamorphic rock strata. Atoms of ${sci.split('•')[0] || sci} arranged themselves into a flawless crystalline lattice.`,
          `**Mining Origins & Natural Environment**: Throughout geological history, tectonic uplift brought these ancient mineral deposits closer to the Earth's surface. In its natural environment, ${name} occurs embedded within pegmatites or metamorphic strata, preserving a pristine geological record of our planet's deep interior.`
        ];
      }

      if (cat === 'plants') {
        return [
          `**Natural Habitat & Growing Environment**: ${name} (*${sci}*) thrives naturally across ${hab}. Adapted to its native climate, it flourishes with access to ${diet}, developing an extensive root system to anchor itself firmly into nutrient-rich soil.`,
          `**Lifecycle & Ecological Symphony**: Throughout the growing seasons, ${name} captures sunlight through chlorophyll foliage to fuel vigorous vegetative growth, unfurling vibrant blossoms to engage in a vital dance with pollinators while defending against herbivores (${pred}).`
        ];
      }

      if (cat === 'reptiles') {
        return [
          `**Habitat & Daily Survival**: As an ectothermic master of survival, the ${name} (*${sci}*) thrives across ${hab}. Being cold-blooded, it begins its day by basking atop sun-warmed rocks or branches to elevate its core temperature before foraging.`,
          `**Hunting Strategy & Seasonal Lifecycle**: In its daily routine, it hunts and consumes ${diet}, utilizing sharp stealth, ambush patience, or swift pursuit while remaining vigilant against predators (${pred}).`
        ];
      }

      if (cat === 'birds') {
        return [
          `**Avian Habitat & Territory**: Soaring through the skies and nesting across ${hab}, the ${name} (*${sci}*) is an agile avian inhabitant of forest canopies, open grasslands, or coastal wetlands, utilizing vocal songs to communicate.`,
          `**Daily Routine & Nesting Lifecycle**: Its daily life revolves around foraging for ${diet}, requiring keen vision and aerodynamic mastery, while protecting nests from predators (${pred}).`
        ];
      }

      if (cat === 'marine') {
        return [
          `**Oceanic Realm & Aquatic Depths**: Navigating the world's waters across ${hab}, the ${name} (*${sci}*) is exquisitely adapted for marine life, moving effortlessly through ocean currents.`,
          `**Foraging Dynamics & Pod Lifecycle**: In the open ocean, it sustains itself on ${diet}, employing sophisticated schooling maneuvers or echolocation, playing a pivotal ecological role in marine food webs.`
        ];
      }

      if (cat === 'insects') {
        return [
          `**Micro-Habitat & Daily Life**: Dwelling across ${hab}, the ${name} (*${sci}*) lives an action-packed life on a miniature scale, harvesting ${diet} with pinpoint efficiency.`,
          `**Metamorphosis & Social Dynamics**: Its lifecycle showcases the wonder of metamorphosis, communicating through chemical pheromones while evading predators (${pred}).`
        ];
      }

      if (cat === 'amphibians') {
        return [
          `**Dual-World Habitat**: Living between fresh water and moist terrestrial ground across ${hab}, the ${name} (*${sci}*) depends on humid microclimates to thrive via cutaneous respiration.`,
          `**Lifecycle & Metamorphic Journey**: Its lifecycle begins in ponds, developing into agile insect-hunters feeding on ${diet} while acting as crucial ecological bio-indicators.`
        ];
      }

      // Default Land Animals
      return [
        `**Territory & Daily Routine**: Roaming the diverse landscapes of ${hab}, the ${name} (*${sci}*) is a master of its native biome, balancing periods of active hunting or grazing with quiet rest in shaded retreats.`,
        `**Dietary Strategy & Social Structure**: Daily survival centers on securing ${diet}, requiring acute sensory tracking and endurance while managing threats from natural predators (${pred}).`
      ];
    },

    /**
     * Get 2 detailed paragraphs about superpowers, unique adaptations, and defense mechanisms.
     */
    getSuperpowers(item, lang = null) {
      if (!item) return [];
      const activeLang = this._getActiveLang(lang);
      const cat = item.category;
      const name = this._getName(item);
      const sci = item.scientific || '';
      const fact = item.funFact || '';

      if (activeLang === 'zh') {
        if (cat === 'gemstones') {
          return [
            `**晶體超能與物理硬度**：${name}擁有驚人的礦物學超能！具備高抗磨損性（${sci.includes('Mohs') ? sci.split('•')[1] || sci : '優異摩氏硬度'}），緻密的原子結構賦予其抵禦刮擦與風化的強大能力。`,
            `**光學奇蹟與絢麗折射**：當光線照入晶體時，展現出高度色散折射，將白光化為火彩或呈現二色性與紫外線螢光。${fact}`
          ];
        }
        if (cat === 'plants') {
          return [
            `**植物生化防禦與芳香**：${name}具備植物界的生化超能力，能合成特殊芬多精、植物精油或生物鹼，保護自身不受害蟲侵害，並吸引遠處授粉者。`,
            `**向光性與能量吸收**：葉片具備智慧向光特性，能追隨太陽軌跡最大化光合作用效率。${fact}`
          ];
        }
        return [
          `**巔峰生物超能力**：${name}在演化歷程中掌握了頂級的生物力學優勢，包括爆發性肌肉力量、靈敏聽覺與熱感應感知能力。`,
          `**生存防禦與特化適應**：無論是銳利爪牙、保護色偽裝還是環境適應耐受力，都讓牠在生態系中佔據獨特優勢。${fact}`
        ];
      }

      if (activeLang === 'es') {
        if (cat === 'gemstones') {
          return [
            `**Superpoderes Cristalinos y Dureza**: ${name} posee resistencia física excepcional (${sci.includes('Mohs') ? sci.split('•')[1] || sci : 'Escala de Mohs'}), soportando presiones y desgaste ambiental.`,
            `**Óptica y Refracción Luminosa**: Deslumbra con dispersión refractiva, dividiendo la luz en destellos de fuego espectral y fluorescencia ultravioleta. ${fact}`
          ];
        }
        if (cat === 'plants') {
          return [
            `**Defensa Bioquímica Vegetal**: ${name} produce alcaloides y aceites esenciales que actúan como escudo natural contra plagas mientras atrae polinizadores.`,
            `**Captación Solar y Heliosensibilidad**: Sus hojas se orientan de forma óptima para maximizar la energía fotosintética. ${fact}`
          ];
        }
        return [
          `**Superpoderes Biológicos y Adaptación**: ${name} cuenta con reflejos biomecánicos formidables, sentidos olfativos agudos y camuflaje adaptativo.`,
          `**Armadura y Resistencia**: Diseñado para resistir condiciones climáticas extremas y asegurar su nicho ecológico. ${fact}`
        ];
      }

      // Default English
      if (cat === 'gemstones') {
        return [
          `**Crystalline Superpowers & Physical Resistance**: ${name} possesses extraordinary mineralogical superpowers with a formidable atomic structure (${sci.includes('Mohs') ? sci.split('•')[1] || sci : 'Mohs Hardness rating'}).`,
          `**Optical Phenomena & Luminescent Magic**: Beyond durability, ${name} dazzles with mesmerizing optical powers, splitting white light into vibrant spectral fire. ${fact}`
        ];
      }
      if (cat === 'plants') {
        return [
          `**Botanical Superpowers & Chemical Warfare**: ${name} commands an arsenal of chemical and biological superpowers, producing aromatic essential oils and protective alkaloids.`,
          `**Adaptive Resilience & Solar Harvesting**: Equipped with advanced heliotropism, its foliage turns to track the sun and maximize photosynthesis. ${fact}`
        ];
      }
      return [
        `**Apex Physical Superpowers**: The ${name} is endowed with extraordinary biomechanical powers refined over millions of years of evolution.`,
        `**Tactical Adaptations & Survival Armor**: Whether utilizing razor-sharp claws, dense thermal insulation, or disruptive camouflage, it is perfectly equipped to dominate its ecological niche. ${fact}`
      ];
    },

    /**
     * Get 2 detailed paragraphs about physical characteristics, anatomy, colors, and structure.
     */
    getCharacteristics(item, lang = null) {
      if (!item) return [];
      const activeLang = this._getActiveLang(lang);
      const cat = item.category;
      const name = this._getName(item);
      const sci = item.scientific || '';

      if (activeLang === 'zh') {
        if (cat === 'gemstones') {
          return [
            `**晶體對稱性與幾何構造**：在礦物學分類中，${name}擁有規整的結晶晶系。化學分子式（${sci}）決定了其原子鍵結距離，形成天然平整的晶面與幾何對稱。`,
            `**光澤色彩與寶石美感**：呈現玻璃光澤、金剛光澤或絲絹光澤，微量致色元素賦予其獨特且深邃的色澤表現。`
          ];
        }
        if (cat === 'plants') {
          return [
            `**花卉形態與花瓣構造**：${name}（*${sci}*）的花朵展現精緻的植物形態結構，花瓣層次分明，雄蕊花粉與花蜜器官精準導引傳粉者。`,
            `**枝葉紋理與維管束系統**：具有強韌的纖維素莖幹與清晰葉脈網絡，水分與養分輸送效率極佳。`
          ];
        }
        return [
          `**骨骼架構與肌肉線條**：${name}（*${sci}*）具備極佳的骨骼與肌肉比例，賦予其在自然環境中敏捷的跳躍、奔跑或潛游能力。`,
          `**體表特徵與感官形態**：體表具備保護性毛皮、鱗片或角質層，雙眼與聽覺感官協同運作，精準感知周圍動態。`
        ];
      }

      if (activeLang === 'es') {
        if (cat === 'gemstones') {
          return [
            `**Estructura Geométrica Cristalina**: Gemológicamente, ${name} exhibe simetría cristalina natural gobernada por su composición (${sci}).`,
            `**Brillo, Color y Apariencia**: Presenta lustre vítreo o adamantino con tonalidades cromáticas enriquecidas por oligoelementos naturales.`
          ];
        }
        if (cat === 'plants') {
          return [
            `**Morfología Floral y Pétalos**: La flor de ${name} (*${sci}*) combina pétalos simétricos y estructuras reproductoras diseñadas para la polinización.`,
            `**Follaje y Tallos Vegetativos**: Su estructura de celulosa y venación vascular garantiza un transporte fluido de agua y nutrientes.`
          ];
        }
        return [
          `**Estructura Anatómica y Muscular**: ${name} (*${sci}*) posee una conformación esquelética equilibrada que maximiza su agilidad y potencia física.`,
          `**Pelaje, Escamas y Órganos Sensoriales**: Su dermis protectora y sentidos agudos le permiten orientarse en su bioma natal.`
        ];
      }

      // Default English
      if (cat === 'gemstones') {
        return [
          `**Crystal Lattice & Geometric Architecture**: Gemologically, ${name} exhibits a characteristic crystalline structure belonging to natural crystal systems (${sci}).`,
          `**Luster, Color & Gemological Beauty**: It showcases captivating visual characteristics, reflecting light with an adamantine or vitreous luster.`
        ];
      }
      if (cat === 'plants') {
        return [
          `**Floral Anatomy & Petal Architecture**: The blossom of ${name} (*${sci}*) is an exquisite marvel of botanical architecture with symmetric petals.`,
          `**Foliage, Stems & Growth Morphology**: Structurally, its vegetative body is composed of sturdy cellulose-reinforced stems and vascular venation.`
        ];
      }
      return [
        `**Physical Build & Muscular Architecture**: The ${name} (*${sci}*) possesses a robust skeletal and muscular structure adapted for supreme agility.`,
        `**Coat, Facial Features & Sensory Organs**: Its coat consists of protective layers and markings, complemented by binocular vision.`
      ];
    }
  };

  window.CardKnowledgeEngine = CardKnowledgeEngine;
})(window);
