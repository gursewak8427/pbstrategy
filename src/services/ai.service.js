import axios from "axios";

const GROQ_API_KEY = "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";
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

export default async function getAIResponse(userMessage, systemPrompt) {
  try {
    // Prepare the API request payload
    const payload = {
      model: "llama3-8b-8192",
      messages: [
        {
          role: "user",
          content: systemPrompt,
        },
        {
          role: "user",
          content: userMessage,
        },
      ],
    };

    // Make the API request
    const response = await axios.post(GROQ_API_URL, payload, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
    });

    // Extract and return the response content
    const messageContent = response.data.choices[0]?.message?.content || "";
    console.log("Groq API Response:", messageContent);
    return messageContent;
  } catch (error) {
    // Handle errors and log details
    if (error.response) {
      console.error("Groq API Error:", error.response.data);
    } else {
      console.error("Request Error:", error.message);
    }
    throw error;
  }
}
