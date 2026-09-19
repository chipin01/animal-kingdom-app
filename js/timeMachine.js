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

  renderMenu() {
    const menuEl = document.getElementById('tm-pair-menu');
    if (!menuEl) return;
    
    menuEl.innerHTML = this.pairs.map(p => {
      const isActive = p.id === this.currentPairId ? 'active' : '';
      return `
        <button class="tm-menu-btn ${isActive}" onclick="window.AK_TIME_MACHINE.loadPair('${p.id}')">
          ${p.modernName} ➡️ ${p.ancientName}
        </button>
      `;
    }).join('');
  }

  loadPair(id) {
    this.currentPairId = id;
    this.renderMenu(); // update active state
    
    const pair = this.pairs.find(p => p.id === id);
    if (!pair) return;

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
    const pair = this.pairs.find(p => p.id === this.currentPairId);
    if (!pair) return;

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
      if (progress < 50) {
        modBox.style.opacity = 1 - (normalized * 2);
        modBox.style.pointerEvents = 'auto';
        
        ancBox.style.opacity = 0;
        ancBox.style.pointerEvents = 'none';
        
        timeDisplay.textContent = `Era: ${pair.modernTime}`;
        timeDisplay.style.color = '#10b981'; // modern emerald
      } else {
        modBox.style.opacity = 0;
        modBox.style.pointerEvents = 'none';
        
        // fade ancient in from 50 to 100
        ancBox.style.opacity = (normalized - 0.5) * 2;
        ancBox.style.pointerEvents = 'auto';
        
        timeDisplay.textContent = `Era: ${pair.ancientTime}`;
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

