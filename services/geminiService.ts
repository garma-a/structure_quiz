import { GoogleGenAI } from "@google/genai";

// Ensure API key is available
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const explainAnswer = async (question: string, options: string[] | undefined, correctAnswer: string, userAnswer: string) => {
  if (!process.env.API_KEY) return "API Key not configured.";

  try {
    const prompt = `
      You are an expert professor in Programming Languages Structures.
      
      Question: "${question}"
      Options: ${options ? options.join(', ') : 'True/False'}
      Correct Answer: "${correctAnswer}"
      Student's Answer: "${userAnswer}"

      The student got this wrong (or wants an explanation). 
      Provide a concise, clear explanation (max 3 sentences) of why the correct answer is right and why the student's answer might be wrong (if applicable).
      Focus on concepts like Binding, Scoping, Parsing, Semantics, etc.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "No explanation available.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Could not retrieve explanation at this time.";
  }
};

export const askTutor = async (query: string, context: string) => {
  if (!process.env.API_KEY) return "API Key not configured.";

  try {
    const prompt = `
      You are a helpful tutor for a "Structure of Programming Languages" course.
      The user is asking: "${query}"
      
      Context from current quiz/lecture: ${context}

      Answer deeply and accurately. Use the 'gemini-3-pro-preview' model's reasoning capabilities.
      If the query is about specific concepts like "Dangling Else", "Static vs Dynamic Scoping", "Parameter Passing", be precise.
    `;

    // Using Pro model for complex reasoning (Thinking Mode)
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        thinkingConfig: { thinkingBudget: 1024 }, // Allocating budget for reasoning
      }
    });

    return response.text || "I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Error connecting to AI Tutor.";
  }
};