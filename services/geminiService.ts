
import { GoogleGenAI, Type } from "@google/genai";
import type { CodeReviewFeedback } from '../types';

if (!process.env.API_KEY) {
  throw new Error("API_KEY environment variable is not set.");
}

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const reviewSchema = {
  type: Type.OBJECT,
  properties: {
    summary: {
      type: Type.STRING,
      description: 'A brief, high-level summary of the code quality, highlighting the most critical areas for improvement.'
    },
    bugs: {
      type: Type.ARRAY,
      description: 'A list of potential bugs or logical errors. Each item should be a concise string explaining the bug.',
      items: { type: Type.STRING }
    },
    performance: {
      type: Type.ARRAY,
      description: 'A list of suggestions for performance improvements. Each item should be a concise string explaining the optimization.',
      items: { type: Type.STRING }
    },
    readability: {
      type: Type.ARRAY,
      description: 'A list of suggestions to improve code readability, style, and maintainability. Each item should be a concise string.',
      items: { type: Type.STRING }
    },
    security: {
      type: Type.ARRAY,
      description: 'A list of potential security vulnerabilities. Each item should be a concise string explaining the vulnerability.',
      items: { type: Type.STRING }
    },
    fixedCode: {
      type: Type.STRING,
      description: 'The complete, corrected version of the provided code snippet. All identified issues should be fixed in this code.'
    },
    changedLines: {
      type: Type.ARRAY,
      description: 'An array of line numbers that were modified, added, or are part of a fixed block compared to the original code. Line numbers are 1-based.',
      items: { type: Type.INTEGER }
    }
  },
  required: ['summary', 'bugs', 'performance', 'readability', 'security', 'fixedCode', 'changedLines']
};


export const reviewCode = async (code: string, language: string): Promise<CodeReviewFeedback> => {
  const systemInstruction = `You are a world-class senior software engineer and an expert in ${language}. Your task is to provide a comprehensive and critical code review.
1. Analyze the provided code for bugs, performance issues, poor readability, and security vulnerabilities. Be concise and direct.
2. Provide a corrected version of the entire code block with all issues fixed.
3. Identify the line numbers (1-based) in the new, fixed code that you changed or added.
4. Do not add any conversational fluff or introductory text. Only return the review in the requested JSON format with all the required fields.`;

  const prompt = `Please review the following ${language} code:\n\n\`\`\`${language.toLowerCase()}\n${code}\n\`\`\``;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json",
        responseSchema: reviewSchema,
        temperature: 0.2,
      }
    });

    const jsonText = response.text.trim();
    const parsedResponse = JSON.parse(jsonText);
    
    // Validate that the parsed response matches the expected structure
    const isValid = 'summary' in parsedResponse && Array.isArray(parsedResponse.bugs) && 'fixedCode' in parsedResponse;
    if (!isValid) {
        throw new Error("Invalid response format from API.");
    }
    
    return parsedResponse as CodeReviewFeedback;
    
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    if (error instanceof Error) {
        throw new Error(`Failed to get code review: ${error.message}`);
    }
    throw new Error("An unknown error occurred during the code review.");
  }
};
