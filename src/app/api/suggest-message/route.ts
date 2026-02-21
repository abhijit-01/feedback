import { streamText } from "ai";
import OpenAI from "openai";

export const runtime = "edge";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export async function POST() {
  try {
    const prompt =
      "Create a list of three open-ended and engaging questions formatted as a single string. Each question should be separated by '||'. These questions are for an anonymous social messaging platform, like Qooh.me, and should be suitable for a diverse audience. Avoid personal or sensitive topics, focusing instead on universal themes that encourage friendly interaction...";

    const result = await streamText({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    return result.toTextStreamResponse();
  } catch (error) {
    console.error(error);
    return new Response("Error generating questions", { status: 500 });
  }
}
