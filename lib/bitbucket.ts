export interface BitbucketOptions {
  apiUrl?: string;
  apiVersion?: string;
  debug?: boolean;
}

export class Bitbucket {
  constructor(options?: BitbucketOptions) {
    Object.assign(this.options, options);
    this.log('Bitbucket Initialized');
  }

  private options: BitbucketOptions = {
    apiUrl: 'https://api.bitbucket.org',
    apiVersion: '2.0',
    debug: false
  }

  private log(...msgs: string[]) {
    if (this.options && this.options.debug) {
      console.log(...msgs);
    }
  }
}
