import { z } from "zod";
import type { AtpAgentLoginOpts } from "@atproto/api";

const envSchema = z.object({
  BSKY_HANDLE: z.string().min(1),
  BSKY_PASSWORD: z.string().min(1),
  BSKY_SERVICE: z.string().min(1).default("https://bsky.social"),
});

const parsedEnv = envSchema.parse(process.env);

export const bskyAccount: AtpAgentLoginOpts = {
  identifier: parsedEnv.BSKY_HANDLE,
  password: parsedEnv.BSKY_PASSWORD,
};

export const bskyService = parsedEnv.BSKY_SERVICE;
