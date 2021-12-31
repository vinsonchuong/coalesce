import {makeRpcClient} from 'passing-notes-rpc'
import {render} from 'react-dom'
import {html} from 'htm/react'
import App from './app.js'

const client = makeRpcClient()

render(html`<${App} />`, window.document.querySelector('#app'))
