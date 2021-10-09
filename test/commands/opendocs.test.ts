import {expect, test} from '@oclif/test'

describe('opendocs', () => {
  test
  .stdout()
  .command(['opendocs'])
  .it('runs hello', ctx => {
    expect(ctx.stdout).to.contain('hello world')
  })

  test
  .stdout()
  .command(['opendocs', '--name', 'jeff'])
  .it('runs hello --name jeff', ctx => {
    expect(ctx.stdout).to.contain('hello jeff')
  })
})
