import type { CronOptions } from "croner";

// DEV CONSTANTS
export const LOCAL = !!process.env.LOCAL;

// CRON CONSTANTS
export const CRON_SCHEDULE = '20 9/4 * * *';


// POST GENERATION
// Hard limits
export const CHAR_LIMIT = 300;

// Artistic choices
export const LINE_AMOUNT = 6;
export const LINE_LENGTH = 40;

// export const STAR_CHARACTERS = `*.··˚⊹⋆✦✧✫✵✹✺`;
