// "WHO AM I?" Wild Explorer Safari Quiz Game

let currentTarget = null;
let currentOptions = [];
let score = 0;
let streak = 0;
let answered = false;

function initGame() {
  score = parseInt(localStorage.getItem('ak_quiz_score') || '0', 10);
  streak = 0;
  loadNewQuestion();
}

function loadNewQuestion() {
  answered = false;
  const all = window.AK_AOD.getAllAnimals();
  if (!all || all.length < 4) return;

  // Pick target animal
  const target = all[Math.floor(Math.random() * all.length)];
  currentTarget = target;

  // Pick 3 distractors, preferably from same category to be challenging, or mixed
  const sameCategory = all.filter(a => a.category === target.category && a.id !== target.id);
  const otherCategory = all.filter(a => a.category !== target.category);

  const distractors = [];
  while (distractors.length < 3) {
    let pool = sameCategory.length >= 3 && Math.random() > 0.3 ? sameCategory : otherCategory;
    let cand = pool[Math.floor(Math.random() * pool.length)];
    if (!distractors.some(d => d.id === cand.id) && cand.id !== target.id) {
      distractors.push(cand);
    }
  }

  // Shuffle options
  currentOptions = [target, ...distractors].sort(() => Math.random() - 0.5);

  renderQuizUI();
}

function renderQuizUI() {
  const container = document.getElementById('quiz-content');
  if (!container || !currentTarget) return;

  const scoreLabel = window.AK_I18N ? window.AK_I18N.t('quiz_score_label') : '⭐ Score:';
  const streakLabel = window.AK_I18N ? window.AK_I18N.t('quiz_streak_label') : '🔥 Streak:';
  const skipBtn = window.AK_I18N ? window.AK_I18N.t('quiz_skip_btn') : '⏭️ Skip';
  const cluesBadge = window.AK_I18N ? window.AK_I18N.t('quiz_clues_badge') : '🕵️ MYSTERY CREATURE CLUES';
  const questionTitle = window.AK_I18N ? window.AK_I18N.t('quiz_question_title') : 'Who Am I?';
  const clueLive = window.AK_I18N ? window.AK_I18N.t('quiz_clue_live') : 'Where I live:';
  const clueEat = window.AK_I18N ? window.AK_I18N.t('quiz_clue_eat') : 'What I eat:';
  const cluePred = window.AK_I18N ? window.AK_I18N.t('quiz_clue_pred') : 'My Predators:';
  const revealClueBtn = window.AK_I18N ? window.AK_I18N.t('quiz_reveal_clue') : '💡 Reveal Secret Clue';

  container.innerHTML = `
    <div class="quiz-header">
      <div class="quiz-stats">
        <span class="quiz-stat-pill">${scoreLabel} <strong id="quiz-score-val">${score}</strong></span>
        <span class="quiz-stat-pill">${streakLabel} <strong id="quiz-streak-val">${streak}</strong></span>
      </div>
      <button class="btn-icon-subtle" onclick="loadNewQuestion()" title="Skip / New Question">${skipBtn}</button>
    </div>

    <div class="quiz-clues-card">
      <div class="quiz-badge">${cluesBadge}</div>
      <h3 class="quiz-question-title">${questionTitle}</h3>
      
      <div class="clue-row">
        <span class="clue-icon">🌍</span>
        <div class="clue-text"><strong>${clueLive}</strong> ${currentTarget.habitat}</div>
      </div>

      <div class="clue-row">
        <span class="clue-icon">🍽️</span>
        <div class="clue-text"><strong>${clueEat}</strong> ${currentTarget.diet}</div>
      </div>

      <div class="clue-row">
        <span class="clue-icon">⚠️</span>
        <div class="clue-text"><strong>${cluePred}</strong> ${currentTarget.predators}</div>
      </div>

      <div class="clue-hint-box" id="clue-hint-container">
        <button class="btn-hint" onclick="revealSecretClue()">${revealClueBtn}</button>
      </div>
    </div>

    <div class="quiz-options-grid" id="quiz-options-grid">
      ${currentOptions.map((opt, idx) => {
        const optName = window.AK_I18N ? window.AK_I18N.getSpeciesName(opt) : opt.name;
        return `
          <button class="quiz-opt-btn" onclick="submitAnswer('${opt.id}', this)">
            <span class="opt-num">${['A', 'B', 'C', 'D'][idx]}</span>
            <img class="opt-thumb" src="${window.app ? window.app.formatImageUrl(opt.image, 400) : opt.image}" alt="${opt.name}" onerror="if (window.app) window.app.handleImageError(this, '${opt.category}', '${opt.emoji}', '${opt.name.replace(/'/g, "\\'")}')">
            <span class="opt-name">${opt.emoji} ${optName}</span>
          </button>
        `;
      }).join('')}
    </div>

    <div id="quiz-feedback-box" class="quiz-feedback-box hidden"></div>
  `;
}

function revealSecretClue() {
  const box = document.getElementById('clue-hint-container');
  if (box && currentTarget) {
    const label = window.AK_I18N ? window.AK_I18N.t('quiz_secret_clue_label') : '💡 Fun Secret Clue:';
    box.innerHTML = `<div class="revealed-hint"><strong>${label}</strong> ${currentTarget.funFact}</div>`;
    window.AK_AUDIO.playPop(520);
  }
}

function submitAnswer(chosenId, btnEl) {
  if (answered) return;
  answered = true;

  const isCorrect = chosenId === currentTarget.id;
  const feedbackBox = document.getElementById('quiz-feedback-box');
  const allBtns = document.querySelectorAll('.quiz-opt-btn');

  allBtns.forEach(btn => {
    btn.disabled = true;
  });

  const locTargetName = window.AK_I18N ? window.AK_I18N.getSpeciesName(currentTarget) : currentTarget.name;
  const btnReadStory = window.AK_I18N ? window.AK_I18N.t('quiz_btn_read_story') : '📖 Read Full Story';
  const btnLearnAbout = window.AK_I18N ? window.AK_I18N.t('quiz_btn_learn_about') : '📖 Learn About It';
  const btnNext = window.AK_I18N ? window.AK_I18N.t('quiz_btn_next') : 'Next Mystery Creature ➡️';
  const btnTryAnother = window.AK_I18N ? window.AK_I18N.t('quiz_btn_try_another') : 'Try Another ➡️';

  if (isCorrect) {
    btnEl.classList.add('correct');
    score += 100 + (streak * 20);
    streak += 1;
    localStorage.setItem('ak_quiz_score', score.toString());
    window.AK_AUDIO.playSuccess();
    triggerConfetti();

    const title = window.AK_I18N ? window.AK_I18N.t('quiz_correct_title') : '🎉 HOORAY! YOU GOT IT RIGHT!';
    const text = window.AK_I18N ? window.AK_I18N.t('quiz_correct_text', { name: locTargetName, sci: currentTarget.scientific, tagline: currentTarget.tagline }) : `I am the <strong>${locTargetName}</strong> (${currentTarget.scientific})! ${currentTarget.tagline}`;

    feedbackBox.className = 'quiz-feedback-box success-feedback';
    feedbackBox.innerHTML = `
      <div class="feedback-title">${title}</div>
      <p>${text}</p>
      <div class="feedback-actions">
        <button class="btn-primary" onclick="window.app.openAnimalDetail('${currentTarget.id}')">${btnReadStory}</button>
        <button class="btn-success" onclick="loadNewQuestion()">${btnNext}</button>
      </div>
    `;
  } else {
    btnEl.classList.add('wrong');
    streak = 0;
    window.AK_AUDIO.playWrong();

    // Highlight the correct one
    allBtns.forEach(b => {
      if (b.innerText.includes(currentTarget.name) || b.innerText.includes(locTargetName)) {
        b.classList.add('correct');
      }
    });

    const title = window.AK_I18N ? window.AK_I18N.t('quiz_wrong_title') : '🐾 Nice Try!';
    const text = window.AK_I18N ? window.AK_I18N.t('quiz_wrong_text', { name: locTargetName, sci: currentTarget.scientific }) : `The mystery creature was the <strong>${locTargetName}</strong> (${currentTarget.scientific})!`;

    feedbackBox.className = 'quiz-feedback-box wrong-feedback';
    feedbackBox.innerHTML = `
      <div class="feedback-title">${title}</div>
      <p>${text}</p>
      <div class="feedback-actions">
        <button class="btn-primary" onclick="window.app.openAnimalDetail('${currentTarget.id}')">${btnLearnAbout}</button>
        <button class="btn-secondary" onclick="loadNewQuestion()">${btnTryAnother}</button>
      </div>
    `;
  }

  // Update header scores
  const scoreVal = document.getElementById('quiz-score-val');
  const streakVal = document.getElementById('quiz-streak-val');
  if (scoreVal) scoreVal.innerText = score;
  if (streakVal) streakVal.innerText = streak;
}

// Confetti Particle Effect
function triggerConfetti() {
  const container = document.getElementById('confetti-layer');
  if (!container) return;

  container.innerHTML = '';
  const colors = ['#f59e0b', '#10b981', '#3b82f6', '#ec4899', '#8b5cf6', '#14b8a6'];

  for (let i = 0; i < 40; i++) {
    const conf = document.createElement('div');
    conf.className = 'confetti-piece';
    conf.style.left = Math.random() * 100 + '%';
    conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    conf.style.animationDelay = (Math.random() * 0.5) + 's';
    conf.style.transform = `scale(${Math.random() * 0.8 + 0.6}) rotate(${Math.random() * 360}deg)`;
    container.appendChild(conf);
  }

  setTimeout(() => {
    container.innerHTML = '';
  }, 2500);
}

window.AK_GAME = {
  initGame,
  loadNewQuestion,
  revealSecretClue,
  submitAnswer
};
