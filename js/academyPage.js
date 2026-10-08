// ============================================================================
// KHAN ACADEMY-STYLE WILDLIFE ACADEMY ENGINE
// 2-Column Organized Grid, Skill Squares (⬜, 🟥, 🟧, ✅), Quizzes (❔), & Unit Tests (⭐)
// 100% Trilingual: English, 繁體中文, Español
// ============================================================================

(function(window) {
  'use strict';

  class WildlifeAcademyPageController {
    constructor() {
      this.totalMasteryPoints = 7500;
      this.activeUnitId = 'course-1';
      this.currentModalMode = null; // 'skill', 'quiz', 'test', 'capstone'
      this.activeModalData = null;

      // LocalStorage Key for skill levels
      this.storageKey = 'ak_academy_skill_levels';
      this.initStorage();
    }

    initStorage() {
      if (!localStorage.getItem(this.storageKey)) {
        localStorage.setItem(this.storageKey, JSON.stringify({}));
      }
      if (!localStorage.getItem('ak_academy_xp')) {
        localStorage.setItem('ak_academy_xp', '0');
      }
    }

    getSkillLevels() {
      try {
        return JSON.parse(localStorage.getItem(this.storageKey) || '{}');
      } catch (e) {
        return {};
      }
    }

    setSkillLevel(id, status) {
      const data = this.getSkillLevels();
      data[id] = status; // 'unstarted', 'needs_work', 'familiar', 'proficient'
      localStorage.setItem(this.storageKey, JSON.stringify(data));
      this.updateMasteryHeader();
      this.renderUnitsGrid();
    }

    getSkillStatus(id) {
      const data = this.getSkillLevels();
      return data[id] || 'unstarted';
    }

    getLang() {
      return (window.AK_I18N && window.AK_I18N.getLanguage) ? window.AK_I18N.getLanguage() : 'en';
    }

    getText(obj, key) {
      if (!obj) return '';
      const lang = this.getLang();
      if (lang === 'zh' && obj[key + '_zh']) return obj[key + '_zh'];
      if (lang === 'es' && obj[key + '_es']) return obj[key + '_es'];
      return obj[key] || '';
    }

    // Calculate overall course mastery points
    calculateMastery() {
      const levels = this.getSkillLevels();
      let earnedPoints = 0;

      // 46 Skills: 100 pts each max (Proficient: 100, Familiar: 60, Needs Work: 20)
      // 8 Quizzes: 150 pts each max (Proficient: 150, Familiar: 90, Needs Work: 30)
      // 7 Unit Tests: 200 pts each max (Proficient: 200, Familiar: 120, Needs Work: 40)
      // Capstone Exam: 300 pts max (Proficient: 300, Familiar: 180, Needs Work: 60)
      Object.keys(levels).forEach(id => {
        const status = levels[id];
        let maxVal = 100;
        if (id.includes('quiz')) maxVal = 150;
        if (id.includes('test')) maxVal = 200;
        if (id === 'capstone-exam') maxVal = 300;

        if (status === 'proficient') earnedPoints += maxVal;
        else if (status === 'familiar') earnedPoints += Math.round(maxVal * 0.6);
        else if (status === 'needs_work') earnedPoints += Math.round(maxVal * 0.2);
      });

      // Cap at totalMasteryPoints
      earnedPoints = Math.min(earnedPoints, this.totalMasteryPoints);
      const percent = Math.round((earnedPoints / this.totalMasteryPoints) * 100);

      return {
        earned: earnedPoints,
        total: this.totalMasteryPoints,
        percent: percent
      };
    }

    // Find the next unit that needs work or is unstarted
    getUpNextUnitId() {
      const courses = (window.AK_ACADEMY && window.AK_ACADEMY.courses) ? window.AK_ACADEMY.courses : [];
      const levels = this.getSkillLevels();

      for (let c of courses) {
        // Check if any lesson in this course is not proficient
        const hasUnmastered = c.lessons.some(l => levels[l.id] !== 'proficient');
        if (hasUnmastered) return c.id;
      }
      return courses[0] ? courses[0].id : 'course-1';
    }

    // Initialize Page
    init() {
      this.updateHeaderStats();
      this.renderSidebar();
      this.updateMasteryHeader();
      this.renderUnitsGrid();
      this.bindEvents();
    }

    updateHeaderStats() {
      const xp = parseInt(localStorage.getItem('ak_academy_xp') || '0', 10);
      const coins = parseInt(localStorage.getItem('ak_user_coins') || '150', 10);

      const xpEl = document.getElementById('ka-header-xp');
      if (xpEl) xpEl.textContent = `${xp} XP`;

      const coinEl = document.getElementById('ka-header-coins');
      if (coinEl) coinEl.textContent = `${coins}`;

      // Level title
      if (window.AK_ACADEMY && window.AK_ACADEMY.getCurrentLevelObj) {
        const lvlObj = window.AK_ACADEMY.getCurrentLevelObj(xp);
        const lvlEl = document.getElementById('ka-header-level');
        if (lvlEl) lvlEl.textContent = `${lvlObj.badge} Lv.${lvlObj.level}`;
      }
    }

    updateMasteryHeader() {
      const m = this.calculateMastery();
      const pctEl = document.getElementById('ka-mastery-pct');
      if (pctEl) pctEl.textContent = `${m.percent}%`;

      const ptsEl = document.getElementById('ka-mastery-pts');
      if (ptsEl) ptsEl.textContent = `${m.earned.toLocaleString()} / ${m.total.toLocaleString()} mastery points`;

      const fillEl = document.getElementById('ka-mastery-fill');
      if (fillEl) fillEl.style.width = `${m.percent}%`;
    }

    // Render Left Sidebar Units
    renderSidebar() {
      const listEl = document.getElementById('ka-sidebar-units-list');
      if (!listEl) return;

      const courses = (window.AK_ACADEMY && window.AK_ACADEMY.courses) ? window.AK_ACADEMY.courses : [];
      const upNextId = this.getUpNextUnitId();

      let html = '';
      courses.forEach((c) => {
        const isActive = c.id === upNextId;
        const title = this.getText(c, 'title');
        html += `
          <li class="ka-sidebar-item ${isActive ? 'active' : ''}" id="sidebar-item-${c.id}">
            <a href="#unit-card-${c.id}" class="ka-sidebar-link" onclick="window.AK_PAGE.onSelectSidebarUnit('${c.id}')">
              <span class="ka-sidebar-unit-num">Unit ${c.number}</span>
              <span class="ka-sidebar-unit-title">${title}</span>
            </a>
          </li>
        `;
      });

      // Add Capstone item
      html += `
        <li class="ka-sidebar-item" id="sidebar-item-capstone">
          <a href="#unit-card-capstone" class="ka-sidebar-link" onclick="window.AK_PAGE.onSelectSidebarUnit('capstone')">
            <span class="ka-sidebar-unit-num">CAPSTONE</span>
            <span class="ka-sidebar-unit-title">The Ultimate Wildlife Test</span>
          </a>
        </li>
      `;

      listEl.innerHTML = html;
    }

    onSelectSidebarUnit(id) {
      document.querySelectorAll('.ka-sidebar-item').forEach(el => el.classList.remove('active'));
      const activeEl = document.getElementById(`sidebar-item-${id}`);
      if (activeEl) activeEl.classList.add('active');

      const target = document.getElementById(`unit-card-${id}`);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        target.style.transition = 'box-shadow 0.3s ease';
        target.style.boxShadow = '0 0 0 4px rgba(59, 130, 246, 0.4)';
        setTimeout(() => {
          target.style.boxShadow = '';
        }, 1500);
      }
    }

    // Render 2-Column Organized Grid of Units
    renderUnitsGrid() {
      const gridEl = document.getElementById('ka-units-grid');
      if (!gridEl) return;

      const courses = (window.AK_ACADEMY && window.AK_ACADEMY.courses) ? window.AK_ACADEMY.courses : [];
      const upNextId = this.getUpNextUnitId();
      let html = '';

      courses.forEach((c) => {
        const isUpNext = c.id === upNextId;
        const unitTitle = this.getText(c, 'title');

        // Build groups of squares
        const squaresHtml = this.renderUnitSquares(c);

        html += `
          <div class="ka-unit-card ${isUpNext ? 'active-unit' : ''}" id="unit-card-${c.id}">
            <div class="ka-unit-header-row">
              <div class="ka-unit-title-wrap">
                <div class="ka-unit-number-tag">
                  Unit ${c.number}
                  ${isUpNext ? '<span class="ka-badge-up-next">✦ UP NEXT FOR YOU!</span>' : ''}
                </div>
                <h3 class="ka-unit-name">${unitTitle}</h3>
              </div>
              <span class="ka-unit-points-meta">${this.getUnitPointsMeta(c)} pts</span>
            </div>

            <!-- Squares Row -->
            <div class="ka-squares-wrapper">
              ${squaresHtml}
            </div>
          </div>
        `;
      });

      // Add Capstone Unit Card
      html += `
        <div class="ka-unit-card capstone-card" id="unit-card-capstone">
          <div class="ka-unit-header-row">
            <div class="ka-unit-title-wrap">
              <div class="ka-unit-number-tag">
                GRAND CAPSTONE EXAM
              </div>
              <h3 class="ka-unit-name">The Ultimate Wildlife Test</h3>
            </div>
            <span class="ka-unit-points-meta">300 pts</span>
          </div>

          <p style="font-size: 13px; color: #78350f; margin-bottom: 12px;">
            The final trial of all knowledge across 8 discovery zones and prehistoric ancestors! Earn the Grand Master Zoologist Diploma.
          </p>

          <div class="ka-squares-wrapper">
            <div class="ka-cluster-group">
              <div class="ka-sq sq-capstone ${this.getSquareClass('capstone-exam')}"
                   data-tooltip="The Ultimate 25-Question Wildlife Test (Grand Diploma)"
                   onclick="window.AK_PAGE.openCapstoneTest()">
                ⭐
              </div>
            </div>
          </div>
        </div>
      `;

      gridEl.innerHTML = html;
    }

    getUnitPointsMeta(course) {
      const levels = this.getSkillLevels();
      let earned = 0;
      let total = course.lessons.length * 100 + (course.lessons.length >= 10 ? 300 + 200 : 150 + 200);

      course.lessons.forEach(l => {
        const st = levels[l.id];
        if (st === 'proficient') earned += 100;
        else if (st === 'familiar') earned += 60;
        else if (st === 'needs_work') earned += 20;
      });

      return `${earned} / ${total}`;
    }

    // Helper: Map status to CSS classes & user requested square symbols
    // ⬜ unstarted / not practiced
    // 🟥 needs work (<60%)
    // 🟧 familiar (60%-85%)
    // ✅ proficient (100% / mastered)
    getSquareClass(id) {
      const st = this.getSkillStatus(id);
      if (st === 'proficient') return 'sq-proficient';
      if (st === 'familiar') return 'sq-familiar';
      if (st === 'needs_work') return 'sq-needs-work';
      return 'sq-unstarted';
    }

    getSquareContent(id, isQuiz = false, isTest = false) {
      const st = this.getSkillStatus(id);
      if (st === 'proficient') return '✓';
      if (isTest) return '⭐';
      if (isQuiz) return '❔';
      return '';
    }

    // Grouping of squares as requested and shown in screenshot
    // Cluster 1 (3-4 lessons) -> Quiz (❔) -> Cluster 2 -> Unit Test (⭐)
    renderUnitSquares(course) {
      const lessons = course.lessons;
      let html = '';

      if (lessons.length === 10) {
        // Course 1: 10 Lessons
        // Group 1: Lessons 1-3
        html += `<div class="ka-cluster-group">`;
        for (let i = 0; i < 3; i++) {
          html += this.renderSingleSkillSquare(course, lessons[i]);
        }
        html += `</div>`;

        // Quiz 1 (❔)
        const q1Id = `${course.id}-quiz-1`;
        html += `
          <div class="ka-sq sq-quiz ${this.getSquareClass(q1Id)}"
               data-tooltip="Quiz 1: Checkpoint (3 Questions)"
               onclick="window.AK_PAGE.openQuizModal('${course.id}', 1)">
            ${this.getSquareContent(q1Id, true, false)}
          </div>
        `;

        // Group 2: Lessons 4-6
        html += `<div class="ka-cluster-group">`;
        for (let i = 3; i < 6; i++) {
          html += this.renderSingleSkillSquare(course, lessons[i]);
        }
        html += `</div>`;

        // Quiz 2 (❔)
        const q2Id = `${course.id}-quiz-2`;
        html += `
          <div class="ka-sq sq-quiz ${this.getSquareClass(q2Id)}"
               data-tooltip="Quiz 2: Checkpoint (3 Questions)"
               onclick="window.AK_PAGE.openQuizModal('${course.id}', 2)">
            ${this.getSquareContent(q2Id, true, false)}
          </div>
        `;

        // Group 3: Lessons 7-10
        html += `<div class="ka-cluster-group">`;
        for (let i = 6; i < 10; i++) {
          html += this.renderSingleSkillSquare(course, lessons[i]);
        }
        html += `</div>`;

        // Unit Test (⭐)
        const testId = `${course.id}-unit-test`;
        html += `
          <div class="ka-sq sq-test ${this.getSquareClass(testId)}"
               data-tooltip="Unit 1 Test (5 Comprehensive Questions)"
               onclick="window.AK_PAGE.openUnitTestModal('${course.id}')">
            ${this.getSquareContent(testId, false, true)}
          </div>
        `;

      } else {
        // Courses 2-7: 6 Lessons each
        // Group 1: Lessons 1-3
        html += `<div class="ka-cluster-group">`;
        for (let i = 0; i < 3; i++) {
          html += this.renderSingleSkillSquare(course, lessons[i]);
        }
        html += `</div>`;

        // Quiz (❔)
        const qId = `${course.id}-quiz-1`;
        html += `
          <div class="ka-sq sq-quiz ${this.getSquareClass(qId)}"
               data-tooltip="Mid-Unit Checkpoint Quiz (3 Questions)"
               onclick="window.AK_PAGE.openQuizModal('${course.id}', 1)">
            ${this.getSquareContent(qId, true, false)}
          </div>
        `;

        // Group 2: Lessons 4-6
        html += `<div class="ka-cluster-group">`;
        for (let i = 3; i < lessons.length; i++) {
          html += this.renderSingleSkillSquare(course, lessons[i]);
        }
        html += `</div>`;

        // Unit Test (⭐)
        const testId = `${course.id}-unit-test`;
        html += `
          <div class="ka-sq sq-test ${this.getSquareClass(testId)}"
               data-tooltip="Unit ${course.number} Test (5 Comprehensive Questions)"
               onclick="window.AK_PAGE.openUnitTestModal('${course.id}')">
            ${this.getSquareContent(testId, false, true)}
          </div>
        `;
      }

      return html;
    }

    renderSingleSkillSquare(course, lesson) {
      const title = this.getText(lesson, 'title');
      const status = this.getSkillStatus(lesson.id);
      let statusLabel = 'Unstarted ⬜';
      if (status === 'needs_work') statusLabel = 'Needs Work 🟥';
      if (status === 'familiar') statusLabel = 'Familiar 🟧';
      if (status === 'proficient') statusLabel = 'Proficient ✅';

      return `
        <div class="ka-sq ${this.getSquareClass(lesson.id)}"
             data-tooltip="Lesson ${lesson.number}: ${title} (${statusLabel})"
             onclick="window.AK_PAGE.openSkillModal('${course.id}', '${lesson.id}')">
          ${this.getSquareContent(lesson.id, false, false)}
        </div>
      `;
    }

    // ========================================================================
    // MODAL HANDLERS: STUDY SKILL, CHECKPOINT QUIZ (❔), UNIT TEST (⭐)
    // ========================================================================
    openSkillModal(courseId, lessonId) {
      const course = window.AK_ACADEMY.courses.find(c => c.id === courseId);
      if (!course) return;
      const lesson = course.lessons.find(l => l.id === lessonId);
      if (!lesson) return;

      this.currentModalMode = 'skill';
      this.activeModalData = { course, lesson };

      const modal = document.getElementById('ka-modal-backdrop');
      const content = document.getElementById('ka-modal-content');
      if (!modal || !content) return;

      const title = this.getText(lesson, 'title');
      const summary = this.getText(lesson, 'summary');
      const courseTitle = this.getText(course, 'title');
      const curStatus = this.getSkillStatus(lesson.id);

      let statusBadge = '<span style="color: #64748b;">Not Started ⬜</span>';
      if (curStatus === 'needs_work') statusBadge = '<span style="color: #ef4444; font-weight: 700;">Needs Work 🟥</span>';
      if (curStatus === 'familiar') statusBadge = '<span style="color: #f97316; font-weight: 700;">Familiar 🟧</span>';
      if (curStatus === 'proficient') statusBadge = '<span style="color: #10b981; font-weight: 700;">Proficient ✅</span>';

      let sectionsHtml = '';
      if (lesson.sections) {
        lesson.sections.forEach(sec => {
          sectionsHtml += `
            <div class="ka-article-section">
              <h4 class="ka-article-sec-title">${this.getText(sec, 'heading')}</h4>
              <p class="ka-article-sec-body">${this.formatMarkdown(this.getText(sec, 'text'))}</p>
            </div>
          `;
        });
      }

      // Quick Checkpoint Question
      let quizHtml = '';
      if (lesson.quiz) {
        quizHtml = `
          <div class="ka-quiz-box">
            <span class="ka-quiz-badge">Practice Checkpoint</span>
            <div class="ka-quiz-prompt">${this.getText(lesson.quiz, 'question')}</div>
            <div class="ka-quiz-options" id="modal-quiz-options">
              ${lesson.quiz.options.map((opt, idx) => `
                <button class="ka-quiz-btn" onclick="window.AK_PAGE.submitSkillAnswer('${lesson.id}', ${idx})">
                  <strong>${String.fromCharCode(65 + idx)}.</strong> ${this.getText(opt, 'text')}
                </button>
              `).join('')}
            </div>
            <div id="modal-quiz-feedback"></div>
          </div>
        `;
      }

      content.innerHTML = `
        <div class="ka-modal-header">
          <div>
            <span class="ka-modal-tag">Unit ${course.number} • ${courseTitle}</span>
            <h2 class="ka-modal-title">${lesson.number}. ${title}</h2>
          </div>
          <button class="ka-modal-close-btn" onclick="window.AK_PAGE.closeModal()">✕</button>
        </div>

        <div class="ka-modal-body">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px;">
            <span style="font-size: 13px; font-weight: 600; color: #475569;">Current Skill Status: ${statusBadge}</span>
            <span style="font-size: 13px; font-weight: 600; color: #10b981;">+100 Mastery Pts on Mastery</span>
          </div>

          <p class="ka-article-lead">${summary}</p>

          ${lesson.image ? `
            <div class="ka-article-img-wrap">
              <img src="${lesson.image}" class="ka-article-img" alt="${title}" loading="lazy" />
            </div>
          ` : ''}

          ${sectionsHtml}
          ${quizHtml}
        </div>
      `;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    submitSkillAnswer(lessonId, optIdx) {
      const lesson = this.activeModalData.lesson;
      if (!lesson || !lesson.quiz) return;

      const isCorrect = lesson.quiz.options[optIdx] && lesson.quiz.options[optIdx].correct;
      const buttons = document.querySelectorAll('#modal-quiz-options .ka-quiz-btn');
      buttons.forEach((btn, idx) => {
        btn.disabled = true;
        if (lesson.quiz.options[idx].correct) btn.classList.add('opt-correct');
        else if (idx === optIdx) btn.classList.add('opt-wrong');
      });

      const fb = document.getElementById('modal-quiz-feedback');
      if (isCorrect) {
        // Upgrade to Proficient ✅!
        this.setSkillLevel(lessonId, 'proficient');
        this.awardRewards(100, 50);

        if (fb) {
          fb.innerHTML = `
            <div class="ka-quiz-feedback fb-win">
              <strong>🎉 Brilliant! You've mastered this skill!</strong>
              <p style="margin-top: 4px;">Square updated to <strong>Proficient ✅</strong>! +100 Mastery Points & +50 Coins awarded.</p>
            </div>
          `;
        }
        if (window.AK_AUDIO && window.AK_AUDIO.playVictory) window.AK_AUDIO.playVictory();
      } else {
        // Needs Work 🟥
        this.setSkillLevel(lessonId, 'needs_work');
        if (fb) {
          fb.innerHTML = `
            <div class="ka-quiz-feedback fb-lose">
              <strong>Keep practicing!</strong>
              <p style="margin-top: 4px;">Square marked as <strong>Needs Work 🟥</strong>. Review the article above and retry to achieve Proficient ✅!</p>
              <button class="ka-boost-btn" style="margin-top: 10px; background: #ef4444; color: #fff;" onclick="window.AK_PAGE.openSkillModal('${this.activeModalData.course.id}', '${lessonId}')">Retry Question 🔄</button>
            </div>
          `;
        }
        if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(300);
      }
    }

    // ========================================================================
    // CHECKPOINT QUIZ (❔) MODAL (3 Questions)
    // ========================================================================
    openQuizModal(courseId, quizNumber) {
      const course = window.AK_ACADEMY.courses.find(c => c.id === courseId);
      if (!course) return;

      const quizId = `${courseId}-quiz-${quizNumber}`;
      this.currentModalMode = 'quiz';

      // Pick 3 questions from course lessons
      const subset = course.lessons.slice((quizNumber - 1) * 3, (quizNumber - 1) * 3 + 3);
      const questions = subset.map(l => l.quiz).filter(Boolean);

      this.activeModalData = {
        quizId,
        course,
        questions,
        currentIdx: 0,
        score: 0,
        total: questions.length
      };

      this.renderQuizStep();
    }

    renderQuizStep() {
      const modal = document.getElementById('ka-modal-backdrop');
      const content = document.getElementById('ka-modal-content');
      if (!modal || !content) return;

      const data = this.activeModalData;
      if (data.currentIdx >= data.total) {
        this.finishQuiz();
        return;
      }

      const q = data.questions[data.currentIdx];

      content.innerHTML = `
        <div class="ka-modal-header">
          <div>
            <span class="ka-modal-tag">Unit ${data.course.number} • Checkpoint Quiz (❔)</span>
            <h2 class="ka-modal-title">Question ${data.currentIdx + 1} of ${data.total}</h2>
          </div>
          <button class="ka-modal-close-btn" onclick="window.AK_PAGE.closeModal()">✕</button>
        </div>

        <div class="ka-modal-body">
          <div class="ka-quiz-prompt">${this.getText(q, 'question')}</div>
          <div class="ka-quiz-options">
            ${q.options.map((opt, idx) => `
              <button class="ka-quiz-btn" onclick="window.AK_PAGE.submitQuizOption(${idx})">
                <strong>${String.fromCharCode(65 + idx)}.</strong> ${this.getText(opt, 'text')}
              </button>
            `).join('')}
          </div>
        </div>
      `;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    submitQuizOption(idx) {
      const data = this.activeModalData;
      const q = data.questions[data.currentIdx];
      const isCorrect = q.options[idx] && q.options[idx].correct;

      if (isCorrect) data.score++;

      data.currentIdx++;
      this.renderQuizStep();
    }

    finishQuiz() {
      const data = this.activeModalData;
      const content = document.getElementById('ka-modal-content');
      const pct = Math.round((data.score / data.total) * 100);

      let status = 'needs_work'; // 🟥
      let statusHtml = '<span style="color: #ef4444;">Needs Work 🟥</span>';
      if (pct === 100) {
        status = 'proficient'; // ✅
        statusHtml = '<span style="color: #10b981;">Proficient ✅</span>';
      } else if (pct >= 60) {
        status = 'familiar'; // 🟧
        statusHtml = '<span style="color: #f97316;">Familiar 🟧</span>';
      }

      this.setSkillLevel(data.quizId, status);
      this.awardRewards(data.score * 50, data.score * 25);

      content.innerHTML = `
        <div class="ka-modal-header">
          <div>
            <span class="ka-modal-tag">Unit ${data.course.number} • Checkpoint Quiz Results</span>
            <h2 class="ka-modal-title">Quiz Completed!</h2>
          </div>
          <button class="ka-modal-close-btn" onclick="window.AK_PAGE.closeModal()">✕</button>
        </div>

        <div class="ka-modal-body" style="text-align: center; padding: 40px 20px;">
          <div style="font-size: 48px; margin-bottom: 12px;">${pct >= 60 ? '🎯' : '📚'}</div>
          <h3 style="font-size: 24px; font-weight: 800; margin-bottom: 8px;">You scored ${data.score} / ${data.total} (${pct}%)</h3>
          <p style="font-size: 16px; margin-bottom: 20px;">
            Checkpoint Quiz square updated to: <strong>${statusHtml}</strong>
          </p>

          <button class="ka-boost-btn" style="background: var(--ka-purple); color: #fff;" onclick="window.AK_PAGE.closeModal()">
            Return to Dashboard →
          </button>
        </div>
      `;

      if (pct === 100 && window.AK_AUDIO && window.AK_AUDIO.playVictory) window.AK_AUDIO.playVictory();
      else if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(500);
    }

    // ========================================================================
    // UNIT TEST (⭐) MODAL (5 Questions)
    // ========================================================================
    openUnitTestModal(courseId) {
      const course = window.AK_ACADEMY.courses.find(c => c.id === courseId);
      if (!course) return;

      const testId = `${courseId}-unit-test`;
      this.currentModalMode = 'test';

      // Pick 5 questions from course lessons
      const questions = course.lessons.slice(0, 5).map(l => l.quiz).filter(Boolean);

      this.activeModalData = {
        testId,
        course,
        questions,
        currentIdx: 0,
        score: 0,
        total: questions.length
      };

      this.renderUnitTestStep();
    }

    renderUnitTestStep() {
      const modal = document.getElementById('ka-modal-backdrop');
      const content = document.getElementById('ka-modal-content');
      if (!modal || !content) return;

      const data = this.activeModalData;
      if (data.currentIdx >= data.total) {
        this.finishUnitTest();
        return;
      }

      const q = data.questions[data.currentIdx];

      content.innerHTML = `
        <div class="ka-modal-header">
          <div>
            <span class="ka-modal-tag">Unit ${data.course.number} Comprehensive Exam (⭐)</span>
            <h2 class="ka-modal-title">Question ${data.currentIdx + 1} of ${data.total}</h2>
          </div>
          <button class="ka-modal-close-btn" onclick="window.AK_PAGE.closeModal()">✕</button>
        </div>

        <div class="ka-modal-body">
          <div class="ka-quiz-prompt">${this.getText(q, 'question')}</div>
          <div class="ka-quiz-options">
            ${q.options.map((opt, idx) => `
              <button class="ka-quiz-btn" onclick="window.AK_PAGE.submitUnitTestOption(${idx})">
                <strong>${String.fromCharCode(65 + idx)}.</strong> ${this.getText(opt, 'text')}
              </button>
            `).join('')}
          </div>
        </div>
      `;

      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    }

    submitUnitTestOption(idx) {
      const data = this.activeModalData;
      const q = data.questions[data.currentIdx];
      const isCorrect = q.options[idx] && q.options[idx].correct;

      if (isCorrect) data.score++;

      data.currentIdx++;
      this.renderUnitTestStep();
    }

    finishUnitTest() {
      const data = this.activeModalData;
      const content = document.getElementById('ka-modal-content');
      const pct = Math.round((data.score / data.total) * 100);

      let status = 'needs_work'; // 🟥
      let statusHtml = '<span style="color: #ef4444;">Needs Work 🟥</span>';
      if (pct === 100) {
        status = 'proficient'; // ✅
        statusHtml = '<span style="color: #10b981;">Proficient ✅</span>';
      } else if (pct >= 60) {
        status = 'familiar'; // 🟧
        statusHtml = '<span style="color: #f97316;">Familiar 🟧</span>';
      }

      this.setSkillLevel(data.testId, status);
      this.awardRewards(data.score * 80, data.score * 40);

      content.innerHTML = `
        <div class="ka-modal-header">
          <div>
            <span class="ka-modal-tag">Unit ${data.course.number} • Unit Test Results</span>
            <h2 class="ka-modal-title">Unit Test Complete!</h2>
          </div>
          <button class="ka-modal-close-btn" onclick="window.AK_PAGE.closeModal()">✕</button>
        </div>

        <div class="ka-modal-body" style="text-align: center; padding: 40px 20px;">
          <div style="font-size: 54px; margin-bottom: 12px;">${pct >= 60 ? '⭐' : '📖'}</div>
          <h3 style="font-size: 26px; font-weight: 800; margin-bottom: 8px;">You scored ${data.score} / ${data.total} (${pct}%)</h3>
          <p style="font-size: 16px; margin-bottom: 20px;">
            Unit Test ⭐ square updated to: <strong>${statusHtml}</strong>
          </p>

          <button class="ka-boost-btn" style="background: var(--ka-purple); color: #fff;" onclick="window.AK_PAGE.closeModal()">
            Return to Dashboard →
          </button>
        </div>
      `;

      if (pct === 100 && window.AK_AUDIO && window.AK_AUDIO.playVictory) window.AK_AUDIO.playVictory();
      else if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(500);
    }

    // ========================================================================
    // CAPSTONE EXAM LAUNCHER
    // ========================================================================
    openCapstoneTest() {
      if (window.AK_ULTIMATE_TEST && window.AK_ULTIMATE_TEST.openModal) {
        window.AK_ULTIMATE_TEST.openModal();
      }
    }

    // Start Mastery Challenge from purple banner
    startMasteryChallenge() {
      const upNextId = this.getUpNextUnitId();
      const course = window.AK_ACADEMY.courses.find(c => c.id === upNextId);
      if (course) {
        this.openUnitTestModal(course.id);
      }
    }

    awardRewards(xpAmount, coinAmount) {
      // Award XP
      if (window.AK_ACADEMY && window.AK_ACADEMY.addXp) {
        window.AK_ACADEMY.addXp(xpAmount);
      } else {
        const curXp = parseInt(localStorage.getItem('ak_academy_xp') || '0', 10);
        localStorage.setItem('ak_academy_xp', (curXp + xpAmount).toString());
      }

      // Award Coins
      if (window.AK_QUESTS && window.AK_QUESTS.addCoins) {
        window.AK_QUESTS.addCoins(coinAmount);
      } else {
        const curCoins = parseInt(localStorage.getItem('ak_user_coins') || '150', 10);
        localStorage.setItem('ak_user_coins', (curCoins + coinAmount).toString());
      }

      this.updateHeaderStats();
    }

    closeModal() {
      const modal = document.getElementById('ka-modal-backdrop');
      if (modal) modal.classList.add('hidden');
      document.body.style.overflow = 'auto';
      this.currentModalMode = null;
      this.activeModalData = null;
    }

    formatMarkdown(text) {
      if (!text) return '';
      return text
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.*?)\*/g, '<em>$1</em>');
    }

    onSearch(query) {
      const q = (query || '').toLowerCase().trim();
      const cards = document.querySelectorAll('.ka-unit-card');
      if (!q) {
        cards.forEach(c => c.style.display = '');
        return;
      }
      cards.forEach(card => {
        const text = card.textContent.toLowerCase();
        if (text.includes(q)) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    }

    bindEvents() {
      if (typeof window !== 'undefined' && window.addEventListener) {
        window.addEventListener('keydown', (e) => {
          if (e.key === 'Escape') this.closeModal();
        });
      }
    }
  }

  // Instantiate Singleton
  window.AK_PAGE = new WildlifeAcademyPageController();

  // Auto-init once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => window.AK_PAGE.init());
  } else {
    window.AK_PAGE.init();
  }

})(typeof window !== 'undefined' ? window : global);
