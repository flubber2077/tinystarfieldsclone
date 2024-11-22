import type { AtpAgentLoginOpts } from '@atproto/api';

const { BSKY_SERVICE = 'https://bsky.social', BSKY_HANDLE, BSKY_PASSWORD } = process.env;

if (!BSKY_HANDLE || !BSKY_PASSWORD) throw new Error(`didn't set up handle or password`);

export const bskyAccount: AtpAgentLoginOpts = {
  identifier: BSKY_HANDLE,
  password: BSKY_PASSWORD,
};

export const bskyService = BSKY_SERVICE;
