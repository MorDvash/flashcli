import {Command, flags} from '@oclif/command'
const open = require('open');

export default class Opendocs extends Command {
  static description = 'Quick access to vue,quasar,firebase docs'

  static args = [
    {
      name: 'doc',               // name of arg to show in help and reference with args[name]
      required: false,            // make the arg required with `required: true`
      description: 'Choose doc to open', // help description
      // hidden: true,               // hide this arg from help
      // parse: input => 'output',   // instead of the user input, return a different value
      default: 'all',           // default value if no arg input
      // options: ['a', 'b'],        // only allow input to be from a discrete set
    }
  ]

  async run() {
    const {args} = this.parse(Opendocs)
    if(args.doc === 'all') {
      await open('https://vuejs.org/v2/guide/');
      await open('https://firebase.google.com/docs')
      await open('https://quasar.dev')
    } else if (args.doc === 'vue') {
      await open('https://vuejs.org/v2/guide/');
    } else if(args.doc === 'quasar') {
      await open('https://quasar.dev')
    } else if(args.doc === 'firebase') {
      await open('https://firebase.google.com/docs')

    }
    console.log(args)
  }
}
