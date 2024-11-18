import { LINE_AMOUNT, LINE_LENGTH, CHAR_PROBABILITY, STAR_CHARACTERS } from "./constants";

const EMPTY_SPACE = ' ';

export default function generateField(options?: object): string {
  const lines: string[] = new Array(LINE_AMOUNT).fill('');

  return lines.map((line) => {
    for (let i = 0; i < LINE_LENGTH; i++) {
      line += Math.random() < CHAR_PROBABILITY ? getRandomElement(STAR_CHARACTERS) : EMPTY_SPACE;
    }
    return line.trimEnd();
  }).join('\n');
}

const getRandomElement = <T>(arr: ArrayLike<T>): T => arr[Math.floor(Math.random() * arr.length)] as T;
