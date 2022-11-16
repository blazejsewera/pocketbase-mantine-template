import { Button } from './Button'
import { snap } from './test/snapshot'

it('renders properly', () => {
  const s = snap(<Button />)
  expect(s).toMatchSnapshot()
})
