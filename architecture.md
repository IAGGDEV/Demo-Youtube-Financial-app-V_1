# Financial SaaS Dashboard - Architecture

## Tech Stack
- **Frontend**: Next.js 14 (App Router), React, Tailwind CSS
- **Backend**: Next.js API Routes (Serverless), Supabase (Auth & Postgres)
- **Language**: TypeScript
- **Styling**: Tailwind CSS (Dark Luxury / Glassmorphism)

## Database Schema (PostgreSQL via Supabase)
### Tables
1. **profiles**
   - Extends Supabase Auth users
   - `id` (UUID, PK, FK to auth.users)
   - `full_name` (Text)
   - `created_at` (Timestamptz)

2. **categories**
   - `id` (UUID, PK)
   - `user_id` (UUID, FK to profiles)
   - `name` (Text)
   - `type` (Enum: 'income', 'expense')
   - `color_code` (Text, Hex)
   - `created_at` (Timestamptz)

3. **transactions**
   - `id` (UUID, PK)
   - `user_id` (UUID, FK to profiles)
   - `category_id` (UUID, FK to categories, nullable)
   - `amount` (Decimal)
   - `description` (Text)
   - `date` (Date)
   - `status` (Enum: 'pending', 'completed')
   - `attachment_url` (Text, nullable)
   - `created_at` (Timestamptz)

### Security (RLS)
- All tables have RLS enabled.
- Policies ensure users can only:
  - SELECT their own data (`auth.uid() = user_id`)
  - INSERT their own data (`auth.uid() = user_id`)
  - UPDATE their own data
  - DELETE their own data

## API Architecture (REST)
- **GET /api/summary**: Fetches KPI metrics (Total Balance, Revenue, Expenses).
- **GET /api/chart-data**: Fetches transaction history grouped by date.
- **GET /api/transactions**: Paginated list of recent transactions.
- **POST /api/transaction**: Creates a new transaction.

## Authentication
- **Provider**: Supabase Auth
- **Middleware**: Protected routes via `middleware.ts` ensuring session validity.

## Folder Structure
```
/app
  /api
    /summary
    /chart-data
    /transactions
  /dashboard
  /login
/components
/lib
  supabase.ts (Client & Server clients)
  utils.ts
/supabase
  schema.sql
/types
  index.ts
```
