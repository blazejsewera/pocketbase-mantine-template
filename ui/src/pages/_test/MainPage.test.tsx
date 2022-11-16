import { MainPage } from '../MainPage'
import { snap } from '../../util/test/snapshot'

it('renders properly', () => {
  const s = snap(<MainPage />)
  expect(s).toMatchSnapshot()
})
