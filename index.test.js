import test from 'ava'
import {runProcess} from 'ava-patterns'
import {openBrowser, closeBrowser, openTab, findElement} from 'puppet-strings'
import {downloadChrome} from 'puppet-strings-chrome'

test('starting the app', async (t) => {
  const server = runProcess(t, {
    command: ['yarn', 'start'],
  })

  const browser = await openBrowser(await downloadChrome())
  t.teardown(async () => {
    await closeBrowser(browser)
  })

  await server.waitForOutput('Listening', 5000)

  const tab = await openTab(browser, 'https://localhost:8080')
  const body = await findElement(tab, 'body')
  t.regex(body.textContent, /Hello World!/)
})
