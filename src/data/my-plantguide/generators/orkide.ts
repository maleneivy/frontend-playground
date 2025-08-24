import { PlantInput } from '../plantData';

export function generateOrkideGuide(input: PlantInput): string {
  const { light, water, humidity, forgetFulness } = input;

  let result = `Stell av Orkidé\n\n`;

  if (light === 'delvis') {
    result += 'Perfekt! Orkidéer liker lyst, men ikke direkte sollys.\n';
  } else if (light === 'sol') {
    result += 'Pass på, direkte sol kan svi bladene. Prøv med filtrert lys eller gardin.\n';
  } else {
    result += 'Skygge er for mørkt. Flytt orkidéen til et lysere sted.\n';
  }

  if (water === 'ofte') {
    result +=
      'Pass på at røttene ikke står i vann, orkidéer liker å tørke litt opp mellom vanning.\n';
  } else if (water === 'av og til') {
    result += 'Det passer perfekt for de fleste orkidéer!\n';
  } else {
    result +=
      'For lite vann kan føre til tørre røtter og visne blomster. Vurder å vanne litt oftere.\n';
  }

  if (humidity === 'høy') {
    result += 'Høy luftfuktighet er flott for orkidéer. De elsker tropiske forhold.\n';
  } else if (humidity === 'lav') {
    result +=
      'Lav luftfuktighet kan være utfordrende. Dusj bladene forsiktig eller bruk luftfukter.\n';
  }

  if (forgetFulness === 'ofte') {
    result += 'Orkidéer trenger litt kjærlighet og jevnlig stell. Sett en påminnelse på mobilen!\n';
  }

  return result;
}
