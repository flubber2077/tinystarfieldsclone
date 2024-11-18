import {
  LINE_AMOUNT,
  LINE_LENGTH,
  CHAR_PROBABILITY,
  STAR_CHARACTERS,
  CHAR_LIMIT,
} from './constants';

const EMPTY_SPACE = ' ';

export default function generateField(): string {
  const lines: string[] = new Array(LINE_AMOUNT).fill('') as string[];
  return lines
    .map(() => generateLine())
    .join('\n')
    .slice(0, CHAR_LIMIT); // limit to size of bluesky post, should be unneccessary
}

const generateLine = (): string => {
  let line = '';
  for (let i = 0; i < LINE_LENGTH; i++) {
    line += generateStars();
  }
  return line.trimEnd();
};

const generateStars = (): string =>
  Math.random() < CHAR_PROBABILITY ? getRandomElement(STAR_CHARACTERS) : EMPTY_SPACE;

const getRandomElement = <T>(arr: ArrayLike<T>): T =>
  arr[Math.floor(Math.random() * arr.length)] as T;
