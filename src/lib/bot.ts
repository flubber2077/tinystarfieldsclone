import { bskyAccount, bskyService } from './config';
import type { AtpAgentLoginOpts, AtpAgentOptions, AppBskyFeedPost } from '@atproto/api';
import { AtpAgent, RichText } from '@atproto/api';

type BotOptions = {
  service: string | URL;
  dryRun: boolean;
};

export default class Bot {
  private agent;

  static defaultOptions = {
    service: bskyService,
    dryRun: false,
  } as const;

  constructor(service: AtpAgentOptions['service']) {
    this.agent = new AtpAgent({ service });
  }

  login = (loginOpts: AtpAgentLoginOpts) => this.agent.login(loginOpts);

  async post(
    postText:
      | string
      | (Partial<AppBskyFeedPost.Record> & Omit<AppBskyFeedPost.Record, 'createdAt'>),
  ) {
    if (typeof postText !== 'string') {
      return this.agent.post(postText);
    }
    const richText = new RichText({ text: postText });
    await richText.detectFacets(this.agent);
    const { text, facets } = richText;
    return this.agent.post({ text, facets });
  }

  static async run(
    getPostText: () => Promise<string> | string,
    botOptions: Partial<BotOptions> = {},
  ) {
    const { service, dryRun } = { ...this.defaultOptions, ...botOptions };
    const bot = new Bot(service);
    const [text] = await Promise.all([getPostText(), bot.login(bskyAccount)]);
    if (!dryRun) {
      await bot.post(text);
    }
    return text;
  }
}
