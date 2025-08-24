import { generateMonsteraGuide } from './generators/monstera';
import { generateOrkideGuide } from './generators/orkide';
import { generateSukkulentGuide } from './generators/sukkulent';
import { PlantInput } from './plantData';

const generators = {
  Monstera: generateMonsteraGuide,
  Sukkulent: generateSukkulentGuide,
  Orkidé: generateOrkideGuide,
} as const;

export function generatePlantGuide(input: PlantInput): string {
  return generators[input.plant](input);
}
