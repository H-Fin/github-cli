github-cli
==========

A cli side kick for GitHub.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/github-cli.svg)](https://npmjs.org/package/github-cli)
[![Downloads/week](https://img.shields.io/npm/dw/github-cli.svg)](https://npmjs.org/package/github-cli)
[![License](https://img.shields.io/npm/l/github-cli.svg)](https://github.com/H-Fin/github-cli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g github-cli
$ github COMMAND
running command...
$ github (-v|--version|version)
github-cli/0.0.1 darwin-x64 node-v12.16.2
$ github --help [COMMAND]
USAGE
  $ github COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`github getRepos [USERNAME]`](#github-getRepos)
* [`github help [COMMAND]`](#github-help-command)

## `github getRepos [USERNAME]`

describe the command here

```
USAGE
  $ github getRepos [USERNAME]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -u, --username=username  Returns GitHub repos list for a user.

EXAMPLE
  $ github getRepos -u 'h-fin'
```

_See code: [src/commands/getRepos.ts](https://github.com/H-Fin/github-cli/blob/v0.0.1/src/commands/getRepos.ts)_

## `github help [COMMAND]`

display help for github

```
USAGE
  $ github help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.0/src/commands/help.ts)_
<!-- commandsstop -->
