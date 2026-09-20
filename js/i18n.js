/**
 * The Animal Kingdom - Internationalization (i18n) Engine
 * Supports:
 * - English ('en')
 * - 繁體中文 ('zh') - Traditional Chinese
 * - Español ('es') - Spanish
 */

(function(window) {
  'use strict';

  const TRANSLATIONS = {
    en: {
      // Header
      logo_title: 'THE ANIMAL KINGDOM',
      logo_badge: '780+ Creatures, Plants & Gemstones',
      search_placeholder: 'Search 780+ species, reptiles & gems...',
      nav_habitats: '🖼️ Habitats',
      nav_gallery: '🎨 Art Gallery',
      nav_weather: '🌦️ Animal Weather',
      nav_anatomy: '🔬 Anatomy X-Ray',
      nav_migration: '🗺️ Migration Map',
      nav_arena: '⚔️ Battle Arena',
      nav_quiz: '🎮 Quiz Game',
      nav_favorites: '❤️ Favorites',

      // Home Hub
      hub_badge: '🌟 HOME HUB',
      hub_subtitle: "Daily Featured Discovery from Earth's Wild Kingdoms",
      new_badge: '✨ NEW',
      new_section_title: 'Cool Interactive Apps & Fine Art Studio',
      new_section_sub: 'Jump into our newest high-speed interactive tools, fine-art galleries, and live scientific trackers!',
      art_badge: '🔥 BRAND NEW COOL APP',
      art_label: '🎨 FINE ART & NARRATION STUDIO',
      art_title: 'Wildlife Masterpiece Art Gallery',
      art_desc: 'Step into a fine-art museum featuring live wildlife rendered in authentic Pastel, Watercolor, Colored Pencil, and Acrylic Paint. Inspect intricate traditional techniques with full voice narration!',
      art_launch: '🚀 Launch Art Gallery Now →',
      cool_weather_title: 'Animal Weather Simulator',
      cool_weather_desc: 'Simulate 8 real-world biomes & sync with live Irvine, California weather radar.',
      cool_anatomy_title: 'Anatomy X-Ray Scanner',
      cool_anatomy_desc: 'Inspect inside animal skeletons, muscular systems, and internal organ bio-layers.',
      cool_migration_title: 'Global Wildlife Migration',
      cool_migration_desc: 'Track real-time GPS telemetry routes of whales, hawks, monarch butterflies & turtles.',
      cool_arena_title: 'Safari Battle Arena',
      cool_arena_desc: 'Simulate stat-based matchups between creatures (e.g., Lion vs Tiger).',
      cool_time_title: 'Evolution Time Machine',
      cool_time_desc: 'Travel back millions of years to see the giant ancient ancestors of modern animals.',

      // Search Section
      search_badge: '🔎 EXPEDITION SEARCH',
      search_title: 'Search Any Creature, Plant, Reptile, or Gemstone',
      search_desc: 'Search through all 780+ species, reptiles, and minerals by common name, scientific name, diet, or habitat!',
      search_hero_placeholder: 'Search across 840+ species (e.g. Leopard Gecko, Ball Python, King Cobra, Chameleon, Rose, Diamond)...',
      btn_search_go: 'Search All 🚀',
      popular_searches_label: 'Popular Searches:',

      // Discovery Zones
      zones_badge: '🐾 DISCOVERY ZONES',
      zones_title: 'Earth Discovery Zones',
      zones_desc: 'Select any zone below to enter its gallery and view all species, reptiles, plants, or gemstones!',
      zone_amphibians: 'Amphibians',
      zone_amphibians_sub: 'Explore Frogs & Salamanders →',
      zone_insects: 'Insects',
      zone_insects_sub: 'Explore Butterflies & Beetles →',
      zone_marine: 'Marine',
      zone_marine_sub: 'Explore Whales & Sharks →',
      zone_land: 'Land Animals',
      zone_land_sub: 'Explore Lions & Savanna Wildlife →',
      zone_birds: 'Birds',
      zone_birds_sub: 'Explore Avian & Songbirds →',
      zone_plants: 'Flowers & Plants',
      zone_plants_sub: 'Explore Flora & Blossoms →',
      zone_gemstones: 'Gemstones & Minerals',
      zone_gemstones_sub: 'Explore Crystals & Diamonds →',
      zone_reptiles: 'Reptiles',
      zone_reptiles_sub: 'Explore Chameleons & Serpents →',
      species_count_amphibians: '94 Species',
      species_count_insects: '94 Species',
      species_count_marine: '94 Species',
      species_count_land: '115 Species',
      species_count_birds: 'Global Atlas',
      species_count_plants: '129 Species',
      species_count_gemstones: '108 Gemstones',
      species_count_reptiles: '111 Species',

      // Category Zone View
      back_home: '← Back to All Discovery Zones',
      quick_switch_label: 'Quick Switch:',
      filter_all: 'All Species',
      filter_common: '🏡 Pets & Common',
      filter_flowers: '🌸 Flowers & Blossoms',
      filter_herbs: '🌿 Fragrant Herbs',
      filter_precious: '💎 Precious Gems',
      filter_quartz: '🔮 Quartz & Crystals',
      filter_rare: '✨ Rare Minerals',
      filter_lizards: '🦎 Lizards & Geckos',
      filter_snakes: '🐍 Snakes & Serpents',
      filter_turtles: '🐢 Turtles & Tortoises',
      filter_crocs: '🐊 Crocodilians',
      filter_endangered: '⚠️ Endangered',
      filter_least_concern: '✅ Least Concern',
      zone_search_placeholder: 'Search by name, diet, habitat, or superpower...',
      showing_species: 'Showing {count} species',
      showing_gems: 'Showing {count} Gemstones & Minerals',
      showing_reptiles: 'Showing {count} Reptiles & Serpents',
      showing_birds: 'Showing {count} Bird Species',
      showing_land: 'Showing {count} Land Animals',
      found_global: 'Found {count} species & gems across all zones',
      empty_title: 'No creatures or specimens found',
      empty_desc: 'Try searching for a different keyword or clear filters!',
      btn_clear_filters: 'Clear Filters',

      // Animal Card & AOD
      card_sound: 'Sound',
      card_chime: 'Chime',
      card_nature: 'Nature',
      card_learn_more: 'Learn More & Story ➡️',
      aod_item_animal: 'ANIMAL OF THE DAY',
      aod_item_plant: 'PLANT OF THE DAY',
      aod_item_gem: 'GEMSTONE OF THE DAY',
      aod_item_reptile: 'REPTILE OF THE DAY',
      aod_item_bird: 'BIRD OF THE DAY',
      aod_surprise_spotlight: 'SURPRISE SPOTLIGHT',
      btn_story: '📖 Story',
      btn_surprise: '🎲 Surprise Me',
      btn_full_info: '🔍 Full Info ➡️',
      spec_habitat: 'Habitat',
      spec_diet: 'Diet',
      spec_hardness: 'Hardness',
      spec_fact: 'Fact',

      // Modals
      btn_close: 'Close',
      modal_xray: '🔬 X-Ray Anatomy',
      modal_arena: '⚔️ Send to Arena',
      modal_sound_animal: '🔊 Animal Sound',
      modal_sound_gem: '🔔 Crystal Chime',
      modal_sound_plant: '🌱 Nature Chime',
      modal_story_read: '📖 Listen to Story',
      modal_story_gem: '📖 Crystal Story',
      modal_fav_add: '🤍 Favorite',
      modal_fav_saved: '❤️ Saved',
      modal_prev: '← Previous Specimen',
      modal_next: 'Next Specimen →',
      modal_origin_habitat: 'Where They Live (Habitat)',
      modal_origin_plant: 'Native Region & Climate',
      modal_origin_gem: 'Geological Origin & Mine Locations',
      modal_origin_reptile: 'Native Range & Ecosystem',
      modal_diet_label: 'What They Eat (Diet)',
      modal_diet_plant: 'Sunlight & Soil Needs',
      modal_diet_gem: 'Chemical Formula & Crystal System',
      modal_diet_reptile: 'Diet & Hunting Strategy',
      modal_status_label: 'Are They Endangered? (Status)',
      modal_status_plant: 'Blooming Season & Status',
      modal_status_gem: 'Gemstone Rarity & Status',
      modal_status_reptile: 'Conservation Status',
      modal_pred_label: 'What Are Their Predators?',
      modal_pred_plant: 'Pollinators & Garden Uses',
      modal_pred_gem: 'Mohs Hardness & Durability',
      modal_pred_reptile: 'Predators, Defense & Venom',
      modal_story_overview: '📖 Story & Overview',
      modal_story_gem_overview: '💎 Geological Discovery & Overview',
      modal_story_reptile_overview: '🦎 Reptilian Profile & Overview',

      // Habitat Backgrounds Modal
      bg_env_badge: '🌍 EXPEDITION ENVIRONMENT',
      bg_env_sub: 'Photorealistic Biomes',
      bg_modal_title: '🖼️ Realistic Wildlife Habitats & Wallpapers',
      bg_modal_sub: 'Immerse your journey in breathtaking, photorealistic natural biomes. Select a habitat to transform your safari view across every discovery zone.',
      bg_upload_title: 'Upload Photo from Your Computer',
      bg_upload_sub: 'Click to browse your photos or drop an image file (.jpg, .png, .webp)',
      bg_btn_browse: 'Browse Device',
      bg_url_title: 'Or Use Web Image URL',
      bg_url_sub: 'Paste a direct web link to an online wallpaper (.jpg, .png, .webp):',
      bg_apply_url: 'Apply URL',
      bg_reset_btn: '🔄 Reset to Default Theme',

      // Toast feedback
      toast_lang_switched: '🌐 Language switched to: English',
      toast_wallpaper_set: '🏞️ Wallpaper set to: {title}!',
      toast_photo_uploaded: '🎉 Your uploaded photo is now your background!',
      toast_reset_bg: '🔄 Reset to default theme background.',

      // Footer
      footer_text: '🌿 THE ANIMAL & EARTH KINGDOM • Built for explorers of every age! 840 species, plants & minerals across 8 wild discovery zones.'
    },

    zh: {
      // Header
      logo_title: '動物王國野生探險',
      logo_badge: '780+ 種珍稀動物、植物與璀璨寶石',
      search_placeholder: '搜尋 780+ 種生物、爬行類與寶石...',
      nav_habitats: '🖼️ 棲息地',
      nav_gallery: '🎨 藝術畫廊',
      nav_weather: '🌦️ 動物天氣',
      nav_anatomy: '🔬 解剖 X光',
      nav_migration: '🗺️ 遷徙地圖',
      nav_arena: '⚔️ 對決競技場',
      nav_quiz: '🎮 Safari 問答',
      nav_favorites: '❤️ 我的最愛',

      // Home Hub
      hub_badge: '🌟 探索首頁',
      hub_subtitle: '來自地球野生王國的每日精選奇觀',
      new_badge: '✨ 最新推出',
      new_section_title: '超酷互動應用與美術工作室',
      new_section_sub: '探索我們最新的即時互動工具、精美藝術畫廊與即時科學追蹤器！',
      art_badge: '🔥 全新熱門應用',
      art_label: '🎨 精緻藝術與語音導覽工作室',
      art_title: '野生動物傑作藝術畫廊',
      art_desc: '走進精緻藝術博物館，欣賞以粉彩、水彩、色鉛筆和壓克力顏料生動描繪的野生動物。透過完整語音導覽細細品味精湛傳統技法！',
      art_launch: '🚀 立即進入藝術畫廊 →',
      cool_weather_title: '動物天氣模擬器',
      cool_weather_desc: '模擬 8 大真實生物群落並同步即時加州爾灣氣象雷達。',
      cool_anatomy_title: '解剖 X光掃描儀',
      cool_anatomy_desc: '透視動物骨骼骨架、肌肉系統與內部器官生物層結構。',
      cool_migration_title: '全球野生動物遷徙',
      cool_migration_desc: '追蹤鯨魚、鷹隼、帝王斑蝶與海龜的即時 GPS 遙測路線。',
      cool_arena_title: 'Safari 戰鬥競技場',
      cool_arena_desc: '模擬生物之間基於各項數值的戰力對決（例如：獅子大戰老虎）。',
      cool_time_title: '演化時光機',
      cool_time_desc: '穿越數百萬年時光，探訪現代動物的史前巨型祖先。',

      // Search Section
      search_badge: '🔎 探險搜尋',
      search_title: '搜尋任何生物、植物、爬行動物或寶石',
      search_desc: '依俗名、學名、飲食習性或棲息地搜尋所有 780+ 種生物、爬行類與礦物！',
      search_hero_placeholder: '搜尋 840+ 種生物（例如：豹紋守宮、球蟒、眼鏡王蛇、變色龍、玫瑰、鑽石）...',
      btn_search_go: '搜尋全部 🚀',
      popular_searches_label: '熱門搜尋：',

      // Discovery Zones
      zones_badge: '🐾 探索展區',
      zones_title: '地球探索展區',
      zones_desc: '點選下方任何展區進入圖鑑，探索所有物種、植物與寶石！',
      zone_amphibians: '兩棲動物',
      zone_amphibians_sub: '探索青蛙與蠑螈 →',
      zone_insects: '昆蟲界',
      zone_insects_sub: '探索蝴蝶與甲蟲 →',
      zone_marine: '海洋生物',
      zone_marine_sub: '探索鯨魚與鯊魚 →',
      zone_land: '陸地動物',
      zone_land_sub: '探索獅子與稀樹草原野生動物 →',
      zone_birds: '鳥類世界',
      zone_birds_sub: '探索飛禽與鳴禽 →',
      zone_plants: '花卉與植物',
      zone_plants_sub: '探索奇花異草與綻放花朵 →',
      zone_gemstones: '寶石與礦物',
      zone_gemstones_sub: '探索晶體與璀璨鑽石 →',
      zone_reptiles: '爬行動物',
      zone_reptiles_sub: '探索變色龍與蛇類 →',
      species_count_amphibians: '94 種物種',
      species_count_insects: '94 種物種',
      species_count_marine: '94 種物種',
      species_count_land: '115 種物種',
      species_count_birds: '全球飛禽圖鑑',
      species_count_plants: '129 種植物',
      species_count_gemstones: '108 種寶石',
      species_count_reptiles: '111 種物種',

      // Category Zone View
      back_home: '← 返回所有探索展區',
      quick_switch_label: '快速切換：',
      filter_all: '所有物種',
      filter_common: '🏡 寵物與常見物種',
      filter_flowers: '🌸 花卉與綻放花朵',
      filter_herbs: '🌿 芳香草本植物',
      filter_precious: '💎 珍貴寶石',
      filter_quartz: '🔮 石英與水晶',
      filter_rare: '✨ 罕見稀有礦物',
      filter_lizards: '🦎 蜥蜴與守宮',
      filter_snakes: '🐍 蛇類世界',
      filter_turtles: '🐢 海龜與陸龜',
      filter_crocs: '🐊 鱷魚類',
      filter_endangered: '⚠️ 瀕危物種',
      filter_least_concern: '✅ 無危物種',
      zone_search_placeholder: '按名稱、飲食、棲息地或特徵搜尋...',
      showing_species: '顯示 {count} 種物種',
      showing_gems: '顯示 {count} 種寶石與礦物',
      showing_reptiles: '顯示 {count} 種爬行動物與蛇類',
      showing_birds: '顯示 {count} 種鳥類',
      showing_land: '顯示 {count} 種陸地動物',
      found_global: '在所有展區中找到 {count} 種生物與寶石',
      empty_title: '未找到任何生物或標本',
      empty_desc: '請嘗試搜尋不同的關鍵字或清除篩選條件！',
      btn_clear_filters: '清除篩選條件',

      // Animal Card & AOD
      card_sound: '叫聲',
      card_chime: '音效',
      card_nature: '自然',
      card_learn_more: '查看詳情與故事 ➡️',
      aod_item_animal: '今日精選動物',
      aod_item_plant: '今日精選植物',
      aod_item_gem: '今日精選寶石',
      aod_item_reptile: '今日精選爬蟲',
      aod_item_bird: '今日精選飛禽',
      aod_surprise_spotlight: '驚喜焦點',
      btn_story: '📖 故事導覽',
      btn_surprise: '🎲 隨機驚喜',
      btn_full_info: '🔍 完整檔案 ➡️',
      spec_habitat: '棲息地',
      spec_diet: '飲食',
      spec_hardness: '硬度',
      spec_fact: '趣味知識',

      // Modals
      btn_close: '關閉',
      modal_xray: '🔬 解剖 X光',
      modal_arena: '⚔️ 派往競技場',
      modal_sound_animal: '🔊 動物叫聲',
      modal_sound_gem: '🔔 水晶鳴音',
      modal_sound_plant: '🌱 自然鳴音',
      modal_story_read: '📖 聆聽故事導覽',
      modal_story_gem: '📖 寶石歷史',
      modal_fav_add: '🤍 加入最愛',
      modal_fav_saved: '❤️ 已收藏',
      modal_prev: '← 上一個標本',
      modal_next: '下一個標本 →',
      modal_origin_habitat: '棲息環境（生活地點）',
      modal_origin_plant: '原生區域與氣候',
      modal_origin_gem: '地質成因與產地礦區',
      modal_origin_reptile: '原生分布與生態系統',
      modal_diet_label: '飲食習性（吃什麼）',
      modal_diet_plant: '日照與土壤需求',
      modal_diet_gem: '化學式與晶體結構',
      modal_diet_reptile: '捕食策略與食物來源',
      modal_status_label: '保育現狀（是否瀕危）',
      modal_status_plant: '花期季節與現狀',
      modal_status_gem: '寶石稀有度與等級',
      modal_status_reptile: '保護與生存狀態',
      modal_pred_label: '天敵與防禦方式',
      modal_pred_plant: '授粉媒介與園藝用途',
      modal_pred_gem: '莫氏硬度與耐久度',
      modal_pred_reptile: '天敵、防禦與毒素',
      modal_story_overview: '📖 探索故事與概況',
      modal_story_gem_overview: '💎 地質發現與概況',
      modal_story_reptile_overview: '🦎 爬行動物檔案與概況',

      // Habitat Backgrounds Modal
      bg_env_badge: '🌍 探險環境背景',
      bg_env_sub: '逼真擬真生物群落',
      bg_modal_title: '🖼️ 逼真野生動物棲息地與桌布',
      bg_modal_sub: '身歷其境體驗令人驚嘆的自然生物群落。選擇一個棲息地，改變所有探索展區的背景視野。',
      bg_upload_title: '從您的電腦上傳照片',
      bg_upload_sub: '點擊瀏覽您的照片或拖放圖檔（.jpg、.png、.webp）',
      bg_btn_browse: '瀏覽裝置',
      bg_url_title: '或使用網路圖片網址',
      bg_url_sub: '貼上桌布的直接網路連結（.jpg、.png、.webp）：',
      bg_apply_url: '套用網址',
      bg_reset_btn: '🔄 重置為預設主題',

      // Toast feedback
      toast_lang_switched: '🌐 已切換語言至：繁體中文 (Traditional Chinese)',
      toast_wallpaper_set: '🏞️ 桌布已設為：{title}！',
      toast_photo_uploaded: '🎉 您上傳的照片已成為背景！',
      toast_reset_bg: '🔄 已重置為預設主題背景。',

      // Footer
      footer_text: '🌿 動物與地球王國 • 為全年齡探險家打造！8 大狂野探索展區，涵蓋 840+ 種物種、植物與礦物。'
    },

    es: {
      // Header
      logo_title: 'EL REINO ANIMAL',
      logo_badge: 'Más de 780 Criaturas, Plantas y Gemas',
      search_placeholder: 'Buscar más de 780 especies, reptiles y gemas...',
      nav_habitats: '🖼️ Hábitats',
      nav_gallery: '🎨 Galería de Arte',
      nav_weather: '🌦️ Clima Animal',
      nav_anatomy: '🔬 Rayos X Anatomía',
      nav_migration: '🗺️ Mapa de Migración',
      nav_arena: '⚔️ Arena de Batalla',
      nav_quiz: '🎮 Juego de Trivia',
      nav_favorites: '❤️ Favoritos',

      // Home Hub
      hub_badge: '🌟 CENTRO PRINCIPAL',
      hub_subtitle: 'Descubrimiento destacado diario de los reinos salvajes de la Tierra',
      new_badge: '✨ NUEVO',
      new_section_title: 'Geniales Aplicaciones Interactivas y Estudio de Arte',
      new_section_sub: '¡Explora nuestras herramientas interactivas, galerías de bellas artes y rastreadores científicos en vivo!',
      art_badge: '🔥 NUEVA APLICACIÓN DESTACADA',
      art_label: '🎨 ESTUDIO DE BELLAS ARTES Y NARRACIÓN',
      art_title: 'Galería de Obras Maestras de Vida Silvestre',
      art_desc: '¡Entra a un museo de bellas artes con vida silvestre en pastel, acuarela, lápiz de color y acrílico, con narración de voz completa!',
      art_launch: '🚀 ¡Iniciar Galería de Arte Ahora! →',
      cool_weather_title: 'Simulador de Clima Animal',
      cool_weather_desc: 'Simula 8 biomas del mundo real y sincroniza con el radar meteorológico de Irvine, California.',
      cool_anatomy_title: 'Escáner de Rayos X de Anatomía',
      cool_anatomy_desc: 'Inspecciona esqueletos de animales, sistemas musculares y capas biológicas de órganos internos.',
      cool_migration_title: 'Migración Global de Vida Silvestre',
      cool_migration_desc: 'Rastrea rutas de telemetría GPS en tiempo real de ballenas, halcones, mariposas monarca y tortugas.',
      cool_arena_title: 'Arena de Batalla Safari',
      cool_arena_desc: 'Simula enfrentamientos basados en estadísticas entre criaturas (ej. León vs Tigre).',
      cool_time_title: 'Máquina del Tiempo de Evolución',
      cool_time_desc: 'Viaja millones de años atrás para ver a los ancestros gigantescos de los animales modernos.',

      // Search Section
      search_badge: '🔎 BÚSQUEDA DE EXPEDICIÓN',
      search_title: 'Busca Cualquier Criatura, Planta, Reptil o Gema',
      search_desc: '¡Busca entre más de 780 especies, reptiles y minerales por nombre común, científico, dieta o hábitat!',
      search_hero_placeholder: 'Buscar en más de 840 especies (ej. Gecko Leopardo, Pitón Bola, Cobra Real, Camaleón, Rosa, Diamante)...',
      btn_search_go: 'Buscar Todo 🚀',
      popular_searches_label: 'Búsquedas Populares:',

      // Discovery Zones
      zones_badge: '🐾 ZONAS DE DESCUBRIMIENTO',
      zones_title: 'Zonas de Descubrimiento de la Tierra',
      zones_desc: '¡Selecciona cualquier zona abajo para entrar y explorar todas las especies, plantas o gemas!',
      zone_amphibians: 'Anfibios',
      zone_amphibians_sub: 'Explora Ranas y Salamandras →',
      zone_insects: 'Insectos',
      zone_insects_sub: 'Explora Mariposas y Escarabajos →',
      zone_marine: 'Vida Marina',
      zone_marine_sub: 'Explora Ballenas y Tiburones →',
      zone_land: 'Animales Terrestres',
      zone_land_sub: 'Explora Leones y Fauna Salvaje →',
      zone_birds: 'Aves',
      zone_birds_sub: 'Explora Aves y Pájaros Cantores →',
      zone_plants: 'Flores y Plantas',
      zone_plants_sub: 'Explora Flora y Flores →',
      zone_gemstones: 'Gemas y Minerales',
      zone_gemstones_sub: 'Explora Cristales y Diamantes →',
      zone_reptiles: 'Reptiles',
      zone_reptiles_sub: 'Explora Camaleones y Serpientes →',
      species_count_amphibians: '94 Especies',
      species_count_insects: '94 Especies',
      species_count_marine: '94 Especies',
      species_count_land: '115 Especies',
      species_count_birds: 'Atlas Global de Aves',
      species_count_plants: '129 Especies',
      species_count_gemstones: '108 Gemas',
      species_count_reptiles: '111 Especies',

      // Category Zone View
      back_home: '← Volver a Todas las Zonas',
      quick_switch_label: 'Cambio Rápido:',
      filter_all: 'Todas las Especies',
      filter_common: '🏡 Mascotas y Comunes',
      filter_flowers: '🌸 Flores y Capullos',
      filter_herbs: '🌿 Hierbas Aromáticas',
      filter_precious: '💎 Gemas Preciosas',
      filter_quartz: '🔮 Cuarzo y Cristales',
      filter_rare: '✨ Minerales Raros',
      filter_lizards: '🦎 Lagartos y Geckos',
      filter_snakes: '🐍 Serpientes',
      filter_turtles: '🐢 Tortugas',
      filter_crocs: '🐊 Cocodrilianos',
      filter_endangered: '⚠️ En Peligro',
      filter_least_concern: '✅ Preocupación Menor',
      zone_search_placeholder: 'Buscar por nombre, dieta, hábitat o superpoder...',
      showing_species: 'Mostrando {count} especies',
      showing_gems: 'Mostrando {count} Gemas y Minerales',
      showing_reptiles: 'Mostrando {count} Reptiles y Serpientes',
      showing_birds: 'Mostrando {count} Especies de Aves',
      showing_land: 'Mostrando {count} Animales Terrestres',
      found_global: 'Encontradas {count} especies y gemas en todas las zonas',
      empty_title: 'No se encontraron criaturas o especímenes',
      empty_desc: '¡Intenta buscar con otra palabra clave o limpia los filtros!',
      btn_clear_filters: 'Limpiar Filtros',

      // Animal Card & AOD
      card_sound: 'Sonido',
      card_chime: 'Campana',
      card_nature: 'Naturaleza',
      card_learn_more: 'Más Información e Historia ➡️',
      aod_item_animal: 'ANIMAL DEL DÍA',
      aod_item_plant: 'PLANTA DEL DÍA',
      aod_item_gem: 'GEMA DEL DÍA',
      aod_item_reptile: 'REPTIL DEL DÍA',
      aod_item_bird: 'AVE DEL DÍA',
      aod_surprise_spotlight: 'DESTACADO SORPRESA',
      btn_story: '📖 Historia',
      btn_surprise: '🎲 Sorpréndeme',
      btn_full_info: '🔍 Info Completa ➡️',
      spec_habitat: 'Hábitat',
      spec_diet: 'Dieta',
      spec_hardness: 'Dureza',
      spec_fact: 'Dato Curioso',

      // Modals
      btn_close: 'Cerrar',
      modal_xray: '🔬 Rayos X Anatomía',
      modal_arena: '⚔️ Luchar en Arena',
      modal_sound_animal: '🔊 Sonido Animal',
      modal_sound_gem: '🔔 Sonido de Cristal',
      modal_sound_plant: '🌱 Sonido de la Naturaleza',
      modal_story_read: '📖 Escuchar Historia',
      modal_story_gem: '📖 Historia de la Gema',
      modal_fav_add: '🤍 Favorito',
      modal_fav_saved: '❤️ Guardado',
      modal_prev: '← Espécimen Anterior',
      modal_next: 'Siguiente Espécimen →',
      modal_origin_habitat: 'Dónde Viven (Hábitat)',
      modal_origin_plant: 'Región Nativa y Clima',
      modal_origin_gem: 'Origen Geológico y Minas',
      modal_origin_reptile: 'Rango Nativo y Ecosistema',
      modal_diet_label: 'Qué Comen (Dieta)',
      modal_diet_plant: 'Luz Solar y Necesidades del Suelo',
      modal_diet_gem: 'Fórmula Química y Estructura Cristalina',
      modal_diet_reptile: 'Dieta y Estrategia de Caza',
      modal_status_label: '¿Están en Peligro? (Estado)',
      modal_status_plant: 'Temporada de Floración y Estado',
      modal_status_gem: 'Rareza y Estado de la Gema',
      modal_status_reptile: 'Estado de Conservación',
      modal_pred_label: '¿Cuáles Son Sus Depredadores?',
      modal_pred_plant: 'Polinizadores y Usos en Jardín',
      modal_pred_gem: 'Dureza de Mohs y Durabilidad',
      modal_pred_reptile: 'Depredadores, Defensa y Veneno',
      modal_story_overview: '📖 Historia y Resumen',
      modal_story_gem_overview: '💎 Descubrimiento Geológico y Resumen',
      modal_story_reptile_overview: '🦎 Perfil del Reptil y Resumen',

      // Habitat Backgrounds Modal
      bg_env_badge: '🌍 ENTORNO DE EXPEDICIÓN',
      bg_env_sub: 'Biomas Fotorrealistas',
      bg_modal_title: '🖼️ Hábitats Fotorrealistas y Fondos de Pantalla',
      bg_modal_sub: 'Sumérgete en biomas naturales impresionantes. Selecciona un hábitat para transformar la vista de tu safari en cada zona.',
      bg_upload_title: 'Subir Foto desde tu Computadora',
      bg_upload_sub: 'Haz clic para explorar tus fotos o suelta un archivo (.jpg, .png, .webp)',
      bg_btn_browse: 'Examinar Dispositivo',
      bg_url_title: 'O Usa la URL de una Imagen Web',
      bg_url_sub: 'Pega un enlace directo a un fondo de pantalla (.jpg, .png, .webp):',
      bg_apply_url: 'Aplicar URL',
      bg_reset_btn: '🔄 Restablecer a Tema Predeterminado',

      // Toast feedback
      toast_lang_switched: '🌐 Idioma cambiado a: Español',
      toast_wallpaper_set: '🏞️ ¡Fondo establecido en: {title}!',
      toast_photo_uploaded: '🎉 ¡Tu foto subida ahora es tu fondo!',
      toast_reset_bg: '🔄 Restablecido al fondo predeterminado del tema.',

      // Footer
      footer_text: '🌿 EL REINO ANIMAL Y DE LA TIERRA • ¡Diseñado para exploradores de todas las edades! Más de 840 especies, plantas y minerales en 8 zonas salvajes.'
    }
  };

  // Comprehensive Multilingual Common Names Dictionary
  const SPECIES_NAMES = {
    // Land Mammals
    'african lion': { zh: '非洲獅', es: 'León Africano' },
    'bengal tiger': { zh: '孟加拉虎', es: 'Tigre de Bengala' },
    'african elephant': { zh: '非洲草原象', es: 'Elefante Africano' },
    'cheetah': { zh: '獵豹', es: 'Guepardo' },
    'leopard': { zh: '花豹', es: 'Leopardo' },
    'jaguar': { zh: '美洲豹', es: 'Jaguar' },
    'polar bear': { zh: '北極熊', es: 'Oso Polar' },
    'grizzly bear': { zh: '灰熊', es: 'Oso Grizzly' },
    'giant panda': { zh: '大熊貓', es: 'Panda Gigante' },
    'red panda': { zh: '小熊貓', es: 'Panda Rojo' },
    'gray wolf': { zh: '灰狼', es: 'Lobo Gris' },
    'red fox': { zh: '赤狐', es: 'Zorro Rojo' },
    'fennec fox': { zh: '耳廓狐', es: 'Zorro Fénec' },
    'snow leopard': { zh: '雪豹', es: 'Leopardo de las Nieves' },
    'hippopotamus': { zh: '河馬', es: 'Hipopótamo' },
    'giraffe': { zh: '長頸鹿', es: 'Jirafa' },
    'plains zebra': { zh: '斑馬', es: 'Cebra de Llanura' },
    'gorilla': { zh: '大猩猩', es: 'Gorila' },
    'chimpanzee': { zh: '黑猩猩', es: 'Chimpancé' },
    'orangutan': { zh: '紅毛猩猩', es: 'Orangután' },
    'koala': { zh: '無尾熊', es: 'Koala' },
    'red kangaroo': { zh: '紅袋鼠', es: 'Canguro Rojo' },
    'sloth': { zh: '樹懶', es: 'Perezoso' },
    'meerkat': { zh: '狐獴', es: 'Suricata' },
    'honey badger': { zh: '蜜獾', es: 'Tejón Melero' },
    'capybara': { zh: '水豚', es: 'Capibara' },
    'platypus': { zh: '鴨嘴獸', es: 'Ornitorrinco' },
    'beaver': { zh: '海狸', es: 'Castor' },
    'wolverine': { zh: '狼獾', es: 'Glotón' },
    'black rhinoceros': { zh: '黑犀牛', es: 'Rinoceronte Negro' },

    // Marine
    'killer whale': { zh: '虎鯨 (殺人鯨)', es: 'Orca' },
    'blue whale': { zh: '藍鯨', es: 'Ballena Azul' },
    'humpback whale': { zh: '座頭鯨', es: 'Ballena Jorobada' },
    'great white shark': { zh: '大白鯊', es: 'Gran Tiburón Blanco' },
    'hammerhead shark': { zh: '雙髻鯊', es: 'Tiburón Martillo' },
    'whale shark': { zh: '鯨鯊', es: 'Tiburón Ballena' },
    'bottlenose dolphin': { zh: '寬吻海豚', es: 'Delfín Mular' },
    'sea otter': { zh: '海獺', es: 'Nutria Marina' },
    'green sea turtle': { zh: '綠蠵龜', es: 'Tortuga Verde Marina' },
    'giant manta ray': { zh: '巨型鬼蝠魟', es: 'Manta Raya Gigante' },
    'clownfish': { zh: '小丑魚', es: 'Pez Payaso' },
    'walrus': { zh: '海象', es: 'Morsa' },
    'giant pacific octopus': { zh: '北太平洋巨型章魚', es: 'Pulpo Gigante del Pacífico' },
    'beluga whale': { zh: '白鯨', es: 'Beluga' },
    'narwhal': { zh: '獨角鯨', es: 'Narval' },
    'manatee': { zh: '海牛', es: 'Manatí' },
    'emperor penguin': { zh: '皇帝企鵝', es: 'Pingüino Emperador' },

    // Birds
    'bald eagle': { zh: '白頭海鵰', es: 'Águila Calva' },
    'golden eagle': { zh: '金鵰', es: 'Águila Real' },
    'peregrine falcon': { zh: '遊隼', es: 'Halcón Peregrino' },
    'snow fairy': { zh: '雪之妖精 (銀喉長尾山雀)', es: 'Hada de la Nieve' },
    'japanese snow fairy': { zh: '雪之妖精 (銀喉長尾山雀)', es: 'Hada de la Nieve Japonesa' },
    'barn owl': { zh: '倉鴞', es: 'Lechuza Común' },
    'snowy owl': { zh: '雪鴞', es: 'Búho Nival' },
    'great horned owl': { zh: '大雕鴞', es: 'Búho Real' },
    'toucan': { zh: '巨嘴鳥', es: 'Tucán' },
    'scarlet macaw': { zh: '緋紅金剛鸚鵡', es: 'Guacamayo Rojo' },
    'flamingo': { zh: '紅鶴', es: 'Flamenco' },
    'ruby-throated hummingbird': { zh: '紅喉蜂鳥', es: 'Colibrí de Garganta Roja' },
    'peacock': { zh: '孔雀', es: 'Pavo Real' },
    'atlantic puffin': { zh: '大西洋海鸚', es: 'Frailecillo Atlántico' },
    'red-tailed hawk': { zh: '紅尾鵟', es: 'Halcón de Cola Roja' },
    'ostrich': { zh: '鴕鳥', es: 'Avestruz' },

    // Amphibians
    'red-eyed tree frog': { zh: '紅眼樹蛙', es: 'Rana de Ojos Rojos' },
    'poison dart frog': { zh: '箭毒蛙', es: 'Rana Flecha Venenosa' },
    'axolotl': { zh: '六角恐龍 (美西螈)', es: 'Ajolote' },
    'american bullfrog': { zh: '美洲牛蛙', es: 'Rana Toro Americana' },
    'fire salamander': { zh: '火蠑螈', es: 'Salamandra Común' },
    'cane toad': { zh: '海蟾蜍', es: 'Sapo de Caña' },
    'japanese giant salamander': { zh: '日本大鯢', es: 'Salamandra Gigante Japonesa' },

    // Insects
    'monarch butterfly': { zh: '帝王斑蝶', es: 'Mariposa Monarca' },
    'honey bee': { zh: '西方蜜蜂', es: 'Abeja Melífera' },
    'praying mantis': { zh: '螳螂', es: 'Mantiss Religiosa' },
    'rhinoceros beetle': { zh: '獨角仙', es: 'Escarabajo Rinoceronte' },
    'hercules beetle': { zh: '長戟大兜蟲', es: 'Escarabajo Hércules' },
    'dragonfly': { zh: '蜻蜓', es: 'Libélula' },
    'seven-spotted ladybug': { zh: '七星瓢蟲', es: 'Mariquita de Siete Puntos' },
    'luna moth': { zh: '月形天蠶蛾', es: 'Polilla Luna' },
    'atlas moth': { zh: '皇蛾 (蛇頭蛾)', es: 'Polilla Atlas' },
    'leafcutter ant': { zh: '切葉蟻', es: 'Hormiga Cortadora de Hojas' },

    // Reptiles
    'komodo dragon': { zh: '科莫多巨蜥', es: 'Dragón de Komodo' },
    'king cobra': { zh: '眼鏡王蛇', es: 'Cobra Real' },
    'black mamba': { zh: '黑曼巴蛇', es: 'Mamba Negra' },
    'green anaconda': { zh: '森蚺', es: 'Anaconda Verde' },
    'ball python': { zh: '球蟒', es: 'Pitón Bola' },
    'leopard gecko': { zh: '豹紋守宮', es: 'Gecko Leopardo' },
    'veiled chameleon': { zh: '高冠變色龍', es: 'Camaleón de Velo' },
    'central bearded dragon': { zh: '鬃獅蜥', es: 'Dragón Barbudo' },
    'galapagos tortoise': { zh: '加拉巴哥象龜', es: 'Tortuga Gigante de Galápagos' },
    'nile crocodile': { zh: '尼羅鱷', es: 'Cocodrilo del Nilo' },
    'american alligator': { zh: '美國短吻鱷', es: 'Caimán Americano' },
    'eastern box turtle': { zh: '東部箱龜', es: 'Tortuga de Caja Oriental' },

    // Plants
    'rose': { zh: '玫瑰', es: 'Rosa' },
    'hibiscus': { zh: '扶桑花 (木槿)', es: 'Hibisco' },
    'sunflower': { zh: '向日葵', es: 'Girasol' },
    'tulip': { zh: '鬱金香', es: 'Tulipán' },
    'cherry blossom': { zh: '櫻花', es: 'Flor de Cerezo' },
    'lotus': { zh: '蓮花', es: 'Loto Sagrado' },
    'venus flytrap': { zh: '捕蠅草', es: 'Venus Atrapamoscas' },
    'orchid': { zh: '蘭花', es: 'Orquídea' },
    'lavender': { zh: '薰衣草', es: 'Lavanda' },
    'giant sequoia': { zh: '巨杉 (世界爺)', es: 'Secuoya Gigante' },
    'baobab tree': { zh: '猴麵包樹', es: 'Árbol Baobab' },
    'edelweiss': { zh: '小白花 (雪絨花)', es: 'Edelweiss' },

    // Gemstones
    'diamond': { zh: '鑽石', es: 'Diamante' },
    'ruby': { zh: '紅寶石', es: 'Rubí' },
    'sapphire': { zh: '藍寶石', es: 'Zafiro' },
    'emerald': { zh: '祖母綠', es: 'Esmeralda' },
    'amethyst': { zh: '紫水晶', es: 'Amatista' },
    'opal': { zh: '蛋白石 (歐泊)', es: 'Ópalo' },
    'topaz': { zh: '黃玉 (拓帕石)', es: 'Topacio' },
    'tanzanite': { zh: '坦桑石', es: 'Tanzanita' },
    'alexandrite': { zh: '亞歷山大變色石', es: 'Alejandrita' },
    'jadeite': { zh: '翡翠 (硬玉)', es: 'Jadeíta' },
    'aquamarine': { zh: '海藍寶石', es: 'Aguamarina' },
    'peridot': { zh: '橄欖石', es: 'Peridoto' },
    'lapis lazuli': { zh: '青金石', es: 'Lapislázuli' },
    'moonstone': { zh: '月光石', es: 'Piedra de la Luna' },
    'turquoise': { zh: '綠松石', es: 'Turquesa' },
    'garnet': { zh: '石榴石', es: 'Granate' }
  };

  const I18nEngine = {
    currentLang: 'en',

    init() {
      const saved = localStorage.getItem('ak_lang');
      if (saved && TRANSLATIONS[saved]) {
        this.currentLang = saved;
      } else {
        this.currentLang = 'en';
      }
      this.updateSwitcherButtons();
    },

    getLanguage() {
      return this.currentLang;
    },

    setLanguage(lang) {
      if (!TRANSLATIONS[lang]) return;
      this.currentLang = lang;
      localStorage.setItem('ak_lang', lang);
      document.documentElement.lang = lang === 'zh' ? 'zh-Hant' : lang;
      this.updateSwitcherButtons();
      this.applyToDom();

      if (window.app && window.app.onLanguageChange) {
        window.app.onLanguageChange(lang);
      }
    },

    updateSwitcherButtons() {
      document.querySelectorAll('.btn-lang-toggle').forEach(btn => {
        const lang = btn.getAttribute('data-lang');
        if (lang === this.currentLang) {
          btn.classList.add('active');
        } else {
          btn.classList.remove('active');
        }
      });
    },

    t(key, params = {}) {
      const dict = TRANSLATIONS[this.currentLang] || TRANSLATIONS.en;
      let text = dict[key] || TRANSLATIONS.en[key] || key;
      for (const [k, v] of Object.entries(params)) {
        text = text.replace(new RegExp(`\\{${k}\\}`, 'g'), v);
      }
      return text;
    },

    getSpeciesName(animal) {
      if (!animal || !animal.name) return '';
      if (this.currentLang === 'en') return animal.name;

      const lower = animal.name.toLowerCase().trim();
      const direct = SPECIES_NAMES[lower];
      if (direct && direct[this.currentLang]) {
        return direct[this.currentLang];
      }

      // Check partial match
      for (const [key, val] of Object.entries(SPECIES_NAMES)) {
        if (lower.includes(key) && val[this.currentLang]) {
          return val[this.currentLang];
        }
      }

      return animal.name;
    },

    getStatusName(status) {
      if (!status) return '';
      if (this.currentLang === 'en') return status;

      const s = status.toLowerCase();
      if (s.includes('critically')) {
        return this.currentLang === 'zh' ? '極危 (CR)' : 'En Peligro Crítico';
      }
      if (s.includes('endangered')) {
        return this.currentLang === 'zh' ? '瀕危 (EN)' : 'En Peligro';
      }
      if (s.includes('vulnerable')) {
        return this.currentLang === 'zh' ? '易危 (VU)' : 'Vulnerable';
      }
      if (s.includes('near threatened')) {
        return this.currentLang === 'zh' ? '近危 (NT)' : 'Casi Amenazado';
      }
      if (s.includes('least concern')) {
        return this.currentLang === 'zh' ? '無危 (LC)' : 'Preocupación Menor';
      }
      if (s.includes('domestic')) {
        return this.currentLang === 'zh' ? '馴養動物' : 'Domesticado';
      }
      if (s.includes('precious')) {
        return this.currentLang === 'zh' ? '珍貴寶石' : 'Gema Preciosa';
      }
      if (s.includes('rare') || s.includes('ultra')) {
        return this.currentLang === 'zh' ? '稀有礦物' : 'Mineral Raro';
      }

      return status;
    },

    applyToDom() {
      // Elements with data-i18n
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const text = this.t(key);
        if (text && text !== key) {
          el.textContent = text;
        }
      });

      // Elements with data-i18n-html
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        const html = this.t(key);
        if (html && html !== key) {
          el.innerHTML = html;
        }
      });

      // Input placeholders with data-i18n-placeholder
      document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        const text = this.t(key);
        if (text && text !== key) {
          el.placeholder = text;
        }
      });

      // Title attributes with data-i18n-title
      document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        const text = this.t(key);
        if (text && text !== key) {
          el.title = text;
        }
      });
    }
  };

  I18nEngine.init();
  window.AK_I18N = I18nEngine;

})(window);
