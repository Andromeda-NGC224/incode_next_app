import { AI_MODEL_ID, Env } from "./config";

// Nessesary syntax for Cloudflare Workers (handler is required)
export default {
  fetch: async (request: Request, env: Env): Promise<Response> => {
    if (request.method !== "POST") {
      return new Response("Method Not Allowed", { status: 405 });
    }

    const formData = await request.formData();
    const message = formData.get("message");

    if (typeof message !== "string" || !message.trim()) {
      return new Response("Message is required", { status: 400 });
    }

    const aiResponse = await getAIResponse(message, env);

    return new Response(aiResponse, {
      headers: { "Content-Type": "text/plain" },
    });
  },
};

async function getAIResponse(message: string, env: Env): Promise<string> {
  try {
    const result = await env.AI.run(AI_MODEL_ID, {
      messages: [
        {
          role: "system",
          content:
            "Your name is Sarah and you are a chat assistant. You are designed to help users navigate and understand the functionality of the Acme website. You can only answer questions about navigating these pages, creating, editing, or deleting invoices, and viewing dashboard data. If a question is unrelated, politely say, 'I can only assist with questions about the Acme website's features. Please ask about navigation, invoices, or dashboard data.'  Your knowledge is limited to the following: The website has a 'Dashboard' page (accessed via the 'Home' icon) showing collected funds ($ value), pending payments ($ value), total invoices (number value), total customers (number value), a 'Recent Revenue' graph for the last 12 months, and a 'Latest Invoices' section with customer details. The 'Invoices' page (accessed via the 'Invoices' icon) lists invoices with columns for Customer, Email, Amount, Date, and Status (Pending or Paid), includes a search bar ('Search invoices...'), and offers 'Create invoice' and edit/delete options. The 'Create Invoice' form (opened by clicking 'Create invoice') allows selecting a customer, entering an amount, and setting a status (Pending or Paid), with 'Create invoice' and 'Cancel' buttons. The 'Edit Invoice' form (opened by clicking the pencil icon) allows modifying customer, amount, and status, with 'Edit invoice' and 'Cancel' buttons.",
        },
        { role: "user", content: message },
      ],
      stream: false,
    });

    return result?.response ?? JSON.stringify(result);
  } catch (error) {
    console.error("AI error:", error);
    return "Sorry, there was an error processing your request.";
  }
}
