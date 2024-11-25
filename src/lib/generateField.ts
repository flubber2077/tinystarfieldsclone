import {
  LINE_AMOUNT,
  LINE_LENGTH,
  CHAR_LIMIT,
} from './constants';
import stars from '../data/stars';

export default function generateField(): string {
  const lines: string[] = new Array(LINE_AMOUNT).fill('') as string[];
  return lines
    .map(() => generateLine())
    .join('\n')
    .slice(0, CHAR_LIMIT); // limit to size of bluesky post, should be unneccessary
}

const generateLine = (lineLength = LINE_LENGTH): string => {
  let line = '';
  for (let i = 0; i < lineLength; i++) line += getRandomElement(stars);
  return line.slice(0, lineLength).trimEnd();
};

const getRandomElement = <T>(arr: ArrayLike<T>): T =>
  arr[Math.floor(Math.random() * arr.length)] as T;
