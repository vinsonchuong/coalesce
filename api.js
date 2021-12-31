import {compose, Logger} from 'passing-notes'
import serveUi from 'passing-notes-ui'

const logger = new Logger()

export default compose(serveUi({path: './ui', logger}), () => () => ({
  status: 404,
}))
