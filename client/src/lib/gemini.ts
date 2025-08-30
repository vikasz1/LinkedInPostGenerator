import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ 
  apiKey: import.meta.env.VITE_GEMINI_API_KEY || process.env.GEMINI_API_KEY || "" 
});

export interface PostGenerationParams {
  topic: string;
  theme: "professional" | "thought-leadership" | "conversational";
  length: number;
  includeHashtags: boolean;
}

export interface GeneratedPostVariation {
  id: string;
  content: string;
  wordCount: number;
  theme: string;
  variation: number;
}

export async function generateLinkedInPosts(params: PostGenerationParams): Promise<GeneratedPostVariation[]> {
  const { topic, theme, length, includeHashtags } = params;

  const themeInstructions = {
    professional: "Use a clear, concise, business-oriented tone suitable for updates, achievements, and announcements. Keep it professional but engaging.",
    "thought-leadership": "Write in an insightful, authoritative, idea-driven tone that positions the author as an expert. Include strategic insights and industry perspective.",
    conversational: "Use a relatable, engaging, narrative-driven tone with personal stories, lessons, and reflections. Make it feel like a conversation."
  };

  const hashtagInstruction = includeHashtags 
    ? "Include 3-5 relevant hashtags at the end of the post." 
    : "Do not include any hashtags.";

  const systemPrompt = `You are an expert LinkedIn content creator. Generate LinkedIn posts that:
- Have a strong hook in the first line
- Include engaging content that encourages interaction
- End with a compelling call-to-action (CTA)
- Maintain clarity and professionalism
- Fit LinkedIn's tone and best practices
- Are approximately ${length} words long
- Use ${themeInstructions[theme]}
- ${hashtagInstruction}

Topic: ${topic}

Generate exactly 3 different variations of the same topic, each with a slightly different approach or angle while maintaining the specified theme. Return the response as a JSON array of objects with the following structure:
[
  {
    "content": "The full LinkedIn post content",
    "wordCount": "approximate word count as a number",
    "variation": "variation number (1, 2, or 3)"
  }
]`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-pro",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: "array",
          items: {
            type: "object",
            properties: {
              content: { type: "string" },
              wordCount: { type: "number" },
              variation: { type: "number" }
            },
            required: ["content", "wordCount", "variation"]
          }
        }
      },
      contents: systemPrompt,
    });

    const rawJson = response.text;
    
    if (!rawJson) {
      throw new Error("Empty response from Gemini API");
    }

    const parsedResponse = JSON.parse(rawJson);
    
    if (!Array.isArray(parsedResponse) || parsedResponse.length !== 3) {
      throw new Error("Invalid response format from Gemini API");
    }

    return parsedResponse.map((post, index) => ({
      id: `post-${Date.now()}-${index}`,
      content: post.content,
      wordCount: post.wordCount,
      theme: theme,
      variation: post.variation
    }));

  } catch (error) {
    console.error("Error generating LinkedIn posts:", error);
    throw new Error(`Failed to generate posts: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
