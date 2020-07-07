import fs from 'fs';
import readline from 'readline';

const createRandomNumber = () => {
  return Math.round(Math.random() * 64);
};

export const handleConfig = config => {
  const { theme, useNumbers } = config;

  const adjectives = [];
  const nouns = [];

  const f1 = fs.readFileSync(`./lib/${theme}/adjectives.txt`, 'utf-8');
  const f2 = fs.readFileSync(`./lib/${theme}/nouns.txt`, 'utf-8');

  const s1 = f1.trim().split(/\r?\n/);
  const s2 = f2.trim().split(/\r?\n/);

  for (let line of s1) {
    adjectives.push(line);
  }
  for (let line of s2) {
    nouns.push(line);
  }

  if (!useNumbers) {
    return { adjectives, nouns, number: '' };
  } else {
    return { adjectives, nouns, number: createRandomNumber() };
  }
};
