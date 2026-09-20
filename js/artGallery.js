// =========================================================
// THE ANIMAL KINGDOM - FINE ART GALLERY & MASTERWORK INSPECTOR
// Features: Pastel, Watercolor, Colored Pencil & Acrylic Masterpieces
// Deep Artwork Inspection, Medium Analysis, Voice Narration & AI Studio
// =========================================================

class AnimalArtGallery {
  constructor() {
    this.currentFilter = 'all';
    this.selectedArtwork = null;
    this.speechSynth = window.speechSynthesis;
    this.isSpeaking = false;

    this.artworks = [
      {
        id: 'snow_leopard_watercolor',
        title: 'Ghost of the Himalayan Ridge',
        species: 'Snow Leopard (Panthera uncia)',
        category: 'land',
        medium: 'watercolor',
        mediumLabel: '🖌️ Transparent Watercolor & Ink Wash',
        paper: 'Cold-pressed 300gsm deckled-edge cotton paper',
        dimensions: '18" × 24"',
        image: 'images/art_gallery/snow_leopard_watercolor.jpg',
        badgeColor: '#0284c7',
        shortDesc: 'A powerful snow leopard stalking across jagged snow-dusted Himalayan cliffs, painted with delicate granulating pigments and soft watercolor washes.',
        fullDesc: 'Captured in classic botanical and wildlife watercolor technique, this masterwork depicts the elusive "Ghost of the Mountains" traversing a treacherous high-altitude ridge in the Himalayas. The artist utilized wet-on-wet watercolor washes with genuine cobalt blue, raw umber, and lamp black, letting natural pigment granulation mimic the crisp alpine atmosphere and the leopard’s dense, rosette-patterned winter fur.',
        techniques: [
          'Granulating Cobalt Washes creating misty atmospheric mountain depth',
          'Dry-brush lifting on snowy rock ridges to evoke sunlit ice glazes',
          'Fine sable rigger brush detail capturing tactile whisker and fur textures',
          'Spontaneous deckled-edge paper bleed framing the cold Himalayan expanse'
        ],
        habitat: 'Alpine & Subalpine zones across Central Asia (3,000 to 4,500m elevation)',
        funFact: 'Snow leopards have massive wide paws that act like natural snowshoes to prevent them from sinking in deep snow.'
      },
      {
        id: 'tree_frog_pencil',
        title: 'Jewel of the Rain Canopy',
        species: 'Red-Eyed Tree Frog (Agalychnis callidryas)',
        category: 'amphibians',
        medium: 'colored_pencil',
        mediumLabel: '✏️ Fine Colored Pencil Botanical Art',
        paper: 'Heavyweight Strathmore vellum bristol board',
        dimensions: '12" × 16"',
        image: 'images/art_gallery/tree_frog_pencil.jpg',
        badgeColor: '#16a34a',
        shortDesc: 'A hyper-detailed botanical study of a vibrant Red-Eyed Tree Frog resting on a glistening tropical leaf drenched in morning rainforest raindrops.',
        fullDesc: 'Rendered with hundreds of ultra-fine Prismacolor pencil strokes, this botanical illustration brings the jewel-like vibrancy of Costa Rican rain forests to life. The artist layered vivid chartreuse green, cadmium orange, and ultramarine pencils to render the frog’s semi-translucent skin, while utilizing subtle burnishing to capture the specular reflections inside every individual glistening raindrop.',
        techniques: [
          'Layered color burnishing achieving hyper-smooth wet skin sheens',
          'Cross-hatched pencil shading defining intricate monstera leaf veining',
          'White gouache specular micro-highlights on spherical water droplets',
          'Saturated scarlet and cerulean pigments evoking nocturnal flash-coloration'
        ],
        habitat: 'Tropical rainforest canopies of Central America and northern South America',
        funFact: 'When startled, the tree frog flashes its vivid red eyes and blue flanks to momentarily freeze predators in surprise.'
      },
      {
        id: 'barn_owl_pastel',
        title: 'Moonlit Woodland Guardian',
        species: 'Barn Owl (Tyto alba)',
        category: 'birds',
        medium: 'pastel',
        mediumLabel: '🖍️ Soft Pastel & Charcoal on Toned Paper',
        paper: 'Textured charcoal-grey French Pastelmat paper',
        dimensions: '16" × 20"',
        image: 'images/art_gallery/barn_owl_pastel.jpg',
        badgeColor: '#8b5cf6',
        shortDesc: 'A luminous Barn Owl perched on an ancient moss-covered oak branch under a crescent moon, drawn with velvety soft pastels and charcoal.',
        fullDesc: 'Utilizing soft French Sennelier pastels on dark toned fibrous paper, this evocative piece captures the silent hunter of the twilight woods. The velvety softness of chalk pastels perfectly mimics the downy, sound-muffling feather structure of the owl, while luminous creamy whites and warm ochres create an ethereal celestial glow against the deep twilight violet sky.',
        techniques: [
          'Velvety blending with tortillons creating soft downy feather plumes',
          'Vine charcoal underdrawing establishing rich shadowed forest values',
          'Opaque titanium white and cadmium yellow highlights for moonlit rim lighting',
          'Rough chalk scumbling capturing rugged bark and lichen textures'
        ],
        habitat: 'Farmlands, grasslands, and woodland edges across six continents',
        funFact: 'The distinctive heart-shaped facial disc of the barn owl channels high-frequency rustling sounds directly into its ears.'
      },
      {
        id: 'tiger_acrylic',
        title: 'Twilight River Stride',
        species: 'Bengal Tiger (Panthera tigris tigris)',
        category: 'land',
        medium: 'acrylic',
        mediumLabel: '🎨 Heavy Palette Knife Acrylic & Impasto',
        paper: 'Double-primed Belgian linen canvas on pine stretcher',
        dimensions: '24" × 32"',
        image: 'images/art_gallery/tiger_acrylic.jpg',
        badgeColor: '#ea580c',
        shortDesc: 'A commanding Bengal tiger stepping through sunset river shallows, painted with bold impasto knife textures and blazing golden light.',
        fullDesc: 'This dynamic acrylic masterwork utilizes heavy-body paints applied directly with steel palette knives and stiff bristle brushes. The thick impasto technique sculpts physical ridges of orange, sienna, and gold across the tiger’s muscular shoulders, while the reflective river surface shimmers with broken, expressive strokes of amber, copper, and violet sunset light.',
        techniques: [
          'Heavy impasto palette knife strokes sculpting muscular ridge definition',
          'Glazed acrylic translucent washes rendering radiant sunset water reflections',
          'Bold chiaroscuro lighting contrasting dense reeds with fiery horizon glow',
          'Expressive wet-in-wet color mixing capturing the raw vitality of the wild'
        ],
        habitat: 'Tropical moist evergreen forests, mangrove swamps, and alluvial grasslands of India',
        funFact: 'No two Bengal tigers have the same stripe pattern—their stripes are as unique as human fingerprints.'
      },
      {
        id: 'sea_turtle_watercolor',
        title: 'Sunlit Coral Voyage',
        species: 'Green Sea Turtle (Chelonia mydas)',
        category: 'marine',
        medium: 'watercolor',
        mediumLabel: '🖌️ Luminous Ocean Watercolor & Gouache',
        paper: 'Rough Arches 100% cotton cold-press paper',
        dimensions: '18" × 24"',
        image: 'images/art_gallery/sea_turtle_watercolor.jpg',
        badgeColor: '#0ea5e9',
        shortDesc: 'A serene Green Sea Turtle gliding gracefully over an iridescent turquoise coral reef, illuminated by shimmering tropical sun rays.',
        fullDesc: 'Painted with flowing watercolor blooms of phthalo turquoise, cobalt teal, and raw sienna, this marine masterwork transports viewers beneath tropical waters. The artist allowed loose, organic pigment puddles and natural drips to frame the edges, celebrating the fluidity of watercolor to convey oceanic freedom and the intricate mosaic scales of the turtle’s carapace.',
        techniques: [
          'Salt crystallization textures creating speckled sandy reef textures',
          'Fluid lifting technique rendering underwater celestial sunbeam shafts',
          'Layered glazing giving translucent luminosity to sea anemones and brain coral',
          'Deckled watercolor paper framing emphasizing natural oceanic purity'
        ],
        habitat: 'Tropical and subtropical coastal waters, coral reefs, and open oceans worldwide',
        funFact: 'Green sea turtles can hold their breath underwater for up to 5 hours while resting or sleeping!'
      },
      {
        id: 'monarch_colored_pencil',
        title: 'Lavender Blossom Solitude',
        species: 'Monarch Butterfly (Danaus plexippus)',
        category: 'insects',
        medium: 'colored_pencil',
        mediumLabel: '✏️ Botanical Prismacolor & Fine Linework',
        paper: 'Hot-pressed smooth Fabriano botanical paper',
        dimensions: '11" × 14"',
        image: 'images/art_gallery/monarch_colored_pencil.jpg',
        badgeColor: '#d97706',
        shortDesc: 'A delicate Monarch butterfly resting atop fragrant purple lavender blossoms, illustrated with micro-scale colored pencil shading.',
        fullDesc: 'This intimate botanical study captures the intricate beauty of an iconic pollinator. Using sharp colored pencils and solvent blending, the artist achieved micro-fine details in the butterfly’s wing venation, powdery black borders, and delicate white spots, contrasted against the soft purples and soothing sage greens of sunlit French lavender.',
        techniques: [
          'Solvent-melted pencil base layers for silky, streak-free petal tones',
          '0.3mm ultra-fine linework mapping complex wing veins and antennae',
          'Color saturation gradients contrasting blazing orange with cool lavender',
          'Textured botanical paper grain preserving authentic hand-drawn touch'
        ],
        habitat: 'Meadows, prairies, garden corridors, and coastal forests across the Americas',
        funFact: 'Monarch butterflies undertake an epic multi-generational migration of up to 3,000 miles every autumn!'
      }
    ];

    this.init();
  }

  // =========================================================
  // PICK BEST MALE BRITISH ENGLISH VOICE
  // Strongly prefers male en-GB voices, falls back gracefully.
  // =========================================================
  _pickBritishVoice() {
    const voices = this.speechSynth.getVoices();
    if (!voices || voices.length === 0) return null;

    // Priority 1: explicit male British names
    const maleBritish = voices.find(v =>
      v.lang === 'en-GB' && (
        v.name.includes('Daniel') ||         // Apple British male
        v.name.includes('Arthur') ||         // Microsoft British male neural
        v.name.includes('Ryan') ||           // Microsoft British male neural
        v.name.includes('Google UK English Male') ||
        v.name.includes('Male')
      )
    );
    if (maleBritish) return maleBritish;

    // Priority 2: any en-GB voice at all
    const anyGB = voices.find(v => v.lang === 'en-GB');
    if (anyGB) return anyGB;

    // Priority 3: any en-AU (Australian — still British-ish accent)
    const au = voices.find(v => v.lang === 'en-AU');
    if (au) return au;

    // Priority 4: Google/Premium English
    return voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Premium'))) || null;
  }

  init() {
    // Instant background preload of all gallery masterworks for 0ms load time
    this.artworks.forEach(art => {
      const preloadImg = new Image();
      preloadImg.src = art.image;
    });

    // Pre-cache British voice (voices load async in most browsers)
    if (this.speechSynth) {
      this.britishVoice = this._pickBritishVoice();
      if (!this.britishVoice) {
        this.speechSynth.addEventListener('voiceschanged', () => {
          this.britishVoice = this._pickBritishVoice();
        });
      }
      window.addEventListener('beforeunload', () => {
        this.speechSynth.cancel();
      });
    }
  }

  // =========================================================
  // OPEN GALLERY WITH LOADING SPINNER + 10-SECOND ERROR
  // =========================================================
  openGalleryModal() {
    const modal = document.getElementById('art-gallery-modal');
    if (!modal) { console.error('[ArtGallery] Modal element #art-gallery-modal not found!'); return; }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';

    const loadingEl = document.getElementById('art-gallery-loading');
    const errorEl = document.getElementById('art-gallery-error');
    const bodyWrap = document.getElementById('art-gallery-body-wrap');
    const pctEl = document.getElementById('gallery-load-pct');

    // Show loading spinner, hide grid and error
    if (loadingEl) loadingEl.classList.remove('hidden');
    if (errorEl) errorEl.classList.add('hidden');
    if (bodyWrap) bodyWrap.classList.add('hidden');

    // Track load progress across all artworks
    let loaded = 0;
    const total = this.artworks.length;
    const failedImages = [];
    const startTime = Date.now();

    // 10-second timeout watchdog
    const timeoutId = setTimeout(() => {
      const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
      if (loadingEl) loadingEl.classList.add('hidden');
      if (errorEl) {
        const detailsEl = document.getElementById('gallery-error-details');
        if (detailsEl) {
          detailsEl.innerHTML = `
            <strong>⏱ Time elapsed:</strong> ${elapsed}s (limit: 10s)<br>
            <strong>📦 Loaded:</strong> ${loaded} / ${total} images<br>
            <strong>❌ Failed or slow images:</strong><br>
            ${failedImages.length > 0 ? failedImages.map(f => `• ${f}`).join('<br>') : '• All images queued but browser is slow rendering them'}<br>
            <strong>🌐 Server:</strong> http://localhost:3000<br>
            <strong>💡 Tip:</strong> Tell the assistant: "Gallery shows timeout error, loaded ${loaded}/${total} images after ${elapsed}s"
          `;
        }
        errorEl.classList.remove('hidden');
      }
    }, 10000);

    // Load-check each artwork image
    this.artworks.forEach(art => {
      const img = new Image();
      img.onload = () => {
        loaded++;
        const pct = Math.round((loaded / total) * 100);
        if (pctEl) pctEl.textContent = pct + '%';
        if (loaded === total) {
          clearTimeout(timeoutId);
          this._showGalleryGrid(loadingEl, errorEl, bodyWrap);
        }
      };
      img.onerror = () => {
        loaded++;
        failedImages.push(art.image);
        const pct = Math.round((loaded / total) * 100);
        if (pctEl) pctEl.textContent = pct + '%';
        if (loaded === total) {
          clearTimeout(timeoutId);
          this._showGalleryGrid(loadingEl, errorEl, bodyWrap);
        }
      };
      img.src = art.image + '?t=' + Date.now(); // bypass stale cache
    });

    if (window.AK_AUDIO && window.AK_AUDIO.playSpecialSound) {
      window.AK_AUDIO.playSpecialSound('unlock');
    }
  }

  _showGalleryGrid(loadingEl, errorEl, bodyWrap) {
    if (loadingEl) loadingEl.classList.add('hidden');
    if (errorEl) errorEl.classList.add('hidden');
    if (bodyWrap) bodyWrap.classList.remove('hidden');
    this.renderGalleryGrid();
  }

  retryGallery() {
    this.closeGalleryModal();
    setTimeout(() => this.openGalleryModal(), 100);
  }

  forceShowGallery() {
    const loadingEl = document.getElementById('art-gallery-loading');
    const errorEl = document.getElementById('art-gallery-error');
    const bodyWrap = document.getElementById('art-gallery-body-wrap');
    this._showGalleryGrid(loadingEl, errorEl, bodyWrap);
  }

  closeGalleryModal() {
    const modal = document.getElementById('art-gallery-modal');
    if (modal) modal.classList.add('hidden');
    document.body.style.overflow = '';
    this.stopNarration();
  }

  setFilter(medium) {
    this.currentFilter = medium;

    // Update active button pills
    document.querySelectorAll('.gallery-filter-btn').forEach(btn => {
      if (btn.dataset.medium === medium) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });

    this.renderGalleryGrid();

    if (window.AK_AUDIO && window.AK_AUDIO.playUiClick) {
      window.AK_AUDIO.playUiClick();
    }
  }

  renderGalleryGrid() {
    const grid = document.getElementById('art-gallery-grid');
    if (!grid) return;

    const filtered = this.currentFilter === 'all'
      ? this.artworks
      : this.artworks.filter(a => a.medium === this.currentFilter);

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="gallery-empty-state">
          <span>🎨</span>
          <h4>No artworks found in this style</h4>
          <p>Try selecting another fine-art medium!</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(art => {
      return `
        <div class="art-card" onclick="window.AK_ART_GALLERY.inspectArtwork('${art.id}')">
          <div class="art-card-canvas-wrap">
            <img src="${art.image}" alt="${art.title}" class="art-card-thumb" loading="lazy">
            <span class="art-card-medium-badge" style="background: ${art.badgeColor};">${art.mediumLabel.split(' ')[0]} ${art.medium.toUpperCase()}</span>
            <div class="art-card-hover-overlay">
              <span class="btn-inspect-pill">🔍 Inspect Masterpiece</span>
            </div>
          </div>
          <div class="art-card-info">
            <h4 class="art-card-title">${art.title}</h4>
            <span class="art-card-species">${art.species}</span>
            <p class="art-card-desc">${art.shortDesc}</p>
            <div class="art-card-meta">
              <span class="art-meta-tag">${art.mediumLabel}</span>
              <span class="art-meta-tag">📏 ${art.dimensions}</span>
            </div>
          </div>
        </div>
      `;
    }).join('');
  }

  inspectArtwork(artworkId) {
    const art = this.artworks.find(a => a.id === artworkId);
    if (!art) return;

    this.selectedArtwork = art;
    this.stopNarration();

    const inspectorModal = document.getElementById('art-inspector-modal');
    if (!inspectorModal) return;

    // Populate data
    document.getElementById('inspect-art-title').innerText = art.title;
    document.getElementById('inspect-art-species').innerText = art.species;
    document.getElementById('inspect-art-medium-badge').innerText = art.mediumLabel;
    document.getElementById('inspect-art-image').src = art.image;
    document.getElementById('inspect-art-desc').innerText = art.fullDesc;
    document.getElementById('inspect-art-paper').innerText = art.paper;
    document.getElementById('inspect-art-dim').innerText = art.dimensions;
    document.getElementById('inspect-art-habitat').innerText = art.habitat;
    document.getElementById('inspect-art-fact').innerText = art.funFact;

    // Populate techniques list
    const techList = document.getElementById('inspect-art-techniques');
    if (techList) {
      techList.innerHTML = art.techniques.map(t => `<li>✨ ${t}</li>`).join('');
    }

    inspectorModal.classList.remove('hidden');

    if (window.AK_AUDIO && window.AK_AUDIO.playSpecialSound) {
      window.AK_AUDIO.playSpecialSound('cardOpen');
    }

    // Auto voice speak description as requested!
    this.speakDescription();
  }

  closeInspector() {
    const inspectorModal = document.getElementById('art-inspector-modal');
    if (inspectorModal) inspectorModal.classList.add('hidden');
    this.stopNarration();
  }

  // =========================================================
  // VOICE NARRATION & AUDIO SPEECH
  // =========================================================
  // =========================================================
  // VOICE NARRATION & AUDIO SPEECH (MULTILINGUAL)
  // =========================================================
  _getVoiceForLang(lang = 'en') {
    if (!this.speechSynth) return null;
    const voices = this.speechSynth.getVoices();
    if (!voices || voices.length === 0) return null;

    if (lang === 'zh') {
      const zh = voices.find(v =>
        (v.lang === 'zh-TW' || v.lang === 'zh-HK' || v.lang === 'cmn-Hant-TW' || v.lang === 'yue-Hant-HK') ||
        (v.name.includes('Taiwan') || v.name.includes('Hong Kong') || v.name.includes('國語') || v.name.includes('HanHan') || v.name.includes('Mei-Jia') || v.name.includes('Yating') || v.name.includes('HsiaoChen') || v.name.includes('YunJhe') || v.name.includes('HiuGaai') || v.name.includes('HiuMaan'))
      );
      if (zh) return zh;
      const anyZh = voices.find(v => v.lang.startsWith('zh') || v.name.includes('Chinese') || v.name.includes('Mandarin'));
      if (anyZh) return anyZh;
    } else if (lang === 'es') {
      const es = voices.find(v =>
        (v.lang === 'es-ES' || v.lang === 'es-MX' || v.lang === 'es-US') && (
          v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Monica') ||
          v.name.includes('Paulina') || v.name.includes('Jorge') || v.name.includes('Helena') ||
          v.name.includes('Laura') || v.name.includes('Alvaro') || v.name.includes('Elvira')
        )
      );
      if (es) return es;
      const anyEs = voices.find(v => v.lang.startsWith('es') || v.name.toLowerCase().includes('spanish'));
      if (anyEs) return anyEs;
    }

    // Default English: British voice
    return this._pickBritishVoice();
  }

  speakDescription() {
    if (!this.selectedArtwork || !('speechSynthesis' in window)) return;

    this.speechSynth.cancel();

    const lang = window.AK_I18N ? window.AK_I18N.getLanguage() : 'en';
    const art = this.selectedArtwork;
    let textToSpeak = '';

    if (lang === 'zh') {
      const mediumMap = {
        watercolor: '水彩畫與墨洗',
        colored_pencil: '精緻色鉛筆植物繪畫',
        pastel: '軟式粉彩',
        acrylic: '壓克力厚塗畫'
      };
      const medZh = mediumMap[art.medium] || '傳統美術';
      textToSpeak = `歡迎欣賞野生動物藝術名作：《${art.title}》。採用${medZh}技法精心繪製。${art.shortDesc} 生態與生物學筆記：${art.funFact}`;
    } else if (lang === 'es') {
      const mediumMapEs = {
        watercolor: 'acuarela y aguada',
        colored_pencil: 'lápiz de color botánico fino',
        pastel: 'pastel suave',
        acrylic: 'acrílico impasto'
      };
      const medEs = mediumMapEs[art.medium] || 'bellas artes tradicionales';
      textToSpeak = `Bienvenido a apreciar esta obra maestra: ${art.title}. Pintado en técnica de ${medEs}. ${art.shortDesc} Nota biológica: ${art.funFact}`;
    } else {
      textToSpeak = `${art.title}. Painted in ${art.medium} style. ${art.fullDesc} Biological note: ${art.funFact}`;
    }

    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.rate = lang === 'zh' ? 0.96 : 0.92;
    utterance.pitch = 1.0;
    utterance.volume = 1.0;

    const voice = this._getVoiceForLang(lang);
    if (voice) utterance.voice = voice;
    utterance.lang = lang === 'zh' ? 'zh-TW' : (lang === 'es' ? 'es-ES' : 'en-GB');

    const speakingLabels = {
      zh: '🔊 正在語音朗讀中... (繁體中文 🇹🇼)',
      es: '🔊 Hablando... (Español 🇪🇸)',
      en: '🔊 Speaking... (British 🇬🇧)'
    };
    const idleLabels = {
      zh: '🔊 朗讀藝術作品與解說',
      es: '🔊 Leer / Escuchar Descripción',
      en: '🔊 Read / Speak Description'
    };

    const btn = document.getElementById('btn-art-speak');
    if (btn) {
      btn.innerHTML = speakingLabels[lang] || speakingLabels.en;
      btn.classList.add('speaking');
    }

    utterance.onend = () => {
      this.isSpeaking = false;
      if (btn) {
        btn.innerHTML = idleLabels[lang] || idleLabels.en;
        btn.classList.remove('speaking');
      }
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      if (btn) {
        btn.innerHTML = idleLabels[lang] || idleLabels.en;
        btn.classList.remove('speaking');
      }
    };

    this.isSpeaking = true;
    this.speechSynth.speak(utterance);
  }

  stopNarration() {
    if (this.speechSynth) {
      this.speechSynth.cancel();
      this.isSpeaking = false;
      const lang = window.AK_I18N ? window.AK_I18N.getLanguage() : 'en';
      const idleLabels = {
        zh: '🔊 朗讀藝術作品與解說',
        es: '🔊 Leer / Escuchar Descripción',
        en: '🔊 Read / Speak Description'
      };
      const btn = document.getElementById('btn-art-speak');
      if (btn) {
        btn.innerHTML = idleLabels[lang] || idleLabels.en;
        btn.classList.remove('speaking');
      }
    }
  }

  toggleSpeech() {
    if (this.isSpeaking) {
      this.stopNarration();
    } else {
      this.speakDescription();
    }
  }
}

// Global Singleton Initialization
window.addEventListener('DOMContentLoaded', () => {
  window.AK_ART_GALLERY = new AnimalArtGallery();
});
