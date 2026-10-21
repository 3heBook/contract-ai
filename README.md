# ContractAI

Protective freelance contract generator for developers and designers.

## Features
- Create Project Agreements, NDAs, Proposals, etc.
- Clean English UI
- Mock AI generation (ready to connect to real LLM)
- Pricing, Account, Payment Success pages

## How to run

```bash
cd contract-ai
npm install
npm run dev
```

Open http://localhost:3000

## Next steps for production
1. Connect real AI (OpenAI / Claude) in the create page
2. Add authentication (Clerk / NextAuth)
3. Add Stripe for payments
4. Store contracts in a database (Supabase / PlanetScale)
5. Implement real PDF generation (react-pdf or puppeteer)

## Project structure
- `/` – Dashboard
- `/create` – Contract form
- `/result` – Generated contract view
- `/contracts` – My Contracts list
- `/pricing` – Pricing plans
- `/account` – Account & Settings
- `/success` – Payment success
