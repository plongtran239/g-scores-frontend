import { z } from 'zod';

export const SubjectSchema = z.object({
  subject: z.string(),
  excellent: z.number(),
  good: z.number(),
  average: z.number(),
  poor: z.number(),
});

export const StatisticsSchema = z.object({
  subjects: z.array(SubjectSchema),
});

export const ScoreGroupASchema = z.object({
  id: z.number(),
  math: z.number(),
  physics: z.number(),
  chemistry: z.number(),
  total: z.number(),
});

export const TopScoresGroupASchema = z.object({
  topScores: z.array(ScoreGroupASchema),
});

export const DashboardSchema = z.object({
  totalStudents: z.number(),
  averageScore: z.number(),
  excellentStudents: z.number(),
});

export type SubjectType = z.infer<typeof SubjectSchema>;
export type StatisticsType = z.infer<typeof StatisticsSchema>;
export type ScoreGroupAType = z.infer<typeof ScoreGroupASchema>;
export type TopScoresGroupAType = z.infer<typeof TopScoresGroupASchema>;
export type DashboardType = z.infer<typeof DashboardSchema>;
