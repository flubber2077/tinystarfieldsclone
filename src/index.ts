import Bot from './lib/bot';
import generateField from './lib/generateField';

const text = await Bot.run(generateField, { dryRun: false });

console.log(`[${new Date().toISOString()}] Text Length: ${text.length}. Posted:\n${text}`);
