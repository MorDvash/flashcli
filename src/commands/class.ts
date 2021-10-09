import {Command, flags} from '@oclif/command'
const open = require('open');
const inquirer = require('inquirer');

export default class Class extends Command {
  static description = 'describe the command here'

  static flags = {
    help: flags.help({char: 'h'}),
    // flag with a value (-n, --name=VALUE)
    name: flags.string({char: 'n', description: 'name to print'}),
    // flag with no value (-f, --force)
    force: flags.boolean({char: 'f'}),
  }

  static args = [{name: 'file'}]

  async run() {
    const questions = [
      {
        type: 'list',
        name: 'class',
        message: 'Choose class',
        choices: ['FlashDev beginner', 'FlashDev professional', 'FlashDev expert'],
        // filter(val: string) {
        //   return val.toLowerCase();
        // },
      },
    ];

    inquirer.prompt(questions).then(async (answers: any) => {
      switch (answers.class) {
        case 'FlashDev beginner':
          await open('https://my.schooler.biz/s/26524/login');
          break
        case 'FlashDev professional':
          await open('https://my.schooler.biz/s/27950/login');
          break
        case 'FlashDev expert':
          await open('https://my.schooler.biz/s/29582/login');
          break
      }
    });
  }
}
