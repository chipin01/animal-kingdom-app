// ============================================================================
// ANIMAL KINGDOM - QUEST LIBRARY, COIN ECONOMY, CARD SHOP & ARENA GAUNTLET
// 100% Multilingual: English, 繁體中文, Español
// ============================================================================

(function(window) {
  'use strict';

  // --------------------------------------------------------------------------
  // 1. QUEST REGISTRY (20+ Quests Across 4 Difficulty Tiers)
  // --------------------------------------------------------------------------
  const QUEST_DEFINITIONS = [
    // --- NOVICE (50 - 100 Coins) ---
    {
      id: 'quest-novice-1',
      tier: 'novice',
      coins: 60,
      icon: '🦋',
      nameKey: 'q_n1_name',
      descKey: 'q_n1_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_n1_q',
        options: [
          { textKey: 'q_n1_opt1', correct: false },
          { textKey: 'q_n1_opt2', correct: true },
          { textKey: 'q_n1_opt3', correct: false },
          { textKey: 'q_n1_opt4', correct: false }
        ]
      }
    },
    {
      id: 'quest-novice-2',
      tier: 'novice',
      coins: 75,
      icon: '🐸',
      nameKey: 'q_n2_name',
      descKey: 'q_n2_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_n2_q',
        options: [
          { textKey: 'q_n2_opt1', correct: false },
          { textKey: 'q_n2_opt2', correct: false },
          { textKey: 'q_n2_opt3', correct: true },
          { textKey: 'q_n2_opt4', correct: false }
        ]
      }
    },
    {
      id: 'quest-novice-3',
      tier: 'novice',
      coins: 80,
      icon: '🐞',
      nameKey: 'q_n3_name',
      descKey: 'q_n3_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_n3_q',
        options: [
          { textKey: 'q_n3_opt1', correct: true },
          { textKey: 'q_n3_opt2', correct: false },
          { textKey: 'q_n3_opt3', correct: false },
          { textKey: 'q_n3_opt4', correct: false }
        ]
      }
    },
    {
      id: 'quest-novice-4',
      tier: 'novice',
      coins: 90,
      icon: '🦜',
      nameKey: 'q_n4_name',
      descKey: 'q_n4_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_n4_q',
        options: [
          { textKey: 'q_n4_opt1', correct: false },
          { textKey: 'q_n4_opt2', correct: true },
          { textKey: 'q_n4_opt3', correct: false },
          { textKey: 'q_n4_opt4', correct: false }
        ]
      }
    },
    {
      id: 'quest-novice-5',
      tier: 'novice',
      coins: 100,
      icon: '🐌',
      nameKey: 'q_n5_name',
      descKey: 'q_n5_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_n5_q',
        options: [
          { textKey: 'q_n5_opt1', correct: false },
          { textKey: 'q_n5_opt2', correct: false },
          { textKey: 'q_n5_opt3', correct: true },
          { textKey: 'q_n5_opt4', correct: false }
        ]
      }
    },

    // --- ADEPT (150 - 300 Coins) ---
    {
      id: 'quest-adept-1',
      tier: 'adept',
      coins: 180,
      icon: '🐍',
      nameKey: 'q_a1_name',
      descKey: 'q_a1_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_a1_q',
        options: [
          { textKey: 'q_a1_opt1', correct: true },
          { textKey: 'q_a1_opt2', correct: false },
          { textKey: 'q_a1_opt3', correct: false },
          { textKey: 'q_a1_opt4', correct: false }
        ]
      }
    },
    {
      id: 'quest-adept-2',
      tier: 'adept',
      coins: 200,
      icon: '🦈',
      nameKey: 'q_a2_name',
      descKey: 'q_a2_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_a2_q',
        options: [
          { textKey: 'q_a2_opt1', correct: false },
          { textKey: 'q_a2_opt2', correct: true },
          { textKey: 'q_a2_opt3', correct: false },
          { textKey: 'q_a2_opt4', correct: false }
        ]
      }
    },
    {
      id: 'quest-adept-3',
      tier: 'adept',
      coins: 220,
      icon: '🐆',
      nameKey: 'q_a3_name',
      descKey: 'q_a3_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_a3_q',
        options: [
          { textKey: 'q_a3_opt1', correct: false },
          { textKey: 'q_a3_opt2', correct: false },
          { textKey: 'q_a3_opt3', correct: true },
          { textKey: 'q_a3_opt4', correct: false }
        ]
      }
    },
    {
      id: 'quest-adept-4',
      tier: 'adept',
      coins: 250,
      icon: '🦉',
      nameKey: 'q_a4_name',
      descKey: 'q_a4_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_a4_q',
        options: [
          { textKey: 'q_a4_opt1', correct: true },
          { textKey: 'q_a4_opt2', correct: false },
          { textKey: 'q_a4_opt3', correct: false },
          { textKey: 'q_a4_opt4', correct: false }
        ]
      }
    },
    {
      id: 'quest-adept-5',
      tier: 'adept',
      coins: 300,
      icon: '🦡',
      nameKey: 'q_a5_name',
      descKey: 'q_a5_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_a5_q',
        options: [
          { textKey: 'q_a5_opt1', correct: false },
          { textKey: 'q_a5_opt2', correct: true },
          { textKey: 'q_a5_opt3', correct: false },
          { textKey: 'q_a5_opt4', correct: false }
        ]
      }
    },

    // --- MASTER (400 - 600 Coins) ---
    {
      id: 'quest-master-1',
      tier: 'master',
      coins: 420,
      icon: '🐅',
      nameKey: 'q_m1_name',
      descKey: 'q_m1_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_m1_q',
        options: [
          { textKey: 'q_m1_opt1', correct: false },
          { textKey: 'q_m1_opt2', correct: false },
          { textKey: 'q_m1_opt3', correct: true },
          { textKey: 'q_m1_opt4', correct: false }
        ]
      }
    },
    {
      id: 'quest-master-2',
      tier: 'master',
      coins: 480,
      icon: '🦅',
      nameKey: 'q_m2_name',
      descKey: 'q_m2_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_m2_q',
        options: [
          { textKey: 'q_m2_opt1', correct: true },
          { textKey: 'q_m2_opt2', correct: false },
          { textKey: 'q_m2_opt3', correct: false },
          { textKey: 'q_m2_opt4', correct: false }
        ]
      }
    },
    {
      id: 'quest-master-3',
      tier: 'master',
      coins: 520,
      icon: '🐊',
      nameKey: 'q_m3_name',
      descKey: 'q_m3_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_m3_q',
        options: [
          { textKey: 'q_m3_opt1', correct: false },
          { textKey: 'q_m3_opt2', correct: true },
          { textKey: 'q_m3_opt3', correct: false },
          { textKey: 'q_m3_opt4', correct: false }
        ]
      }
    },
    {
      id: 'quest-master-4',
      tier: 'master',
      coins: 600,
      icon: '🐺',
      nameKey: 'q_m4_name',
      descKey: 'q_m4_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_m4_q',
        options: [
          { textKey: 'q_m4_opt1', correct: false },
          { textKey: 'q_m4_opt2', correct: false },
          { textKey: 'q_m4_opt3', correct: true },
          { textKey: 'q_m4_opt4', correct: false }
        ]
      }
    },

    // --- LEGENDARY (800 - 1500 Coins) ---
    {
      id: 'quest-legendary-1',
      tier: 'legendary',
      coins: 850,
      icon: '🦁',
      nameKey: 'q_l1_name',
      descKey: 'q_l1_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_l1_q',
        options: [
          { textKey: 'q_l1_opt1', correct: true },
          { textKey: 'q_l1_opt2', correct: false },
          { textKey: 'q_l1_opt3', correct: false },
          { textKey: 'q_l1_opt4', correct: false }
        ]
      }
    },
    {
      id: 'quest-legendary-2',
      tier: 'legendary',
      coins: 1000,
      icon: '🐻‍❄️',
      nameKey: 'q_l2_name',
      descKey: 'q_l2_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_l2_q',
        options: [
          { textKey: 'q_l2_opt1', correct: false },
          { textKey: 'q_l2_opt2', correct: true },
          { textKey: 'q_l2_opt3', correct: false },
          { textKey: 'q_l2_opt4', correct: false }
        ]
      }
    },
    {
      id: 'quest-legendary-3',
      tier: 'legendary',
      coins: 1200,
      icon: '🦖',
      nameKey: 'q_l3_name',
      descKey: 'q_l3_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_l3_q',
        options: [
          { textKey: 'q_l3_opt1', correct: false },
          { textKey: 'q_l3_opt2', correct: false },
          { textKey: 'q_l3_opt3', correct: true },
          { textKey: 'q_l3_opt4', correct: false }
        ]
      }
    },
    {
      id: 'quest-legendary-4',
      tier: 'legendary',
      coins: 1500,
      icon: '👑',
      nameKey: 'q_l4_name',
      descKey: 'q_l4_desc',
      type: 'quiz_challenge',
      question: {
        promptKey: 'q_l4_q',
        options: [
          { textKey: 'q_l4_opt1', correct: true },
          { textKey: 'q_l4_opt2', correct: false },
          { textKey: 'q_l4_opt3', correct: false },
          { textKey: 'q_l4_opt4', correct: false }
        ]
      }
    }
  ];

  // --------------------------------------------------------------------------
  // 2. COLLECTIBLE CARDS REGISTRY (16 Cards Across 4 Tiers)
  // --------------------------------------------------------------------------
  const COLLECTIBLE_CARDS = [
    // COMMON CARDS (Tier 1: 50 - 90 Coins, Resale 60%)
    {
      id: 'card-monarch-butterfly',
      name: 'Monarch Butterfly',
      name_zh: '帝王斑蝶',
      name_es: 'Mariposa Monarca',
      scientific: 'Danaus plexippus',
      category: 'insects',
      emoji: '🦋',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Monarch_In_May.jpg/440px-Monarch_In_May.jpg',
      rarity: 'common',
      price: 50,
      resalePrice: 30, // 60% resale
      hp: 45,
      maxHp: 45,
      attack: 14,
      defense: 10,
      speed: 40,
      specialMove: 'Nectar Gust',
      specialMove_zh: '花蜜之風',
      specialMove_es: 'Ráfaga de Néctar',
      specialDamage: 22,
      description: 'A delicate, harmless pollinator with gentle flutter attacks. Affordable starter companion!',
      description_zh: '溫柔無害的傳粉精靈，以優雅拍翅進行微風攻擊。最平易近人的新手夥伴！',
      description_es: 'Un polinizador delicado e inofensivo. ¡Compañero inicial muy económico!'
    },
    {
      id: 'card-red-eyed-tree-frog',
      name: 'Red-Eyed Tree Frog',
      name_zh: '紅眼樹蛙',
      name_es: 'Rana Arbórea de Ojos Rojos',
      scientific: 'Agalychnis callidryas',
      category: 'amphibians',
      emoji: '🐸',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Agalychnis_callidryas_wildlife_sanctuary.jpg/440px-Agalychnis_callidryas_wildlife_sanctuary.jpg',
      rarity: 'common',
      price: 65,
      resalePrice: 39,
      hp: 55,
      maxHp: 55,
      attack: 18,
      defense: 15,
      speed: 45,
      specialMove: 'Sticky Tongue Slap',
      specialMove_zh: '黏性長舌鞭擊',
      specialMove_es: 'Latigazo de Lengua Pegajosa',
      specialDamage: 28,
      description: 'Lithe rainforest amphibian with sticky toe pads and a rapid adhesive tongue.',
      description_zh: '靈動的雨林兩棲動物，擁有黏性吸盤腳趾與疾速長舌。',
      description_es: 'Ágil anfibio de la selva con almohadillas adhesivas y lengua veloz.'
    },
    {
      id: 'card-seven-spotted-ladybug',
      name: 'Seven-Spotted Ladybug',
      name_zh: '七星瓢蟲',
      name_es: 'Mariquita de Siete Puntos',
      scientific: 'Coccinella septempunctata',
      category: 'insects',
      emoji: '🐞',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Coccinella_septempunctata_in_West_Drayton.jpg/440px-Coccinella_septempunctata_in_West_Drayton.jpg',
      rarity: 'common',
      price: 75,
      resalePrice: 45,
      hp: 50,
      maxHp: 50,
      attack: 16,
      defense: 25,
      speed: 35,
      specialMove: 'Chitin Shell Guard',
      specialMove_zh: '幾丁外殼防護',
      specialMove_es: 'Escudo de Quitina',
      specialDamage: 24,
      description: 'Armored mini-beetle with bright protective elytra that deflect light attacks.',
      description_zh: '身披硬質甲殼的迷你昆蟲，色彩鮮艷且具備優良減傷防禦。',
      description_es: 'Escarabajo en miniatura con élitros que desvían ataques ligeros.'
    },
    {
      id: 'card-garden-snail',
      name: 'Garden Snail',
      name_zh: '庭園蝸牛',
      name_es: 'Caracol de Jardín',
      scientific: 'Cornu aspersum',
      category: 'insects',
      emoji: '🐌',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Cornu_aspersum_14-06-08.jpg/440px-Cornu_aspersum_14-06-08.jpg',
      rarity: 'common',
      price: 85,
      resalePrice: 51,
      hp: 65,
      maxHp: 65,
      attack: 12,
      defense: 38,
      speed: 10,
      specialMove: 'Slime Barrier',
      specialMove_zh: '黏液壁壘',
      specialMove_es: 'Barrera de Babosa',
      specialDamage: 20,
      description: 'Slow-moving mollusk protected by a sturdy spiral calcium shell.',
      description_zh: '緩步前行的軟體動物，堅實螺旋碳酸鈣外殼提供強大屏障。',
      description_es: 'Molusco lento protegido por una sólida concha espiral de calcio.'
    },

    // UNCOMMON CARDS (Tier 2: 140 - 250 Coins, Resale 60%)
    {
      id: 'card-red-fox',
      name: 'Red Fox',
      name_zh: '赤狐',
      name_es: 'Zorro Rojo',
      scientific: 'Vulpes vulpes',
      category: 'land',
      emoji: '🦊',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Fox_-_British_Wildlife_Centre_%2817429406401%29.jpg/440px-Fox_-_British_Wildlife_Centre_%2817429406401%29.jpg',
      rarity: 'uncommon',
      price: 150,
      resalePrice: 90,
      hp: 90,
      maxHp: 90,
      attack: 42,
      defense: 25,
      speed: 68,
      specialMove: 'Cunning Snow Leap',
      specialMove_zh: '狡黠雪地躍撲',
      specialMove_es: 'Salto Astuto en Nieve',
      specialDamage: 55,
      description: 'Agile woodland trickster with extraordinary hearing to detect prey beneath the ground.',
      description_zh: '敏捷的森林獵手，擁有極其敏銳的聽力與快速突襲步伐。',
      description_es: 'Ágil cazador del bosque con oído extraordinario para emboscadas.'
    },
    {
      id: 'card-barn-owl',
      name: 'Barn Owl',
      name_zh: '倉鴞',
      name_es: 'Lechuza Común',
      scientific: 'Tyto alba',
      category: 'birds',
      emoji: '🦉',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Barn_owl_scotland.jpg/440px-Barn_owl_scotland.jpg',
      rarity: 'uncommon',
      price: 180,
      resalePrice: 108,
      hp: 85,
      maxHp: 85,
      attack: 46,
      defense: 22,
      speed: 72,
      specialMove: 'Silent Wing Ambush',
      specialMove_zh: '靜音羽翼伏擊',
      specialMove_es: 'Emboscada de Vuelo Silencioso',
      specialDamage: 60,
      description: 'Ghostly nocturnal raptor with serrated wing fringes for 100% silent aerodynamic dive attacks.',
      description_zh: '如幽靈般寂靜的夜行猛禽，羽翼邊緣微鋸齒可完全消除飛行噪聲。',
      description_es: 'Rapaz nocturna con plumas especiales para vuelo silencioso y picado letal.'
    },
    {
      id: 'card-diamondback-rattlesnake',
      name: 'Western Rattlesnake',
      name_zh: '西部響尾蛇',
      name_es: 'Cascabel Occidental',
      scientific: 'Crotalus atrox',
      category: 'reptiles',
      emoji: '🐍',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Crotalus_atrox_02.jpg/440px-Crotalus_atrox_02.jpg',
      rarity: 'uncommon',
      price: 210,
      resalePrice: 126,
      hp: 80,
      maxHp: 80,
      attack: 58,
      defense: 20,
      speed: 60,
      specialMove: 'Hemotoxic Fang Strike',
      specialMove_zh: '血毒獠牙突咬',
      specialMove_es: 'Mordedura Hemotóxica',
      specialDamage: 72,
      description: 'Desert pit viper equipped with infrared heat-sensing organs and hollow venom fangs.',
      description_zh: '配備紅外線感熱唇窩與中空毒牙的荒漠頂級伏擊蛇類。',
      description_es: 'Víbora del desierto con sensores infrarrojos y colmillos venenosos.'
    },
    {
      id: 'card-honey-badger',
      name: 'Honey Badger',
      name_zh: '蜜獾 (平頭哥)',
      name_es: 'Tejón Melero',
      scientific: 'Mellivora capensis',
      category: 'land',
      emoji: '🦡',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Honey_badger.jpg/440px-Honey_badger.jpg',
      rarity: 'uncommon',
      price: 250,
      resalePrice: 150,
      hp: 110,
      maxHp: 110,
      attack: 55,
      defense: 45,
      speed: 52,
      specialMove: 'Fearless Berzerk Rage',
      specialMove_zh: '無畏狂暴反撲',
      specialMove_es: 'Furia Imparable',
      specialDamage: 68,
      description: 'Thick rubbery skin impervious to venom, bites, and bee stings. Never backs down.',
      description_zh: '橡膠般厚韌的皮毛免疫毒素與利齒撕咬，自然界中最勇敢無畏的戰士！',
      description_es: 'Piel dura resistente a venenos y mordeduras. Jamás retrocede en batalla.'
    },

    // RARE / EPIC CARDS (Tier 3: 350 - 550 Coins, Resale 60%)
    {
      id: 'card-gray-wolf',
      name: 'Gray Wolf',
      name_zh: '灰狼',
      name_es: 'Lobo Gris',
      scientific: 'Canis lupus',
      category: 'land',
      emoji: '🐺',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Canis_lupus_laying_in_grass.jpg/440px-Canis_lupus_laying_in_grass.jpg',
      rarity: 'rare',
      price: 360,
      resalePrice: 216,
      hp: 135,
      maxHp: 135,
      attack: 74,
      defense: 40,
      speed: 70,
      specialMove: 'Moonlight Pack Howl',
      specialMove_zh: '月夜狼群呼嘯',
      specialMove_es: 'Aullido de Manada',
      specialDamage: 92,
      description: 'Endurance predator with 400 PSI jaw pressure that runs down large ungulates.',
      description_zh: '擁有 400 PSI 咬合力與無窮耐力的荒野群狼，長途追獵頂級霸主。',
      description_es: 'Depredador incansable con mandíbula potente y tácticas de manada.'
    },
    {
      id: 'card-cheetah',
      name: 'African Cheetah',
      name_zh: '非洲獵豹',
      name_es: 'Guepardo Africano',
      scientific: 'Acinonyx jubatus',
      category: 'land',
      emoji: '🐆',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Cheetah_portrait.jpg/440px-Cheetah_portrait.jpg',
      rarity: 'rare',
      price: 420,
      resalePrice: 252,
      hp: 120,
      maxHp: 120,
      attack: 85,
      defense: 30,
      speed: 98,
      specialMove: 'Mach 70 Blitz Sprint',
      specialMove_zh: '時速百公里極速衝刺',
      specialMove_es: 'Sprint Supersónico',
      specialDamage: 105,
      description: 'Fastest land animal on Earth (0 to 60 mph in 3 seconds) with aerodynamic spine.',
      description_zh: '地球陸地奔跑極速霸主（0到100公里僅需3秒），具備極致彈性脊椎。',
      description_es: 'El animal terrestre más rápido del planeta (0 a 100 km/h en 3 seg).'
    },
    {
      id: 'card-bald-eagle',
      name: 'Bald Eagle',
      name_zh: '白頭海鵰',
      name_es: 'Águila Calva',
      scientific: 'Haliaeetus leucocephalus',
      category: 'birds',
      emoji: '🦅',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/About_to_Launch_%2826079720721%29.jpg/440px-About_to_Launch_%2826079720721%29.jpg',
      rarity: 'rare',
      price: 480,
      resalePrice: 288,
      hp: 130,
      maxHp: 130,
      attack: 82,
      defense: 45,
      speed: 85,
      specialMove: 'Talon Dive Crush',
      specialMove_zh: '利爪俯衝重擊',
      specialMove_es: 'Picado Aplastante de Garras',
      specialDamage: 100,
      description: 'Apex avian predator with 400 PSI talons and 4x human visual acuity.',
      description_zh: '頂尖空中猛禽，雙爪握力達 400 PSI，視力為人類的 4 倍以上。',
      description_es: 'Rapaz soberana con garras que ejercen 400 PSI y vista telescópica.'
    },
    {
      id: 'card-bengal-tiger',
      name: 'Bengal Tiger',
      name_zh: '孟加拉虎',
      name_es: 'Tigre de Bengala',
      scientific: 'Panthera tigris tigris',
      category: 'land',
      emoji: '🐅',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tiger_in_Ranthambhore.jpg/440px-Tiger_in_Ranthambhore.jpg',
      rarity: 'rare',
      price: 550,
      resalePrice: 330,
      hp: 165,
      maxHp: 165,
      attack: 96,
      defense: 55,
      speed: 75,
      specialMove: 'Jungle Phantom Pounce',
      specialMove_zh: '叢林幽靈狂撲',
      specialMove_es: 'Zarpazo Fantasma de la Selva',
      specialDamage: 120,
      description: 'Largest big cat in the world! Weighs over 550 lbs with 1,050 PSI bite force.',
      description_zh: '地球上體型最大的貓科猛獸！體重超過 250 公斤，咬合力達 1,050 PSI。',
      description_es: '¡El felino más grande del mundo! Pesa más de 250 kg con mordida demoledora.'
    },

    // LEGENDARY CARDS (Tier 4: 750 - 1300 Coins, Resale 60%)
    {
      id: 'card-african-lion',
      name: 'African Lion',
      name_zh: '非洲雄獅',
      name_es: 'León Africano',
      scientific: 'Panthera leo',
      category: 'land',
      emoji: '🦁',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/440px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg',
      rarity: 'legendary',
      price: 800,
      resalePrice: 480,
      hp: 190,
      maxHp: 190,
      attack: 110,
      defense: 65,
      speed: 78,
      specialMove: 'Thunderous Monarch Roar',
      specialMove_zh: '王者震天怒吼',
      specialMove_es: 'Rugido Atronador de la Sabana',
      specialDamage: 135,
      description: 'The King of Beasts! A thunderous roar heard 5 miles away that paralyzes prey with fear.',
      description_zh: '百獸之王！雄渾咆哮聲震 8 公里，足以使獵物心驚膽顫陷入遲滯。',
      description_es: '¡El Rey de las Bestias! Su rugido se escucha a 8 km y paraliza de terror.'
    },
    {
      id: 'card-great-white-shark',
      name: 'Great White Shark',
      name_zh: '大白鯊',
      name_es: 'Gran Tiburón Blanco',
      scientific: 'Carcharodon carcharias',
      category: 'marine',
      emoji: '🦈',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/440px-White_shark.jpg',
      rarity: 'legendary',
      price: 950,
      resalePrice: 570,
      hp: 220,
      maxHp: 220,
      attack: 125,
      defense: 70,
      speed: 74,
      specialMove: 'Breaching Megajaw Strike',
      specialMove_zh: '深海破浪巨顎撕咬',
      specialMove_es: 'Mordedura Megalodonte',
      specialDamage: 155,
      description: 'Apex marine titan with 300 serrated teeth and electro-reception to detect heartbeats.',
      description_zh: '頂尖海洋泰坦，滿口 300 顆鋸齒利牙與微弱生物電場感應能力。',
      description_es: 'Titán oceánico con 300 dientes serrados y electrorrecepción precisa.'
    },
    {
      id: 'card-polar-bear',
      name: 'Arctic Polar Bear',
      name_zh: '北極熊',
      name_es: 'Oso Polar Ártico',
      scientific: 'Ursus maritimus',
      category: 'land',
      emoji: '🐻‍❄️',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/440px-Polar_Bear_-_Alaska_%28cropped%29.jpg',
      rarity: 'legendary',
      price: 1100,
      resalePrice: 660,
      hp: 240,
      maxHp: 240,
      attack: 130,
      defense: 80,
      speed: 65,
      specialMove: 'Glacial Warhammer Swipe',
      specialMove_zh: '極寒冰原重錘拍擊',
      specialMove_es: 'Zarpazo Glaciar Martillo',
      specialDamage: 165,
      description: 'Massive 1,500 lb arctic giant capable of swimming 60 miles without stopping.',
      description_zh: '重達 700 公斤的極地巨獸，掌擊足以碎裂厚冰，能連續游弋 100 公里。',
      description_es: 'Gigante ártico de 700 kg capaz de nadar 100 km continuos sin descanso.'
    },
    {
      id: 'card-tyrannosaurus-rex',
      name: 'Tyrannosaurus Rex',
      name_zh: '霸王龍 (雷克斯暴龍)',
      name_es: 'Tiranosaurio Rex',
      scientific: 'Tyrannosaurus rex',
      category: 'land',
      emoji: '🦖',
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tyrannosaurus_Rex_Holotype_CM_9380.jpg/440px-Tyrannosaurus_Rex_Holotype_CM_9380.jpg',
      rarity: 'legendary',
      price: 1300,
      resalePrice: 780,
      hp: 275,
      maxHp: 275,
      attack: 155,
      defense: 85,
      speed: 60,
      specialMove: 'Apex Bone-Crushing Jaws',
      specialMove_zh: '頂點粉碎碎骨狂咬',
      specialMove_es: 'Mandíbula Trituradora Apex',
      specialDamage: 195,
      description: 'The prehistoric king of apex predators with a staggering 12,800 PSI crushing bite force!',
      description_zh: '史前頂級掠食者之王！咬合力高達驚人的 12,800 PSI，足以粉碎任何骨骼！',
      description_es: '¡El rey prehistórico! Con una fuerza de mordida demoledora de 12,800 PSI.'
    }
  ];

  // --------------------------------------------------------------------------
  // 3. ARENA 4-STAGE GAUNTLET OPPONENTS
  // --------------------------------------------------------------------------
  const ARENA_STAGES = [
    {
      stageNumber: 1,
      title: 'Stage 1: The Bug Challenger',
      title_zh: '第 1 關：巨蟲試煉',
      title_es: 'Fase 1: El Reto de los Insectos',
      subtitle: 'A fierce armored insect steps into the ring!',
      subtitle_zh: '一隻披堅執銳的巨角昆蟲登上了擂台！',
      subtitle_es: '¡Un feroz insecto acorazado entra a la arena!',
      opponent: {
        name: 'Titan Rhinoceros Beetle',
        name_zh: '泰坦犀角金龜',
        name_es: 'Escarabajo Rinoceronte Titán',
        emoji: '🪲',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Allomyrina_dichotoma_male.JPG/440px-Allomyrina_dichotoma_male.JPG',
        hp: 60,
        maxHp: 60,
        attack: 16,
        defense: 25,
        speed: 30,
        specialMove: 'Horn Toss Slam',
        specialMove_zh: '犀角重拋猛擊',
        specialMove_es: 'Embate de Cuerno Titán',
        specialDamage: 24
      },
      rewardCoins: 50
    },
    {
      stageNumber: 2,
      title: 'Stage 2: Agile Wilderness Stalker',
      title_zh: '第 2 關：荒野敏捷掠食者',
      title_es: 'Fase 2: Acechador Ágil de la Selva',
      subtitle: 'A venomous desert stalker ready to strike!',
      subtitle_zh: '一隻迅捷致命的荒漠毒刺掠食者正伺機而動！',
      subtitle_es: '¡Un depredador venenoso y veloz listo para atacar!',
      opponent: {
        name: 'Deathstalker Scorpion',
        name_zh: '以色列金蠍 (死神蠍)',
        name_es: 'Escorpión Amarillo de la Muerte',
        emoji: '🦂',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Leiurus_quinquestriatus_01.jpg/440px-Leiurus_quinquestriatus_01.jpg',
        hp: 100,
        maxHp: 100,
        attack: 42,
        defense: 35,
        speed: 55,
        specialMove: 'Neurotoxin Tail Pierce',
        specialMove_zh: '神經毒尾貫刺',
        specialMove_es: 'Aguijón Neurotóxico',
        specialDamage: 58
      },
      rewardCoins: 100
    },
    {
      stageNumber: 3,
      title: 'Stage 3: Fierce Apex Beast',
      title_zh: '第 3 關：荒野狂暴巨獸',
      title_es: 'Fase 3: Bestia Apex Feroz',
      subtitle: 'A massive highland predator steps out of the fog!',
      subtitle_zh: '一頭體型龐大、利爪駭人的高山猛獸走出濃霧！',
      subtitle_es: '¡Un colosal depredador sale de la densa niebla!',
      opponent: {
        name: 'Grizzly Kodiak Bear',
        name_zh: '科迪亞克棕熊',
        name_es: 'Oso Pardo Kodiak',
        emoji: '🐻',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/440px-2010-kodiak-bear-1.jpg',
        hp: 165,
        maxHp: 165,
        attack: 82,
        defense: 60,
        speed: 65,
        specialMove: 'Mega-Swipe Earthquake',
        specialMove_zh: '巨掌裂地重拍',
        specialMove_es: 'Zarpazo Terremoto',
        specialDamage: 110
      },
      rewardCoins: 200
    },
    {
      stageNumber: 4,
      title: 'Stage 4: Colossal Mega Titan Boss',
      title_zh: '第 4 關：終極泰坦霸主',
      title_es: 'Fase 4: Jefe Titán Supremo',
      subtitle: 'The ancient apex king has awakened. The ultimate challenge!',
      subtitle_zh: '古老至尊掠食者已甦醒！考驗你王牌生物的終極之戰！',
      subtitle_es: '¡El titán ancestral ha despertado! ¡La batalla definitiva!',
      opponent: {
        name: 'Primeval Saltwater Croc King',
        name_zh: '遠古灣鱷巨皇',
        name_es: 'Rey Cocodrilo Marino Primigenio',
        emoji: '🐊',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Saltwater_Crocodile_at_Australia_Zoo.jpg/440px-Saltwater_Crocodile_at_Australia_Zoo.jpg',
        hp: 240,
        maxHp: 240,
        attack: 120,
        defense: 80,
        speed: 60,
        specialMove: 'Colossal Death Roll Vortex',
        specialMove_zh: '死亡翻滾狂暴漩渦',
        specialMove_es: 'Giro Mortal del Vórtice',
        specialDamage: 160
      },
      rewardCoins: 500
    }
  ];

  // --------------------------------------------------------------------------
  // 4. QUEST & ECONOMY MASTER CONTROLLER
  // --------------------------------------------------------------------------
  class QuestMasterSystem {
    constructor() {
      this.quests = QUEST_DEFINITIONS;
      this.cards = COLLECTIBLE_CARDS;
      this.stages = ARENA_STAGES;

      // Active state
      this.activeQuestTab = 'all'; // 'all', 'novice', 'adept', 'master', 'legendary'
      this.activeShopTab = 'all';  // 'all', 'owned', 'common', 'uncommon', 'rare', 'legendary'
      this.activeCardId = null;    // currently selected battle card

      // Arena State
      this.currentStageIndex = 0;
      this.playerFighter = null;
      this.opponentFighter = null;
      this.playerCurrentHp = 0;
      this.opponentCurrentHp = 0;
      this.isPlayerTurn = true;
      this.battleInProgress = false;
      this.battleLogs = [];

      this.initStorage();
    }

    initStorage() {
      // 1. Coins balance (Default: 150 bonus coins for new players)
      if (localStorage.getItem('ak_coins') === null) {
        localStorage.setItem('ak_coins', '150');
      }

      // 2. Owned cards (Default: starter Monarch Butterfly)
      if (localStorage.getItem('ak_owned_cards') === null) {
        localStorage.setItem('ak_owned_cards', JSON.stringify(['card-monarch-butterfly']));
      }

      // 3. Claimed quest IDs
      if (localStorage.getItem('ak_claimed_quests') === null) {
        localStorage.setItem('ak_claimed_quests', JSON.stringify([]));
      }

      // 4. Default active battle card
      const owned = this.getOwnedCardIds();
      if (owned.length > 0 && !this.activeCardId) {
        this.activeCardId = owned[0];
      }
    }

    // --- COIN METHODS ---
    getCoins() {
      return parseInt(localStorage.getItem('ak_coins') || '0', 10);
    }

    addCoins(amount) {
      const current = this.getCoins();
      const updated = current + amount;
      localStorage.setItem('ak_coins', updated.toString());
      this.updateHeaderCoinDisplay();
      return updated;
    }

    spendCoins(amount) {
      const current = this.getCoins();
      if (current < amount) return false;
      const updated = current - amount;
      localStorage.setItem('ak_coins', updated.toString());
      this.updateHeaderCoinDisplay();
      return true;
    }

    updateHeaderCoinDisplay() {
      const el = document.getElementById('header-coin-counter');
      if (el) {
        el.innerText = this.getCoins();
        el.classList.add('coin-bump');
        setTimeout(() => el.classList.remove('coin-bump'), 400);
      }
    }

    // --- OWNED CARDS METHODS ---
    getOwnedCardIds() {
      try {
        return JSON.parse(localStorage.getItem('ak_owned_cards') || '[]');
      } catch (e) {
        return ['card-monarch-butterfly'];
      }
    }

    isCardOwned(cardId) {
      return this.getOwnedCardIds().includes(cardId);
    }

    buyCard(cardId) {
      const card = this.cards.find(c => c.id === cardId);
      if (!card) return;

      if (this.isCardOwned(cardId)) {
        this.showToast('You already own this card!');
        return;
      }

      if (!this.spendCoins(card.price)) {
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(220);
        this.showToast(this.getI18nText('toast_need_more_coins'));
        return;
      }

      const owned = this.getOwnedCardIds();
      owned.push(cardId);
      localStorage.setItem('ak_owned_cards', JSON.stringify(owned));
      this.activeCardId = cardId;

      if (window.AK_AUDIO && window.AK_AUDIO.playVictory) {
        window.AK_AUDIO.playVictory();
      }

      this.showToast(this.getI18nText('toast_card_bought').replace('{name}', this.getCardName(card)));
      this.renderShop();
      this.renderGauntlet();
    }

    sellCard(cardId) {
      const card = this.cards.find(c => c.id === cardId);
      if (!card) return;

      const owned = this.getOwnedCardIds();
      if (!owned.includes(cardId)) return;

      if (owned.length <= 1) {
        this.showToast(this.getI18nText('toast_cant_sell_last_card'));
        return;
      }

      // Sell card for less money (60%)
      const updated = owned.filter(id => id !== cardId);
      localStorage.setItem('ak_owned_cards', JSON.stringify(updated));
      this.addCoins(card.resalePrice);

      if (this.activeCardId === cardId) {
        this.activeCardId = updated[0];
      }

      if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
        window.AK_AUDIO.playPop(620);
      }

      this.showToast(this.getI18nText('toast_card_sold').replace('{name}', this.getCardName(card)).replace('{coins}', card.resalePrice));
      this.renderShop();
      this.renderGauntlet();
    }

    setActiveCard(cardId) {
      if (this.isCardOwned(cardId)) {
        this.activeCardId = cardId;
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(520);
        this.showToast(this.getI18nText('toast_card_selected'));
        this.renderShop();
        this.renderGauntlet();
      }
    }

    // --- QUEST METHODS ---
    getClaimedQuestIds() {
      try {
        return JSON.parse(localStorage.getItem('ak_claimed_quests') || '[]');
      } catch (e) {
        return [];
      }
    }

    isQuestClaimed(questId) {
      return this.getClaimedQuestIds().includes(questId);
    }

    answerQuest(questId, isCorrect) {
      const q = this.quests.find(item => item.id === questId);
      if (!q) return;

      if (isCorrect) {
        if (!this.isQuestClaimed(questId)) {
          const claimed = this.getClaimedQuestIds();
          claimed.push(questId);
          localStorage.setItem('ak_claimed_quests', JSON.stringify(claimed));
          this.addCoins(q.coins);

          if (window.AK_AUDIO && window.AK_AUDIO.playVictory) {
            window.AK_AUDIO.playVictory();
          }
          if (window.AK_GAME && window.AK_GAME.triggerConfetti) {
            window.AK_GAME.triggerConfetti();
          }

          this.showToast(this.getI18nText('toast_quest_success').replace('{coins}', q.coins));
          this.renderQuestLibrary();
        }
      } else {
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(240);
        this.showToast(this.getI18nText('toast_quest_wrong'));
      }
    }

    // ------------------------------------------------------------------------
    // 5. MODAL OPENERS & CLOSERS
    // ------------------------------------------------------------------------
    openQuestModal() {
      const modal = document.getElementById('quest-modal');
      if (!modal) return;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      this.updateHeaderCoinDisplay();
      this.renderQuestLibrary();
    }

    closeQuestModal() {
      const modal = document.getElementById('quest-modal');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    openShopModal() {
      const modal = document.getElementById('card-shop-modal');
      if (!modal) return;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      this.updateHeaderCoinDisplay();
      this.renderShop();
    }

    closeShopModal() {
      const modal = document.getElementById('card-shop-modal');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    openGauntletModal() {
      const modal = document.getElementById('gauntlet-modal');
      if (!modal) return;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      this.updateHeaderCoinDisplay();
      if (!this.battleInProgress) {
        this.initStage(this.currentStageIndex);
      }
      this.renderGauntlet();
    }

    closeGauntletModal() {
      const modal = document.getElementById('gauntlet-modal');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    // ------------------------------------------------------------------------
    // 6. ARENA GAUNTLET COMBAT ENGINE (4 Stages: Bug -> Predator -> Apex -> Boss)
    // ------------------------------------------------------------------------
    initStage(stageIdx) {
      this.currentStageIndex = Math.max(0, Math.min(stageIdx, this.stages.length - 1));
      const stage = this.stages[this.currentStageIndex];

      const owned = this.getOwnedCardIds();
      if (!this.activeCardId || !owned.includes(this.activeCardId)) {
        this.activeCardId = owned[0] || 'card-monarch-butterfly';
      }

      const card = this.cards.find(c => c.id === this.activeCardId) || this.cards[0];
      this.playerFighter = { ...card };
      this.opponentFighter = { ...stage.opponent };

      this.playerCurrentHp = this.playerFighter.hp;
      this.opponentCurrentHp = this.opponentFighter.hp;
      this.isPlayerTurn = true;
      this.battleInProgress = true;
      this.battleLogs = [
        `⚔️ ${this.getI18nText('arena_battle_start')}: ${this.getCardName(this.playerFighter)} VS ${this.getOpponentName(this.opponentFighter)}!`
      ];
    }

    playerAttack(type) {
      if (!this.battleInProgress || !this.isPlayerTurn) return;

      const p = this.playerFighter;
      const o = this.opponentFighter;
      let dmg = 0;
      let logText = '';

      if (type === 'special') {
        dmg = Math.round(p.specialDamage * (0.85 + Math.random() * 0.3));
        logText = `💥 ${this.getCardName(p)} casts [${this.getSpecialMove(p)}] dealing ${dmg} damage!`;
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(750);
      } else if (type === 'guard') {
        p.isGuarding = true;
        logText = `🛡️ ${this.getCardName(p)} takes a defensive stance to block incoming blows!`;
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(480);
      } else {
        // Normal attack
        dmg = Math.round(p.attack * (0.8 + Math.random() * 0.4));
        logText = `⚔️ ${this.getCardName(p)} strikes ${this.getOpponentName(o)} for ${dmg} damage.`;
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(520);
      }

      if (dmg > 0) {
        this.opponentCurrentHp = Math.max(0, this.opponentCurrentHp - dmg);
      }
      this.battleLogs.unshift(logText);

      // Check opponent defeat
      if (this.opponentCurrentHp <= 0) {
        this.handleStageVictory();
        return;
      }

      // Opponent Turn
      this.isPlayerTurn = false;
      this.renderGauntlet();

      setTimeout(() => {
        this.opponentTurn();
      }, 700);
    }

    opponentTurn() {
      if (!this.battleInProgress) return;
      const p = this.playerFighter;
      const o = this.opponentFighter;

      // Opponent AI: 35% chance for special attack
      const useSpecial = Math.random() < 0.35;
      let dmg = useSpecial ? o.specialDamage : o.attack;
      dmg = Math.round(dmg * (0.8 + Math.random() * 0.35));

      // Check player guard
      if (p.isGuarding) {
        dmg = Math.round(dmg * 0.4);
        p.isGuarding = false;
      }

      this.playerCurrentHp = Math.max(0, this.playerCurrentHp - dmg);

      const moveName = useSpecial ? o.specialMove : 'Claw & Mandible Strike';
      this.battleLogs.unshift(`🩸 ${this.getOpponentName(o)} uses [${moveName}] hitting for ${dmg} damage!`);

      if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
        window.AK_AUDIO.playPop(310);
      }

      // Check player defeat
      if (this.playerCurrentHp <= 0) {
        this.handlePlayerDefeat();
        return;
      }

      this.isPlayerTurn = true;
      this.renderGauntlet();
    }

    handleStageVictory() {
      const stage = this.stages[this.currentStageIndex];
      this.battleInProgress = false;
      this.addCoins(stage.rewardCoins);

      if (window.AK_AUDIO && window.AK_AUDIO.playVictory) {
        window.AK_AUDIO.playVictory();
      }

      if (this.currentStageIndex === this.stages.length - 1) {
        // Complete Gauntlet Cleared!
        if (window.AK_GAME && window.AK_GAME.triggerConfetti) {
          window.AK_GAME.triggerConfetti();
        }
        this.battleLogs.unshift(`🏆 ${this.getI18nText('arena_gauntlet_cleared')}! +${stage.rewardCoins} 🪙`);
      } else {
        this.battleLogs.unshift(`🎉 ${this.getI18nText('arena_stage_cleared')}! +${stage.rewardCoins} 🪙`);
      }

      this.renderGauntlet();
    }

    handlePlayerDefeat() {
      this.battleInProgress = false;
      if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
        window.AK_AUDIO.playPop(200);
      }
      this.battleLogs.unshift(`💀 ${this.getI18nText('arena_defeat_msg')}`);
      this.renderGauntlet();
    }

    advanceToNextStage() {
      if (this.currentStageIndex < this.stages.length - 1) {
        this.initStage(this.currentStageIndex + 1);
        this.renderGauntlet();
      }
    }

    retryStage() {
      this.initStage(this.currentStageIndex);
      this.renderGauntlet();
    }

    resetToStage1() {
      this.initStage(0);
      this.renderGauntlet();
    }

    // ------------------------------------------------------------------------
    // 7. MULTILINGUAL RENDERING HELPERS
    // ------------------------------------------------------------------------
    getLanguage() {
      return (window.AK_I18N && window.AK_I18N.getLanguage) ? window.AK_I18N.getLanguage() : 'en';
    }

    getCardName(card) {
      const lang = this.getLanguage();
      if (lang === 'zh' && card.name_zh) return card.name_zh;
      if (lang === 'es' && card.name_es) return card.name_es;
      return card.name;
    }

    getCardDesc(card) {
      const lang = this.getLanguage();
      if (lang === 'zh' && card.description_zh) return card.description_zh;
      if (lang === 'es' && card.description_es) return card.description_es;
      return card.description;
    }

    getSpecialMove(card) {
      const lang = this.getLanguage();
      if (lang === 'zh' && card.specialMove_zh) return card.specialMove_zh;
      if (lang === 'es' && card.specialMove_es) return card.specialMove_es;
      return card.specialMove;
    }

    getOpponentName(opp) {
      const lang = this.getLanguage();
      if (lang === 'zh' && opp.name_zh) return opp.name_zh;
      if (lang === 'es' && opp.name_es) return opp.name_es;
      return opp.name;
    }

    getStageTitle(stage) {
      const lang = this.getLanguage();
      if (lang === 'zh' && stage.title_zh) return stage.title_zh;
      if (lang === 'es' && stage.title_es) return stage.title_es;
      return stage.title;
    }

    getStageSubtitle(stage) {
      const lang = this.getLanguage();
      if (lang === 'zh' && stage.subtitle_zh) return stage.subtitle_zh;
      if (lang === 'es' && stage.subtitle_es) return stage.subtitle_es;
      return stage.subtitle;
    }

    getI18nText(key) {
      const lang = this.getLanguage();
      const DICT = {
        en: {
          quest_lib_title: '📜 Animal Quest Library',
          quest_lib_sub: 'Complete real-world wildlife quests, earn coins, and unlock stronger battle cards!',
          card_shop_title: '🃏 Wildlife Card Shop & Collectors Deck',
          card_shop_sub: 'Buy new creature cards or sell back unwanted cards for coins! Put your cards in the Arena!',
          arena_title: '⚔️ 4-Stage Arena Gauntlet',
          arena_sub: 'Start by battling a bug in Stage 1! Win to advance against increasingly powerful predators!',
          coins_label: 'Coins',
          tab_all: 'All Quests',
          tab_novice: 'Novice (50-100🪙)',
          tab_adept: 'Adept (150-300🪙)',
          tab_master: 'Master (400-600🪙)',
          tab_legendary: 'Legendary (800-1500🪙)',
          btn_claim_reward: 'Claim {coins} 🪙',
          quest_claimed: '✓ Completed & Claimed',
          btn_buy_card: 'Buy for {coins} 🪙',
          btn_sell_card: 'Sell for {coins} 🪙',
          btn_selected: '✓ Active Battle Card',
          btn_select_card: 'Select for Arena ⚔️',
          owned_badge: 'OWNED',
          stat_hp: 'HP',
          stat_atk: 'ATK',
          stat_def: 'DEF',
          stat_spd: 'SPD',
          resale_note: 'Note: Cards sell back for 60% of original price',
          arena_battle_start: 'Battle Commenced',
          arena_btn_attack: '⚔️ Normal Attack',
          arena_btn_special: '⚡ Special Move',
          arena_btn_guard: '🛡️ Guard & Evade',
          arena_stage_cleared: 'Stage Victory! Opponent defeated',
          arena_gauntlet_cleared: '👑 GAUNTLET CHAMPION! All 4 Stages Cleared',
          arena_defeat_msg: 'Defeated! Train your cards in the Card Shop & Quests!',
          arena_btn_next: 'Advance to Next Stage ➡️',
          arena_btn_retry: 'Retry Stage 🔄',
          arena_btn_restart: 'Restart Gauntlet from Stage 1 🔀',
          toast_need_more_coins: '❌ Not enough coins! Complete more quests to earn coins.',
          toast_card_bought: '🎉 Purchased {name}! Ready for the Arena!',
          toast_card_sold: '🪙 Sold {name} for {coins} coins.',
          toast_cant_sell_last_card: '⚠️ You must keep at least 1 animal card for the Arena!',
          toast_card_selected: '✓ Active Arena Fighter updated!',
          toast_quest_success: '🎉 Quest completed! You earned +{coins} coins!',
          toast_quest_wrong: '❌ Incorrect answer. Try again!'
        },
        zh: {
          quest_lib_title: '📜 野生動物任務圖書館',
          quest_lib_sub: '完成豐富的自然知識任務，賺取金幣，在卡片商店購買更強大的戰鬥卡！',
          card_shop_title: '🃏 生物卡片商店與收藏牌組',
          card_shop_sub: '用金幣購買強大動物卡，或將已有卡片折價售出！帶領你的卡片進入 4 關競技場！',
          arena_title: '⚔️ 4 關漸進式競技場挑戰',
          arena_sub: '第 1 關先與巨蟲戰鬥！獲勝後將晉級挑戰更加兇猛的頂級掠食者！',
          coins_label: '金幣',
          tab_all: '全部任務',
          tab_novice: '初階 (50-100🪙)',
          tab_adept: '進階 (150-300🪙)',
          tab_master: '大師 (400-600🪙)',
          tab_legendary: '傳奇 (800-1500🪙)',
          btn_claim_reward: '領取 {coins} 🪙',
          quest_claimed: '✓ 已完成並領取',
          btn_buy_card: '以 {coins} 🪙 購買',
          btn_sell_card: '以 {coins} 🪙 售出',
          btn_selected: '✓ 當前出戰卡片',
          btn_select_card: '選為出戰卡 ⚔️',
          owned_badge: '已擁有',
          stat_hp: '生命 (HP)',
          stat_atk: '攻擊 (ATK)',
          stat_def: '防禦 (DEF)',
          stat_spd: '速度 (SPD)',
          resale_note: '說明：卡片出售價格為原購買價的 60%',
          arena_battle_start: '決鬥開始',
          arena_btn_attack: '⚔️ 普通攻擊',
          arena_btn_special: '⚡ 絕招大招',
          arena_btn_guard: '🛡️ 防禦閃避',
          arena_stage_cleared: '過關大捷！成功擊敗對手',
          arena_gauntlet_cleared: '👑 擂台大滿貫冠軍！4 大關卡全破',
          arena_defeat_msg: '戰鬥失利！至卡片商店強化陣容或完成任務賺金幣！',
          arena_btn_next: '晉級下一關 ➡️',
          arena_btn_retry: '重新挑戰本關 🔄',
          arena_btn_restart: '重返第 1 關開始挑戰 🔀',
          toast_need_more_coins: '❌ 金幣不足！請先完成任務領取金幣。',
          toast_card_bought: '🎉 成功購入 {name}！已加入你的牌組！',
          toast_card_sold: '🪙 已售出 {name}，獲得 {coins} 金幣。',
          toast_cant_sell_last_card: '⚠️ 你必須保留至少 1 張卡片參加競技場！',
          toast_card_selected: '✓ 已更換出戰動物卡片！',
          toast_quest_success: '🎉 任務達成！獲得 +{coins} 金幣！',
          toast_quest_wrong: '❌ 答案不正確，請再試一次！'
        },
        es: {
          quest_lib_title: '📜 Biblioteca de Misiones Animales',
          quest_lib_sub: '¡Completa misiones, gana monedas y compra cartas más fuertes para la arena!',
          card_shop_title: '🃏 Tienda de Cartas y Baraja de Colección',
          card_shop_sub: '¡Compra cartas de animales o vende las que no uses por menos dinero! ¡Llévalas a la Arena!',
          arena_title: '⚔️ Desafío de Arena de 4 Fases',
          arena_sub: '¡Lucha primero contra un bicho en la Fase 1 y avanza contra bestias cada vez más fuertes!',
          coins_label: 'Monedas',
          tab_all: 'Todas',
          tab_novice: 'Novato (50-100🪙)',
          tab_adept: 'Adepto (150-300🪙)',
          tab_master: 'Maestro (400-600🪙)',
          tab_legendary: 'Legendario (800-1500🪙)',
          btn_claim_reward: 'Reclamar {coins} 🪙',
          quest_claimed: '✓ Completado',
          btn_buy_card: 'Comprar por {coins} 🪙',
          btn_sell_card: 'Vender por {coins} 🪙',
          btn_selected: '✓ Carta Activa',
          btn_select_card: 'Elegir para Arena ⚔️',
          owned_badge: 'EN PROPIEDAD',
          stat_hp: 'HP',
          stat_atk: 'ATQ',
          stat_def: 'DEF',
          stat_spd: 'VEL',
          resale_note: 'Nota: Las cartas se venden por el 60% de su precio original',
          arena_battle_start: 'Batalla Iniciada',
          arena_btn_attack: '⚔️ Ataque Normal',
          arena_btn_special: '⚡ Movimiento Especial',
          arena_btn_guard: '🛡️ Bloquear / Esquivar',
          arena_stage_cleared: '¡Victoria de Fase! Rival derrotado',
          arena_gauntlet_cleared: '👑 ¡CAMPEÓN SUPREMO! 4 Fases Superadas',
          arena_defeat_msg: '¡Derrotado! ¡Consigue cartas mejores en la Tienda!',
          arena_btn_next: 'Avanzar a Siguiente Fase ➡️',
          arena_btn_retry: 'Reintentar Fase 🔄',
          arena_btn_restart: 'Reiniciar desde Fase 1 🔀',
          toast_need_more_coins: '❌ ¡No tienes suficientes monedas! Completa misiones.',
          toast_card_bought: '🎉 ¡Compraste {name}! ¡Listo para la Arena!',
          toast_card_sold: '🪙 Vendiste {name} por {coins} monedas.',
          toast_cant_sell_last_card: '⚠️ ¡Debes conservar al menos 1 carta para la Arena!',
          toast_card_selected: '✓ ¡Luchador activo seleccionado!',
          toast_quest_success: '🎉 ¡Misión completada! +{coins} monedas recibidas.',
          toast_quest_wrong: '❌ Respuesta incorrecta. ¡Inténtalo de nuevo!'
        }
      };

      const langDict = DICT[lang] || DICT.en;
      return langDict[key] || DICT.en[key] || key;
    }

    showToast(msg) {
      if (window.app && window.app.showToast) {
        window.app.showToast(msg);
      }
    }

    // ------------------------------------------------------------------------
    // 8. RENDER QUEST LIBRARY
    // ------------------------------------------------------------------------
    renderQuestLibrary() {
      const container = document.getElementById('quest-modal-content');
      if (!container) return;

      const filteredQuests = this.activeQuestTab === 'all'
        ? this.quests
        : this.quests.filter(q => q.tier === this.activeQuestTab);

      const claimedIds = this.getClaimedQuestIds();

      container.innerHTML = `
        <div class="game-modal-container">
          <button class="game-modal-close" onclick="window.AK_QUESTS.closeQuestModal()">✕</button>

          <div class="game-modal-header">
            <div class="game-wallet-pill">
              🪙 <span>${this.getCoins()}</span> ${this.getI18nText('coins_label')}
            </div>
            <h2 class="game-modal-title">${this.getI18nText('quest_lib_title')}</h2>
            <p class="game-modal-sub">${this.getI18nText('quest_lib_sub')}</p>
          </div>

          <!-- Quick Navigation Tabs -->
          <div class="game-tabs-row">
            <button class="game-tab-btn ${this.activeQuestTab === 'all' ? 'active' : ''}" onclick="window.AK_QUESTS.setQuestTab('all')">${this.getI18nText('tab_all')}</button>
            <button class="game-tab-btn ${this.activeQuestTab === 'novice' ? 'active' : ''}" onclick="window.AK_QUESTS.setQuestTab('novice')">${this.getI18nText('tab_novice')}</button>
            <button class="game-tab-btn ${this.activeQuestTab === 'adept' ? 'active' : ''}" onclick="window.AK_QUESTS.setQuestTab('adept')">${this.getI18nText('tab_adept')}</button>
            <button class="game-tab-btn ${this.activeQuestTab === 'master' ? 'active' : ''}" onclick="window.AK_QUESTS.setQuestTab('master')">${this.getI18nText('tab_master')}</button>
            <button class="game-tab-btn ${this.activeQuestTab === 'legendary' ? 'active' : ''}" onclick="window.AK_QUESTS.setQuestTab('legendary')">${this.getI18nText('tab_legendary')}</button>
          </div>

          <!-- Quests Grid -->
          <div class="quests-grid">
            ${filteredQuests.map(q => {
              const isClaimed = claimedIds.includes(q.id);
              const name = window.AK_I18N ? window.AK_I18N.t(q.nameKey) : q.nameKey;
              const desc = window.AK_I18N ? window.AK_I18N.t(q.descKey) : q.descKey;
              const prompt = window.AK_I18N ? window.AK_I18N.t(q.question.promptKey) : q.question.promptKey;

              return `
                <div class="quest-card quest-tier-${q.tier} ${isClaimed ? 'quest-claimed-card' : ''}">
                  <div class="quest-card-top">
                    <div class="quest-icon-badge">${q.icon}</div>
                    <div class="quest-header-meta">
                      <div class="quest-tier-pill tier-${q.tier}">${q.tier.toUpperCase()}</div>
                      <h3 class="quest-card-title">${name}</h3>
                    </div>
                    <div class="quest-coin-badge">🪙 +${q.coins}</div>
                  </div>

                  <p class="quest-desc">${desc}</p>

                  <div class="quest-interactive-box">
                    <p class="quest-q-prompt"><strong>❓ ${prompt}</strong></p>
                    <div class="quest-options-row">
                      ${q.question.options.map(opt => {
                        const optText = window.AK_I18N ? window.AK_I18N.t(opt.textKey) : opt.textKey;
                        return `
                          <button class="btn-quest-opt ${isClaimed && opt.correct ? 'opt-correct' : ''}" 
                            onclick="window.AK_QUESTS.answerQuest('${q.id}', ${opt.correct})"
                            ${isClaimed ? 'disabled' : ''}>
                            ${optText}
                          </button>
                        `;
                      }).join('')}
                    </div>
                  </div>

                  <div class="quest-card-footer">
                    ${isClaimed ? `
                      <span class="quest-claimed-tag">${this.getI18nText('quest_claimed')}</span>
                    ` : `
                      <span class="quest-status-pending">⚡ Complete Challenge to Claim 🪙 +${q.coins}</span>
                    `}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    setQuestTab(tab) {
      this.activeQuestTab = tab;
      if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(480);
      this.renderQuestLibrary();
    }

    // ------------------------------------------------------------------------
    // 9. RENDER CARD SHOP & COLLECTORS DECK (Buy / Sell)
    // ------------------------------------------------------------------------
    renderShop() {
      const container = document.getElementById('card-shop-modal-content');
      if (!container) return;

      const ownedIds = this.getOwnedCardIds();
      let filtered = this.cards;
      if (this.activeShopTab === 'owned') {
        filtered = this.cards.filter(c => ownedIds.includes(c.id));
      } else if (this.activeShopTab !== 'all') {
        filtered = this.cards.filter(c => c.rarity === this.activeShopTab);
      }

      container.innerHTML = `
        <div class="game-modal-container">
          <button class="game-modal-close" onclick="window.AK_QUESTS.closeShopModal()">✕</button>

          <div class="game-modal-header">
            <div class="game-wallet-pill">
              🪙 <span>${this.getCoins()}</span> ${this.getI18nText('coins_label')}
            </div>
            <h2 class="game-modal-title">${this.getI18nText('card_shop_title')}</h2>
            <p class="game-modal-sub">${this.getI18nText('card_shop_sub')}</p>
            <p class="shop-resale-hint">💡 ${this.getI18nText('resale_note')}</p>
          </div>

          <!-- Filter Tabs -->
          <div class="game-tabs-row">
            <button class="game-tab-btn ${this.activeShopTab === 'all' ? 'active' : ''}" onclick="window.AK_QUESTS.setShopTab('all')">All Cards</button>
            <button class="game-tab-btn ${this.activeShopTab === 'owned' ? 'active' : ''}" onclick="window.AK_QUESTS.setShopTab('owned')">My Collection (${ownedIds.length})</button>
            <button class="game-tab-btn ${this.activeShopTab === 'common' ? 'active' : ''}" onclick="window.AK_QUESTS.setShopTab('common')">Common (Tier 1)</button>
            <button class="game-tab-btn ${this.activeShopTab === 'uncommon' ? 'active' : ''}" onclick="window.AK_QUESTS.setShopTab('uncommon')">Uncommon (Tier 2)</button>
            <button class="game-tab-btn ${this.activeShopTab === 'rare' ? 'active' : ''}" onclick="window.AK_QUESTS.setShopTab('rare')">Rare (Tier 3)</button>
            <button class="game-tab-btn ${this.activeShopTab === 'legendary' ? 'active' : ''}" onclick="window.AK_QUESTS.setShopTab('legendary')">Legendary (Tier 4)</button>
          </div>

          <!-- Cards Grid -->
          <div class="cards-shop-grid">
            ${filtered.map(card => {
              const isOwned = ownedIds.includes(card.id);
              const isActive = this.activeCardId === card.id;
              const name = this.getCardName(card);
              const desc = this.getCardDesc(card);
              const special = this.getSpecialMove(card);

              return `
                <div class="collector-card rarity-${card.rarity} ${isOwned ? 'card-is-owned' : ''} ${isActive ? 'card-is-active' : ''}">
                  <div class="card-thumb-wrap">
                    <img src="${card.image}" alt="${name}" class="card-shop-img" onerror="this.style.display='none'">
                    <span class="card-rarity-badge badge-${card.rarity}">${card.rarity.toUpperCase()}</span>
                    ${isOwned ? `<span class="card-owned-banner">${this.getI18nText('owned_badge')}</span>` : ''}
                  </div>

                  <div class="card-shop-body">
                    <div class="card-title-row">
                      <h3 class="card-name">${card.emoji} ${name}</h3>
                      <span class="card-sci"><em>${card.scientific}</em></span>
                    </div>

                    <!-- RPG Stats -->
                    <div class="card-rpg-stats">
                      <div class="rpg-stat"><span class="stat-lbl">${this.getI18nText('stat_hp')}</span> <strong>${card.hp}</strong></div>
                      <div class="rpg-stat"><span class="stat-lbl">${this.getI18nText('stat_atk')}</span> <strong>${card.attack}</strong></div>
                      <div class="rpg-stat"><span class="stat-lbl">${this.getI18nText('stat_def')}</span> <strong>${card.defense}</strong></div>
                      <div class="rpg-stat"><span class="stat-lbl">${this.getI18nText('stat_spd')}</span> <strong>${card.speed}</strong></div>
                    </div>

                    <div class="card-special-ability">
                      ⚡ <strong>Special:</strong> <span>${special}</span> (${card.specialDamage} DMG)
                    </div>

                    <p class="card-shop-desc">${desc}</p>
                  </div>

                  <!-- Actions: Buy or Sell or Select -->
                  <div class="card-actions-box">
                    ${!isOwned ? `
                      <button class="btn-buy-card" onclick="window.AK_QUESTS.buyCard('${card.id}')">
                        ${this.getI18nText('btn_buy_card').replace('{coins}', card.price)}
                      </button>
                    ` : `
                      <div class="owned-actions-dual">
                        <button class="btn-select-card ${isActive ? 'active-fighter' : ''}" onclick="window.AK_QUESTS.setActiveCard('${card.id}')">
                          ${isActive ? this.getI18nText('btn_selected') : this.getI18nText('btn_select_card')}
                        </button>
                        <button class="btn-sell-card" onclick="window.AK_QUESTS.sellCard('${card.id}')" title="Sell for less money (${card.resalePrice} coins)">
                          ${this.getI18nText('btn_sell_card').replace('{coins}', card.resalePrice)}
                        </button>
                      </div>
                    `}
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    setShopTab(tab) {
      this.activeShopTab = tab;
      if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(480);
      this.renderShop();
    }

    // ------------------------------------------------------------------------
    // 10. RENDER 4-STAGE ARENA GAUNTLET
    // ------------------------------------------------------------------------
    renderGauntlet() {
      const container = document.getElementById('gauntlet-modal-content');
      if (!container) return;

      const stage = this.stages[this.currentStageIndex];
      const p = this.playerFighter || this.cards[0];
      const o = this.opponentFighter || stage.opponent;

      const pName = this.getCardName(p);
      const oName = this.getOpponentName(o);
      const pSpecial = this.getSpecialMove(p);

      const pHpPct = Math.max(0, Math.min(100, Math.round((this.playerCurrentHp / p.hp) * 100)));
      const oHpPct = Math.max(0, Math.min(100, Math.round((this.opponentCurrentHp / o.hp) * 100)));

      const isStageVictory = this.opponentCurrentHp <= 0;
      const isPlayerDefeat = this.playerCurrentHp <= 0;
      const isGauntletDone = isStageVictory && this.currentStageIndex === this.stages.length - 1;

      container.innerHTML = `
        <div class="game-modal-container gauntlet-arena-container">
          <button class="game-modal-close" onclick="window.AK_QUESTS.closeGauntletModal()">✕</button>

          <!-- Arena Stage Header -->
          <div class="arena-header-bar">
            <div class="stage-stepper">
              ${this.stages.map((st, i) => `
                <div class="step-dot ${i < this.currentStageIndex ? 'cleared' : (i === this.currentStageIndex ? 'active' : '')}">
                  <span>${st.stageNumber}</span>
                </div>
              `).join('')}
            </div>
            <h2 class="arena-stage-title">${this.getStageTitle(stage)}</h2>
            <p class="arena-stage-sub">${this.getStageSubtitle(stage)}</p>
            <div class="stage-reward-tag">🏆 Stage Victory Reward: 🪙 +${stage.rewardCoins}</div>
          </div>

          <!-- Versus Battle Arena Ring -->
          <div class="arena-battle-ring">
            
            <!-- PLAYER FIGHTER -->
            <div class="fighter-panel fighter-player ${this.playerCurrentHp <= 0 ? 'fighter-defeated' : ''}">
              <div class="fighter-tag">YOUR FIGHTER</div>
              <img src="${p.image}" alt="${pName}" class="fighter-avatar" onerror="this.style.display='none'">
              <h3 class="fighter-name">${p.emoji} ${pName}</h3>
              
              <div class="fighter-hp-wrap">
                <div class="hp-num">${this.playerCurrentHp} / ${p.hp} HP</div>
                <div class="hp-bar-bg">
                  <div class="hp-bar-fill player-hp" style="width: ${pHpPct}%"></div>
                </div>
              </div>

              <div class="fighter-quick-stats">
                <span>⚔️ ATK: ${p.attack}</span> • <span>🛡️ DEF: ${p.defense}</span> • <span>💨 SPD: ${p.speed}</span>
              </div>
            </div>

            <!-- VS Badge -->
            <div class="arena-vs-col">
              <div class="vs-burst-badge">VS</div>
            </div>

            <!-- OPPONENT FIGHTER -->
            <div class="fighter-panel fighter-opponent ${this.opponentCurrentHp <= 0 ? 'fighter-defeated' : ''}">
              <div class="fighter-tag stage-tag">STAGE ${stage.stageNumber} BOSS</div>
              <img src="${o.image}" alt="${oName}" class="fighter-avatar" onerror="this.style.display='none'">
              <h3 class="fighter-name">${o.emoji} ${oName}</h3>
              
              <div class="fighter-hp-wrap">
                <div class="hp-num">${this.opponentCurrentHp} / ${o.hp} HP</div>
                <div class="hp-bar-bg">
                  <div class="hp-bar-fill opponent-hp" style="width: ${oHpPct}%"></div>
                </div>
              </div>

              <div class="fighter-quick-stats">
                <span>⚔️ ATK: ${o.attack}</span> • <span>🛡️ DEF: ${o.defense}</span>
              </div>
            </div>
          </div>

          <!-- Combat Action Console -->
          <div class="arena-action-console">
            ${this.battleInProgress ? `
              <div class="turn-indicator ${this.isPlayerTurn ? 'turn-player' : 'turn-enemy'}">
                ${this.isPlayerTurn ? '⚡ Your Turn! Choose your combat action:' : '⏳ Opponent is striking back...'}
              </div>
              
              <div class="arena-action-buttons">
                <button class="btn-arena-action btn-act-attack" onclick="window.AK_QUESTS.playerAttack('attack')" ${!this.isPlayerTurn ? 'disabled' : ''}>
                  ${this.getI18nText('arena_btn_attack')} (${p.attack} DMG)
                </button>
                <button class="btn-arena-action btn-act-special" onclick="window.AK_QUESTS.playerAttack('special')" ${!this.isPlayerTurn ? 'disabled' : ''}>
                  ${this.getI18nText('arena_btn_special')}: ${pSpecial} (${p.specialDamage} DMG)
                </button>
                <button class="btn-arena-action btn-act-guard" onclick="window.AK_QUESTS.playerAttack('guard')" ${!this.isPlayerTurn ? 'disabled' : ''}>
                  ${this.getI18nText('arena_btn_guard')}
                </button>
              </div>
            ` : `
              <!-- Stage Results Banner -->
              <div class="arena-result-banner ${isStageVictory ? 'banner-victory' : 'banner-defeat'}">
                <h3>${isGauntletDone ? this.getI18nText('arena_gauntlet_cleared') : (isStageVictory ? this.getI18nText('arena_stage_cleared') : this.getI18nText('arena_defeat_msg'))}</h3>
                <div class="result-actions-row">
                  ${isStageVictory && !isGauntletDone ? `
                    <button class="btn-primary btn-advance-stage" onclick="window.AK_QUESTS.advanceToNextStage()">
                      ${this.getI18nText('arena_btn_next')}
                    </button>
                  ` : ''}

                  ${isGauntletDone ? `
                    <button class="btn-primary btn-advance-stage" onclick="window.AK_QUESTS.resetToStage1()">
                      ${this.getI18nText('arena_btn_restart')}
                    </button>
                  ` : ''}

                  ${isPlayerDefeat ? `
                    <button class="btn-retry-stage" onclick="window.AK_QUESTS.retryStage()">
                      ${this.getI18nText('arena_btn_retry')}
                    </button>
                    <button class="btn-shop-redirect" onclick="window.AK_QUESTS.closeGauntletModal(); window.AK_QUESTS.openShopModal();">
                      🃏 Open Card Shop (Get Stronger Cards) ➡️
                    </button>
                  ` : ''}
                </div>
              </div>
            `}
          </div>

          <!-- Combat Live Log -->
          <div class="arena-combat-log">
            <h4 class="log-heading">📜 Live Battle Log:</h4>
            <div class="log-feed">
              ${this.battleLogs.map(l => `<div class="log-entry">${l}</div>`).join('')}
            </div>
          </div>
        </div>
      `;
    }
  }

  // Instantiate singleton
  window.AK_QUESTS = new QuestMasterSystem();

})(typeof window !== 'undefined' ? window : global);
