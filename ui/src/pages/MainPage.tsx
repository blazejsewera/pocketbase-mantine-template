import { Container, MantineProvider, Text, Title } from '@mantine/core'
import { useEffect, useState } from 'react'
import { NoteList } from '../components/NoteList'
import { fetchNotes } from '../data/fetch'
import { Note } from '../domain/Note'
export const MainPage = () => {
  const [notes, setNotes] = useState<Note[]>([])
  useEffect(() => {
    fetchNotes().then(setNotes)
  }, [])

  const [rtNotes, setRtNotes] = useState<Note[]>([])
  useEffect(() => {
    // remove in favor of zustand
    fetchNotes().then(setRtNotes)
  })
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <div className="App">Hello</div>
      <Container size="xs" p="md">
        <Title order={2}>Fetched notes</Title>
        <NoteList {...{ notes }} />
      </Container>
      <Container size="xs" p="md">
        <Title order={2}>Realtime notes</Title>
        <NoteList {...{ notes: rtNotes }} />
      </Container>
    </MantineProvider>
  )
}
