# cf_ai_code_reviewer

An AI-powered **Code Review Assistant** built on **Cloudflare Workers AI**.  
This app lets users paste code, and get instant AI-generated feedback on correctness, readability, and best practices — using **Llama 3.3 70B** hosted on Cloudflare.

---

## Live Demo

🔗 **Deployed App:** [https://cf-ai-code-reviewer.cf-ai-review-buddy.workers.dev](https://cf-ai-code-reviewer.cf-ai-review-buddy.workers.dev)

---


## Features

- **LLM-powered Code Review** — powered by Cloudflare’s `@cf/meta/llama-3.3-70b-instruct-fp8-fast`  
- **Interactive Web UI** — built with HTML + JS, served via Cloudflare Pages/Assets  
- **Durable Object Memory**

## Tech Stack

| Component | Description |
|------------|-------------|
| **LLM** | Llama 3.3 70B Instruct (via Workers AI) |
| **Runtime** | Cloudflare Workers |
| **State** | Durable Objects (SQLite-based) |
| **Frontend** | Static HTML + Vanilla JS |
| **Deployment** | Wrangler CLI |
