const fs = require('fs');
const path = require('path');

const speciesPart1 = [
  ['Red-Eyed Tree Frog', 'Agalychnis callidryas', 'Rainforest acrobat with glowing ruby eyes', 'Vibrant green jumper that hides under leaves by day and flashes giant red eyes to startle predators when surprised.', 'Rainforest canopies of Central America', 'Crickets, moths, flies, and beetles', 'Least Concern', 'Tree snakes, bats, and owls', 'Has a clear third eyelid called a nictitating membrane that acts like goggles!', 'https://images.unsplash.com/photo-1579380656108-328e8042d0ae?auto=format&fit=crop&w=800&q=80', '🐸'],
  ['Golden Poison Dart Frog', 'Phyllobates terribilis', 'The most toxic creature on planet Earth', 'Carries enough potent skin toxin to defend against any jungle predator. Its vibrant golden hue warns hungry animals to stay away.', 'Rainforest floor of Colombia', 'Rainforest ants, termites, and small beetles', 'Endangered', 'Only the immune fire-bellied snake', 'Indigenous hunters used its secretions to coat blowgun darts!', 'https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=800&q=80', '🟡'],
  ['Axolotl', 'Ambystoma mexicanum', 'The smiling water dragon that never grows up', 'A super-cute salamander with feathery pink external gills that spends its entire life swimming in freshwater canals without morphing into a land creature.', 'Lake Xochimilco canal waterways, Mexico City', 'Worms, minnows, and freshwater insect larvae', 'Critically Endangered', 'Herons, egrets, and invasive carp', 'Can regrow lost legs, gills, and even sections of its heart and brain!', 'https://images.unsplash.com/photo-1618842676088-c4d48a6a7c9d?auto=format&fit=crop&w=800&q=80', '🦎']
];

console.log('Part 1 test length: ' + speciesPart1.length);
