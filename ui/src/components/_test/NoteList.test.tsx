import { snap } from '../../util/test/snapshot'
import { NoteList } from '../NoteList'

it('renders empty list properly', () => {
  const s = snap(<NoteList notes={[]} />)
  expect(s).toMatchSnapshot()
})

it('renders list with two elements properly', () => {
  const s = snap(
    <NoteList
      notes={[
        { title: '1', body: '1' },
        { title: '2', body: '2' },
      ]}
    />,
  )
  expect(s).toMatchSnapshot()
})
