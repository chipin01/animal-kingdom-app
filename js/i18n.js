/**
 * The Animal Kingdom - Complete Multilingual (i18n) & Voice Engine
 * Supports:
 * - English ('en')
 * - 繁體中文 ('zh') - Traditional Chinese
 * - Español ('es') - Spanish
 */

(function(window) {
  'use strict';

  const TRANSLATIONS = {
    en: {
      // Header & Navigation
      logo_title: 'THE ANIMAL KINGDOM',
      logo_badge: '780+ Creatures, Plants & Gemstones',
      search_placeholder: 'Search 780+ species, reptiles & gems...',
      nav_habitats: '🖼️ Habitats',
      nav_gallery: '🎨 Art Gallery',
      nav_weather: '🌦️ Animal Weather',
      nav_anatomy: '🔬 Anatomy X-Ray',
      nav_migration: '🗺️ Migration Map',
      nav_arena: '⚔️ Battle Arena',
      nav_quiz: '🎮 Quiz',
      nav_favorites: '❤️ Favs',

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

      // Detail Modal
      btn_close: 'Close',
      modal_xray: '🔬 X-Ray Anatomy',
      modal_arena: '⚔️ Send to Arena',
      modal_sound_animal: '🔊 Animal Sound',
      modal_sound_gem: '🔔 Crystal Chime',
      modal_sound_plant: '🌱 Nature Chime',
      modal_story_read: '📖 Listen to Story',
      modal_story_gem: '📖 Crystal Story',
      modal_story_stop: '⏹️ Stop Story',
      modal_fav_add: '🤍 Favorite',
      modal_fav_saved: '❤️ Saved',
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

      // Safari Quiz Game Modal
      quiz_score_label: '⭐ Score:',
      quiz_streak_label: '🔥 Streak:',
      quiz_skip_btn: '⏭️ Skip',
      quiz_clues_badge: '🕵️ MYSTERY CREATURE CLUES',
      quiz_question_title: 'Who Am I?',
      quiz_clue_live: 'Where I live:',
      quiz_clue_eat: 'What I eat:',
      quiz_clue_pred: 'My Predators:',
      quiz_reveal_clue: '💡 Reveal Secret Clue',
      quiz_secret_clue_label: '💡 Fun Secret Clue:',
      quiz_correct_title: '🎉 HOORAY! YOU GOT IT RIGHT!',
      quiz_correct_text: 'I am the {name} ({sci})! {tagline}',
      quiz_wrong_title: '🐾 Nice Try!',
      quiz_wrong_text: 'The mystery creature was the {name} ({sci})!',
      quiz_btn_read_story: '📖 Read Full Story',
      quiz_btn_learn_about: '📖 Learn About It',
      quiz_btn_next: 'Next Mystery Creature ➡️',
      quiz_btn_try_another: 'Try Another ➡️',

      // Creature Battle Arena Modal
      battle_badge: '⚔️ BIOLOGICAL SIMULATOR',
      battle_title: 'Creature Face-Off Arena',
      battle_desc: 'Pit any 2 species, predators, or animals against each other using real biological facts, bite force, speed, and defense!',
      battle_presets_label: '🔥 Legendary Matchups:',
      battle_f1_tag: 'FIGHTER 1 (RED CORNER)',
      battle_f2_tag: 'FIGHTER 2 (BLUE CORNER)',
      battle_search_ph: 'Search any animal...',
      battle_random: '🎲 Random',
      battle_swap: '⇄',
      battle_simulate_btn: '⚔️ SIMULATE BATTLE!',
      battle_stat_weight: 'Weight',
      battle_stat_speed: 'Speed',
      battle_stat_bite: 'Bite Force',
      battle_stat_armor: 'Armor',
      battle_stat_superpower: '⚡ Superpower:',
      battle_stat_weapon: '⚔️ Weapon:',
      battle_winner_banner: '🏆 VICTORY TO {name}!',

      // Animal Weather Simulator Modal
      weather_badge: '🌦️ METEOROLOGICAL RADAR & HABITAT SIMULATOR',
      weather_title: 'Animal Weather & Climate Simulator',
      weather_desc: 'Adjust meteorological conditions to see which animals emerge, hunt, and thrive—plus live real-time Irvine wildlife detection!',
      weather_count_pill: '📡 {count} Species Active',
      weather_presets_label: 'Weather Presets:',
      weather_preset_rain: '🌧️ Rain',
      weather_preset_storm: '⛈️ Thunderstorm',
      weather_preset_sunny: '☀️ Sunny / Heatwave',
      weather_preset_snow: '❄️ Polar Snow',
      weather_preset_fog: '🌫️ Cloud Mist',
      weather_preset_wind: '🍃 Autumn Gale',
      weather_preset_night: '🌙 Moonlit Night',
      weather_slider_temp: '🌡️ Temperature:',
      weather_slider_rain: '💧 Rain / Precip:',
      weather_slider_wind: '💨 Wind Speed:',
      weather_slider_time: '⏰ Time of Day:',
      weather_time_day: '☀️ Daytime',
      weather_time_sunset: '🌅 Sunset / Dusk',
      weather_time_night: '🌙 Midnight',
      weather_hint_tap: '👆 Tap any glowing creature dot to inspect why it loves this weather!',
      irvine_badge: '📍 REAL-TIME CITY FORECASTER',
      irvine_raining_btn: "🌧️ It's Raining!",
      irvine_sync_btn: '⚡ Sync Weather',
      irvine_temp_label: 'Irvine Temp:',
      irvine_cond_label: 'Condition:',
      irvine_wildlife_active: "🐾 Irvine Wildlife Active in Today's Weather:",

      // Anatomy Scanner Modal
      anatomy_badge: '🔬 BIOMECHANICAL & X-RAY SCANNER',
      anatomy_title: 'Animal Internal Anatomy & X-Ray Scanner',
      anatomy_desc: 'Look inside any creature to inspect its bones, skull mechanics, digestive acid chambers, heart rate, and internal organs!',
      anatomy_search_ph: 'Search ANY animal to scan its inside (e.g. Shark, Lion, Python, Eagle, Frog)...',
      anatomy_scan_btn: 'Scan Inside 🔬',
      anatomy_layer_all: '✨ Full Cross-Section',
      anatomy_layer_skeleton: '🦴 Skeleton & Bones',
      anatomy_layer_digestion: '🍖 Digestion & Stomach',
      anatomy_layer_organs: '🫀 Heart & Lungs',
      anatomy_layer_brain: '🧠 Brain & Senses',
      anatomy_layer_muscles: '🥩 Muscles',
      anatomy_depth_label: '🎚️ Scan Depth:',

      // Migration Tracker Modal
      migration_badge: '🛰️ REAL-TIME SATELLITE TELEMETRY',
      migration_title: 'Live Global Wildlife Migration Tracker',
      migration_desc: 'Scientifically verified GPS telemetry routes, active seasonal flyways & real-time animal journey tracking',
      migration_all_flyways: '🌍 All Flyways',
      migration_active_now: '🔴 Active Right Now',
      migration_birds: '🦅 Birds',
      migration_marine: '🐋 Marine',
      migration_land: '🦓 Land Herds',
      migration_insects: '🦋 Insects',
      migration_sync_label: '🔴 Live Real-World Sync: {month} ({count} Active Flyways)',
      migration_season_timetravel: '⏱️ Season Time-Travel:',
      migration_search_ph: 'Search migrations (e.g. Monarch, Caribou, Whale)...',

      // Art Gallery & Inspector Modals
      art_gallery_badge: '🎨 FINE ART COLLECTION',
      art_gallery_sub_badge: 'Pastel • Watercolor • Colored Pencil • Acrylic',
      art_gallery_title: '🖼️ Wildlife Masterpiece Art Gallery',
      art_gallery_subtitle: 'Experience live animals captured through authentic traditional fine-art mediums. Click any artwork to inspect techniques & listen to the narration!',
      art_filter_all: '🌟 All Masterpieces (6)',
      art_filter_watercolor: '🖌️ Watercolor',
      art_filter_pencil: '✏️ Colored Pencil',
      art_filter_pastel: '🖍️ Soft Pastel',
      art_filter_acrylic: '🎨 Acrylic Paint',
      art_loading_txt: 'Loading masterworks...',
      art_loading_sub: 'Fetching high-quality artwork files',
      art_btn_speak_read: '🔊 Read / Speak Description',
      art_btn_speaking: '🔊 Speaking... (British 🇬🇧)',
      art_spec_paper: '📜 Paper / Canvas:',
      art_spec_dim: '📏 Dimensions:',
      art_heading_desc: '📖 Artwork Description & Artistry',
      art_heading_techniques: '🎨 Traditional Artistic Techniques Applied',
      art_heading_bio: '🐾 Live Animal Habitat & Biology',
      art_label_habitat: '🌿 Habitat:',
      art_label_fact: '💡 Wildlife Fact:',

      // Prehistoric Time Machine Modal
      tm_title: '🕰️ Prehistoric Evolution Time Machine',
      tm_desc: 'Travel back millions of years. Select a modern creature below and turn the dial to reveal its giant ancient ancestors!',
      tm_present_day: 'Present Day',
      tm_millions_ago: 'Millions of Years Ago',
      tm_era_present: 'Era: Present Day',
      tm_label_modern: 'Modern Day',
      tm_label_prehistoric: 'Prehistoric Past',

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

      // Favorites Modal
      fav_modal_title: '❤️ Your Saved Wildlife Favorites',
      fav_modal_subtitle: 'Easily access all your bookmarked species, rare rocks, plants, and reptiles across your safari expeditions.',
      fav_empty_title: 'No favorites saved yet',
      fav_empty_desc: 'Click the heart icon on any animal, reptile, plant, or gemstone card to save it here!',
      fav_clear_all: '🗑️ Clear All Favorites',

      // Toast feedback
      toast_lang_switched: '🌐 Language switched to: English',
      toast_wallpaper_set: '🏞️ Wallpaper set to: {title}!',
      toast_photo_uploaded: '🎉 Your uploaded photo is now your background!',
      toast_reset_bg: '🔄 Reset to default theme background.',

      // Footer
      footer_text: '🌿 THE ANIMAL & EARTH KINGDOM • Built for explorers of every age! 840 species, plants & minerals across 8 wild discovery zones.'
    },

    zh: {
      // Header & Navigation
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
      btn_full_info: '🔍 完整資訊 ➡️',
      spec_habitat: '棲息地',
      spec_diet: '飲食習性',
      spec_hardness: '摩氏硬度',
      spec_fact: '趣味小知識',

      // Detail Modal
      btn_close: '關閉',
      modal_xray: '🔬 X光 解剖掃描',
      modal_arena: '⚔️ 送入競技場',
      modal_sound_animal: '🔊 動物叫聲',
      modal_sound_gem: '🔔 水晶鳴響',
      modal_sound_plant: '🌱 自然之聲',
      modal_story_read: '📖 聆聽語音故事',
      modal_story_gem: '📖 水晶誕生傳奇',
      modal_story_stop: '⏹️ 停止朗讀故事',
      modal_fav_add: '🤍 收藏',
      modal_fav_saved: '❤️ 已收藏',
      modal_origin_habitat: '生長棲息地 (分佈地區)',
      modal_origin_plant: '原生氣候與生長環境',
      modal_origin_gem: '地質成因與礦產產地',
      modal_origin_reptile: '原生地理範圍與生態系',
      modal_diet_label: '食物與攝食習性 (飲食)',
      modal_diet_plant: '日照需求與土壤養分',
      modal_diet_gem: '化學成分與晶體結構',
      modal_diet_reptile: '獵食策略與食物來源',
      modal_status_label: '保育現狀 (瀕危等級)',
      modal_status_plant: '開花花期與生長狀態',
      modal_status_gem: '寶石珍稀度與評級',
      modal_status_reptile: '野生保護等級',
      modal_pred_label: '天敵與自然挑戰',
      modal_pred_plant: '授粉昆蟲與園藝價值',
      modal_pred_gem: '摩氏硬度與物理耐久度',
      modal_pred_reptile: '天敵防禦與毒液威脅',
      modal_story_overview: '📖 生態故事與總覽',
      modal_story_gem_overview: '💎 地質奧秘與礦物總覽',
      modal_story_reptile_overview: '🦎 爬行動物檔案與總覽',

      // Safari Quiz Game Modal
      quiz_score_label: '⭐ 得分：',
      quiz_streak_label: '🔥 連勝：',
      quiz_skip_btn: '⏭️ 跳過',
      quiz_clues_badge: '🕵️ 神秘生物線索',
      quiz_question_title: '猜猜我是誰？',
      quiz_clue_live: '我居住在哪裡：',
      quiz_clue_eat: '我吃些什麼：',
      quiz_clue_pred: '我的天敵：',
      quiz_reveal_clue: '💡 揭曉秘密線索',
      quiz_secret_clue_label: '💡 趣味秘密線索：',
      quiz_correct_title: '🎉 太棒了！您答對了！',
      quiz_correct_text: '我就是 {name} ({sci})！{tagline}',
      quiz_wrong_title: '🐾 差一點點！',
      quiz_wrong_text: '這隻神秘生物其實是 {name} ({sci})！',
      quiz_btn_read_story: '📖 閱讀完整故事',
      quiz_btn_learn_about: '📖 探索生物檔案',
      quiz_btn_next: '下一隻神秘生物 ➡️',
      quiz_btn_try_another: '再試一題 ➡️',

      // Creature Battle Arena Modal
      battle_badge: '⚔️ 生物對決模擬器',
      battle_title: '野生動物戰鬥競技場',
      battle_desc: '以真實生物學數據、咬合力、奔跑速度與防禦力，讓任意兩種動物展開科學對決！',
      battle_presets_label: '🔥 傳奇巔峰對決：',
      battle_f1_tag: '參賽選手 1 (紅角選手)',
      battle_f2_tag: '參賽選手 2 (藍角選手)',
      battle_search_ph: '搜尋任何動物...',
      battle_random: '🎲 隨機挑選',
      battle_swap: '⇄ 交換角落',
      battle_simulate_btn: '⚔️ 開始戰鬥模擬！',
      battle_stat_weight: '體重',
      battle_stat_speed: '速度',
      battle_stat_bite: '咬合力',
      battle_stat_armor: '防禦裝甲',
      battle_stat_superpower: '⚡ 特殊能力：',
      battle_stat_weapon: '⚔️ 主要武器：',
      battle_winner_banner: '🏆 勝利者：{name}！',

      // Animal Weather Simulator Modal
      weather_badge: '🌦️ 氣象雷達與棲息地模擬器',
      weather_title: '動物天氣與氣候模擬器',
      weather_desc: '調整氣象條件，觀察哪些動物會出來覓食與活躍—更能同步加州爾灣真實野生動態！',
      weather_count_pill: '📡 {count} 種生物活躍中',
      weather_presets_label: '天氣預設模式：',
      weather_preset_rain: '🌧️ 雨天',
      weather_preset_storm: '⛈️ 雷陣雨',
      weather_preset_sunny: '☀️ 艷陽晴天 / 熱浪',
      weather_preset_snow: '❄️ 極地風雪',
      weather_preset_fog: '🌫️ 雲霧迷濛',
      weather_preset_wind: '🍃 秋季狂風',
      weather_preset_night: '🌙 月光之夜',
      weather_slider_temp: '🌡️ 氣溫：',
      weather_slider_rain: '💧 降雨量：',
      weather_slider_wind: '💨 風速：',
      weather_slider_time: '⏰ 時間段：',
      weather_time_day: '☀️ 白天',
      weather_time_sunset: '🌅 日落 / 黃昏',
      weather_time_night: '🌙 午夜',
      weather_hint_tap: '👆 點擊畫面上發光的動物光點，查看牠為何喜愛這種天氣！',
      irvine_badge: '📍 即時城市氣象監測',
      irvine_raining_btn: '🌧️ 爾灣正在下雨！',
      irvine_sync_btn: '⚡ 同步真實天氣',
      irvine_temp_label: '爾灣當前氣溫：',
      irvine_cond_label: '天氣狀況：',
      irvine_wildlife_active: '🐾 今日在此天氣下活躍的野生動物：',

      // Anatomy Scanner Modal
      anatomy_badge: '🔬 生物力學與 X光 掃描儀',
      anatomy_title: '動物內部解剖與 X光 掃描儀',
      anatomy_desc: '透視任何生物體內，檢視其骨骼架構、頭骨咬合、胃部消化液腔室、心率與內臟器官！',
      anatomy_search_ph: '搜尋任何動物以透視掃描（例如：鯊魚、獅子、蟒蛇、老鷹、青蛙）...',
      anatomy_scan_btn: '掃描體內 🔬',
      anatomy_layer_all: '✨ 完整剖面',
      anatomy_layer_skeleton: '🦴 骨骼與骨架',
      anatomy_layer_digestion: '🍖 消化系統與胃',
      anatomy_layer_organs: '🫀 心臟與肺部',
      anatomy_layer_brain: '🧠 大腦與感官',
      anatomy_layer_muscles: '🥩 肌肉組織',
      anatomy_depth_label: '🎚️ 掃描深度：',

      // Migration Tracker Modal
      migration_badge: '🛰️ 即時衛星遙測技術',
      migration_title: '全球野生動物即時遷徙追蹤地圖',
      migration_desc: '基於科研認證的 GPS 衛星遙測路線、季節性飛行廊道與即時動物長征追蹤',
      migration_all_flyways: '🌍 所有飛行與洄游路線',
      migration_active_now: '🔴 此刻正在活躍遷徙',
      migration_birds: '🦅 飛禽鳥類',
      migration_marine: '🐋 海洋游弋',
      migration_land: '🦓 陸地獸群',
      migration_insects: '🦋 昆蟲界',
      migration_sync_label: '🔴 即時真實同步：{month}（{count} 條活躍遷徙路線）',
      migration_season_timetravel: '⏱️ 季節時光切換：',
      migration_search_ph: '搜尋遷徙路線（例如：帝王斑蝶、馴鹿、座頭鯨）...',

      // Art Gallery & Inspector Modals
      art_gallery_badge: '🎨 精緻藝術館藏',
      art_gallery_sub_badge: '粉彩 • 水彩 • 色鉛筆 • 壓克力顏料',
      art_gallery_title: '🖼️ 野生動物大師級藝術畫廊',
      art_gallery_subtitle: '走入精緻藝術博物館，欣賞以傳統藝術技法繪製的野生生靈。點選任一幅作品以細細品味繪畫技法並聆聽語音解說！',
      art_filter_all: '🌟 全部大師作品 (6)',
      art_filter_watercolor: '🖌️ 水彩畫',
      art_filter_pencil: '✏️ 彩色鉛筆',
      art_filter_pastel: '🖍️ 軟式粉彩',
      art_filter_acrylic: '🎨 壓克力顏料',
      art_loading_txt: '正在載入大師級畫作...',
      art_loading_sub: '正在擷取高解析度藝術作品檔案',
      art_btn_speak_read: '🔊 朗讀藝術作品與解說',
      art_btn_speaking: '🔊 正在語音朗讀中... (繁體中文 🇹🇼)',
      art_spec_paper: '📜 紙質 / 畫布：',
      art_spec_dim: '📏 畫作尺寸：',
      art_heading_desc: '📖 畫作描述與藝術造詣',
      art_heading_techniques: '🎨 運用的傳統藝術繪畫技法',
      art_heading_bio: '🐾 真實動物棲息地與生物學筆記',
      art_label_habitat: '🌿 生存環境：',
      art_label_fact: '💡 野生生物筆記：',

      // Prehistoric Time Machine Modal
      tm_title: '🕰️ 史前演化時光機',
      tm_desc: '穿越數百萬年時光！在下方挑選現代動物，旋動轉盤揭開牠們巨大的史前遠古祖先！',
      tm_present_day: '現代今日',
      tm_millions_ago: '數百萬年前',
      tm_era_present: '年代：現代今日',
      tm_label_modern: '現代物種',
      tm_label_prehistoric: '史前遠古',

      // Habitat Backgrounds Modal
      bg_env_badge: '🌍 探險環境設定',
      bg_env_sub: '真實自然生物群落',
      bg_modal_title: '🖼️ 真實野生棲息地與高畫質桌布',
      bg_modal_sub: '讓您的探索旅程沉浸在壯麗真實的自然生物群落中。選擇棲息地桌布，即可為所有探索展區更換背景。',
      bg_upload_title: '從您的電腦上傳相片',
      bg_upload_sub: '點擊以瀏覽相片或拖放圖片檔案 (.jpg, .png, .webp)',
      bg_btn_browse: '瀏覽本機檔案',
      bg_url_title: '或使用網路圖片網址',
      bg_url_sub: '貼上線上桌布圖片的直接連結 (.jpg, .png, .webp)：',
      bg_apply_url: '套用網址',
      bg_reset_btn: '🔄 重置為預設主題',

      // Favorites Modal
      fav_modal_title: '❤️ 您收藏的野生動物珍品',
      fav_modal_subtitle: '隨時查看您在 Safari 探險中所珍藏的所有動物、珍奇寶石、植物與爬行類生物。',
      fav_empty_title: '尚未加入任何收藏',
      fav_empty_desc: '在任何動物、爬蟲、植物或寶石卡片上點擊愛心圖示，即可將其收藏至此！',
      fav_clear_all: '🗑️ 清除所有收藏',

      // Toast feedback
      toast_lang_switched: '🌐 已切換語言至：繁體中文 (Traditional Chinese)',
      toast_wallpaper_set: '🏞️ 桌布已設為：{title}！',
      toast_photo_uploaded: '🎉 您上傳的照片已成為背景！',
      toast_reset_bg: '🔄 已重置為預設主題背景。',

      // Footer
      footer_text: '🌿 動物與地球王國 • 為全年齡探險家打造！8 大狂野探索展區，涵蓋 840+ 種物種、植物與礦物。'
    },

    es: {
      // Header & Navigation
      logo_title: 'EL REINO ANIMAL',
      logo_badge: 'Más de 780 Criaturas, Plantas y Gemas',
      search_placeholder: 'Buscar más de 780 especies, reptiles y gemas...',
      nav_habitats: '🖼️ Hábitats',
      nav_gallery: '🎨 Galería de Arte',
      nav_weather: '🌦️ Clima Animal',
      nav_anatomy: '🔬 Rayos X Anatomía',
      nav_migration: '🗺️ Mapa de Migración',
      nav_arena: '⚔️ Arena de Batalla',
      nav_quiz: '🎮 Trivia',
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

      // Detail Modal
      btn_close: 'Cerrar',
      modal_xray: '🔬 Rayos X Anatomía',
      modal_arena: '⚔️ Enviar a la Arena',
      modal_sound_animal: '🔊 Sonido Animal',
      modal_sound_gem: '🔔 Campanada de Cristal',
      modal_sound_plant: '🌱 Sonido de Naturaleza',
      modal_story_read: '📖 Escuchar Historia',
      modal_story_gem: '📖 Historia del Cristal',
      modal_story_stop: '⏹️ Detener Historia',
      modal_fav_add: '🤍 Favorito',
      modal_fav_saved: '❤️ Guardado',
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

      // Safari Quiz Game Modal
      quiz_score_label: '⭐ Puntuación:',
      quiz_streak_label: '🔥 Racha:',
      quiz_skip_btn: '⏭️ Saltar',
      quiz_clues_badge: '🕵️ PISTAS DE LA CRIATURA MISTERIOSA',
      quiz_question_title: '¿Quién Soy Yo?',
      quiz_clue_live: 'Dónde vivo:',
      quiz_clue_eat: 'Qué como:',
      quiz_clue_pred: 'Mis depredadores:',
      quiz_reveal_clue: '💡 Revelar Pista Secreta',
      quiz_secret_clue_label: '💡 Pista Secreta Curiosa:',
      quiz_correct_title: '🎉 ¡HURRA! ¡ACERTASTE!',
      quiz_correct_text: '¡Soy el {name} ({sci})! {tagline}',
      quiz_wrong_title: '🐾 ¡Buen intento!',
      quiz_wrong_text: '¡La criatura misteriosa era el {name} ({sci})!',
      quiz_btn_read_story: '📖 Leer Historia Completa',
      quiz_btn_learn_about: '📖 Conocer Más',
      quiz_btn_next: 'Siguiente Criatura ➡️',
      quiz_btn_try_another: 'Probar Otra ➡️',

      // Creature Battle Arena Modal
      battle_badge: '⚔️ SIMULADOR BIOLÓGICO',
      battle_title: 'Arena de Batalla de Criaturas',
      battle_desc: '¡Enfrenta a dos especies utilizando hechos biológicos reales, fuerza de mordida, velocidad y armadura defensiva!',
      battle_presets_label: '🔥 Enfrentamientos Legendarios:',
      battle_f1_tag: 'LUCHADOR 1 (ESQUINA ROJA)',
      battle_f2_tag: 'LUCHADOR 2 (ESQUINA AZUL)',
      battle_search_ph: 'Buscar cualquier animal...',
      battle_random: '🎲 Aleatorio',
      battle_swap: '⇄ Cambiar',
      battle_simulate_btn: '⚔️ ¡SIMULAR BATALLA!',
      battle_stat_weight: 'Peso',
      battle_stat_speed: 'Velocidad',
      battle_stat_bite: 'Mordida',
      battle_stat_armor: 'Armadura',
      battle_stat_superpower: '⚡ Superpoder:',
      battle_stat_weapon: '⚔️ Arma:',
      battle_winner_banner: '🏆 ¡VICTORIA PARA {name}!',

      // Animal Weather Simulator Modal
      weather_badge: '🌦️ RADAR METEOROLÓGICO Y SIMULADOR',
      weather_title: 'Simulador de Clima y Fauna Animal',
      weather_desc: '¡Ajusta las condiciones climáticas para ver qué animales emergen, cazan y prosperan—además de detección en vivo en Irvine!',
      weather_count_pill: '📡 {count} Especies Activas',
      weather_presets_label: 'Ajustes Preestablecidos:',
      weather_preset_rain: '🌧️ Lluvia',
      weather_preset_storm: '⛈️ Tormenta',
      weather_preset_sunny: '☀️ Soleado / Calor',
      weather_preset_snow: '❄️ Nieve Polar',
      weather_preset_fog: '🌫️ Niebla Nublada',
      weather_preset_wind: '🍃 Viento Fuerte',
      weather_preset_night: '🌙 Noche Iluminada',
      weather_slider_temp: '🌡️ Temperatura:',
      weather_slider_rain: '💧 Lluvia / Precipitación:',
      weather_slider_wind: '💨 Velocidad del Viento:',
      weather_slider_time: '⏰ Momento del Día:',
      weather_time_day: '☀️ Día',
      weather_time_sunset: '🌅 Atardecer',
      weather_time_night: '🌙 Medianoche',
      weather_hint_tap: '👆 ¡Toca cualquier punto brillante para descubrir por qué adora este clima!',
      irvine_badge: '📍 PRONÓSTICO EN TIEMPO REAL',
      irvine_raining_btn: '🌧️ ¡Está Lloviendo!',
      irvine_sync_btn: '⚡ Sincronizar Clima',
      irvine_temp_label: 'Temperatura Irvine:',
      irvine_cond_label: 'Condición:',
      irvine_wildlife_active: '🐾 Fauna activa hoy con este clima:',

      // Anatomy Scanner Modal
      anatomy_badge: '🔬 ESCÁNER BIOMECÁNICO Y RAYOS X',
      anatomy_title: 'Escáner de Rayos X y Anatomía Interna',
      anatomy_desc: '¡Mira el interior de cualquier criatura para inspeccionar huesos, mecánica del cráneo, digestión y órganos internos!',
      anatomy_search_ph: 'Busca CUALQUIER animal para escanear su interior (ej. Tiburón, León, Pitón, Águila, Rana)...',
      anatomy_scan_btn: 'Escanear Interior 🔬',
      anatomy_layer_all: '✨ Sección Completa',
      anatomy_layer_skeleton: '🦴 Esqueleto y Huesos',
      anatomy_layer_digestion: '🍖 Digestión y Estómago',
      anatomy_layer_organs: '🫀 Corazón y Pulmones',
      anatomy_layer_brain: '🧠 Cerebro y Sentidos',
      anatomy_layer_muscles: '🥩 Músculos',
      anatomy_depth_label: '🎚️ Profundidad de Escaneo:',

      // Migration Tracker Modal
      migration_badge: '🛰️ TELEMETRÍA SATELITAL EN TIEMPO REAL',
      migration_title: 'Rastreador Global de Migración de Fauna',
      migration_desc: 'Rutas de telemetría GPS verificadas científicamente, corredores migratorios estacionales y seguimiento en vivo',
      migration_all_flyways: '🌍 Todas las Rutas',
      migration_active_now: '🔴 Activas Ahora Mismo',
      migration_birds: '🦅 Aves',
      migration_marine: '🐋 Marinas',
      migration_land: '🦓 Manadas Terrestres',
      migration_insects: '🦋 Insectos',
      migration_sync_label: '🔴 Sincronización en Vivo: {month} ({count} Rutas Activas)',
      migration_season_timetravel: '⏱️ Viaje en el Tiempo Estacional:',
      migration_search_ph: 'Buscar migraciones (ej. Monarca, Caribú, Ballena)...',

      // Art Gallery & Inspector Modals
      art_gallery_badge: '🎨 COLECCIÓN DE BELLAS ARTES',
      art_gallery_sub_badge: 'Pastel • Acuarela • Lápiz de Color • Acrílico',
      art_gallery_title: '🖼️ Galería de Obras Maestras de Vida Silvestre',
      art_gallery_subtitle: 'Experimenta animales salvajes capturados a través de técnicas tradicionales de bellas artes. ¡Haz clic en cualquier obra para inspeccionar técnicas y escuchar la narración!',
      art_filter_all: '🌟 Todas las Obras (6)',
      art_filter_watercolor: '🖌️ Acuarela',
      art_filter_pencil: '✏️ Lápiz de Color',
      art_filter_pastel: '🖍️ Pastel Suave',
      art_filter_acrylic: '🎨 Pintura Acrílica',
      art_loading_txt: 'Cargando obras maestras...',
      art_loading_sub: 'Obteniendo archivos de arte en alta calidad',
      art_btn_speak_read: '🔊 Leer / Escuchar Descripción',
      art_btn_speaking: '🔊 Hablando... (Español 🇪🇸)',
      art_spec_paper: '📜 Papel / Lienzo:',
      art_spec_dim: '📏 Dimensiones:',
      art_heading_desc: '📖 Descripción de la Obra y Arte',
      art_heading_techniques: '🎨 Técnicas Artísticas Tradicionales Aplicadas',
      art_heading_bio: '🐾 Hábitat y Biología del Animal',
      art_label_habitat: '🌿 Hábitat:',
      art_label_fact: '💡 Dato de Vida Silvestre:',

      // Prehistoric Time Machine Modal
      tm_title: '🕰️ Máquina del Tiempo de Evolución Prehistórica',
      tm_desc: '¡Viaja millones de años atrás! Selecciona una criatura moderna abajo y gira el dial para revelar a sus gigantescos ancestros.',
      tm_present_day: 'Época Actual',
      tm_millions_ago: 'Millones de Años Atrás',
      tm_era_present: 'Era: Época Actual',
      tm_label_modern: 'Día Moderno',
      tm_label_prehistoric: 'Pasado Prehistórico',

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

      // Favorites Modal
      fav_modal_title: '❤️ Tus Favoritos Guardados de Vida Silvestre',
      fav_modal_subtitle: 'Accede fácilmente a todas tus especies marcadas, rocas raras, plantas y reptiles a lo largo de tus expediciones.',
      fav_empty_title: 'No hay favoritos guardados aún',
      fav_empty_desc: '¡Haz clic en el corazón de cualquier tarjeta de animal, planta o gema para guardarlo aquí!',
      fav_clear_all: '🗑️ Borrar Todos los Favoritos',

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
    'silverback gorilla': { zh: '銀背大猩猩', es: 'Gorila de Espalda Plateada' },
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
    'white rhinoceros': { zh: '白犀牛', es: 'Rinoceronte Blanco' },
    'eastern gray squirrel': { zh: '東部灰松鼠', es: 'Ardilla Gris Oriental' },
    'chipmunk': { zh: '花栗鼠', es: 'Ardilla Listada' },
    'raccoon': { zh: '浣熊', es: 'Mapache' },
    'domestic cat': { zh: '家貓', es: 'Gato Doméstico' },
    'dog': { zh: '狗', es: 'Perro' },

    // Marine
    'killer whale': { zh: '虎鯨 (殺人鯨)', es: 'Orca' },
    'orca': { zh: '虎鯨 (殺人鯨)', es: 'Orca' },
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
    'ruby-throated hummingbird': { zh: '紅喉蜂鳥', es: 'Colibrí de Garganta Rubí' },
    'toucan': { zh: '巨嘴鳥', es: 'Tucán' },
    'atlantic puffin': { zh: '海鸚', es: 'Frailecillo Atlántico' },
    'scarlet macaw': { zh: '緋紅金剛鸚鵡', es: 'Guacamayo Rojo' },
    'flamingo': { zh: '紅鶴 (火烈鳥)', es: 'Flamenco' },
    'albatross': { zh: '信天翁', es: 'Albatros' },
    'red-tailed hawk': { zh: '紅尾鵟', es: 'Halcón de Cola Roja' },

    // Reptiles
    'leopard gecko': { zh: '豹紋守宮', es: 'Gecko Leopardo' },
    'ball python': { zh: '球蟒', es: 'Pitón Bola' },
    'king cobra': { zh: '眼鏡王蛇', es: 'Cobra Real' },
    'veiled chameleon': { zh: '高冠變色龍', es: 'Camaleón Velado' },
    'bearded dragon': { zh: '鬆獅蜥', es: 'Dragón Barbudo' },
    'komodo dragon': { zh: '科莫多巨蜥', es: 'Dragón de Komodo' },
    'saltwater crocodile': { zh: '灣鱷 (鹹水鱷)', es: 'Cocodrilo Marino' },
    'american alligator': { zh: '美國短吻鱷', es: 'Caimán Americano' },
    'galapagos tortoise': { zh: '加拉巴哥象龜', es: 'Tortuga de Galápagos' },
    'green iguana': { zh: '綠鬣蜥', es: 'Iguana Verde' },
    'eastern box turtle': { zh: '東部箱龜', es: 'Tortuga Caja Oriental' },
    'western fence lizard': { zh: '西藍腹蜥 (守護蜥)', es: 'Lagarto de Valla Occidental' },
    'gila monster': { zh: '希拉毒蜥', es: 'Monstruo de Gila' },
    'black mamba': { zh: '黑曼巴蛇', es: 'Mamba Negra' },
    'green anaconda': { zh: '綠森蚺', es: 'Anaconda Verde' },
    'leatherback sea turtle': { zh: '棱皮龜', es: 'Tortuga Laúd' },

    // Amphibians
    'red-eyed tree frog': { zh: '紅眼樹蛙', es: 'Rana de Ojos Rojos' },
    'axolotl': { zh: '美西螈 (六角恐龍)', es: 'Ajolote' },
    'poison dart frog': { zh: '箭毒蛙', es: 'Rana Dardo Venenosa' },
    'golden poison frog': { zh: '金色箭毒蛙', es: 'Rana Dorada Venenosa' },
    'fire salamander': { zh: '火蠑螈', es: 'Salamandra Común' },
    'chinese giant salamander': { zh: '中國大鯢 (娃娃魚)', es: 'Salamandra Gigante China' },
    'american bullfrog': { zh: '美洲牛蛙', es: 'Rana Toro Americana' },

    // Insects
    'monarch butterfly': { zh: '帝王斑蝶', es: 'Mariposa Monarca' },
    'honey bee': { zh: '蜜蜂', es: 'Abeja Melífera' },
    'atlas beetle': { zh: '南洋大兜蟲', es: 'Escarabajo Atlas' },
    'hercules beetle': { zh: '長戟大兜蟲', es: 'Escarabajo Hércules' },
    'praying mantis': { zh: '螳螂', es: 'Mantis Religiosa' },
    'firefly': { zh: '螢火蟲', es: 'Luciérnaga' },
    'deathstalker scorpion': { zh: '以色列金蠍 (死神蠍)', es: 'Escorpión Amarillo' },
    'black widow': { zh: '黑寡婦蜘蛛', es: 'Viuda Negra' },

    // Plants & Flowers
    'hibiscus': { zh: '朱槿 (扶桑花)', es: 'Hibisco' },
    'rose': { zh: '玫瑰', es: 'Rosa' },
    'cherry blossom': { zh: '櫻花', es: 'Flor de Cerezo' },
    'sunflower': { zh: '向日葵', es: 'Girasol' },
    'lotus': { zh: '蓮花', es: 'Loto' },
    'lavender': { zh: '薰衣草', es: 'Lavanda' },
    'tulip': { zh: '鬱金香', es: 'Tulipán' },
    'daisy': { zh: '雛菊', es: 'Margarita' },
    'peony': { zh: '牡丹花', es: 'Peonía' },
    'orchid': { zh: '蘭花', es: 'Orquídea' },
    'edelweiss': { zh: '高山火絨草 (雪絨花)', es: 'Edelweiss' },
    'aloe vera': { zh: '庫拉索蘆薈', es: 'Aloe Vera' },

    // Gemstones & Minerals
    'diamond': { zh: '鑽石', es: 'Diamante' },
    'ruby': { zh: '紅寶石', es: 'Rubí' },
    'sapphire': { zh: '藍寶石', es: 'Zafiro' },
    'emerald': { zh: '祖母綠', es: 'Esmeralda' },
    'amethyst': { zh: '紫水晶', es: 'Amatista' },
    'opal': { zh: '歐泊 (蛋白石)', es: 'Ópalo' },
    'alexandrite': { zh: '亞歷山大變色石', es: 'Alejandrita' },
    'tanzanite': { zh: '坦桑石', es: 'Tanzanita' },
    'topaz': { zh: '黃玉 (托帕石)', es: 'Topacio' },
    'jadeite': { zh: '硬玉 (翡翠)', es: 'Jadeíta' },
    'citrine': { zh: '黃水晶', es: 'Citrino' },
    'aquamarine': { zh: '海藍寶石', es: 'Aguamarina' },
    'moldavite': { zh: '捷克隕石', es: 'Moldavita' },
    'larimar': { zh: '拉利瑪 (海紋石)', es: 'Larimar' }
  };

  const I18nEngine = {
    currentLang: 'en',

    init() {
      const saved = localStorage.getItem('ak_selected_language');
      if (saved && ['en', 'zh', 'es'].includes(saved)) {
        this.currentLang = saved;
      } else {
        const nav = (navigator.language || '').toLowerCase();
        if (nav.startsWith('zh')) {
          this.currentLang = 'zh';
        } else if (nav.startsWith('es')) {
          this.currentLang = 'es';
        } else {
          this.currentLang = 'en';
        }
      }
    },

    getLanguage() {
      return this.currentLang;
    },

    setLanguage(lang) {
      if (!['en', 'zh', 'es'].includes(lang)) return;
      this.currentLang = lang;
      localStorage.setItem('ak_selected_language', lang);
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

    getSpeciesName(animal, lang = this.currentLang) {
      if (!animal) return '';
      const name = typeof animal === 'string' ? animal : animal.name;
      if (!name) return '';
      if (lang === 'en') return name;

      // 1. Direct match by animal.id in AK_SPECIES_TRANSLATIONS
      if (typeof animal === 'object' && animal.id && window.AK_SPECIES_TRANSLATIONS) {
        const byId = window.AK_SPECIES_TRANSLATIONS[animal.id];
        if (byId && byId[lang]) {
          return byId[lang];
        }
      }

      // 2. Direct match by lowercase string
      const lower = name.toLowerCase().trim();
      if (window.AK_SPECIES_TRANSLATIONS) {
        const byName = window.AK_SPECIES_TRANSLATIONS[lower];
        if (byName && byName[lang]) {
          return byName[lang];
        }
      }

      // 3. Match in SPECIES_NAMES dictionary
      const direct = SPECIES_NAMES[lower];
      if (direct && direct[lang]) {
        return direct[lang];
      }

      // 4. Check partial match in SPECIES_NAMES
      for (const [key, val] of Object.entries(SPECIES_NAMES)) {
        if (lower.includes(key) && val[lang]) {
          return val[lang];
        }
      }

      // 5. Try translateBioText
      return this.translateBioText(name, lang);
    },

    translateBioText(text, lang = this.currentLang) {
      if (!text || typeof text !== 'string') return '';
      if (lang === 'en') return text;

      let s = text;

      if (lang === 'zh') {
        const dictZh = [
          // Dietary
          [/\bCarnivore\b/gi, '肉食性'],
          [/\bHerbivore\b/gi, '草食性'],
          [/\bOmnivore\b/gi, '雜食性'],
          [/\bInsectivore\b/gi, '食蟲性'],
          [/\bPiscivore\b/gi, '食魚性'],
          [/\bFrugivore\b/gi, '食果性'],
          [/\bFolivore\b/gi, '食葉性'],
          [/\bNectarivore\b/gi, '食蜜性'],
          [/\bFilter Feeder\b/gi, '濾食性'],
          [/\bScavenger\b/gi, '食腐'],
          [/\bMyrmecophage\b/gi, '食蟻性'],
          [/\bPlankton\b/gi, '浮游生物'],
          [/\bKrill\b/gi, '磷蝦'],
          [/\bRodents\b/gi, '小型囓齒動物'],
          [/\bSeeds\b/gi, '種子'],
          [/\bNuts\b/gi, '堅果'],
          [/\bBerries\b/gi, '漿果'],
          [/\bNectar\b/gi, '花蜜'],
          [/\bLeaves\b/gi, '樹葉'],
          [/\bGrasses\b/gi, '青草'],
          [/\bInsects\b/gi, '昆蟲'],

          // Predators & Status
          [/Apex predator - adults have zero natural predators/gi, '頂級掠食者 — 成年個體無任何天敵'],
          [/Apex predator - healthy adults have no natural predators/gi, '頂級掠食者 — 健康成年個體無自然天敵'],
          [/Adults have no natural predators/gi, '成年個體無自然天敵'],
          [/Adults have no predators/gi, '成年個體無天敵'],
          [/Adults have no wild predators/gi, '成年個體無野生天敵'],
          [/Zero natural predators/gi, '自然界中無天敵'],
          [/No natural predators/gi, '無自然天敵'],
          [/\bApex predator\b/gi, '頂級掠食者'],
          [/\bNone\b/gi, '無'],
          [/\bLarge carnivores\b/gi, '大型食肉動物'],
          [/\bBirds of prey\b/gi, '猛禽與鷹類'],
          [/\bSharks and killer whales\b/gi, '鯊魚與虎鯨'],
          [/\bHabitat loss and poaching\b/gi, '棲息地破壞與盜獵'],
          [/\bHabitat loss and human disturbance\b/gi, '棲息地破壞與人類干擾'],

          // Habitats & Ecosystems
          [/\bTropical mangrove forests\b/gi, '熱帶紅樹林'],
          [/\bTropical rainforests\b/gi, '熱帶雨林'],
          [/\bTropical rainforest\b/gi, '熱帶雨林'],
          [/\bRainforests\b/gi, '雨林'],
          [/\bRainforest\b/gi, '雨林'],
          [/\bOpen savannas\b/gi, '開闊草原'],
          [/\bGrassy savannas\b/gi, '多草稀樹草原'],
          [/\bSavannas\b/gi, '熱帶稀樹草原'],
          [/\bSavanna\b/gi, '熱帶草原'],
          [/\bGrasslands\b/gi, '廣袤草原'],
          [/\bGrassland\b/gi, '草原'],
          [/\bCoral reefs\b/gi, '珊瑚礁群'],
          [/\bCoral reef\b/gi, '珊瑚礁'],
          [/\bDeep ocean\b/gi, '深海大洋'],
          [/\bPelagic waters\b/gi, '遠洋大洋水域'],
          [/\bCoastal waters\b/gi, '沿海水域'],
          [/\bArctic tundra\b/gi, '北極苔原'],
          [/\bTundra\b/gi, '苔原'],
          [/\bSea ice\b/gi, '極地海冰'],
          [/\bCloud forests\b/gi, '高山雲霧林'],
          [/\bDeciduous and coniferous forests\b/gi, '落葉林與針葉林'],
          [/\bDeciduous forests\b/gi, '落葉林'],
          [/\bConiferous forests\b/gi, '針葉林'],
          [/\bTemperate forests\b/gi, '溫帶森林'],
          [/\bBamboo forests\b/gi, '竹林'],
          [/\bEucalyptus woodlands\b/gi, '桉樹疏林'],
          [/\bMangroves\b/gi, '紅樹林'],
          [/\bMangrove\b/gi, '紅樹林'],
          [/\bWetlands\b/gi, '濕地'],
          [/\bSwamps\b/gi, '沼澤'],
          [/\bMarshes\b/gi, '草澤'],
          [/\bFreshwater rivers\b/gi, '淡水河流'],
          [/\bRivers and lakes\b/gi, '河流與湖泊'],
          [/\bRivers\b/gi, '河流'],
          [/\bLakes\b/gi, '湖泊'],
          [/\bDesert margins\b/gi, '沙漠邊緣'],
          [/\bArid scrublands\b/gi, '乾旱灌木林'],
          [/\bDesert\b/gi, '沙漠'],
          [/\bHigh-altitude\b/gi, '高海拔'],
          [/\bSub-Saharan Africa\b/gi, '撒哈拉以南非洲'],
          [/\bNorth America\b/gi, '北美洲'],
          [/\bSouth America\b/gi, '南美洲'],
          [/\bCentral America\b/gi, '中美洲'],
          [/\bSoutheast Asia\b/gi, '東南亞'],
          [/\bEast Asia\b/gi, '東亞'],
          [/\bSouth Asia\b/gi, '南亞'],
          [/\bAustralia\b/gi, '澳洲'],
          [/\bNew Zealand\b/gi, '紐西蘭'],
          [/\bMadagascar\b/gi, '馬達加斯加'],
          [/\bAmazon Basin\b/gi, '亞馬遜流域'],
          [/\bAmazon\b/gi, '亞馬遜'],
          [/\bHimalayas\b/gi, '喜馬拉雅山脈'],
          [/\bAndes Mountains\b/gi, '安第斯山脈'],
          [/\bRocky Mountains\b/gi, '落基山脈'],
          [/\bAntarctica\b/gi, '南極洲'],
          [/\bSiberia\b/gi, '西伯利亞'],

          // Plant Needs
          [/\bFull sun\b/gi, '充足全日照'],
          [/\bPartial shade\b/gi, '半日照陰涼處'],
          [/\bWell-draining soil\b/gi, '排水良好的沃土'],
          [/\bMoist soil\b/gi, '濕潤土壤'],

          // Mineral / Gem Properties
          [/\bMohs Hardness: 10\b/gi, '莫氏硬度：10 (金剛石級)'],
          [/\bMohs Hardness: 9\b/gi, '莫氏硬度：9 (剛玉級)'],
          [/\bMohs Hardness: 8\b/gi, '莫氏硬度：8 (極硬寶石)'],
          [/\bMohs Hardness: 7\.5\b/gi, '莫氏硬度：7.5'],
          [/\bMohs Hardness: 7\b/gi, '莫氏硬度：7 (石英級)'],
          [/\bMohs Hardness: 6\.5\b/gi, '莫氏硬度：6.5'],
          [/\bMohs Hardness: 6\b/gi, '莫氏硬度：6'],
          [/\bHexagonal crystal system\b/gi, '六方晶系'],
          [/\bTrigonal crystal system\b/gi, '三方晶系'],
          [/\bCubic crystal system\b/gi, '等軸 (立方) 晶系'],
          [/\bOrthorhombic crystal system\b/gi, '斜方 (正交) 晶系'],
          [/\bMonoclinic crystal system\b/gi, '單斜晶系'],
          [/\bTriclinic crystal system\b/gi, '三斜晶系'],
          [/\bAmorphous\b/gi, '非晶質結構'],
          [/\bHydrothermal veins\b/gi, '熱液礦脈'],
          [/\bPegmatites\b/gi, '偉晶岩脈'],
          [/\bAlluvial deposits\b/gi, '沖積砂礦床']
        ];

        for (const [regex, rep] of dictZh) {
          s = s.replace(regex, rep);
        }
        return s;
      }

      if (lang === 'es') {
        const dictEs = [
          [/\bCarnivore\b/gi, 'Carnívoro'],
          [/\bHerbivore\b/gi, 'Herbívoro'],
          [/\bOmnivore\b/gi, 'Omnívoro'],
          [/\bInsectivore\b/gi, 'Insectívoro'],
          [/\bPiscivore\b/gi, 'Piscívoro'],
          [/\bFrugivore\b/gi, 'Frugívoro'],
          [/\bApex predator\b/gi, 'Depredador ápice'],
          [/\bAdults have no natural predators\b/gi, 'Los adultos no tienen depredadores naturales'],
          [/\bAdults have no predators\b/gi, 'Los adultos no tienen depredadores'],
          [/\bNone\b/gi, 'Ninguno'],
          [/\bTropical rainforest\b/gi, 'Selva tropical'],
          [/\bTropical rainforests\b/gi, 'Selvas tropicales'],
          [/\bRainforests\b/gi, 'Selvas tropicales'],
          [/\bRainforest\b/gi, 'Selva tropical'],
          [/\bOpen savannas\b/gi, 'Sabanas abiertas'],
          [/\bSavannas\b/gi, 'Sabanas'],
          [/\bSavanna\b/gi, 'Sabana'],
          [/\bGrasslands\b/gi, 'Pastizales'],
          [/\bCoral reefs\b/gi, 'Arrecifes de coral'],
          [/\bDeep ocean\b/gi, 'Océano profundo'],
          [/\bCoastal waters\b/gi, 'Aguas costeras'],
          [/\bArctic tundra\b/gi, 'Tundra ártica'],
          [/\bDesert\b/gi, 'Desierto'],
          [/\bWetlands\b/gi, 'Humedales'],
          [/\bFreshwater rivers\b/gi, 'Ríos de agua dulce'],
          [/\bRivers\b/gi, 'Ríos'],
          [/\bLakes\b/gi, 'Lagos'],
          [/\bSub-Saharan Africa\b/gi, 'África subsahariana'],
          [/\bNorth America\b/gi, 'América del Norte'],
          [/\bSouth America\b/gi, 'América del Sur'],
          [/\bSoutheast Asia\b/gi, 'Sudeste Asiático'],
          [/\bAustralia\b/gi, 'Australia'],
          [/\bMadagascar\b/gi, 'Madagascar'],
          [/\bFull sun\b/gi, 'Pleno sol'],
          [/\bPartial shade\b/gi, 'Sombra parcial'],
          [/\bWell-draining soil\b/gi, 'Suelo bien drenado']
        ];

        for (const [regex, rep] of dictEs) {
          s = s.replace(regex, rep);
        }
        return s;
      }

      return s;
    },

    getSpeciesTagline(animal, lang = this.currentLang) {
      if (!animal || !animal.tagline) return '';
      if (lang === 'en') return animal.tagline;
      return this.translateBioText(animal.tagline, lang);
    },

    getSpeciesHabitat(animal, lang = this.currentLang) {
      if (!animal || !animal.habitat) return '';
      return this.translateBioText(animal.habitat, lang);
    },

    getSpeciesDiet(animal, lang = this.currentLang) {
      if (!animal || !animal.diet) return '';
      return this.translateBioText(animal.diet, lang);
    },

    getSpeciesPredators(animal, lang = this.currentLang) {
      if (!animal || !animal.predators) return '';
      return this.translateBioText(animal.predators, lang);
    },

    getSpeciesFunFact(animal, lang = this.currentLang) {
      if (!animal || !animal.funFact) return '';
      return this.translateBioText(animal.funFact, lang);
    },

    getSpeciesDescription(animal, lang = this.currentLang) {
      if (!animal || !animal.description) return '';
      return this.translateBioText(animal.description, lang);
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

    /**
     * Synthesizes natural, rich spoken narrative script for TTS in active language
     */
    getAnimalNarrationText(animal, lang = this.currentLang) {
      if (!animal) return '';
      const name = this.getSpeciesName(animal);
      const cat = animal.category || '';

      if (lang === 'zh') {
        const catMap = {
          land: '陸地動物',
          marine: '海洋生物',
          birds: '鳥類飛禽',
          reptiles: '爬行動物',
          amphibians: '兩棲動物',
          insects: '昆蟲家族',
          plants: '花卉植物',
          gemstones: '地質晶體寶石'
        };
        const catName = catMap[cat] || '珍奇生靈';
        
        let intro = `歡迎探索${name}！牠是神奇的${catName}。`;
        if (cat === 'gemstones') {
          intro = `歡迎欣賞${name}！這是一件經過大自然億萬年地質淬鍊的珍貴${catName}。`;
        } else if (cat === 'plants') {
          intro = `歡迎走進植物王國，認識${name}！這是一種充滿生機的${catName}。`;
        }

        let body = '';
        if (animal.habitat) {
          body += `主要棲息或產於${animal.habitat}。`;
        }
        if (animal.diet) {
          if (cat === 'gemstones') {
            body += `化學成分與晶體結構為${animal.diet}。`;
          } else if (cat === 'plants') {
            body += `生長需要充足的${animal.diet}。`;
          } else {
            body += `在日常生活中，主要以${animal.diet}為食。`;
          }
        }
        if (animal.funFact) {
          body += `趣味小知識：${animal.funFact}。`;
        }
        return intro + body;
      }

      if (lang === 'es') {
        const catMapEs = {
          land: 'animal terrestre',
          marine: 'criatura marina',
          birds: 'ave maravillosa',
          reptiles: 'reptil fascinante',
          amphibians: 'anfibio único',
          insects: 'insecto asombroso',
          plants: 'planta botánica',
          gemstones: 'gema geológica'
        };
        const catNameEs = catMapEs[cat] || 'espécimen salvaje';
        let introEs = `¡Te damos la bienvenida a descubrir a: ${name}! Es un ${catNameEs}.`;
        let bodyEs = '';
        if (animal.habitat) {
          bodyEs += ` Su hábitat natural se encuentra en ${animal.habitat}.`;
        }
        if (animal.diet) {
          bodyEs += ` Su dieta o sustento incluye: ${animal.diet}.`;
        }
        if (animal.funFact) {
          bodyEs += ` Dato curioso: ${animal.funFact}.`;
        }
        return introEs + bodyEs;
      }

      // Default English
      return `${animal.name}. ${animal.tagline || ''}. ${animal.description || ''} Fun fact: ${animal.funFact || ''}`;
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
