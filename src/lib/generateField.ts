import { LINE_LENGTH, CHAR_LIMIT, LINE_AMOUNT } from './constants';
import stars from '../data/stars';

// function to format string closer to twitter's presentation
export default function generateField(lineAmount = LINE_AMOUNT, lineLength = LINE_LENGTH) {
  const field = [];
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
