import { PlantInput } from '../plantData';

export function generateMonsteraGuide(input: PlantInput): string {
  const { light, water, humidity, forgetFulness } = input;

  let result = `Stell av Monstera:\n\n`;

  if (light === 'delvis') {
    result += 'Monstera elsker delvis sol og filtrert lys.\n';
  } else if (light === 'sol') {
    result += 'Monstera tåler noe sol, men for mye direkte lys kan svi bladene.\n';
  } else {
    result += 'Skygge er for mørkt. Vuder å flytte planten nærmere vinduet.\n';
  }

  if (water === 'ofte') {
    result += 'Vanning ofte er OK, men pass på at jorden tørker lett mellom hver gang.\n';
  } else if (water === 'av og til') {
    result += 'Helt topp! Monstera liker jevn fukt uten å bli overvannet.\n';
  } else {
    result += 'Monstera liker ikke å tørke helt ut. Prøv å vanne litt oftere.\n';
  }

  if (humidity === 'høy') {
    result += 'Høy luftfuktighet er supert. Monstera vil stortrives.\n';
  } else if (humidity === 'lav') {
    result += 'Lav fuktighet? Prøv å dusje bladene ukentlig.\n';
  }

  if (forgetFulness === 'ofte') {
    result += 'Monstera trenger jevnlig stell. Du bør sette på en vanningspåminnelse.\n';
  }

  return result;
}
