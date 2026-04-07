# Cloudflare AI Chatbot Template

[cloudflarebutton]

A production-ready, full-stack AI chatbot application built on Cloudflare Workers. Features persistent chat sessions powered by Durable Objects and Agents SDK, real-time streaming responses, tool calling (weather, web search, MCP integration), model switching, and a modern React UI with Shadcn components.

## ✨ Key Features

- **Persistent Chat Sessions**: Unlimited sessions with Durable Objects & Agents SDK for stateful conversations.
- **Streaming Responses**: Real-time token-by-token streaming for natural chat experience.
- **Tool Calling**: Built-in tools for weather, web search (SerpAPI), MCP servers, and extensible custom tools.
- **Multi-Model Support**: Switch between Gemini models (Flash, Pro) via Cloudflare AI Gateway.
- **Session Management**: Create, list, edit, delete sessions with titles and activity tracking.
- **Modern UI**: Responsive React app with Tailwind CSS, Shadcn/UI, TanStack Query, and dark mode.
- **Production-Ready**: Type-safe TypeScript, error handling, logging, CORS, health checks.
- **Edge Deployment**: Zero-cold-start with Cloudflare Workers global network.

## 🛠️ Tech Stack

- **Backend**: Cloudflare Workers, Hono, Agents SDK, Durable Objects, OpenAI SDK (compatible).
- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Shadcn/UI, TanStack React Query.
- **AI**: Cloudflare AI Gateway, Gemini models, MCP (Model Context Protocol) tools.
- **Tools**: SerpAPI (web search), custom weather, extensible MCP integration.
- **Dev Tools**: Bun, Wrangler, ESLint, Tailwind.

## 🚀 Quick Start

### Prerequisites

- [Bun](https://bun.sh/) installed.
- [Cloudflare Account](https://dash.cloudflare.com/) with Workers enabled.
- [Cloudflare AI Gateway](https://developers.cloudflare.com/ai-gateway/) configured for OpenAI-compatible models (e.g., Gemini).
- Optional: SerpAPI key for web search.

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd mississauga-plumbing-kosujslw8nb6o5fuirhoz
   ```

2. Install dependencies:
   ```bash
   bun install
   ```

3. Generate Worker types:
   ```bash
   bun run cf-typegen
   ```

4. Configure environment variables in `wrangler.jsonc`:
   ```json
   "vars": {
     "CF_AI_BASE_URL": "https://gateway.ai.cloudflare.com/v1/{account_id}/{gateway_id}/openai",
     "CF_AI_API_KEY": "{your_ai_gateway_token}",
     "SERPAPI_KEY": "{optional_serpapi_key}"
   }
   ```

5. Start development server:
   ```bash
   bun dev
   ```

   Opens at `http://localhost:3000` (or your configured PORT).

## 📱 Usage

- **Chat**: Start a new session or switch between existing ones in the sidebar.
- **Streaming**: Messages stream in real-time with processing indicators.
- **Tools**: Ask about weather (`"What's the weather in Toronto?"`), search (`"Search latest AI news"`), or use MCP tools.
- **Sessions**: Create/delete sessions, edit titles, clear all via API or UI.
- **Models**: Switch between Gemini models via settings.

### API Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/api/sessions` | GET | List sessions |
| `/api/sessions` | POST | Create session |
| `/api/sessions/:id` | DELETE | Delete session |
| `/api/chat/:sessionId/chat` | POST | Send message (supports streaming) |
| `/api/chat/:sessionId/messages` | GET | Get chat state |

## 🔧 Development

- **Hot Reload**: Frontend auto-reloads; Worker updates on save.
- **Type Generation**: Run `bun run cf-typegen` after `wrangler` config changes.
- **Linting**: `bun run lint`.
- **Build**: `bun run build`.
- **Preview**: `bun run preview`.

Add custom routes in `worker/userRoutes.ts`. Extend tools in `worker/tools.ts` or MCP config in `worker/mcp-client.ts`.

## 🚀 Deployment

1. Build assets:
   ```bash
   bun run build
   ```

2. Deploy to Cloudflare:
   ```bash
   bun run deploy
   ```

3. Or use the one-click deploy:

[cloudflarebutton]

**Post-Deploy**:
- Bind custom domain in Cloudflare Dashboard.
- Monitor via Cloudflare Observability.
- Scale automatically with Durable Objects.

## 🤝 Contributing

1. Fork & clone.
2. `bun install`.
3. Create feature branch: `git checkout -b feature/my-feature`.
4. Commit changes: `git commit -m 'Add feature'`.
5. Push & PR.

## 📄 License

MIT License. See [LICENSE](LICENSE) for details.

## 🙌 Support

- [Cloudflare Workers Docs](https://developers.cloudflare.com/workers/)
- [Agents SDK](https://developers.cloudflare.com/agents/)
- [Cloudflare AI Gateway](https://developers.cloudflare.com/ai-gateway/)

Built with ❤️ for Cloudflare's edge.