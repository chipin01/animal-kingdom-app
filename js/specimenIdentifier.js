/**
 * The Animal Kingdom - Interactive Specimen & Nature Detective ("What Did I See?")
 * Allows users to describe an animal, bird, reptile, insect, plant, or gemstone
 * either by typing a natural description or answering a 5-step interactive wizard.
 * Scores all 840 specimens and ranks the top candidates with confidence ratings
 * and direct links to full educational cards.
 * 
 * Supports 100% Multilingual: English (en), Traditional Chinese (zh), Spanish (es).
 */

(function(window) {
  'use strict';

  class SpecimenIdentifierEngine {
    constructor() {
      this.currentMode = 'wizard'; // 'wizard' or 'describe'
      this.wizardStep = 1;
      this.totalSteps = 5;
      this.wizardAnswers = {
        category: null,
        habitat: null,
        color: null,
        size: null,
        traits: []
      };
      this.cachedSpecimens = null;
    }

    getAllSpecimens() {
      if (this.cachedSpecimens && this.cachedSpecimens.length > 0) {
        return this.cachedSpecimens;
      }
      if (window.AK_AOD && window.AK_AOD.getAllAnimals) {
        this.cachedSpecimens = window.AK_AOD.getAllAnimals();
        return this.cachedSpecimens;
      }
      return [];
    }

    openModal(initialMode) {
      if (initialMode) this.currentMode = initialMode;
      const modal = document.getElementById('identifier-modal');
      if (!modal) return;

      if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
        window.AK_AUDIO.playPop(520);
      }

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      this.render();
    }

    closeModal() {
      const modal = document.getElementById('identifier-modal');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    setMode(mode) {
      this.currentMode = mode;
      if (window.AK_AUDIO && window.AK_AUDIO.playUiClick) {
        window.AK_AUDIO.playUiClick();
      }
      this.render();
    }

    resetWizard() {
      this.wizardStep = 1;
      this.wizardAnswers = {
        category: null,
        habitat: null,
        color: null,
        size: null,
        traits: []
      };
      if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
        window.AK_AUDIO.playPop(440);
      }
      this.render();
    }

    setWizardAnswer(key, val) {
      if (key === 'traits') {
        const idx = this.wizardAnswers.traits.indexOf(val);
        if (idx >= 0) {
          this.wizardAnswers.traits.splice(idx, 1);
        } else {
          this.wizardAnswers.traits.push(val);
        }
      } else {
        this.wizardAnswers[key] = val;
      }
      if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
        window.AK_AUDIO.playPop(560);
      }
      this.render();
    }

    nextStep() {
      if (this.wizardStep < this.totalSteps) {
        this.wizardStep++;
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
          window.AK_AUDIO.playPop(600);
        }
        this.render();
      }
    }

    prevStep() {
      if (this.wizardStep > 1) {
        this.wizardStep--;
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
          window.AK_AUDIO.playPop(480);
        }
        this.render();
      }
    }

    // -------------------------------------------------------------
    // MULTILINGUAL STRINGS FOR THE IDENTIFIER
    // -------------------------------------------------------------
    getText(key) {
      const lang = window.AK_I18N ? window.AK_I18N.getLanguage() : 'en';
      const dict = {
        en: {
          title: '🧭 Nature Detective: What Did I See?',
          subtitle: 'Describe a creature, plant, or mineral you encountered or answer 5 quick questions to identify it!',
          tab_wizard: '🎯 5-Step Question Wizard',
          tab_describe: '💬 Describe In Your Words',
          step_progress: 'Step {step} of {total}',
          btn_prev: '⬅️ Previous Question',
          btn_next: 'Next Question ➡️',
          btn_see_results: '🔍 Reveal Matching Candidates ({count}) ➡️',
          btn_reset: '🔄 Start Over',
          input_placeholder: 'e.g., A tiny bright green tree frog with orange eyes climbing leaves, or a purple faceted gemstone crystal...',
          btn_identify: 'Detect Match 🚀',
          quick_prompts_title: 'Try these popular sightings:',
          prompt_1: '🐸 Tiny green tree frog with orange eyes',
          prompt_2: '💎 Royal blue sparkling gemstone crystal',
          prompt_3: '🦅 Giant eagle soaring over snowy mountains',
          prompt_4: '🦎 Golden desert lizard with spiky scales',
          prompt_5: '🌸 Vibrant pink rose blooming with sweet fragrance',
          prompt_6: '🐋 Black and white ocean predator with dorsal fin',
          results_heading: 'Top Identified Matches',
          results_subtitle: 'Ranked by biometric, visual, and environmental traits',
          confidence_high: 'Very High Match',
          confidence_med: 'Likely Match',
          confidence_possible: 'Possible Match',
          btn_learn_more: 'Learn About It & Full Story ➡️',
          no_matches_title: 'No exact match found',
          no_matches_desc: 'Try broadening your description keywords or adjusting your question choices.',
          traits_matched: 'Matching Features:',
          q1_title: '1. What kind of nature specimen was it?',
          q1_desc: 'Choose the general category if you know it, or select "Not Sure".',
          q1_opt_all: '❓ Any / Not Sure',
          q1_opt_land: '🐾 Land Mammal / Animal',
          q1_opt_birds: '🦅 Avian / Flying Bird',
          q1_opt_marine: '🌊 Sea / Ocean Life',
          q1_opt_reptiles: '🦎 Serpent / Lizard / Turtle',
          q1_opt_amphibians: '🐸 Frog / Salamander / Toad',
          q1_opt_insects: '🦋 Insect / Bug / Butterfly',
          q1_opt_plants: '🌿 Botanical / Flower / Plant',
          q1_opt_gemstones: '💎 Crystal / Gemstone / Rock',

          q2_title: '2. Where did you spot it? (Habitat / Origin)',
          q2_desc: 'Select the environment where you saw it.',
          q2_opt_forest: '🌲 Forest, Woods or Rainforest',
          q2_opt_ocean: '🌊 Ocean, Coral Reef or Beach',
          q2_opt_freshwater: '🏞️ River, Lake, Pond or Swamp',
          q2_opt_desert: '🏜️ Desert, Dry Rocks or Dunes',
          q2_opt_savanna: '🌾 Grassland, Savanna or Meadow',
          q2_opt_mountain: '⛰️ High Mountain, Cliffs or Snow',
          q2_opt_garden: '🏡 Backyard, Park or Garden',
          q2_opt_underground: '🕳️ Underground, Cave or Mine',

          q3_title: '3. What was its dominant color or pattern?',
          q3_desc: 'Pick the most noticeable color scheme.',
          q3_opt_green: '🟢 Vibrant Green / Emerald',
          q3_opt_brown: '🟤 Earthy Brown / Tan / Sand',
          q3_opt_black: '⚫ Black / Charcoal / Dark',
          q3_opt_yellow: '🟡 Golden / Yellow / Amber',
          q3_opt_red: '🔴 Red / Orange / Crimson',
          q3_opt_white: '⚪ White / Silver / Snowy',
          q3_opt_blue: '🔵 Deep Blue / Cyan / Violet',
          q3_opt_pattern: '🦓 Striped, Spotted or Multicolor',

          q4_title: '4. How big was it approximately?',
          q4_desc: 'Estimate the physical size compared to common objects.',
          q4_opt_tiny: '🪙 Tiny (Coin to insect size, < 10 cm)',
          q4_opt_small: '✋ Small (Hand to shoe size, 10–30 cm)',
          q4_opt_medium: '🐕 Medium (Cat to dog size, 30–100 cm)',
          q4_opt_large: '🚶 Large (Human size, 1–2.5 meters)',
          q4_opt_giant: '🐘 Giant (Car to truck size, > 3 meters)',

          q5_title: '5. Did you notice any special features or behaviors?',
          q5_desc: 'Select all that apply to help narrow the match.',
          q5_opt_flying: '🪶 Flying, soaring, or perched high',
          q5_opt_swimming: '🫧 Swimming or diving in water',
          q5_opt_climbing: '🧗 Climbing trees, walls, or branches',
          q5_opt_slithering: '🐍 Slithering on ground (no legs)',
          q5_opt_venomous: '⚠️ Venomous fangs, stinger, or warning colors',
          q5_opt_blooming: '🌸 Blooming petals, aromatic scent, foliage',
          q5_opt_crystal: '💎 Hard crystal facets, gem sparkle',
          q5_opt_nocturnal: '🌙 Night active, glowing, or bioluminescent'
        },
        zh: {
          title: '🧭 自然偵探：我看到了什麼？',
          subtitle: '描述您在戶外遇見的野生動物、奇花異草或璀璨寶石，或回答 5 個問題迅速揭曉身分！',
          tab_wizard: '🎯 5 步智慧問答偵探',
          tab_describe: '💬 用文字自由描述',
          step_progress: '第 {step} 步 / 共 {total} 步',
          btn_prev: '⬅️ 上一個問題',
          btn_next: '下一個問題 ➡️',
          btn_see_results: '🔍 查看鑑定候選物種 ({count}) ➡️',
          btn_reset: '🔄 重新鑑定',
          input_placeholder: '例如：在雨林葉片上看到一隻長著大橘眼睛的鮮綠色小樹蛙，或是紫色切面的閃耀寶石水晶...',
          btn_identify: '開始智能偵測 🚀',
          quick_prompts_title: '試試看這些常見目擊靈感：',
          prompt_1: '🐸 擁有橘色大眼睛的鮮綠色小樹蛙',
          prompt_2: '💎 綻放皇家湛藍光彩的刻面水晶寶石',
          prompt_3: '🦅 翱翔於雪山之巔的巨大雄鷹',
          prompt_4: '🦎 長滿棘刺鱗片的金黃色沙漠蜥蜴',
          prompt_5: '🌸 散發濃郁芬芳、盛開粉紅花瓣的玫瑰花',
          prompt_6: '🐋 擁有高聳背鰭的黑白相間海洋頂級霸主',
          results_heading: '最相符的生物與自然候選物種',
          results_subtitle: '依照生物形態特徵、棲息環境與外觀特徵精準排序',
          confidence_high: '極高吻合度',
          confidence_med: '高吻合度',
          confidence_possible: '潛在可能候選',
          btn_learn_more: '深入探索與聆聽語音故事 ➡️',
          no_matches_title: '未找到完全相符的物種',
          no_matches_desc: '您可以嘗試輸入其他關鍵字特徵，或在問答中調整選項範圍。',
          traits_matched: '吻合的生物特徵：',
          q1_title: '1. 您看到的是哪一類的自然物種？',
          q1_desc: '若有大致概念請選擇分類，若不確定請選擇「不確定」。',
          q1_opt_all: '❓ 任何類別 / 不確定',
          q1_opt_land: '🐾 陸生哺乳 / 野生動物',
          q1_opt_birds: '🦅 飛禽鳥類 / 空中飛羽',
          q1_opt_marine: '🌊 海洋水棲 / 深藍生靈',
          q1_opt_reptiles: '🦎 爬行動物 / 蜥蜴蛇類',
          q1_opt_amphibians: '🐸 兩棲動物 / 青蛙蠑螈',
          q1_opt_insects: '🦋 昆蟲節肢 / 彩蝶鳴蟬',
          q1_opt_plants: '🌿 花卉植物 / 原生植被',
          q1_opt_gemstones: '💎 寶石礦物 / 水晶原石',

          q2_title: '2. 您在哪裡遇見它的？（生境 / 產地）',
          q2_desc: '選擇發現它的地理或自然生態環境。',
          q2_opt_forest: '🌲 森林、林地或熱帶雨林深處',
          q2_opt_ocean: '🌊 浩瀚大洋、珊瑚礁或沙灘海岸',
          q2_opt_freshwater: '🏞️ 江河溪流、高山湖泊或清泉濕地',
          q2_opt_desert: '🏜️ 乾燥荒漠、沙丘或岩石荒野',
          q2_opt_savanna: '🌾 廣袤草原、稀樹草原或草甸',
          q2_opt_mountain: '⛰️ 高山峻嶺、懸崖峭壁或雪線',
          q2_opt_garden: '🏡 庭園花圃、都會公園或庭院',
          q2_opt_underground: '🕳️ 地底溶洞、石縫洞穴或礦脈深處',

          q3_title: '3. 它的主要顏色或外觀圖案是什麼？',
          q3_desc: '挑選最引人注目的色彩搭配。',
          q3_opt_green: '🟢 翠綠色 / 祖母綠色',
          q3_opt_brown: '🟤 大地棕色 / 沙褐色 / 土黃色',
          q3_opt_black: '⚫ 深黑色 / 炭黑色 / 暗沉色調',
          q3_opt_yellow: '🟡 耀眼金黃 / 琥珀黃色',
          q3_opt_red: '🔴 鮮紅色 / 橙橘色 / 緋紅',
          q3_opt_white: '⚪ 純白色 / 銀灰霜雪色',
          q3_opt_blue: '🔵 湛藍色 / 青金石藍 / 紫羅蘭色',
          q3_opt_pattern: '🦓 條紋斑點 / 虎斑豹紋 / 多彩斑斕',

          q4_title: '4. 它大概有多大？（體型 / 尺寸）',
          q4_desc: '對比生活常見物體估算尺寸。',
          q4_opt_tiny: '🪙 微型（硬幣至昆蟲大小，小於 10 公分）',
          q4_opt_small: '✋ 小型（手掌至鞋子大小，10–30 公分）',
          q4_opt_medium: '🐕 中型（貓狗體型，30–100 公分）',
          q4_opt_large: '🚶 大型（成年人體型，1–2.5 公尺）',
          q4_opt_giant: '🐘 巨型（如汽車甚至卡車，3 公尺以上）',

          q5_title: '5. 您是否注意到任何特殊行為或構造？',
          q5_desc: '可複選多項特徵，幫助精準縮小候選範圍。',
          q5_opt_flying: '🪶 振翅高飛、空中盤旋或棲於高枝',
          q5_opt_swimming: '🫧 悠游水中、深潛浮游或隨波穿梭',
          q5_opt_climbing: '🧗 攀爬樹幹、附著岩壁或樹冠穿梭',
          q5_opt_slithering: '🐍 貼地蜿蜒爬行（無足行走）',
          q5_opt_venomous: '⚠️ 具毒牙刺針、毒液警戒色或防禦毒素',
          q5_opt_blooming: '🌸 盛開鮮豔花瓣、散發芬芳或行光合作用',
          q5_opt_crystal: '💎 堅硬晶體切面、玻璃光澤或火彩折射',
          q5_opt_nocturnal: '🌙 夜間活躍、具生物螢光或夜行感官'
        },
        es: {
          title: '🧭 Detective de la Naturaleza: ¿Qué Vi?',
          subtitle: '¡Describe la criatura, planta o mineral que avistaste o responde 5 preguntas interactivas para identificarlo!',
          tab_wizard: '🎯 Cuestionario Interactivo en 5 Pasos',
          tab_describe: '💬 Describe con tus Palabras',
          step_progress: 'Paso {step} de {total}',
          btn_prev: '⬅️ Pregunta Anterior',
          btn_next: 'Siguiente Pregunta ➡️',
          btn_see_results: '🔍 Revelar Especies Candidatas ({count}) ➡️',
          btn_reset: '🔄 Reiniciar',
          input_placeholder: 'Ejemplo: Una pequeña rana verde arbórea con ojos anaranjados brillantes en hojas, o un cristal brillante púrpura facetado...',
          btn_identify: 'Identificar con IA 🚀',
          quick_prompts_title: 'Prueba estos avistamientos populares:',
          prompt_1: '🐸 Pequeña rana verde arbórea con ojos naranja',
          prompt_2: '💎 Cristal azul real facetado y brillante',
          prompt_3: '🦅 Águila colosal planeando sobre cumbres nevadas',
          prompt_4: '🦎 Lagarto del desierto dorado con escamas espinosas',
          prompt_5: '🌸 Rosa aromática rosada con pétalos fragantes',
          prompt_6: '🐋 Depredador marino blanco y negro con aleta dorsal',
          results_heading: 'Especies Candidatas Más Probables',
          results_subtitle: 'Ordenadas por coincidencia biométrica, hábitat y morfología',
          confidence_high: 'Coincidencia Muy Alta',
          confidence_med: 'Coincidencia Probable',
          confidence_possible: 'Candidato Posible',
          btn_learn_more: 'Aprender y Escuchar Historia ➡️',
          no_matches_title: 'No se encontraron coincidencias exactas',
          no_matches_desc: 'Intenta modificar las palabras clave o ampliar las opciones de tu cuestionario.',
          traits_matched: 'Rasgos Coincidentes:',
          q1_title: '1. ¿Qué tipo de espécimen de la naturaleza era?',
          q1_desc: 'Elige la categoría general o selecciona "No estoy seguro".',
          q1_opt_all: '❓ Cualquier tipo / No estoy seguro',
          q1_opt_land: '🐾 Mamífero terrestre / Animal salvaje',
          q1_opt_birds: '🦅 Ave / Pájaro volador',
          q1_opt_marine: '🌊 Vida marina / Criatura del océano',
          q1_opt_reptiles: '🦎 Reptil / Serpiente / Lagarto / Tortuga',
          q1_opt_amphibians: '🐸 Anfibio / Rana / Salamandra',
          q1_opt_insects: '🦋 Insecto / Mariposa / Artrópodo',
          q1_opt_plants: '🌿 Planta / Flor botánica',
          q1_opt_gemstones: '💎 Cristal mineral / Gema preciosa',

          q2_title: '2. ¿Dónde lo avistaste? (Hábitat u Origen)',
          q2_desc: 'Selecciona el entorno natural donde se encontraba.',
          q2_opt_forest: '🌲 Bosque, selva o jungla tropical',
          q2_opt_ocean: '🌊 Océano abierto, arrecife de coral o costa',
          q2_opt_freshwater: '🏞️ Río de agua dulce, lago, estanque o ciénaga',
          q2_opt_desert: '🏜️ Desierto, rocas secas o dunas',
          q2_opt_savanna: '🌾 Pradera, sabana africana o pastizales',
          q2_opt_mountain: '⛰️ Alta montaña, acantilados o nieves',
          q2_opt_garden: '🏡 Jardín, parque urbano o patio',
          q2_opt_underground: '🕳️ Cuevas subterráneas o vetas minerales',

          q3_title: '3. ¿Cuál era su color dominante o patrón?',
          q3_desc: 'Elige el esquema de color más llamativo.',
          q3_opt_green: '🟢 Verde vibrante / Esmeralda',
          q3_opt_brown: '🟤 Marrón terroso / Canela / Arena',
          q3_opt_black: '⚫ Negro carbón / Muy oscuro',
          q3_opt_yellow: '🟡 Dorado brillante / Amarillo / Ámbar',
          q3_opt_red: '🔴 Rojo intenso / Naranja / Carmesí',
          q3_opt_white: '⚪ Blanco puro / Plateado / Nieve',
          q3_opt_blue: '🔵 Azul profundo / Zafiro / Violeta',
          q3_opt_pattern: '🦓 Rayas, manchas o patrón multicolor',

          q4_title: '4. ¿De qué tamaño era aproximadamente?',
          q4_desc: 'Compara su tamaño con objetos cotidianos.',
          q4_opt_tiny: '🪙 Diminuto (Tamaño moneda a insecto, < 10 cm)',
          q4_opt_small: '✋ Pequeño (Tamaño mano a zapato, 10–30 cm)',
          q4_opt_medium: '🐕 Mediano (Tamaño gato a perro, 30–100 cm)',
          q4_opt_large: '🚶 Grande (Tamaño humano, 1–2.5 metros)',
          q4_opt_giant: '🐘 Gigante (Tamaño coche o camión, > 3 metros)',

          q5_title: '5. ¿Notaste algún rasgo o comportamiento especial?',
          q5_desc: 'Marca todas las características observadas.',
          q5_opt_flying: '🪶 Volando, planeando o en ramas altas',
          q5_opt_swimming: '🫧 Nadando o buceando en el agua',
          q5_opt_climbing: '🧗 Trepando árboles, rocas o paredes',
          q5_opt_slithering: '🐍 Deslizándose por el suelo (sin patas)',
          q5_opt_venomous: '⚠️ Colmillos venenosos, aguijón o advertencia',
          q5_opt_blooming: '🌸 Pétalos coloridos, aroma fragante, follaje',
          q5_opt_crystal: '💎 Facetas cristalinas duras, brillo de joya',
          q5_opt_nocturnal: '🌙 Activo de noche, ojos brillantes o bioluminiscente'
        }
      };

      const langDict = dict[lang] || dict.en;
      return langDict[key] || dict.en[key] || key;
    }

    // -------------------------------------------------------------
    // SCORING ENGINE: MATCHES SPECIES AGAINST INPUTS
    // -------------------------------------------------------------
    scoreSpecimens(answers, textQuery) {
      const all = this.getAllSpecimens();
      if (!all || all.length === 0) return [];

      const query = (textQuery || '').toLowerCase().trim();
      const queryTokens = query ? query.split(/[\s,，、。!！?？;；]+/).filter(w => w.length > 1) : [];

      const scoredList = all.map(specimen => {
        let score = 0;
        const matchedTraits = [];

        const trans = (window.AK_SPECIES_TRANSLATIONS && window.AK_SPECIES_TRANSLATIONS[specimen.id]) || {};
        const bio = (window.AK_SPECIES_BIO && window.AK_SPECIES_BIO[specimen.id]) || {};

        const fullBioText = [
          specimen.name,
          trans.zh || '',
          trans.es || '',
          specimen.scientific || '',
          specimen.category || '',
          specimen.habitat || '',
          bio.habZh || '',
          bio.habEs || '',
          specimen.diet || '',
          bio.dietZh || '',
          bio.dietEs || '',
          specimen.description || '',
          bio.descZh || '',
          bio.descEs || '',
          specimen.funFact || '',
          bio.funZh || '',
          bio.funEs || '',
          specimen.tagline || '',
          bio.tagZh || '',
          bio.tagEs || '',
          specimen.badgeText || ''
        ].join(' ').toLowerCase();

        // 1. FREE-TEXT MODE SCORING
        if (queryTokens.length > 0) {
          let tokenHits = 0;
          queryTokens.forEach(tok => {
            if (fullBioText.includes(tok)) {
              tokenHits++;
            }
          });
          const hitRatio = tokenHits / queryTokens.length;
          score += hitRatio * 75;

          // Extra bonus if token matches exact name
          if (queryTokens.some(t => specimen.name.toLowerCase().includes(t) || (trans.zh && trans.zh.includes(t)) || (trans.es && trans.es.toLowerCase().includes(t)))) {
            score += 25;
            matchedTraits.push('Exact Name Match');
          }
        }

        // 2. WIZARD MODE SCORING
        if (answers) {
          // Category
          if (answers.category && answers.category !== 'all') {
            if (specimen.category === answers.category) {
              score += 35;
              matchedTraits.push(specimen.category.toUpperCase());
            } else {
              score -= 20; // Soft penalty for wrong kingdom
            }
          } else if (!answers.category || answers.category === 'all') {
            score += 10;
          }

          // Habitat
          if (answers.habitat) {
            const habKey = answers.habitat;
            const habMatches = {
              forest: ['forest', 'rainforest', 'woodland', 'jungle', 'tree', 'canopy', '森林', '雨林', '林地', '樹', 'selva', 'bosque', 'jungla'],
              ocean: ['ocean', 'sea', 'marine', 'reef', 'coral', 'pelagic', 'coast', 'beach', '海洋', '珊瑚', '大海', '沿海', 'mar', 'océano', 'costero'],
              freshwater: ['river', 'lake', 'pond', 'stream', 'swamp', 'marsh', 'freshwater', 'canal', '江河', '湖泊', '池塘', '溪流', '沼澤', '濕地', 'río', 'lago', 'estanque', 'pantano'],
              desert: ['desert', 'arid', 'sand', 'dunes', 'scrub', 'rocky', '沙漠', '荒漠', '沙丘', '乾旱', 'desierto', 'árido', 'dunas'],
              savanna: ['savanna', 'grassland', 'plains', 'meadow', 'prairie', '草原', '稀樹草原', '草甸', 'sabana', 'pradera', 'pastizales'],
              mountain: ['mountain', 'alpine', 'cliff', 'high-altitude', 'peak', 'snow', '高山', '崇山', '岩壁', '雪山', 'montaña', 'alpino', 'cumbres'],
              garden: ['garden', 'park', 'backyard', 'cultivated', 'flowers', 'plant', '庭園', '花園', '公園', 'jardín', 'parque', 'flores'],
              underground: ['cave', 'underground', 'burrow', 'mine', 'kimberlite', 'pegmatite', 'rock', 'gemstone', 'mineral', '洞穴', '地底', '礦', '水晶', '寶石', 'cueva', 'subterráneo', 'mina', 'cristal']
            }[habKey] || [];

            if (habMatches.some(w => fullBioText.includes(w))) {
              score += 25;
              matchedTraits.push('Habitat Aligned');
            }
          }

          // Color
          if (answers.color) {
            const colKey = answers.color;
            const colMatches = {
              green: ['green', 'emerald', 'jade', 'leaf', 'peridot', 'malachite', '綠', '翠', 'verde', 'esmeralda'],
              brown: ['brown', 'tan', 'earth', 'sand', 'clay', 'tawny', 'grizzly', '棕', '褐', '沙', 'marrón', 'pardo', 'tierra'],
              black: ['black', 'dark', 'charcoal', 'onyx', 'melanistic', '黑', '暗', 'negro', 'oscuro'],
              yellow: ['yellow', 'gold', 'golden', 'amber', 'citrine', 'blonde', '黃', '金', 'amarillo', 'dorado', 'ámbar'],
              red: ['red', 'orange', 'crimson', 'ruby', 'scarlet', 'carnelian', '紅', '橙', '橘', '赤', 'rojo', 'naranja', 'carmesí'],
              white: ['white', 'snow', 'silver', 'albino', 'diamond', 'polar', '白', '銀', '雪', 'blanco', 'plateado', 'nieve'],
              blue: ['blue', 'cyan', 'azure', 'sapphire', 'lapis', 'tanzanite', 'aquamarine', '藍', '青', '靛', 'azul', 'zafiro', 'celeste'],
              pattern: ['stripe', 'spot', 'pattern', 'multicolor', 'rosette', 'ring', 'banded', '斑', '紋', '花紋', '多彩', 'rayas', 'manchas', 'patrón']
            }[colKey] || [];

            if (colMatches.some(w => fullBioText.includes(w))) {
              score += 20;
              matchedTraits.push('Color Palette');
            }
          }

          // Size
          if (answers.size) {
            const szKey = answers.size;
            if (szKey === 'tiny' && ['insects', 'gemstones'].includes(specimen.category)) {
              score += 15;
              matchedTraits.push('Size Category');
            } else if (szKey === 'small' && ['amphibians', 'reptiles', 'birds', 'plants'].includes(specimen.category)) {
              score += 15;
              matchedTraits.push('Size Category');
            } else if (szKey === 'medium' && ['birds', 'reptiles', 'land', 'plants'].includes(specimen.category)) {
              score += 15;
              matchedTraits.push('Size Category');
            } else if (szKey === 'large' && ['land', 'marine', 'reptiles'].includes(specimen.category)) {
              score += 15;
              matchedTraits.push('Size Category');
            } else if (szKey === 'giant' && ['marine', 'land'].includes(specimen.category)) {
              score += 15;
              matchedTraits.push('Size Category');
            }
          }

          // Special Traits
          if (answers.traits && answers.traits.length > 0) {
            answers.traits.forEach(tr => {
              const trMatches = {
                flying: ['fly', 'flight', 'wings', 'feathers', 'soar', 'aerial', '飛', '翅', '羽', 'vuelo', 'alas', 'plumas'],
                swimming: ['swim', 'water', 'ocean', 'dive', 'aquatic', 'gills', 'fin', '游', '潛', '水', 'nadar', 'bucear', 'aletas'],
                climbing: ['climb', 'tree', 'arboreal', 'branch', 'canopy', 'rock', '爬', '樹', 'trepar', 'ramas'],
                slithering: ['snake', 'slither', 'python', 'boa', 'viper', 'cobra', 'reptile', 'serpent', '蛇', '爬行', 'serpiente'],
                venomous: ['venom', 'poison', 'toxic', 'fang', 'sting', 'warning', '毒', '刺', 'veneno', 'tóxico'],
                blooming: ['flower', 'petal', 'bloom', 'blossom', 'nectar', 'fragrant', 'botanical', '花', '盛開', '芳香', 'flor', 'pétalos'],
                crystal: ['crystal', 'gem', 'hardness', 'mineral', 'facet', 'quartz', 'refractive', '寶石', '水晶', '硬度', '礦', 'cristal', 'gema'],
                nocturnal: ['night', 'nocturnal', 'dark', 'glowing', 'bioluminescent', 'moon', '夜', '螢光', 'noche', 'nocturno']
              }[tr] || [];

              if (trMatches.some(w => fullBioText.includes(w))) {
                score += 15;
                matchedTraits.push(tr.charAt(0).toUpperCase() + tr.slice(1));
              }
            });
          }
        }

        // Clamp confidence percentage between 10% and 99%
        const normalizedConfidence = Math.min(99, Math.max(12, Math.round(score)));

        return {
          specimen,
          confidence: normalizedConfidence,
          matchedTraits: Array.from(new Set(matchedTraits))
        };
      });

      scoredList.sort((a, b) => b.confidence - a.confidence);
      return scoredList;
    }

    // -------------------------------------------------------------
    // RENDER MAIN MODAL UI
    // -------------------------------------------------------------
    render() {
      const container = document.getElementById('identifier-modal-content');
      if (!container) return;

      const lang = window.AK_I18N ? window.AK_I18N.getLanguage() : 'en';

      container.innerHTML = `
        <div class="identifier-container">
          <button class="identifier-close-btn" onclick="window.AK_IDENTIFIER.closeModal()" title="Close">✕</button>
          
          <div class="identifier-header">
            <span class="identifier-badge">🔍 AI & HEURISTIC FIELD GUIDE</span>
            <h2 class="identifier-title">${this.getText('title')}</h2>
            <p class="identifier-subtitle">${this.getText('subtitle')}</p>
          </div>

          <!-- Dual Mode Tabs -->
          <div class="identifier-mode-tabs">
            <button class="id-tab-btn ${this.currentMode === 'wizard' ? 'active' : ''}" onclick="window.AK_IDENTIFIER.setMode('wizard')">
              ${this.getText('tab_wizard')}
            </button>
            <button class="id-tab-btn ${this.currentMode === 'describe' ? 'active' : ''}" onclick="window.AK_IDENTIFIER.setMode('describe')">
              ${this.getText('tab_describe')}
            </button>
          </div>

          <div class="identifier-main-stage">
            ${this.currentMode === 'wizard' ? this.renderWizardStage() : this.renderDescribeStage()}
          </div>
        </div>
      `;
    }

    renderWizardStage() {
      const step = this.wizardStep;
      const progressPercent = Math.round((step / this.totalSteps) * 100);
      const isLastStep = step === this.totalSteps;

      // Candidate count preview
      const candidates = this.scoreSpecimens(this.wizardAnswers, null);
      const topCandidates = candidates.slice(0, 5);

      return `
        <div class="wizard-box">
          <div class="wizard-progress-bar-wrap">
            <div class="wizard-progress-labels">
              <span>${this.getText('step_progress').replace('{step}', step).replace('{total}', this.totalSteps)}</span>
              <span class="wizard-candidate-ticker">🎯 ${candidates.length} candidates in database</span>
            </div>
            <div class="wizard-track">
              <div class="wizard-fill" style="width: ${progressPercent}%;"></div>
            </div>
          </div>

          <div class="wizard-step-card">
            ${this.renderStepContent(step)}
          </div>

          <div class="wizard-controls">
            ${step > 1 ? `
              <button class="btn-wizard-nav btn-wizard-prev" onclick="window.AK_IDENTIFIER.prevStep()">
                ${this.getText('btn_prev')}
              </button>
            ` : '<div></div>'}

            <div class="wizard-ctrl-right">
              <button class="btn-wizard-reset" onclick="window.AK_IDENTIFIER.resetWizard()">
                ${this.getText('btn_reset')}
              </button>
              ${!isLastStep ? `
                <button class="btn-wizard-nav btn-wizard-next" onclick="window.AK_IDENTIFIER.nextStep()">
                  ${this.getText('btn_next')}
                </button>
              ` : `
                <button class="btn-wizard-nav btn-wizard-finish" onclick="window.AK_IDENTIFIER.scrollToResults()">
                  ${this.getText('btn_see_results').replace('{count}', topCandidates.length)}
                </button>
              `}
            </div>
          </div>

          <!-- Live Top Candidates Reveal -->
          <div class="wizard-live-results" id="identifier-results-anchor">
            <h3 class="results-title">${this.getText('results_heading')}</h3>
            <p class="results-desc">${this.getText('results_subtitle')}</p>
            <div class="results-grid">
              ${topCandidates.map(item => this.renderCandidateCard(item)).join('')}
            </div>
          </div>
        </div>
      `;
    }

    renderStepContent(step) {
      if (step === 1) {
        return `
          <h3 class="step-question-title">${this.getText('q1_title')}</h3>
          <p class="step-question-desc">${this.getText('q1_desc')}</p>
          <div class="step-options-grid">
            ${[
              { key: 'all', label: this.getText('q1_opt_all') },
              { key: 'land', label: this.getText('q1_opt_land') },
              { key: 'birds', label: this.getText('q1_opt_birds') },
              { key: 'marine', label: this.getText('q1_opt_marine') },
              { key: 'reptiles', label: this.getText('q1_opt_reptiles') },
              { key: 'amphibians', label: this.getText('q1_opt_amphibians') },
              { key: 'insects', label: this.getText('q1_opt_insects') },
              { key: 'plants', label: this.getText('q1_opt_plants') },
              { key: 'gemstones', label: this.getText('q1_opt_gemstones') }
            ].map(opt => `
              <button class="option-btn ${this.wizardAnswers.category === opt.key ? 'selected' : ''}" onclick="window.AK_IDENTIFIER.setWizardAnswer('category', '${opt.key}')">
                ${opt.label}
              </button>
            `).join('')}
          </div>
        `;
      }

      if (step === 2) {
        return `
          <h3 class="step-question-title">${this.getText('q2_title')}</h3>
          <p class="step-question-desc">${this.getText('q2_desc')}</p>
          <div class="step-options-grid">
            ${[
              { key: 'forest', label: this.getText('q2_opt_forest') },
              { key: 'ocean', label: this.getText('q2_opt_ocean') },
              { key: 'freshwater', label: this.getText('q2_opt_freshwater') },
              { key: 'desert', label: this.getText('q2_opt_desert') },
              { key: 'savanna', label: this.getText('q2_opt_savanna') },
              { key: 'mountain', label: this.getText('q2_opt_mountain') },
              { key: 'garden', label: this.getText('q2_opt_garden') },
              { key: 'underground', label: this.getText('q2_opt_underground') }
            ].map(opt => `
              <button class="option-btn ${this.wizardAnswers.habitat === opt.key ? 'selected' : ''}" onclick="window.AK_IDENTIFIER.setWizardAnswer('habitat', '${opt.key}')">
                ${opt.label}
              </button>
            `).join('')}
          </div>
        `;
      }

      if (step === 3) {
        return `
          <h3 class="step-question-title">${this.getText('q3_title')}</h3>
          <p class="step-question-desc">${this.getText('q3_desc')}</p>
          <div class="step-options-grid">
            ${[
              { key: 'green', label: this.getText('q3_opt_green') },
              { key: 'brown', label: this.getText('q3_opt_brown') },
              { key: 'black', label: this.getText('q3_opt_black') },
              { key: 'yellow', label: this.getText('q3_opt_yellow') },
              { key: 'red', label: this.getText('q3_opt_red') },
              { key: 'white', label: this.getText('q3_opt_white') },
              { key: 'blue', label: this.getText('q3_opt_blue') },
              { key: 'pattern', label: this.getText('q3_opt_pattern') }
            ].map(opt => `
              <button class="option-btn ${this.wizardAnswers.color === opt.key ? 'selected' : ''}" onclick="window.AK_IDENTIFIER.setWizardAnswer('color', '${opt.key}')">
                ${opt.label}
              </button>
            `).join('')}
          </div>
        `;
      }

      if (step === 4) {
        return `
          <h3 class="step-question-title">${this.getText('q4_title')}</h3>
          <p class="step-question-desc">${this.getText('q4_desc')}</p>
          <div class="step-options-grid">
            ${[
              { key: 'tiny', label: this.getText('q4_opt_tiny') },
              { key: 'small', label: this.getText('q4_opt_small') },
              { key: 'medium', label: this.getText('q4_opt_medium') },
              { key: 'large', label: this.getText('q4_opt_large') },
              { key: 'giant', label: this.getText('q4_opt_giant') }
            ].map(opt => `
              <button class="option-btn ${this.wizardAnswers.size === opt.key ? 'selected' : ''}" onclick="window.AK_IDENTIFIER.setWizardAnswer('size', '${opt.key}')">
                ${opt.label}
              </button>
            `).join('')}
          </div>
        `;
      }

      if (step === 5) {
        return `
          <h3 class="step-question-title">${this.getText('q5_title')}</h3>
          <p class="step-question-desc">${this.getText('q5_desc')}</p>
          <div class="step-options-grid multi-select-grid">
            ${[
              { key: 'flying', label: this.getText('q5_opt_flying') },
              { key: 'swimming', label: this.getText('q5_opt_swimming') },
              { key: 'climbing', label: this.getText('q5_opt_climbing') },
              { key: 'slithering', label: this.getText('q5_opt_slithering') },
              { key: 'venomous', label: this.getText('q5_opt_venomous') },
              { key: 'blooming', label: this.getText('q5_opt_blooming') },
              { key: 'crystal', label: this.getText('q5_opt_crystal') },
              { key: 'nocturnal', label: this.getText('q5_opt_nocturnal') }
            ].map(opt => {
              const isSelected = this.wizardAnswers.traits.includes(opt.key);
              return `
                <button class="option-btn multi-btn ${isSelected ? 'selected' : ''}" onclick="window.AK_IDENTIFIER.setWizardAnswer('traits', '${opt.key}')">
                  <span class="multi-check">${isSelected ? '☑️' : '◻️'}</span> ${opt.label}
                </button>
              `;
            }).join('')}
          </div>
        `;
      }

      return '';
    }

    renderDescribeStage() {
      const defaultText = this.lastDescribeQuery || '';
      const candidates = defaultText ? this.scoreSpecimens(null, defaultText).slice(0, 5) : [];

      return `
        <div class="describe-box">
          <div class="describe-input-wrapper">
            <textarea id="identifier-desc-input" class="describe-textarea" rows="3" placeholder="${this.getText('input_placeholder')}">${defaultText}</textarea>
            <button class="btn-primary btn-describe-go" onclick="window.AK_IDENTIFIER.triggerDescribeSearch()">
              ${this.getText('btn_identify')}
            </button>
          </div>

          <div class="quick-prompts-bar">
            <span class="quick-prompts-label">${this.getText('quick_prompts_title')}</span>
            <div class="quick-prompts-pills">
              <button class="prompt-pill" onclick="window.AK_IDENTIFIER.fillPrompt(1)">${this.getText('prompt_1')}</button>
              <button class="prompt-pill" onclick="window.AK_IDENTIFIER.fillPrompt(2)">${this.getText('prompt_2')}</button>
              <button class="prompt-pill" onclick="window.AK_IDENTIFIER.fillPrompt(3)">${this.getText('prompt_3')}</button>
              <button class="prompt-pill" onclick="window.AK_IDENTIFIER.fillPrompt(4)">${this.getText('prompt_4')}</button>
              <button class="prompt-pill" onclick="window.AK_IDENTIFIER.fillPrompt(5)">${this.getText('prompt_5')}</button>
              <button class="prompt-pill" onclick="window.AK_IDENTIFIER.fillPrompt(6)">${this.getText('prompt_6')}</button>
            </div>
          </div>

          ${defaultText && candidates.length > 0 ? `
            <div class="describe-results-wrap">
              <h3 class="results-title">${this.getText('results_heading')}</h3>
              <p class="results-desc">${this.getText('results_subtitle')}</p>
              <div class="results-grid">
                ${candidates.map(item => this.renderCandidateCard(item)).join('')}
              </div>
            </div>
          ` : defaultText && candidates.length === 0 ? `
            <div class="empty-state">
              <h3>${this.getText('no_matches_title')}</h3>
              <p>${this.getText('no_matches_desc')}</p>
            </div>
          ` : `
            <div class="describe-guide-banner">
              <span class="guide-banner-icon">💡</span>
              <div>
                <strong>Natural Language Identifier Tips</strong>
                <p>Include any combination of colors (green, purple), habitats (river, desert), physical traits (fins, big claws, spiky scales), or behaviors (hunting fish, nocturnal) in any language!</p>
              </div>
            </div>
          `}
        </div>
      `;
    }

    fillPrompt(num) {
      const text = this.getText('prompt_' + num).replace(/^[^\w\u4e00-\u9fa5\u00C0-\u017F]+/, '');
      this.lastDescribeQuery = text;
      if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
        window.AK_AUDIO.playPop(520);
      }
      this.render();
    }

    triggerDescribeSearch() {
      const input = document.getElementById('identifier-desc-input');
      if (input && input.value.trim()) {
        this.lastDescribeQuery = input.value.trim();
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
          window.AK_AUDIO.playPop(580);
        }
        this.render();
      }
    }

    renderCandidateCard(cand) {
      const a = cand.specimen;
      const conf = cand.confidence;
      const locName = window.AK_I18N ? window.AK_I18N.getSpeciesName(a) : a.name;
      const locCat = window.AK_I18N ? window.AK_I18N.t('zone_' + a.category) : a.category;
      const locHab = window.AK_I18N ? window.AK_I18N.getSpeciesHabitat(a) : a.habitat;
      const locTag = window.AK_I18N ? window.AK_I18N.getSpeciesTagline(a) : a.tagline;

      const confBadgeClass = conf >= 80 ? 'conf-high' : (conf >= 55 ? 'conf-med' : 'conf-possible');
      const confText = conf >= 80 ? this.getText('confidence_high') : (conf >= 55 ? this.getText('confidence_med') : this.getText('confidence_possible'));

      return `
        <div class="candidate-card" onclick="window.AK_IDENTIFIER.openCandidate('${a.id}')">
          <div class="candidate-img-box">
            <img src="${a.image}" alt="${a.name}" class="candidate-img" loading="lazy" onerror="window.app && window.app.handleImageError(this, '${a.category}', '${a.emoji}', '${a.name.replace(/'/g, "\\'")}')">
            <div class="candidate-conf-meter ${confBadgeClass}">
              <span class="conf-percent">${conf}%</span>
              <span class="conf-label">${confText}</span>
            </div>
          </div>
          <div class="candidate-info">
            <div class="candidate-cat-row">
              <span class="candidate-cat-pill">${a.emoji} ${locCat}</span>
              <span class="candidate-sci"><em>${a.scientific}</em></span>
            </div>
            <h4 class="candidate-name">${a.emoji} ${locName}</h4>
            <p class="candidate-tagline">"${locTag}"</p>
            <div class="candidate-meta">
              <span>🌍 <strong>Habitat:</strong> ${locHab}</span>
            </div>
            ${cand.matchedTraits && cand.matchedTraits.length > 0 ? `
              <div class="candidate-traits-row">
                <span class="traits-label">${this.getText('traits_matched')}</span>
                ${cand.matchedTraits.slice(0, 4).map(t => `<span class="trait-tag">✓ ${t}</span>`).join('')}
              </div>
            ` : ''}
            <button class="btn-candidate-learn" onclick="event.stopPropagation(); window.AK_IDENTIFIER.openCandidate('${a.id}')">
              ${this.getText('btn_learn_more')}
            </button>
          </div>
        </div>
      `;
    }

    openCandidate(id) {
      this.closeModal();
      if (window.app && window.app.openAnimalDetail) {
        window.app.openAnimalDetail(id);
      }
    }

    scrollToResults() {
      const el = document.getElementById('identifier-results-anchor');
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }

  window.AK_IDENTIFIER = new SpecimenIdentifierEngine();

})(typeof window !== 'undefined' ? window : global);
