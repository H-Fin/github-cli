import { Command, flags } from '@oclif/command';
import { getRepoList } from '../utils/octokit';

export default class GetRepos extends Command {
  static description = 'Returns GitHub repos list for a user.'
  static examples = ['$ github getRepos -u "h-fin"'];

  static flags = {
    username: flags.string({
      char: "u",
      description: "Retrieve repositories under this username.",
      required: true
    }),
  };

  async run() {
    const { flags } = this.parse(GetRepos);
    const repos = await getRepoList(flags.username);

    console.log('\x1b[1mREPOS:');
    for (const repo of repos.data) {
      console.log('\x1b[36m' + repo.name + '\x1b[0m - ' + repo.description);
    }
  }
}
