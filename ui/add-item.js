import {useState} from 'react'
import {html} from 'htm/react'
import {css} from '@emotion/css'

const styles = css`
  display: flex;
  align-items: center;

  textarea {
    flex: 1;
  }

  button {
    margin-left: 16px;
    width: 56px;
  }
`

export default function AddItem({onAdd}) {
  const [text, setText] = useState('')

  return html`
    <form
      className=${styles}
      onSubmit=${(event) => {
        event.preventDefault()
        onAdd(text)
        setText('')
      }}
    >
      <textarea
        value=${text}
        onChange=${(event) => {
          setText(event.target.value)
        }}
      />
      <button type="submit">Add</button>
    </form>
  `
}
