export const monsterParts = {
  body: ['round', 'square', 'spiky'],
  eyes: ['single', 'double', 'googly'],
  arms: ['none', 'claw', 'tentacle'],
  mouth: ['smile', 'frown', 'open'],
  legs: ['short', 'long', 'wheels'],
  hair: ['mohawk', 'tuft', 'bald'],
} as const;

export type MonsterPartKey = keyof typeof monsterParts;
export type MonsterConfig = {
  [K in MonsterPartKey]: (typeof monsterParts)[K][number];
};

export type MonsterColors = {
  [K in MonsterPartKey]: string;
};
