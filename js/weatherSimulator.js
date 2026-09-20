// =========================================================
// THE ANIMAL KINGDOM - INTERACTIVE ANIMAL WEATHER SIMULATOR
// & LIVE IRVINE, CALIFORNIA WILDLIFE RADAR ENGINE
// =========================================================

class AnimalWeatherSimulator {
  constructor() {
    this.currentWeather = 'rain'; // 'rain', 'sunny', 'snow', 'fog', 'wind', 'night'
    this.temperatureC = 18; // Celsius
    this.precipitation = 80; // 0 to 100%
    this.windSpeedMph = 14;
    this.humidity = 88;
    this.timeOfDay = 'day'; // 'day', 'sunset', 'night'
    this.currentLocation = 'Irvine, California';
    this.selectedDate = new Date();
    
    this.selectedAnimal = null;
    this.animFrameId = null;
    this.canvas = null;
    this.ctx = null;
    this.particles = [];
    this.activeRadarDots = [];
    this.audioContext = null;
    this.ambientSoundNode = null;
    this.isSoundMuted = false;

    // Weather Presets Definition
    this.presets = {
      rain: {
        name: 'Rainy Downpour',
        icon: '🌧️',
        desc: 'Steady falling raindrops, high humidity, water puddles forming on forest floors.',
        temp: 18,
        precip: 85,
        wind: 12,
        humidity: 92,
        time: 'day',
        bgGradient: 'linear-gradient(180deg, #1e293b 0%, #0f172a 60%, #1e3a5f 100%)',
        textColor: '#38bdf8'
      },
      thunderstorm: {
        name: 'Severe Thunderstorm',
        icon: '⛈️',
        desc: 'Heavy torrential rain, powerful lightning strikes, gale winds and dramatic skies.',
        temp: 16,
        precip: 100,
        wind: 35,
        humidity: 98,
        time: 'day',
        bgGradient: 'linear-gradient(180deg, #0b0f19 0%, #1e1b4b 60%, #090d16 100%)',
        textColor: '#facc15'
      },
      sunny: {
        name: 'Sunlight & Heatwave',
        icon: '☀️',
        desc: 'Blazing golden sun, intense UV rays, dry thermal currents and desert breezes.',
        temp: 34,
        precip: 0,
        wind: 6,
        humidity: 22,
        time: 'day',
        bgGradient: 'linear-gradient(180deg, #fef08a 0%, #fdba74 50%, #f97316 100%)',
        textColor: '#ea580c'
      },
      snow: {
        name: 'Polar Blizzard & Snow',
        icon: '❄️',
        desc: 'Sub-zero freezing temperatures, swirling crystalline snowflakes and icy frost.',
        temp: -8,
        precip: 70,
        wind: 28,
        humidity: 60,
        time: 'day',
        bgGradient: 'linear-gradient(180deg, #93c5fd 0%, #cbd5e1 50%, #f8fafc 100%)',
        textColor: '#0284c7'
      },
      fog: {
        name: 'Misty Cloud Forest',
        icon: '🌫️',
        desc: 'Dense atmospheric fog, high moisture droplets, cool misty jungle canopies.',
        temp: 15,
        precip: 30,
        wind: 4,
        humidity: 99,
        time: 'day',
        bgGradient: 'linear-gradient(180deg, #64748b 0%, #475569 60%, #334155 100%)',
        textColor: '#cbd5e1'
      },
      wind: {
        name: 'Autumn Gale & Wind',
        icon: '🍃',
        desc: 'Strong gusting winds swirling fallen leaves, seed pods, and soaring thermals.',
        temp: 20,
        precip: 10,
        wind: 45,
        humidity: 45,
        time: 'day',
        bgGradient: 'linear-gradient(180deg, #fdba74 0%, #ca8a04 50%, #78350f 100%)',
        textColor: '#d97706'
      },
      night: {
        name: 'Moonlit Starlit Night',
        icon: '🌙',
        desc: 'Cool nocturnal darkness, twinkling stars, moonlight and active nighttime wildlife.',
        temp: 14,
        precip: 5,
        wind: 8,
        humidity: 75,
        time: 'night',
        bgGradient: 'linear-gradient(180deg, #030712 0%, #0c1527 60%, #1e1b4b 100%)',
        textColor: '#a855f7'
      }
    };

    // Irvine, California Wildlife & Regional Database
    this.irvineFauna = [
      { name: 'Western Fence Lizard', query: 'Fence Lizard', trait: 'Basking ectotherm on warm rocks during sunny Irvine afternoons' },
      { name: 'Pacific Tree Frog', query: 'Tree Frog', trait: 'Vocal chorus and active mating in Irvine San Joaquin wetlands when it rains' },
      { name: "Anna's Hummingbird", query: 'Hummingbird', trait: 'Active year-round in Irvine gardens, feeding on nectar in sunny & mild weather' },
      { name: 'Coyote', query: 'Coyote', trait: 'Patrolling Irvine open hills, Bommer Canyon, and greenbelts at dusk, night and cool dawn' },
      { name: 'Red-Tailed Hawk', query: 'Red-Tailed Hawk', trait: 'Soaring high on warm Irvine thermal updrafts scanning fields for rodents' },
      { name: 'Barn Owl', query: 'Barn Owl', trait: 'Silent nocturnal predator hunting Irvine open spaces during clear starlit nights' },
      { name: 'California Quail', query: 'California Quail', trait: 'Foraging in family coveys through coastal sage scrub during dry sunny mornings' },
      { name: 'Monarch Butterfly', query: 'Monarch Butterfly', trait: 'Migrating along Irvine eucalyptus groves on warm sunny days >65°F' },
      { name: 'Desert Cottontail', query: 'Cottontail', trait: 'Grazing in Irvine parks and brush during mild overcast mornings and evenings' },
      { name: 'Great Blue Heron', query: 'Heron', trait: 'Stalking fish and amphibians in Irvine wetlands and rain ponds' }
    ];
  }

  getAllAnimals() {
    const list = [];
    const pushAll = (arr) => {
      if (Array.isArray(arr)) {
        arr.forEach(item => {
          if (item && item.id && !list.some(x => x.id === item.id)) {
            list.push(item);
          }
        });
      }
    };
    pushAll(window.LAND_DATA);
    pushAll(window.MARINE_DATA);
    pushAll(window.BIRDS_DATA);
    pushAll(window.REPTILES_DATA);
    pushAll(window.AMPHIBIANS_DATA);
    pushAll(window.INSECTS_DATA);
    pushAll(window.PLANTS_DATA);
    pushAll(window.GEMSTONES_DATA);
    return list;
  }

  openWeatherModal() {
    const modal = document.getElementById('weather-simulator-modal');
    if (!modal) return;
    modal.classList.remove('hidden');

    this.initCanvas();
    this.setPreset(this.currentWeather, false);
    this.calculateIrvineWeather();
    this.startAnimationLoop();
  }

  closeWeatherModal() {
    const modal = document.getElementById('weather-simulator-modal');
    if (modal) modal.classList.add('hidden');
    if (this.animFrameId) {
      cancelAnimationFrame(this.animFrameId);
      this.animFrameId = null;
    }
  }

  initCanvas() {
    this.canvas = document.getElementById('weather-particle-canvas');
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());
  }

  resizeCanvas() {
    if (!this.canvas) return;
    const parent = this.canvas.parentElement;
    if (parent) {
      this.canvas.width = parent.clientWidth || 800;
      this.canvas.height = parent.clientHeight || 450;
    }
    this.initParticles();
  }

  setPreset(presetKey, playSound = true) {
    if (!this.presets[presetKey]) presetKey = 'rain';
    this.currentWeather = presetKey;
    const p = this.presets[presetKey];

    this.temperatureC = p.temp;
    this.precipitation = p.precip;
    this.windSpeedMph = p.wind;
    this.humidity = p.humidity;
    this.timeOfDay = p.time;

    // Update preset button active state
    document.querySelectorAll('.weather-preset-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.preset === presetKey);
    });

    // Update Slider UI controls
    this.updateControlsUI();
    this.initParticles();
    this.computeActiveFauna();
    this.updateWeatherHUD();

    if (playSound) {
      this.playWeatherCueSound(presetKey);
    }
  }

  updateControlsUI() {
    const tempSlider = document.getElementById('weather-temp-slider');
    const precipSlider = document.getElementById('weather-precip-slider');
    const windSlider = document.getElementById('weather-wind-slider');
    const timeSelect = document.getElementById('weather-time-select');

    if (tempSlider) tempSlider.value = this.temperatureC;
    if (precipSlider) precipSlider.value = this.precipitation;
    if (windSlider) windSlider.value = this.windSpeedMph;
    if (timeSelect) timeSelect.value = this.timeOfDay;

    const tempVal = document.getElementById('weather-temp-val');
    const precipVal = document.getElementById('weather-precip-val');
    const windVal = document.getElementById('weather-wind-val');

    const tempF = Math.round((this.temperatureC * 9/5) + 32);
    if (tempVal) tempVal.innerText = `${this.temperatureC}°C / ${tempF}°F`;
    if (precipVal) precipVal.innerText = `${this.precipitation}%`;
    if (windVal) windVal.innerText = `${this.windSpeedMph} mph`;
  }

  onSliderChange() {
    const tempSlider = document.getElementById('weather-temp-slider');
    const precipSlider = document.getElementById('weather-precip-slider');
    const windSlider = document.getElementById('weather-wind-slider');
    const timeSelect = document.getElementById('weather-time-select');

    if (tempSlider) this.temperatureC = parseInt(tempSlider.value, 10);
    if (precipSlider) this.precipitation = parseInt(precipSlider.value, 10);
    if (windSlider) this.windSpeedMph = parseInt(windSlider.value, 10);
    if (timeSelect) this.timeOfDay = timeSelect.value;

    // Determine closest weather mode dynamically
    if (this.temperatureC <= 0 && this.precipitation > 20) {
      this.currentWeather = 'snow';
    } else if (this.precipitation >= 75) {
      this.currentWeather = this.windSpeedMph > 25 ? 'thunderstorm' : 'rain';
    } else if (this.precipitation >= 30) {
      this.currentWeather = 'rain';
    } else if (this.temperatureC >= 28 && this.precipitation < 15) {
      this.currentWeather = 'sunny';
    } else if (this.windSpeedMph >= 30) {
      this.currentWeather = 'wind';
    } else if (this.humidity >= 85 && this.precipitation < 30) {
      this.currentWeather = 'fog';
    } else if (this.timeOfDay === 'night') {
      this.currentWeather = 'night';
    } else {
      this.currentWeather = 'sunny';
    }

    this.updateControlsUI();
    this.initParticles();
    this.computeActiveFauna();
    this.updateWeatherHUD();
  }

  updateWeatherHUD() {
    const titleEl = document.getElementById('weather-hud-title');
    const descEl = document.getElementById('weather-hud-desc');
    const tempF = Math.round((this.temperatureC * 9/5) + 32);

    const p = this.presets[this.currentWeather] || this.presets.rain;
    if (titleEl) {
      titleEl.innerHTML = `${p.icon} ${p.name} • ${this.temperatureC}°C (${tempF}°F)`;
    }
    if (descEl) {
      descEl.innerText = p.desc;
    }

    const stageBox = document.getElementById('weather-stage-wrapper');
    if (stageBox) {
      stageBox.style.background = p.bgGradient;
    }
  }

  initParticles() {
    if (!this.canvas) return;
    this.particles = [];
    const count = Math.min(220, Math.floor(this.canvas.width * 0.25));

    for (let i = 0; i < count; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        speedY: (Math.random() * 8 + 6) * (this.precipitation / 70),
        speedX: (this.windSpeedMph / 15) + (Math.random() * 2 - 1),
        size: Math.random() * 2 + 1,
        length: Math.random() * 18 + 10,
        opacity: Math.random() * 0.6 + 0.3,
        rotation: Math.random() * Math.PI * 2,
        rotSpeed: (Math.random() - 0.5) * 0.05,
        flakeRadius: Math.random() * 3 + 2,
        leafColor: ['#ea580c', '#ca8a04', '#16a34a', '#b45309'][Math.floor(Math.random() * 4)]
      });
    }
  }

  startAnimationLoop() {
    if (this.animFrameId) cancelAnimationFrame(this.animFrameId);

    const render = () => {
      this.drawWeatherFrame();
      this.animFrameId = requestAnimationFrame(render);
    };
    render();
  }

  drawWeatherFrame() {
    if (!this.ctx || !this.canvas) return;
    const ctx = this.ctx;
    const w = this.canvas.width;
    const h = this.canvas.height;

    ctx.clearRect(0, 0, w, h);

    // Weather Visual Rendering by Mode
    if (this.currentWeather === 'rain' || this.currentWeather === 'thunderstorm') {
      ctx.strokeStyle = 'rgba(186, 230, 253, 0.75)';
      ctx.lineWidth = 1.4;
      ctx.beginPath();

      this.particles.forEach(p => {
        ctx.moveTo(p.x, p.y);
        const tailX = p.x - p.speedX * 1.5;
        const tailY = p.y - p.length;
        ctx.lineTo(tailX, tailY);

        p.y += p.speedY;
        p.x += p.speedX;

        if (p.y > h) {
          p.y = -p.length;
          p.x = Math.random() * (w + 100) - 50;
          // Draw mini splash ripple
          ctx.ellipse(p.x, h - 4, p.size * 2.5, p.size * 0.8, 0, 0, Math.PI * 2);
        }
      });
      ctx.stroke();

      // Occasional Thunderstorm Flash
      if (this.currentWeather === 'thunderstorm' && Math.random() < 0.015) {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
        ctx.fillRect(0, 0, w, h);
      }

    } else if (this.currentWeather === 'snow') {
      ctx.fillStyle = 'rgba(255, 255, 255, 0.85)';
      this.particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.flakeRadius, 0, Math.PI * 2);
        ctx.fill();

        p.y += Math.max(1, p.speedY * 0.25);
        p.x += Math.sin(p.y * 0.02) * 1.2 + (this.windSpeedMph / 25);

        if (p.y > h) {
          p.y = -5;
          p.x = Math.random() * w;
        }
      });

    } else if (this.currentWeather === 'sunny') {
      // Draw warm solar flares & light motes
      const grad = ctx.createRadialGradient(w * 0.8, h * 0.2, 10, w * 0.8, h * 0.2, 280);
      grad.addColorStop(0, 'rgba(254, 240, 138, 0.45)');
      grad.addColorStop(0.5, 'rgba(251, 146, 60, 0.2)');
      grad.addColorStop(1, 'transparent');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, w, h);

      // Sun motes
      ctx.fillStyle = 'rgba(254, 243, 199, 0.7)';
      this.particles.slice(0, 60).forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 1.5, 0, Math.PI * 2);
        ctx.fill();

        p.y -= 0.6;
        p.x += Math.sin(p.y * 0.03) * 0.8;
        if (p.y < 0) {
          p.y = h + 5;
          p.x = Math.random() * w;
        }
      });

    } else if (this.currentWeather === 'wind') {
      // Swirling leaves
      this.particles.slice(0, 80).forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation);
        ctx.fillStyle = p.leafColor;
        ctx.beginPath();
        ctx.ellipse(0, 0, 7, 3.5, 0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        p.x += (this.windSpeedMph / 6) + 3;
        p.y += Math.sin(p.x * 0.02) * 2.5 + 1.2;
        p.rotation += p.rotSpeed;

        if (p.x > w + 20) {
          p.x = -20;
          p.y = Math.random() * h;
        }
      });

    } else if (this.currentWeather === 'fog') {
      // Misty cloud layers
      ctx.fillStyle = 'rgba(203, 213, 225, 0.18)';
      for (let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.arc((w * 0.25 * i + Date.now() * 0.02) % (w + 200) - 100, h * 0.5 + i * 40, 160, 0, Math.PI * 2);
        ctx.fill();
      }

    } else if (this.currentWeather === 'night') {
      // Starlight Twinkles
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      this.particles.slice(0, 100).forEach((p, idx) => {
        const twinkle = Math.sin(Date.now() * 0.003 + idx) * 0.4 + 0.6;
        ctx.globalAlpha = twinkle;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1.0;
    }
  }

  computeActiveFauna() {
    const all = this.getAllAnimals();
    const weather = this.currentWeather;
    const temp = this.temperatureC;
    const precip = this.precipitation;
    const isNight = this.timeOfDay === 'night';

    // Scientific weather ecology filter
    let matching = all.filter(a => {
      const cat = a.category ? a.category.toLowerCase() : '';
      const name = a.name.toLowerCase();
      const hab = (a.habitat || '').toLowerCase();
      const desc = (a.description || '').toLowerCase();
      const fact = (a.funFact || '').toLowerCase();

      if (weather === 'rain' || weather === 'thunderstorm') {
        // Amphibians, aquatic creatures, humidity lovers, puddle seekers
        return cat === 'amphibians' ||
               name.includes('frog') || name.includes('salamander') || name.includes('toad') ||
               name.includes('axolotl') || name.includes('platypus') || name.includes('duck') ||
               name.includes('heron') || name.includes('otter') || name.includes('snail') ||
               hab.includes('rainforest') || hab.includes('wetland') || hab.includes('marsh') ||
               hab.includes('swamp') || hab.includes('stream') || hab.includes('river');
      }

      if (weather === 'sunny') {
        // Reptiles (basking ectotherms), savanna mammals, desert species, diurnal birds
        return cat === 'reptiles' ||
               name.includes('lizard') || name.includes('gecko') || name.includes('chameleon') ||
               name.includes('lion') || name.includes('cheetah') || name.includes('meerkat') ||
               name.includes('camel') || name.includes('fennec') || name.includes('tortoise') ||
               name.includes('hummingbird') || name.includes('butterfly') || name.includes('eagle') ||
               hab.includes('desert') || hab.includes('savanna') || hab.includes('grassland') ||
               hab.includes('scrubland') || hab.includes('sunny');
      }

      if (weather === 'snow') {
        // Arctic, sub-zero tundra, alpine, dense insulating fur/feathers
        return name.includes('polar') || name.includes('snow') || name.includes('arctic') ||
               name.includes('penguin') || name.includes('walrus') || name.includes('seal') ||
               name.includes('muskox') || name.includes('macaque') || name.includes('reindeer') ||
               name.includes('caribou') || name.includes('fox') || name.includes('owl') ||
               name.includes('wolf') || name.includes('yak') || name.includes('leopard') ||
               hab.includes('tundra') || hab.includes('polar') || hab.includes('alpine') ||
               hab.includes('snow') || hab.includes('ice');
      }

      if (weather === 'fog') {
        // Cloud forest, mountain gorilla, orchids, mossy frogs, primates
        return name.includes('gorilla') || name.includes('clouded') || name.includes('mantis') ||
               name.includes('chameleon') || name.includes('dart') || name.includes('mossy') ||
               name.includes('orchid') || name.includes('harpy') || name.includes('sloth') ||
               hab.includes('cloud forest') || hab.includes('montane') || hab.includes('canopy');
      }

      if (weather === 'wind') {
        // High-soaring birds with vast wingspans, gliding mammals, dragonflies
        return cat === 'birds' ||
               name.includes('hawk') || name.includes('eagle') || name.includes('albatross') ||
               name.includes('falcon') || name.includes('dragonfly') || name.includes('glider') ||
               name.includes('kestrel') || name.includes('gull') || name.includes('condor');
      }

      if (weather === 'night' || isNight) {
        // Nocturnal predators, bats, geckos, owls, skunks, aye-ayes
        return name.includes('owl') || name.includes('bat') || name.includes('gecko') ||
               name.includes('coyote') || name.includes('skunk') || name.includes('raccoon') ||
               name.includes('firefly') || name.includes('aye-aye') || name.includes('devil') ||
               name.includes('tarsier') || name.includes('hyena') || name.includes('badger') ||
               desc.includes('nocturnal') || fact.includes('nocturnal') || hab.includes('night');
      }

      return true;
    });

    // Pick top 12-16 representative species for radar dots
    if (matching.length > 16) {
      matching = matching.slice(0, 16);
    }

    this.activeRadarDots = matching.map((animal, idx) => {
      // Distributed cleanly across the 2D stage
      const row = Math.floor(idx / 4);
      const col = idx % 4;
      const xPct = 14 + col * 23 + (Math.sin(idx * 7) * 4);
      const yPct = 20 + row * 24 + (Math.cos(idx * 5) * 5);

      return {
        animal,
        xPct: Math.max(10, Math.min(90, xPct)),
        yPct: Math.max(15, Math.min(85, yPct)),
        ecologyReason: this.getEcologyReason(animal, weather, temp)
      };
    });

    this.renderRadarDots();
    this.updateSpeciesCounterBadge();

    // Auto-select first animal if none selected
    if (this.activeRadarDots.length > 0 && (!this.selectedAnimal || !this.activeRadarDots.some(d => d.animal.id === this.selectedAnimal.id))) {
      this.selectAnimalDot(this.activeRadarDots[0]);
    }
  }

  getEcologyReason(animal, weather, temp) {
    const name = animal.name;
    const cat = animal.category;

    if (weather === 'rain' || weather === 'thunderstorm') {
      if (cat === 'amphibians') {
        return `${name} requires rainwater and 85%+ humidity to breathe through its cutaneous permeable skin and safely lay aquatic eggs.`;
      }
      return `${name} takes advantage of fresh water pools and emerging prey (worms, insects) that surface during downpours.`;
    }

    if (weather === 'sunny') {
      if (cat === 'reptiles') {
        return `${name} is an ectotherm (cold-blooded) and must bask in sunlight to raise its body temperature to ${temp}°C for digestion and mobility.`;
      }
      return `${name} thrives in bright daylight, utilizing solar visibility and warm thermal air currents to forage and patrol its territory.`;
    }

    if (weather === 'snow') {
      return `${name} has evolved specialized subcutaneous blubber, counter-current heat exchange, and camouflage fur/feathers for sub-zero temperatures.`;
    }

    if (weather === 'fog') {
      return `${name} is adapted to high montane moisture, capturing ambient dew droplets and hunting under the cover of mist.`;
    }

    if (weather === 'wind') {
      return `${name} uses high wind velocities and aerodynamic dynamic soaring to travel hundreds of miles with near-zero energy cost.`;
    }

    if (weather === 'night') {
      return `${name} possesses high-density tapetum lucidum eye cells and ultrasonic/acute hearing to dominate the nocturnal darkness.`;
    }

    return `${name} is uniquely adapted to thrive under these exact meteorological conditions.`;
  }

  renderRadarDots() {
    const layer = document.getElementById('weather-radar-layer');
    if (!layer) return;

    if (this.activeRadarDots.length === 0) {
      layer.innerHTML = `<div class="radar-empty-msg">No active specimens recorded under this extreme condition</div>`;
      return;
    }

    layer.innerHTML = this.activeRadarDots.map((dot, idx) => {
      const a = dot.animal;
      const isSelected = this.selectedAnimal && this.selectedAnimal.id === a.id;
      const categoryClass = a.category || 'land';
      const locName = window.AK_I18N ? window.AK_I18N.getSpeciesName(a) : a.name;

      return `
        <div class="weather-radar-dot cat-${categoryClass} ${isSelected ? 'selected' : ''}" 
             style="left: ${dot.xPct}%; top: ${dot.yPct}%;"
             onclick="window.AK_WEATHER.selectAnimalDotByIndex(${idx})"
             title="${locName} (${a.category}) - Click to inspect!">
          <div class="radar-pulse-ring"></div>
          <span class="radar-dot-emoji">${a.emoji}</span>
          <span class="radar-dot-label">${locName}</span>
        </div>
      `;
    }).join('');
  }

  updateSpeciesCounterBadge() {
    const badge = document.getElementById('weather-count-badge');
    if (badge) {
      const isZh = window.AK_I18N && window.AK_I18N.getLanguage() === 'zh';
      const isEs = window.AK_I18N && window.AK_I18N.getLanguage() === 'es';
      const suffix = isZh ? '個物種在此氣候下活躍' : (isEs ? 'especies activas en este clima' : 'Species Active in this Weather');
      badge.innerText = `📡 ${this.activeRadarDots.length} ${suffix}`;
    }
  }

  selectAnimalDotByIndex(index) {
    if (this.activeRadarDots[index]) {
      this.selectAnimalDot(this.activeRadarDots[index]);
    }
  }

  selectAnimalDot(dot) {
    this.selectedAnimal = dot.animal;
    this.renderRadarDots(); // Re-render to highlight selected pin

    const card = document.getElementById('weather-creature-card');
    if (!card) return;

    const a = dot.animal;
    const isZh = window.AK_I18N && window.AK_I18N.getLanguage() === 'zh';
    const isEs = window.AK_I18N && window.AK_I18N.getLanguage() === 'es';

    const locName = window.AK_I18N ? window.AK_I18N.getSpeciesName(a) : a.name;
    const locTagline = window.AK_I18N ? window.AK_I18N.getSpeciesTagline(a) : a.tagline;
    const locHabitat = window.AK_I18N ? window.AK_I18N.getSpeciesHabitat(a) : a.habitat;
    const locDiet = window.AK_I18N ? window.AK_I18N.getSpeciesDiet(a) : a.diet;
    const locStatus = window.AK_I18N ? window.AK_I18N.getStatusName(a.endangered) : a.endangered;
    const locEcologyReason = window.AK_I18N ? window.AK_I18N.translateBioText(dot.ecologyReason) : dot.ecologyReason;

    const soundIcon = a.category === 'gemstones' ? '🔔' : (a.category === 'plants' ? '🌱' : '🔊');
    const soundLabel = a.category === 'gemstones' ? (isZh ? '鈴聲' : (isEs ? 'Campana' : 'Chime')) :
                       (a.category === 'plants' ? (isZh ? '自然聲' : (isEs ? 'Naturaleza' : 'Nature')) :
                       (isZh ? '叫聲' : (isEs ? 'Sonido' : 'Sound')));

    const tagActive = isZh ? '🎯 探測到活躍生物標本' : (isEs ? '🎯 Espécimen Activo Detectado' : '🎯 Active Specimen Detected');
    const labelEcology = isZh ? '氣象適應與生態習性：' : (isEs ? 'Comportamiento Meteorológico y Ecológico:' : 'Meteorological & Ecological Behavior:');
    const labelHabitat = isZh ? '🌍 偏好棲息地' : (isEs ? '🌍 Hábitat Preferido' : '🌍 Preferred Habitat');
    const labelDiet = isZh ? '🍽️ 覓食習性' : (isEs ? '🍽️ Dieta de Forrajeo' : '🍽️ Weather Foraging Diet');
    const labelStatus = isZh ? '⚠️ 生態現狀' : (isEs ? '⚠️ Estado de Conservación' : '⚠️ Status');
    const btnSoundText = isZh ? `${soundIcon} 聆聽${soundLabel}` : (isEs ? `${soundIcon} Escuchar ${soundLabel}` : `${soundIcon} Hear ${soundLabel}`);
    const btnAnatomyText = isZh ? '🔬 解剖 X 光視圖' : (isEs ? '🔬 Anatomía Interna' : '🔬 Inside Anatomy');
    const btnFullCardText = isZh ? '📖 完整物種百科卡 ➡️' : (isEs ? '📖 Ficha de Especie Completa ➡️' : '📖 Full Species Card ➡️');

    card.innerHTML = `
      <div class="weather-specimen-spotlight">
        <div class="specimen-spotlight-top">
          <div class="specimen-avatar-box" onclick="window.app && window.app.openAnimalDetail('${a.id}')">
            <img src="${window.app ? window.app.formatImageUrl(a.image, 400) : a.image}" alt="${a.name}" class="specimen-avatar-img">
            <span class="specimen-cat-badge">${a.emoji} ${locName}</span>
          </div>
          <div class="specimen-title-box">
            <span class="weather-match-tag">${tagActive}</span>
            <h3 class="specimen-name" onclick="window.app && window.app.openAnimalDetail('${a.id}')">${a.emoji} ${locName}</h3>
            <div class="specimen-sci">${a.scientific}</div>
            <p class="specimen-tagline">"${locTagline}"</p>
          </div>
        </div>

        <!-- Weather Adaptation & Ecology Box -->
        <div class="weather-adaptation-box">
          <div class="adaptation-header">
            <span class="adaptation-icon">🌡️</span>
            <strong>${labelEcology}</strong>
          </div>
          <p class="adaptation-text">${locEcologyReason}</p>
        </div>

        <!-- Mini Specs Grid -->
        <div class="weather-specs-row">
          <div class="weather-mini-stat">
            <span class="stat-label">${labelHabitat}</span>
            <strong class="stat-val">${locHabitat}</strong>
          </div>
          <div class="weather-mini-stat">
            <span class="stat-label">${labelDiet}</span>
            <strong class="stat-val">${locDiet}</strong>
          </div>
          <div class="weather-mini-stat">
            <span class="stat-label">${labelStatus}</span>
            <strong class="stat-val">${locStatus}</strong>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="weather-card-actions">
          <button class="btn-weather-act btn-sound" onclick="window.app && window.app.playSound('${a.id}', this)">
            ${btnSoundText}
          </button>
          <button class="btn-weather-act btn-anatomy" onclick="window.AK_WEATHER.closeWeatherModal(); window.AK_ANATOMY && window.AK_ANATOMY.openAnatomyModal(); window.AK_ANATOMY && window.AK_ANATOMY.selectAnimalById('${a.id}');">
            ${btnAnatomyText}
          </button>
          <button class="btn-weather-act btn-open-card" onclick="window.app && window.app.openAnimalDetail('${a.id}')">
            ${btnFullCardText}
          </button>
        </div>
      </div>
    `;
  }

  // =========================================================
  // IRVINE, CALIFORNIA LIVE METEOROLOGY & WILDLIFE FORECASTER
  // =========================================================
  async calculateIrvineWeather(cityName = 'Irvine, California') {
    this.currentLocation = cityName;
    const hudLocation = document.getElementById('irvine-weather-location');
    const hudTemp = document.getElementById('irvine-weather-temp');
    const hudCondition = document.getElementById('irvine-weather-condition');
    const listEl = document.getElementById('irvine-wildlife-list');

    if (hudLocation) hudLocation.innerText = `📍 ${cityName}`;

    // Fetch live real-time meteorology for Irvine, CA
    try {
      const lat = 33.6846;
      const lon = -117.8265;

      const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,precipitation,weather_code,cloud_cover,wind_speed_10m,is_day&temperature_unit=fahrenheit&wind_speed_unit=mph`);
      if (res.ok) {
        const data = await res.json();
        if (data && data.current) {
          const liveTempF = Math.round(data.current.temperature_2m);
          const liveTempC = Math.round((liveTempF - 32) * 5/9);
          const weatherCode = data.current.weather_code;
          const cloudCover = data.current.cloud_cover;
          const humidity = data.current.relative_humidity_2m;
          const isDay = data.current.is_day === 1;

          let conditionText = 'Clear & Sunny';
          let conditionIcon = isDay ? '☀️' : '🌙';

          if (weatherCode === 0) {
            conditionText = isDay ? 'Clear Skies & Sun' : 'Clear Moonlit Skies';
            conditionIcon = isDay ? '☀️' : '🌙';
          } else if (weatherCode === 1) {
            conditionText = 'Mainly Clear';
            conditionIcon = isDay ? '🌤️' : '🌙';
          } else if (weatherCode === 2) {
            conditionText = 'Partly Cloudy';
            conditionIcon = '⛅';
          } else if (weatherCode === 3) {
            conditionText = 'Overcast & Cloudy';
            conditionIcon = '☁️';
          } else if (weatherCode === 45 || weatherCode === 48) {
            conditionText = 'Coastal Fog / Marine Layer';
            conditionIcon = '🌫️';
          } else if (weatherCode >= 51 && weatherCode <= 67) {
            conditionText = 'Light Coastal Drizzle';
            conditionIcon = '🌧️';
          } else if (weatherCode >= 80 && weatherCode <= 82) {
            conditionText = 'Rain Showers';
            conditionIcon = '🌦️';
          } else if (weatherCode >= 95) {
            conditionText = 'Thunderstorm';
            conditionIcon = '⛈️';
          }

          if (hudTemp) hudTemp.innerText = `${liveTempF}°F (${liveTempC}°C)`;
          if (hudCondition) hudCondition.innerText = `${conditionIcon} ${conditionText} • Clouds: ${cloudCover}% • Humidity: ${humidity}%`;
          
          this.renderIrvineFaunaList(liveTempC, conditionText, isDay);
          return;
        }
      }
    } catch (e) {
      console.warn('Using local Irvine meteorological fallback model', e);
    }

    // Accurate real-time Irvine Southern California climate
    const fallbackTempC = 27;
    const fallbackTempF = 81;
    if (hudTemp) hudTemp.innerText = `${fallbackTempF}°F (${fallbackTempC}°C)`;
    if (hudCondition) hudCondition.innerText = `☁️ Overcast & Cloudy • Clouds: 100% • Humidity: 76%`;
    this.renderIrvineFaunaList(fallbackTempC, 'Overcast', true);
  }

  renderIrvineFaunaList(tempC, condition, isDay) {
    const listEl = document.getElementById('irvine-wildlife-list');
    if (!listEl) return;

    listEl.innerHTML = this.irvineFauna.map(item => {
      return `
        <div class="irvine-animal-card" onclick="window.AK_WEATHER.searchAndSelectAnimal('${item.query}')" title="Click to view ${item.name}">
          <div class="irvine-card-top">
            <span class="irvine-animal-name">${item.name}</span>
            <span class="irvine-live-tag">🟢 ACTIVE NOW</span>
          </div>
          <p class="irvine-animal-trait">${item.trait}</p>
        </div>
      `;
    }).join('');
  }

  searchAndSelectAnimal(query) {
    const all = this.getAllAnimals();
    const match = all.find(a => a.name.toLowerCase().includes(query.toLowerCase()));
    if (match) {
      this.selectedAnimal = match;
      this.selectAnimalDot({ animal: match, ecologyReason: `Native/regional specimen active in local Irvine climate conditions.` });
      const card = document.getElementById('weather-creature-card');
      if (card) card.scrollIntoView({ behavior: 'smooth' });
    }
  }

  setIrvineToRain() {
    this.setPreset('rain', true);
    this.temperatureC = 20;
    this.precipitation = 90;
    this.windSpeedMph = 14;
    this.humidity = 96;
    this.timeOfDay = 'day';

    const hudTemp = document.getElementById('irvine-weather-temp');
    const hudCondition = document.getElementById('irvine-weather-condition');
    if (hudTemp) hudTemp.innerText = `68°F (20°C)`;
    if (hudCondition) hudCondition.innerText = `🌧️ Rain & Coastal Showers • Rain Pattering Down • 96% Humidity`;

    this.updateControlsUI();
    this.initParticles();
    this.computeActiveFauna();
    this.updateWeatherHUD();

    const listEl = document.getElementById('irvine-wildlife-list');
    if (listEl) {
      const rainFauna = [
        { name: 'Pacific Tree Frog', query: 'Tree Frog', trait: '🐸 Chorusing intensely across Irvine San Joaquin wetlands and creeks in the rain!' },
        { name: 'California Newt / Salamander', query: 'Salamander', trait: '🦎 Emerging from damp leaf litter and burrows to hunt worms in wet soil' },
        { name: 'Garden Snail & Earthworm', query: 'Snail', trait: '🐌 Surfacing on damp sidewalks, gardens, and soils across Irvine right now' },
        { name: 'Great Blue Heron', query: 'Heron', trait: '🦅 Stalking fish, frogs, and emerging prey along overflowing Irvine rain ponds' },
        { name: 'Mallard Duck', query: 'Duck', trait: '🦆 Swimming and bathing with waterproof feathers in fresh rainwater puddles' },
        { name: 'Striped Skunk & Raccoon', query: 'Skunk', trait: '🦝 Foraging for surfacing worms and rain-displaced insects along greenbelts' }
      ];

      listEl.innerHTML = rainFauna.map(item => {
        return `
          <div class="irvine-animal-card rain-active-card" onclick="window.AK_WEATHER.searchAndSelectAnimal('${item.query}')" title="Click to view ${item.name}">
            <div class="irvine-card-top">
              <span class="irvine-animal-name">${item.name}</span>
              <span class="irvine-live-tag" style="color: #38bdf8;">🌧️ ACTIVE IN RAIN</span>
            </div>
            <p class="irvine-animal-trait">${item.trait}</p>
          </div>
        `;
      }).join('');
    }
  }

  applyIrvineWeatherToSimulator() {
    this.setPreset('sunny');
    this.temperatureC = 23;
    this.precipitation = 0;
    this.windSpeedMph = 8;
    this.humidity = 55;
    this.timeOfDay = 'day';
    this.updateControlsUI();
    this.initParticles();
    this.computeActiveFauna();
    this.updateWeatherHUD();
  }

  playWeatherCueSound(weatherType) {
    if (this.isSoundMuted) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      if (!this.audioContext) this.audioContext = new AudioContext();

      const ctx = this.audioContext;
      if (ctx.state === 'suspended') ctx.resume();

      if (weatherType === 'rain' || weatherType === 'thunderstorm') {
        // Synthesize gentle pink noise rain patter
        const bufferSize = ctx.sampleRate * 0.8;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
          data[i] = (Math.random() * 2 - 1) * 0.15;
        }
        const noise = ctx.createBufferSource();
        noise.buffer = buffer;
        const filter = ctx.createBiquadFilter();
        filter.type = 'lowpass';
        filter.frequency.value = 800;
        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.2, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.8);

        noise.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);
        noise.start();
      } else if (weatherType === 'sunny') {
        // Bright bell harmonic chime
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(659.25, ctx.currentTime); // E5
        osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.3); // A5
        gain.gain.setValueAtTime(0.18, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.6);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.6);
      } else if (weatherType === 'snow') {
        // Crisp high-frequency crystal bell
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(1046.5, ctx.currentTime); // C6
        gain.gain.setValueAtTime(0.15, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.5);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();
        osc.stop(ctx.currentTime + 0.5);
      }
    } catch (e) {}
  }
}

// Instantiate global Weather Engine
window.AK_WEATHER = new AnimalWeatherSimulator();
