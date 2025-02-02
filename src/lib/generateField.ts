import { CHAR_LIMIT, LINE_LENGTH_MAX, LINE_AMOUNT_MAX } from './constants';
import stars from '../data/stars';

// function to format string closer to twitter's presentation
export default function generateField() {
  const lineLength = bellCurveRandom(20, LINE_LENGTH_MAX);
  const lineAmount = bellCurveRandom(1, LINE_AMOUNT_MAX);
  const field: string[] = [];
  while (field.length < lineAmount) {
    field.push(generateLine(lineLength));
  }
  return field.join('\n').slice(0, CHAR_LIMIT); // limit to size of bluesky post, should be unneccessary
}

const generateLine = (lineLength: number): string => {
  let line = '';
  while (line.length < lineLength) {
    line += getRandomElement(stars);
  }
  return line.trimEnd();
};

const getRandomElement = <T>(arr: ArrayLike<T>): T =>
  arr[Math.floor(Math.random() * arr.length)] as T;

const bellCurveRandom = (min: number, max: number): number => {
  let res = min;
  for (let i = min; i < max; i++) {
    res += Math.random();
  }
  return res;
};
