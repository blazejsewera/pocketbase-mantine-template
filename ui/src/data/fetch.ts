import { Note } from '../domain/Note'
import Pocketbase from 'pocketbase'
import { BACKEND_URL } from '../config'

const client = new Pocketbase(BACKEND_URL)

const fetchData = async () => {
  return client.records.getList('notes')
}

export const fetchNotes = async (): Promise<Note[]> => {
  const data = await fetchData()
  return Promise.resolve(data.items.map(noteData => ({ title: noteData.title, body: noteData.body })))
}

const streamData = () => {
  return client.realtime.subscribe('notes', () => {
    // subscribe to zustand update store function
  })
}

export const streamNotes = () => {}
