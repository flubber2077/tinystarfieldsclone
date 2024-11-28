import { LINE_LENGTH, CHAR_LIMIT } from './constants';
import stars from '../data/stars';

// function to format string closer to twitter's presentation
export default function generateField(): string {
  const result: string[] = [];
  const arrayOfChars = generateChars().split('');
  while (arrayOfChars.length) {
    const a = arrayOfChars.splice(0, LINE_LENGTH).join('').trimEnd();
    result.push(a);
  }
  return result.join('\n').slice(0, CHAR_LIMIT); // limit to size of bluesky post, should be unneccessary
}

const generateChars = (): string => {
  const amountOfGenerates = Math.floor(Math.random() * 5) + 5;
  let line = '';
  for (let i = 0; i < amountOfGenerates; i++) {
    line += getRandomElement(stars);
  }
  return line;
};

const getRandomElement = <T>(arr: ArrayLike<T>): T =>
  arr[Math.floor(Math.random() * arr.length)] as T;
