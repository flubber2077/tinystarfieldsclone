import Bot from './lib/bot';
import generateField from './lib/generateField';
import { LOCAL } from './lib/constants';

const dryRun = LOCAL;

Bot.run(generateField, { dryRun });
