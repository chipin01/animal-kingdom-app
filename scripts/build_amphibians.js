const fs = require('fs');
const path = require('path');

const amphibians = [
  {
    id: 'red-eyed-tree-frog',
    name: 'Red-Eyed Tree Frog',
    scientific: 'Agalychnis callidryas',
    category: 'amphibians',
    emoji: '🐸',
    tagline: 'The rainforest acrobat with flashing ruby eyes!',
    description: 'This vibrant green tree frog hides underneath big leaves by day, tucking in its colorful blue and yellow sides. When startled by a bird or snake, it pops open its giant red eyes to freeze predators in their tracks while it makes a lightning-fast leap!',
    habitat: 'Tropical rainforest canopies of Central America and northern South America',
    diet: 'Carnivore (Insectivore) - crickets, moths, flies, grasshoppers, and beetles',
    endangered: 'Least Concern',
    predators: 'Tree snakes, bats, owls, toucans, and large spiders',
    funFact: 'They have a clear third eyelid (nictitating membrane) that protects their eyes while still letting them see!',
    image: 'https://images.unsplash.com/photo-1579380656108-328e8042d0ae?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'golden-poison-dart-frog',
    name: 'Golden Poison Dart Frog',
    scientific: 'Phyllobates terribilis',
    category: 'amphibians',
    emoji: '🟡',
    tagline: 'The most toxic creature on planet Earth!',
    description: 'A tiny frog no bigger than a paperclip, but a single golden frog carries enough batrachotoxin in its bright yellow skin to protect itself from almost any jungle predator. Its radiant color is nature\'s ultimate DO NOT TOUCH sign.',
    habitat: 'Rainforest floor of the Pacific coast of Colombia',
    diet: 'Insectivore - rainforest ants, termites, and tiny beetles',
    endangered: 'Endangered',
    predators: 'Only the fire-bellied snake (Liophis epinephelus), which has evolved poison resistance!',
    funFact: 'Indigenous hunters in Colombia used their skin secretions to tip poison darts for blowguns!',
    image: 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'axolotl',
    name: 'Axolotl',
    scientific: 'Ambystoma mexicanum',
    category: 'amphibians',
    emoji: '🦎',
    tagline: 'The smiling water monster that never grows up!',
    description: 'The axolotl is an extraordinary salamander famous for its feathery external pink gills and cute permanent smile. It stays underwater its whole life and has the miraculous superpower to regrow lost legs, gills, and even heart tissue!',
    habitat: 'Lake Xochimilco canal waterways near Mexico City, Mexico',
    diet: 'Carnivore - worms, minnows, small water insects, and crustaceans',
    endangered: 'Critically Endangered',
    predators: 'Herons, storks, and introduced predatory carp and tilapia',
    funFact: 'Axolotls can regenerate parts of their brain and spinal cord without leaving any scars!',
    image: 'https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'goliath-frog',
    name: 'Goliath Frog',
    scientific: 'Conraua goliath',
    category: 'amphibians',
    emoji: '🐸',
    tagline: 'The heavyweight king of frogs - as big as a cat!',
    description: 'Weighing up to 7 pounds and stretching over a foot long, the Goliath frog is the undisputed giant of the amphibian world. It can launch itself more than 10 feet across rushing river boulders in a single bound.',
    habitat: 'Fast-rushing rivers and dense rainforests of Cameroon and Equatorial Guinea',
    diet: 'Carnivore - river crabs, fish, spiders, scorpions, and small frogs',
    endangered: 'Endangered',
    predators: 'Crocodiles, pythons, giant water monitor lizards, and humans',
    funFact: 'Unlike most frogs, Goliath frogs do not croak because they have no vocal sac; instead, they whistle!',
    image: 'https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'blue-poison-dart-frog',
    name: 'Blue Poison Dart Frog',
    scientific: 'Dendrobates tinctorius azureus',
    category: 'amphibians',
    emoji: '🔹',
    tagline: 'An electric sapphire gem hopping on the forest floor!',
    description: 'Covered in a breathtaking sky-blue and midnight-blue pattern with black freckles, this bold little frog warns hungry jungle birds to stay away. It is active during the day, fearlessly searching for food.',
    habitat: 'Isolated forest islands in the Sipaliwini savannah of southern Suriname',
    diet: 'Insectivore - ants, mites, springtails, and caterpillars',
    endangered: 'Vulnerable',
    predators: 'Almost none due to potent alkaloid skin toxins',
    funFact: 'Each frog has a completely unique pattern of black spots, just like a human fingerprint!',
    image: 'https://images.unsplash.com/photo-1549488497-6a1a1f0a512d?auto=format&fit=crop&w=800&q=80'
  }
];

console.log('Base count: ' + amphibians.length);
