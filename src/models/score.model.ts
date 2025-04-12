import { z } from 'zod';

export const ScoreSchema = z.object({
  id: z.number(),
  math: z.number().nullable(),
  literature: z.number().nullable(),
  foreignLanguage: z.number().nullable(),
  physics: z.number().nullable(),
  chemistry: z.number().nullable(),
  biology: z.number().nullable(),
  history: z.number().nullable(),
  geography: z.number().nullable(),
  civics: z.number().nullable(),
  foreignLanguageCode: z.string().nullable(),
});

export type ScoreType = z.infer<typeof ScoreSchema>;
