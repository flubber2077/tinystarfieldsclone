import Bot from './lib/bot';
import generateField from './lib/generateField';
import { LOCAL } from './lib/constants';

const dryRun = LOCAL;

await Bot.run(generateField, { dryRun });
