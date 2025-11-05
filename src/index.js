import { ReviewSession } from "./reviewSession.js";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Serve static frontend files
    if (url.pathname === "/" || url.pathname.startsWith("/public")) {
      return env.ASSETS.fetch(request);
    }

    // Handle AI review API
    if (url.pathname === "/review" && request.method === "POST") {
      const { code } = await request.json();

      const prompt = `
You are an expert software engineer. Review the following code and provide structured feedback.
Focus on correctness, readability, naming, and improvements.
Return in markdown format with clear sections.

Code:
${code}
`;

      const aiResponse = await env.AI.run(
        "@cf/meta/llama-3.3-70b-instruct-fp8-fast",
        { prompt }
      );

      const feedback = aiResponse.response || "No feedback received.";

      // Save feedback in durable object
      const id = env.REVIEW_SESSIONS.idFromName("session1");
      const session = env.REVIEW_SESSIONS.get(id);
      await session.fetch("https://dummy/session", {
        method: "POST",
        body: JSON.stringify({ feedback }),
      });

      return Response.json({ feedback });
    }

    // Fetch review history
    if (url.pathname === "/history") {
      const id = env.REVIEW_SESSIONS.idFromName("session1");
      const session = env.REVIEW_SESSIONS.get(id);
      const res = await session.fetch("https://dummy/history");
      const history = await res.json();
      return Response.json(history);
    }

    return new Response("Not found", { status: 404 });
  },
};

export { ReviewSession };
