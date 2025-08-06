import type { FastifyPluginCallbackZod } from 'fastify-type-provider-zod';
import { z } from 'zod/v4'
import { db } from '../../db/connections.ts';
import { schema } from '../../db/schema/index.ts';

export const createRoomsRoute: FastifyPluginCallbackZod = (app) => {
  app.post('/rooms', {
    schema: {
      body: z.object({
        name: z.string().min(1),
        description: z.string().optional(),
      }),
    }
  }, 
  async (request) => {
    const { name, description } = request.body

    const result = await db.insert(schema.rooms).values({
      name,
      description
    })
  })
};
