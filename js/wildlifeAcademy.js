// ============================================================================
// ANIMAL KINGDOM - WILDLIFE ACADEMY (KHAN ACADEMY STYLE LEARNING ENGINE)
// 7 Courses, 46 Interactive Lessons, Checkpoint Quizzes & Leveling System
// 100% Trilingual: English, 繁體中文, Español
// ============================================================================

(function(window) {
  'use strict';

  // Level Progression Configuration
  const ACADEMY_LEVELS = [
    { level: 1, title: 'Wilderness Novice', title_zh: '荒野初級探險家', title_es: 'Novato de la Selva', minXp: 0, maxXp: 300, badge: '🌱' },
    { level: 2, title: 'Nature Scout', title_zh: '自然小斥候', title_es: 'Explorador Natural', minXp: 300, maxXp: 700, badge: '🧭' },
    { level: 3, title: 'Junior Tracker', title_zh: '初階生態追蹤者', title_es: 'Rastreador Junior', minXp: 700, maxXp: 1200, badge: '🐾' },
    { level: 4, title: 'Wildlife Explorer', title_zh: '野生動物考察員', title_es: 'Explorador Silvestre', minXp: 1200, maxXp: 1900, badge: '🔭' },
    { level: 5, title: 'Field Naturalist', title_zh: '田野博物學者', title_es: 'Naturalista de Campo', minXp: 1900, maxXp: 2800, badge: '🌿' },
    { level: 6, title: 'Biologist Apprentice', title_zh: '生物學學徒', title_es: 'Aprendiz Biólogo', minXp: 2800, maxXp: 3900, badge: '🔬' },
    { level: 7, title: 'Habitat Specialist', title_zh: '棲息地生態專員', title_es: 'Especialista en Hábitats', minXp: 3900, maxXp: 5200, badge: '🌍' },
    { level: 8, title: 'Senior Zoologist', title_zh: '資深動物學家', title_es: 'Zoólogo Senior', minXp: 5200, maxXp: 6800, badge: '🦁' },
    { level: 9, title: 'Apex Wildlife Scholar', title_zh: '頂尖生態泰斗', title_es: 'Erudito Apex', minXp: 6800, maxXp: 8600, badge: '🦅' },
    { level: 10, title: 'Grandmaster of Animals', title_zh: '萬物王國終極大師', title_es: 'Gran Maestro de la Fauna', minXp: 8600, maxXp: 99999, badge: '👑' }
  ];

  // ==========================================================================
  // 7 COMPLETE ACADEMY COURSES (Course 1 has 10 complete lessons)
  // ==========================================================================
  const COURSES_DATA = [
    // ------------------------------------------------------------------------
    // COURSE 1: HOW ANIMALS LIVE: HABITATS, SHELTERS & SURVIVAL (10 LESSONS)
    // ------------------------------------------------------------------------
    {
      id: 'course-1',
      number: 1,
      title: 'How Animals Live: Habitats & Survival',
      title_zh: '動物如何生活：棲息地與生存奧秘',
      title_es: 'Cómo Viven los Animales: Hábitats y Supervivencia',
      desc: 'Explore the fundamental requirements of wildlife life on Earth: biomes, burrows, daily cycles, social packs, and seasonal adaptations.',
      desc_zh: '探索地球上野生動物賴以生存的基本要素：生物群系、巢穴庇護所、晝夜活動規律、群居社會與季節性適應。',
      desc_es: 'Explora los fundamentos de la vida salvaje: biomas, madrigueras, ciclos diarios, manadas y adaptaciones estacionales.',
      icon: '🌍',
      color: '#10b981',
      lessons: [
        {
          id: 'c1-l1',
          number: 1,
          title: 'What is a Habitat?',
          title_zh: '什麼是棲息地？',
          title_es: '¿Qué es un Hábitat?',
          summary: 'A habitat is the natural home of an animal or plant providing food, water, shelter, and space to reproduce.',
          summary_zh: '棲息地是動植物的天然家園，提供食物、水、庇護所以及繁衍後代的安全空間。',
          summary_es: 'Un hábitat es el hogar natural que proporciona alimento, agua, refugio y espacio para reproducirse.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Wildebeest_migration_in_Serengeti.jpg/600px-Wildebeest_migration_in_Serengeti.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. The Four Pillars of Every Habitat',
              heading_zh: '1. 構成棲息地的四大支柱',
              heading_es: '1. Los Cuatro Pilares de Todo Hábitat',
              text: 'Every living creature needs four essentials to thrive: **Nutritious Food**, **Clean Water**, **Protective Shelter**, and **Sufficient Living Space**. If any one of these is missing, species cannot sustain healthy populations.',
              text_zh: '每種生物的生存都依賴四大基本支柱：**營養豐富的食物**、**潔淨水源**、**保護性庇護所**以及**足夠的生存空間**。若缺少其中任何一項，物種將無法維持健康繁衍。',
              text_es: 'Todo ser vivo necesita cuatro elementos esenciales: **Alimento**, **Agua**, **Refugio** y **Espacio**. Sin alguno de ellos, la especie no puede subsistir.'
            },
            {
              heading: '2. Major Biomes of Planet Earth',
              heading_zh: '2. 地球上的主要生物群系 (Biomes)',
              heading_es: '2. Principales Biomas del Planeta',
              text: 'Earth is divided into distinct mega-habitats called **biomes**: Tropical Rainforests (high rainfall, 50% of terrestrial biodiversity), Arid Deserts (extreme temperatures, water scarcity), Savanna Grasslands, Boreal Taiga Forests, and Frozen Polar Tundra.',
              text_zh: '地球劃分為多個宏大的生態系統，稱為**生物群系**：熱帶雨林（降雨豐沛，孕育全球半數陸地生物）、乾旱荒漠（晝夜溫差大、極度缺水）、熱帶稀樹草原、溫帶泰加林以及極寒凍原。',
              text_es: 'La Tierra se divide en grandes **biomas**: Selvas Tropicales, Desiertos Áridos, Sabanas, Bosques Boreales y Tundra Polar.'
            },
            {
              heading: '3. Bio-Fact: Microhabitats Matter!',
              heading_zh: '3. 生態冷知識：微型棲息地的巨大威力',
              heading_es: '3. Dato Biológico: ¡Los Microhábitats!',
              text: 'Even within a large forest, different species occupy unique **microhabitats**. A Poison Dart Frog may spend its entire life inside a single water-filled bromeliad flower high in the canopy, while a beetle lives entirely underneath rotting bark on the forest floor!',
              text_zh: '在同一片森林中，不同物種佔據著獨特的**微型棲息地**。箭毒蛙可能終其一生生活在高聳樹冠層積水的鳳梨科植物花心中，而甲蟲則專門棲息在地面腐爛的樹皮之下！',
              text_es: 'Dentro de un gran bosque existen **microhábitats**. Una rana dardo puede vivir toda su vida en una flor bromelia llena de agua, mientras un escarabajo vive bajo la corteza caída.'
            }
          ],
          quiz: {
            question: 'What are the four essential elements that make up an animal\'s habitat?',
            question_zh: '構成野生動物棲息地的四大核心要素是什麼？',
            question_es: '¿Cuáles son los cuatro elementos esenciales de un hábitat animal?',
            options: [
              { text: 'Food, Water, Shelter, and Living Space', text_zh: '食物、水源、庇護所與生存空間', text_es: 'Alimento, Agua, Refugio y Espacio', correct: true },
              { text: 'Sunlight, Rocks, Leaves, and Sand', text_zh: '陽光、岩石、樹葉與沙子', text_es: 'Sol, Rocas, Hojas y Arena', correct: false },
              { text: 'Ice, Salt, Wind, and Clouds', text_zh: '冰塊、鹽分、風力與雲朵', text_es: 'Hielo, Sal, Viento y Nubes', correct: false }
            ],
            explanation: 'All wildlife requires food, fresh water, shelter from predators and elements, and sufficient geographic space to breed and forage.'
          }
        },
        {
          id: 'c1-l2',
          number: 2,
          title: 'Homes & Dens: Nature\'s Architects',
          title_zh: '巢穴與地洞：大自然的建築工程師',
          title_es: 'Hogares y Guaridas: Arquitectos Naturales',
          summary: 'From underground badger setts to intricately woven weaver-bird nests, explore how animals construct shelters.',
          summary_zh: '從地下錯綜複雜的獾地洞，到編織精巧的織巢鳥巢，探索動物如何建造庇護所。',
          summary_es: 'Desde túneles subterráneos de tejones hasta nidos tejidos, descubre cómo construyen sus refugios.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Barn_owl_scotland.jpg/600px-Barn_owl_scotland.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Underground Fortresses',
              heading_zh: '1. 地下避難堡壘',
              heading_es: '1. Fortalezas Subterráneas',
              text: 'Burrows shield animals from harsh surface weather and predators. Prairie dogs dig multi-chamber towns complete with dedicated nurseries, sleeping quarters, and flood-listening listening posts.',
              text_zh: '地下地洞保護動物免受惡劣天氣與掠食者威脅。土撥鼠會挖掘大型地下城鎮，擁有獨立育嬰室、睡眠寢室以及防洪監聽哨所。',
              text_es: 'Las madrigueras protegen de climas extremos y cazadores. Los perritos de la pradera construyen ciudades subterráneas con cámaras especializadas.'
            },
            {
              heading: '2. Aquatic Engineers: The Beaver Lodge',
              heading_zh: '2. 水域土木工程師：海狸水壩與居所',
              heading_es: '2. Ingenieros Acuáticos: El Castor',
              text: 'North American Beavers fell trees using iron-reinforced orange teeth to create dams. Behind the dam, they construct a dome-shaped stick lodge with underwater entrances to keep wolves and bears completely locked out!',
              text_zh: '北美海狸用含有鐵質的橙色堅韌門牙伐倒樹木建造水壩。在壩池中建造圓頂木屋，並將出入口隱藏在水下，徹底防止狼群與棕熊侵入！',
              text_es: 'Los castores talan árboles con dientes reforzados con hierro para hacer represas. Crean chozas con entradas sumergidas que impiden el paso a depredadores.'
            }
          ],
          quiz: {
            question: 'Why do beavers build their lodge entrances completely submerged underwater?',
            question_zh: '為什麼海狸將其水屋的出入口完全建造在水面之下？',
            question_es: '¿Por qué los castores construyen la entrada de su choza bajo el agua?',
            options: [
              { text: 'To prevent land predators like wolves and bears from entering', text_zh: '防止狼與熊等陸地掠食者進入掠奪', text_es: 'Para evitar que entren depredadores terrestres', correct: true },
              { text: 'Because beavers cannot breathe air', text_zh: '因為海狸無法呼吸空氣', text_es: 'Porque no pueden respirar aire', correct: false },
              { text: 'To catch floating fish inside their bedroom', text_zh: '為了在臥室裡捕撈游過的魚', text_es: 'Para pescar dentro de su habitación', correct: false }
            ],
            explanation: 'Underwater entrances ensure that land predators without diving skills cannot breach the dry interior living chamber.'
          }
        },
        {
          id: 'c1-l3',
          number: 3,
          title: 'Surviving Extreme Climate & Weather',
          title_zh: '對抗極端氣候與酷寒烈日',
          title_es: 'Sobreviviendo Climas Extremos',
          summary: 'Learn how blubber, counter-current heat exchange, and hollow polar fur protect against freezing temperatures and scorching heat.',
          summary_zh: '了解脂肪層、逆流熱交換系統與中空保暖毛皮如何抵禦極地酷寒與荒漠酷熱。',
          summary_es: 'Aprende cómo la grasa, el pelaje hueco y el intercambio de calor protegen contra el frío y el calor extremo.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/600px-Polar_Bear_-_Alaska_%28cropped%29.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Polar Insulation Secrets',
              heading_zh: '1. 極地巨獸的絕熱保溫密技',
              heading_es: '1. Secretos del Aislamiento Polar',
              text: 'Polar bears survive temperatures down to -50°C thanks to a 4-inch layer of subcutaneous blubber and guard hairs that are hollow, trapping air and reflecting sunlight toward jet-black skin that absorbs heat!',
              text_zh: '北極熊能在零下50度低溫存活，得益於厚達10公分的皮下脂肪層。其外層毛髮內部中空，可鎖定空氣絕熱，並將陽光折射至皮下吸收熱量的純黑皮膚！',
              text_es: 'Los osos polares soportan -50°C gracias a 10 cm de grasa y pelos huecos que atrapan aire sobre una piel negra que absorbe calor solar.'
            },
            {
              heading: '2. Desert Heat Dissipation',
              heading_zh: '2. 荒漠生物的高效散熱魔法',
              heading_es: '2. Disipación de Calor en el Desierto',
              text: 'Desert Fennec Foxes and Jackrabbits possess gigantic ears packed with blood vessels. As blood pumps through the thin ear skin, desert breezes cool the blood before it returns to their core organs.',
              text_zh: '荒漠耳廓狐與長耳大野兔擁有密布微血管的巨大雙耳。當血液流經薄耳皮時，荒漠微風迅速為血液降溫，再流回核心器官！',
              text_es: 'Los zorros fénec tienen orejas gigantescas con vasos sanguíneos. La brisa enfría la sangre antes de volver al cuerpo.'
            }
          ],
          quiz: {
            question: 'What color is the skin underneath a Polar Bear\'s white translucent fur?',
            question_zh: '北極熊白色半透明毛髮底下的真實皮膚是什麼顏色？',
            question_es: '¿De qué color es la piel debajo del pelaje blanco del oso polar?',
            options: [
              { text: 'Jet Black (to absorb heat from sunlight)', text_zh: '純黑色 (為了吸收太陽熱量)', text_es: 'Negro azabache (para absorber calor solar)', correct: true },
              { text: 'Bright Pink', text_zh: '鮮豔粉紅色', text_es: 'Rosa brillante', correct: false },
              { text: 'Snow White', text_zh: '雪白色', text_es: 'Blanco nieve', correct: false }
            ],
            explanation: 'Polar bear skin is pitch black to maximize heat absorption from incoming solar radiation.'
          }
        },
        {
          id: 'c1-l4',
          number: 4,
          title: 'Ecosystem Roles: Food Webs & Energy Flow',
          title_zh: '生態系統角色：食物網與能量流動',
          title_es: 'Roles Ecológicos y Redes Tróficas',
          summary: 'Understand producers, primary consumers, apex carnivores, and the vital role of decomposers.',
          summary_zh: '認識生產者、初級消費者、頂級肉食動物以及大自然分解者的關鍵角色。',
          summary_es: 'Comprende a los productores, consumidores, superdepredadores y descomponedores.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/600px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. The Energy Pyramid',
              heading_zh: '1. 生態能量金字塔',
              heading_es: '1. La Pirámide de Energía',
              text: 'Only about 10% of energy transfers from one trophic level to the next. Plants harvest sunlight (Producers), herbivores eat plants (Primary Consumers), and predators eat herbivores (Secondary/Tertiary Consumers).',
              text_zh: '在食物鏈中，僅有約10%的能量能傳遞至下一個營養級。植物捕捉陽光進行光合作用（生產者），草食動物攝食植物（初級消費者），肉食掠食者捕食草食動物。',
              text_es: 'Solo el 10% de la energía pasa de un nivel trófico al siguiente: Productores (plantas), Consumidores primarios y Depredadores.'
            }
          ],
          quiz: {
            question: 'Approximately how much energy is transferred from one trophic level up to the next in a food web?',
            question_zh: '在生態食物網中，約有多少比例的能量能傳遞至下一個營養階層？',
            question_es: '¿Aproximadamente cuánta energía se transfiere de un nivel trófico al siguiente?',
            options: [
              { text: 'Around 10%', text_zh: '約 10%', text_es: 'Alrededor del 10%', correct: true },
              { text: '90%', text_zh: '90%', text_es: '90%', correct: false },
              { text: '100% (No energy is lost)', text_zh: '100% (完全無能量損耗)', text_es: '100%', correct: false }
            ],
            explanation: 'The Rule of 10% states that roughly 90% of energy is expended through metabolism and heat at each level.'
          }
        },
        {
          id: 'c1-l5',
          number: 5,
          title: 'Daily Schedules: Diurnal, Nocturnal & Crepuscular',
          title_zh: '生物晝夜節律：日行、夜行與黃昏行動物',
          title_es: 'Horarios Diarios: Diurnos, Nocturnos y Crepusculares',
          summary: 'Discover how animals divide the 24-hour day into different shifts to avoid competition and extreme temperatures.',
          summary_zh: '探索動物如何將24小時拆分為不同的活動輪班，以避免競爭並適應氣溫。',
          summary_es: 'Descubre cómo los animales se dividen el día para evitar competencia y climas extremos.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Barn_owl_scotland.jpg/600px-Barn_owl_scotland.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Three Temporal Lifestyles',
              heading_zh: '1. 三種時間生態習性',
              heading_es: '1. Tres Estilos de Vida Temporales',
              text: '**Diurnal** animals are active during daylight (Humans, Eagles, Honeybees). **Nocturnal** animals hunt in the dark (Barn Owls, Bats, Leopard Geckos). **Crepuscular** animals are active strictly at dawn and dusk (Deer, Rabbits, Lions) when temperatures are mild.',
              text_zh: '**日行性 (Diurnal)** 生物於白天活躍（人類、老鷹、蜜蜂）。**夜行性 (Nocturnal)** 生物於黑夜狩獵（倉鴞、蝙蝠、豹紋守宮）。**晨昏行性 (Crepuscular)** 則專門在黎明與黃昏氣溫舒適時出沒（鹿、野兔、獅子）。',
              text_es: '**Diurnos** actúan de día, **Nocturnos** de noche y **Crepusculares** al amanecer y atardecer.'
            }
          ],
          quiz: {
            question: 'What term describes animals that are most active during dawn and dusk?',
            question_zh: '專門在黎明與黃昏時段最為活躍的動物稱為什麼？',
            question_es: '¿Qué término describe a los animales activos durante el amanecer y atardecer?',
            options: [
              { text: 'Crepuscular', text_zh: '晨昏行性 (Crepuscular)', text_es: 'Crepusculares', correct: true },
              { text: 'Nocturnal', text_zh: '夜行性 (Nocturnal)', text_es: 'Nocturnos', correct: false },
              { text: 'Aquatic', text_zh: '水生性 (Aquatic)', text_es: 'Acuáticos', correct: false }
            ],
            explanation: 'Crepuscular animals take advantage of low light and cooler temperatures at dawn and dusk.'
          }
        },
        {
          id: 'c1-l6',
          number: 6,
          title: 'Social Life: Solitary Hunters vs. Herds & Packs',
          title_zh: '社交結構：孤獨獵手 vs. 緊密族群與狼群',
          title_es: 'Vida Social: Solitarios vs. Manadas',
          summary: 'Why do tigers hunt alone while wolves and meerkats form cooperative societies?',
          summary_zh: '為什麼老虎選擇獨自狩獵，而狼與狐獴則建立高度合作的社會？',
          summary_es: '¿Por qué los tigres cazan solos mientras lobos y suricatas cooperan?',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Canis_lupus_laying_in_grass.jpg/600px-Canis_lupus_laying_in_grass.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. The Power of the Pack',
              heading_zh: '1. 群體合作的威力',
              heading_es: '1. El Poder de la Manada',
              text: 'Social groups provide collective vigilance against predators and allow packs to bring down prey 10 times larger than any single hunter could manage alone (such as a wolf pack tackling a 1,000-lb bison).',
              text_zh: '群體生活能提供集體警惕防禦，並能合力扳倒單獨個體無法對抗的十倍大獵物（例如狼群合力圍獵一頭重達半噸的北美野牛）。',
              text_es: 'Vivir en manada permite vigilar depredadores y derribar presas gigantescas que un cazador solitario no podría.'
            }
          ],
          quiz: {
            question: 'Which of the following big cats is uniquely social and lives in family groups called prides?',
            question_zh: '下列哪種大型貓科動物具有獨特的群居社交性，生活在稱為獅群 (Pride) 的家族中？',
            question_es: '¿Cuál de los siguientes grandes felinos vive en manadas familiares llamadas manadas?',
            options: [
              { text: 'African Lion', text_zh: '非洲獅 (African Lion)', text_es: 'León Africano', correct: true },
              { text: 'Leopard', text_zh: '花豹 (Leopard)', text_es: 'Leopardo', correct: false },
              { text: 'Snow Leopard', text_zh: '雪豹 (Snow Leopard)', text_es: 'Leopardo de las Nieves', correct: false }
            ],
            explanation: 'Lions are the only big cats that live in large cooperative family prides.'
          }
        },
        {
          id: 'c1-l7',
          number: 7,
          title: 'Seasons of Life: Hibernation, Torpor & Estivation',
          title_zh: '生命的季節變奏：冬眠、蟄伏與夏眠',
          title_es: 'Estaciones de Vida: Hibernación y Estivación',
          summary: 'How animals lower their heart rates to near zero to endure winters with zero food.',
          summary_zh: '動物如何將心跳降至接近停頓，以熬過長達數月食物匱乏的嚴冬。',
          summary_es: 'Cómo los animales bajan su ritmo cardíaco para sobrevivir inviernos sin alimento.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/600px-2010-kodiak-bear-1.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. True Hibernation vs. Winter Sleep',
              heading_zh: '1. 真冬眠 vs. 熊類的深冬休眠',
              heading_es: '1. Hibernación Verdadera vs Sueño Invernal',
              text: 'In true hibernation (like ground squirrels and wood frogs), body temperature drops near 0°C, and heartbeats slow from 300 bpm to just 3 bpm! Bears experience "winter lethargy" where they don\'t eat, drink, or urinate for 5 months, yet maintain a higher body temperature.',
              text_zh: '在真正的冬眠中（如地松鼠與林蛙），體溫降至接近0°C，心跳從每分鐘300次驟降至僅3次！而熊類則處於深冬休眠，5個月內不吃不喝不排泄，但維持較高體溫。',
              text_es: 'En la hibernación verdadera el cuerpo baja a casi 0°C y el corazón late solo 3 veces por minuto.'
            }
          ],
          quiz: {
            question: 'What is the summer equivalent of hibernation used by desert frogs and snails to survive droughts?',
            question_zh: '荒漠青蛙與蝸牛在酷暑乾旱期間為了保水進入休眠的現象稱為什麼？',
            question_es: '¿Cómo se llama la suspensión de actividad en verano para soportar sequías y calor?',
            options: [
              { text: 'Estivation (Aestivation)', text_zh: '夏眠 (Estivation)', text_es: 'Estivación', correct: true },
              { text: 'Photosynthesis', text_zh: '光合作用', text_es: 'Fotosíntesis', correct: false },
              { text: 'Metamorphosis', text_zh: '變態發育', text_es: 'Metamorfosis', correct: false }
            ],
            explanation: 'Estivation is prolonged dormancy during hot, dry periods to prevent desiccation.'
          }
        },
        {
          id: 'c1-l8',
          number: 8,
          title: 'Super Senses: Beyond Human Perception',
          title_zh: '超感官世界：超越人類感知的極限感官',
          title_es: 'Super Sentidos: Más Allá de lo Humano',
          summary: 'Infrared pits, electro-reception, magnetic navigation, and olfactory superpowers.',
          summary_zh: '紅外線唇窩感應、生物微電場偵測、地磁導航與敏銳嗅覺。',
          summary_es: 'Fosetas infrarrojas, electrorrecepción, navegación magnética y superolfato.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Crotalus_atrox_02.jpg/600px-Crotalus_atrox_02.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Seeing the Invisible',
              heading_zh: '1. 看見肉眼不可見的世界',
              heading_es: '1. Viendo lo Invisible',
              text: 'Pit vipers possess heat-sensing facial pits that construct a thermal image of warm-blooded prey in absolute darkness. Sharks sense micro-volt heartbeats through the Ampullae of Lorenzini.',
              text_zh: '蝮蛇的臉部熱感唇窩能在漆黑中構建溫血獵物的熱成像圖。鯊魚則透過羅倫氏壺腹感應微伏特級別的生物心跳電場。',
              text_es: 'Las víboras ven calor con fosetas térmicas y los tiburones sienten latidos con las ampollas de Lorenzini.'
            }
          ],
          quiz: {
            question: 'Which organ enables pit vipers to strike warm-blooded prey in total darkness?',
            question_zh: '哪種器官使響尾蛇能在完全黑暗中精確攻擊溫血獵物？',
            question_es: '¿Qué órgano permite a las víboras atacar presas en oscuridad total?',
            options: [
              { text: 'Facial infrared heat pits', text_zh: '臉部紅外熱感唇窩', text_es: 'Fosetas infrarrojas faciales', correct: true },
              { text: 'Vibrating rattle', text_zh: '尾端響環', text_es: 'Cascabel vibratorio', correct: false },
              { text: 'Echolocation sonar', text_zh: '超聲波雷達', text_es: 'Sonar de ecolocalización', correct: false }
            ],
            explanation: 'Infrared pit organs detect minute thermal differences as small as 0.003°C.'
          }
        },
        {
          id: 'c1-l9',
          number: 9,
          title: 'Territory & Communication: Nature\'s Language',
          title_zh: '領地維護與動物溝通語言',
          title_es: 'Territorio y Comunicación Animal',
          summary: 'How birds sing complex dialects, wolves howl across mountain valleys, and bees perform waggle dances.',
          summary_zh: '鳥類如何演唱複雜方言、狼群如何跨山谷呼嘯，以及蜜蜂如何透過搖擺舞傳遞花源座標。',
          summary_es: 'Cómo cantan las aves, aúllan los lobos y bailan las abejas para comunicarse.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/About_to_Launch_%2826079720721%29.jpg/600px-About_to_Launch_%2826079720721%29.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. The Honeybee Waggle Dance',
              heading_zh: '1. 蜜蜂的八字搖擺舞座標系統',
              heading_es: '1. La Danza de las Abejas',
              text: 'When a scout bee discovers rich nectar flowers, she returns to the hive and performs an 8-shaped "Waggle Dance". The angle relative to vertical indicates the direction relative to the sun, and the duration tells the exact distance!',
              text_zh: '當偵察蜂發現豐美花源時，返回蜂巢跳起「八字搖擺舞」。擺動角度對應太陽方位，擺動時間長短則精準指示距離！',
              text_es: 'Las abejas comunican la ubicación de flores bailando en ángulo respecto al sol y marcando la distancia con la duración del baile.'
            }
          ],
          quiz: {
            question: 'How do honeybees communicate the exact direction and distance of distant flowers to their hive mates?',
            question_zh: '蜜蜂如何向同伴傳達遠方花源的精確方向與距離？',
            question_es: '¿Cómo comunican las abejas la dirección y distancia de las flores?',
            options: [
              { text: 'By performing the Waggle Dance', text_zh: '透過跳八字搖擺舞 (Waggle Dance)', text_es: 'Bailando la danza del meneo', correct: true },
              { text: 'By making chirping noises with wings', text_zh: '透過拍翅發出嘰嘰聲', text_es: 'Haciendo ruidos con las alas', correct: false },
              { text: 'By leaving glowing slime trails', text_zh: '留下發光黏液痕跡', text_es: 'Dejando rastros luminosos', correct: false }
            ],
            explanation: 'Karl von Frisch won a Nobel Prize for decoding the honeybee waggle dance communication system.'
          }
        },
        {
          id: 'c1-l10',
          number: 10,
          title: 'Human Coexistence & Rewilding Conservation',
          title_zh: '人與自然共生：生態走廊與野化保護',
          title_es: 'Coexistencia y Conservación Silvestre',
          summary: 'Wildlife overpasses, anti-poaching telemetry, and how restoring keystone species heals entire landscapes.',
          summary_zh: '野生動物跨路立交橋、反盜獵遙測技術，以及恢復關鍵物種如何修復整片自然景觀。',
          summary_es: 'Pasos de fauna, telemetría y cómo restaurar especies clave regenera ecosistemas.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Monarch_In_May.jpg/600px-Monarch_In_May.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Wildlife Corridors Save Lives',
              heading_zh: '1. 綠色生態走廊守護生命',
              heading_es: '1. Corredores de Fauna que Salvan Vidas',
              text: 'Highway wildlife overpasses in Banff National Park and Irvine greenbelts connect fragmented forests, allowing cougars, bears, and deer to migrate safely without vehicle collisions.',
              text_zh: '斑夫國家公園的野生動物立交綠橋與城市綠帶串聯起被公路切割的零碎森林，讓美洲獅、棕熊與鹿群得以安全遷徙，避免車禍悲劇。',
              text_es: 'Los puentes verdes para fauna unen bosques fragmentados permitiendo que animales crucen autopistas con seguridad.'
            }
          ],
          quiz: {
            question: 'What is the primary purpose of constructing vegetated wildlife bridges across busy freeways?',
            question_zh: '橫跨繁忙高速公路修建植被野生動物通道的主要目的是什麼？',
            question_es: '¿Cuál es el propósito principal de los puentes verdes para fauna?',
            options: [
              { text: 'To reconnect fragmented habitats and prevent animal-vehicle collisions', text_zh: '重新連結破碎棲息地並防止路殺車禍', text_es: 'Reconectar hábitats y evitar colisiones', correct: true },
              { text: 'To give animals a viewing platform to watch cars', text_zh: '為動物提供觀賞車流的觀景台', text_es: 'Para que vean los autos', correct: false },
              { text: 'To grow vegetables for human markets', text_zh: '為人類市場種植蔬菜', text_es: 'Para cultivar verduras', correct: false }
            ],
            explanation: 'Wildlife crossings significantly reduce roadkill and restore genetic gene flow between separated populations.'
          }
        }
      ]
    },

    // ------------------------------------------------------------------------
    // COURSE 2: DIETS, PREDATORS & THE FOOD WEB (6 LESSONS)
    // ------------------------------------------------------------------------
    {
      id: 'course-2',
      number: 2,
      title: 'Diets, Predators & Food Webs',
      title_zh: '飲食習性、頂級掠食與食物鏈',
      title_es: 'Dietas, Depredadores y Cadenas Alimentarias',
      desc: 'Master the mechanics of predation, specialized herbivore digestive systems, trophic cascades, and chemical venom warfare.',
      desc_zh: '掌握掠食機制、草食動物消化系統、營養級聯鎖反應以及生物毒素化學武器。',
      desc_es: 'Domina los mecanismos de depredación, digestión herbívora, cascadas tróficas y venenos.',
      icon: '🥩',
      color: '#f97316',
      lessons: [
        {
          id: 'c2-l1',
          number: 1,
          title: 'Herbivores & The Art of Plant Digestion',
          title_zh: '草食動物與植物消化奇蹟',
          title_es: 'Herbívoros y Digestión de Plantas',
          summary: 'Cellulose is extremely difficult to break down. Learn how cows and ruminants use four stomachs and gut microbes.',
          summary_zh: '纖維素極難分解。探索反芻動物如何利用四個胃室與腸道微生物將纖維轉化為能量。',
          summary_es: 'La celulosa es difícil de digerir. Aprende cómo rumiantes usan cuatro estómagos y microbios.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Wildebeest_migration_in_Serengeti.jpg/600px-Wildebeest_migration_in_Serengeti.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Fermentation Chambers',
              heading_zh: '1. 天然體內發酵槽',
              heading_es: '1. Cámaras de Fermentación',
              text: 'Ruminants (cows, deer, giraffes) have four stomach compartments: Rumen, Reticulum, Omasum, and Abomasum. Billions of symbiotic bacteria ferment tough cellulose into digestible sugars.',
              text_zh: '反芻動物（牛、鹿、長頸鹿）擁有四個胃室：瘤胃、蜂巢胃、重瓣胃與皺胃。數百億共生細菌將堅硬的纖維素發酵為易吸收的醣類。',
              text_es: 'Los rumiantes tienen cuatro compartimentos estomacales donde bacterias fermentan la celulosa.'
            }
          ],
          quiz: {
            question: 'Which microscopic organisms live inside ruminant stomachs to help digest tough plant cellulose?',
            question_zh: '哪種微小生物生活在反芻動物胃中，協助其分解堅韌的植物纖維素？',
            question_es: '¿Qué microorganismos ayudan a digerir la celulosa en el estómago de los rumiantes?',
            options: [
              { text: 'Symbiotic gut bacteria and microbes', text_zh: '共生腸道細菌與微生物', text_es: 'Bacterias y microbios simbióticos', correct: true },
              { text: 'Viruses', text_zh: '病毒', text_es: 'Virus', correct: false },
              { text: 'Algae needing sunlight', text_zh: '需要陽光的藻類', text_es: 'Algas solares', correct: false }
            ],
            explanation: 'Mammals cannot produce cellulase enzymes directly; they rely on symbiotic gut microbiomes.'
          }
        },
        {
          id: 'c2-l2',
          number: 2,
          title: 'Carnivores & Apex Hunters',
          title_zh: '肉食動物與頂級獵手的必殺技',
          title_es: 'Carnívoros y Cazadores Apex',
          summary: 'Examine skull anatomy, carnassial teeth, and ambush strategies of tigers, lions, and wolves.',
          summary_zh: '檢驗頭骨解剖、裂齒剪刀結構以及虎、獅、狼的埋伏與追擊戰術。',
          summary_es: 'Examina cráneos, muelas carniceras y emboscadas de tigres, leones y lobos.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tiger_in_Ranthambhore.jpg/600px-Tiger_in_Ranthambhore.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Scissor Teeth: Carnassials',
              heading_zh: '1. 骨肉剪刀：裂齒結構',
              heading_es: '1. Dientes de Tijera: Muelas Carniceras',
              text: 'Carnivores possess specialized premolars and molars called **carnassials** that slide past each other like precision scissor blades to slice tough sinew and shear meat cleanly off bone.',
              text_zh: '食肉動物具備特化的前臼齒與臼齒，稱為**裂齒 (Carnassials)**，如剪刀刀片般交錯咬合，能精準剪斷強韌筋腱並將骨上肌肉俐落切下。',
              text_es: 'Los carnívoros tienen muelas carniceras que actúan como tijeras afiladas cortando carne y tendones.'
            }
          ],
          quiz: {
            question: 'What are the specialized scissor-like teeth in carnivores used to slice through meat and sinew called?',
            question_zh: '食肉目動物口腔中如剪刀般精確剪切肉塊與筋腱的特化牙齒稱為什麼？',
            question_es: '¿Cómo se llaman las muelas en tijera que usan los carnívoros para cortar carne?',
            options: [
              { text: 'Carnassials', text_zh: '裂齒 (Carnassials)', text_es: 'Muelas Carniceras', correct: true },
              { text: 'Wisdom teeth', text_zh: '智齒', text_es: 'Muelas del juicio', correct: false },
              { text: 'Grinding molars', text_zh: '研磨臼齒', text_es: 'Molares planos', correct: false }
            ],
            explanation: 'Carnassials evolved specifically in the mammalian order Carnivora to slice flesh efficiently.'
          }
        },
        {
          id: 'c2-l3',
          number: 3,
          title: 'Omnivores: The Ultimate Opportunists',
          title_zh: '雜食性動物：適應力超強的通才',
          title_es: 'Omnívoros: Oportunistas por Excelencia',
          summary: 'Bears, raccoons, chimpanzees, and corvids switch easily between nuts, berries, insects, and fish.',
          summary_zh: '熊、浣熊、黑猩猩與鴉科鳥類能靈活切換於堅果、漿果、昆蟲與鮮魚之間。',
          summary_es: 'Osos, mapaches y córvidos cambian de frutos a carne e insectos según la estación.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/600px-2010-kodiak-bear-1.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Generalist Diet Flexibility',
              heading_zh: '1. 飲食全才的生存彈性',
              heading_es: '1. Flexibilidad Diaria',
              text: 'Unlike specialized koalas that only eat eucalyptus, grizzly bears can forage for spring roots, feast on summer moth larvae, binge on spawning salmon in autumn, and fatten up for winter denning.',
              text_zh: '與只吃桉樹葉的無尾熊不同，灰熊在春天挖掘草根、夏天捕食蛾幼蟲、秋天狂吞鮭魚，迅速囤積脂肪以供冬眠。',
              text_es: 'Los osos grizzlies comen raíces en primavera, insectos en verano y salmón en otoño.'
            }
          ],
          quiz: {
            question: 'What dietary classification applies to an animal that eats both plants and other animals?',
            question_zh: '既攝食植物又捕食其他動物的生物屬於哪種飲食分類？',
            question_es: '¿Qué clasificación corresponde a un animal que come tanto plantas como otros animales?',
            options: [
              { text: 'Omnivore', text_zh: '雜食性 (Omnivore)', text_es: 'Omnívoro', correct: true },
              { text: 'Herbivore', text_zh: '草食性 (Herbivore)', text_es: 'Herbívoro', correct: false },
              { text: 'Frugivore', text_zh: '食果性 (Frugivore)', text_es: 'Frugívoro', correct: false }
            ],
            explanation: 'Omnivores consume a broad variety of botanical and animal matter.'
          }
        },
        {
          id: 'c2-l4',
          number: 4,
          title: 'Scavengers: Nature\'s Vital Sanitizers',
          title_zh: '食腐動物：大自然的防疫清道夫',
          title_es: 'Carroñeros: Limpiadores Sanitarios',
          summary: 'Vultures possess stomach acids as corrosive as car battery acid to destroy anthrax and cholera bacteria.',
          summary_zh: '禿鷹胃酸強烈如汽車電瓶酸，能直接溶解炭疽熱與霍亂病菌，防止瘟疫擴散。',
          summary_es: 'Los buitres tienen ácido estomacal tan fuerte que destruye bacterias de ántrax y cólera.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Barn_owl_scotland.jpg/600px-Barn_owl_scotland.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Acid Shields Against Epidemics',
              heading_zh: '1. 阻絕瘟疫的強酸防護盾',
              heading_es: '1. Escudos de Ácido',
              text: 'Vulture stomach pH ranges from 1.0 to 2.0. This extreme acidity annihilates deadly botulinum toxin and lethal bacteria, recycling decomposing carcasses and halting disease outbreaks.',
              text_zh: '禿鷹的胃酸 pH 值高達 1.0 至 2.0，強酸能徹底殺滅肉毒桿菌與致病菌，安全清理腐肉並終止流行病蔓延。',
              text_es: 'El pH del estómago del buitre (1.0 a 2.0) destruye patógenos mortales reciclando nutrientes.'
            }
          ],
          quiz: {
            question: 'Why are vultures essential for preventing deadly epidemics in ecosystems?',
            question_zh: '為什麼禿鷹對於防止生態系統中爆發致命傳染病至關重要？',
            question_es: '¿Por qué los buitres son cruciales para evitar epidemias?',
            options: [
              { text: 'Their super-acidic stomachs destroy lethal pathogens like anthrax and cholera', text_zh: '其超強胃酸能殺滅炭疽與霍亂等致命病菌', text_es: 'Su ácido destruye patógenos mortales como ántrax', correct: true },
              { text: 'They wash carcasses with river water', text_zh: '牠們用河水清洗腐肉', text_es: 'Lavan la carne con agua', correct: false },
              { text: 'They bury bones deep underground', text_zh: '牠們將骨頭深埋地下', text_es: 'Entierran los huesos', correct: false }
            ],
            explanation: 'Vultures sanitize landscapes by destroying dangerous bacteria that would otherwise sicken mammalian wildlife.'
          }
        },
        {
          id: 'c2-l5',
          number: 5,
          title: 'Trophic Cascades: How Wolves Changed Rivers',
          title_zh: '營養級聯效應：狼群如何重塑河流地貌',
          title_es: 'Cascadas Tróficas: Cómo los Lobos Cambian Ríos',
          summary: 'The famous Yellowstone experiment: how reintroducing wolves regenerated willow trees, brought back beavers, and stabilized riverbanks.',
          summary_zh: '黃石國家公園經典生態實驗：引回狼群如何讓柳樹重生、吸引海狸回歸並穩固河岸。',
          summary_es: 'El experimento de Yellowstone: reintroducir lobos regeneró bosques y estabilizó riberas fluviales.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Canis_lupus_laying_in_grass.jpg/600px-Canis_lupus_laying_in_grass.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. The Ripple Effect of an Apex Predator',
              heading_zh: '1. 頂級捕食者的連鎖漣漪效應',
              heading_es: '1. El Efecto Cascada',
              text: 'When wolves were reintroduced to Yellowstone in 1995, they hunted overpopulated elk herds. Elk stopped overgrazing river valleys. Trees sprouted, stabilizing soil. Beavers built dams, creating wetlands that hosted birds, frogs, and fish!',
              text_zh: '1995年狼群被引回黃石公園後，控制了過剩的馬鹿族群。馬鹿不再啃光河谷幼樹，柳樹與楊樹重生穩固了河岸土壤。海狸歸來築壩形成濕地，造福鳥類、青蛙與魚群！',
              text_es: 'Los lobos redujeron los ciervos que sobrepastoreaban ríos. Los árboles crecieron, volvieron los castores y los ríos se estabilizaron.'
            }
          ],
          quiz: {
            question: 'What ecological term describes an apex predator triggering a chain reaction across all levels of an ecosystem?',
            question_zh: '頂級捕食者的存在牽動整個生態系各營養層級連鎖變化的現象稱為什麼？',
            question_es: '¿Qué término describe una reacción en cadena provocada por un depredador ápice en todo el ecosistema?',
            options: [
              { text: 'Trophic Cascade', text_zh: '營養級聯 (Trophic Cascade)', text_es: 'Cascada Trófica', correct: true },
              { text: 'Thermal Radiation', text_zh: '熱輻射', text_es: 'Radiación Térmica', correct: false },
              { text: 'Metamorphosis', text_zh: '變態發育', text_es: 'Metamorfosis', correct: false }
            ],
            explanation: 'Trophic cascades demonstrate how apex predators regulate entire ecological communities.'
          }
        },
        {
          id: 'c2-l6',
          number: 6,
          title: 'Venom vs. Poison: Chemical Weapons',
          title_zh: '毒液 (Venom) vs. 毒素 (Poison)：生物化學武器',
          title_es: 'Veneno Inyectado vs Veneno Ingerido',
          summary: 'If it bites you and you get sick, it\'s venomous. If you bite it and you get sick, it\'s poisonous!',
          summary_zh: '牠咬你而你中毒，那是「毒液 (Venom)」；你咬牠而你中毒，那是「毒素 (Poison)」！',
          summary_es: 'Si te muerde y enfermas, es venenoso (venom). Si lo muerdes y enfermas, es tóxico (poison).',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Crotalus_atrox_02.jpg/600px-Crotalus_atrox_02.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Injected vs. Ingested Delivery',
              heading_zh: '1. 注射型 vs. 吞食接觸型傳遞',
              heading_es: '1. Entrega Inyectada vs Ingerida',
              text: '**Venom** is actively injected via fangs, stingers, or spurs (Rattlesnakes, Wasps, Platypus). **Poison** is passive: toxins stored in skin, feathers, or organs absorbed through eating or touching (Poison Dart Frogs, Pufferfish).',
              text_zh: '**毒液 (Venom)** 是透過毒牙、毒刺或距主動注射（響尾蛇、黃蜂、鴨嘴獸）。**毒素 (Poison)** 則是儲存在皮膚或內臟中，透過觸碰或被吞食被動起效（箭毒蛙、河豚）。',
              text_es: '**Venom** se inyecta con colmillos o aguijones. **Poison** se absorbe al tocarlo o comerlo.'
            }
          ],
          quiz: {
            question: 'What is the key biological difference between a venomous animal and a poisonous animal?',
            question_zh: '具備「毒液 (Venomous)」與含有「毒素 (Poisonous)」動物的核心區別是什麼？',
            question_es: '¿Cuál es la diferencia clave entre un animal venenoso (venomous) y uno tóxico (poisonous)?',
            options: [
              { text: 'Venom is actively injected; poison is passively absorbed or ingested', text_zh: '毒液是主動注射進入體內；毒素是透過吞食或觸碰被動吸收', text_es: 'El veneno se inyecta; la toxina se ingiere o absorbe', correct: true },
              { text: 'Poison only affects plants', text_zh: '毒素只會傷害植物', text_es: 'El veneno solo afecta plantas', correct: false },
              { text: 'There is no difference', text_zh: '完全沒有任何區別', text_es: 'Son idénticos', correct: false }
            ],
            explanation: 'Remember the golden rule: Venom is injected via wounds; poison is ingested or absorbed through skin.'
          }
        }
      ]
    },

    // ------------------------------------------------------------------------
    // COURSE 3: ANIMAL ADAPTATIONS & SUPERPOWERS (6 LESSONS)
    // ------------------------------------------------------------------------
    {
      id: 'course-3',
      number: 3,
      title: 'Animal Adaptations & Superpowers',
      title_zh: '動物適應力與生物超能力',
      title_es: 'Superpoderes y Adaptaciones Biológicas',
      desc: 'Discover incredible evolutionary superpowers: camouflage masters, extreme speed physics, natural armor, and biological sonar.',
      desc_zh: '探索不可思議的演化超能力：偽裝偽態大師、極致速度力學、天然鎧甲盾牌與生物聲納。',
      desc_es: 'Descubre superpoderes evolutivos: camuflaje, velocidad extrema, armaduras y sonar biológico.',
      icon: '⚡',
      color: '#eab308',
      lessons: [
        {
          id: 'c3-l1',
          number: 1,
          title: 'Masters of Camouflage & Chromatophores',
          title_zh: '偽裝大師與變色細胞魔法',
          title_es: 'Maestros del Camuflaje y Cromatóforos',
          summary: 'How chameleons and octopuses change colors in milliseconds using microscopic skin cells.',
          summary_zh: '變色龍與章魚如何利用微觀皮膚色素細胞在毫秒間隱形融入環境。',
          summary_es: 'Cómo camaleones y pulpos cambian de color en milisegundos con cromatóforos.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Chamaeleo_calyptratus_20070408_01.jpg/600px-Chamaeleo_calyptratus_20070408_01.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Chromatophores & Iridophores',
              heading_zh: '1. 色素細胞與虹彩細胞',
              heading_es: '1. Cromatóforos',
              text: 'Cephalopods possess thousands of elastic pigment sacs called **chromatophores** controlled directly by nerves. Beneath them, **iridophores** reflect polarized light, allowing octopuses to mimic coral reefs in 200 milliseconds!',
              text_zh: '頭足類動物擁有數萬個受神經直接控制的微小彈性色素囊，稱為**色素細胞 (Chromatophores)**。其下方的**虹彩細胞**能反射光線，使章魚能在 0.2 秒內模仿珊瑚礁紋理！',
              text_es: 'Los pulpos tienen sacos de pigmento elásticos controlados por nervios que cambian de color en 200 ms.'
            }
          ],
          quiz: {
            question: 'What specialized pigment-containing cells allow octopuses and chameleons to rapidly alter skin color?',
            question_zh: '哪種特化細胞使章魚與變色龍能夠極速變換皮膚色彩？',
            question_es: '¿Qué células con pigmento permiten a pulpos y camaleones cambiar de color rápidamente?',
            options: [
              { text: 'Chromatophores', text_zh: '色素細胞 (Chromatophores)', text_es: 'Cromatóforos', correct: true },
              { text: 'Red blood cells', text_zh: '紅血球', text_es: 'Glóbulos rojos', correct: false },
              { text: 'Bone osteocytes', text_zh: '骨細胞', text_es: 'Osteocitos', correct: false }
            ],
            explanation: 'Chromatophores expand and contract to expose or conceal pigment granules.'
          }
        },
        {
          id: 'c3-l2',
          number: 2,
          title: 'Speed Physics: Cheetahs & Falcons',
          title_zh: '速度力學：獵豹衝刺與遊隼俯衝',
          title_es: 'Física de la Velocidad: Guepardos y Halcones',
          summary: 'The biomechanics behind 60 mph land acceleration and 240 mph terminal dive velocity.',
          summary_zh: '揭秘時速100公里陸地起步加速與時速380公里高空俯衝重擊的生物力學。',
          summary_es: 'Biomecánica detrás de los 100 km/h en tierra y los 380 km/h en picado aéreo.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Cheetah_portrait.jpg/600px-Cheetah_portrait.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. The Flexible Spring Spine',
              heading_zh: '1. 如彈簧般的極限脊椎',
              heading_es: '1. Columna en Resorte',
              text: 'Cheetahs sprint using a flexible spine that flexes and extends like a massive steel spring, yielding a 25-foot stride! In the skies, Peregrine Falcons fold their wings into a teardrop bullet shape to dive at 240 mph.',
              text_zh: '獵豹奔跑時脊椎如彈簧般大幅弓曲與伸展，單一步幅長達 7.5 公尺！而在空中，遊隼將雙翼收縮呈水滴子彈形，以時速 380 公里俯衝重創獵物。',
              text_es: 'El guepardo usa su columna elástica como un resorte dando zancadas de 7 metros. El halcón peregrino se lanza en picado a 380 km/h.'
            }
          ],
          quiz: {
            question: 'What is the fastest animal in the entire world during its high-speed hunting dive?',
            question_zh: '在進行高空狩獵俯衝時，全世界速度最快的動物是什麼？',
            question_es: '¿Cuál es el animal más veloz del mundo durante su picado de caza?',
            options: [
              { text: 'Peregrine Falcon (240+ mph / 389 km/h)', text_zh: '遊隼 (時速超過 389 公里)', text_es: 'Halcón Peregrino (+380 km/h)', correct: true },
              { text: 'African Cheetah', text_zh: '非洲獵豹', text_es: 'Guepardo', correct: false },
              { text: 'Black Marlin', text_zh: '黑旗魚', text_es: 'Marlín Negro', correct: false }
            ],
            explanation: 'The Peregrine Falcon is the fastest animal on Earth, reaching over 240 mph during stoop dives.'
          }
        },
        {
          id: 'c3-l3',
          number: 3,
          title: 'Bio-Armor: Scales, Shells & Spines',
          title_zh: '生物裝甲：甲殼、骨板與棘刺防禦',
          title_es: 'Armaduras Biológicas: Escamas y Caparazones',
          summary: 'From pangolin keratin scales to porcupine quills and armadillo osteoderms.',
          summary_zh: '從穿山甲角質甲片、豪豬倒鉤硬刺到犰狳骨質硬甲。',
          summary_es: 'Desde escamas de pangolín hasta púas de puercoespín y corazas de armadillo.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Honey_badger.jpg/600px-Honey_badger.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Keratin Shielding',
              heading_zh: '1. 角質鎧甲盾牌',
              heading_es: '1. Escudos de Queratina',
              text: 'Pangolin scales are made of hardened keratin (the same protein as human fingernails). When threatened, the pangolin rolls into an impenetrable ball that even adult lions cannot bite through!',
              text_zh: '穿山甲的鱗甲由堅硬的角蛋白構成（與人類指甲相同蛋白質）。受威脅時捲曲為堅實球體，連成年雄獅的利齒也無法咬穿！',
              text_es: 'Las escamas de pangolín son de queratina dura. Al enrollarse en bola resiste mordeduras de leones.'
            }
          ],
          quiz: {
            question: 'What tough structural protein makes up the protective scales of pangolins and human fingernails?',
            question_zh: '構成穿山甲堅硬鱗甲與人類手指甲的強韌蛋白質結構是什麼？',
            question_es: '¿Qué proteína estructural forma las escamas protectoras del pangolín y las uñas humanas?',
            options: [
              { text: 'Keratin', text_zh: '角蛋白 (Keratin)', text_es: 'Queratina', correct: true },
              { text: 'Collagen', text_zh: '膠原蛋白', text_es: 'Colágeno', correct: false },
              { text: 'Hemoglobin', text_zh: '血紅素', text_es: 'Hemoglobina', correct: false }
            ],
            explanation: 'Keratin is the fibrous structural protein found in scales, claws, feathers, and horns.'
          }
        },
        {
          id: 'c3-l4',
          number: 4,
          title: 'Echolocation: Acoustic Vision in Darkness',
          title_zh: '回聲定位：以聲音看見世界的聲納之眼',
          title_es: 'Ecolocalización: Visión Acústica',
          summary: 'Bats and toothed whales emit high-frequency ultrasonic clicks to construct 3D maps of their surroundings.',
          summary_zh: '蝙蝠與齒鯨發射高頻超聲波脈衝，並根據回聲在腦海中構建出高精度的3D空間地圖。',
          summary_es: 'Murciélagos y ballenas emiten clics ultrasónicos para mapear en 3D su entorno en la oscuridad.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Barn_owl_scotland.jpg/600px-Barn_owl_scotland.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. The Biological Sonar Transducer',
              heading_zh: '1. 天然生物聲納傳導器',
              heading_es: '1. El Sonar Biológico',
              text: 'Dolphins produce ultrasonic clicks in nasal passages and focus the sound beam through a fatty forehead organ called the **melon**. Returning echoes vibrate the lower jaw, which transmits signals directly to the inner ear!',
              text_zh: '海豚在鼻道發出超聲波脈衝，透過前額脂肪器官**額隆 (Melon)** 聚焦音束。回聲震動下頜骨，直接將精準信號傳導至內耳！',
              text_es: 'Los delfines enfocan sonidos con el **melón** en su frente y reciben ecos a través de la mandíbula inferior.'
            }
          ],
          quiz: {
            question: 'What is the specialized fatty acoustic organ in a dolphin\'s forehead that focuses echolocation sound waves called?',
            question_zh: '海豚前額中用來聚焦發射回聲定位聲波的特化脂肪器官稱為什麼？',
            question_es: '¿Cómo se llama el órgano graso en la frente del delfín que enfoca los sonidos de ecolocalización?',
            options: [
              { text: 'The Melon', text_zh: '額隆 (Melon)', text_es: 'El Melón', correct: true },
              { text: 'The Blowhole', text_zh: '呼吸孔', text_es: 'Espiráculo', correct: false },
              { text: 'The Dorsal Fin', text_zh: '背鰭', text_es: 'Aleta dorsal', correct: false }
            ],
            explanation: 'The melon acts as an acoustic lens to focus emitted ultrasonic beam clicks.'
          }
        },
        {
          id: 'c3-l5',
          number: 5,
          title: 'Bioluminescence: Cold Living Light',
          title_zh: '生物發光：黑暗中的冷光奇蹟',
          title_es: 'Bioluminiscencia: Luz Viva Fría',
          summary: 'Chemical reactions between luciferin and luciferase that generate light with almost zero heat loss.',
          summary_zh: '螢光素與螢光素酶的化學反應，產生幾乎不散失熱量的冷光。',
          summary_es: 'Reacciones químicas entre luciferina y luciferasa que generan luz sin calor.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/600px-White_shark.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. 90%+ Efficiency',
              heading_zh: '1. 超過90%的極致發光效率',
              heading_es: '1. Alta Eficiencia',
              text: 'Unlike incandescent light bulbs that waste 90% of energy as heat, bioluminescent reactions are nearly 100% efficient "cold light". Deep-sea Anglerfish host symbiotic glowing bacteria in their hanging dorsal lure.',
              text_zh: '傳統白熾燈泡會將90%能量浪費為熱能，而生物發光是效率接近100%的「冷光」。深海鮟鱇魚在頭頂垂釣突起中飼養共生發光菌來誘捕獵物。',
              text_es: 'La bioluminiscencia es luz fría casi 100% eficiente producida por luciferina y luciferasa.'
            }
          ],
          quiz: {
            question: 'What two chemical components react inside glowing fireflies and deep-sea creatures to create bioluminescent light?',
            question_zh: '螢火蟲與深海發光生物體內哪兩種核心化學物質結合產生生物冷光？',
            question_es: '¿Qué dos sustancias químicas reaccionan para producir luz bioluminiscente?',
            options: [
              { text: 'Luciferin and Luciferase enzyme', text_zh: '螢光素 (Luciferin) 與 螢光素酶 (Luciferase)', text_es: 'Luciferina y enzima Luciferasa', correct: true },
              { text: 'Carbon and Nitrogen', text_zh: '碳與氮', text_es: 'Carbono y nitrógeno', correct: false },
              { text: 'Chlorophyll and Salt', text_zh: '葉綠素與食鹽', text_es: 'Clorofila y sal', correct: false }
            ],
            explanation: 'Luciferin oxidizes in the presence of the enzyme luciferase to emit light photons.'
          }
        },
        {
          id: 'c3-l6',
          number: 6,
          title: 'Extremophiles: Defying Biological Limits',
          title_zh: '極限生物：挑戰生命極限的奇蹟',
          title_es: 'Extremófilos: Desafiando Límites',
          summary: 'Tardigrades enduring outer space, wood frogs freezing solid, and camels walking 100 miles without water.',
          summary_zh: '能在太空真空存活的水熊蟲、冬天全身凍成冰棒的林蛙，以及能連續行走百里不喝水的駱駝。',
          summary_es: 'Tardígrados que sobreviven al vacío espacial y ranas de bosque que se congelan sólidas.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Agalychnis_callidryas_wildlife_sanctuary.jpg/600px-Agalychnis_callidryas_wildlife_sanctuary.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. The Cryptobiosis State',
              heading_zh: '1. 隱生狀態 (Cryptobiosis)',
              heading_es: '1. Criptobiosis',
              text: 'Microscopic **Tardigrades (Water Bears)** can survive boiling water, absolute zero (-273°C), crushing deep-ocean pressure, and outer space radiation by expelling 99% of body water and entering a glass-like suspended animation state!',
              text_zh: '微觀**水熊蟲 (Tardigrades)** 能承受沸水、絕對零度 (-273°C)、萬米深海高壓以及外太空輻射，關鍵在於排出體內99%水分並進入玻璃化的隱生假死狀態！',
              text_es: 'Los tardígrados sobreviven al espacio expulsando el 99% de su agua y entrando en criptobiosis.'
            }
          ],
          quiz: {
            question: 'What microscopic creature can survive the vacuum of space, absolute zero, and boiling temperatures by entering a cryptobiotic tun state?',
            question_zh: '哪種微觀生物能透過進入隱生假死狀態，在太空真空、極低溫與沸水中頑強生存？',
            question_es: '¿Qué criatura microscópica sobrevive al vacío del espacio y frío extremo en criptobiosis?',
            options: [
              { text: 'Tardigrade (Water Bear)', text_zh: '水熊蟲 (Tardigrade)', text_es: 'Tardígrado (Oso de agua)', correct: true },
              { text: 'House Fly', text_zh: '家蠅', text_es: 'Mosca común', correct: false },
              { text: 'Earthworm', text_zh: '蚯蚓', text_es: 'Lombriz de tierra', correct: false }
            ],
            explanation: 'Tardigrades can survive over a decade in cryptobiosis and reanimate when touched by water.'
          }
        }
      ]
    },

    // ------------------------------------------------------------------------
    // COURSE 4: OCEAN & MARINE LIFE (6 LESSONS)
    // ------------------------------------------------------------------------
    {
      id: 'course-4',
      number: 4,
      title: 'Ocean & Marine Life',
      title_zh: '海洋與深海奇境',
      title_es: 'Océanos y Vida Marina',
      desc: 'Dive from shallow sunlit coral reefs down into the midnight abyss: sharks, whales, bioluminescence, and cephalopod genius.',
      desc_zh: '從陽光充足的淺海珊瑚礁潛入幽暗午夜深淵：鯊魚、鯨類、深海巨怪與章魚智慧。',
      desc_es: 'Sumérgete desde arrecifes de coral hasta el abismo: tiburones, ballenas y calamares gigantes.',
      icon: '🌊',
      color: '#0284c7',
      lessons: [
        {
          id: 'c4-l1',
          number: 1,
          title: 'Ocean Depth Zones: Sunlight to Abyss',
          title_zh: '海洋深度層次：陽光層至無底海溝',
          title_es: 'Zonas Oceánicas: De la Superficie al Abismo',
          summary: 'Epipelagic, Mesopelagic, Bathypelagic, Abyssopelagic, and the Hadal trenches 36,000 feet down.',
          summary_zh: '表層透光帶、中層微光帶、半深海帶、深海帶以及深達萬米的超深淵海溝。',
          summary_es: 'Capas oceánicas: Epipelágica, Mesopelágica, Batipelágica y Fosas Hadales a 11,000 metros.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/600px-White_shark.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Light Extinction Depth',
              heading_zh: '1. 光線滅絕深度',
              heading_es: '1. Extinción de la Luz',
              text: 'Below 200 meters (660 ft), sunlight completely disappears into the Midnight Zone (Bathypelagic). Temperatures hover at 4°C, and pressure reaches 1,000 atmospheres in the Mariana Trench.',
              text_zh: '在水深200公尺以下，陽光完全消失，進入永夜的中深層與午夜帶。水溫接近4°C，而在馬里亞納海溝底部的壓力超過1,000個大氣壓！',
              text_es: 'Bajo los 200 m la luz solar desaparece. En la Fosa de las Marianas la presión supera 1,000 atmósferas.'
            }
          ],
          quiz: {
            question: 'Below what ocean depth does sunlight completely vanish, creating the pitch-black Midnight Zone?',
            question_zh: '在海洋多少公尺深度以下陽光會徹底消失，進入完全漆黑的深海帶？',
            question_es: '¿Bajo qué profundidad oceánica desaparece completamente la luz solar?',
            options: [
              { text: 'Around 200 meters (660 feet)', text_zh: '約 200 公尺深 (660 英尺)', text_es: 'Alrededor de 200 metros', correct: true },
              { text: '5 meters', text_zh: '5 公尺', text_es: '5 metros', correct: false },
              { text: '10,000 meters', text_zh: '10,000 公尺', text_es: '10,000 metros', correct: false }
            ],
            explanation: 'The photic zone where photosynthesis can occur extends down to a maximum of 200 meters.'
          }
        },
        {
          id: 'c4-l2',
          number: 2,
          title: 'Coral Reefs: Underwater Rainforests',
          title_zh: '珊瑚礁：繽紛的海底熱帶雨林',
          title_es: 'Arrecifes de Coral: Selvas Submarinas',
          summary: 'Corals are living animals that build massive calcium carbonate rock fortresses supporting 25% of all marine life.',
          summary_zh: '珊瑚是微小動物，能建造巨大的碳酸鈣堡壘，孕育全球25%的海洋生物。',
          summary_es: 'Los corales son animales que forman arrecifes de carbonato de calcio para el 25% de la fauna marina.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Agalychnis_callidryas_wildlife_sanctuary.jpg/600px-Agalychnis_callidryas_wildlife_sanctuary.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Animal, Plant, or Mineral?',
              heading_zh: '1. 是動物、植物還是礦物？',
              heading_es: '1. ¿Animal o Planta?',
              text: 'Corals are **animals** related to jellyfish! Thousands of tiny polyps share food and live symbiotically with photosynthetic micro-algae called **zooxanthellae** that provide oxygen and bright vibrant colors.',
              text_zh: '珊瑚是與水母近親的**動物**！成千上萬的微小珊瑚蟲彼此相連，並與共生藻（蟲黃藻）合作，共生藻進行光合作用提供養分與絢麗色彩。',
              text_es: 'Los corales son animales emparentados con medusas que conviven con algas microscópicas zooxantelas.'
            }
          ],
          quiz: {
            question: 'What type of living organism is a coral reef polyps colony?',
            question_zh: '構成珊瑚礁群體的珊瑚蟲在生物學上屬於什麼？',
            question_es: '¿Qué tipo de organismo vivo es un coral?',
            options: [
              { text: 'Animals (Invertebrates)', text_zh: '動物 (無脊椎動物)', text_es: 'Animales invertebrados', correct: true },
              { text: 'Inorganic rocks', text_zh: '無生命岩石', text_es: 'Rocas inorgánicas', correct: false },
              { text: 'Flowering plants', text_zh: '開花植物', text_es: 'Plantas con flores', correct: false }
            ],
            explanation: 'Corals are sessile marine invertebrates in the phylum Cnidaria.'
          }
        },
        {
          id: 'c4-l3',
          number: 3,
          title: 'Whales & Giants: Life on a Colossal Scale',
          title_zh: '鯨魚與海洋泰坦：地球史上最龐大的生命',
          title_es: 'Ballenas y Gigantes Oceánicos',
          summary: 'The Blue Whale is larger than any dinosaur that ever lived, with a heart the size of a golf cart.',
          summary_zh: '藍鯨的體型超越地球史上所有恐龍，其心臟如同一輛高爾夫球車般巨大。',
          summary_es: 'La ballena azul supera a cualquier dinosaurio con un corazón del tamaño de un carrito de golf.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/600px-Killerwhales_jumping.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. The Largest Animal in Earth\'s History',
              heading_zh: '1. 地球歷史上的最大霸主',
              heading_es: '1. El Animal Más Grande de la Historia',
              text: 'Reaching 100 feet in length and 200 tons in weight, the Blue Whale filters 4 tons of tiny krill per day through its fringed keratin baleen plates. Its tongue alone weighs as much as an entire adult elephant!',
              text_zh: '藍鯨體長達 30 公尺、重達 200 噸，每天透過角質鯨鬚板過濾 4 噸微小磷蝦。單單牠的一條舌頭就重如一頭成年大象！',
              text_es: 'Con 30 metros y 200 toneladas, la ballena azul filtra 4 toneladas de krill al día. Su lengua pesa como un elefante.'
            }
          ],
          quiz: {
            question: 'What is the largest living animal in the entire history of planet Earth?',
            question_zh: '地球有生命歷史以來體型最龐大的動物是什麼？',
            question_es: '¿Cuál es el animal más grande en toda la historia del planeta Tierra?',
            options: [
              { text: 'Blue Whale (Balaenoptera musculus)', text_zh: '藍鯨 (Blue Whale)', text_es: 'Ballena Azul', correct: true },
              { text: 'Tyrannosaurus Rex', text_zh: '雷克斯暴龍 (T-Rex)', text_es: 'Tiranosaurio Rex', correct: false },
              { text: 'Megalodon Shark', text_zh: '巨齒鯊 (Megalodon)', text_es: 'Megalodón', correct: false }
            ],
            explanation: 'The Blue Whale is larger than even the biggest sauropod dinosaurs like Argentinosaurus.'
          }
        },
        {
          id: 'c4-l4',
          number: 4,
          title: 'Sharks: 400 Million Years of Apex Design',
          title_zh: '鯊魚：四億年演化未曾淘汰的海洋霸主',
          title_es: 'Tiburones: 400 Millones de Años de Perfección',
          summary: 'Older than trees and dinosaurs, sharks possess cartilaginous skeletons and endless conveyor belts of teeth.',
          summary_zh: '比樹木與恐龍更古老的存在，鯊魚擁有輕盈軟骨骨骼與宛如輸送帶般終生替換的鋸齒利牙。',
          summary_es: 'Más antiguos que árboles y dinosaurios, con esqueletos cartilaginosos y dientes en cinta transportadora.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/600px-White_shark.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Cartilage Instead of Heavy Bone',
              heading_zh: '1. 彈性輕盈的軟骨骨架',
              heading_es: '1. Cartílago en Vez de Hueso',
              text: 'Sharks have zero true bones: their skeletons are 100% flexible cartilage. Their skin is covered in tooth-like dermal denticles that channel water turbulence, making them nearly silent underwater.',
              text_zh: '鯊魚全身沒有一塊硬骨：骨架完全由彈性輕盈的軟骨構成。皮膚覆蓋著如牙齒般的盾鱗，能大幅減少水流亂流阻力並實現無聲滑行。',
              text_es: 'Los tiburones no tienen huesos; su esqueleto es de cartílago flexible y piel con dentículos dérmicos hidrodinámicos.'
            }
          ],
          quiz: {
            question: 'What material makes up the entire skeletal framework of sharks and rays instead of hard bone?',
            question_zh: '鯊魚與魟魚全身骨骼完全由何種輕盈彈性材料構成，而非硬骨？',
            question_es: '¿De qué material está hecho el esqueleto de los tiburones en lugar de hueso duro?',
            options: [
              { text: 'Flexible Cartilage', text_zh: '彈性軟骨 (Cartilage)', text_es: 'Cartílago flexible', correct: true },
              { text: 'Iron and calcium', text_zh: '鐵與高密度鈣質', text_es: 'Hierro y calcio', correct: false },
              { text: 'Chitin plastic', text_zh: '幾丁質塑料', text_es: 'Quitina', correct: false }
            ],
            explanation: 'Sharks are cartilaginous fish (Chondrichthyes) with skeletons made entirely of cartilage.'
          }
        },
        {
          id: 'c4-l5',
          number: 5,
          title: 'Cephalopod Genius: Octopuses & Cuttlefish',
          title_zh: '頭足綱的異星智慧：章魚與烏賊',
          title_es: 'Cefalópodos: La Inteligencia Alienígena del Mar',
          summary: 'Three hearts, blue copper blood, 9 brains, and advanced tool use without any bones.',
          summary_zh: '三顆心臟、藍色銅血、九個神經中樞以及完全無骨卻擅長使用工具的高級智慧。',
          summary_es: 'Tres corazones, sangre azul, nueve cerebros y uso de herramientas sin huesos.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Agalychnis_callidryas_wildlife_sanctuary.jpg/600px-Agalychnis_callidryas_wildlife_sanctuary.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Distributed Intelligence',
              heading_zh: '1. 分散式智慧系統',
              heading_es: '1. Inteligencia Distribuida',
              text: 'Two-thirds of an octopus\'s neurons are located in its arms! Each of its 8 arms can taste, touch, and solve mechanical puzzles independently while the central donut-shaped brain plans strategy.',
              text_zh: '章魚體內有三分之二的神經元分布在八條腕足中！每條腕足都能獨立品嚐、感知並解開機械難題，而中央甜甜圈形大腦則專注於戰略思考。',
              text_es: 'Dos tercios de las neuronas del pulpo están en sus brazos, permitiéndoles resolver acertijos de forma independiente.'
            }
          ],
          quiz: {
            question: 'How many hearts does an octopus possess to pump oxygen-rich blue blood through its body?',
            question_zh: '章魚體內共有幾顆心臟負責驅動含有血藍蛋白的藍色血液循環？',
            question_es: '¿Cuántos corazones tiene un pulpo para bombear sangre azul?',
            options: [
              { text: '3 Hearts', text_zh: '3 顆心臟', text_es: '3 corazones', correct: true },
              { text: '1 Heart', text_zh: '1 顆心臟', text_es: '1 corazón', correct: false },
              { text: '8 Hearts', text_zh: '8 顆心臟', text_es: '8 corazones', correct: false }
            ],
            explanation: 'Octopuses have two branchial hearts pumping blood through the gills and one systemic heart pumping to the body.'
          }
        },
        {
          id: 'c4-l6',
          number: 6,
          title: 'Hydrothermal Vents: Chemosynthesis',
          title_zh: '深海熱泉生態：無需陽光的化學合成生命',
          title_es: 'Respiraderos Hidrotermales: Quimiosíntesis',
          summary: 'Life thriving in 400°C mineral-rich black smoker water where life may have originated on Earth.',
          summary_zh: '在400°C高溫富含礦物質的黑煙囪熱泉周圍，生命以硫化氫化學合成繁衍，這可能是地球最初生命的發源地。',
          summary_es: 'Vida a 400°C en fumarolas negras usando sulfuro de hidrógeno en lugar de luz solar.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/White_shark.jpg/600px-White_shark.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Life Powered by Sulfur Instead of Sun',
              heading_zh: '1. 以硫化物質取代陽光的化學合成',
              heading_es: '1. Vida a Base de Azufre',
              text: 'Hydrothermal vents spew boiling super-heated water loaded with hydrogen sulfide. Giant 8-foot tubeworms have no mouth or gut; they house billions of chemosynthetic bacteria that transform toxic sulfur into life-sustaining energy!',
              text_zh: '海底熱泉噴湧出高達數百度、富含硫化氫的超熱水。長達 2.4 公尺的巨型管蟲完全沒有嘴巴與消化道，全靠體內數百億化學合成細菌將有毒硫化物轉化為生命能量！',
              text_es: 'Gusanos tubulares gigantes sin boca ni estómago albergan bacterias que convierten sulfuro tóxico en alimento.'
            }
          ],
          quiz: {
            question: 'What process enables deep-sea hydrothermal vent organisms to produce energy in complete darkness without sunlight?',
            question_zh: '深海熱泉生態系統中，生物在完全沒有陽光照射下製造養分的過程稱為什麼？',
            question_es: '¿Qué proceso permite a los organismos de fumarolas hidrotermales producir energía sin sol?',
            options: [
              { text: 'Chemosynthesis', text_zh: '化學合成作用 (Chemosynthesis)', text_es: 'Quimiosíntesis', correct: true },
              { text: 'Photosynthesis', text_zh: '光合作用 (Photosynthesis)', text_es: 'Fotosíntesis', correct: false },
              { text: 'Atmospheric combustion', text_zh: '大氣燃燒', text_es: 'Combustión', correct: false }
            ],
            explanation: 'Chemosynthesis uses chemical energy released from inorganic molecules like hydrogen sulfide instead of solar photons.'
          }
        }
      ]
    },

    // ------------------------------------------------------------------------
    // COURSE 5: BIRDS & THE SKIES (6 LESSONS)
    // ------------------------------------------------------------------------
    {
      id: 'course-5',
      number: 5,
      title: 'Birds & The Skies',
      title_zh: '飛鳥與天空：羽翼與長空飛行',
      title_es: 'Aves y los Cielos: Vuelo y Migración',
      desc: 'Master the physics of aerodynamic flight, hollow pneumatic bone structures, world-record non-stop migrations, and song dialects.',
      desc_zh: '掌握空氣動力飛行力學、中空氣腔骨骼構造、打破世界紀錄的跨洋不著陸遷徙與複雜鳴叫方言。',
      desc_es: 'Domina la física del vuelo, huesos neumáticos, migraciones transoceánicas y cantos de aves.',
      icon: '🦅',
      color: '#8b5cf6',
      lessons: [
        {
          id: 'c5-l1',
          number: 1,
          title: 'The Physics of Flight: Lift & Pneumatic Bones',
          title_zh: '飛行的物理力學：升力與氣腔中空骨',
          title_es: 'Física del Vuelo: Sustentación y Huesos Huecos',
          summary: 'Bernoulli\'s principle airfoils combined with internal criss-crossing bone trusses produce ultralight strength.',
          summary_zh: '白努利翼型升力搭配內部交叉桁架的中空骨骼，兼具極致輕盈與高結構強度。',
          summary_es: 'Alas aerodinámicas combinadas con huesos huecos y vigas internas ultraligeras.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/About_to_Launch_%2826079720721%29.jpg/600px-About_to_Launch_%2826079720721%29.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Pneumatic Skeletal Engineering',
              heading_zh: '1. 氣腔骨骼的精妙工程學',
              heading_es: '1. Huesos Neumáticos',
              text: 'Bird bones are hollow and honeycombed with internal air sacs connected directly to their lungs! A bald eagle with an 8-foot wingspan has a skeleton that weighs less than its feathers (under 10 ounces)!',
              text_zh: '鳥類的骨骼內部中空，充滿與肺部氣囊相連的蜂巢狀氣腔結構！一隻翼展超過 2 公尺的白頭海鵰，其全身骨骼重量甚至比一身羽毛還要輕（不到 300 公克）！',
              text_es: 'Los huesos de las aves son huecos con sacos de aire. El esqueleto de un águila pesa menos que sus plumas.'
            }
          ],
          quiz: {
            question: 'Why are bird skeletons remarkably lightweight yet strong enough to withstand high-G flight forces?',
            question_zh: '為什麼鳥類的骨骼極為輕盈，卻又足以承受高重力加速度飛行衝擊？',
            question_es: '¿Por qué los huesos de las aves son tan ligeros pero resistentes?',
            options: [
              { text: 'They are hollow pneumatic bones reinforced with internal strut honeycombs', text_zh: '骨骼內部為中空氣腔，並由蜂巢狀內部支撐桁架加固', text_es: 'Son huesos neumáticos huecos reforzados con vigas internas', correct: true },
              { text: 'They are made of plant wood', text_zh: '骨骼是由植物木材構成', text_es: 'Son de madera', correct: false },
              { text: 'Birds have no bones in their wings', text_zh: '鳥類翅膀內完全沒有骨頭', text_es: 'No tienen huesos en las alas', correct: false }
            ],
            explanation: 'Pneumatic bones reduce body mass while retaining high tensile strength.'
          }
        },
        {
          id: 'c5-l2',
          number: 2,
          title: 'Apex Raptors: Eagles, Hawks & Owls',
          title_zh: '頂尖猛禽：鵰、鷹與貓頭鷹的致命爪擊',
          title_es: 'Rapaces Apex: Águilas, Halcones y Búhos',
          summary: 'Talon crushing forces exceeding 400 PSI and silent flight combs that eliminate acoustic noise.',
          summary_zh: '雙爪握力超越400 PSI，以及羽毛邊緣微鋸齒消除所有飛行噪音的無聲伏擊。',
          summary_es: 'Fuerza de garras superior a 400 PSI y plumas serradas para un vuelo 100% silencioso.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Barn_owl_scotland.jpg/600px-Barn_owl_scotland.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. The Silent Flight Mechanism',
              heading_zh: '1. 貓頭鷹的靜音飛行機制',
              heading_es: '1. El Silencio del Búho',
              text: 'Barn Owls hunt in near-silent glide. Their primary feathers feature comb-like serrations on the leading edge that break air turbulence into micro-vortices, making their flight 100% inaudible to mice!',
              text_zh: '倉鴞在滑翔時幾乎完全靜音。其初級飛羽前緣擁有梳齒狀微鋸齒，能將空氣紊流切割為微小渦流，讓老鼠完全聽不到任何飛行風聲！',
              text_es: 'Las lechuzas tienen bordes serrados en las plumas que disipan turbulencias, haciéndolas inaudibles para presas.'
            }
          ],
          quiz: {
            question: 'What feather adaptation enables owls to fly completely silently when swooping down on prey?',
            question_zh: '哪種羽毛結構演化使貓頭鷹在俯衝捕捉獵物時能夠做到完全靜音飛行？',
            question_es: '¿Qué adaptación en las plumas permite a los búhos volar en silencio absoluto?',
            options: [
              { text: 'Comb-like serrations that break air turbulence into micro-eddies', text_zh: '羽毛邊緣梳狀鋸齒，將空氣紊流分解為微渦流', text_es: 'Bordes serrados que rompen la turbulencia', correct: true },
              { text: 'Coating of slippery waterproof oil', text_zh: '表面塗有光滑防水油脂', text_es: 'Aceite resbaladizo', correct: false },
              { text: 'Using no feathers at all', text_zh: '翅膀完全不長羽毛', text_es: 'Alas sin plumas', correct: false }
            ],
            explanation: 'Serrated feather comb margins break down air sound waves into frequencies undetectable by small mammals.'
          }
        },
        {
          id: 'c5-l3',
          number: 3,
          title: 'World Record Non-Stop Migrators',
          title_zh: '長途遠航世界紀錄：候鳥的跨洋馬拉松',
          title_es: 'Récords Mundiales de Migración sin Parar',
          summary: 'Bar-tailed Godwits flying 7,000 miles non-stop across the Pacific without eating, drinking, or sleeping!',
          summary_zh: '斑尾鷸連續11天不吃、不喝、不睡跨越太平洋連續飛行11,000公里創下世界紀錄！',
          summary_es: 'Agujas colipintas vuelan 11,000 km sin parar sobre el Pacífico sin comer ni dormir.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Limosa_lapponica_in_Japan.jpg/600px-Limosa_lapponica_in_Japan.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. 11 Days in the Air',
              heading_zh: '1. 11天連續滯空不著陸',
              heading_es: '1. 11 Días Sin Aterrizar',
              text: 'The Bar-tailed Godwit flies non-stop from Alaska across the open Pacific to New Zealand (7,100 miles) in 11 days. Before departure, it shrinks its digestive organs by 50% to make room for concentrated fat fuel!',
              text_zh: '斑尾鷸在11天內自阿拉斯加橫跨太平洋不著陸直飛紐西蘭（長達11,000公里）。啟程前，牠會將消化器官縮小50%，騰出空間儲存濃縮脂肪燃料！',
              text_es: 'La aguja colipinta vuela 11,000 km sin parar de Alaska a Nueva Zelanda reduciendo sus órganos internos.'
            }
          ],
          quiz: {
            question: 'What shorebird holds the world record for the longest non-stop migratory flight (over 7,000 miles across the Pacific)?',
            question_zh: '哪種水鳥保持著世界上最長不著陸連續飛行遷徙紀錄（橫跨太平洋超過11,000公里）？',
            question_es: '¿Qué ave tiene el récord de vuelo migratorio continuo más largo (más de 11,000 km sin parar)?',
            options: [
              { text: 'Bar-tailed Godwit (Limosa lapponica)', text_zh: '斑尾鷸 (Bar-tailed Godwit)', text_es: 'Aguja Colipinta', correct: true },
              { text: 'Pigeon', text_zh: '家鴿', text_es: 'Paloma', correct: false },
              { text: 'House Sparrow', text_zh: '麻雀', text_es: 'Gorrión común', correct: false }
            ],
            explanation: 'Satellite tags tracked a godwit flying 7,145 miles non-stop across the Pacific in 224 hours.'
          }
        },
        {
          id: 'c5-l4',
          number: 4,
          title: 'Flightless Wonders: Penguins & Ostriches',
          title_zh: '不飛之鳥的奇蹟：企鵝潛泳與鴕鳥陸馳',
          title_es: 'Aves No Voladoras: Pingüinos y Avestruces',
          summary: 'Trading aerial flight for 43 mph terrestrial running and 1,700-foot deep-sea Antarctic diving.',
          summary_zh: '放棄空中飛行，換取時速70公里的地面奔馳與深潛500公尺的南極潛水傳奇。',
          summary_es: 'Cambiar el cielo por carreras a 70 km/h y buceos de 500 metros en la Antártida.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Polar_Bear_-_Alaska_%28cropped%29.jpg/600px-Polar_Bear_-_Alaska_%28cropped%29.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Underwater "Flying"',
              heading_zh: '1. 在深海中「翱翔」',
              heading_es: '1. Volando Bajo el Agua',
              text: 'Emperor Penguins have solid heavy bones instead of hollow bones to help them dive 1,700 feet deep. Their stiff flippers "fly" through dense water at 15 mph to catch squid in freezing waters.',
              text_zh: '皇帝企鵝擁有實心厚重的骨骼而非中空骨，能協助牠們下潛至500公尺深海。其堅硬如槳的鰭狀肢在稠密的海水中以時速25公里「飛行」捕食烏賊。',
              text_es: 'Los pingüinos emperador tienen huesos sólidos para bucear a 500 m y aletas rígidas para nadar a gran velocidad.'
            }
          ],
          quiz: {
            question: 'What is unique about the bones of penguins compared to flying birds?',
            question_zh: '相較於會飛的鳥類，企鵝的骨骼構造有何獨特之處？',
            question_es: '¿En qué se diferencian los huesos de los pingüinos de las aves voladoras?',
            options: [
              { text: 'They are solid and dense to help reduce buoyancy for deep diving', text_zh: '骨骼為實心且緻密，以減少浮力協助深海下潛', text_es: 'Son densos y sólidos para reducir flotabilidad al bucear', correct: true },
              { text: 'They are made of flexible sponge', text_zh: '骨骼是由柔軟海綿構成', text_es: 'Son de esponja', correct: false },
              { text: 'They are filled with helium gas', text_zh: '骨骼內部充滿氦氣', text_es: 'Tienen helio', correct: false }
            ],
            explanation: 'Heavy solid bones act as natural ballast weights for efficient deep diving.'
          }
        },
        {
          id: 'c5-l5',
          number: 5,
          title: 'Avian Intelligence & Vocal Dialects',
          title_zh: '鳥類大腦智慧與發聲方言',
          title_es: 'Inteligencia Aviar y Dialectos Vocales',
          summary: 'Crows manufacture multi-step tools, and the syrinx produces two harmonized musical notes at once!',
          summary_zh: '烏鴉懂得製作多步驟工具，鳴管器官能同時唱出兩組和聲！',
          summary_es: 'Los cuervos fabrican herramientas y la siringe emite dos notas armónicas simultáneas.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Barn_owl_scotland.jpg/600px-Barn_owl_scotland.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. The Syrinx: Nature\'s Synthesizer',
              heading_zh: '1. 鳴管：大自然的合成器',
              heading_es: '1. La Siringe',
              text: 'Birds don\'t have vocal cords in their throat like humans; they possess a **syrinx** located deep at the bronchial junction. By controlling independent membranes on the left and right sides, a songbird can sing two independent melodies simultaneously!',
              text_zh: '鳥類的喉部沒有聲帶，而是在氣管與支氣管交會處擁有**鳴管 (Syrinx)**。透過獨立控制左右兩側鳴膜，鳴禽能同時唱出兩支獨立互補的和聲旋律！',
              text_es: 'Las aves usan la **siringe** en la bifurcación bronquial, permitiéndoles cantar dos notas diferentes a la vez.'
            }
          ],
          quiz: {
            question: 'What specialized vocal organ at the base of a bird\'s trachea allows it to sing two musical notes at the same time?',
            question_zh: '位於鳥類氣管分支基部的特化發聲器官是什麼，能使其同時唱出兩個和聲音符？',
            question_es: '¿Qué órgano vocal en la base de la tráquea permite a las aves cantar dos notas a la vez?',
            options: [
              { text: 'The Syrinx', text_zh: '鳴管 (Syrinx)', text_es: 'La Siringe', correct: true },
              { text: 'The Larynx', text_zh: '喉頭', text_es: 'La Laringe', correct: false },
              { text: 'The Gizzard', text_zh: '砂囊', text_es: 'Molleja', correct: false }
            ],
            explanation: 'The syrinx operates with dual air passages allowing simultaneous dual-tone acoustic harmonizing.'
          }
        },
        {
          id: 'c5-l6',
          number: 6,
          title: 'Beak Architecture & Evolution',
          title_zh: '鳥喙建築學與天擇演化',
          title_es: 'Arquitectura del Pico y Selección Natural',
          summary: 'From hummingbird nectar straws to pelican dip nets and parrot nutcracker jaws.',
          summary_zh: '從蜂鳥如吸管般的細長喙、鵜鶘如漁網的喉囊，到鸚鵡宛如胡桃鉗的破殼利喙。',
          summary_es: 'De picos tubulares de colibríes a bolsas de pelícanos y cascanueces de loros.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/About_to_Launch_%2826079720721%29.jpg/600px-About_to_Launch_%2826079720721%29.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Adaptive Radiation',
              heading_zh: '1. 輻射適應演化',
              heading_es: '1. Radiación Adaptativa',
              text: 'Charles Darwin discovered that Galapagos finches evolved radically distinct beaks from a single ancestor based on available food: heavy crushing beaks for hard seeds, slender probes for cactus nectar, and sharp tweezers for insects.',
              text_zh: '達爾文發現加拉巴哥群島的雀鳥自單一共同祖先演化而來，隨食物來源不同分化出迥異的喙型：粗壯堅厚用以壓碎硬種子、細長探針吸食仙人掌蜜、如鑷子般尖銳夾取昆蟲。',
              text_es: 'Los pinzones de Galápagos evolucionaron picos variados a partir de un ancestro común según su alimento.'
            }
          ],
          quiz: {
            question: 'What famous group of birds on the Galapagos Islands demonstrated adaptive beak evolution to Charles Darwin?',
            question_zh: '達爾文在加拉巴哥群島上觀察到的哪群著名鳥類，向世人展示了鳥喙的輻射適應演化？',
            question_es: '¿Qué grupo famoso de aves en las Islas Galápagos demostró la evolución adaptativa a Darwin?',
            options: [
              { text: 'Darwin\'s Finches', text_zh: '達爾文雀 (Darwin\'s Finches)', text_es: 'Pinzones de Darwin', correct: true },
              { text: 'Arctic Terns', text_zh: '北極燕鷗', text_es: 'Charranes árticos', correct: false },
              { text: 'Barn Owls', text_zh: '倉鴞', text_es: 'Lechuzas comunes', correct: false }
            ],
            explanation: 'The adaptive radiation of Darwin\'s finch beaks provided crucial evidence for natural selection.'
          }
        }
      ]
    },

    // ------------------------------------------------------------------------
    // COURSE 6: REPTILES, AMPHIBIANS & INSECTS (6 LESSONS)
    // ------------------------------------------------------------------------
    {
      id: 'course-6',
      number: 6,
      title: 'Reptiles, Amphibians & Insects',
      title_zh: '爬蟲、兩棲與昆蟲：冷血大師與變態奇蹟',
      title_es: 'Reptiles, Anfibios e Insectos',
      desc: 'Explore ectothermic thermodynamics, amphibian metamorphosis, jaw disarticulation, and insect super-colonies.',
      desc_zh: '探索變溫動物熱力學、兩棲完全變態、蛇類下頜解鎖吞嚥與昆蟲超級社會。',
      desc_es: 'Explora ectotermia, metamorfosis de anfibios, mandíbulas de serpientes y supercolonias.',
      icon: '🦎',
      color: '#14b8a6',
      lessons: [
        {
          id: 'c6-l1',
          number: 1,
          title: 'The Ectotherm Blueprint: Solar Power',
          title_zh: '變溫動物藍圖：以太陽能驅動生命',
          title_es: 'El Modelo Ectotermo: Energía Solar',
          summary: 'Cold-blooded animals require 90% less food calories than warm-blooded mammals.',
          summary_zh: '冷血動物消耗的能量卡路里比同體型的恆溫哺乳動物少90%，生存效率極高。',
          summary_es: 'Los animales de sangre fría necesitan 90% menos calorías que los mamíferos.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Crotalus_atrox_02.jpg/600px-Crotalus_atrox_02.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Solar Basking Efficiency',
              heading_zh: '1. 日光浴的能量效率',
              heading_es: '1. Eficiencia del Asoleamiento',
              text: 'Reptiles don\'t burn internal food calories to keep their bodies at 37°C. By basking on morning rocks and hiding in shade at noon, an alligator can survive a whole year on just a few large meals!',
              text_zh: '爬行動物不需要燃燒昂貴的體內食物卡路里來維持37°C恆溫。透過清晨在岩石上曬太陽暖身、正午躲入陰涼處，一條短吻鱷一整年只需吃幾頓大餐即可存活！',
              text_es: 'Los reptiles no queman comida para generar calor; tomando el sol un cocodrilo puede vivir un año entero comiendo poco.'
            }
          ],
          quiz: {
            question: 'Why can cold-blooded reptiles survive months without eating compared to mammals of the same size?',
            question_zh: '相較於同等體型的恆溫哺乳動物，為什麼變溫爬行動物能數月不吃東西依然存活？',
            question_es: '¿Por qué los reptiles de sangre fría pueden sobrevivir meses sin comer en comparación con mamíferos?',
            options: [
              { text: 'They don\'t burn calories to maintain a constant internal body temperature', text_zh: '牠們不消耗體內卡路里來維持恆定體溫，代謝能耗極低', text_es: 'No gastan calorías en mantener calor corporal constante', correct: true },
              { text: 'They photosynthesize sunlight like trees', text_zh: '牠們像樹木一樣進行光合作用', text_es: 'Hacen fotosíntesis', correct: false },
              { text: 'They are made of stone', text_zh: '牠們的身體是由石頭構成', text_es: 'Son de piedra', correct: false }
            ],
            explanation: 'Ectotherms rely on ambient environmental heat, reducing metabolic maintenance costs by 90%.'
          }
        },
        {
          id: 'c6-l2',
          number: 2,
          title: 'Amphibian Metamorphosis: Dual Life',
          title_zh: '兩棲變態發育：水陸雙棲的生命交響',
          title_es: 'Metamorfosis de Anfibios: Doble Vida',
          summary: 'From gilled aquatic herbivores to four-legged lung-breathing terrestrial insect hunters.',
          summary_zh: '從用鰓呼吸的水生草食蝌蚪，徹底重塑為四肢發達、用肺呼吸的陸地食肉獵手。',
          summary_es: 'De renacuajos acuáticos con branquias a ranas carnívoras con pulmones.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Agalychnis_callidryas_wildlife_sanctuary.jpg/600px-Agalychnis_callidryas_wildlife_sanctuary.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Total Anatomical Reconstruction',
              heading_zh: '1. 全身解剖構造的徹底重構',
              heading_es: '1. Reconstrucción Total',
              text: 'During metamorphosis triggered by thyroid hormones, the tadpole reabsorbs its tail, dissolves its gills, grows legs, transforms its coiled vegetarian intestine into a short carnivorous stomach, and develops lungs and eyelids!',
              text_zh: '在甲狀腺素驅動下，蝌蚪吸收尾部細胞、溶解外鰓、生出強健四肢，將長卷草食腸道改造成短小的肉食胃袋，並長出肺部與活動眼瞼！',
              text_es: 'En la metamorfosis, el renacuajo reabsorbe la cola, pierde branquias, crea patas y transforma su intestino.'
            }
          ],
          quiz: {
            question: 'What hormone triggers the radical anatomical metamorphosis of tadpoles into adult frogs?',
            question_zh: '哪種荷爾蒙主導了蝌蚪轉變為成年青蛙的徹底全身變態發育？',
            question_es: '¿Qué hormona desencadena la metamorfosis de renacuajo a rana?',
            options: [
              { text: 'Thyroid hormones (Thyroxine)', text_zh: '甲狀腺素 (Thyroxine)', text_es: 'Hormonas tiroideas (Tiroxina)', correct: true },
              { text: 'Insulin', text_zh: '胰島素', text_es: 'Insulina', correct: false },
              { text: 'Chlorophyll', text_zh: '葉綠素', text_es: 'Clorofila', correct: false }
            ],
            explanation: 'Thyroid hormone surges orchestrate tissue apoptosis (tail reabsorption) and organogenesis (limbs/lungs).'
          }
        },
        {
          id: 'c6-l3',
          number: 3,
          title: 'Serpents: Unhinged Jaws & Locomotion',
          title_zh: '蛇類奧秘：下頜靈活解鎖與無足游走',
          title_es: 'Serpientes: Mandíbulas Elásticas y Movimiento',
          summary: 'Elastic ligaments allow snakes to swallow meals three times larger than their head diameter.',
          summary_zh: '彈性韌帶使蛇類能吞下比自身頭部直徑大三倍的整隻獵物。',
          summary_es: 'Ligamentos elásticos permiten tragar presas tres veces más anchas que su cabeza.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Crotalus_atrox_02.jpg/600px-Crotalus_atrox_02.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Flexible Ligaments, Not Dislocated Bones',
              heading_zh: '1. 彈性韌帶鉸鏈，而非骨折脫臼',
              heading_es: '1. Ligamentos Elásticos',
              text: 'Myth busted: snakes do not "dislocate" their jaws! Instead, their lower jawbones are not fused at the chin but connected by elastic muscle ligaments, moving each side independently to walk meals into the throat.',
              text_zh: '破解迷思：蛇並不是把下巴「脫臼」！而是下頜骨前緣並未骨化癒合，由彈性韌帶連接，能左右交替交錯滑動，將整隻獵物「漫步」吞入喉部深處。',
              text_es: 'Las mandíbulas de serpiente no se dislocan: están unidas por ligamentos elásticos que se expanden.'
            }
          ],
          quiz: {
            question: 'How are the lower jawbones of snakes connected at the chin to swallow large prey whole?',
            question_zh: '蛇類下頜骨在下巴前端是如何連接的，從而能生吞巨大的整隻獵物？',
            question_es: '¿Cómo están unidas las mandíbulas de las serpientes en la barbilla para tragar presas grandes?',
            options: [
              { text: 'By stretchable elastic muscle ligaments (not fused bone)', text_zh: '由具備超強伸縮性的彈性韌帶連接 (並非癒合硬骨)', text_es: 'Por ligamentos elásticos estirables', correct: true },
              { text: 'Welded solid like human jaws', text_zh: '像人類下頜骨一樣焊死癒合', text_es: 'Fusionadas en hueso sólido', correct: false },
              { text: 'They detach and fall off completely', text_zh: '進食時骨骼完全掉落分離', text_es: 'Se caen por completo', correct: false }
            ],
            explanation: 'Elastic ligaments allow both halves of the lower jaw to spread widely apart.'
          }
        },
        {
          id: 'c6-l4',
          number: 4,
          title: 'Primeval Titans: Crocodilians & Tortoises',
          title_zh: '遠古活化石：鱷類與陸龜的生存傳奇',
          title_es: 'Titanes Primigenios: Cocodrilos y Tortugas',
          summary: 'Living alongside T-Rex and surviving the asteroid impact that wiped out the dinosaurs.',
          summary_zh: '曾與暴龍並肩生活，並在毀滅恐龍的隕石大滅絕浩劫中頑強存活至今。',
          summary_es: 'Convivieron con el T-Rex y sobrevivieron al asteroide que extinguió a los dinosaurios.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Saltwater_Crocodile_at_Australia_Zoo.jpg/600px-Saltwater_Crocodile_at_Australia_Zoo.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Asteroid Survivors',
              heading_zh: '1. 浩劫餘生的史前贏家',
              heading_es: '1. Supervivientes del Asteroide',
              text: 'When the meteor struck 66 million years ago, giant dinosaurs starved. Crocodiles survived because they were semi-aquatic ectotherms that could slow their metabolism and scavenge in murky river mud without eating for two years!',
              text_zh: '6600萬年前小行星撞擊地球時，龐大的陸生恐龍相繼飢荒滅絕。鱷魚之所以倖存，是因為牠們是半水生變溫動物，能隱伏於河流泥沼中降低代謝，整整兩年不吃任何東西！',
              text_es: 'Los cocodrilos sobrevivieron al asteroide bajando su metabolismo en el agua sin comer por años.'
            }
          ],
          quiz: {
            question: 'Why were crocodilians able to survive the catastrophic asteroid impact 66 million years ago while large land dinosaurs perished?',
            question_zh: '為什麼鱷類能在6600萬年前毀滅陸地恐龍的隕石大浩劫中存活下來？',
            question_es: '¿Por qué sobrevivieron los cocodrilos al asteroide mientras los dinosaurios murieron?',
            options: [
              { text: 'They had low ectothermic metabolic needs and shelter in aquatic riverbed mud', text_zh: '牠們代謝需求極低且能隱蔽於水系泥沼底層避難', text_es: 'Bajo consumo metabólico y refugio en el agua y lodo', correct: true },
              { text: 'They flew into outer space', text_zh: '牠們飛到了外太空避難', text_es: 'Volaron al espacio', correct: false },
              { text: 'They were immune to all temperatures', text_zh: '牠們完全對任何溫度免疫', text_es: 'Eran inmunes a todo', correct: false }
            ],
            explanation: 'Semi-aquatic freshwater habitats provided buffer zones against firestorms and nuclear winter.'
          }
        },
        {
          id: 'c6-l5',
          number: 5,
          title: 'Insect Super-Colonies: Eusocial Civilizations',
          title_zh: '昆蟲超級社會：真社會性文明體系',
          title_es: 'Supercolonias de Insectos: Sociedades Eusociales',
          summary: 'Leafcutter ants cultivate underground fungal agriculture, and Argentine ant mega-colonies span continents.',
          summary_zh: '切葉蟻在地下建造專屬真菌農場，阿根廷蟻超級殖民地甚至橫跨多個大洲。',
          summary_es: 'Hormigas cortadoras cultivan hongos subterráneos y megacolonias cruzan continentes.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Allomyrina_dichotoma_male.JPG/600px-Allomyrina_dichotoma_male.JPG&w=600&output=jpg',
          sections: [
            {
              heading: '1. The Superorganism',
              heading_zh: '1. 超級生物體概念',
              heading_es: '1. El Superorganismo',
              text: 'An ant colony acts like a single organism: the Queen acts as the reproductive organ, workers are the hands and feet, soldiers act as the immune defense, and pheromone trails function like nervous system impulses!',
              text_zh: '整個蟻群宛如一個獨立的「超級生物體」：蟻后是生殖器官、工蟻是手腳、兵蟻是免疫防禦細胞，而費洛蒙化學信號則是穿梭其中的神經傳導脈衝！',
              text_es: 'Una colonia de hormigas funciona como un superorganismo con reina, obreras y soldados.'
            }
          ],
          quiz: {
            question: 'What do leafcutter ants actually eat with the leaves they meticulously cut and carry into underground nests?',
            question_zh: '切葉蟻辛苦切斷並搬進地下巢穴的無數樹葉，牠們真實是用來吃什麼？',
            question_es: '¿Qué comen en realidad las hormigas cortadoras con las hojas que llevan a su nido?',
            options: [
              { text: 'Specialized fungal crops grown on chewed leaf mulch', text_zh: '在嚼碎葉片堆肥上精心培育的專屬食用真菌', text_es: 'Hongos especializados cultivados sobre las hojas masticadas', correct: true },
              { text: 'The raw dry leaves directly', text_zh: '直接啃食生樹葉片', text_es: 'Comen las hojas directamente', correct: false },
              { text: 'They use leaves as paper for books', text_zh: '用葉子當作造紙書籍', text_es: 'Hacen papel', correct: false }
            ],
            explanation: 'Leafcutter ants were practicing agriculture 50 million years before human civilization began.'
          }
        },
        {
          id: 'c6-l6',
          number: 6,
          title: 'Pollinators: The Engine of Planet Earth',
          title_zh: '傳粉精靈：轉動地球生態的引擎',
          title_es: 'Polinizadores: Motores del Planeta',
          summary: 'One out of every three bites of food humans eat depends directly on insect pollination.',
          summary_zh: '人類餐桌上每三口食物中，就有一口完全依賴昆蟲傳粉才能誕生。',
          summary_es: 'Uno de cada tres bocados de comida humana depende de insectos polinizadores.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Monarch_In_May.jpg/600px-Monarch_In_May.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Co-Evolutionary Partnership',
              heading_zh: '1. 互利共生的共同演化',
              heading_es: '1. Coevolución',
              text: 'Flowers evolved sweet sugary nectar, ultraviolet runway landing patterns, and aromatic scents solely to attract bees, butterflies, and beetles that inadvertently transfer pollen grains to fertilize seeds.',
              text_zh: '被子植物花朵演化出甘甜花蜜、紫外光引導跑道條紋與濃郁花香，專門吸引蜂、蝶與甲蟲前來，順道將花粉傳遞至雌蕊完成受精！',
              text_es: 'Las flores desarrollaron néctar y patrones ultravioleta para atraer insectos que transportan polen.'
            }
          ],
          quiz: {
            question: 'What invisible light spectrum can bees see on flowers that humans cannot see without ultraviolet cameras?',
            question_zh: '蜜蜂能在花朵上看見哪種人類肉眼無法看見、指引花蜜位置的隱形光譜？',
            question_es: '¿Qué espectro de luz invisible para los humanos pueden ver las abejas en las flores?',
            options: [
              { text: 'Ultraviolet (UV) runway patterns', text_zh: '紫外線 (UV) 著陸跑道花紋', text_es: 'Patrones de luz ultravioleta (UV)', correct: true },
              { text: 'Gamma radiation', text_zh: '伽馬射線', text_es: 'Rayos gamma', correct: false },
              { text: 'Radio waves', text_zh: '無線電波', text_es: 'Ondas de radio', correct: false }
            ],
            explanation: 'Flowers possess UV nectar guides that glow under ultraviolet light, pointing bees straight to pollen.'
          }
        }
      ]
    },

    // ------------------------------------------------------------------------
    // COURSE 7: PREHISTORIC EVOLUTION & EXTINCTION (6 LESSONS)
    // ------------------------------------------------------------------------
    {
      id: 'course-7',
      number: 7,
      title: 'Prehistoric Evolution & Extinction',
      title_zh: '史前演化、化石與大滅絕',
      title_es: 'Evolución Prehistórica y Extinciones',
      desc: 'Connect the Tree of Life from Cambrian trilobites and dinosaurs to Ice Age megafauna and modern living animals.',
      desc_zh: '從寒武紀三葉蟲、中生代恐龍、冰河巨獸一路串聯至現代野生動物的演化生命之樹。',
      desc_es: 'Conecta el Árbol de la Vida desde dinosaurios hasta mamuts y especies actuales.',
      icon: '🦖',
      color: '#ef4444',
      lessons: [
        {
          id: 'c7-l1',
          number: 1,
          title: 'The Tree of Life: Common Ancestry',
          title_zh: '生命之樹：共同祖先與演化分支',
          title_es: 'El Árbol de la Vida: Ancestros Comunes',
          summary: 'How DNA, homologous bone structures, and fossils prove all living things share a single origin.',
          summary_zh: 'DNA遺傳基因、同源骨骼構造與地層化石如何證明地球所有生物源於共同起點。',
          summary_es: 'Cómo el ADN y los huesos homólogos demuestran que toda la vida comparte un origen.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tyrannosaurus_Rex_Holotype_CM_9380.jpg/600px-Tyrannosaurus_Rex_Holotype_CM_9380.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Homologous Structures',
              heading_zh: '1. 同源構造的演化烙印',
              heading_es: '1. Estructuras Homólogas',
              text: 'Look at the bones in a human arm, a bat\'s wing, a whale\'s flipper, and a dog\'s paw: they all share the exact same five-digit bone layout inherited from ancient lobe-finned fish 375 million years ago!',
              text_zh: '檢視人類的手臂、蝙蝠的翼、鯨魚的胸鰭與狗的前爪：牠們擁有完全相同的五指骨骼佈局，源自3.75億年前爬上陸地的肉鰭魚共同祖先！',
              text_es: 'El brazo humano, el ala del murciélago y la aleta de ballena comparten el mismo patrón óseo pentadáctilo.'
            }
          ],
          quiz: {
            question: 'What term describes anatomically similar bone arrangements found in human arms, whale flippers, and bat wings inherited from a common ancestor?',
            question_zh: '人類手臂、鯨魚胸鰭與蝙蝠翅膀中繼承自共同祖先、骨骼排列極為相似的構造稱為什麼？',
            question_es: '¿Qué término describe estructuras óseas similares heredadas de un ancestro común?',
            options: [
              { text: 'Homologous Structures', text_zh: '同源構造 (Homologous Structures)', text_es: 'Estructuras Homólogas', correct: true },
              { text: 'Plastic prosthetics', text_zh: '人工塑料假體', text_es: 'Prótesis plásticas', correct: false },
              { text: 'Fossilized rocks', text_zh: '石化岩塊', text_es: 'Rocas fosilizadas', correct: false }
            ],
            explanation: 'Homologous structures share a common embryonic origin and ancestral body plan.'
          }
        },
        {
          id: 'c7-l2',
          number: 2,
          title: 'The Reign of Dinosaurs: Theropods & Sauropods',
          title_zh: '恐龍的黃金王朝：獸腳類與蜥腳類巨獸',
          title_es: 'El Reinado de los Dinosaurios',
          summary: 'For 165 million years, dinosaurs ruled Earth before an asteroid impact reset the planet.',
          summary_zh: '在長達1.65億年的歲月裡，恐龍統治了整個陸地，直到一顆小行星撞擊重置了地球生態。',
          summary_es: 'Durante 165 millones de años los dinosaurios dominaron la Tierra.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tyrannosaurus_Rex_Holotype_CM_9380.jpg/600px-Tyrannosaurus_Rex_Holotype_CM_9380.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Theropod Apex Predators',
              heading_zh: '1. 頂尖獸腳類掠食者',
              heading_es: '1. Terópodos Carnívoros',
              text: 'Tyrannosaurus Rex stood 13 feet tall at the hips and weighed 9 tons. Its serrated 12-inch teeth and binocular stereoscopic vision allowed it to hunt armored Triceratops with 12,800 PSI crushing bite force!',
              text_zh: '雷克斯暴龍臀高達 4 公尺、重達 9 噸。長達 30 公分的鋸齒狀巨齒搭配立體雙眼視覺，咬合力高達 12,800 PSI，足以直接粉碎三角龍的堅固骨骼！',
              text_es: 'El T-Rex pesaba 9 toneladas con una mordida de 12,800 PSI capaz de triturar huesos de Triceratops.'
            }
          ],
          quiz: {
            question: 'What group of bipedal carnivorous dinosaurs includes Tyrannosaurus Rex and the direct ancestors of modern birds?',
            question_zh: '哪類雙足肉食性恐龍包含了著名的雷克斯暴龍，也是現代鳥類的直系祖先？',
            question_es: '¿Qué grupo de dinosaurios carnívoros bípedos incluye al T-Rex y ancestros de las aves?',
            options: [
              { text: 'Theropods', text_zh: '獸腳類恐龍 (Theropods)', text_es: 'Terópodos', correct: true },
              { text: 'Sauropods', text_zh: '蜥腳類長頸恐龍', text_es: 'Saurópodos', correct: false },
              { text: 'Pterosaurs', text_zh: '翼龍類', text_es: 'Pterosaurios', correct: false }
            ],
            explanation: 'Theropods were bipedal saurischian dinosaurs that evolved into avian birds.'
          }
        },
        {
          id: 'c7-l3',
          number: 3,
          title: 'Ocean Terrors: Megalodon & Ancient Seas',
          title_zh: '遠古海洋霸主：巨齒鯊與滄龍的世界',
          title_es: 'Terrores Marinos: Megalodón y Mares Antiguos',
          summary: 'Otodus megalodon reached 60 feet long with teeth the size of a human hand that hunted whales.',
          summary_zh: '巨齒鯊體長達18公尺，牙齒如成年人手掌般巨大，以捕食古代鯨魚為生。',
          summary_es: 'El Megalodón medía 18 metros con dientes del tamaño de una mano humana cazando ballenas.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Carcharodon_megalodon.jpg/600px-Carcharodon_megalodon.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. The Megajaw Predator',
              heading_zh: '1. 史上最狂暴的深海巨顎',
              heading_es: '1. Mandíbulas Gigantes',
              text: 'Otodus megalodon lived 23 to 3.6 million years ago. Its jaws were 9 feet wide, generating 40,000 PSI bite force (enough to crush a car flat). It went extinct when ocean temperatures cooled and smaller Great Whites outcompeted it.',
              text_zh: '巨齒鯊生活於2300萬至360萬年前。其雙顎寬達 2.7 公尺，咬合力估計達 40,000 PSI（足以將一輛汽車壓扁）。後來因氣候變冷與大白鯊的靈活競爭而滅絕。',
              text_es: 'El Megalodón tenía mandíbulas de casi 3 metros con 40,000 PSI de mordida capaz de aplastar un auto.'
            }
          ],
          quiz: {
            question: 'What was the primary prey of the prehistoric giant shark Megalodon?',
            question_zh: '史前頂級巨鯊巨齒鯊 (Megalodon) 的主要捕食對象是什麼？',
            question_es: '¿Cuál era la presa principal del tiburón gigante prehistórico Megalodón?',
            options: [
              { text: 'Prehistoric Whales and large marine mammals', text_zh: '史前鯨魚與大型海洋哺乳動物', text_es: 'Ballenas prehistóricas y mamíferos marinos', correct: true },
              { text: 'Microscopic plankton only', text_zh: '僅以微小浮游生物為食', text_es: 'Plancton microscópico', correct: false },
              { text: 'Land horses', text_zh: '陸地馬匹', text_es: 'Caballos terrestres', correct: false }
            ],
            explanation: 'Fossilized whale vertebrae frequently show massive Megalodon serrated bite marks.'
          }
        },
        {
          id: 'c7-l4',
          number: 4,
          title: 'Ice Age Megafauna: Mammoths & Sabertooths',
          title_zh: '冰河時期巨獸：猛獁象與劍齒虎',
          title_es: 'Megafauna de la Era de Hielo',
          summary: 'Woolly Mammoths, Smilodon sabertooth cats, and 20-foot ground sloths that roamed during the Pleistocene.',
          summary_zh: '更新世時期漫步於冰原的猛獁象、長達20公分致命犬齒的劍齒虎以及高達6公尺的巨型地懶。',
          summary_es: 'Mamuts lanudos, tigres dientes de sable y perezosos gigantes de la época pleistocena.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Woolly_mammoth_%28Mammuthus_primigenius%29_-_Mauricio_Ant%C3%B3n.jpg/600px-Woolly_mammoth_%28Mammuthus_primigenius%29_-_Mauricio_Ant%C3%B3n.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. The Pleistocene Ice Shield',
              heading_zh: '1. 更新世冰原裝備',
              heading_es: '1. Armaduras contra el Hielo',
              text: 'Woolly mammoths featured 3-foot long shaggy guard hairs, a 4-inch blubber layer, and curved 14-foot tusks used like snowplows to scrape frozen snow off tundra grasses.',
              text_zh: '猛獁象披著將近 1 公尺長的濃密外層毛髮、10 公分厚脂肪層，以及長達 4 公尺的彎曲巨齒，用來像除雪機般剷開凍原積雪尋找牧草。',
              text_es: 'Los mamuts tenían pelo de 1 metro, grasa gruesa y colmillos curvos para retirar la nieve.'
            }
          ],
          quiz: {
            question: 'What famous feline predator of the Ice Age possessed 7-inch serrated curved canine teeth?',
            question_zh: '冰河時期哪種著名貓科猛獸擁有長達近 20 公分的鋸齒狀彎曲致命犬齒？',
            question_es: '¿Qué felino de la Era de Hielo tenía colmillos curvados de casi 20 cm?',
            options: [
              { text: 'Saber-toothed Cat (Smilodon)', text_zh: '劍齒虎 (Smilodon)', text_es: 'Dientes de Sable (Smilodon)', correct: true },
              { text: 'Domestic cat', text_zh: '家貓', text_es: 'Gato doméstico', correct: false },
              { text: 'Cheetah', text_zh: '非洲獵豹', text_es: 'Guepardo', correct: false }
            ],
            explanation: 'Smilodon used its massive canines to sever windpipes and blood vessels in large ungulates.'
          }
        },
        {
          id: 'c7-l5',
          number: 5,
          title: 'From T-Rex to Chickens: Living Dinosaurs',
          title_zh: '從霸王龍到現代雞：活生生的恐龍後代',
          title_es: 'Del T-Rex a las Gallinas: Dinosaurios Vivos',
          summary: 'Fossil feathers, furcula wishbones, and molecular collagen prove birds ARE living theropod dinosaurs!',
          summary_zh: '羽毛化石、V型許願骨以及古膠原蛋白分子分析，證明現代鳥類就是活生生的獸腳類恐龍！',
          summary_es: 'Plumas fósiles y colágeno demuestran que las aves son dinosaurios terópodos vivientes.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Tyrannosaurus_Rex_Holotype_CM_9380.jpg/600px-Tyrannosaurus_Rex_Holotype_CM_9380.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Birds are Avian Dinosaurs',
              heading_zh: '1. 鳥類在分類學上就是鳥翼類恐龍',
              heading_es: '1. Las Aves Son Dinosaurios',
              text: 'In 2007, scientists extracted collagen proteins preserved inside a 68-million-year-old T-Rex femur. Mass spectrometry revealed its amino acid sequence was closest to modern chickens and ostriches than any living reptile!',
              text_zh: '2007年，科學家從一具6800萬年前的暴龍股骨中提取出保存完好的膠原蛋白。質譜儀分析顯示，其氨基酸序列與現代雞和鴕鳥的親緣關係，遠比任何現存爬行動物都要親近！',
              text_es: 'En 2007, colágeno extraído de un fósil de T-Rex demostró que su genética coincide más con gallinas que con reptiles.'
            }
          ],
          quiz: {
            question: 'Biologically speaking, modern birds like chickens, eagles, and hummingbirds are the direct descendants of which dinosaur lineage?',
            question_zh: '從現代生物分類學來看，雞、老鷹與蜂鳥等現代鳥類是哪類恐龍的直系後裔？',
            question_es: '¿De qué linaje de dinosaurios son descendientes directos las aves modernas?',
            options: [
              { text: 'Theropod Dinosaurs', text_zh: '獸腳類恐龍 (Theropod Dinosaurs)', text_es: 'Dinosaurios Terópodos', correct: true },
              { text: 'Stegosaurs with back plates', text_zh: '劍龍類', text_es: 'Estegosaurios', correct: false },
              { text: 'Plesiosaurs', text_zh: '蛇頸龍類', text_es: 'Plesiosaurios', correct: false }
            ],
            explanation: 'Cladistically, birds are avian theropod dinosaurs.'
          }
        },
        {
          id: 'c7-l6',
          number: 6,
          title: 'The Sixth Extinction & Rewilding Hope',
          title_zh: '第六次大滅絕危機與野化希望',
          title_es: 'La Sexta Extinción y Esperanza de Rescate',
          summary: 'How habitat preservation, captive breeding, and ecological corridors are pulling species back from the brink.',
          summary_zh: '棲息地守護、人工繁育與生態廊道如何將瀕危物種從滅絕邊緣拯救回來。',
          summary_es: 'Cómo la conservación y corredores ecológicos salvan especies en peligro crítico.',
          image: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Monarch_In_May.jpg/600px-Monarch_In_May.jpg&w=600&output=jpg',
          sections: [
            {
              heading: '1. Rewilding Success Stories',
              heading_zh: '1. 野化保育的勝利篇章',
              heading_es: '1. Casos de Éxito',
              text: 'Thanks to intense conservation efforts, the California Condor rebounded from just 22 individuals in 1987 to over 500 today! Giant Pandas and Bald Eagles have also been officially downgraded from endangered status.',
              text_zh: '得益於全心守護，加州神鷲從 1987 年的僅剩 22 隻反彈至今天的超過 500 隻！大熊貓與白頭海鵰也已成功脫離瀕危等級。',
              text_es: 'El cóndor de California pasó de 22 ejemplares en 1987 a más de 500 hoy gracias a la cría protegida.'
            }
          ],
          quiz: {
            question: 'What iconic North American raptor rebounded from critical DDT pesticide decline and was successfully removed from the Endangered Species List?',
            question_zh: '哪種北美標誌性猛禽成功從嚴重的DDT殺蟲劑危機中復甦，並成功從瀕危物種名單中除名？',
            question_es: '¿Qué rapaz norteamericana se recuperó del DDT y salió de la lista de especies en peligro?',
            options: [
              { text: 'Bald Eagle (Haliaeetus leucocephalus)', text_zh: '白頭海鵰 (Bald Eagle)', text_es: 'Águila Calva', correct: true },
              { text: 'Dodo Bird', text_zh: '渡渡鳥 (Dodo)', text_es: 'Pájaro Dodo', correct: false },
              { text: 'Passenger Pigeon', text_zh: '旅鴿', text_es: 'Paloma pasajera', correct: false }
            ],
            explanation: 'The Bald Eagle recovered from fewer than 500 nesting pairs in 1963 to over 300,000 birds today.'
          }
        }
      ]
    }
  ];

  // ==========================================================================
  // WILDLIFE ACADEMY MASTER ENGINE
  // ==========================================================================
  class WildlifeAcademyEngine {
    constructor() {
      this.courses = COURSES_DATA;
      this.levels = ACADEMY_LEVELS;

      // Active UI State
      this.currentCourseId = 'course-1';
      this.currentLessonId = null;
      this.currentViewMode = 'dashboard'; // 'dashboard', 'course', 'lesson'
      this.selectedQuizAnswer = null;
      this.quizAnswered = false;

      this.initStorage();
    }

    initStorage() {
      if (localStorage.getItem('ak_academy_xp') === null) {
        localStorage.setItem('ak_academy_xp', '0');
      }
      if (localStorage.getItem('ak_academy_completed_lessons') === null) {
        localStorage.setItem('ak_academy_completed_lessons', JSON.stringify([]));
      }
      if (localStorage.getItem('ak_academy_quiz_scores') === null) {
        localStorage.setItem('ak_academy_quiz_scores', JSON.stringify({}));
      }
    }

    // --- XP & LEVELING METHODS ---
    getXp() {
      return parseInt(localStorage.getItem('ak_academy_xp') || '0', 10);
    }

    addXp(amount) {
      const prevXp = this.getXp();
      const prevLevel = this.getCurrentLevelObj(prevXp).level;
      const newXp = prevXp + amount;
      localStorage.setItem('ak_academy_xp', newXp.toString());

      const newLevelObj = this.getCurrentLevelObj(newXp);
      if (newLevelObj.level > prevLevel) {
        this.triggerLevelUpCelebration(newLevelObj);
      }
      return newXp;
    }

    getCurrentLevelObj(xp = null) {
      const currentXp = xp !== null ? xp : this.getXp();
      for (let i = this.levels.length - 1; i >= 0; i--) {
        if (currentXp >= this.levels[i].minXp) {
          return this.levels[i];
        }
      }
      return this.levels[0];
    }

    getNextLevelObj(xp = null) {
      const current = this.getCurrentLevelObj(xp);
      const idx = this.levels.findIndex(l => l.level === current.level);
      if (idx < this.levels.length - 1) {
        return this.levels[idx + 1];
      }
      return null;
    }

    getCompletedLessonIds() {
      try {
        return JSON.parse(localStorage.getItem('ak_academy_completed_lessons') || '[]');
      } catch (e) {
        return [];
      }
    }

    isLessonCompleted(lessonId) {
      return this.getCompletedLessonIds().includes(lessonId);
    }

    markLessonCompleted(lessonId) {
      const list = this.getCompletedLessonIds();
      if (!list.includes(lessonId)) {
        list.push(lessonId);
        localStorage.setItem('ak_academy_completed_lessons', JSON.stringify(list));
        this.addXp(100); // 100 XP per completed lesson

        // Also award 50 coins to player's wallet!
        if (window.AK_QUESTS && window.AK_QUESTS.addCoins) {
          window.AK_QUESTS.addCoins(50);
        }
      }
    }

    // Find recommended next lesson to work on
    getRecommendedNextLesson() {
      const completed = this.getCompletedLessonIds();
      for (const course of this.courses) {
        for (const lesson of course.lessons) {
          if (!completed.includes(lesson.id)) {
            return { course, lesson };
          }
        }
      }
      // If all completed, return first lesson of course 1
      return { course: this.courses[0], lesson: this.courses[0].lessons[0] };
    }

    // Language Helper
    getLang() {
      return (window.AK_I18N && window.AK_I18N.getLanguage) ? window.AK_I18N.getLanguage() : 'en';
    }

    getText(obj, field) {
      if (!obj) return '';
      const lang = this.getLang();
      if (lang === 'zh' && obj[field + '_zh']) return obj[field + '_zh'];
      if (lang === 'es' && obj[field + '_es']) return obj[field + '_es'];
      return obj[field] || '';
    }

    // Modal Controls
    openModal(courseId = null, lessonId = null) {
      const modal = document.getElementById('academy-modal');
      if (!modal) return;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';

      if (lessonId) {
        this.openLesson(courseId || 'course-1', lessonId);
      } else if (courseId) {
        this.openCourse(courseId);
      } else {
        this.currentViewMode = 'dashboard';
        this.render();
      }
    }

    closeModal() {
      const modal = document.getElementById('academy-modal');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    openCourse(courseId) {
      this.currentCourseId = courseId;
      this.currentViewMode = 'course';
      if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(520);
      this.render();
    }

    openLesson(courseId, lessonId) {
      this.currentCourseId = courseId;
      this.currentLessonId = lessonId;
      this.currentViewMode = 'lesson';
      this.selectedQuizAnswer = null;
      this.quizAnswered = false;
      if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(600);
      this.render();
    }

    backToDashboard() {
      this.currentViewMode = 'dashboard';
      if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(450);
      this.render();
    }

    backToCourse() {
      this.currentViewMode = 'course';
      if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(450);
      this.render();
    }

    submitQuizAnswer(optionIdx) {
      if (this.quizAnswered) return;
      this.selectedQuizAnswer = optionIdx;
      this.quizAnswered = true;

      const course = this.courses.find(c => c.id === this.currentCourseId);
      const lesson = course ? course.lessons.find(l => l.id === this.currentLessonId) : null;
      if (!lesson || !lesson.quiz) return;

      const isCorrect = lesson.quiz.options[optionIdx].correct;
      if (isCorrect) {
        this.markLessonCompleted(lesson.id);
        if (window.AK_AUDIO && window.AK_AUDIO.playVictory) window.AK_AUDIO.playVictory();
        if (window.AK_GAME && window.AK_GAME.triggerConfetti) window.AK_GAME.triggerConfetti();
      } else {
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(250);
      }

      this.render();
    }

    triggerLevelUpCelebration(levelObj) {
      if (window.AK_GAME && window.AK_GAME.triggerConfetti) {
        window.AK_GAME.triggerConfetti();
      }
      if (window.AK_AUDIO && window.AK_AUDIO.playVictory) {
        window.AK_AUDIO.playVictory();
      }
      const title = this.getText(levelObj, 'title');
      const toastMsg = `🌟 LEVEL UP! You are now Level ${levelObj.level}: ${title}!`;
      if (window.app && window.app.showToast) {
        window.app.showToast(toastMsg);
      }
    }

    // ------------------------------------------------------------------------
    // UI RENDERING ENGINE
    // ------------------------------------------------------------------------
    render() {
      const container = document.getElementById('academy-modal-content');
      if (!container) return;

      if (this.currentViewMode === 'dashboard') {
        this.renderDashboard(container);
      } else if (this.currentViewMode === 'course') {
        this.renderCourseView(container);
      } else if (this.currentViewMode === 'lesson') {
        this.renderLessonView(container);
      }
    }

    // VIEW 1: KHAN ACADEMY STYLE DASHBOARD
    renderDashboard(container) {
      const xp = this.getXp();
      const currentLevel = this.getCurrentLevelObj(xp);
      const nextLevel = this.getNextLevelObj(xp);
      const completed = this.getCompletedLessonIds();
      const nextUp = this.getRecommendedNextLesson();

      const levelProgressPct = nextLevel
        ? Math.min(100, Math.round(((xp - currentLevel.minXp) / (nextLevel.minXp - currentLevel.minXp)) * 100))
        : 100;

      const totalLessons = this.courses.reduce((acc, c) => acc + c.lessons.length, 0);

      container.innerHTML = `
        <div class="academy-modal-container">
          <button class="game-modal-close" onclick="window.AK_ACADEMY.closeModal()">✕</button>

          <!-- Academy Header & Progress Banner -->
          <div class="academy-header-card">
            <div class="academy-branding">
              <span class="academy-badge">🎓 WILDLIFE ACADEMY</span>
              <h2 class="academy-title">The Animal Kingdom Learning Courses</h2>
              <p class="academy-subtitle">Master animal habitats, diets, adaptations, and oceans—complete courses, level up, and conquer the Ultimate Test!</p>
            </div>

            <div class="academy-stats-banner">
              <div class="academy-level-chip">
                <span class="level-icon">${currentLevel.badge}</span>
                <div class="level-meta">
                  <span class="level-label">Level ${currentLevel.level}</span>
                  <strong class="level-name">${this.getText(currentLevel, 'title')}</strong>
                </div>
              </div>

              <div class="academy-xp-progress-box">
                <div class="xp-status-row">
                  <span><strong>⚡ ${xp} XP Earned</strong></span>
                  <span>${nextLevel ? `${nextLevel.minXp - xp} XP to Level ${nextLevel.level}` : 'Max Level Reached!'}</span>
                </div>
                <div class="academy-bar-wrap">
                  <div class="academy-bar-fill" style="width: ${levelProgressPct}%"></div>
                </div>
              </div>

              <div class="academy-mastery-pill">
                🏆 <span>${completed.length} / ${totalLessons} Lessons Mastered</span>
              </div>
            </div>
          </div>

          <!-- "Up Next / What You Work On" Recommended Widget -->
          <div class="academy-up-next-card">
            <div class="up-next-left">
              <span class="up-next-tag">🚀 WHAT YOU WORK ON (UP NEXT)</span>
              <h3 class="up-next-title">${nextUp.course.icon} Course ${nextUp.course.number}: ${this.getText(nextUp.lesson, 'title')}</h3>
              <p class="up-next-desc">${this.getText(nextUp.lesson, 'summary')}</p>
            </div>
            <button class="btn-start-next" onclick="window.AK_ACADEMY.openLesson('${nextUp.course.id}', '${nextUp.lesson.id}')">
              Start Lesson ➡️
            </button>
          </div>

          <!-- Ultimate Capstone Test Banner -->
          <div class="ultimate-test-teaser-card" onclick="window.AK_ULTIMATE_TEST && window.AK_ULTIMATE_TEST.openModal()">
            <div class="teaser-icon">🏆</div>
            <div class="teaser-text">
              <span class="teaser-badge">GRAND CAPSTONE EXAM</span>
              <h4>The Ultimate Wildlife Test of All Animals</h4>
              <p>Ready to test everything you know across all 8 zones? Take the comprehensive 25-question exam for the Grand Zoologist Diploma & 1,000 Coins!</p>
            </div>
            <button class="btn-teaser-go">Take Ultimate Test ⚔️ ➡️</button>
          </div>

          <!-- 7 Courses Grid -->
          <h3 class="academy-section-heading">📚 Browse All 7 Wildlife Courses</h3>
          <div class="academy-courses-grid">
            ${this.courses.map(course => {
              const cLessons = course.lessons;
              const cCompleted = cLessons.filter(l => completed.includes(l.id)).length;
              const cPct = Math.round((cCompleted / cLessons.length) * 100);
              const isMastered = cCompleted === cLessons.length;

              return `
                <div class="academy-course-card ${isMastered ? 'course-mastered' : ''}" style="border-top-color: ${course.color};" onclick="window.AK_ACADEMY.openCourse('${course.id}')">
                  <div class="course-card-top">
                    <span class="course-icon" style="background: ${course.color}20; color: ${course.color};">${course.icon}</span>
                    <span class="course-num">COURSE ${course.number}</span>
                    ${isMastered ? '<span class="course-done-badge">✓ MASTERED</span>' : ''}
                  </div>

                  <h4 class="course-title">${this.getText(course, 'title')}</h4>
                  <p class="course-desc">${this.getText(course, 'desc')}</p>

                  <div class="course-progress-meta">
                    <div class="c-progress-row">
                      <span>${cCompleted} / ${cLessons.length} Lessons</span>
                      <strong>${cPct}%</strong>
                    </div>
                    <div class="c-bar-wrap">
                      <div class="c-bar-fill" style="width: ${cPct}%; background: ${course.color};"></div>
                    </div>
                  </div>

                  <div class="course-card-footer">
                    <span class="btn-course-enter">Explore Lessons →</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // VIEW 2: COURSE LESSONS DIRECTORY
    renderCourseView(container) {
      const course = this.courses.find(c => c.id === this.currentCourseId) || this.courses[0];
      const completed = this.getCompletedLessonIds();
      const cLessons = course.lessons;
      const cCompleted = cLessons.filter(l => completed.includes(l.id)).length;

      container.innerHTML = `
        <div class="academy-modal-container">
          <button class="game-modal-close" onclick="window.AK_ACADEMY.closeModal()">✕</button>

          <div class="academy-nav-breadcrumb">
            <button class="btn-breadcrumb" onclick="window.AK_ACADEMY.backToDashboard()">← Back to Courses</button>
          </div>

          <div class="course-hero-banner" style="background: linear-gradient(135deg, ${course.color}25 0%, #0b1329 100%); border-left: 5px solid ${course.color};">
            <div class="course-hero-icon">${course.icon}</div>
            <div class="course-hero-details">
              <span class="course-hero-tag">COURSE ${course.number} • ${cLessons.length} LESSONS</span>
              <h2 class="course-hero-title">${this.getText(course, 'title')}</h2>
              <p class="course-hero-desc">${this.getText(course, 'desc')}</p>
              <div class="course-hero-stats">
                <span>Progress: <strong>${cCompleted} / ${cLessons.length} Completed</strong></span>
              </div>
            </div>
          </div>

          <!-- Lessons List -->
          <div class="lessons-directory-list">
            ${cLessons.map(lesson => {
              const isDone = completed.includes(lesson.id);
              return `
                <div class="lesson-dir-item ${isDone ? 'lesson-completed' : ''}" onclick="window.AK_ACADEMY.openLesson('${course.id}', '${lesson.id}')">
                  <div class="lesson-dir-status">
                    ${isDone ? '<span class="status-check">✓</span>' : `<span class="status-num">${lesson.number}</span>`}
                  </div>
                  <div class="lesson-dir-content">
                    <h4 class="lesson-dir-title">Lesson ${lesson.number}: ${this.getText(lesson, 'title')}</h4>
                    <p class="lesson-dir-summary">${this.getText(lesson, 'summary')}</p>
                  </div>
                  <div class="lesson-dir-action">
                    <span class="btn-lesson-pill">${isDone ? 'Review 🔄' : 'Start ➡️'}</span>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        </div>
      `;
    }

    // VIEW 3: INTERACTIVE LESSON READER & CHECKPOINT QUIZ
    renderLessonView(container) {
      const course = this.courses.find(c => c.id === this.currentCourseId) || this.courses[0];
      const lesson = course.lessons.find(l => l.id === this.currentLessonId) || course.lessons[0];
      const isDone = this.isLessonCompleted(lesson.id);

      container.innerHTML = `
        <div class="academy-modal-container">
          <button class="game-modal-close" onclick="window.AK_ACADEMY.closeModal()">✕</button>

          <div class="academy-nav-breadcrumb">
            <button class="btn-breadcrumb" onclick="window.AK_ACADEMY.backToCourse()">← Back to Course ${course.number}</button>
          </div>

          <!-- Lesson Content Card -->
          <article class="lesson-reader-article">
            <div class="lesson-article-header">
              <span class="lesson-header-kicker">${course.icon} Course ${course.number} • Lesson ${lesson.number}</span>
              <h2 class="lesson-main-title">${this.getText(lesson, 'title')}</h2>
              <p class="lesson-lead-summary">${this.getText(lesson, 'summary')}</p>
            </div>

            ${lesson.image ? `
              <div class="lesson-hero-img-wrap">
                <img src="${lesson.image}" alt="${this.getText(lesson, 'title')}" class="lesson-hero-img" loading="lazy">
              </div>
            ` : ''}

            <!-- Educational Sections -->
            <div class="lesson-sections-container">
              ${lesson.sections.map(sec => `
                <section class="lesson-article-sec">
                  <h3 class="sec-heading">${this.getText(sec, 'heading')}</h3>
                  <div class="sec-text">${this.formatMarkdown(this.getText(sec, 'text'))}</div>
                </section>
              `).join('')}
            </div>

            <!-- Checkpoint Quiz Box -->
            <div class="lesson-checkpoint-quiz-box">
              <div class="quiz-box-header">
                <span class="quiz-badge">⚡ LESSON CHECKPOINT QUIZ</span>
                <h4 class="quiz-prompt">${this.getText(lesson.quiz, 'question')}</h4>
              </div>

              <div class="quiz-options-list">
                ${lesson.quiz.options.map((opt, idx) => {
                  let optClass = '';
                  if (this.quizAnswered) {
                    if (opt.correct) optClass = 'quiz-opt-correct';
                    else if (this.selectedQuizAnswer === idx) optClass = 'quiz-opt-wrong';
                  }

                  return `
                    <button class="btn-quiz-option ${optClass}" onclick="window.AK_ACADEMY.submitQuizAnswer(${idx})" ${this.quizAnswered ? 'disabled' : ''}>
                      <span class="opt-letter">${String.fromCharCode(65 + idx)}</span>
                      <span class="opt-text">${this.getText(opt, 'text')}</span>
                      ${this.quizAnswered && opt.correct ? ' <span class="opt-feedback">✓ Correct</span>' : ''}
                      ${this.quizAnswered && this.selectedQuizAnswer === idx && !opt.correct ? ' <span class="opt-feedback">✕ Incorrect</span>' : ''}
                    </button>
                  `;
                }).join('')}
              </div>

              ${this.quizAnswered ? `
                <div class="quiz-feedback-banner ${lesson.quiz.options[this.selectedQuizAnswer].correct ? 'feedback-win' : 'feedback-lose'}">
                  <p><strong>💡 Explanation:</strong> ${lesson.quiz.explanation}</p>
                  ${lesson.quiz.options[this.selectedQuizAnswer].correct ? `
                    <div class="reward-pill">+100 XP Earned! ⚡ +50 Coins Added! 🪙</div>
                  ` : `
                    <button class="btn-retry-quiz" onclick="window.AK_ACADEMY.openLesson('${course.id}', '${lesson.id}')">Try Again 🔄</button>
                  `}
                </div>
              ` : ''}
            </div>

            <div class="lesson-article-footer">
              <button class="btn-back-to-course" onclick="window.AK_ACADEMY.backToCourse()">← Back to Course Lessons</button>
              ${isDone ? `
                <span class="lesson-mastered-tag">✓ Lesson Completed</span>
              ` : ''}
            </div>
          </article>
        </div>
      `;
    }

    formatMarkdown(text) {
      if (!text) return '';
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
    }
  }

  // Instantiate Academy Engine Singleton
  window.AK_ACADEMY = new WildlifeAcademyEngine();

})(typeof window !== 'undefined' ? window : global);
