class PrehistoricTimeMachine {
  constructor() {
    this.currentPairId = 't-rex'; // default
    this.audioCtx = null;

    // The Prehistoric Evolution Dataset
    this.pairs = [
      {
        id: 't-rex',
        modernName: 'Chicken',
        modernSci: 'Gallus gallus domesticus',
        modernImage: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/8/84/Male_and_female_chicken_sitting_together.jpg&w=600&output=jpg',
        modernTime: 'Present Day',
        modernDesc: 'Small, flightless domestic fowl known for laying eggs. Despite their size, their skeletal structure holds deep prehistoric secrets.',
        ancientName: 'Tyrannosaurus Rex',
        ancientSci: 'Tyrannosaurus rex',
        ancientImage: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/9/94/Tyrannosaurus_rex_by_durbed.jpg&w=600&output=jpg',
        ancientTime: '66 Million Years Ago',
        ancientDesc: 'A colossal apex predator of the Late Cretaceous. Scientists discovered that the T-Rex shares remarkable genetic and skeletal similarities with modern chickens!',
        timelineProgress: 100
      },
      {
        id: 'megalodon',
        modernName: 'Great White Shark',
        modernSci: 'Carcharodon carcharias',
        modernImage: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/56/White_shark.jpg&w=600&output=jpg',
        modernTime: 'Present Day',
        modernDesc: 'A formidable marine predator growing up to 20 feet long. They roam coastal surface waters across all major oceans.',
        ancientName: 'Megalodon',
        ancientSci: 'Otodus megalodon',
        ancientImage: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/c/c5/Carcharodon_megalodon.jpg&w=600&output=jpg',
        ancientTime: '3.6 Million Years Ago',
        ancientDesc: 'The largest shark that ever lived, reaching estimated lengths of 60 feet. Its jaws were so large it could swallow a car whole. It went extinct due to ocean cooling.',
        timelineProgress: 100
      },
      {
        id: 'mammoth',
        modernName: 'African Elephant',
        modernSci: 'Loxodonta africana',
        modernImage: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg&w=600&output=jpg',
        modernTime: 'Present Day',
        modernDesc: 'The largest living land animal, completely hairless to adapt to the scorching African savannas, possessing highly intelligent social structures.',
        ancientName: 'Woolly Mammoth',
        ancientSci: 'Mammuthus primigenius',
        ancientImage: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/a/a2/Woolly_mammoth_%28Mammuthus_primigenius%29_-_Mauricio_Ant%C3%B3n.jpg&w=600&output=jpg',
        ancientTime: '10,000 Years Ago',
        ancientDesc: 'A majestic giant perfectly adapted to the Ice Age with a thick coat of shaggy fur, 15-foot curved tusks, and small ears to prevent frostbite.',
        timelineProgress: 100
      },
      {
        id: 'smilodon',
        modernName: 'Bengal Tiger',
        modernSci: 'Panthera tigris tigris',
        modernImage: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/b/b0/Bengal_tiger_%28Panthera_tigris_tigris%29_female_3_crop.jpg&w=600&output=jpg',
        modernTime: 'Present Day',
        modernDesc: 'A powerful solitary big cat of the Asian jungles, known for its distinctive orange coat and black stripes used for camouflage.',
        ancientName: 'Smilodon (Sabertooth)',
        ancientSci: 'Smilodon fatalis',
        ancientImage: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/8/87/Smilodon_fatalis.jpg&w=600&output=jpg',
        ancientTime: '10,000 Years Ago',
        ancientDesc: 'An incredibly muscular predator of the Americas featuring terrifying 11-inch canine teeth designed to inflict lethal bite wounds on large megafauna.',
        timelineProgress: 100
      },
      {
        id: 'sloth',
        modernName: 'Three-Toed Sloth',
        modernSci: 'Bradypus',
        modernImage: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/18/Bradypus.jpg&w=600&output=jpg',
        modernTime: 'Present Day',
        modernDesc: 'A small, incredibly slow-moving tree dweller in Central and South America. They are so slow that algae grows in their fur!',
        ancientName: 'Megatherium',
        ancientSci: 'Megatherium americanum',
        ancientImage: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/1a/Megatherium_americanum_01.jpg&w=600&output=jpg',
        ancientTime: '11,000 Years Ago',
        ancientDesc: 'A titanic Giant Ground Sloth the size of a modern elephant! It weighed 4 tons and could stand on its hind legs to rip branches from tall trees.',
        timelineProgress: 100
      },
      {
        id: 'sarcosuchus',
        modernName: 'Nile Crocodile',
        modernSci: 'Crocodylus niloticus',
        modernImage: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/2/23/Nile_Crocodile_Crocodilus_niloticus.jpg&w=600&output=jpg',
        modernTime: 'Present Day',
        modernDesc: 'An opportunistic ambush predator that waits near riverbanks. They reach about 16 feet in length and take down zebras and wildebeests.',
        ancientName: 'Sarcosuchus',
        ancientSci: 'Sarcosuchus imperator',
        ancientImage: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/6/6c/Sarcosuchus_imperator_1.jpg&w=600&output=jpg',
        ancientTime: '112 Million Years Ago',
        ancientDesc: 'Often called "SuperCroc", this behemoth reached over 40 feet in length and weighed 8 tons. It shared rivers with dinosaurs and actively hunted them!',
        timelineProgress: 100
      },
      {
        id: 'paraceratherium',
        modernName: 'White Rhinoceros',
        modernSci: 'Ceratotherium simum',
        modernImage: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/14/Ceratotherium_simum_kwa_Zulu_Natal.jpg&w=600&output=jpg',
        modernTime: 'Present Day',
        modernDesc: 'A massive, heavily built herbivore known for its large horns and thick armor-like skin.',
        ancientName: 'Paraceratherium',
        ancientSci: 'Paraceratherium bugtiense',
        ancientImage: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/5/52/Paraceratherium_12.jpg&w=600&output=jpg',
        ancientTime: '34 Million Years Ago',
        ancientDesc: 'The largest land mammal to ever walk the Earth! It was a towering, hornless rhinoceros with a long neck that grazed on treetops like a giraffe.',
        timelineProgress: 100
      },
      {
        id: 'basilosaurus',
        modernName: 'Blue Whale',
        modernSci: 'Balaenoptera musculus',
        modernImage: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/1/1c/Animal_Blue_Whale.jpg&w=600&output=jpg',
        modernTime: 'Present Day',
        modernDesc: 'The largest animal known to have ever existed on Earth, a gentle marine giant that filters tiny krill from the ocean.',
        ancientName: 'Basilosaurus',
        ancientSci: 'Basilosaurus cetoides',
        ancientImage: 'https://images.weserv.nl/?url=https://upload.wikimedia.org/wikipedia/commons/6/66/Basilosaurus_1.jpg&w=600&output=jpg',
        ancientTime: '40 Million Years Ago',
        ancientDesc: 'Despite its name meaning "King Lizard", this was actually an early whale! It had a terrifying serpentine body up to 65 feet long and sharp teeth for hunting.',
        timelineProgress: 100
      }
    ];
  }

  openModal() {
    const modal = document.getElementById('time-machine-modal');
    if (modal) {
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      this.renderMenu();
      this.loadPair(this.currentPairId);
      
      // Init sound
      if (!this.audioCtx) {
        try {
          this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
          console.warn('AudioContext not supported');
        }
      }
      
      if (window.AK_AUDIO && window.AK_AUDIO.playSpecialSound) {
        window.AK_AUDIO.playSpecialSound('unlock');
      }
    }
  }

  closeModal() {
    const modal = document.getElementById('time-machine-modal');
    if (modal) {
      modal.classList.add('hidden');
      document.body.style.overflow = '';
    }
  }

  getLocalizedPair(pair) {
    if (!pair) return null;
    const lang = window.AK_I18N ? window.AK_I18N.getLanguage() : 'en';
    if (lang === 'en') return pair;

    const dict = {
      zh: {
        't-rex': {
          modName: '家雞',
          modTime: '現代',
          modDesc: '體型小巧、不會飛行的家禽，以產蛋聞名。儘管外觀差異巨大，其骨骼結構與基因卻深藏著史前巨型肉食恐龍的演化密碼。',
          ancName: '霸王龍 (雷克斯暴龍)',
          ancTime: '6600萬年前 (白堊紀晚期)',
          ancDesc: '白堊紀晚期的頂級霸主。古生物學研究證實，霸王龍的骨骼、膠原蛋白分子與現代鳥類和家雞具有驚人的演化親緣！'
        },
        'megalodon': {
          modName: '大白鯊',
          modTime: '現代',
          modDesc: '長達20英尺的頂級海洋掠食猛獸，巡游於全球各大洋溫帶及熱帶近岸水域。',
          ancName: '巨齒鯊 (巨牙鯊)',
          ancTime: '360萬年前 (上新世)',
          ancDesc: '地球歷史上體型最龐大的巨型鯊魚，體長估計達60英尺。其血盆巨口足以完整吞下一輛汽車！'
        },
        'mammoth': {
          modName: '非洲草原象',
          modTime: '現代',
          modDesc: '現存陸地上最龐大的哺乳動物，全身幾無毛髮以適應熾熱非洲草原，具備極高的家族情感與記憶力。',
          ancName: '真猛獁象 (長毛象)',
          ancTime: '1萬年前 (更新世冰河期)',
          ancDesc: '冰河世紀的標誌性巨獸，身披濃密保暖長毛，擁有長達15英尺的巨大螺旋狀彎曲獠牙。'
        },
        'smilodon': {
          modName: '孟加拉虎',
          modTime: '現代',
          modDesc: '亞洲叢林中的獨行王者，擁有標誌性的橙黑偽裝條紋與爆發力。',
          ancName: '斯劍虎 (劍齒虎)',
          ancTime: '1萬年前 (更新世)',
          ancDesc: '史前最著名的刀齒貓科猛獸，擁有長達28公分的致命匕首狀犬齒，能精準鎖喉巨型獵物。'
        },
        'sloth': {
          modName: '三趾樹懶',
          modTime: '現代',
          modDesc: '熱帶雨林樹冠上行動極度緩慢的小型樹棲動物，甚至連毛髮上都會生長共生藻類。',
          ancName: '大地懶 (巨地懶)',
          ancTime: '1.1萬年前 (更新世)',
          ancDesc: '站立時高達6公尺、體重超過4噸的史前陸生巨獸，體型堪比現代巨象，前肢擁有巨大彎爪！'
        },
        'sarcosuchus': {
          modName: '尼羅鱷',
          modTime: '現代',
          modDesc: '非洲河流中的伏擊王者，體長可達16英尺，能伏擊斑馬與角馬。',
          ancName: '帝鱷 (超級巨鱷)',
          ancTime: '1.12億年前 (白堊紀早期)',
          ancDesc: '史前河流的恐怖霸主，體長超過40英尺、體重逾8噸，經常在水邊伏擊捕食恐龍！'
        },
        'paraceratherium': {
          modName: '白犀牛',
          modTime: '現代',
          modDesc: '體型龐大、體重逾2噸的草食性巨獸，具備厚實皮膚與堅硬鼻角。',
          ancName: '巨犀 (天山副巨犀)',
          ancTime: '3400萬年前 (漸新世)',
          ancDesc: '地球歷史上出現過最大的陸地哺乳動物！無角但脖頸極長，站立時肩高達5公尺，能像長頸鹿一樣啃食高大樹冠。'
        },
        'basilosaurus': {
          modName: '藍鯨',
          modTime: '現代',
          modDesc: '地球歷史上已知體型最大的生物，長達30公尺，溫柔地濾食微小磷蝦。',
          ancName: '龍王鯨 (械齒鯨)',
          ancTime: '4000萬年前 (始新世)',
          ancDesc: '長達65英尺的古鯨類，擁有細長如巨蛇的蜿蜒身軀與鋒利牙齒，體側還保留著退化的微小後肢！'
        }
      },
      es: {
        't-rex': {
          modName: 'Pollo / Gallina',
          modTime: 'Época Actual',
          modDesc: 'Ave doméstica de pequeño tamaño. Su esqueleto y genética guardan profundos secretos compartidos con los dinosaurios carnívoros.',
          ancName: 'Tiranosaurio Rex',
          ancTime: 'Hace 66 Millones de Años',
          ancDesc: 'Un colosal depredador del Cretácico Tardío. Los científicos confirmaron que comparte sorprendentes similitudes óseas con las aves modernas.'
        },
        'megalodon': {
          modName: 'Gran Tiburón Blanco',
          modTime: 'Época Actual',
          modDesc: 'Un temible depredador marino que alcanza hasta 20 pies de largo en aguas oceánicas.',
          ancName: 'Megalodón',
          ancTime: 'Hace 3.6 Millones de Años',
          ancDesc: 'El tiburón más gigantesco de la historia de la Tierra, con 60 pies de longitud y mandíbulas capaces de tragar un automóvil entero.'
        },
        'mammoth': {
          modName: 'Elefante Africano',
          modTime: 'Época Actual',
          modDesc: 'El mamífero terrestre vivo más grande, sin pelaje para resistir el calor de la sabana.',
          ancName: 'Mamut Lanudo',
          ancTime: 'Hace 10,000 Años',
          ancDesc: 'Gigante adaptado a la Edad de Hielo con una densa capa de pelaje y colmillos curvos de 15 pies de longitud.'
        },
        'smilodon': {
          modName: 'Tigre de Bengala',
          modTime: 'Época Actual',
          modDesc: 'Poderoso gran felino solitario de las selvas asiáticas.',
          ancName: 'Smilodon (Dientes de Sable)',
          ancTime: 'Hace 10,000 Años',
          ancDesc: 'Legendario felino prehistórico dotado de colmillos en forma de daga de 28 cm para cazar megafauna.'
        },
        'sloth': {
          modName: 'Perezoso de Tres Dedos',
          modTime: 'Época Actual',
          modDesc: 'Pequeño habitante arborícola de movimientos muy lentos en selvas tropicales.',
          ancName: 'Megaterio (Perezoso Gigante)',
          ancTime: 'Hace 11,000 Años',
          ancDesc: 'Un titán de 4 toneladas y 6 metros de altura capaz de derribar ramas de árboles gigantescos.'
        },
        'sarcosuchus': {
          modName: 'Cocodrilo del Nilo',
          modTime: 'Época Actual',
          modDesc: 'Depredador de emboscada que habita las riberas africanas alcanzando 16 pies.',
          ancName: 'Sarcosuchus (SuperCocodrilo)',
          ancTime: 'Hace 112 Millones de Años',
          ancDesc: 'Un monstruo prehistórico de 40 pies de longitud y 8 toneladas que compartía ríos con dinosaurios y los cazaba.'
        },
        'paraceratherium': {
          modName: 'Rinoceronte Blanco',
          modTime: 'Época Actual',
          modDesc: 'Gran herbívoro de más de 2 toneladas dotado de cuernos defensivos.',
          ancName: 'Paraceratherium (Rinoceronte Gigante)',
          ancTime: 'Hace 34 Millones de Años',
          ancDesc: '¡El mamífero terrestre más grande de la historia! Sin cuernos, con un largo cuello que alcanzaba las copas de los árboles.'
        },
        'basilosaurus': {
          modName: 'Ballena Azul',
          modTime: 'Época Actual',
          modDesc: 'El ser vivo más colosal conocido en la historia, filtrador de kril oceánico.',
          ancName: 'Basilosaurio',
          ancTime: 'Hace 40 Millones de Años',
          ancDesc: 'Ballena ancestral de cuerpo serpentino de 65 pies que aún conservaba patas traseras vestigiales.'
        }
      }
    };

    const loc = dict[lang] && dict[lang][pair.id];
    if (!loc) return pair;

    return {
      ...pair,
      modernName: loc.modName || pair.modernName,
      modernTime: loc.modTime || pair.modernTime,
      modernDesc: loc.modDesc || pair.modernDesc,
      ancientName: loc.ancName || pair.ancientName,
      ancientTime: loc.ancTime || pair.ancientTime,
      ancientDesc: loc.ancDesc || pair.ancientDesc
    };
  }

  renderMenu() {
    const menuEl = document.getElementById('tm-pair-menu');
    if (!menuEl) return;
    
    menuEl.innerHTML = this.pairs.map(p => {
      const loc = this.getLocalizedPair(p);
      const isActive = p.id === this.currentPairId ? 'active' : '';
      return `
        <button class="tm-menu-btn ${isActive}" onclick="window.AK_TIME_MACHINE.loadPair('${p.id}')">
          ${loc.modernName} ➡️ ${loc.ancientName}
        </button>
      `;
    }).join('');
  }

  loadPair(id) {
    this.currentPairId = id;
    this.renderMenu(); // update active state
    
    const rawPair = this.pairs.find(p => p.id === id);
    if (!rawPair) return;
    const pair = this.getLocalizedPair(rawPair);

    // Reset slider to 0 (Modern Day)
    const slider = document.getElementById('tm-dial-slider');
    if (slider) {
      slider.value = 0;
    }

    // Set Images
    const modernImg = document.getElementById('tm-img-modern');
    const ancientImg = document.getElementById('tm-img-ancient');
    if (modernImg && ancientImg) {
      modernImg.src = pair.modernImage;
      ancientImg.src = pair.ancientImage;
      ancientImg.style.opacity = 0;
      modernImg.style.opacity = 1;
      modernImg.style.filter = 'grayscale(0%)';
    }

    // Update Text Data
    document.getElementById('tm-mod-name').textContent = pair.modernName;
    document.getElementById('tm-mod-sci').textContent = pair.modernSci;
    document.getElementById('tm-mod-time').textContent = pair.modernTime;
    document.getElementById('tm-mod-desc').textContent = pair.modernDesc;

    document.getElementById('tm-anc-name').textContent = pair.ancientName;
    document.getElementById('tm-anc-sci').textContent = pair.ancientSci;
    document.getElementById('tm-anc-time').textContent = pair.ancientTime;
    document.getElementById('tm-anc-desc').textContent = pair.ancientDesc;

    this.onDialChange(0); // Trigger initial state
  }

  onDialChange(val) {
    const rawPair = this.pairs.find(p => p.id === this.currentPairId);
    if (!rawPair) return;
    const pair = this.getLocalizedPair(rawPair);

    const modernImg = document.getElementById('tm-img-modern');
    const ancientImg = document.getElementById('tm-img-ancient');
    const modBox = document.getElementById('tm-info-modern');
    const ancBox = document.getElementById('tm-info-ancient');
    const timeDisplay = document.getElementById('tm-time-display');

    // Values from 0 to 100
    const progress = parseInt(val, 10);
    const normalized = progress / 100;

    // Image blending
    if (modernImg && ancientImg) {
      ancientImg.style.opacity = normalized;
      // Fade modern out slightly, and add sepia/grayscale as we go back in time
      modernImg.style.opacity = 1 - (normalized * 0.5);
      modernImg.style.filter = `sepia(${normalized * 100}%) blur(${normalized * 2}px)`;
    }

    // Info panel switching (Crossfade threshold at 50%)
    if (modBox && ancBox) {
      const isZh = window.AK_I18N && window.AK_I18N.getLanguage() === 'zh';
      const isEs = window.AK_I18N && window.AK_I18N.getLanguage() === 'es';
      const eraPrefix = isZh ? '時代' : (isEs ? 'Era' : 'Era');

      if (progress < 50) {
        modBox.style.opacity = 1 - (normalized * 2);
        modBox.style.pointerEvents = 'auto';
        
        ancBox.style.opacity = 0;
        ancBox.style.pointerEvents = 'none';
        
        timeDisplay.textContent = `${eraPrefix}: ${pair.modernTime}`;
        timeDisplay.style.color = '#10b981'; // modern emerald
      } else {
        modBox.style.opacity = 0;
        modBox.style.pointerEvents = 'none';
        
        // fade ancient in from 50 to 100
        ancBox.style.opacity = (normalized - 0.5) * 2;
        ancBox.style.pointerEvents = 'auto';
        
        timeDisplay.textContent = `${eraPrefix}: ${pair.ancientTime}`;
        timeDisplay.style.color = '#f59e0b'; // prehistoric amber
      }
    }

    // Play a mechanical winding sound based on slider movement if AudioContext exists
    if (this.audioCtx && this.audioCtx.state === 'running' && progress > 0 && progress < 100) {
      if (Math.random() > 0.6) {
        this._playTickSound();
      }
    }
  }

  _playTickSound() {
    if (!this.audioCtx) return;
    const osc = this.audioCtx.createOscillator();
    const gain = this.audioCtx.createGain();
    
    osc.type = 'square';
    osc.frequency.setValueAtTime(100 + Math.random() * 50, this.audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(50, this.audioCtx.currentTime + 0.05);
    
    gain.gain.setValueAtTime(0.05, this.audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.05);
    
    osc.connect(gain);
    gain.connect(this.audioCtx.destination);
    
    osc.start();
    osc.stop(this.audioCtx.currentTime + 0.05);
  }
}

// Global Singleton Initialization
window.addEventListener('DOMContentLoaded', () => {
  window.AK_TIME_MACHINE = new PrehistoricTimeMachine();
});

