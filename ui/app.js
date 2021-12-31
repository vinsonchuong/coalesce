import {useState} from 'react'
import {html} from 'htm/react'
import {css} from '@emotion/css'
import AddItem from './add-item.js'

const styles = css`
  width: 760px;
  margin: 0 auto;

  ol {
    margin: 32px 0 0;
    padding: 0;
    list-style: none;

    li + li {
      margin-top: 16px;
    }
  }
`

export default function App() {
  const [items, setItems] = useState([])

  return html`
    <div className=${styles}>
      <${AddItem}
        onAdd=${(text) => {
          setItems([text, ...items])
        }}
      />
      <ol>
        ${items.map((item, index) => html`<li key=${index}>${item}</li>`)}
      </ol>
    </div>
  `
}
