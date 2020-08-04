const {Octokit} = require("@octokit/rest");
const octokit = new Octokit();

export async function getRepoList(username: string) {
  return await octokit.repos.listForUser({username});
}
