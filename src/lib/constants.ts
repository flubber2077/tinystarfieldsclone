// DEV CONSTANTS
export const LOCAL = !!process.env.LOCAL;

// CRON CONSTANTS
export const CRON_SCHEDULE = '20 9/4 * * *';

// POST GENERATION
// Hard limits
export const CHAR_LIMIT = 120; // limiting to twitter's original post length to conform to original bot

// Artistic choices
export const LINE_AMOUNT_MAX = 8;
export const LINE_LENGTH_MAX = 40;
