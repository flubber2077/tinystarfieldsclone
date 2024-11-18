import Bot from './lib/bot';
import generateField from './lib/generateField';

const text = await Bot.run(generateField, { dryRun: false });

console.log(`[${new Date().toISOString()}] Posted:\n${text}`);
