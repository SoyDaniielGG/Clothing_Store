import { GoogleGenerativeAI } from '@google/generative-ai';

if (!process.env.NEXT_PUBLIC_GEMINI_API_KEY) {
  throw new Error('La API key de Gemini no está configurada. Por favor, verifica tu archivo .env.local');
}

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY);

const responseCache = new Map();

export const generateResponse = async (messages, products) => {
  try {
    console.log('API Key:', process.env.NEXT_PUBLIC_GEMINI_API_KEY ? 'Presente' : 'Ausente');
    
    const lastUserMessage = messages[messages.length - 1].content;
    const cacheKey = lastUserMessage.toLowerCase().trim();

    if (responseCache.has(cacheKey)) {
      return responseCache.get(cacheKey);
    }

    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      generationConfig: {
        temperature: 0.7,
        maxOutputTokens: 500,
      }
    });

    const systemContext = `Eres un asistente de compras para una tienda de ropa. 
    Tienes acceso a los siguientes productos: ${JSON.stringify(products)}.
    Debes responder de manera amable y profesional, ayudando a los usuarios a encontrar productos,
    comparar precios y hacer recomendaciones basadas en sus necesidades.
    Si no estás seguro de algo, sé honesto y pide más información.`;

    const chatHistory = messages.map(msg => ({
      role: msg.role,
      parts: msg.content
    }));

    const chat = model.startChat({
      history: [
        {
          role: "user",
          parts: systemContext
        },
        ...chatHistory
      ]
    });

    const result = await chat.sendMessage(lastUserMessage);
    const response = result.response.text();

    responseCache.set(cacheKey, response);

    return response;
  } catch (error) {
    console.error('Error detallado:', {
      message: error.message,
      code: error.code,
      status: error.status,
      details: error.details
    });
    throw error;
  }
}; 