// Animal of the Day Selector & Surprise Generator

function getAllAnimals() {
  const all = [];
  if (window.AMPHIBIANS_DATA) all.push(...window.AMPHIBIANS_DATA);
  if (window.INSECTS_DATA) all.push(...window.INSECTS_DATA);
  if (window.MARINE_DATA) all.push(...window.MARINE_DATA);
  if (window.LAND_DATA) all.push(...window.LAND_DATA);
  if (window.BIRDS_DATA) all.push(...window.BIRDS_DATA);
  if (window.PLANTS_DATA) all.push(...window.PLANTS_DATA);
  if (window.GEMSTONES_DATA) all.push(...window.GEMSTONES_DATA);
  if (window.REPTILES_DATA) all.push(...window.REPTILES_DATA);
  return all;
}

// Deterministic Pseudo-Random Number based on calendar date
function getDateSeed() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1; // 1-12
  const day = now.getDate(); // 1-31
  // Simple integer hash
  return (year * 365) + (month * 31) + day;
}

function getAnimalOfTheDay() {
  const all = getAllAnimals();
  if (all.length === 0) return null;

  const seed = getDateSeed();
  // Mulberry32 pseudo random hash
  let t = seed + 0x6D2B79F5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  const randIndex = Math.abs((t ^ (t >>> 14)) >>> 0) % all.length;

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const dateStr = new Date().toLocaleDateString(undefined, options);

  return {
    animal: all[randIndex],
    dateStr: dateStr,
    isToday: true
  };
}

function getRandomAnimal(excludeId) {
  const all = getAllAnimals();
  if (all.length === 0) return null;
  let picked = all[Math.floor(Math.random() * all.length)];
  if (excludeId && all.length > 1) {
    let attempts = 0;
    while (picked.id === excludeId && attempts < 10) {
      picked = all[Math.floor(Math.random() * all.length)];
      attempts++;
    }
  }
  return picked;
}

window.AK_AOD = {
  getAllAnimals,
  getAnimalOfTheDay,
  getRandomAnimal
};
