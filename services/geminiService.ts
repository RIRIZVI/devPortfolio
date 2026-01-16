
import { GoogleGenAI } from "@google/genai";
import { PORTFOLIO_DATA } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getAIResponse = async (userMessage: string) => {
  if (!process.env.API_KEY) {
    return "The AI assistant is currently offline as the API Key is not configured. Please check back later!";
  }

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `
          You are the AI assistant for Ri Rizvi's professional portfolio. 
          Your goal is to answer questions about Ri Rizvi based on the following data:
          
          NAME: ${PORTFOLIO_DATA.name}
          HEADLINE: ${PORTFOLIO_DATA.headline}
          ABOUT: ${PORTFOLIO_DATA.about}
          SKILLS: ${PORTFOLIO_DATA.skills.map(s => `${s.name} (${s.level}%)`).join(", ")}
          EXPERIENCE: ${PORTFOLIO_DATA.experience.map(e => `${e.role} at ${e.company} (${e.period})`).join("; ")}
          PROJECTS: ${PORTFOLIO_DATA.projects.map(p => `${p.title}: ${p.description}`).join("; ")}

          Be professional, concise, and helpful. If asked about something not in the data, politely explain that you only have information regarding Ri's professional background.
          Keep answers under 3 sentences unless asked for a detailed explanation.
        `,
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I'm sorry, I couldn't process that request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Oops! I encountered an error while thinking. Try asking again.";
  }
};
