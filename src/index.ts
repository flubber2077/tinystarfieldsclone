import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import Bot from './lib/bot';
import generateField from './lib/generateField';
import { LOCAL } from './lib/constants';

dayjs.extend(localizedFormat);

const dryRun = LOCAL;
const text = await Bot.run(generateField, { dryRun });

console.log(
  `[${dayjs().format('LLLL')}]
  Text Length: ${text.length}.
  ${dryRun ? 'Was not' : 'Was'} skeeted based on dryRun variable.
  Posted:
  ${text}`,
);
