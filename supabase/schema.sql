-- Enable UUID extension
create extension if not exists "uuid-ossp";

-- Create Enum Types
create type transaction_type as enum ('income', 'expense');
create type transaction_status as enum ('pending', 'completed');

-- 1. Profiles Table (extends auth.users)
create table public.profiles (
  id uuid references auth.users on delete cascade not null primary key,
  full_name text,
  avatar_url text,
  updated_at timestamptz,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 2. Categories Table
create table public.categories (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  name text not null,
  type transaction_type not null,
  color_code text default '#000000',
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- 3. Transactions Table
create table public.transactions (
  id uuid default uuid_generate_v4() primary key,
  user_id uuid references public.profiles(id) on delete cascade not null,
  category_id uuid references public.categories(id) on delete set null,
  amount decimal(12,2) not null,
  description text,
  date date not null default current_date,
  status transaction_status default 'completed',
  attachment_url text,
  created_at timestamptz default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security (RLS)
alter table public.profiles enable row level security;
alter table public.categories enable row level security;
alter table public.transactions enable row level security;

-- Policies for Profiles
create policy "Users can view own profile" on public.profiles
  for select using (auth.uid() = id);

create policy "Users can update own profile" on public.profiles
  for update using (auth.uid() = id);

-- Policies for Categories
create policy "Users can view own categories" on public.categories
  for select using (auth.uid() = user_id);

create policy "Users can insert own categories" on public.categories
  for insert with check (auth.uid() = user_id);

create policy "Users can update own categories" on public.categories
  for update using (auth.uid() = user_id);

create policy "Users can delete own categories" on public.categories
  for delete using (auth.uid() = user_id);

-- Policies for Transactions
create policy "Users can view own transactions" on public.transactions
  for select using (auth.uid() = user_id);

create policy "Users can insert own transactions" on public.transactions
  for insert with check (auth.uid() = user_id);

create policy "Users can update own transactions" on public.transactions
  for update using (auth.uid() = user_id);

create policy "Users can delete own transactions" on public.transactions
  for delete using (auth.uid() = user_id);

-- Trigger to handle new user signup
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, full_name, avatar_url)
  values (new.id, new.raw_user_meta_data->>'full_name', new.raw_user_meta_data->>'avatar_url');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Default Categories (Optional helper function to call from frontend on onboarding)
create or replace function public.seed_default_categories()
returns void as $$
declare
  uid uuid;
begin
  uid := auth.uid();
  
  insert into public.categories (user_id, name, type, color_code) values
  (uid, 'Salary', 'income', '#10B981'),
  (uid, 'Freelance', 'income', '#34D399'),
  (uid, 'Rent', 'expense', '#EF4444'),
  (uid, 'Groceries', 'expense', '#F59E0B'),
  (uid, 'Utilities', 'expense', '#3B82F6'),
  (uid, 'Entertainment', 'expense', '#8B5CF6');
end;
$$ language plpgsql security definer;
