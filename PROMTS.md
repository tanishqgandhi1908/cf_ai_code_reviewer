# PROMPTS.md

This document briefly describes the AI-assisted steps I used during development of the **Code Review Assistant** project for the Cloudflare internship challenge.

---

### Prompt 1 — Brainstorming the Idea
> “Suggest some simple but creative project ideas that use Cloudflare Workers AI.”

**Purpose:** Helped me decide on the concept of a *code review assistant* using the Llama model.

---

### Prompt 2 — Clarifying the Workers AI API
> “How do I call the @cf/meta/llama-3.3-70b-instruct-fp8-fast model from a Cloudflare Worker?”

**Purpose:** Confirmed the correct request format and JSON schema for Workers AI.

---

### Prompt 3 — Debugging Durable Object Warning
> “What does the Durable Objects migration warning mean and how do I fix it in wrangler.json?”

**Purpose:** Helped troubleshoot configuration warnings during deployment.

---

### Prompt 4 — UI Polish
> “How can I improve the layout of a minimal HTML + JS interface for sending code to an API and displaying JSON feedback?”

**Purpose:** Improved usability of the web interface.

---

### Prompt 5 — Documentation
> “Give me a professional README.md structure suitable for Cloudflare Workers projects.”

**Purpose:** Used to refine project documentation format and ensure completeness.

---

**Model Used:** GPT-5 (ChatGPT) for brainstorming and debugging support.  
**Runtime AI:** Cloudflare Workers AI model `@cf/meta/llama-3.3-70b-instruct-fp8-fast`.
