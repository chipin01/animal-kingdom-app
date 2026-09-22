// Main Application Controller for THE ANIMAL KINGDOM app

// Curated Realistic Wildlife Habitat Wallpapers
const REALISTIC_BACKGROUNDS = [
  {
    id: 'default',
    title: 'Adaptive Theme Biome',
    subtitle: 'Switches dynamically between Serengeti Twilight (Dark) & Tropical Rainforest (Light).',
    category: 'Dynamic',
    badge: 'DEFAULT',
    thumb: 'images/wildlife_background.jpg',
    urlDark: 'images/wildlife_background.jpg',
    urlLight: 'images/tropical_forest_light_bg.jpg',
    isDefault: true
  },
  {
    id: 'savanna_sunset',
    title: 'Serengeti Twilight Savanna',
    subtitle: 'Golden hour acacia horizon with majestic roaming wildlife under an amber sunset.',
    category: 'Savanna',
    badge: '4K REALISTIC',
    thumb: 'images/backgrounds/savanna_sunset.jpg',
    url: 'images/backgrounds/savanna_sunset.jpg'
  },
  {
    id: 'misty_rainforest',
    title: 'Deep Amazonian Mist',
    subtitle: 'Towering rainforest canopy, lush jungle palms, and cascading waterfalls in morning fog.',
    category: 'Rainforest',
    badge: '4K REALISTIC',
    thumb: 'images/backgrounds/misty_rainforest.jpg',
    url: 'images/backgrounds/misty_rainforest.jpg'
  },
  {
    id: 'alpine_lake',
    title: 'Alpine Glacial Sanctuary',
    subtitle: 'Pristine turquoise mountain lake reflecting rugged snow peaks and fragrant pine wilderness.',
    category: 'Alpine',
    badge: '4K REALISTIC',
    thumb: 'images/backgrounds/alpine_lake.jpg',
    url: 'images/backgrounds/alpine_lake.jpg'
  },
  {
    id: 'coral_reef',
    title: 'Great Barrier Reef Azure',
    subtitle: 'Sun-dappled turquoise ocean waters, sea turtles, rays, and vibrant living coral reefs.',
    category: 'Marine',
    badge: '4K REALISTIC',
    thumb: 'images/backgrounds/coral_reef.jpg',
    url: 'images/backgrounds/coral_reef.jpg'
  },
  {
    id: 'arctic_aurora',
    title: 'Arctic Polar Aurora',
    subtitle: 'Ethereal emerald northern lights dancing over frozen fjords and snow-dusted tundra.',
    category: 'Polar',
    badge: '4K REALISTIC',
    thumb: 'images/backgrounds/arctic_aurora.jpg',
    url: 'images/backgrounds/arctic_aurora.jpg'
  },
  {
    id: 'classic_safari',
    title: 'Serengeti Safari Classic',
    subtitle: 'Traditional wide-angle view of the African savanna wildlife under dramatic skies.',
    category: 'Classic',
    badge: 'SAVANNA',
    thumb: 'images/wildlife_background.jpg',
    url: 'images/wildlife_background.jpg'
  },
  {
    id: 'classic_jungle',
    title: 'Tropical Rainforest Classic',
    subtitle: 'Vibrant sunlit canopy with emerald foliage and exotic rainforest palms.',
    category: 'Classic',
    badge: 'JUNGLE',
    thumb: 'images/tropical_forest_light_bg.jpg',
    url: 'images/tropical_forest_light_bg.jpg'
  }
];

class AnimalKingdomApp {
  constructor() {
    this.currentCategory = 'amphibians';
    this.activeFilter = 'all';
    this.searchQuery = '';
    this.currentAnimalId = null;
    this.isGlobalSearch = false;
    this.favorites = new Set(JSON.parse(localStorage.getItem('ak_favorites') || '[]'));
    this.theme = localStorage.getItem('ak_theme_mode') || 'dark';
    this.currentBg = localStorage.getItem('ak_selected_bg') || 'default';
    this.customBgUrl = localStorage.getItem('ak_custom_bg_url') || '';
    localStorage.removeItem('ak_nano_banana_bg_v1');
    localStorage.removeItem('ak_custom_settings_v1');
    localStorage.removeItem('ak_custom_settings_v2');
    this.categoryMeta = {
      amphibians: {
        title: 'Amphibians',
        emoji: '🐸',
        heroImg: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Red-eyed_Tree_Frog_%28Agalychnis_callidryas%29_1.png/500px-Red-eyed_Tree_Frog_%28Agalychnis_callidryas%29_1.png&w=800&output=jpg',
        subtitle: 'Frogs, Salamanders, Newts & Caecilians that live between water and land!',
        color: '#10b981'
      },
      insects: {
        title: 'Insects & Bugs',
        emoji: '🦋',
        heroImg: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg/500px-Monarch_Butterfly_Danaus_plexippus_Male_2664px.jpg&w=800&output=jpg',
        subtitle: 'Butterflies, Beetles, Ants & Mantises with superpowers of armor and flight!',
        color: '#f59e0b'
      },
      marine: {
        title: 'Marine Life',
        emoji: '🐋',
        heroImg: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Killerwhales_jumping.jpg/500px-Killerwhales_jumping.jpg&w=800&output=jpg',
        subtitle: 'Whales, Sharks, Octopuses & Coral Reef Marvels of the deep blue ocean!',
        color: '#0ea5e9'
      },
      land: {
        title: 'Land Animals',
        emoji: '🦁',
        heroImg: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg/500px-020_The_lion_king_Snyggve_in_the_Serengeti_National_Park_Photo_by_Giles_Laurent.jpg&w=800&output=jpg',
        subtitle: 'Lions, Elephants, Primates & Reptiles roaming forests, savannas and mountains!',
        color: '#f97316'
      },
      birds: {
        title: 'Birds',
        emoji: '🐦',
        heroImg: 'https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F5%2F56%2FAegithalos_caudatus_front-on_2.jpg&w=800&output=jpg',
        subtitle: 'Songbirds, Parrots, Owls, Hummingbirds, Penguins & Avian wonders of the world!',
        color: '#8b5cf6'
      },
      plants: {
        title: 'Flowers & Plants',
        emoji: '🌸',
        heroImg: 'https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F2%2F21%2FHibiscus_Brilliant.jpg%2F960px-Hibiscus_Brilliant.jpg&w=800&output=jpg',
        subtitle: 'Radiant Hibiscus, Roses, Morning Glories, Marigolds, Lavender & aromatic garden blossoms!',
        color: '#16a34a'
      },
      gemstones: {
        title: 'Gemstones & Minerals',
        emoji: '💎',
        heroImg: 'https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2Fd%2Fd7%2FClassic_brilliant_cut_diamond.jpg%2F800px-Classic_brilliant_cut_diamond.jpg&w=800&output=jpg',
        subtitle: 'Diamonds, Rubies, Sapphires, Emeralds, Opals, Amethysts & crystalline wonders of Earth!',
        color: '#a855f7'
      },
      reptiles: {
        title: 'Reptiles',
        emoji: '🦎',
        heroImg: 'https://images.weserv.nl/?url=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F4%2F4d%2FChamaeleo_calyptratus_20070408_01.jpg%2F800px-Chamaeleo_calyptratus_20070408_01.jpg&w=800&output=jpg',
        subtitle: 'Lizards, Snakes, Geckos, Chameleons, Iguanas, Turtles & ancient armored reptiles!',
        color: '#14b8a6'
      }
    };
  }

  formatImageUrl(url, width = 600) {
    if (!url) return 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=600&q=80';
    let target = url;
    // Safely unwrap if already routed through Weserv
    if (target.includes('images.weserv.nl')) {
      try {
        const parsed = new URL(target);
        const inner = parsed.searchParams.get('url');
        if (inner) {
          target = decodeURIComponent(inner);
        }
      } catch (e) {}
    }
    if (target.includes('upload.wikimedia.org')) {
      let cleanUrl = target.split('?')[0];
      return `https://images.weserv.nl/?url=${encodeURIComponent(cleanUrl)}&w=${width}&output=jpg`;
    }
    return target;
  }

  formatMarkdownParagraph(text) {
    if (!text) return '';
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
  }

  handleImageError(imgEl, category, emoji, name) {
    // If the image failed through Weserv proxy, attempt direct Wikimedia resolution first
    if (imgEl.src.includes('images.weserv.nl') && !imgEl.dataset.triedDirect) {
      imgEl.dataset.triedDirect = 'true';
      try {
        const parsed = new URL(imgEl.src);
        const rawUrl = parsed.searchParams.get('url');
        if (rawUrl) {
          imgEl.src = decodeURIComponent(rawUrl);
          return;
        }
      } catch (e) {}
    }

    imgEl.onerror = null;
    const safeEmoji = encodeURIComponent(emoji || (category === 'birds' ? '🐦' : '🐾'));
    const safeName = encodeURIComponent(name || 'Wildlife Specimen');
    imgEl.src = `data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="500" height="360" viewBox="0 0 500 360"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="%23132e1e"/><stop offset="100%" stop-color="%2306140c"/></linearGradient></defs><rect width="500" height="360" fill="url(%23g)"/><text x="50%" y="42%" dominant-baseline="middle" text-anchor="middle" font-size="80">${safeEmoji}</text><text x="50%" y="72%" dominant-baseline="middle" text-anchor="middle" fill="%236ee7b7" font-family="system-ui,sans-serif" font-size="22" font-weight="bold">${safeName}</text><text x="50%" y="84%" dominant-baseline="middle" text-anchor="middle" fill="%239ca3af" font-family="system-ui,sans-serif" font-size="14">${category ? category.toUpperCase() : 'WILD DISCOVERY'}</text></svg>`;
  }

  truncateText(text, maxLen = 30) {
    if (!text) return '';
    return text.length > maxLen ? text.substring(0, maxLen - 1) + '…' : text;
  }

  init() {
    this.currentView = 'home';
    this.initI18n();
    this.applyTheme();
    this.initBackgroundSetting();
    this.showHomeView(false);
    this.renderPopularSearchTags();
    this.renderAnimalOfTheDay();
    this.setupEventListeners();
    this.setupGlobalSearch();
    this.updateFavoritesCount();
    window.AK_GAME.initGame();
  }

  initI18n() {
    if (window.AK_I18N) {
      window.AK_I18N.updateSwitcherButtons();
      window.AK_I18N.applyToDom();
    }
  }

  setLanguage(lang) {
    if (!window.AK_I18N) return;
    if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
      window.AK_AUDIO.playPop(520);
    }
    window.AK_I18N.setLanguage(lang);
    const langNames = { en: 'English', zh: '繁體中文 (Traditional Chinese)', es: 'Español' };
    const label = langNames[lang] || lang;
    const toastMsg = window.AK_I18N.t('toast_lang_switched') || `🌐 Language switched to: ${label}`;
    this.showToast(toastMsg);
  }

  onLanguageChange(lang) {
    if (window.AK_I18N) {
      window.AK_I18N.applyToDom();
    }

    this.renderPopularSearchTags();

    // Re-render current active view
    if (this.currentView === 'home') {
      this.renderAnimalOfTheDay();
    } else if (this.currentView === 'category') {
      this.renderCategoryZone();
    }

    // If detail modal is open, re-render modal with translated texts
    if (this.currentAnimalId) {
      const modal = document.getElementById('animal-modal');
      if (modal && !modal.classList.contains('hidden')) {
        this.openAnimalDetail(this.currentAnimalId);
      }
    }

    // If quiz modal is open, re-render quiz UI
    const quizModal = document.getElementById('quiz-modal');
    if (quizModal && !quizModal.classList.contains('hidden') && window.AK_GAME && window.AK_GAME.renderQuizUI) {
      window.AK_GAME.renderQuizUI();
    }

    // If battle arena is open, re-render stage & presets
    const battleModal = document.getElementById('battle-modal');
    if (battleModal && !battleModal.classList.contains('hidden')) {
      this.renderBattlePresets();
      this.renderBattleStage();
    }

    // If favorites modal is open, re-render favorites list
    const favModal = document.getElementById('fav-modal');
    if (favModal && !favModal.classList.contains('hidden')) {
      this.openFavoritesModal();
    }

    // If background modal is open, re-render background cards
    const bgModal = document.getElementById('bg-modal');
    if (bgModal && !bgModal.classList.contains('hidden')) {
      this.renderBackgroundGrid();
    }

    // If time machine is open, re-render stage
    const tmModal = document.getElementById('time-machine-modal');
    if (tmModal && !tmModal.classList.contains('hidden') && window.AK_TIME_MACHINE && window.AK_TIME_MACHINE.updateStage) {
      window.AK_TIME_MACHINE.updateStage();
    }

    // If anatomy scanner is open, re-render
    const anatomyModal = document.getElementById('anatomy-modal');
    if (anatomyModal && !anatomyModal.classList.contains('hidden') && window.AK_ANATOMY && window.AK_ANATOMY.renderAnatomyUI) {
      window.AK_ANATOMY.renderAnatomyUI();
    }

    // If migration modal is open, re-render
    const migrationModal = document.getElementById('migration-modal');
    if (migrationModal && !migrationModal.classList.contains('hidden') && window.AK_MIGRATION && window.AK_MIGRATION.renderDetails) {
      window.AK_MIGRATION.renderDetails();
    }

    // If weather simulator modal is open, re-render
    const weatherModal = document.getElementById('weather-modal');
    if (weatherModal && !weatherModal.classList.contains('hidden') && window.AK_WEATHER && window.AK_WEATHER.renderCurrentSpecimen) {
      window.AK_WEATHER.renderCurrentSpecimen();
    }

    // If identifier modal is open, re-render
    const idModal = document.getElementById('identifier-modal');
    if (idModal && !idModal.classList.contains('hidden') && window.AK_IDENTIFIER && window.AK_IDENTIFIER.render) {
      window.AK_IDENTIFIER.render();
    }

    // If flashcard sprint modal is open, re-render
    const fcModal = document.getElementById('flashcard-modal');
    if (fcModal && !fcModal.classList.contains('hidden') && window.AK_FLASHCARDS && window.AK_FLASHCARDS.render) {
      window.AK_FLASHCARDS.render();
    }

    // If quest, shop, or gauntlet modal is open, re-render & update coins
    if (window.AK_QUESTS) {
      window.AK_QUESTS.updateHeaderCoinDisplay();
      const qModal = document.getElementById('quest-modal');
      if (qModal && !qModal.classList.contains('hidden')) {
        window.AK_QUESTS.renderQuestLibrary();
      }
      const sModal = document.getElementById('card-shop-modal');
      if (sModal && !sModal.classList.contains('hidden')) {
        window.AK_QUESTS.renderShop();
      }
      const gModal = document.getElementById('gauntlet-modal');
      if (gModal && !gModal.classList.contains('hidden')) {
        window.AK_QUESTS.renderGauntlet();
      }
    }
  }

  toggleTheme() {
    this.theme = this.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('ak_theme_mode', this.theme);
    this.applyTheme();
    if (window.AK_AUDIO && window.AK_AUDIO.playUiClick) {
      window.AK_AUDIO.playUiClick();
    }
  }

  applyTheme() {
    const btn = document.getElementById('theme-toggle-btn');
    if (this.theme === 'light') {
      document.body.classList.add('light-mode');
      document.body.classList.remove('dark-mode');
      if (btn) {
        btn.innerText = '🌙';
        btn.title = 'Switch to Dark Mode (Twilight Savanna)';
      }
    } else {
      document.body.classList.remove('light-mode');
      document.body.classList.add('dark-mode');
      if (btn) {
        btn.innerText = '☀️';
        btn.title = 'Switch to Light Mode (Sunny Tropical Forest)';
      }
    }
    this.applyCurrentBackground();
  }

  /* =========================================================
     REALISTIC HABITAT BACKGROUND WALLPAPERS SETTINGS
     ========================================================= */
  initBackgroundSetting() {
    this.currentBg = localStorage.getItem('ak_selected_bg') || 'default';
    this.customBgUrl = localStorage.getItem('ak_custom_bg_url') || '';
    this.applyCurrentBackground();
  }

  applyCurrentBackground() {
    const isLight = document.body.classList.contains('light-mode');
    
    let bgUrl = '';
    if (this.currentBg === 'custom' && this.customBgUrl) {
      bgUrl = this.customBgUrl;
    } else {
      const found = REALISTIC_BACKGROUNDS.find(b => b.id === this.currentBg);
      if (found && !found.isDefault) {
        bgUrl = found.url || found.thumb;
      } else {
        bgUrl = isLight ? 'images/tropical_forest_light_bg.jpg' : 'images/wildlife_background.jpg';
      }
    }

    // Balanced vibrant overlay: keeps text readable while letting the landscape photograph pop with rich color & clarity!
    const overlay = isLight
      ? 'linear-gradient(rgba(255, 255, 255, 0.20), rgba(240, 253, 244, 0.28))'
      : 'linear-gradient(rgba(8, 12, 22, 0.28), rgba(8, 12, 22, 0.42))';

    document.body.style.backgroundImage = `${overlay}, url('${bgUrl}')`;
    document.body.style.backgroundPosition = 'center center';
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundAttachment = 'fixed';
  }

  showToast(msg) {
    let toast = document.getElementById('ak-global-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'ak-global-toast';
      toast.className = 'ak-global-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('visible');
    if (this._toastTimer) clearTimeout(this._toastTimer);
    this._toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, 3200);
  }

  openBackgroundModal() {
    const modal = document.getElementById('bg-modal');
    if (!modal) return;
    this.renderBackgroundGrid();
    const customInput = document.getElementById('bg-custom-url-input');
    if (customInput && this.customBgUrl && !this.customBgUrl.startsWith('data:')) {
      customInput.value = this.customBgUrl;
    }
    modal.classList.remove('hidden');
    if (window.AK_AUDIO && window.AK_AUDIO.playUiClick) {
      window.AK_AUDIO.playUiClick();
    }
  }

  closeBackgroundModal() {
    const modal = document.getElementById('bg-modal');
    if (modal) modal.classList.add('hidden');
  }

  renderBackgroundGrid() {
    const container = document.getElementById('bg-cards-grid');
    if (!container) return;

    let customCardHtml = '';
    if (this.customBgUrl) {
      const isCustomActive = this.currentBg === 'custom';
      customCardHtml = `
        <div class="bg-card-item ${isCustomActive ? 'active' : ''}" style="border-color: #3b82f6;" onclick="window.app.selectBackground('custom', false)">
          <div class="bg-card-thumb-wrap">
            <img src="${this.customBgUrl}" alt="Custom Uploaded Wallpaper" loading="lazy" />
            <span class="bg-card-biome-tag" style="background: #2563eb; color: #fff;">📸 MY PHOTO</span>
            ${isCustomActive ? '<span class="bg-card-active-indicator">✓ ACTIVE</span>' : ''}
          </div>
          <div class="bg-card-body">
            <h4 class="bg-card-title">My Uploaded Wallpaper</h4>
            <p class="bg-card-desc">Your personal custom nature photo wallpaper.</p>
            <div class="bg-card-footer">
              <span class="bg-card-status-label">${isCustomActive ? '● Currently Active' : 'Custom'}</span>
              <div style="display: flex; gap: 6px;">
                <button class="bg-card-select-btn" type="button" onclick="event.stopPropagation(); window.app.selectBackground('custom', true)">
                  ${isCustomActive ? 'Active' : 'Choose'}
                </button>
                <button class="bg-card-select-btn" style="background: rgba(239, 68, 68, 0.2); color: #f87171; border-color: rgba(239, 68, 68, 0.4);" type="button" onclick="event.stopPropagation(); window.app.removeCustomBackground()" title="Delete custom wallpaper">
                  ✕
                </button>
              </div>
            </div>
          </div>
        </div>
      `;
    }

    container.innerHTML = customCardHtml + REALISTIC_BACKGROUNDS.map(bg => {
      const isActive = this.currentBg === bg.id;
      return `
        <div class="bg-card-item ${isActive ? 'active' : ''}" onclick="window.app.selectBackground('${bg.id}', false)">
          <div class="bg-card-thumb-wrap">
            <img src="${bg.thumb}" alt="${bg.title}" loading="lazy" />
            <span class="bg-card-biome-tag">${bg.category.toUpperCase()}</span>
            ${isActive ? '<span class="bg-card-active-indicator">✓ ACTIVE</span>' : ''}
          </div>
          <div class="bg-card-body">
            <h4 class="bg-card-title">${bg.title}</h4>
            <p class="bg-card-desc">${bg.subtitle}</p>
            <div class="bg-card-footer">
              <span class="bg-card-status-label">${isActive ? '● Currently Active' : bg.badge}</span>
              <button class="bg-card-select-btn" type="button" onclick="event.stopPropagation(); window.app.selectBackground('${bg.id}', true)">${isActive ? 'Active' : 'Choose Habitat'}</button>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  selectBackground(id, closeOnSelect = false) {
    this.currentBg = id;
    localStorage.setItem('ak_selected_bg', id);
    this.applyCurrentBackground();
    this.renderBackgroundGrid();
    if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
      window.AK_AUDIO.playPop(440);
    }

    let title = 'Wallpaper';
    if (id === 'custom') {
      title = 'Your Uploaded Photo';
    } else {
      const found = REALISTIC_BACKGROUNDS.find(b => b.id === id);
      if (found) title = found.title;
    }
    this.showToast(`🏞️ Wallpaper set to: ${title}!`);

    if (closeOnSelect) {
      setTimeout(() => this.closeBackgroundModal(), 320);
    }
  }

  triggerLocalFileUpload() {
    const input = document.getElementById('bg-file-upload-input');
    if (input) input.click();
  }

  handleLocalFileUpload(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    if (!file.type.startsWith('image/')) {
      alert('Please select a valid image file (.jpg, .png, .webp).');
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const rawDataUrl = e.target.result;
      
      // Compress/resize via canvas to 1920x1080 max for instant performance and storage fit
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const maxW = 1920;
        const maxH = 1080;
        let w = img.width;
        let h = img.height;
        if (w > maxW || h > maxH) {
          const ratio = Math.min(maxW / w, maxH / h);
          w = Math.round(w * ratio);
          h = Math.round(h * ratio);
        }
        canvas.width = w;
        canvas.height = h;
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, w, h);
        
        const optimizedDataUrl = canvas.toDataURL('image/jpeg', 0.85);
        
        try {
          localStorage.setItem('ak_custom_bg_url', optimizedDataUrl);
          this.customBgUrl = optimizedDataUrl;
          this.currentBg = 'custom';
          localStorage.setItem('ak_selected_bg', 'custom');
          this.applyCurrentBackground();
          this.renderBackgroundGrid();
          this.showToast('🎉 Your uploaded photo is now your background!');
          setTimeout(() => this.closeBackgroundModal(), 400);
          if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(650);
        } catch (err) {
          console.warn('Storage quota exceeded, applying in memory', err);
          this.customBgUrl = optimizedDataUrl;
          this.currentBg = 'custom';
          this.applyCurrentBackground();
          this.renderBackgroundGrid();
          this.showToast('🎉 Photo applied as background!');
          setTimeout(() => this.closeBackgroundModal(), 400);
        }
      };
      img.src = rawDataUrl;
    };
    reader.readAsDataURL(file);
    event.target.value = '';
  }

  removeCustomBackground() {
    this.customBgUrl = '';
    localStorage.removeItem('ak_custom_bg_url');
    if (this.currentBg === 'custom') {
      this.currentBg = 'default';
      localStorage.setItem('ak_selected_bg', 'default');
    }
    this.applyCurrentBackground();
    this.renderBackgroundGrid();
    this.showToast('Custom wallpaper removed.');
    if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(350);
  }

  applyCustomBackgroundUrl() {
    const input = document.getElementById('bg-custom-url-input');
    if (!input) return;
    const url = input.value.trim();
    if (!url) {
      alert('Please enter a valid image URL (e.g., https://...jpg)');
      return;
    }
    if (!url.startsWith('http://') && !url.startsWith('https://') && !url.startsWith('data:image/')) {
      alert('Image URL must start with http:// or https://');
      return;
    }
    this.customBgUrl = url;
    this.currentBg = 'custom';
    localStorage.setItem('ak_selected_bg', 'custom');
    localStorage.setItem('ak_custom_bg_url', url);
    this.applyCurrentBackground();
    this.renderBackgroundGrid();
    this.showToast('🌐 Web image applied as background!');
    setTimeout(() => this.closeBackgroundModal(), 400);
    if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
      window.AK_AUDIO.playPop(520);
    }
  }

  resetDefaultBackground() {
    this.currentBg = 'default';
    this.customBgUrl = '';
    localStorage.setItem('ak_selected_bg', 'default');
    localStorage.removeItem('ak_custom_bg_url');
    const input = document.getElementById('bg-custom-url-input');
    if (input) input.value = '';
    this.applyCurrentBackground();
    this.renderBackgroundGrid();
    this.showToast('🔄 Reset to default theme background.');
    setTimeout(() => this.closeBackgroundModal(), 350);
    if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
      window.AK_AUDIO.playPop(350);
    }
  }


  showHomeView(scroll = true) {
    this.currentView = 'home';
    this.isGlobalSearch = false;
    const homeView = document.getElementById('home-view');
    const catView = document.getElementById('category-view');
    if (homeView) homeView.classList.remove('hidden');
    if (catView) catView.classList.add('hidden');
    
    // Clear active highlight on home category portal cards
    document.querySelectorAll('.cat-nav-btn').forEach(btn => btn.classList.remove('active'));
    
    if (scroll) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  getCategoryData(category) {
    switch (category) {
      case 'amphibians': return window.AMPHIBIANS_DATA || [];
      case 'insects': return window.INSECTS_DATA || [];
      case 'marine': return window.MARINE_DATA || [];
      case 'land': return window.LAND_DATA || [];
      case 'birds': return window.BIRDS_DATA || [];
      case 'plants': return window.PLANTS_DATA || [];
      case 'gemstones': return window.GEMSTONES_DATA || [];
      case 'reptiles': return window.REPTILES_DATA || [];
      default: return [];
    }
  }

  getAnimalById(id) {
    const all = window.AK_AOD.getAllAnimals();
    return all.find(a => a.id === id);
  }

  renderAnimalOfTheDay(customAnimal = null) {
    const aodContainer = document.getElementById('aod-container');
    if (!aodContainer) return;

    let aodData;
    if (customAnimal) {
      aodData = {
        animal: customAnimal,
        dateStr: 'Special Discovery',
        isToday: false
      };
    } else {
      aodData = window.AK_AOD.getAnimalOfTheDay();
    }

    if (!aodData || !aodData.animal) return;
    const a = aodData.animal;
    const isFav = this.favorites.has(a.id);
    const itemType = a.category === 'gemstones' ? (window.AK_I18N ? window.AK_I18N.t('aod_item_gem') : 'GEMSTONE OF THE DAY') :
                     (a.category === 'plants' ? (window.AK_I18N ? window.AK_I18N.t('aod_item_plant') : 'PLANT OF THE DAY') :
                     (a.category === 'reptiles' ? (window.AK_I18N ? window.AK_I18N.t('aod_item_reptile') : 'REPTILE OF THE DAY') :
                     (a.category === 'birds' ? (window.AK_I18N ? window.AK_I18N.t('aod_item_bird') : 'BIRD OF THE DAY') :
                     (window.AK_I18N ? window.AK_I18N.t('aod_item_animal') : 'ANIMAL OF THE DAY'))));
    const soundIcon = a.category === 'gemstones' ? '🔔' : (a.category === 'plants' ? '🌱' : '🔊');
    const soundLabel = a.category === 'gemstones' ? (window.AK_I18N ? window.AK_I18N.t('card_chime') : 'Chime') :
                       (a.category === 'plants' ? (window.AK_I18N ? window.AK_I18N.t('card_nature') : 'Nature') :
                       (window.AK_I18N ? window.AK_I18N.t('card_sound') : 'Sound'));
    const localizedName = window.AK_I18N ? window.AK_I18N.getSpeciesName(a) : a.name;
    const localizedStatus = window.AK_I18N ? window.AK_I18N.getStatusName(a.endangered) : a.endangered;
    const localizedCat = window.AK_I18N ? window.AK_I18N.t('zone_' + a.category) : (this.categoryMeta[a.category] ? this.categoryMeta[a.category].title : a.category);

    const surpriseBadge = window.AK_I18N ? window.AK_I18N.t('aod_surprise_spotlight') : 'SURPRISE SPOTLIGHT';
    const specHabitatLabel = window.AK_I18N ? window.AK_I18N.t('spec_habitat') : 'Habitat';
    const specDietLabel = a.category === 'gemstones' ? (window.AK_I18N ? window.AK_I18N.t('spec_hardness') : 'Hardness') : (window.AK_I18N ? window.AK_I18N.t('spec_diet') : 'Diet');
    const specFactLabel = window.AK_I18N ? window.AK_I18N.t('spec_fact') : 'Fact';
    const btnStoryLabel = window.AK_I18N ? window.AK_I18N.t('btn_story') : '📖 Story';
    const btnSurpriseLabel = window.AK_I18N ? window.AK_I18N.t('btn_surprise') : '🎲 Surprise Me';
    const btnFullInfoLabel = window.AK_I18N ? window.AK_I18N.t('btn_full_info') : '🔍 Full Info ➡️';

    aodContainer.innerHTML = `
      <div class="aod-compact-card">
        <div class="aod-compact-thumb-box" onclick="window.app.openAnimalDetail('${a.id}')" title="Click to view full card details">
          <img src="${this.formatImageUrl(a.image, 500)}" alt="${a.name}" class="aod-compact-img" onerror="window.app.handleImageError(this, '${a.category}', '${a.emoji}', '${a.name.replace(/'/g, "\\'")}')">
          <div class="aod-compact-img-badges">
            <span class="aod-cat-tag ${a.category}">${this.categoryMeta[a.category] ? this.categoryMeta[a.category].emoji : '🐾'} ${localizedCat}</span>
            <span class="aod-status-tag status-${this.getStatusClass(a.endangered)}">${localizedStatus}</span>
          </div>
        </div>
        <div class="aod-compact-info">
          <div class="aod-compact-top-bar">
            <span class="aod-compact-badge">⭐ ${aodData.isToday ? itemType : surpriseBadge} • ${aodData.dateStr}</span>
            <button class="btn-fav btn-compact-fav ${isFav ? 'active' : ''}" onclick="window.app.toggleFavorite('${a.id}', this)" title="Save to Favorites">
              ${isFav ? '❤️' : '🤍'}
            </button>
          </div>
          <div class="aod-compact-title-row" onclick="window.app.openAnimalDetail('${a.id}')">
            <h3 class="aod-compact-title">${a.emoji} ${localizedName}</h3>
            <span class="aod-compact-sci">${a.scientific}</span>
          </div>
          <p class="aod-compact-tagline">"${this.truncateText(window.AK_I18N ? window.AK_I18N.getSpeciesTagline(a) : a.tagline, 120)}"</p>
          <div class="aod-compact-specs">
            <span class="compact-spec-item">🌍 <strong>${specHabitatLabel}:</strong> ${this.truncateText(window.AK_I18N ? window.AK_I18N.getSpeciesHabitat(a) : a.habitat, 34)}</span>
            <span class="compact-spec-item">${a.category === 'gemstones' ? '💎' : (a.category === 'plants' ? '🌱' : '🍽️')} <strong>${specDietLabel}:</strong> ${this.truncateText(window.AK_I18N ? window.AK_I18N.getSpeciesDiet(a) : a.diet, 30)}</span>
            <span class="compact-spec-item">💡 <strong>${specFactLabel}:</strong> ${this.truncateText(window.AK_I18N ? window.AK_I18N.getSpeciesFunFact(a) : a.funFact, 48)}</span>
          </div>
          <div class="aod-compact-actions">
            <button class="btn-compact-act btn-listen" onclick="window.app.readAloud('${a.id}', this)" title="Listen to read-aloud story">
              ${btnStoryLabel}
            </button>
            <button class="btn-compact-act btn-sound" onclick="window.app.playSound('${a.id}', this)" title="Hear audio vocalization">
              ${soundIcon} ${soundLabel}
            </button>
            <button class="btn-compact-act btn-surprise" onclick="window.app.surpriseMe()" title="Pick random creature or rock">
              ${btnSurpriseLabel}
            </button>
            <button class="btn-compact-act btn-open-card" onclick="window.app.openAnimalDetail('${a.id}')" title="Open full information modal">
              ${btnFullInfoLabel}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  surpriseMe() {
    window.AK_AUDIO.playPop(480);
    const rand = window.AK_AOD.getRandomAnimal();
    this.renderAnimalOfTheDay(rand);
  }

  selectCategory(category) {
    this.currentView = 'category';
    this.isGlobalSearch = false;
    this.currentCategory = category;
    this.activeFilter = 'all';
    this.searchQuery = '';
    
    // Switch views: hide home, show category view
    const homeView = document.getElementById('home-view');
    const catView = document.getElementById('category-view');
    if (homeView) homeView.classList.add('hidden');
    if (catView) catView.classList.remove('hidden');

    window.AK_AUDIO.playCategoryCue(category);
    this.renderCategoryZone();

    // Reset search inputs
    const globalInput = document.getElementById('global-search-input');
    const heroInput = document.getElementById('hero-search-input');
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('global-search-clear');
    const heroClearBtn = document.getElementById('hero-search-clear');
    if (globalInput) globalInput.value = '';
    if (heroInput) heroInput.value = '';
    if (searchInput) searchInput.value = '';
    if (clearBtn) clearBtn.classList.add('hidden');
    if (heroClearBtn) heroClearBtn.classList.add('hidden');
    this.closeGlobalDropdown();

    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  renderCategoryZone() {
    // Update navigation button active state for portal buttons & switcher pills
    document.querySelectorAll('.cat-nav-btn').forEach(btn => {
      const cat = btn.dataset.category;
      btn.classList.toggle('active', !this.isGlobalSearch && cat === this.currentCategory);
    });

    document.querySelectorAll('.cat-switch-pill').forEach(pill => {
      const cat = pill.dataset.cat;
      pill.classList.toggle('active', !this.isGlobalSearch && cat === this.currentCategory);
    });

    // Toggle Land & Common Animal Filters
    const commonPill = document.getElementById('filter-pill-common');
    const showCommonFilters = this.isGlobalSearch || this.currentCategory === 'land';
    if (commonPill) commonPill.classList.toggle('hidden', !showCommonFilters);

    // Toggle Plant & Flower Specific Filters
    const flowerPill = document.getElementById('filter-pill-flowers');
    const herbPill = document.getElementById('filter-pill-herbs');
    const showPlantFilters = this.isGlobalSearch || this.currentCategory === 'plants';
    if (flowerPill) flowerPill.classList.toggle('hidden', !showPlantFilters);
    if (herbPill) herbPill.classList.toggle('hidden', !showPlantFilters);

    // Toggle Gemstones Specific Filters
    const preciousPill = document.getElementById('filter-pill-precious');
    const quartzPill = document.getElementById('filter-pill-quartz');
    const rarePill = document.getElementById('filter-pill-rare');
    const showGemFilters = this.isGlobalSearch || this.currentCategory === 'gemstones';
    if (preciousPill) preciousPill.classList.toggle('hidden', !showGemFilters);
    if (quartzPill) quartzPill.classList.toggle('hidden', !showGemFilters);
    if (rarePill) rarePill.classList.toggle('hidden', !showGemFilters);

    // Toggle Reptiles Specific Filters
    const lizardsPill = document.getElementById('filter-pill-lizards');
    const snakesPill = document.getElementById('filter-pill-snakes');
    const turtlesPill = document.getElementById('filter-pill-turtles');
    const crocsPill = document.getElementById('filter-pill-crocs');
    const showReptileFilters = this.isGlobalSearch || this.currentCategory === 'reptiles';
    if (lizardsPill) lizardsPill.classList.toggle('hidden', !showReptileFilters);
    if (snakesPill) snakesPill.classList.toggle('hidden', !showReptileFilters);
    if (turtlesPill) turtlesPill.classList.toggle('hidden', !showReptileFilters);
    if (crocsPill) crocsPill.classList.toggle('hidden', !showReptileFilters);

    // Toggle Animal Endangered Filters (hide in gemstones mode)
    const endangPill = document.getElementById('filter-pill-endangered');
    const leastPill = document.getElementById('filter-pill-leastconcern');
    const hideAnimalStatusFilters = !this.isGlobalSearch && this.currentCategory === 'gemstones';
    if (endangPill) endangPill.classList.toggle('hidden', hideAnimalStatusFilters);
    if (leastPill) leastPill.classList.toggle('hidden', hideAnimalStatusFilters);

    // Update Zone Title & Subtitle
    if (this.isGlobalSearch) {
      const titleEl = document.getElementById('current-zone-title');
      const subEl = document.getElementById('current-zone-subtitle');
      if (titleEl) titleEl.innerHTML = `🔍 Search: "${this.searchQuery}"`;
      if (subEl) subEl.innerText = 'Showing matches across all 8 animal, reptile, plant and gemstone nature zones!';
    } else {
      const meta = this.categoryMeta[this.currentCategory] || this.categoryMeta['amphibians'];
      const titleEl = document.getElementById('current-zone-title');
      const subEl = document.getElementById('current-zone-subtitle');
      if (titleEl) titleEl.innerHTML = `${meta.emoji} ${meta.title} Zone`;
      if (subEl) subEl.innerText = meta.subtitle;
    }

    this.renderSpeciesGrid();
  }

  renderSpeciesGrid() {
    const gridEl = document.getElementById('species-grid');
    if (!gridEl) return;

    let items = [];

    if (this.isGlobalSearch) {
      items = window.AK_AOD.getAllAnimals();
    } else {
      items = this.getCategoryData(this.currentCategory);
    }

    // Apply Filter
    if (this.activeFilter === 'endangered') {
      items = items.filter(i => i.endangered.includes('Endangered') || i.endangered.includes('Critically') || i.endangered.includes('Vulnerable'));
    } else if (this.activeFilter === 'least_concern') {
      items = items.filter(i => i.endangered.includes('Least Concern'));
    } else if (this.activeFilter === 'common') {
      const commonKeys = ['dog', 'cat', 'squirrel', 'chipmunk', 'raccoon', 'fox', 'rabbit', 'hedgehog', 'horse', 'cow', 'sheep', 'goat', 'pig', 'guinea pig', 'hamster', 'skunk', 'deer', 'donkey', 'alpaca', 'ferret'];
      items = items.filter(i => commonKeys.some(k => i.name.toLowerCase().includes(k)) || (i.endangered && i.endangered.toLowerCase().includes('domestic')));
    } else if (this.activeFilter === 'flowers') {
      const flowerKeys = ['hibiscus', 'glory', 'rose', 'marigold', 'salvia', 'lavender', 'tulip', 'daisy', 'peony', 'snapdragon', 'daffodil', 'dahlia', 'hydrangea', 'carnation', 'iris', 'pansy', 'lilac', 'magnolia', 'plumeria', 'camellia', 'zinnia', 'sweet pea', 'cornflower', 'forget-me-not', 'bluebell', 'poppy', 'jasmine', 'violet', 'gardenia', 'cosmos', 'buttercup', 'freesia', 'anemone', 'gladiolus', 'geranium', 'nasturtium', 'fuchsia', 'alyssum', 'lotus', 'sunflower', 'cherry blossom', 'edelweiss', 'bleeding heart', 'orchid', 'flower', 'blossom'];
      items = items.filter(i => {
        const n = i.name.toLowerCase();
        return flowerKeys.some(k => n.includes(k)) || ['🌸', '🌺', '🌹', '🌼', '🌷', '🏵️', '💐'].includes(i.emoji);
      });
    } else if (this.activeFilter === 'herbs') {
      const herbKeys = ['chervil', 'basil', 'thyme', 'rosemary', 'chamomile', 'lavender', 'salvia', 'tea', 'cinnamon', 'aloe', 'mint', 'herb'];
      items = items.filter(i => {
        const n = i.name.toLowerCase();
        return herbKeys.some(k => n.includes(k));
      });
    } else if (this.activeFilter === 'precious') {
      const preciousKeys = ['diamond', 'ruby', 'sapphire', 'emerald', 'opal', 'alexandrite', 'tanzanite', 'topaz', 'spinel', 'jadeite'];
      items = items.filter(i => preciousKeys.some(k => i.name.toLowerCase().includes(k)) || (i.endangered && i.endangered.toLowerCase().includes('precious')));
    } else if (this.activeFilter === 'quartz') {
      const quartzKeys = ['quartz', 'amethyst', 'citrine', 'agate', 'onyx', 'chalcedony', 'carnelian', 'jasper', 'prasiolite', 'ametrine', 'tiger'];
      items = items.filter(i => quartzKeys.some(k => i.name.toLowerCase().includes(k)) || (i.scientific && i.scientific.toLowerCase().includes('quartz')) || (i.scientific && i.scientific.toLowerCase().includes('sio₂')));
    } else if (this.activeFilter === 'rare') {
      const rareKeys = ['painite', 'taaffeite', 'grandidierite', 'benitoite', 'jeremejevite', 'poudretteite', 'musgravite', 'paraiba', 'moldavite', 'larimar', 'charoite', 'cavansite', 'dioptase', 'wulfenite'];
      items = items.filter(i => rareKeys.some(k => i.name.toLowerCase().includes(k)) || (i.endangered && (i.endangered.toLowerCase().includes('rare') || i.endangered.toLowerCase().includes('ultra'))));
    } else if (this.activeFilter === 'lizards') {
      const lizardKeys = ['lizard', 'gecko', 'chameleon', 'iguana', 'monitor', 'skink', 'anole', 'dragon', 'gila', 'tegú', 'tegu', 'basilisk', 'agama', 'tuatara', 'horned', 'shingleback', 'bobtail', 'moloch'];
      items = items.filter(i => i.reptileGroup === 'lizards' || lizardKeys.some(k => i.name.toLowerCase().includes(k)));
    } else if (this.activeFilter === 'snakes') {
      const snakeKeys = ['snake', 'python', 'boa', 'cobra', 'mamba', 'viper', 'rattlesnake', 'anaconda', 'krait', 'taipan', 'adder', 'copperhead', 'cottonmouth', 'boomslang', 'bushmaster'];
      items = items.filter(i => i.reptileGroup === 'snakes' || snakeKeys.some(k => i.name.toLowerCase().includes(k)));
    } else if (this.activeFilter === 'turtles') {
      const turtleKeys = ['turtle', 'tortoise', 'terrapin', 'leatherback', 'loggerhead', 'snapping', 'matamata'];
      items = items.filter(i => i.reptileGroup === 'turtles' || turtleKeys.some(k => i.name.toLowerCase().includes(k)));
    } else if (this.activeFilter === 'crocs') {
      const crocKeys = ['crocodile', 'alligator', 'caiman', 'gharial'];
      items = items.filter(i => i.reptileGroup === 'crocs' || crocKeys.some(k => i.name.toLowerCase().includes(k)));
    }

    // Apply Search
    if (this.searchQuery.trim() !== '') {
      const queryWords = this.searchQuery.toLowerCase().split(/\s+/).filter(w => w.length > 0);
      items = items.filter(i => {
        const trans = window.AK_SPECIES_NAMES && window.AK_SPECIES_NAMES[i.id];
        const bio = window.AK_SPECIES_BIO && window.AK_SPECIES_BIO[i.id];
        const fullText = [
          i.name, i.scientific, i.jurisdiction, i.badgeText, i.category,
          i.habitat, i.diet, i.description, i.endangered, i.funFact, i.predators, i.tagline,
          trans ? trans.zh : '', trans ? trans.es : '',
          bio ? bio.habZh : '', bio ? bio.habEs : '',
          bio ? bio.dietZh : '', bio ? bio.dietEs : '',
          bio ? bio.descZh : '', bio ? bio.descEs : '',
          bio ? bio.funZh : '', bio ? bio.funEs : '',
          bio ? bio.tagZh : '', bio ? bio.tagEs : ''
        ].filter(Boolean).join(' ').toLowerCase();
        
        // Return true if ALL words in the query exist somewhere in the animal's text profile
        return queryWords.every(word => fullText.includes(word));
      });
    }

    // Update Counter
    const counterEl = document.getElementById('category-count-badge');
    if (counterEl) {
      if (this.isGlobalSearch) {
        counterEl.innerText = window.AK_I18N ? window.AK_I18N.t('found_global', { count: items.length }) : `Found ${items.length} species & gems across all zones`;
      } else if (this.currentCategory === 'gemstones') {
        counterEl.innerText = window.AK_I18N ? window.AK_I18N.t('showing_gems', { count: items.length }) : `Showing ${items.length} Gemstones & Minerals`;
      } else if (this.currentCategory === 'reptiles') {
        counterEl.innerText = window.AK_I18N ? window.AK_I18N.t('showing_reptiles', { count: items.length }) : `Showing ${items.length} Reptiles & Serpents`;
      } else if (this.currentCategory === 'birds') {
        counterEl.innerText = window.AK_I18N ? window.AK_I18N.t('showing_birds', { count: items.length }) : `Showing ${items.length} Bird Species`;
      } else if (this.currentCategory === 'land') {
        counterEl.innerText = window.AK_I18N ? window.AK_I18N.t('showing_land', { count: items.length }) : `Showing ${items.length} Land Animals`;
      } else {
        counterEl.innerText = window.AK_I18N ? window.AK_I18N.t('showing_species', { count: items.length }) : `Showing ${items.length} species`;
      }
    }

    if (items.length === 0) {
      gridEl.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">🔍</div>
          <h3>${window.AK_I18N ? window.AK_I18N.t('empty_title') : 'No creatures or specimens found'}</h3>
          <p>${window.AK_I18N ? window.AK_I18N.t('empty_desc') : 'Try searching for a different keyword or clear filters!'}</p>
          <button class="btn-secondary" onclick="window.app.clearSearch()">${window.AK_I18N ? window.AK_I18N.t('btn_clear_filters') : 'Clear Filters'}</button>
        </div>
      `;
      return;
    }

    gridEl.innerHTML = items.map(a => {
      const isFav = this.favorites.has(a.id);
      const soundIcon = a.category === 'gemstones' ? '🔔' : (a.category === 'plants' ? '🌱' : '🔊');
      const soundLabel = a.category === 'gemstones' ? (window.AK_I18N ? window.AK_I18N.t('card_chime') : 'Chime') :
                         (a.category === 'plants' ? (window.AK_I18N ? window.AK_I18N.t('card_nature') : 'Nature') :
                         (window.AK_I18N ? window.AK_I18N.t('card_sound') : 'Sound'));
      const soundTitle = a.category === 'gemstones' ? 'Crystal Chime' : (a.category === 'plants' ? 'Nature Chime' : 'Hear Animal Sound');
      const locName = window.AK_I18N ? window.AK_I18N.getSpeciesName(a) : a.name;
      const locStatus = window.AK_I18N ? window.AK_I18N.getStatusName(a.endangered) : a.endangered;
      const learnMoreText = window.AK_I18N ? window.AK_I18N.t('card_learn_more') : 'Learn More & Story ➡️';
      const locBadge = a.badgeText ? (window.AK_I18N ? window.AK_I18N.getSpeciesBadge(a.badgeText) : a.badgeText) : '';

      return `
        <div class="species-card" onclick="window.app.openAnimalDetail('${a.id}')">
          <div class="card-thumb-wrap">
            <img class="card-thumb" src="${this.formatImageUrl(a.image, 500)}" alt="${a.name}" loading="lazy" onerror="window.app.handleImageError(this, '${a.category}', '${a.emoji}', '${a.name.replace(/'/g, "\\'")}')">
            <span class="badge badge-status status-${this.getStatusClass(a.endangered)}">${locStatus}</span>
            <button class="card-fav-btn ${isFav ? 'active' : ''}" onclick="event.stopPropagation(); window.app.toggleFavorite('${a.id}', this)" title="Save to Favorites">
              ${isFav ? '❤️' : '🤍'}
            </button>
            <button class="card-sound-btn" onclick="event.stopPropagation(); window.app.playSound('${a.id}', this)" title="${soundTitle}">
              ${soundIcon} ${soundLabel}
            </button>
          </div>
          <div class="card-body">
            ${locBadge ? `<div class="card-geo-badge">${locBadge}</div>` : ''}
            <h3 class="card-title">${a.emoji} ${locName}</h3>
            <div class="card-sci">${a.scientific}</div>
            <p class="card-tagline">${window.AK_I18N ? window.AK_I18N.getSpeciesTagline(a) : a.tagline}</p>
            <div class="card-meta-pills">
              <span class="mini-pill">🌍 ${this.truncateText(window.AK_I18N ? window.AK_I18N.getSpeciesHabitat(a) : a.habitat, 28)}</span>
              <span class="mini-pill">${a.category === 'gemstones' ? '💎' : (a.category === 'plants' ? '🌱' : '🍽️')} ${this.truncateText(window.AK_I18N ? window.AK_I18N.getSpeciesDiet(a) : a.diet, 24)}</span>
            </div>
          </div>
          <div class="card-footer">
            <span class="learn-more">${learnMoreText}</span>
          </div>
        </div>
      `;
    }).join('');
  }

  getStatusClass(status) {
    if (!status) return 'least-concern';
    if (status.includes('Critically')) return 'crit-endangered';
    if (status.includes('Endangered')) return 'endangered';
    if (status.includes('Vulnerable')) return 'vulnerable';
    if (status.includes('Near Threatened')) return 'near-threatened';
    if (status.includes('Precious')) return 'precious';
    if (status.includes('Rare') || status.includes('Collector')) return 'rare';
    return 'least-concern';
  }

  truncateText(str, len) {
    if (!str) return '';
    return str.length > len ? str.substring(0, len) + '...' : str;
  }

  openAnimalDetail(id) {
    const animal = this.getAnimalById(id);
    if (!animal) return;

    this.currentAnimalId = id;
    window.AK_AUDIO.playPop(550);

    if (window.AK_QUESTS && window.AK_QUESTS.recordStat) {
      window.AK_QUESTS.recordStat('detailsInspected', 1);
    }

    const modal = document.getElementById('animal-modal');
    const content = document.getElementById('animal-modal-content');
    if (!modal || !content) return;

    const isFav = this.favorites.has(animal.id);
    const catMeta = this.categoryMeta[animal.category];

    // Find neighboring animals in category for next/prev
    const catList = this.getCategoryData(animal.category);
    const currIdx = catList.findIndex(x => x.id === animal.id);
    const prevAnimal = currIdx > 0 ? catList[currIdx - 1] : (catList[catList.length - 1] || animal);
    const nextAnimal = currIdx < catList.length - 1 && currIdx >= 0 ? catList[currIdx + 1] : (catList[0] || animal);

    const isGem = animal.category === 'gemstones';
    const isPlant = animal.category === 'plants';
    const isReptile = animal.category === 'reptiles';

    const locName = window.AK_I18N ? window.AK_I18N.getSpeciesName(animal) : animal.name;
    const locStatus = window.AK_I18N ? window.AK_I18N.getStatusName(animal.endangered) : animal.endangered;
    const locPrevName = window.AK_I18N ? window.AK_I18N.getSpeciesName(prevAnimal) : prevAnimal.name;
    const locNextName = window.AK_I18N ? window.AK_I18N.getSpeciesName(nextAnimal) : nextAnimal.name;
    const locCat = window.AK_I18N ? window.AK_I18N.t('zone_' + animal.category) : (catMeta ? catMeta.title : animal.category);

    const box1Label = isGem ? (window.AK_I18N ? window.AK_I18N.t('modal_origin_gem') : 'Geological Origin & Mine Locations') :
                      (isPlant ? (window.AK_I18N ? window.AK_I18N.t('modal_origin_plant') : 'Native Region & Climate') :
                      (isReptile ? (window.AK_I18N ? window.AK_I18N.t('modal_origin_reptile') : 'Native Range & Ecosystem') :
                      (window.AK_I18N ? window.AK_I18N.t('modal_origin_habitat') : 'Where They Live (Habitat)')));
    const box1Icon = isGem ? '⛰️' : (isPlant ? '🌿' : (isReptile ? '🗺️' : '🌍'));

    const box2Label = isGem ? (window.AK_I18N ? window.AK_I18N.t('modal_diet_gem') : 'Chemical Formula & Crystal System') :
                      (isPlant ? (window.AK_I18N ? window.AK_I18N.t('modal_diet_plant') : 'Sunlight & Soil Needs') :
                      (isReptile ? (window.AK_I18N ? window.AK_I18N.t('modal_diet_reptile') : 'Diet & Hunting Strategy') :
                      (window.AK_I18N ? window.AK_I18N.t('modal_diet_label') : 'What They Eat (Diet)')));
    const box2Icon = isGem ? '🔬' : (isPlant ? '☀️' : (isReptile ? '🦗' : '🍽️'));

    const box3Label = isGem ? (window.AK_I18N ? window.AK_I18N.t('modal_status_gem') : 'Gemstone Rarity & Status') :
                      (isPlant ? (window.AK_I18N ? window.AK_I18N.t('modal_status_plant') : 'Blooming Season & Status') :
                      (isReptile ? (window.AK_I18N ? window.AK_I18N.t('modal_status_reptile') : 'Conservation Status') :
                      (window.AK_I18N ? window.AK_I18N.t('modal_status_label') : 'Are They Endangered? (Status)')));
    const box3Icon = isGem ? '💎' : (isPlant ? '🌸' : (isReptile ? '🛡️' : '🛡️'));

    const box4Label = isGem ? (window.AK_I18N ? window.AK_I18N.t('modal_pred_gem') : 'Mohs Hardness & Durability') :
                      (isPlant ? (window.AK_I18N ? window.AK_I18N.t('modal_pred_plant') : 'Pollinators & Garden Uses') :
                      (isReptile ? (window.AK_I18N ? window.AK_I18N.t('modal_pred_reptile') : 'Predators, Defense & Venom') :
                      (window.AK_I18N ? window.AK_I18N.t('modal_pred_label') : 'What Are Their Predators?')));
    const box4Icon = isGem ? '🔨' : (isPlant ? '🐝' : (isReptile ? '⚠️' : '⚠️'));

    const overviewTitle = isGem ? (window.AK_I18N ? window.AK_I18N.t('modal_story_gem_overview') : '💎 Geological Discovery & Overview') :
                          (isReptile ? (window.AK_I18N ? window.AK_I18N.t('modal_story_reptile_overview') : '🦎 Reptilian Profile & Overview') :
                          (window.AK_I18N ? window.AK_I18N.t('modal_story_overview') : '📖 Story & Overview'));

    const soundBtnLabel = isGem ? (window.AK_I18N ? window.AK_I18N.t('modal_sound_gem') : '🔔 Crystal Chime') :
                          (isPlant ? (window.AK_I18N ? window.AK_I18N.t('modal_sound_plant') : '🌱 Nature Chime') :
                          (window.AK_I18N ? window.AK_I18N.t('modal_sound_animal') : '🔊 Animal Sound'));

    const storyBtnLabel = isGem ? (window.AK_I18N ? window.AK_I18N.t('modal_story_gem') : '📖 Crystal Story') :
                          (window.AK_I18N ? window.AK_I18N.t('modal_story_read') : '📖 Listen to Story');

    const favBtnLabel = isFav ? (window.AK_I18N ? window.AK_I18N.t('modal_fav_saved') : '❤️ Saved') :
                        (window.AK_I18N ? window.AK_I18N.t('modal_fav_add') : '🤍 Favorite');

    const xrayBtnLabel = window.AK_I18N ? window.AK_I18N.t('modal_xray') : '🔬 X-Ray Anatomy';
    const arenaBtnLabel = window.AK_I18N ? window.AK_I18N.t('modal_arena') : '⚔️ Send to Arena';

    const howTheyLive = window.CardKnowledgeEngine ? window.CardKnowledgeEngine.getHowTheyLive(animal) : [];
    const superpowers = window.CardKnowledgeEngine ? window.CardKnowledgeEngine.getSuperpowers(animal) : [];
    const characteristics = window.CardKnowledgeEngine ? window.CardKnowledgeEngine.getCharacteristics(animal) : [];

    const locTagline = window.AK_I18N ? window.AK_I18N.getSpeciesTagline(animal) : animal.tagline;
    const locDescription = window.AK_I18N ? window.AK_I18N.getSpeciesDescription(animal) : animal.description;
    const locHabitat = window.AK_I18N ? window.AK_I18N.getSpeciesHabitat(animal) : animal.habitat;
    const locDiet = window.AK_I18N ? window.AK_I18N.getSpeciesDiet(animal) : animal.diet;
    const locPredators = window.AK_I18N ? window.AK_I18N.getSpeciesPredators(animal) : animal.predators;
    const locFunFact = window.AK_I18N ? window.AK_I18N.getSpeciesFunFact(animal) : animal.funFact;

    const sciLabel = isGem ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '化學成分與硬度' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'Composición y Dureza' : 'Composition & Hardness')) :
                     (isPlant ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '植物學名' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'Nombre Botánico' : 'Botanical Name')) :
                     (isReptile ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '分類學 / 學名' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'Taxonomía / Científico' : 'Taxonomy / Scientific')) :
                     (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '學名' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'Nombre Científico' : 'Scientific'))));

    const deepTitle1 = isGem ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '地質起源與形成歷程' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'Génesis Geológica y Formación' : 'How They Formed & Geological Genesis')) :
                       (isPlant ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '生長環境與原生風土' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'Cómo Crecen y Terroir Nativo' : 'How They Grow & Native Terroir')) :
                       (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '生活習性與日常作息' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'Cómo Viven y Rutina Diaria' : 'How They Live & Daily Routine')));
    const deepBadge1 = isGem ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '地質成因' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'ORIGEN GEOLÓGICO' : 'GEOLOGICAL ORIGIN')) :
                       (isPlant ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '植物生態' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'ECOLOGÍA VEGETAL' : 'PLANT ECOLOGY')) :
                       (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '生活方式' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'ESTILO DE VIDA' : 'LIFESTYLE')));

    const deepTitle2 = isGem ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '晶體超凡光學現象與力量' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'Superpoderes del Cristal y Fenómenos Ópticos' : 'Crystal Superpowers & Optical Phenomena')) :
                       (isPlant ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '植物超能力與防禦機制' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'Superpoderes Botánicos y Guerra Química' : 'Botanical Superpowers & Chemical Warfare')) :
                       (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '超凡能力與特殊生存適應' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'Superpoderes y Adaptaciones Únicas' : 'Superpowers & Unique Survival Adaptations')));
    const deepBadge2 = isGem ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '水晶能量' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'PODERES DEL CRISTAL' : 'CRYSTAL POWERS')) :
                       (isPlant ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '植物絕技' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'PODERES VEGETALES' : 'PLANT POWERS')) :
                       (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '生存超能力' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'SUPERPODERES' : 'SUPERPOWERS')));

    const deepTitle3 = isGem ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '晶體結構與寶石學性質' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'Estructura Cristalina y Propiedades' : 'Crystal Structure & Gemological Properties')) :
                       (isPlant ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '花卉解剖與花瓣構造' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'Anatomía Floral y Arquitectura' : 'Floral Anatomy & Petal Architecture')) :
                       (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '身體構造與生理特徵' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'Características Físicas y Anatomía' : 'Physical Characteristics & Anatomy')));
    const deepBadge3 = isGem ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '寶石學' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'GEMOLOGÍA' : 'GEMOLOGY')) :
                       (isPlant ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '植物學' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'BOTÁNICA' : 'BOTANY')) :
                       (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '身體解剖' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'ANATOMÍA' : 'ANATOMY')));

    const funfactTitle = isGem ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '✨ 地質科學小知識！' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? '✨ ¡Dato Curioso de Ciencia de la Tierra!' : '✨ Earth Science Fun Fact!')) :
                         (isReptile ? (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '🦎 爬行動物小知識！' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? '🦎 ¡Dato Curioso de Reptiles!' : '🦎 Reptilian Fun Fact!')) :
                         (window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '🌟 趣味小知識！' : (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? '🌟 ¡Dato Curioso Fascinante!' : '🌟 Cool Fun Fact!')));

    content.innerHTML = `
      <div class="modal-detail-card">
        <button class="modal-close-btn" onclick="window.app.closeModal()">✕</button>

        <div class="modal-hero-image">
          <img src="${this.formatImageUrl(animal.image, 900)}" alt="${animal.name}" onerror="window.app.handleImageError(this, '${animal.category}', '${animal.emoji}', '${animal.name.replace(/'/g, "\\'")}')">
          <div class="modal-hero-badges">
            <span class="badge badge-category">${catMeta ? catMeta.emoji + ' ' + locCat : '💎 ' + locCat}</span>
            ${animal.badgeText ? `<span class="badge badge-geo">${window.AK_I18N ? window.AK_I18N.getSpeciesBadge(animal.badgeText) : animal.badgeText}</span>` : ''}
            <span class="badge badge-status status-${this.getStatusClass(animal.endangered)}">${locStatus}</span>
          </div>
        </div>

        <div class="modal-body-content">
          <div class="modal-header-row">
            <div>
              <h2 class="modal-animal-name">${animal.emoji} ${locName}</h2>
              <div class="modal-sci-name">${sciLabel}: <em>${animal.scientific}</em></div>
            </div>
              ${!isGem && !isPlant ? `
              <button class="btn-voice-sound" style="background: linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%); color: #fff; border: 1px solid #818cf8;" onclick="window.AK_ANATOMY.openAnatomyModal('${animal.id}')" title="Scan Inside Skeleton, Digestion & Organs">
                ${xrayBtnLabel}
              </button>
              <button class="btn-voice-sound" style="background: linear-gradient(135deg, #dc2626 0%, #991b1b 100%); color: #fff; border: 1px solid #f87171;" onclick="window.app.openBattleArena('${animal.id}')" title="Test in Creature Face-Off Arena">
                ${arenaBtnLabel}
              </button>` : ''}
              <button class="btn-voice-sound" id="modal-sound-btn" onclick="window.app.playSound('${animal.id}', this)" title="Hear Real Sound">
                ${soundBtnLabel}
              </button>
              <button class="btn-voice-read" id="modal-narrate-btn" onclick="window.app.readAloud('${animal.id}', this)" title="Read Aloud Full Story">
                ${storyBtnLabel}
              </button>
              <button class="btn-fav-large ${isFav ? 'active' : ''}" onclick="window.app.toggleFavorite('${animal.id}', this)">
                ${favBtnLabel}
              </button>
            </div>
          </div>

          <div class="modal-tagline-quote">"${locTagline}"</div>

          <div class="modal-section-box">
            <h4 class="box-heading">${overviewTitle}</h4>
            <p class="modal-desc-text">${locDescription}</p>
          </div>

          <!-- 3 In-Depth Multi-Paragraph Educational Sections -->
          <div class="modal-deep-sections-container">
            <!-- 1. How They Live -->
            <div class="modal-deep-card theme-living">
              <div class="deep-card-header">
                <span class="deep-card-icon">${isGem ? '⛰️' : (isPlant ? '🌿' : '🏡')}</span>
                <h4 class="deep-card-title">${deepTitle1}</h4>
                <span class="deep-card-badge">${deepBadge1}</span>
              </div>
              <div class="deep-card-body">
                ${howTheyLive.map(p => `<p class="deep-paragraph">${this.formatMarkdownParagraph(p)}</p>`).join('')}
              </div>
            </div>

            <!-- 2. Superpowers & Adaptations -->
            <div class="modal-deep-card theme-powers">
              <div class="deep-card-header">
                <span class="deep-card-icon">${isGem ? '✨' : (isPlant ? '🛡️' : '⚡')}</span>
                <h4 class="deep-card-title">${deepTitle2}</h4>
                <span class="deep-card-badge">${deepBadge2}</span>
              </div>
              <div class="deep-card-body">
                ${superpowers.map(p => `<p class="deep-paragraph">${this.formatMarkdownParagraph(p)}</p>`).join('')}
              </div>
            </div>

            <!-- 3. Physical Characteristics & Anatomy -->
            <div class="modal-deep-card theme-characteristics">
              <div class="deep-card-header">
                <span class="deep-card-icon">${isGem ? '💎' : (isPlant ? '🌸' : '🎨')}</span>
                <h4 class="deep-card-title">${deepTitle3}</h4>
                <span class="deep-card-badge">${deepBadge3}</span>
              </div>
              <div class="deep-card-body">
                ${characteristics.map(p => `<p class="deep-paragraph">${this.formatMarkdownParagraph(p)}</p>`).join('')}
              </div>
            </div>
          </div>

          <!-- Quick Environmental & Biological Specs Grid -->
          <div class="modal-grid-two">
            <div class="modal-info-box">
              <div class="box-icon">${box1Icon}</div>
              <div>
                <strong>${box1Label}</strong>
                <p>${locHabitat}</p>
              </div>
            </div>

            <div class="modal-info-box">
              <div class="box-icon">${box2Icon}</div>
              <div>
                <strong>${box2Label}</strong>
                <p>${locDiet}</p>
              </div>
            </div>

            <div class="modal-info-box">
              <div class="box-icon">${box3Icon}</div>
              <div>
                <strong>${box3Label}</strong>
                <p>${locStatus}</p>
              </div>
            </div>

            <div class="modal-info-box">
              <div class="box-icon">${box4Icon}</div>
              <div>
                <strong>${box4Label}</strong>
                <p>${locPredators}</p>
              </div>
            </div>
          </div>

          <div class="modal-funfact-box">
            <div class="funfact-title">${funfactTitle}</div>
            <p>${locFunFact}</p>
          </div>

          <div class="modal-nav-arrows">
            <button class="btn-nav-prev" onclick="window.app.openAnimalDetail('${prevAnimal.id}')">
              ⬅️ ${locPrevName}
            </button>
            <button class="btn-nav-next" onclick="window.app.openAnimalDetail('${nextAnimal.id}')">
              ${locNextName} ➡️
            </button>
          </div>
        </div>
      </div>
    `;

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    window.AK_AUDIO.stopSpeech();
    const modal = document.getElementById('animal-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  playSound(id, btn) {
    const a = this.getAnimalById(id);
    if (!a) return;
    window.AK_AUDIO.playAnimalSound(a, btn);
  }

  readAloud(id, btn) {
    const a = this.getAnimalById(id);
    if (!a) return;
    window.AK_AUDIO.narrateAnimal(a, btn);
  }

  toggleFavorite(id, btn) {
    if (this.favorites.has(id)) {
      this.favorites.delete(id);
      if (btn) btn.classList.remove('active');
      window.AK_AUDIO.playPop(350);
    } else {
      this.favorites.add(id);
      if (btn) btn.classList.add('active');
      window.AK_AUDIO.playSuccess();
    }
    localStorage.setItem('ak_favorites', JSON.stringify([...this.favorites]));
    this.updateFavoritesCount();
    // Refresh species card star if open
    this.renderSpeciesGrid();
  }

  updateFavoritesCount() {
    const el = document.getElementById('favorites-counter');
    if (el) el.innerText = this.favorites.size.toString();
  }

  openFavoritesModal() {
    window.AK_AUDIO.playPop(480);
    const modal = document.getElementById('fav-modal');
    const listContainer = document.getElementById('fav-list-container');
    if (!modal || !listContainer) return;

    const all = window.AK_AOD.getAllAnimals();
    const favItems = all.filter(a => this.favorites.has(a.id));

    if (favItems.length === 0) {
      const emptyTitle = window.AK_I18N ? window.AK_I18N.t('fav_empty_title') : 'No favorite creatures yet';
      const emptyDesc = window.AK_I18N ? window.AK_I18N.t('fav_empty_desc') : 'Tap the heart icon on any animal card to save it to your safari book!';
      listContainer.innerHTML = `
        <div class="empty-state">
          <div class="empty-icon">⭐</div>
          <h3>${emptyTitle}</h3>
          <p>${emptyDesc}</p>
        </div>
      `;
    } else {
      listContainer.innerHTML = `
        <div class="fav-grid">
          ${favItems.map(a => {
            const locName = window.AK_I18N ? window.AK_I18N.getSpeciesName(a) : a.name;
            const locStatus = window.AK_I18N ? window.AK_I18N.getStatusName(a.endangered) : a.endangered;
            return `
              <div class="fav-item-card" onclick="window.app.closeFavorites(); window.app.openAnimalDetail('${a.id}')">
                <img src="${this.formatImageUrl(a.image, 200)}" alt="${a.name}" onerror="window.app.handleImageError(this, '${a.category}', '${a.emoji}', '${a.name.replace(/'/g, "\\'")}')">
                <div class="fav-info">
                  <h4>${a.emoji} ${locName}</h4>
                  <span>${(a.category || '').toUpperCase()} • ${locStatus}</span>
                </div>
                <button class="btn-remove-fav" onclick="event.stopPropagation(); window.app.toggleFavorite('${a.id}'); window.app.openFavoritesModal();">✕</button>
              </div>
            `;
          }).join('')}
        </div>
      `;
    }

    modal.classList.remove('hidden');
  }

  closeFavorites() {
    const modal = document.getElementById('fav-modal');
    if (modal) modal.classList.add('hidden');
  }

  openQuiz() {
    window.AK_AUDIO.playPop(600);
    const modal = document.getElementById('quiz-modal');
    if (modal) {
      modal.classList.remove('hidden');
      window.AK_GAME.loadNewQuestion();
    }
  }

  closeQuiz() {
    const modal = document.getElementById('quiz-modal');
    if (modal) modal.classList.add('hidden');
  }

  setFilter(filter, btn) {
    this.activeFilter = filter;
    window.AK_AUDIO.playPop(440);
    document.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
    if (btn) btn.classList.add('active');
    this.renderSpeciesGrid();
  }

  handleSearch(query) {
    this.searchQuery = query;
    const clearBtn = document.getElementById('search-clear-btn');
    if (clearBtn) clearBtn.classList.toggle('hidden', !query || query.trim().length === 0);
    this.renderSpeciesGrid();
  }

  clearSearch() {
    this.searchQuery = '';
    this.activeFilter = 'all';
    const input = document.getElementById('search-input');
    const clearBtn = document.getElementById('search-clear-btn');
    if (input) input.value = '';
    if (clearBtn) clearBtn.classList.add('hidden');
    document.querySelectorAll('.filter-pill').forEach((p, idx) => p.classList.toggle('active', idx === 0));
    this.renderSpeciesGrid();
  }

  setupEventListeners() {
    // Zone search input
    const searchInput = document.getElementById('search-input');
    const zoneClearBtn = document.getElementById('search-clear-btn');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        this.handleSearch(e.target.value);
      });
      searchInput.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
          this.clearSearch();
          searchInput.blur();
        }
      });
    }

    // Modal click outside to close
    window.addEventListener('click', (e) => {
      const animalModal = document.getElementById('animal-modal');
      const favModal = document.getElementById('fav-modal');
      const quizModal = document.getElementById('quiz-modal');
      const battleModal = document.getElementById('battle-modal');
      const bgModal = document.getElementById('bg-modal');

      if (e.target === animalModal) this.closeModal();
      if (e.target === favModal) this.closeFavorites();
      if (e.target === quizModal) this.closeQuiz();
      if (e.target === battleModal) this.closeBattleArena();
      if (e.target === bgModal) this.closeBackgroundModal();
    });

    // Universal Escape key listener to exit any search, dropdown, or modal
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.closeModal();
        this.closeFavorites();
        this.closeQuiz();
        this.closeBattleArena();
        this.closeBackgroundModal();
        this.closeGlobalDropdown();
        this.clearFighterSearch(1);
        this.clearFighterSearch(2);

        // Blur any active input element
        if (document.activeElement && document.activeElement.tagName === 'INPUT') {
          document.activeElement.blur();
        }
      }
    });

    // Universal scroll and touchmove listener: dismiss ANY floating choices/dropdowns immediately so user can scroll cleanly
    window.addEventListener('scroll', () => {
      this.closeGlobalDropdown();
      const drop1 = document.getElementById('fighter-1-dropdown');
      const drop2 = document.getElementById('fighter-2-dropdown');
      if (drop1) drop1.classList.add('hidden');
      if (drop2) drop2.classList.add('hidden');
    }, { passive: true });

    window.addEventListener('touchmove', () => {
      this.closeGlobalDropdown();
      const drop1 = document.getElementById('fighter-1-dropdown');
      const drop2 = document.getElementById('fighter-2-dropdown');
      if (drop1) drop1.classList.add('hidden');
      if (drop2) drop2.classList.add('hidden');
    }, { passive: true });

    // Universal click/touch anywhere listener: dismiss ANY open dropdown immediately
    const dismissAllDropdowns = (e) => {
      // Global Search dismissal
      const isGlobalInput = e && e.target && (e.target.id === 'global-search-input' || e.target.id === 'hero-search-input');
      const isGlobalDropdown = e && e.target && e.target.closest('#global-search-dropdown');
      if (!isGlobalInput && !isGlobalDropdown) {
        this.closeGlobalDropdown();
      }

      // Fighter 1 dismissal
      const isF1Input = e && e.target && e.target.id === 'fighter-1-search';
      const isF1Dropdown = e && e.target && e.target.closest('#fighter-1-dropdown');
      if (!isF1Input && !isF1Dropdown) {
        const drop1 = document.getElementById('fighter-1-dropdown');
        if (drop1) drop1.classList.add('hidden');
      }

      // Fighter 2 dismissal
      const isF2Input = e && e.target && e.target.id === 'fighter-2-search';
      const isF2Dropdown = e && e.target && e.target.closest('#fighter-2-dropdown');
      if (!isF2Input && !isF2Dropdown) {
        const drop2 = document.getElementById('fighter-2-dropdown');
        if (drop2) drop2.classList.add('hidden');
      }
    };

    document.addEventListener('pointerdown', dismissAllDropdowns, true);
    document.addEventListener('click', dismissAllDropdowns, true);
    document.addEventListener('touchstart', dismissAllDropdowns, { passive: true, capture: true });
  }

  setupGlobalSearch() {
    const globalInput = document.getElementById('global-search-input');
    const heroInput = document.getElementById('hero-search-input');
    const clearBtn = document.getElementById('global-search-clear');
    const heroClearBtn = document.getElementById('hero-search-clear');

    const onSearchInput = (value) => {
      const q = value.trim();
      if (clearBtn) clearBtn.classList.toggle('hidden', q.length === 0);
      if (heroClearBtn) heroClearBtn.classList.toggle('hidden', q.length === 0);
      if (q.length === 0) {
        this.closeGlobalDropdown();
        return;
      }
      this.renderGlobalDropdown(q);
    };

    if (globalInput) {
      globalInput.addEventListener('input', (e) => onSearchInput(e.target.value));
      globalInput.addEventListener('focus', () => {
        if (globalInput.value.trim().length > 0) {
          this.renderGlobalDropdown(globalInput.value.trim());
        }
      });
      globalInput.addEventListener('click', () => {
        if (globalInput.value.trim().length > 0) {
          this.renderGlobalDropdown(globalInput.value.trim());
        }
      });
      globalInput.addEventListener('blur', () => {
        setTimeout(() => this.closeGlobalDropdown(), 180);
      });
      globalInput.addEventListener('keydown', (e) => this.handleSearchKeydown(e));
    }

    if (heroInput) {
      heroInput.addEventListener('input', (e) => {
        if (globalInput) {
          globalInput.value = e.target.value;
          if (clearBtn) clearBtn.classList.toggle('hidden', e.target.value.trim().length === 0);
        }
        onSearchInput(e.target.value);
      });
      heroInput.addEventListener('focus', () => {
        if (heroInput.value.trim().length > 0) {
          this.renderGlobalDropdown(heroInput.value.trim());
        }
      });
      heroInput.addEventListener('click', () => {
        if (heroInput.value.trim().length > 0) {
          this.renderGlobalDropdown(heroInput.value.trim());
        }
      });
      heroInput.addEventListener('blur', () => {
        setTimeout(() => this.closeGlobalDropdown(), 180);
      });
      heroInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          this.triggerHeroSearch();
        }
      });
    }

    // Battle Arena Fighter 1 & 2 search bar click/focus listeners
    const fighter1Input = document.getElementById('fighter-1-search');
    if (fighter1Input) {
      fighter1Input.addEventListener('focus', () => this.filterFighters(1, fighter1Input.value));
      fighter1Input.addEventListener('click', () => this.filterFighters(1, fighter1Input.value));
      fighter1Input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const drop1 = document.getElementById('fighter-1-dropdown');
          const firstItem = drop1 ? drop1.querySelector('.fighter-drop-item') : null;
          if (firstItem && firstItem.dataset.id) {
            this.selectFighter(1, firstItem.dataset.id);
          }
        }
      });
      fighter1Input.addEventListener('blur', () => {
        setTimeout(() => {
          const drop1 = document.getElementById('fighter-1-dropdown');
          if (drop1) drop1.classList.add('hidden');
        }, 180);
      });
    }

    const fighter2Input = document.getElementById('fighter-2-search');
    if (fighter2Input) {
      fighter2Input.addEventListener('focus', () => this.filterFighters(2, fighter2Input.value));
      fighter2Input.addEventListener('click', () => this.filterFighters(2, fighter2Input.value));
      fighter2Input.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') {
          const drop2 = document.getElementById('fighter-2-dropdown');
          const firstItem = drop2 ? drop2.querySelector('.fighter-drop-item') : null;
          if (firstItem && firstItem.dataset.id) {
            this.selectFighter(2, firstItem.dataset.id);
          }
        }
      });
      fighter2Input.addEventListener('blur', () => {
        setTimeout(() => {
          const drop2 = document.getElementById('fighter-2-dropdown');
          if (drop2) drop2.classList.add('hidden');
        }, 180);
      });
    }

    // Keyboard shortcut '/' to quickly focus search
    window.addEventListener('keydown', (e) => {
      const active = document.activeElement;
      if (e.key === '/' && active !== globalInput && active !== heroInput && (!active || active.tagName !== 'INPUT')) {
        e.preventDefault();
        if (globalInput) {
          globalInput.focus();
          globalInput.select();
        }
      }
    });

    // Click outside to close dropdown
    document.addEventListener('click', (e) => {
      if (!e.target.closest('.header-search-wrap') && !e.target.closest('.quick-search-section')) {
        this.closeGlobalDropdown();
      }
      if (!e.target.closest('.fighter-search-box')) {
        const drop1 = document.getElementById('fighter-1-dropdown');
        const drop2 = document.getElementById('fighter-2-dropdown');
        if (drop1) drop1.classList.add('hidden');
        if (drop2) drop2.classList.add('hidden');
      }
    });
  }

  handleSearchKeydown(e) {
    const dropdown = document.getElementById('global-search-dropdown');
    if (!dropdown || dropdown.classList.contains('hidden')) {
      if (e.key === 'Enter') {
        const q = e.target.value.trim();
        if (q) this.showAllSearchResults(q);
      }
      return;
    }

    const items = dropdown.querySelectorAll('.search-dropdown-item');
    if (items.length === 0) {
      if (e.key === 'Enter') {
        const q = e.target.value.trim();
        if (q) this.showAllSearchResults(q);
      }
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.globalActiveIndex = (this.globalActiveIndex + 1) % items.length;
      this.updateDropdownActiveItem(items);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.globalActiveIndex = (this.globalActiveIndex - 1 + items.length) % items.length;
      this.updateDropdownActiveItem(items);
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (this.globalActiveIndex >= 0 && items[this.globalActiveIndex]) {
        items[this.globalActiveIndex].click();
      } else {
        const q = e.target.value.trim();
        if (q) this.showAllSearchResults(q);
      }
    } else if (e.key === 'Escape') {
      this.closeGlobalDropdown();
    }
  }

  updateDropdownActiveItem(items) {
    items.forEach((it, idx) => {
      it.classList.toggle('active-item', idx === this.globalActiveIndex);
    });
    if (this.globalActiveIndex >= 0 && items[this.globalActiveIndex]) {
      items[this.globalActiveIndex].scrollIntoView({ block: 'nearest' });
    }
  }

  renderGlobalDropdown(query) {
    const dropdown = document.getElementById('global-search-dropdown');
    if (!dropdown) return;

    this.globalActiveIndex = -1;
    const results = this.searchAllSpecies(query);

    if (results.length === 0) {
      const emptyTitle = window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? `未找到與「${query}」相關的物種` :
                         (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? `No se encontraron especies para "${query}"` :
                         `No species found for "${query}"`);
      const emptyHint = window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '請嘗試搜尋「青蛙」、「獅子」、「肉食性」、「雨林」或「瀕危」' :
                        (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? 'Prueba buscando "rana", "león", "carnívoro", "selva" o "amenazada"' :
                        'Try searching "frog", "lion", "carnivore", "rainforest", or "endangered"');
      dropdown.innerHTML = `
        <div class="search-empty-state">
          <div style="font-size: 1.8rem; margin-bottom: 6px;">🔍</div>
          <strong>${emptyTitle}</strong>
          <p style="font-size: 0.82rem; color: #78716c; margin-top: 4px;">${emptyHint}</p>
        </div>
      `;
      dropdown.classList.remove('hidden');
      return;
    }

    const topResults = results.slice(0, 7);
    const headerCount = window.AK_I18N ? window.AK_I18N.t('found_global', { count: results.length }) : `Found ${results.length} species across all zones`;
    const headerNav = window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? '↑↓ 導航 • Enter 選擇' :
                      (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? '↑↓ navegar • Enter seleccionar' :
                      '↑↓ to navigate • Enter to select');
    const footerText = window.AK_I18N && window.AK_I18N.getLanguage() === 'zh' ? `在探索專區查看全部 ${results.length} 個結果 ➡️` :
                       (window.AK_I18N && window.AK_I18N.getLanguage() === 'es' ? `Ver todos los ${results.length} resultados en la Zona ➡️` :
                       `Show all ${results.length} results in Animal Zone ➡️`);

    dropdown.innerHTML = `
      <div class="dropdown-header-bar">
        <span>${headerCount}</span>
        <span style="font-size: 0.75rem; color: #94a3b8;">${headerNav}</span>
      </div>
      <div class="search-dropdown-list">
        ${topResults.map(a => {
          const locName = window.AK_I18N ? window.AK_I18N.getSpeciesName(a) : a.name;
          const locCat = window.AK_I18N ? window.AK_I18N.t('zone_' + a.category) : a.category;
          const locHab = window.AK_I18N ? window.AK_I18N.getSpeciesHabitat(a) : a.habitat;
          return `
          <div class="search-dropdown-item" onclick="window.app.openAnimalDetail('${a.id}'); window.app.closeGlobalDropdown();">
            <img class="search-dropdown-thumb" src="${this.formatImageUrl(a.image, 100)}" alt="${a.name}" onerror="window.app.handleImageError(this, '${a.category}', '${a.emoji}', '${a.name.replace(/'/g, "\\'")}')">
            <div class="search-dropdown-info">
              <div class="search-dropdown-title-row">
                <span class="search-dropdown-name">${a.emoji} ${this.highlightMatch(locName, query)}</span>
                <span class="dropdown-cat-tag ${a.category}">${locCat}</span>
              </div>
              <div class="search-dropdown-sub">
                <em>${a.scientific}</em> • 🌍 ${this.truncateText(locHab, 36)}
              </div>
            </div>
          </div>
        `}).join('')}
      </div>
      <div class="search-dropdown-footer">
        <button class="btn-see-all-results" onclick="window.app.showAllSearchResults('${query.replace(/'/g, "\\'")}')">
          ${footerText}
        </button>
      </div>
    `;
    dropdown.classList.remove('hidden');
  }

  closeGlobalDropdown() {
    const dropdown = document.getElementById('global-search-dropdown');
    if (dropdown) dropdown.classList.add('hidden');
    this.globalActiveIndex = -1;
  }

  clearGlobalSearch() {
    const globalInput = document.getElementById('global-search-input');
    const heroInput = document.getElementById('hero-search-input');
    const clearBtn = document.getElementById('global-search-clear');
    const heroClearBtn = document.getElementById('hero-search-clear');
    if (globalInput) globalInput.value = '';
    if (heroInput) heroInput.value = '';
    if (clearBtn) clearBtn.classList.add('hidden');
    if (heroClearBtn) heroClearBtn.classList.add('hidden');
    this.closeGlobalDropdown();
    if (this.isGlobalSearch) {
      this.isGlobalSearch = false;
      this.searchQuery = '';
      this.selectCategory(this.currentCategory);
    }
  }

  clearHeroSearch() {
    this.clearGlobalSearch();
  }

  triggerGlobalSearch() {
    const globalInput = document.getElementById('global-search-input');
    const q = globalInput ? globalInput.value.trim() : '';
    if (q) {
      this.closeGlobalDropdown();
      this.showAllSearchResults(q);
      if (window.AK_AUDIO && window.AK_AUDIO.playPop) {
        window.AK_AUDIO.playPop(520);
      }
    } else if (globalInput) {
      globalInput.focus();
    }
  }

  triggerHeroSearch() {
    const heroInput = document.getElementById('hero-search-input');
    if (heroInput && heroInput.value.trim()) {
      this.showAllSearchResults(heroInput.value.trim());
    }
  }

  applySearchTag(tag) {
    this.showAllSearchResults(tag);
  }

  renderPopularSearchTags() {
    const container = document.getElementById('popular-search-tags-container');
    if (!container) return;
    const lang = window.AK_I18N ? window.AK_I18N.getLanguage() : 'en';
    const label = window.AK_I18N ? window.AK_I18N.t('popular_searches_label') : 'Popular Searches:';

    const tagsByLang = {
      zh: [
        { label: '🦎 豹紋守宮', query: '豹紋守宮' },
        { label: '🐍 球蟒', query: '球蟒' },
        { label: '👑 眼鏡王蛇', query: '眼鏡王蛇' },
        { label: '🦎 鬃獅蜥', query: '鬃獅蜥' },
        { label: '🐢 箱龜', query: '箱龜' },
        { label: '💎 天然鑽石', query: '鑽石' },
        { label: '💚 祖母綠', query: '祖母綠' },
        { label: '🌹 玫瑰', query: '玫瑰' },
        { label: '❄️ 雪之妖精 (銀喉長尾山雀)', query: '雪之妖精' },
        { label: '🦎 墨西哥蠑螈', query: '墨西哥蠑螈' },
        { label: '🦁 非洲獅', query: '非洲獅' },
        { label: '🐋 虎鯨', query: '虎鯨' },
        { label: '🦋 帝王斑蝶', query: '帝王斑蝶' },
        { label: '🦅 紅尾鵟', query: '紅尾鵟' }
      ],
      es: [
        { label: '🦎 Gecko Leopardo', query: 'Gecko Leopardo' },
        { label: '🐍 Pitón Real', query: 'Pitón Real' },
        { label: '👑 Cobra Real', query: 'Cobra Real' },
        { label: '🦎 Dragón Barbudo', query: 'Dragón Barbudo' },
        { label: '🐢 Tortuga de Caja', query: 'Tortuga de Caja' },
        { label: '💎 Diamante', query: 'Diamante' },
        { label: '💚 Esmeralda', query: 'Esmeralda' },
        { label: '🌹 Rosa', query: 'Rosa' },
        { label: '❄️ Hada de la Nieve', query: 'Hada de la Nieve' },
        { label: '🦎 Ajolote', query: 'Ajolote' },
        { label: '🦁 León Africano', query: 'León' },
        { label: '🐋 Orca', query: 'Orca' },
        { label: '🦋 Mariposa Monarca', query: 'Monarca' },
        { label: '🦅 Halcón Colirrojo', query: 'Halcón' }
      ],
      en: [
        { label: '🦎 Leopard Gecko', query: 'Leopard Gecko' },
        { label: '🐍 Ball Python', query: 'Ball Python' },
        { label: '👑 King Cobra', query: 'King Cobra' },
        { label: '🦎 Bearded Dragon', query: 'Bearded Dragon' },
        { label: '🐢 Box Turtle', query: 'Eastern Box Turtle' },
        { label: '💎 Diamond', query: 'Diamond' },
        { label: '💚 Emerald', query: 'Emerald' },
        { label: '🌹 Rose', query: 'Rose' },
        { label: '❄️ Snow Fairy (Shima Enaga)', query: 'Snow Fairy' },
        { label: '🦎 Axolotl', query: 'Axolotl' },
        { label: '🦁 Lion', query: 'African Lion' },
        { label: '🐋 Orca', query: 'Killer Whale' },
        { label: '🦋 Monarch', query: 'Monarch Butterfly' },
        { label: '🦅 Hawk', query: 'Red-Tailed Hawk' }
      ]
    };

    const tags = tagsByLang[lang] || tagsByLang.en;
    container.innerHTML = `
      <span class="tags-label" data-i18n="popular_searches_label">${label}</span>
      ${tags.map(t => `<button class="tag-pill" onclick="window.app.applySearchTag('${t.query.replace(/'/g, "\\'")}')">${t.label}</button>`).join('')}
    `;
  }

  showAllSearchResults(query) {
    if (!query || !query.trim()) return;
    this.currentView = 'category';
    this.isGlobalSearch = true;
    this.searchQuery = query.trim();
    this.activeFilter = 'all';

    // Switch views: hide home, show category view
    const homeView = document.getElementById('home-view');
    const catView = document.getElementById('category-view');
    if (homeView) homeView.classList.add('hidden');
    if (catView) catView.classList.remove('hidden');

    // Sync inputs
    const globalInput = document.getElementById('global-search-input');
    const heroInput = document.getElementById('hero-search-input');
    const searchInput = document.getElementById('search-input');
    const clearBtn = document.getElementById('global-search-clear');
    if (globalInput) globalInput.value = this.searchQuery;
    if (heroInput) heroInput.value = this.searchQuery;
    if (searchInput) searchInput.value = this.searchQuery;
    if (clearBtn) clearBtn.classList.remove('hidden');

    this.closeGlobalDropdown();
    this.renderCategoryZone();

    // Scroll smoothly to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  searchAllSpecies(query) {
    if (!query || !query.trim()) return [];
    const q = query.toLowerCase().trim();
    const all = window.AK_AOD.getAllAnimals();

    return all.filter(a => {
      const trans = window.AK_SPECIES_NAMES && window.AK_SPECIES_NAMES[a.id];
      const bio = window.AK_SPECIES_BIO && window.AK_SPECIES_BIO[a.id];
      const full = [
        a.name, a.scientific, a.category, a.habitat, a.diet, a.description, a.endangered, a.funFact, a.predators,
        trans ? trans.zh : '', trans ? trans.es : '',
        bio ? bio.habZh : '', bio ? bio.habEs : '',
        bio ? bio.dietZh : '', bio ? bio.dietEs : '',
        bio ? bio.descZh : '', bio ? bio.descEs : '',
        bio ? bio.funZh : '', bio ? bio.funEs : '',
        bio ? bio.tagZh : '', bio ? bio.tagEs : ''
      ].filter(Boolean).join(' ').toLowerCase();

      return full.includes(q);
    }).sort((x, y) => {
      const xLoc = (window.AK_I18N ? window.AK_I18N.getSpeciesName(x) : x.name).toLowerCase();
      const yLoc = (window.AK_I18N ? window.AK_I18N.getSpeciesName(y) : y.name).toLowerCase();
      if (xLoc === q && yLoc !== q) return -1;
      if (yLoc === q && xLoc !== q) return 1;
      if (xLoc.startsWith(q) && !yLoc.startsWith(q)) return -1;
      if (yLoc.startsWith(q) && !xLoc.startsWith(q)) return 1;
      return 0;
    });
  }

  highlightMatch(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.replace(regex, '<mark style="background: #fef08a; padding: 1px 3px; border-radius: 3px;">$1</mark>');
  }

  playAnimalVocalization(speciesId, btn) {
    const item = this.getAnimalById(speciesId);
    if (!item) return;

    if (btn) {
      btn.classList.add('playing');
      setTimeout(() => btn.classList.remove('playing'), 2400);
    }

    if (window.AK_AUDIO && window.AK_AUDIO.playAnimalSound) {
      window.AK_AUDIO.playAnimalSound(item);
    }

    setTimeout(() => {
      if (window.AK_AUDIO && window.AK_AUDIO.speakAnimalText) {
        window.AK_AUDIO.speakAnimalText(`I am the ${item.name}! Did you know? ${item.funFact}`);
      }
    }, 800);
  }

  speakFunFact(speciesId, btn) {
    const item = this.getAnimalById(speciesId);
    if (!item || !item.funFact) return;

    if (btn) {
      btn.classList.add('speaking-active');
      setTimeout(() => btn.classList.remove('speaking-active'), 4500);
    }

    if (window.AK_AUDIO && window.AK_AUDIO.speakAnimalText) {
      window.AK_AUDIO.speakAnimalText(`Fun fact about the ${item.name}: ${item.funFact}`);
    }
  }

  // =========================================================
  // CREATURE FACE-OFF BATTLE ARENA METHODS (100% LIVING ANIMALS)
  // =========================================================
  getAllBattleCreatures() {
    const all = window.AK_AOD.getAllAnimals();
    // Exclude plants and gemstones (rocks) - Arena is strictly for living animals
    return all.filter(a => !['plants', 'gemstones'].includes(a.category));
  }

  openBattleArena(fighter1Id = null, fighter2Id = null) {
    window.AK_AUDIO.playPop(520);
    const modal = document.getElementById('battle-modal');
    if (!modal) return;

    const creatures = this.getAllBattleCreatures();
    if (!creatures || creatures.length === 0) return;

    if (fighter1Id) {
      const candidate = this.getAnimalById(fighter1Id);
      if (candidate && !['plants', 'gemstones'].includes(candidate.category)) {
        this.battleFighter1 = candidate;
      }
    }
    if (!this.battleFighter1 || ['plants', 'gemstones'].includes(this.battleFighter1.category)) {
      this.battleFighter1 = this.getAnimalById('land-1') || creatures[0];
    }

    if (fighter2Id) {
      const candidate = this.getAnimalById(fighter2Id);
      if (candidate && !['plants', 'gemstones'].includes(candidate.category)) {
        this.battleFighter2 = candidate;
      }
    }
    if (!this.battleFighter2 || ['plants', 'gemstones'].includes(this.battleFighter2.category)) {
      this.battleFighter2 = this.getAnimalById('land-2') || creatures[1];
    }

    this.renderBattlePresets();
    this.renderBattleStage();

    const resultsPanel = document.getElementById('battle-results-panel');
    if (resultsPanel) resultsPanel.classList.add('hidden');

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  closeBattleArena() {
    const modal = document.getElementById('battle-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
  }

  renderBattlePresets() {
    const container = document.getElementById('arena-presets-list');
    if (!container || !window.CREATURE_BATTLE) return;

    container.innerHTML = window.CREATURE_BATTLE.legendaryMatchups.map(m => `
      <button class="preset-pill-btn" onclick="window.app.openBattleArena('${m.id1}', '${m.id2}')" title="${m.name}">
        ${m.name}
      </button>
    `).join('');
  }

  renderBattleStage() {
    if (!window.CREATURE_BATTLE) return;
    const f1 = this.battleFighter1;
    const f2 = this.battleFighter2;
    if (!f1 || !f2) return;

    const s1 = window.CREATURE_BATTLE.getCreatureStats(f1);
    const s2 = window.CREATURE_BATTLE.getCreatureStats(f2);
    const locName1 = window.AK_I18N ? window.AK_I18N.getSpeciesName(f1) : f1.name;
    const locName2 = window.AK_I18N ? window.AK_I18N.getSpeciesName(f2) : f2.name;
    const superLabel = window.AK_I18N ? window.AK_I18N.t('battle_stat_superpower') : '⚡ Superpower:';
    const wepLabel = window.AK_I18N ? window.AK_I18N.t('battle_stat_weapon') : '⚔️ Weapon:';

    // Fighter 1 Display
    const f1Container = document.getElementById('fighter-1-display');
    if (f1Container) {
      f1Container.innerHTML = `
        <div class="fighter-img-wrap">
          <img src="${this.formatImageUrl(f1.image, 600)}" alt="${f1.name}" onerror="window.app.handleImageError(this, '${f1.category}', '${f1.emoji}', '${f1.name.replace(/'/g, "\\'")}')">
        </div>
        <h3 class="fighter-name">${f1.emoji} ${locName1}</h3>
        <div class="fighter-sci">${f1.scientific}</div>
        <div class="fighter-badge-row">
          <span class="fighter-spec-badge">⚖️ ${s1.weightFormatted}</span>
          <span class="fighter-spec-badge">⚡ ${s1.speedFormatted}</span>
          <span class="fighter-spec-badge">💥 ${s1.biteFormatted}</span>
          <span class="fighter-spec-badge">🛡️ Armor ${s1.armorRating}/100</span>
        </div>
        <div class="fighter-superpower-box">
          <strong>${superLabel}</strong> ${s1.superpower}<br>
          <strong>${wepLabel}</strong> ${s1.primaryWeapon}
        </div>
      `;
    }

    // Fighter 2 Display
    const f2Container = document.getElementById('fighter-2-display');
    if (f2Container) {
      f2Container.innerHTML = `
        <div class="fighter-img-wrap">
          <img src="${this.formatImageUrl(f2.image, 600)}" alt="${f2.name}" onerror="window.app.handleImageError(this, '${f2.category}', '${f2.emoji}', '${f2.name.replace(/'/g, "\\'")}')">
        </div>
        <h3 class="fighter-name">${f2.emoji} ${locName2}</h3>
        <div class="fighter-sci">${f2.scientific}</div>
        <div class="fighter-badge-row">
          <span class="fighter-spec-badge">⚖️ ${s2.weightFormatted}</span>
          <span class="fighter-spec-badge">⚡ ${s2.speedFormatted}</span>
          <span class="fighter-spec-badge">💥 ${s2.biteFormatted}</span>
          <span class="fighter-spec-badge">🛡️ Armor ${s2.armorRating}/100</span>
        </div>
        <div class="fighter-superpower-box">
          <strong>${superLabel}</strong> ${s2.superpower}<br>
          <strong>${wepLabel}</strong> ${s2.primaryWeapon}
        </div>
      `;
    }

    // Comparative Stat Bars
    const statContainer = document.getElementById('arena-stat-comparison');
    if (statContainer) {
      const statsList = [
        { label: '🏃 Top Sprint Speed', val1: s1.speedMph, val2: s2.speedMph, txt1: s1.speedFormatted, txt2: s2.speedFormatted, max: 240 },
        { label: '💥 Bite Force & Strike Power', val1: s1.biteForcePsi, val2: s2.biteForcePsi, txt1: s1.biteFormatted, txt2: s2.biteFormatted, max: 5000 },
        { label: '🛡️ Natural Hide & Armor Density', val1: s1.armorRating, val2: s2.armorRating, txt1: s1.armorRating + '%', txt2: s2.armorRating + '%', max: 100 },
        { label: '☠️ Venom Lethality & Superpowers', val1: s1.venomLethality, val2: s2.venomLethality, txt1: s1.venomLethality + '%', txt2: s2.venomLethality + '%', max: 100 },
        { label: '🌟 Overall Combat Power Rating', val1: s1.combatPower, val2: s2.combatPower, txt1: s1.combatPower + '/99', txt2: s2.combatPower + '/99', max: 100 }
      ];

      statContainer.innerHTML = `
        <h4 class="stat-compare-title">📊 HEAD-TO-HEAD BIOLOGICAL ATTRIBUTE COMPARISON</h4>
        ${statsList.map(st => {
          const pct1 = Math.min(100, Math.max(5, (st.val1 / (st.max || 100)) * 100));
          const pct2 = Math.min(100, Math.max(5, (st.val2 / (st.max || 100)) * 100));
          return `
            <div class="stat-compare-row">
              <div class="stat-row-header">
                <span class="stat-row-val-left">${st.txt1}</span>
                <span class="stat-row-label">${st.label}</span>
                <span class="stat-row-val-right">${st.txt2}</span>
              </div>
              <div class="stat-bars-track">
                <div class="stat-bar-left-wrap">
                  <div class="stat-bar-left" style="width: ${pct1}%;"></div>
                </div>
                <div class="stat-bar-right-wrap">
                  <div class="stat-bar-right" style="width: ${pct2}%;"></div>
                </div>
              </div>
            </div>
          `;
        }).join('')}
      `;
    }
  }

  filterFighters(corner, query) {
    const dropdown = document.getElementById(`fighter-${corner}-dropdown`);
    const clearBtn = document.getElementById(`fighter-${corner}-clear`);
    if (clearBtn) clearBtn.classList.toggle('hidden', !query || query.trim().length === 0);
    if (!dropdown) return;

    if (!query || query.trim().length === 0) {
      dropdown.classList.add('hidden');
      return;
    }

    const creatures = this.getAllBattleCreatures();
    const q = query.toLowerCase().trim();
    const exactWordRegex = new RegExp('\\b' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '\\b', 'i');
    const startWordRegex = new RegExp('\\b' + q.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');

    const scoredMatches = [];
    for (const a of creatures) {
      const name = a.name.toLowerCase();
      const sci = a.scientific.toLowerCase();
      const category = (a.category || '').toLowerCase();

      let score = 0;
      if (name === q) {
        score += 300;
      } else if (name.startsWith(q + ' ') || name.startsWith(q + '(')) {
        score += 250;
      } else if (exactWordRegex.test(name)) {
        score += 200;
      } else if (startWordRegex.test(name)) {
        score += 150;
      } else if (name.includes(q)) {
        score += 100;
      } else if (exactWordRegex.test(sci) || sci.startsWith(q)) {
        score += 50;
      } else if (category === q) {
        score += 20;
      }

      if (score > 0) {
        scoredMatches.push({ animal: a, score });
      }
    }

    scoredMatches.sort((a, b) => b.score - a.score);
    const matches = scoredMatches.slice(0, 12).map(m => m.animal);

    if (matches.length === 0) {
      dropdown.innerHTML = '<div style="padding: 12px; color: #94a3b8; font-size: 0.85rem; text-align: center;">No animals found matching "' + q + '"</div>';
      dropdown.classList.remove('hidden');
      return;
    }

    dropdown.innerHTML = matches.map(a => `
      <div class="fighter-drop-item"
           data-id="${a.id}"
           onpointerdown="event.stopPropagation(); window.app.selectFighter(${corner}, '${a.id}')"
           onmousedown="event.stopPropagation(); window.app.selectFighter(${corner}, '${a.id}')"
           onclick="event.stopPropagation(); window.app.selectFighter(${corner}, '${a.id}')">
        <img src="${this.formatImageUrl(a.image, 100)}" alt="${a.name}" class="fighter-drop-thumb" onerror="this.src='https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=100&q=80'">
        <div style="flex: 1; min-width: 0;">
          <div class="fighter-drop-name">${a.emoji} ${a.name}</div>
          <div class="fighter-drop-zone">${(a.category || '').toUpperCase()} • ${a.scientific}</div>
        </div>
        <span class="fighter-select-pill">SELECT ➔</span>
      </div>
    `).join('');

    dropdown.classList.remove('hidden');
  }

  selectFighter(corner, id) {
    const specimen = this.getAnimalById(id);
    if (!specimen) return;

    if (corner === 1) {
      this.battleFighter1 = specimen;
      const input = document.getElementById('fighter-1-search');
      const clearBtn = document.getElementById('fighter-1-clear');
      if (input) {
        input.value = '';
        input.blur();
      }
      if (clearBtn) clearBtn.classList.add('hidden');
      const dropdown = document.getElementById('fighter-1-dropdown');
      if (dropdown) dropdown.classList.add('hidden');
    } else {
      this.battleFighter2 = specimen;
      const input = document.getElementById('fighter-2-search');
      const clearBtn = document.getElementById('fighter-2-clear');
      if (input) {
        input.value = '';
        input.blur();
      }
      if (clearBtn) clearBtn.classList.add('hidden');
      const dropdown = document.getElementById('fighter-2-dropdown');
      if (dropdown) dropdown.classList.add('hidden');
    }

    // Play creature sound
    window.AK_AUDIO.playAnimalSound(specimen);

    // Re-render stage with updated creature
    this.renderBattleStage();

    // Pulse animation on the updated fighter pod
    const pod = document.getElementById(`fighter-${corner}-pod`);
    if (pod) {
      pod.classList.remove('pod-selected-pulse');
      void pod.offsetWidth; // trigger reflow
      pod.classList.add('pod-selected-pulse');
    }

    // Reset combat log panel until simulate button is clicked
    const resultsPanel = document.getElementById('battle-results-panel');
    if (resultsPanel) resultsPanel.classList.add('hidden');
  }

  clearFighterSearch(corner) {
    const input = document.getElementById(`fighter-${corner}-search`);
    const clearBtn = document.getElementById(`fighter-${corner}-clear`);
    const dropdown = document.getElementById(`fighter-${corner}-dropdown`);
    if (input) input.value = '';
    if (clearBtn) clearBtn.classList.add('hidden');
    if (dropdown) dropdown.classList.add('hidden');
  }

  swapFighters() {
    window.AK_AUDIO.playPop(440);
    const temp = this.battleFighter1;
    this.battleFighter1 = this.battleFighter2;
    this.battleFighter2 = temp;
    this.renderBattleStage();

    const resultsPanel = document.getElementById('battle-results-panel');
    if (resultsPanel) resultsPanel.classList.add('hidden');
  }

  randomizeFighters() {
    window.AK_AUDIO.playPop(660);
    const creatures = this.getAllBattleCreatures();
    if (!creatures || creatures.length < 2) return;

    const r1 = Math.floor(Math.random() * creatures.length);
    let r2 = Math.floor(Math.random() * creatures.length);
    while (r2 === r1) r2 = Math.floor(Math.random() * creatures.length);

    this.battleFighter1 = creatures[r1];
    this.battleFighter2 = creatures[r2];
    this.renderBattleStage();

    const resultsPanel = document.getElementById('battle-results-panel');
    if (resultsPanel) resultsPanel.classList.add('hidden');
  }

  startBattleSimulation() {
    if (!window.CREATURE_BATTLE) return;
    const f1 = this.battleFighter1;
    const f2 = this.battleFighter2;
    if (!f1 || !f2) return;

    // Play Fighter 1's roar, then Fighter 2's roar
    window.AK_AUDIO.playAnimalSound(f1);
    setTimeout(() => {
      window.AK_AUDIO.playAnimalSound(f2);
    }, 1200);

    const sim = window.CREATURE_BATTLE.simulateMatchup(f1, f2);
    if (!sim) return;

    const resultsPanel = document.getElementById('battle-results-panel');
    if (!resultsPanel) return;

    const locWinnerName = window.AK_I18N ? window.AK_I18N.getSpeciesName(sim.winner) : sim.winner.name;
    const winnerBanner = window.AK_I18N ? window.AK_I18N.t('battle_winner_banner', { name: locWinnerName }) : `🏆 VICTORY TO ${locWinnerName.toUpperCase()}!`;

    resultsPanel.innerHTML = `
      <div class="victory-banner">
        <div class="victory-crown">👑</div>
        <h3 class="victory-title">${winnerBanner}</h3>
        <p class="victory-verdict">${this.formatMarkdownParagraph(sim.verdictReason)}</p>
      </div>

      <div class="rounds-container">
        ${sim.rounds.map(r => `
          <div class="round-card">
            <h5 class="round-title">⚔️ ${r.title}</h5>
            <p class="round-log-text">${this.formatMarkdownParagraph(r.log)}</p>
            <div class="round-hp-bars">
              <div class="hp-bar-item">
                <span style="color: #f87171;">${f1.name}: ${r.hp1}% HP</span>
                <div class="hp-track">
                  <div class="hp-fill-1" style="width: ${r.hp1}%;"></div>
                </div>
              </div>
              <div class="hp-bar-item">
                <span style="color: #60a5fa;">${f2.name}: ${r.hp2}% HP</span>
                <div class="hp-track">
                  <div class="hp-fill-2" style="width: ${r.hp2}%;"></div>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    `;

    resultsPanel.classList.remove('hidden');
    resultsPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

window.AnimalKingdomApp = AnimalKingdomApp;

// Global instance
window.addEventListener('DOMContentLoaded', () => {
  window.app = new AnimalKingdomApp();
  window.app.init();
});

window.openBackgroundModal = function() {
  if (window.app && window.app.openBackgroundModal) {
    window.app.openBackgroundModal();
  }
};
window.closeBackgroundModal = function() {
  if (window.app && window.app.closeBackgroundModal) {
    window.app.closeBackgroundModal();
  }
};

// ==========================================
// FULL PAGE FAN CLUB & LIVE CHAT
// ==========================================
window.openFanClubPage = function() {
  if (!window.fanClubUser) {
    document.getElementById('fc-login-overlay').classList.remove('hidden');
  } else {
    document.getElementById('fc-login-overlay').classList.add('hidden');
  }
  document.getElementById('fan-club-page').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(500);
  startChatPolling();
};
window.closeFanClubPage = function() {
  document.getElementById('fan-club-page').classList.add('hidden');
  document.body.style.overflow = '';
  stopChatPolling();
};

let chatInterval = null;
function startChatPolling() {
  fetchChat();
  chatInterval = setInterval(fetchChat, 2000);
}
function stopChatPolling() {
  if (chatInterval) clearInterval(chatInterval);
}
async function fetchChat(forceScroll = false) {
  try {
    const res = await fetch('/api/chat');
    const msgs = await res.json();
    const box = document.getElementById('fc-chat-box');
    const isBottom = box.scrollHeight - box.scrollTop <= box.clientHeight + 20;
    
    box.innerHTML = msgs.map(m => {
      const isMe = m.user === window.fanClubUser;
      const alignClass = isMe ? 'fc-msg-me' : 'fc-msg-other';
      return `<div class="fc-chat-msg ${alignClass}"><strong>${m.user}</strong>${m.text}</div>`;
    }).join('');
    
    if (isBottom || forceScroll) {
      box.scrollTop = box.scrollHeight;
    }
  } catch (e) { }
}

window.sendChatMessage = async function() {
  const name = window.fanClubUser || 'Explorer';
  const input = document.getElementById('fc-chat-msg');
  const text = input.value.trim();
  if (!text) return;
  input.value = '';
  try {
    await fetch('/api/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user: name, text: text })
    });
    fetchChat(true); // Force scroll on send
  } catch (e) { }
};

window.handleDrawingUpload = function(event) {
  const files = event.target.files;
  if (!files || files.length === 0) return;
  const gallery = document.getElementById('fc-drawing-gallery');
  const grid = document.getElementById('fc-drawing-grid');
  gallery.classList.remove('hidden');
  for(let file of files) {
    const reader = new FileReader();
    reader.onload = function(e) {
      const img = document.createElement('img');
      img.src = e.target.result;
      grid.appendChild(img);
      if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(800);
    }
    reader.readAsDataURL(file);
  }
};
window.generateHubBadge = function() {
  const animal = document.getElementById('fc-fav-animal').value || 'an awesome animal';
  if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(400);
  alert('Welcome to the Safari Fan Club! Your favorite animal is ' + animal + '. Stay wild!');
  const confettiLayer = document.getElementById('confetti-layer');
  if (confettiLayer) {
    let html = '';
    for (let i = 0; i < 30; i++) {
      html += `<div class="confetti" style="left: ${Math.random() * 100}%; animation-delay: ${Math.random()}s">🎉</div>`;
    }
    confettiLayer.innerHTML = html;
    setTimeout(() => { confettiLayer.innerHTML = ''; }, 3000);
  }
};

// --- LOGIN & EVENTS LOGIC ---
window.fanClubUser = null;

window.submitFanClubLogin = function() {
  const user = document.getElementById('fc-login-user').value.trim();
  if (!user) { alert('Please enter a username!'); return; }
  window.fanClubUser = user;
  document.getElementById('fc-login-overlay').classList.add('hidden');
  document.getElementById('fc-chat-name-label').textContent = user + ':';
  if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(500);
  renderDailyEvents();
};

const allFanEvents = [
  { dayOffset: 0, title: "??? Draw a Honey Badger", desc: "Submit your best Honey Badger drawing!" },
  { dayOffset: 1, title: "?? Mammal Trivia Showdown", desc: "Test your knowledge on mammals." },
  { dayOffset: 2, title: "?? Live Kenya Safari Cam", desc: "Watch the elephants gather at the watering hole." },
  { dayOffset: 3, title: "??? Vote: Best Big Cat", desc: "Lion vs Tiger vs Leopard vs Jaguar." },
  { dayOffset: 4, title: "??? Draw a Deep Sea Creature", desc: "Time to go deep! Draw an anglerfish or squid." },
  { dayOffset: 5, title: "?? Bird Calls Quiz", desc: "Can you identify these 10 bird calls?" },
  { dayOffset: 6, title: "?? Live Monarch Migration Cam", desc: "Watch the butterflies arriving in Mexico." },
  { dayOffset: 7, title: "??? Vote: Scariest Reptile", desc: "Komodo Dragon vs Saltwater Crocodile." },
  { dayOffset: 8, title: "??? Draw an Ice Age Beast", desc: "Mammoth, Sabertooth, or Sloth!" },
  { dayOffset: 9, title: "?? Amazon Rainforest Trivia", desc: "How well do you know the jungle?" },
  { dayOffset: 10, title: "?? Live Shark Cam", desc: "Great Whites spotted off the coast!" }
];

function renderDailyEvents() {
  // Simulate days passing by taking the day of the month as a dynamic offset
  // We'll reveal up to the current day of the month + some offset
  const today = new Date();
  // For demo, let's say dayOffset <= (today.getDate() % 15) are revealed
  const currentSimulatedDay = today.getDate() % 15; 
  
  const container = document.getElementById('fc-dynamic-events');
  if (!container) return;
  
  let html = '';
  let revealedCount = 0;
  
  allFanEvents.forEach((ev, i) => {
    if (ev.dayOffset <= currentSimulatedDay) {
      revealedCount++;
      // Calculate fake due date (3 days from now)
      const dueDate = new Date(today);
      dueDate.setDate(dueDate.getDate() + 3 + (i % 2));
      const dueStr = dueDate.toLocaleDateString();
      
      html += `<li style="overflow: hidden;">
        <button class="btn-event-join" id="btn-join-${i}" onclick="window.joinEvent(${i}, '${dueStr}')">Join Event</button>
        <strong>${ev.title}</strong>
        <div class="event-item-content">${ev.desc}</div>
      </li>`;
    }
  });
  
  if (revealedCount === 0) {
    html = '<li>No events today. Check back tomorrow!</li>';
  }
  container.innerHTML = html;
}

window.joinEvent = function(id, dueStr) {
  const btn = document.getElementById('btn-join-' + id);
  if (btn) {
    btn.className = 'btn-event-joined';
    btn.textContent = 'Joined! Due: ' + dueStr;
    if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(400);
  }
};

const originalHandleDrawingUpload = window.handleDrawingUpload;
window.handleDrawingUpload = function(event) {
  originalHandleDrawingUpload(event);
  setTimeout(() => {
    alert('Awesome! Your drawing has been submitted to the Fan Gallery Contest. Check back next week to see if it gets picked!');
  }, 500);
};

// --- QUIZ LOGIC ---
const quizzes = {
  personality: {
    title: '🤔 What Animal Do You Represent?',
    questions: [
      { q: "1. What's your ideal weekend environment?", options: ["Relaxing in a sunny, warm place", "Exploring a dense forest", "Swimming in the ocean", "Climbing snowy mountains"] },
      { q: "2. How do you approach a big problem?", options: ["Head on with full force", "Sneak around it cleverly", "Ask friends for help", "Wait patiently and observe"] },
      { q: "3. What's your favorite time of day?", options: ["Early morning", "Late at night", "High noon", "Sunset"] },
      { q: "4. Pick a snack:", options: ["Fresh fruit", "Sushi / Fish", "Nuts and berries", "A big hearty steak"] },
      { q: "5. What's your best trait?", options: ["I am very brave", "I am very smart", "I am very loyal", "I am very adaptable"] }
    ],
    calcResult: (score) => {
      if (score < 8) return { e: '🐼', t: 'Red Panda', d: 'You are acrobatic, love hanging out in trees, and are adorably fierce!' };
      if (score < 12) return { e: '🐋', t: 'Narwhal', d: 'You are mysterious, love the cold, and are totally unique.' };
      if (score < 16) return { e: '🐆', t: 'Snow Leopard', d: 'You are a resilient survivor who loves high peaks!' };
      return { e: '🦡', t: 'Honey Badger', d: 'You are absolutely fearless, tough, and unstoppable!' };
    }
  },
  biome: {
    title: '🌍 Which Biome Do You Belong In?',
    questions: [
      { q: "1. Pick an element:", options: ["Fire", "Water", "Earth", "Air"] },
      { q: "2. What is your ideal vacation?", options: ["A tropical island", "A snowy cabin", "A desert safari", "A bustling city"] },
      { q: "3. Pick a color palette:", options: ["Greens and Browns", "Blues and Teals", "Whites and Grays", "Oranges and Reds"] },
      { q: "4. Choose a superpower:", options: ["Invisibility", "Breathing underwater", "Super speed", "Flying"] },
      { q: "5. Pick a companion:", options: ["Parrot", "Dolphin", "Camel", "Pigeon"] }
    ],
    calcResult: (score) => {
      if (score < 7) return { e: '🌴', t: 'Tropical Rainforest', d: 'You thrive in vibrant, energetic, and colorful environments!' };
      if (score < 12) return { e: '🌊', t: 'Deep Ocean', d: 'You are calm, mysterious, and love exploring the unknown.' };
      return { e: '🌵', t: 'Desert Savanna', d: 'You are tough, sun-loving, and enjoy wide open spaces!' };
    }
  }
};

let currentQuiz = null;
let currentQIndex = 0;
let currentScore = 0;

window.openPersonalityTest = function() { startQuiz('personality'); };
window.openBiomeQuiz = function() { startQuiz('biome'); };

function startQuiz(type) {
  currentQuiz = quizzes[type];
  currentQIndex = 0;
  currentScore = 0;
  document.getElementById('fc-quiz-title').textContent = currentQuiz.title;
  document.getElementById('fc-quiz-modal').classList.remove('hidden');
  document.getElementById('fc-quiz-result').classList.add('hidden');
  document.getElementById('fc-quiz-content').classList.remove('hidden');
  renderQuizQ();
}

function renderQuizQ() {
  const content = document.getElementById('fc-quiz-content');
  if (currentQIndex >= currentQuiz.questions.length) {
    showQuizResult();
    return;
  }
  const qObj = currentQuiz.questions[currentQIndex];
  let html = `<p class="quiz-q">${qObj.q}</p>`;
  qObj.options.forEach((opt, idx) => {
    html += `<button class="quiz-btn" onclick="window.answerQuiz(${idx + 1})">${opt}</button>`;
  });
  content.innerHTML = html;
}

window.answerQuiz = function(val) {
  if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(600);
  currentScore += val;
  currentQIndex++;
  renderQuizQ();
};

function showQuizResult() {
  document.getElementById('fc-quiz-content').classList.add('hidden');
  const resData = currentQuiz.calcResult(currentScore);
  const resContainer = document.getElementById('fc-quiz-result');
  resContainer.innerHTML = `
    <div style="font-size:4rem; margin-bottom:15px;">${resData.e}</div>
    <h3>${resData.t}</h3>
    <p>${resData.d}</p>
    <button class="fc-btn-primary" onclick="document.getElementById('fc-quiz-modal').classList.add('hidden')">Awesome!</button>
  `;
  resContainer.classList.remove('hidden');
}

let wyrIndex = 0;
const wyrQuestions = [
  { q: "Would you rather have the bite force of a T-Rex or the speed of a Cheetah?", a: "Bite of a T-Rex", b: "Speed of a Cheetah" },
  { q: "Would you rather be able to breathe underwater like an Axolotl or fly like a Falcon?", a: "Breathe Underwater", b: "Fly High" },
  { q: "Would you rather have the armor of a Pangolin or the camouflage of an Octopus?", a: "Pangolin Armor", b: "Octopus Camo" },
  { q: "Would you rather face a Honey Badger in a tiny room or a Great White Shark in the open ocean?", a: "Honey Badger", b: "Great White" },
  { q: "Would you rather eat 10 pounds of raw bamboo a day or 100 live insects?", a: "Raw Bamboo", b: "Live Insects" }
];

window.openWouldYouRather = function() {
  wyrIndex = 0;
  document.getElementById('fc-quiz-title').textContent = '⚖️ Would You Rather?';
  document.getElementById('fc-quiz-modal').classList.remove('hidden');
  document.getElementById('fc-quiz-result').classList.add('hidden');
  document.getElementById('fc-quiz-content').classList.remove('hidden');
  renderWyr();
};

function renderWyr() {
  const content = document.getElementById('fc-quiz-content');
  if (wyrIndex >= wyrQuestions.length) {
    document.getElementById('fc-quiz-content').classList.add('hidden');
    const resContainer = document.getElementById('fc-quiz-result');
    resContainer.innerHTML = `
      <div style="font-size:4rem; margin-bottom:15px;">🏅</div>
      <h3>Survival Expert!</h3>
      <p>You have made some intense choices. You would definitely survive the wild!</p>
      <button class="fc-btn-primary" onclick="document.getElementById('fc-quiz-modal').classList.add('hidden')">Finish</button>
    `;
    resContainer.classList.remove('hidden');
    return;
  }
  const data = wyrQuestions[wyrIndex];
  content.innerHTML = `
    <p class="quiz-q" style="text-align:center;">${data.q}</p>
    <div style="display:flex; gap:15px; margin-top:20px;">
      <button class="fc-btn-primary" style="flex:1;" onclick="window.answerWyr()">${data.a}</button>
      <button class="fc-btn-primary" style="flex:1; background:linear-gradient(135deg, #8b5cf6, #6d28d9);" onclick="window.answerWyr()">${data.b}</button>
    </div>
  `;
}

window.answerWyr = function() {
  if (window.AK_AUDIO && window.AK_AUDIO.playPop) window.AK_AUDIO.playPop(500);
  wyrIndex++;
  renderWyr();
};








