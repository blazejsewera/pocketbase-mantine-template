import { Note } from '../domain/Note'
import Pocketbase, { Record } from 'pocketbase'
import { BACKEND_URL } from '../config'

const client = new Pocketbase(BACKEND_URL)

const fromNoteData = (noteData: Record): Note => ({ id: noteData.id, title: noteData.title, body: noteData.body })

export const fetchNotes = (setNotes: (notes: Note[]) => void) => {
  client.records.getList('notes').then(({ items: notesData }) => {
    setNotes(notesData.map(fromNoteData))
  })
}

type Action = 'create' | 'update' | 'delete'

export const streamNotes = (
  addNote: (note: Note) => void,
  updateNote: (note: Note) => void,
  deleteNote: (note: Note) => void,
) => {
  client.realtime.subscribe('notes', ({ action, record }) => {
    const note = fromNoteData(record)
    switch (action as Action) {
      case 'create':
        addNote(note)
        break
      case 'update':
        updateNote(note)
        break
      case 'delete':
        deleteNote(note)
    }
  })
}
