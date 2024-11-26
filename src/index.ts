import { Cron, type CronOptions } from 'croner';
import Bot from './lib/bot';
import generateField from './lib/generateField';
import { LOCAL, CRON_SCHEDULE } from './lib/constants';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

dayjs.extend(utc);
dayjs.extend(timezone);

const dryRun = LOCAL;

Bot.run(generateField, { dryRun });

// const job = new Cron(
//   CRON_SCHEDULE,
//   { timezone: dayjs.tz.guess() },
//   async () => await Bot.run(generateField, { dryRun }),
// );

// const nextPosts = job.nextRuns(20).map((date) => dayjs(date).format('L LT'));
// console.log(`next posts at:\n`,nextPosts);

// if (!job.nextRun() && !job.previousRun()) {
//   console.log('No executions scheduled');
// }
