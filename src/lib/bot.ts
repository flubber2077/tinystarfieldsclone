import { bskyAccount, bskyService } from './config';
import type { AtpAgentLoginOpts, AtpAgentOptions, AppBskyFeedPost } from '@atproto/api';
import { AtpAgent, RichText } from '@atproto/api';
import dayjs from 'dayjs';
import localizedFormat from 'dayjs/plugin/localizedFormat';

dayjs.extend(localizedFormat);

interface BotOptions {
  service: string | URL;
  dryRun: boolean;
}
type BSkyPost = Partial<AppBskyFeedPost.Record> & Omit<AppBskyFeedPost.Record, 'createdAt'>;

export default class Bot {
  private agent;

  static defaultOptions = { service: bskyService, dryRun: false } as const;

  constructor(service: AtpAgentOptions['service']) {
    this.agent = new AtpAgent({ service });
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
    this.log(text, dryRun);
    return text;
  }

  private login = (loginOpts: AtpAgentLoginOpts) => this.agent.login(loginOpts);

  private post = async (input: string | BSkyPost) => {
    const post = typeof input === 'string' ? await this.transformStringToPost(input) : input;
    return this.agent.post(post);
  };

  private transformStringToPost = async (textString: string): Promise<BSkyPost> => {
    const richText = new RichText({ text: textString });
    await richText.detectFacets(this.agent);
    const { text, facets } = richText;
    return { text, facets };
  };

  private static log = (text: string, dryRun: boolean) => {
    console.log(`[${dayjs().format('LLLL')}]
    Text Length: ${text.length}.
    dryRun = ${dryRun}
    ${dryRun ? 'Was not' : 'Was'} skeeted based on dryRun variable.
    Posted:
    ${text}`);
  };
}
