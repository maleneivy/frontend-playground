import { PlantInput } from '../plantData';

export function generateSukkulentGuide(input: PlantInput): string {
  const { light, water, humidity, forgetFulness } = input;

  let result = `Stell av Sukkulent\n\n`;

  if (light === 'sol') {
    result += 'Sukkulenter elsker sol og tørre omgivelser. Flott plassering i sollys!\n';
  } else {
    result += 'Sukkulenter trenger mye lys. Sett den så nær et vindu som mulig.\n';
  }

  if (water === 'ofte') {
    result +=
      'Sukkulenter trenger sjelden vann, for mye vann kan føre til rotråte. La jorden tørke helt opp.\n';
  } else if (water === 'av og til') {
    result +=
      'Det passer fint å vanne av og til! Bare husk å ikke vanne før jorden er helt tørr.\n';
  } else {
    result += 'Sukkulenter trives godt med lite vann. Dette er perfekt for planten.\n';
  }

  if (humidity === 'høy') {
    result +=
      'Høy luftfuktighet er ikke ideelt. Sørg for god ventilasjon og unngå vann på bladene.\n';
  } else {
    result += 'Tørr luft er perfekt for sukkulenter.\n';
  }

  if (forgetFulness === 'veldig') {
    result += 'Sukkulenter er supre for glemsomme planteeiere, de tåler tørke godt!\n';
  }

  return result;
}
