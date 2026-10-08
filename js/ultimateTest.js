// ============================================================================
// ANIMAL KINGDOM - THE ULTIMATE WILDLIFE TEST (GRAND CAPSTONE EXAM)
// Comprehensive Examination Across All 840+ Species, 8 Discovery Zones & Prehistory
// 100% Trilingual: English, 繁體中文, Español
// ============================================================================

(function(window) {
  'use strict';

  class UltimateWildlifeTestEngine {
    constructor() {
      this.totalQuestions = 25;
      this.currentQuestions = [];
      this.currentQuestionIdx = 0;
      this.userAnswers = [];
      this.score = 0;
      this.streak = 0;
      this.maxStreak = 0;
      this.examState = 'intro'; // 'intro', 'active', 'results'
      this.selectedOptionIdx = null;
      this.answered = false;
      this.startTime = null;
      this.endTime = null;

      // Category tracking for domain mastery
      this.domainResults = {
        land: { correct: 0, total: 0, label: 'Land Mammals', label_zh: '陸生哺乳動物', label_es: 'Mamíferos Terrestres', icon: '🦁' },
        marine: { correct: 0, total: 0, label: 'Marine & Oceans', label_zh: '海洋生物與深海', label_es: 'Océanos y Vida Marina', icon: '🐋' },
        birds: { correct: 0, total: 0, label: 'Avian & Flight', label_zh: '鳥類與飛行力學', label_es: 'Aves y Vuelo', icon: '🦅' },
        reptiles_amphibians: { correct: 0, total: 0, label: 'Herpetology', label_zh: '爬蟲與兩棲生物', label_es: 'Reptiles y Anfibios', icon: '🦎' },
        insects: { correct: 0, total: 0, label: 'Entomology & Ecology', label_zh: '昆蟲與生態系統', label_es: 'Insectos y Ecología', icon: '🐞' },
        evolution: { correct: 0, total: 0, label: 'Prehistoric Paleontology', label_zh: '史前古生物與演化', label_es: 'Paleontología Prehistórica', icon: '🦖' }
      };
    }

    getLang() {
      return (window.AK_I18N && window.AK_I18N.getLanguage) ? window.AK_I18N.getLanguage() : 'en';
    }

    getAllSpecimens() {
      const list = [];
      const pushSafe = (arr) => {
        if (Array.isArray(arr)) {
          arr.forEach(item => {
            if (item && item.id && !list.some(x => x.id === item.id)) {
              list.push(item);
            }
          });
        }
      };
      pushSafe(window.LAND_DATA);
      pushSafe(window.MARINE_DATA);
      pushSafe(window.BIRDS_DATA);
      pushSafe(window.REPTILES_DATA);
      pushSafe(window.AMPHIBIANS_DATA);
      pushSafe(window.INSECTS_DATA);
      pushSafe(window.PLANTS_DATA);
      pushSafe(window.GEMSTONES_DATA);
      return list;
    }

    // Modal Control
    openModal() {
      const modal = document.getElementById('ultimate-test-modal');
      if (!modal) return;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';

      if (this.examState !== 'active') {
        this.examState = 'intro';
      }
      this.render();
    }

    closeModal() {
      const modal = document.getElementById('ultimate-test-modal');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    startNewExam() {
      this.currentQuestions = this.generateGrandExamPool(this.totalQuestions);
      this.currentQuestionIdx = 0;
      this.userAnswers = [];
      this.score = 0;
      this.streak = 0;
      this.maxStreak = 0;
      this.selectedOptionIdx = null;
      this.answered = false;
      this.startTime = Date.now();
      this.examState = 'active';

      // Reset domain tracker
      Object.keys(this.domainResults).forEach(key => {
        this.domainResults[key].correct = 0;
        this.domainResults[key].total = 0;
      });

      if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(520);
      this.render();
    }

    // ------------------------------------------------------------------------
    // DYNAMIC QUESTION GENERATOR (Pooling across all 8 zones + Prehistory)
    // ------------------------------------------------------------------------
    generateGrandExamPool(count = 25) {
      const all = this.getAllSpecimens();
      const landList = (window.LAND_DATA || []).filter(x => x && x.name);
      const marineList = (window.MARINE_DATA || []).filter(x => x && x.name);
      const birdsList = (window.BIRDS_DATA || []).filter(x => x && x.name);
      const reptilesList = (window.REPTILES_DATA || []).filter(x => x && x.name);
      const amphibiansList = (window.AMPHIBIANS_DATA || []).filter(x => x && x.name);
      const insectsList = (window.INSECTS_DATA || []).filter(x => x && x.name);

      const questions = [];

      // Helper to pick random item
      const pickRandom = (arr) => arr[Math.floor(Math.random() * arr.length)];
      const shuffle = (arr) => [...arr].sort(() => 0.5 - Math.random());

      // Predefined elite questions
      const ELITE_PREHISTORIC = [
        {
          domain: 'evolution',
          prompt: 'What was the estimated canine crushing bite force of an adult Tyrannosaurus Rex?',
          prompt_zh: '成年霸王龍 (T-Rex) 的雙顎粉碎性咬合力估計高達多少？',
          prompt_es: '¿Cuál era la fuerza de mordida demoledora del Tiranosaurio Rex?',
          correct: 'Over 12,800 PSI (enough to crush bone to dust)',
          correct_zh: '超過 12,800 PSI (足以將堅固骨骼粉碎成灰)',
          correct_es: 'Más de 12,800 PSI (tritura huesos sólidos)',
          options: [
            'Over 12,800 PSI (enough to crush bone to dust)',
            '500 PSI (like a dog)',
            '2,000 PSI',
            '50 PSI'
          ],
          options_zh: [
            '超過 12,800 PSI (足以將堅固骨骼粉碎成灰)',
            '500 PSI (相當於家犬)',
            '2,000 PSI',
            '50 PSI'
          ],
          options_es: [
            'Más de 12,800 PSI (tritura huesos sólidos)',
            '500 PSI',
            '2,000 PSI',
            '50 PSI'
          ],
          explanation: 'Biomechanic simulations calculate that T-Rex exerted over 12,800 PSI of bone-shattering force.'
        },
        {
          domain: 'evolution',
          prompt: 'Which modern animal shares the closest collagen protein sequence with the Tyrannosaurus Rex?',
          prompt_zh: '根據化石膠原蛋白分子分析，哪種現存生物與暴龍具有最接近的蛋白質序列？',
          prompt_es: '¿Qué animal moderno tiene la secuencia de colágeno más cercana al T-Rex?',
          correct: 'Modern Chickens & Ostriches (Birds)',
          correct_zh: '現代雞與鴕鳥 (鳥翼類恐龍)',
          correct_es: 'Gallinas y avestruces modernas (Aves)',
          options: [
            'Modern Chickens & Ostriches (Birds)',
            'Komodo Dragon',
            'Green Sea Turtle',
            'Saltwater Crocodile'
          ],
          options_zh: [
            '現代雞與鴕鳥 (鳥翼類恐龍)',
            '科摩多巨蜥',
            '綠蠵龜',
            '澳洲灣鱷'
          ],
          options_es: [
            'Gallinas y avestruces modernas (Aves)',
            'Dragón de Komodo',
            'Tortuga marina',
            'Cocodrilo marino'
          ],
          explanation: 'Mass spectrometry of 68-million-year-old T-Rex femur collagen revealed it was genetically closest to birds.'
        },
        {
          domain: 'evolution',
          prompt: 'What was the colossal shark Otodus megalodon’s primary prey in ancient oceans?',
          prompt_zh: '史前頂級巨鯊巨齒鯊 (Otodus megalodon) 在遠古海洋中的主要捕食獵物是什麼？',
          prompt_es: '¿Cuál era la presa principal del tiburón gigante Megalodón?',
          correct: 'Ancient whales and marine mammals',
          correct_zh: '史前鯨魚與大型海洋哺乳動物',
          correct_es: 'Ballenas prehistóricas y mamíferos marinos',
          options: [
            'Ancient whales and marine mammals',
            'Small shrimp only',
            'Terrestrial dinosaurs',
            'Kelp sea plants'
          ],
          options_zh: [
            '史前鯨魚與大型海洋哺乳動物',
            '僅以微小海蝦為食',
            '陸地恐龍',
            '深海海藻植物'
          ],
          options_es: [
            'Ballenas prehistóricas y mamíferos marinos',
            'Solo camarones pequeños',
            'Dinosaurios terrestres',
            'Algas marinas'
          ],
          explanation: 'Fossil whale vertebrae are frequently discovered bearing massive Megalodon serrated tooth gouges.'
        },
        {
          domain: 'birds',
          prompt: 'What shorebird holds the world record for the longest non-stop migratory flight (over 7,100 miles across the Pacific)?',
          prompt_zh: '哪種水鳥保持著世界上最長不著陸連續飛行遷徙紀錄（橫跨太平洋超過11,000公里）？',
          prompt_es: '¿Qué ave tiene el récord mundial de vuelo migratorio continuo sin parar (más de 11,000 km)?',
          correct: 'Bar-tailed Godwit (Limosa lapponica)',
          correct_zh: '斑尾鷸 (Bar-tailed Godwit)',
          correct_es: 'Aguja Colipinta (Limosa lapponica)',
          options: [
            'Bar-tailed Godwit (Limosa lapponica)',
            'Bald Eagle',
            'Barn Owl',
            'Peregrine Falcon'
          ],
          options_zh: [
            '斑尾鷸 (Bar-tailed Godwit)',
            '白頭海鵰',
            '倉鴞',
            '遊隼'
          ],
          options_es: [
            'Aguja Colipinta (Limosa lapponica)',
            'Águila Calva',
            'Lechuza Común',
            'Halcón Peregrino'
          ],
          explanation: 'A tagged Bar-tailed Godwit flew 7,145 miles non-stop from Alaska to New Zealand in 11 days.'
        },
        {
          domain: 'land',
          prompt: 'How quickly can an African Cheetah accelerate from 0 to 60 mph (0 to 100 km/h)?',
          prompt_zh: '非洲獵豹從靜止起步加速至時速 100 公里需要多少秒？',
          prompt_es: '¿Qué tan rápido acelera un guepardo africano de 0 a 100 km/h?',
          correct: 'Under 3 seconds (faster than most supercars)',
          correct_zh: '小於 3 秒 (快過大多數超級跑車)',
          correct_es: 'Menos de 3 segundos (más veloz que superdeportivos)',
          options: [
            'Under 3 seconds (faster than most supercars)',
            '10 seconds',
            '30 seconds',
            '5 minutes'
          ],
          options_zh: [
            '小於 3 秒 (快過大多數超級跑車)',
            '10 秒',
            '30 秒',
            '5 分鐘'
          ],
          options_es: [
            'Menos de 3 segundos (más veloz que superdeportivos)',
            '10 segundos',
            '30 segundos',
            '5 minutos'
          ],
          explanation: 'A cheetah can reach 60 mph in just 3 seconds due to its flexible spring-like spine.'
        },
        {
          domain: 'marine',
          prompt: 'What organ allows sharks to detect the faint micro-volt heartbeat of fish buried under sand?',
          prompt_zh: '鯊魚透過吻部的何種特化器官能夠感應埋在沙底的魚類微伏特心跳電場？',
          prompt_es: '¿Qué órgano permite a los tiburones detectar el latido cardíaco de presas bajo la arena?',
          correct: 'Ampullae of Lorenzini',
          correct_zh: '羅倫氏壺腹 (Ampullae of Lorenzini)',
          correct_es: 'Ampollas de Lorenzini',
          options: [
            'Ampullae of Lorenzini',
            'Dorsal Fin',
            'Gills slits',
            'Air swim bladder'
          ],
          options_zh: [
            '羅倫氏壺腹 (Ampullae of Lorenzini)',
            '背鰭軟骨',
            '外露鰓孔',
            '充氣魚鰾'
          ],
          options_es: [
            'Ampollas de Lorenzini',
            'Aleta dorsal',
            'Hendiduras branquiales',
            'Vejiga natatoria'
          ],
          explanation: 'The Ampullae of Lorenzini are electroreceptors capable of detecting electric fields down to 5 nV/cm.'
        }
      ];

      // Add elite curated questions
      questions.push(...ELITE_PREHISTORIC);

      // Generate dynamic questions from live database specimens
      const targetDomains = [
        { domain: 'land', pool: landList },
        { domain: 'marine', pool: marineList },
        { domain: 'birds', pool: birdsList },
        { domain: 'reptiles_amphibians', pool: [...reptilesList, ...amphibiansList] },
        { domain: 'insects', pool: insectsList }
      ];

      while (questions.length < count) {
        const dObj = pickRandom(targetDomains);
        const candidate = pickRandom(dObj.pool);
        if (!candidate || !candidate.name) continue;

        // Question Type 1: Habitat Identification
        if (candidate.habitat && Math.random() < 0.35) {
          const distractors = all
            .filter(x => x.id !== candidate.id && x.habitat && x.habitat !== candidate.habitat)
            .sort(() => 0.5 - Math.random())
            .slice(0, 3)
            .map(x => x.habitat);

          if (distractors.length === 3) {
            const rawOpts = shuffle([candidate.habitat, ...distractors]);
            questions.push({
              domain: dObj.domain,
              image: candidate.image,
              prompt: `Where is the natural habitat of the ${candidate.emoji || '🐾'} ${candidate.name}?`,
              prompt_zh: `野生 ${candidate.emoji || '🐾'} ${candidate.name_zh || candidate.name} 的原生棲息地位於何處？`,
              prompt_es: `¿Cuál es el hábitat natural del ${candidate.emoji || '🐾'} ${candidate.name_es || candidate.name}?`,
              correct: candidate.habitat,
              correct_zh: candidate.habitat_zh || candidate.habitat,
              correct_es: candidate.habitat_es || candidate.habitat,
              options: rawOpts,
              options_zh: rawOpts.map(o => o === candidate.habitat ? (candidate.habitat_zh || candidate.habitat) : o),
              options_es: rawOpts.map(o => o === candidate.habitat ? (candidate.habitat_es || candidate.habitat) : o),
              explanation: `${candidate.name} is native to: ${candidate.habitat}.`
            });
            continue;
          }
        }

        // Question Type 2: Species Identity by Image / Scientific Name
        const otherSpecies = dObj.pool
          .filter(x => x.id !== candidate.id)
          .sort(() => 0.5 - Math.random())
          .slice(0, 3);

        if (otherSpecies.length === 3) {
          const rawOpts = shuffle([candidate.name, ...otherSpecies.map(x => x.name)]);
          questions.push({
            domain: dObj.domain,
            image: candidate.image,
            prompt: `Identify this specimen: It is known scientifically as "${candidate.scientific}". Which creature is it?`,
            prompt_zh: `請辨識該生物標本：其學名為「${candidate.scientific}」。牠是哪種生物？`,
            prompt_es: `Identifica este espécimen: Su nombre científico es "${candidate.scientific}". ¿Cuál es?`,
            correct: candidate.name,
            correct_zh: candidate.name_zh || candidate.name,
            correct_es: candidate.name_es || candidate.name,
            options: rawOpts,
            options_zh: rawOpts.map(o => {
              const match = [candidate, ...otherSpecies].find(x => x.name === o);
              return match ? (match.name_zh || match.name) : o;
            }),
            options_es: rawOpts.map(o => {
              const match = [candidate, ...otherSpecies].find(x => x.name === o);
              return match ? (match.name_es || match.name) : o;
            }),
            explanation: `The scientific taxonomy "${candidate.scientific}" belongs to the ${candidate.name} (${candidate.category.toUpperCase()}).`
          });
        }
      }

      return shuffle(questions).slice(0, count);
    }

    // ------------------------------------------------------------------------
    // ANSWER SUBMISSION & DOMAIN SCORING
    // ------------------------------------------------------------------------
    submitAnswer(optionIdx) {
      if (this.answered) return;
      this.selectedOptionIdx = optionIdx;
      this.answered = true;

      const q = this.currentQuestions[this.currentQuestionIdx];
      const lang = this.getLang();
      const userChoice = lang === 'zh' ? q.options_zh[optionIdx] : (lang === 'es' ? q.options_es[optionIdx] : q.options[optionIdx]);
      const targetCorrect = lang === 'zh' ? q.correct_zh : (lang === 'es' ? q.correct_es : q.correct);

      const isCorrect = userChoice === targetCorrect;

      // Update Domain Tracker
      if (this.domainResults[q.domain]) {
        this.domainResults[q.domain].total++;
        if (isCorrect) this.domainResults[q.domain].correct++;
      }

      if (isCorrect) {
        this.score++;
        this.streak++;
        if (this.streak > this.maxStreak) this.maxStreak = this.streak;
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(580);
      } else {
        this.streak = 0;
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(220);
      }

      this.render();
    }

    nextQuestion() {
      if (this.currentQuestionIdx < this.currentQuestions.length - 1) {
        this.currentQuestionIdx++;
        this.selectedOptionIdx = null;
        this.answered = false;
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(480);
        this.render();
      } else {
        this.finishExam();
      }
    }

    finishExam() {
      this.endTime = Date.now();
      this.examState = 'results';

      // Check if user passed with 80%+ (20/25)
      const passed = (this.score / this.totalQuestions) >= 0.8;
      if (passed) {
        // Award 1,000 Coins into Quest Wallet!
        if (window.AK_QUESTS && window.AK_QUESTS.addCoins) {
          window.AK_QUESTS.addCoins(1000);
        }
        // Award 500 XP to Academy!
        if (window.AK_ACADEMY && window.AK_ACADEMY.addXp) {
          window.AK_ACADEMY.addXp(500);
        }
        if (window.AK_GAME && window.AK_GAME.triggerConfetti) {
          window.AK_GAME.triggerConfetti();
        }
        if (window.AK_AUDIO && window.AK_AUDIO.playVictory) {
          window.AK_AUDIO.playVictory();
        }
      }

      this.render();
    }

    // ------------------------------------------------------------------------
    // UI RENDERING ENGINE
    // ------------------------------------------------------------------------
    render() {
      const container = document.getElementById('ultimate-test-modal-content');
      if (!container) return;

      if (this.examState === 'intro') {
        this.renderIntro(container);
      } else if (this.examState === 'active') {
        this.renderActiveQuestion(container);
      } else if (this.examState === 'results') {
        this.renderResults(container);
      }
    }

    renderIntro(container) {
      container.innerHTML = `
        <div class="ultimate-modal-container">
          <button class="game-modal-close" onclick="window.AK_ULTIMATE_TEST.closeModal()">✕</button>

          <div class="exam-intro-hero">
            <div class="exam-crown-badge">🏆 THE CAPSTONE EXAMINATION</div>
            <h2 class="exam-main-heading">The Ultimate Wildlife Test of All Animals</h2>
            <p class="exam-lead-p">
              The supreme test of your zoological knowledge! 25 comprehensive questions spanning all 840+ species across all 8 Earth Discovery Zones, predator biomechanics, prehistoric lineages, and extreme biological superpowers.
            </p>

            <div class="exam-rules-grid">
              <div class="rule-box">
                <span class="rule-icon">📝</span>
                <strong>25 Grand Questions</strong>
                <p>Pooled dynamically from Land, Marine, Birds, Reptiles, Amphibians, and Prehistory.</p>
              </div>
              <div class="rule-box">
                <span class="rule-icon">📜</span>
                <strong>Grand Zoologist Diploma</strong>
                <p>Earn an official printable Certificate of Zoology Mastery with your grade!</p>
              </div>
              <div class="rule-box">
                <span class="rule-icon">🪙</span>
                <strong>+1,000 Coins Reward</strong>
                <p>Pass with 80%+ to unlock a massive treasure for the Card Shop & Arena!</p>
              </div>
            </div>

            <div class="exam-cta-row">
              <button class="btn-start-exam glow-pulse" onclick="window.AK_ULTIMATE_TEST.startNewExam()">
                Begin The Ultimate Test ⚔️ ➡️
              </button>
            </div>
          </div>
        </div>
      `;
    }

    renderActiveQuestion(container) {
      const q = this.currentQuestions[this.currentQuestionIdx];
      const lang = this.getLang();
      const prompt = lang === 'zh' ? q.prompt_zh : (lang === 'es' ? q.prompt_es : q.prompt);
      const options = lang === 'zh' ? q.options_zh : (lang === 'es' ? q.options_es : q.options);
      const correctVal = lang === 'zh' ? q.correct_zh : (lang === 'es' ? q.correct_es : q.correct);

      const dMeta = this.domainResults[q.domain] || { label: 'General Zoology', icon: '🐾' };
      const progressPct = Math.round(((this.currentQuestionIdx + 1) / this.totalQuestions) * 100);

      const formattedImg = q.image ? (window.app ? window.app.formatImageUrl(q.image, 500) : q.image) : null;

      container.innerHTML = `
        <div class="ultimate-modal-container">
          <button class="game-modal-close" onclick="window.AK_ULTIMATE_TEST.closeModal()">✕</button>

          <!-- Test Progress Topbar -->
          <div class="exam-topbar">
            <div class="exam-domain-pill">
              <span>${dMeta.icon}</span> <span>${dMeta.label}</span>
            </div>

            <div class="exam-progress-tracker">
              <div class="exam-counter">Question <strong>${this.currentQuestionIdx + 1}</strong> of ${this.totalQuestions}</div>
              <div class="exam-bar-bg">
                <div class="exam-bar-fill" style="width: ${progressPct}%"></div>
              </div>
            </div>

            <div class="exam-score-pill">
              <span>⭐ Score: <strong>${this.score}</strong></span>
              ${this.streak >= 2 ? `<span class="streak-flame">🔥 ${this.streak} Streak!</span>` : ''}
            </div>
          </div>

          <!-- Question Content Card -->
          <div class="exam-question-card">
            ${formattedImg ? `
              <div class="exam-q-img-wrap">
                <img src="${formattedImg}" alt="Specimen" class="exam-q-img" loading="lazy"
                  onerror="this.style.display='none'">
              </div>
            ` : ''}

            <h3 class="exam-q-title">❓ ${prompt}</h3>

            <!-- Options Grid -->
            <div class="exam-options-grid">
              ${options.map((opt, idx) => {
                let optClass = '';
                if (this.answered) {
                  if (opt === correctVal) optClass = 'opt-correct';
                  else if (this.selectedOptionIdx === idx) optClass = 'opt-wrong';
                }

                return `
                  <button class="btn-exam-opt ${optClass}" onclick="window.AK_ULTIMATE_TEST.submitAnswer(${idx})" ${this.answered ? 'disabled' : ''}>
                    <span class="exam-opt-key">${String.fromCharCode(65 + idx)}</span>
                    <span class="exam-opt-text">${opt}</span>
                    ${this.answered && opt === correctVal ? '<span class="opt-tag">✓ Correct</span>' : ''}
                    ${this.answered && this.selectedOptionIdx === idx && opt !== correctVal ? '<span class="opt-tag">✕ Missed</span>' : ''}
                  </button>
                `;
              }).join('')}
            </div>

            <!-- Instant Feedback & Advance Button -->
            ${this.answered ? `
              <div class="exam-feedback-box ${options[this.selectedOptionIdx] === correctVal ? 'exam-fb-win' : 'exam-fb-lose'}">
                <p><strong>💡 Zoological Insight:</strong> ${q.explanation}</p>
                <button class="btn-next-question glow-pulse" onclick="window.AK_ULTIMATE_TEST.nextQuestion()">
                  ${this.currentQuestionIdx === this.totalQuestions - 1 ? 'Finish & See Final Diploma 🏆 ➡️' : 'Next Question ➡️'}
                </button>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }

    renderResults(container) {
      const pct = Math.round((this.score / this.totalQuestions) * 100);
      let grade = 'A+';
      let gradeTitle = 'Grandmaster Naturalist of Planet Earth';
      let gradeBadge = '👑';

      if (pct >= 95) {
        grade = 'A+'; gradeTitle = 'Grandmaster Naturalist Honor'; gradeBadge = '👑';
      } else if (pct >= 85) {
        grade = 'A'; gradeTitle = 'Senior Wildlife Biologist'; gradeBadge = '🌟';
      } else if (pct >= 75) {
        grade = 'B'; gradeTitle = 'Certified Field Zoologist'; gradeBadge = '🌿';
      } else if (pct >= 60) {
        grade = 'C'; gradeTitle = 'Wildlife Tracker Apprentice'; gradeBadge = '🐾';
      } else {
        grade = 'Needs Review'; gradeTitle = 'Aspiring Nature Explorer'; gradeBadge = '🌱';
      }

      const todayStr = new Date().toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' });

      container.innerHTML = `
        <div class="ultimate-modal-container">
          <button class="game-modal-close" onclick="window.AK_ULTIMATE_TEST.closeModal()">✕</button>

          <div class="exam-results-screen">
            <div class="results-top-banner">
              <span class="results-crown">${gradeBadge}</span>
              <h2>Examination Completed!</h2>
              <p class="results-score-p">Final Score: <strong>${this.score} / ${this.totalQuestions} (${pct}%)</strong></p>
              <div class="grade-pill grade-${grade.toLowerCase().replace(/[^a-z]/g, '')}">GRADE: ${grade} • ${gradeTitle}</div>
            </div>

            ${pct >= 80 ? `
              <div class="exam-victory-rewards-banner">
                🎉 <strong>CONGRATULATIONS!</strong> You passed the Ultimate Wildlife Test!
                <div class="rewards-row">
                  <span>🪙 +1,000 Coins Deposited</span> • <span>⚡ +500 Academy XP</span>
                </div>
              </div>
            ` : ''}

            <!-- Domain Mastery Breakdown -->
            <div class="domain-mastery-card">
              <h3>📊 Mastery Breakdown by Scientific Domain</h3>
              <div class="domain-bars-grid">
                ${Object.keys(this.domainResults).map(k => {
                  const d = this.domainResults[k];
                  const dPct = d.total > 0 ? Math.round((d.correct / d.total) * 100) : 100;
                  return `
                    <div class="domain-stat-item">
                      <div class="d-meta-row">
                        <span>${d.icon} ${d.label}</span>
                        <strong>${d.correct}/${d.total} (${dPct}%)</strong>
                      </div>
                      <div class="d-bar-bg">
                        <div class="d-bar-fill" style="width: ${dPct}%"></div>
                      </div>
                    </div>
                  `;
                }).join('')}
              </div>
            </div>

            <!-- OFFICIAL DIPLOMA OF ZOOLOGY -->
            <div class="official-diploma-frame" id="official-diploma">
              <div class="diploma-border">
                <div class="diploma-header">
                  <span class="diploma-crest">🌿🦁🦅</span>
                  <h3 class="diploma-title">THE ANIMAL KINGDOM</h3>
                  <p class="diploma-sub">Department of Planetary Wildlife & Natural Sciences</p>
                </div>

                <p class="diploma-body-lead">This official certification certifies that</p>
                <h2 class="diploma-recipient-name">MASTER EXPLORER</h2>
                <p class="diploma-body-text">
                  has demonstrated exemplary mastery in global biodiversity, predator biomechanics, avian aerodynamics, herpetology, marine ecology, and prehistoric evolutionary lineages on the comprehensive Ultimate Wildlife Test.
                </p>

                <div class="diploma-footer-row">
                  <div class="diploma-date-box">
                    <span>Date Conferred:</span>
                    <strong>${todayStr}</strong>
                  </div>
                  <div class="diploma-seal">
                    <span>★ OFFICIAL ★</span>
                    <strong>GRAND SEAL</strong>
                    <span>OF ZOOLOGY</span>
                  </div>
                  <div class="diploma-grade-box">
                    <span>Official Grade:</span>
                    <strong>${grade} (${pct}%)</strong>
                  </div>
                </div>
              </div>
            </div>

            <div class="diploma-actions-row">
              <button class="btn-print-diploma" onclick="window.print()">🖨️ Print / Save Diploma</button>
              <button class="btn-retake-exam" onclick="window.AK_ULTIMATE_TEST.startNewExam()">Retake Exam 🔄</button>
              <button class="btn-close-exam" onclick="window.AK_ULTIMATE_TEST.closeModal()">Back to Animal Kingdom 🌿</button>
            </div>
          </div>
        </div>
      `;
    }
  }

  // Instantiate Ultimate Test Singleton
  window.AK_ULTIMATE_TEST = new UltimateWildlifeTestEngine();

})(typeof window !== 'undefined' ? window : global);
