import { z } from "zod";

// Post generation request schema
export const postGenerationRequestSchema = z.object({
  topic: z.string().min(1, "Topic is required").max(500, "Topic must be under 500 characters"),
  theme: z.enum(["professional", "thought-leadership", "conversational"], {
    required_error: "Theme is required",
  }),
  length: z.number().min(200).max(600),
  includeHashtags: z.boolean(),
});

export type PostGenerationRequest = z.infer<typeof postGenerationRequestSchema>;

// Generated post schema
export const generatedPostSchema = z.object({
  id: z.string(),
  content: z.string(),
  wordCount: z.number(),
  theme: z.string(),
  variation: z.number(),
});

export type GeneratedPost = z.infer<typeof generatedPostSchema>;

// API response schema
export const postGenerationResponseSchema = z.object({
  posts: z.array(generatedPostSchema),
  success: z.boolean(),
  error: z.string().optional(),
});

export type PostGenerationResponse = z.infer<typeof postGenerationResponseSchema>;
