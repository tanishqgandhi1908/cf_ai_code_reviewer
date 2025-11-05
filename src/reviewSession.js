export class ReviewSession {
    constructor(state, env) {
      this.state = state;
      this.env = env;
    }
  
    async fetch(request) {
      const url = new URL(request.url);
  
      if (url.pathname === "/session" && request.method === "POST") {
        const { feedback } = await request.json();
        const history = (await this.state.storage.get("history")) || [];
        history.push({ feedback, ts: Date.now() });
        await this.state.storage.put("history", history);
        return new Response("Saved");
      }
  
      if (url.pathname === "/history") {
        const history = (await this.state.storage.get("history")) || [];
        return Response.json(history);
      }
  
      return new Response("Not found", { status: 404 });
    }
  }
  