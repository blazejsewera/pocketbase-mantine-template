import App from './App'
import { snap } from './util/snapshot'

it('renders properly', () => {
  const s = snap(<App />)
  expect(s).toMatchSnapshot()
})
