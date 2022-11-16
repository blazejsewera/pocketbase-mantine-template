import { Note } from '../domain/Note'
import Pocketbase, { Record } from 'pocketbase'
import { BACKEND_URL } from '../config'
import { useStore } from './store'

const client = new Pocketbase(BACKEND_URL)

const fromNoteData = (noteData: Record): Note => ({ title: noteData.title, body: noteData.body })

export const fetchNotes = () => {
  client.records.getList('notes').then(({ items: notesData }) => {
    const { setNotes } = useStore.getState()
    setNotes(notesData.map(fromNoteData))
  })
}

type Action = 'create' | 'update' | 'delete'

export const streamNotes = () => {
  client.realtime.subscribe('notes', ({ action, record }) => {
    console.log(`action: ${action}, record: ${record}`)
    const { addNote } = useStore.getState()
    addNote(fromNoteData(record))
  })
}
