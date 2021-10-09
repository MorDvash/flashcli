flashcli
========

&#39;A CLI for flashDev student&#39;

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/flashcli.svg)](https://npmjs.org/package/flashcli)
[![Downloads/week](https://img.shields.io/npm/dw/flashcli.svg)](https://npmjs.org/package/flashcli)
[![License](https://img.shields.io/npm/l/flashcli.svg)](https://github.com/MorDvash/flashcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g flashcli
$ flashcli COMMAND
running command...
$ flashcli (-v|--version|version)
flashcli/1.0.0 darwin-x64 node-v14.17.6
$ flashcli --help [COMMAND]
USAGE
  $ flashcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`flashcli class [FILE]`](#flashcli-class-file)
* [`flashcli help [COMMAND]`](#flashcli-help-command)
* [`flashcli opendocs [DOC]`](#flashcli-opendocs-doc)

## `flashcli class [FILE]`

describe the command here

```
USAGE
  $ flashcli class [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print
```

_See code: [src/commands/class.ts](https://github.com/MorDvash/flashcli/blob/v1.0.0/src/commands/class.ts)_

## `flashcli help [COMMAND]`

display help for flashcli

```
USAGE
  $ flashcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

## `flashcli opendocs [DOC]`

Quick access to vue,quasar,firebase docs

```
USAGE
  $ flashcli opendocs [DOC]

ARGUMENTS
  DOC  [default: all] Choose doc to open
```

_See code: [src/commands/opendocs.ts](https://github.com/MorDvash/flashcli/blob/v1.0.0/src/commands/opendocs.ts)_
<!-- commandsstop -->
