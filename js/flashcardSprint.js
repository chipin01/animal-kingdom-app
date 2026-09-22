/**
 * The Animal Kingdom - Wildlife Flashcard Study & Memory Sprint Quiz ("Memory Safari")
 * - Deals a randomized 5-specimen study deck with 3D flippable cards
 * - Studies Habitat, Diet, Characteristics/Superpowers & Fun Facts
 * - "I'm Ready!" Challenge selects a random creature from the deck and tests on:
 *   1. Habitat (Where does it live?)
 *   2. Diet (What does it eat?)
 *   3. Characteristics / Superpower (What is its key physical trait?)
 * - Supports 100% Multilingual: English (en), Traditional Chinese (zh), Spanish (es).
 */

(function(window) {
  'use strict';

  class FlashcardSprintEngine {
    constructor() {
      this.deck = [];
      this.currentCardIndex = 0;
      this.isFlipped = false;
      this.studySeconds = 0;
      this.timerInterval = null;

      // Quiz state
      this.phase = 'study'; // 'study', 'quiz', 'score'
      this.quizTarget = null;
      this.quizQuestions = [];
      this.currentQuestionIndex = 0;
      this.quizAnswers = [];
      this.score = 0;
      this.selectedOption = null;
      this.answered = false;
    }

    getAllSpecimens() {
      if (window.AK_AOD && window.AK_AOD.getAllAnimals) {
        const list = window.AK_AOD.getAllAnimals();
        if (list && list.length > 0) return list;
      }
      if (window.app && window.app.animals && window.app.animals.length > 0) {
        return window.app.animals;
      }
      const dataArrays = [
        window.AMPHIBIANS_DATA, window.INSECTS_DATA, window.MARINE_DATA,
        window.LAND_DATA, window.BIRDS_DATA, window.PLANTS_DATA,
        window.GEMSTONES_DATA, window.REPTILES_DATA,
        window.amphibians, window.insects, window.marine,
        window.land, window.birds, window.plants,
        window.gemstones, window.reptiles
      ];
      const combined = [];
      for (const arr of dataArrays) {
        if (Array.isArray(arr)) combined.push(...arr);
      }
      return combined;
    }

    openModal() {
      const modal = document.getElementById('flashcard-modal');
      if (!modal) return;

      if (this.deck.length === 0) {
        this.dealNewDeck();
      } else {
        this.startTimer();
      }

      if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
        window.AK_AUDIO.playPop(520);
      }

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      this.render();
    }

    closeModal() {
      this.stopTimer();
      const modal = document.getElementById('flashcard-modal');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
    }

    startTimer() {
      this.stopTimer();
      this.timerInterval = setInterval(() => {
        this.studySeconds++;
        const timerEl = document.getElementById('study-timer-display');
        if (timerEl) {
          const mins = Math.floor(this.studySeconds / 60);
          const secs = this.studySeconds % 60;
          timerEl.innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
        }
      }, 1000);
    }

    stopTimer() {
      if (this.timerInterval) {
        clearInterval(this.timerInterval);
        this.timerInterval = null;
      }
    }

    dealNewDeck() {
      const all = this.getAllSpecimens();
      if (!all || all.length === 0) return;

      // Shuffle and pick 5 distinct specimens
      const shuffled = [...all].sort(() => 0.5 - Math.random());
      this.deck = shuffled.slice(0, 5);
      this.currentCardIndex = 0;
      this.isFlipped = false;
      this.studySeconds = 0;
      this.phase = 'study';
      this.quizTarget = null;
      this.quizQuestions = [];
      this.currentQuestionIndex = 0;
      this.quizAnswers = [];
      this.score = 0;

      this.startTimer();

      if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
        window.AK_AUDIO.playPop(620);
      }
      this.render();
    }

    flipCard() {
      this.isFlipped = !this.isFlipped;
      if (window.AK_AUDIO && window.AK_AUDIO.playUiClick) {
        window.AK_AUDIO.playUiClick();
      }
      const cardEl = document.getElementById('flashcard-flipper');
      if (cardEl) {
        cardEl.classList.toggle('flipped', this.isFlipped);
      }
    }

    nextCard() {
      if (this.currentCardIndex < this.deck.length - 1) {
        this.currentCardIndex++;
        this.isFlipped = false;
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
          window.AK_AUDIO.playPop(500);
        }
        this.render();
      }
    }

    prevCard() {
      if (this.currentCardIndex > 0) {
        this.currentCardIndex--;
        this.isFlipped = false;
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
          window.AK_AUDIO.playPop(460);
        }
        this.render();
      }
    }

    jumpToCard(idx) {
      if (idx >= 0 && idx < this.deck.length) {
        this.currentCardIndex = idx;
        this.isFlipped = false;
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
          window.AK_AUDIO.playPop(520);
        }
        this.render();
      }
    }

    // -------------------------------------------------------------
    // "I'M READY!" CHALLENGE GENERATOR
    // -------------------------------------------------------------
    startQuizChallenge() {
      this.stopTimer();

      // Pick 1 random creature from the 5 in the deck
      const randomIdx = Math.floor(Math.random() * this.deck.length);
      this.quizTarget = this.deck[randomIdx];

      // Pool distractor specimens from the rest of the deck and global catalog
      const otherDeck = this.deck.filter(x => x.id !== this.quizTarget.id);
      const allOther = this.getAllSpecimens().filter(x => x.id !== this.quizTarget.id);

      // Helper to pick 3 random distractors
      const getDistractors = (extractorFn) => {
        const set = new Set();
        const correctVal = extractorFn(this.quizTarget);
        set.add(correctVal);

        // Try from other deck items first
        for (const item of otherDeck) {
          const val = extractorFn(item);
          if (val && val !== correctVal && !set.has(val)) {
            set.add(val);
          }
          if (set.size >= 4) break;
        }

        // Fill up from all other specimens if needed
        const shuffledAll = [...allOther].sort(() => 0.5 - Math.random());
        for (const item of shuffledAll) {
          if (set.size >= 4) break;
          const val = extractorFn(item);
          if (val && val !== correctVal && !set.has(val)) {
            set.add(val);
          }
        }

        const options = Array.from(set).sort(() => 0.5 - Math.random());
        return {
          correct: correctVal,
          options
        };
      };

      // 1. Question: Habitat
      const habData = getDistractors(item => {
        return window.AK_I18N ? window.AK_I18N.getSpeciesHabitat(item) : item.habitat;
      });

      // 2. Question: Diet
      const dietData = getDistractors(item => {
        return window.AK_I18N ? window.AK_I18N.getSpeciesDiet(item) : item.diet;
      });

      // 3. Question: Characteristic / Superpower
      const traitData = getDistractors(item => {
        if (window.CardKnowledgeEngine && window.CardKnowledgeEngine.getSuperpowers) {
          const p = window.CardKnowledgeEngine.getSuperpowers(item);
          if (p && p.length > 0) {
            // Clean markdown bold tags
            return p[0].replace(/\*\*/g, '').replace(/^[^：:]+[：:]\s*/, '').slice(0, 110) + '...';
          }
        }
        return window.AK_I18N ? window.AK_I18N.getSpeciesFunFact(item) : item.funFact;
      });

      this.quizQuestions = [
        {
          type: 'habitat',
          titleKey: 'q_habitat_title',
          icon: '🌍',
          correct: habData.correct,
          options: habData.options
        },
        {
          type: 'diet',
          titleKey: 'q_diet_title',
          icon: '🍽️',
          correct: dietData.correct,
          options: dietData.options
        },
        {
          type: 'characteristics',
          titleKey: 'q_trait_title',
          icon: '⚡',
          correct: traitData.correct,
          options: traitData.options
        }
      ];

      this.phase = 'quiz';
      this.currentQuestionIndex = 0;
      this.quizAnswers = [];
      this.score = 0;
      this.selectedOption = null;
      this.answered = false;

      if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
        window.AK_AUDIO.playPop(700);
      }
      this.render();
    }

    selectQuizOption(opt) {
      if (this.answered) return;
      this.selectedOption = opt;
      this.answered = true;

      const currQ = this.quizQuestions[this.currentQuestionIndex];
      const isCorrect = (opt === currQ.correct);

      if (isCorrect) {
        this.score++;
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
          window.AK_AUDIO.playPop(880);
        }
      } else {
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
          window.AK_AUDIO.playPop(260);
        }
      }

      this.quizAnswers.push({
        question: currQ,
        selected: opt,
        isCorrect
      });

      this.render();
    }

    nextQuizQuestion() {
      if (this.currentQuestionIndex < this.quizQuestions.length - 1) {
        this.currentQuestionIndex++;
        this.selectedOption = null;
        this.answered = false;
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
          window.AK_AUDIO.playPop(550);
        }
        this.render();
      } else {
        this.finishQuiz();
      }
    }

    finishQuiz() {
      this.phase = 'score';
      if (this.score === 3) {
        if (window.AK_AUDIO && window.AK_AUDIO.playVictory) {
          window.AK_AUDIO.playVictory();
        }
        if (window.AK_GAME && window.AK_GAME.triggerConfetti) {
          window.AK_GAME.triggerConfetti();
        }
      } else {
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
          window.AK_AUDIO.playPop(650);
        }
      }
      this.render();
    }

    // -------------------------------------------------------------
    // LOCALIZED TEXT DICTIONARY
    // -------------------------------------------------------------
    getText(key) {
      const lang = window.AK_I18N ? window.AK_I18N.getLanguage() : 'en';
      const dict = {
        en: {
          app_title: '🎴 Wildlife Flashcard Study & Quiz Challenge',
          app_subtitle: 'Study 5 randomized wildlife flashcards, flip to learn their habitat, diet & powers, then test your memory!',
          badge_study: '📖 STUDY PHASE',
          badge_quiz: '⚡ SPRINT QUIZ',
          badge_score: '🏆 MASTERY SCORECARD',
          study_time: 'Study Time:',
          btn_deal_new: '🔀 Deal New 5 Cards',
          btn_flip_hint: '💡 Click card or button to flip for answers',
          btn_flip_now: '🔄 Flip Card',
          btn_im_ready: "🚀 I'm Ready for the Quiz!",
          card_x_of_y: 'Card {current} of {total}',
          back_habitat: '🌍 Habitat & Ecosystem:',
          back_diet: '🍽️ Diet & Feeding Strategy:',
          back_traits: '⚡ Key Characteristics & Superpowers:',
          back_fact: '💡 Did You Know?',
          q_step: 'Question {step} of 3',
          q_prompt_prefix: 'From the flashcards you just studied...',
          q_habitat_title: 'Where does the {name} live? (Habitat)',
          q_diet_title: 'What does the {name} eat? (Diet)',
          q_trait_title: 'Which characteristic or superpower belongs to the {name}?',
          feedback_correct: '🎉 Brilliant! Spot on memory!',
          feedback_wrong: '❌ Not quite! The correct answer is highlighted in green.',
          btn_next_q: 'Next Question ➡️',
          btn_see_final_score: 'See Final Results 🏆 ➡️',
          score_perfect: '🌟 Master Naturalist! Perfect 3/3 Score!',
          score_good: '👍 Great Memory! 2/3 Correct!',
          score_try: '💪 Good Effort! Practice makes perfect.',
          btn_play_again: '🔀 Study Another 5 Random Creatures',
          btn_review_card: '📖 Open Full Field Guide Card ➡️'
        },
        zh: {
          app_title: '🎴 野生動物記憶翻牌與特訓問答',
          app_subtitle: '隨機抽取 5 張野生動植物特訓卡，翻面記憶棲息地、日常飲食與身體超能力，接著測試您的記憶力！',
          badge_study: '📖 記憶研讀階段',
          badge_quiz: '⚡ 記憶挑戰問答',
          badge_score: '🏆 記憶大師成績單',
          study_time: '研讀時間：',
          btn_deal_new: '🔀 重新抽取 5 張卡片',
          btn_flip_hint: '💡 點擊卡片或按鈕即可翻轉查看背面重點',
          btn_flip_now: '🔄 翻轉卡片',
          btn_im_ready: '🚀 我準備好了，開始特訓問答！',
          card_x_of_y: '第 {current} 張 / 共 {total} 張',
          back_habitat: '🌍 生存環境與棲息生境：',
          back_diet: '🍽️ 日常飲食與採食策略：',
          back_traits: '⚡ 生理特徵與核心超能力：',
          back_fact: '💡 探索小知識：',
          q_step: '第 {step} 題 / 共 3 題',
          q_prompt_prefix: '根據您剛才記憶的 5 張特訓卡...',
          q_habitat_title: '【{name}】生活在以下哪種環境？（棲息地）',
          q_diet_title: '【{name}】主要以什麼為食？（飲食）',
          q_trait_title: '以下哪項生理特徵或超能力屬於【{name}】？',
          feedback_correct: '🎉 太神了！記憶力超群完全正確！',
          feedback_wrong: '❌ 差一點！正確答案已用綠色標註。',
          btn_next_q: '下一題 ➡️',
          btn_see_final_score: '查看成績結算 🏆 ➡️',
          score_perfect: '🌟 大自然記憶大師！滿分 3/3！',
          score_good: '👍 記憶力優秀！答對 2/3 題！',
          score_try: '💪 繼續加油！多翻牌記憶將更純熟。',
          btn_play_again: '🔀 再抽取 5 種隨機生物特訓',
          btn_review_card: '📖 打開完整探索卡牌 ➡️'
        },
        es: {
          app_title: '🎴 Tarjetas de Estudio Safari y Desafío de Memoria',
          app_subtitle: '¡Estudia 5 tarjetas aleatorias de animales o plantas, voltéalas para memorizar hábitat, dieta y rasgos, y ponte a prueba!',
          badge_study: '📖 FASE DE ESTUDIO',
          badge_quiz: '⚡ DESAFÍO DE MEMORIA',
          badge_score: '🏆 TARJETA DE PUNTUACIÓN',
          study_time: 'Tiempo de Estudio:',
          btn_deal_new: '🔀 Repartir 5 Nuevas Tarjetas',
          btn_flip_hint: '💡 Haz clic en la tarjeta o botón para ver el reverso',
          btn_flip_now: '🔄 Voltear Tarjeta',
          btn_im_ready: '🚀 ¡Estoy listo para el Quiz!',
          card_x_of_y: 'Tarjeta {current} de {total}',
          back_habitat: '🌍 Hábitat y Ecosistema:',
          back_diet: '🍽️ Dieta y Alimentación:',
          back_traits: '⚡ Características Clave y Superpoderes:',
          back_fact: '💡 ¿Sabías qué?',
          q_step: 'Pregunta {step} de 3',
          q_prompt_prefix: 'De las tarjetas que acabas de estudiar...',
          q_habitat_title: '¿Dónde habita el {name}? (Hábitat)',
          q_diet_title: '¿De qué se alimenta el {name}? (Dieta)',
          q_trait_title: '¿Qué rasgo o superpoder pertenece al {name}?',
          feedback_correct: '🎉 ¡Excelente! ¡Memoria fotográfica exacta!',
          feedback_wrong: '❌ ¡Casi! La respuesta correcta está en verde.',
          btn_next_q: 'Siguiente Pregunta ➡️',
          btn_see_final_score: 'Ver Resultados Finales 🏆 ➡️',
          score_perfect: '🌟 ¡Maestro Naturalista! Puntuación Perfecta 3/3',
          score_good: '👍 ¡Gran Memoria! 2/3 Correctas',
          score_try: '💪 ¡Buen intento! La práctica hace al maestro.',
          btn_play_again: '🔀 Estudiar Otras 5 Criaturas',
          btn_review_card: '📖 Abrir Ficha Completa ➡️'
        }
      };

      const langDict = dict[lang] || dict.en;
      return langDict[key] || dict.en[key] || key;
    }

    // -------------------------------------------------------------
    // RENDER MAIN CONTAINER
    // -------------------------------------------------------------
    render() {
      const container = document.getElementById('flashcard-modal-content');
      if (!container) return;

      container.innerHTML = `
        <div class="flashcard-container">
          <button class="flashcard-close-btn" onclick="window.AK_FLASHCARDS.closeModal()" title="Close">✕</button>

          <div class="flashcard-header">
            <span class="flashcard-badge">
              ${this.phase === 'study' ? this.getText('badge_study') : (this.phase === 'quiz' ? this.getText('badge_quiz') : this.getText('badge_score'))}
            </span>
            <h2 class="flashcard-title">${this.getText('app_title')}</h2>
            <p class="flashcard-subtitle">${this.getText('app_subtitle')}</p>
          </div>

          <div class="flashcard-stage">
            ${this.phase === 'study' ? this.renderStudyStage() : (this.phase === 'quiz' ? this.renderQuizStage() : this.renderScoreStage())}
          </div>
        </div>
      `;
    }

    // -------------------------------------------------------------
    // RENDER STUDY PHASE (5-CARD FLIP DECK)
    // -------------------------------------------------------------
    renderStudyStage() {
      if (!this.deck || this.deck.length === 0) return '';
      const animal = this.deck[this.currentCardIndex];
      const locName = window.AK_I18N ? window.AK_I18N.getSpeciesName(animal) : animal.name;
      const locCat = window.AK_I18N ? window.AK_I18N.t('zone_' + animal.category) : animal.category;
      const locHab = window.AK_I18N ? window.AK_I18N.getSpeciesHabitat(animal) : animal.habitat;
      const locDiet = window.AK_I18N ? window.AK_I18N.getSpeciesDiet(animal) : animal.diet;
      const locFact = window.AK_I18N ? window.AK_I18N.getSpeciesFunFact(animal) : animal.funFact;
      const locTag = window.AK_I18N ? window.AK_I18N.getSpeciesTagline(animal) : animal.tagline;

      // Extract high-yield characteristics / superpowers
      let traitText = '';
      if (window.CardKnowledgeEngine && window.CardKnowledgeEngine.getSuperpowers) {
        const powers = window.CardKnowledgeEngine.getSuperpowers(animal);
        if (powers && powers.length > 0) {
          traitText = powers[0].replace(/\*\*/g, '').replace(/^[^：:]+[：:]\s*/, '');
        }
      }
      if (!traitText) {
        traitText = window.AK_I18N ? window.AK_I18N.getSpeciesDescription(animal) : animal.description;
      }

      const mins = Math.floor(this.studySeconds / 60);
      const secs = this.studySeconds % 60;
      const timeStr = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;

      return `
        <div class="flashcard-study-box">
          <div class="flashcard-toolbar">
            <div class="study-timer-wrap">
              ⏱️ <span>${this.getText('study_time')}</span>
              <strong id="study-timer-display" class="timer-digits">${timeStr}</strong>
            </div>
            <button class="btn-deck-shuffle" onclick="window.AK_FLASHCARDS.dealNewDeck()">
              ${this.getText('btn_deal_new')}
            </button>
          </div>

          <!-- 3D Flippable Flashcard -->
          <div class="card-scene" onclick="window.AK_FLASHCARDS.flipCard()">
            <div class="card-flipper ${this.isFlipped ? 'flipped' : ''}" id="flashcard-flipper">
              
              <!-- CARD FRONT -->
              <div class="card-face card-front">
                <div class="card-front-thumb-wrap">
                  <img src="${animal.image}" alt="${animal.name}" class="card-front-thumb" onerror="window.app && window.app.handleImageError(this, '${animal.category}', '${animal.emoji}', '${animal.name.replace(/'/g, "\\'")}')">
                  <span class="card-front-badge">${animal.emoji} ${locCat}</span>
                  <button class="card-audio-btn" onclick="event.stopPropagation(); window.app && window.app.playSound('${animal.id}', this)" title="Hear audio vocalization">
                    🔊
                  </button>
                </div>
                <div class="card-front-body">
                  <h3 class="card-front-name">${animal.emoji} ${locName}</h3>
                  <div class="card-front-sci"><em>${animal.scientific}</em></div>
                  <p class="card-front-tagline">"${locTag}"</p>
                  <div class="flip-hint-badge">
                    ${this.getText('btn_flip_hint')} 🔄
                  </div>
                </div>
              </div>

              <!-- CARD BACK (STUDY DOSSIER) -->
              <div class="card-face card-back">
                <div class="card-back-header">
                  <span class="back-title">${animal.emoji} ${locName} — Study Notes</span>
                  <span class="back-category">${locCat}</span>
                </div>
                
                <div class="study-dossier-list">
                  <div class="dossier-item habitat-item">
                    <strong class="dossier-label">${this.getText('back_habitat')}</strong>
                    <p class="dossier-text">${locHab}</p>
                  </div>

                  <div class="dossier-item diet-item">
                    <strong class="dossier-label">${this.getText('back_diet')}</strong>
                    <p class="dossier-text">${locDiet}</p>
                  </div>

                  <div class="dossier-item trait-item">
                    <strong class="dossier-label">${this.getText('back_traits')}</strong>
                    <p class="dossier-text">${traitText}</p>
                  </div>

                  <div class="dossier-item fact-item">
                    <strong class="dossier-label">${this.getText('back_fact')}</strong>
                    <p class="dossier-text">${locFact}</p>
                  </div>
                </div>

                <div class="flip-hint-badge">
                  🔄 ${this.getText('btn_flip_now')}
                </div>
              </div>

            </div>
          </div>

          <!-- Bottom Carousel Controls -->
          <div class="study-nav-bar">
            <button class="btn-card-nav" onclick="window.AK_FLASHCARDS.prevCard()" ${this.currentCardIndex === 0 ? 'disabled' : ''}>
              ⬅️
            </button>

            <div class="study-dots-indicator">
              ${this.deck.map((item, idx) => `
                <button class="dot-btn ${idx === this.currentCardIndex ? 'active' : ''}" onclick="window.AK_FLASHCARDS.jumpToCard(${idx})" title="${item.name}">
                  ${item.emoji}
                </button>
              `).join('')}
            </div>

            <button class="btn-card-nav" onclick="window.AK_FLASHCARDS.nextCard()" ${this.currentCardIndex === this.deck.length - 1 ? 'disabled' : ''}>
              ➡️
            </button>
          </div>

          <div class="study-ready-bar">
            <button class="btn-primary btn-ready-quiz" onclick="window.AK_FLASHCARDS.startQuizChallenge()">
              ${this.getText('btn_im_ready')}
            </button>
          </div>
        </div>
      `;
    }

    // -------------------------------------------------------------
    // RENDER QUIZ PHASE (HABITAT, DIET, CHARACTERISTICS)
    // -------------------------------------------------------------
    renderQuizStage() {
      if (!this.quizTarget || this.quizQuestions.length === 0) return '';
      const q = this.quizQuestions[this.currentQuestionIndex];
      const target = this.quizTarget;
      const targetName = window.AK_I18N ? window.AK_I18N.getSpeciesName(target) : target.name;
      const targetCat = window.AK_I18N ? window.AK_I18N.t('zone_' + target.category) : target.category;

      const qTitle = this.getText(q.titleKey).replace('{name}', targetName);
      const isLastQ = this.currentQuestionIndex === this.quizQuestions.length - 1;

      return `
        <div class="quiz-challenge-box">
          <div class="quiz-status-header">
            <span class="quiz-step-tag">${this.getText('q_step').replace('{step}', this.currentQuestionIndex + 1)}</span>
            <div class="quiz-target-badge">
              <img src="${target.image}" alt="${target.name}" class="target-avatar">
              <span>${target.emoji} ${targetName} (${targetCat})</span>
            </div>
            <span class="quiz-score-badge">⭐ Score: ${this.score} / ${this.currentQuestionIndex + (this.answered ? 1 : 0)}</span>
          </div>

          <div class="quiz-question-card">
            <span class="q-icon-banner">${q.icon}</span>
            <span class="q-prefix">${this.getText('q_prompt_prefix')}</span>
            <h3 class="q-title">${qTitle}</h3>

            <div class="quiz-options-list">
              ${q.options.map(opt => {
                let optClass = 'quiz-opt-btn';
                if (this.answered) {
                  if (opt === q.correct) {
                    optClass += ' correct-answer';
                  } else if (opt === this.selectedOption) {
                    optClass += ' wrong-answer';
                  }
                } else if (this.selectedOption === opt) {
                  optClass += ' selected';
                }

                return `
                  <button class="${optClass}" onclick="window.AK_FLASHCARDS.selectQuizOption('${opt.replace(/'/g, "\\'")}')" ${this.answered ? 'disabled' : ''}>
                    ${opt}
                  </button>
                `;
              }).join('')}
            </div>

            ${this.answered ? `
              <div class="quiz-feedback-box ${this.selectedOption === q.correct ? 'feedback-good' : 'feedback-bad'}">
                <p>${this.selectedOption === q.correct ? this.getText('feedback_correct') : this.getText('feedback_wrong')}</p>
                <button class="btn-primary btn-next-q" onclick="window.AK_FLASHCARDS.nextQuizQuestion()">
                  ${isLastQ ? this.getText('btn_see_final_score') : this.getText('btn_next_q')}
                </button>
              </div>
            ` : ''}
          </div>
        </div>
      `;
    }

    // -------------------------------------------------------------
    // RENDER SCORE & MASTERY STAGE
    // -------------------------------------------------------------
    renderScoreStage() {
      const target = this.quizTarget;
      const targetName = window.AK_I18N ? window.AK_I18N.getSpeciesName(target) : target.name;
      const bannerText = this.score === 3 ? this.getText('score_perfect') : (this.score === 2 ? this.getText('score_good') : this.getText('score_try'));
      const starIcons = this.score === 3 ? '⭐⭐⭐' : (this.score === 2 ? '⭐⭐' : '⭐');

      return `
        <div class="flashcard-score-box">
          <div class="score-trophy-ring">
            <span class="trophy-emoji">${this.score === 3 ? '🏆' : (this.score === 2 ? '🏅' : '🎯')}</span>
            <div class="score-number">${this.score} / 3</div>
          </div>

          <h3 class="score-banner-text">${bannerText}</h3>
          <div class="score-stars">${starIcons}</div>

          <div class="score-target-summary">
            <img src="${target.image}" alt="${target.name}" class="score-target-img">
            <div class="score-target-info">
              <h4>${target.emoji} ${targetName}</h4>
              <p><em>${target.scientific}</em></p>
              <button class="btn-review-card-action" onclick="window.AK_FLASHCARDS.openTargetFieldCard('${target.id}')">
                ${this.getText('btn_review_card')}
              </button>
            </div>
          </div>

          <div class="score-actions-row">
            <button class="btn-primary btn-deck-again" onclick="window.AK_FLASHCARDS.dealNewDeck()">
              ${this.getText('btn_play_again')}
            </button>
          </div>
        </div>
      `;
    }

    openTargetFieldCard(id) {
      this.closeModal();
      if (window.app && window.app.openAnimalDetail) {
        window.app.openAnimalDetail(id);
      }
    }
  }

  window.AK_FLASHCARDS = new FlashcardSprintEngine();

})(typeof window !== 'undefined' ? window : global);
