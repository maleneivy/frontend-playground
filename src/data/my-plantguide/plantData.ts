export const plants = ['Monstera', 'Sukkulent', 'Orkidé'] as const;

export type PlantName = (typeof plants)[number];

export type PlantFactors = {
  light: 'sol' | 'delvis' | 'skygge';
  water: 'ofte' | 'av og til' | 'sjelden';
  humidity: 'høy' | 'normal' | 'lav';
  forgetFulness: 'aldri' | 'noen ganger' | 'ofte';
};

export type PlantInput = {
  plant: PlantName;
} & PlantFactors;
