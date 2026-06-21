import { serve } from 'bun'
import index from './index.html'

import type { Note } from './types/Note'
import NoteType from './types/NoteType'
import { faker } from '@faker-js/faker/locale/ur'

const server = serve({
  routes: {
    // Serve index.html for all unmatched routes.
    '/*': index,
    '/api/notes/:amount': async (req) => {
      const amount = req.params.amount

      const notesObjects = Array.from({ length: amount }, (_, i) => {
        const note = {
          id: faker.string.uuid(),
          title: `${faker.food.adjective()} ${faker.food.ingredient()}`,
          textContent: faker.lorem.sentence(),
          noteType: [
            NoteType[Math.floor(Math.random() * 4)],
            NoteType[Math.floor(Math.random() * 4)],
          ],
          attachmentsUrls: [faker.database.mongodbObjectId()],
        } satisfies Note

        return note
      })

      return Response.json(notesObjects)
    },
  },
})
