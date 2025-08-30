import type { Express } from "express";
import { createServer, type Server } from "http";
import { postGenerationRequestSchema, type PostGenerationResponse } from "@shared/schema";
import { generateLinkedInPosts } from "./lib/gemini";

export async function registerRoutes(app: Express): Promise<Server> {
  // LinkedIn post generation endpoint
  app.post("/api/generate-posts", async (req, res) => {
    try {
      // Validate request body
      const validatedData = postGenerationRequestSchema.parse(req.body);
      
      // Generate posts using Gemini API
      const posts = await generateLinkedInPosts({
        topic: validatedData.topic,
        theme: validatedData.theme,
        length: validatedData.length,
        includeHashtags: validatedData.includeHashtags
      });

      const response: PostGenerationResponse = {
        posts,
        success: true
      };

      res.json(response);
    } catch (error) {
      console.error("Error generating posts:", error);
      
      const response: PostGenerationResponse = {
        posts: [],
        success: false,
        error: error instanceof Error ? error.message : "Failed to generate posts"
      };

      res.status(500).json(response);
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
