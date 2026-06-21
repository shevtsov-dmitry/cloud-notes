import type NoteType from './NoteType'

export type Note = {
  id: string
  title: string
  textContent?: string
  noteType: NoteType[]
  attachmentsUrls?: string[]
}
