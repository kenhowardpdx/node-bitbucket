export interface BitbucketOptions {
  debug?: boolean;
}

export class Bitbucket {
  constructor(options?: BitbucketOptions) {
    Object.assign(this.options, options);
    this.log('Bitbucket Initialized')
  }

  private options: BitbucketOptions;

  private log(...msgs: string[]) {
    if (this.options && this.options.debug) {
      console.log(...msgs);
    }
  }
}
