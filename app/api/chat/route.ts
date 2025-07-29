import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    if (!process.env.CLOUDFLARE_AI_WORKER_URL) {
      throw new Error("CLOUDFLARE_AI_WORKER_URL is not configured");
    }

    const formData = await request.formData();
    const message = formData.get("message") as string;

    if (!message?.trim()) {
      return NextResponse.json(
        { error: "Message is required" },
        { status: 400 }
      );
    }

    const response = await fetch(process.env.CLOUDFLARE_AI_WORKER_URL, {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`Worker error: ${response.status}`);
    }

    const aiResponse = await response.text();
    return NextResponse.json({ response: aiResponse });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
