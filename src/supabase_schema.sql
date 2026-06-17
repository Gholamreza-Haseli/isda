-- ═══════════════════════════════════════════════════════
-- ISDA — Supabase Schema
-- این فایل را در SQL Editor داشبورد Supabase اجرا کن
-- ═══════════════════════════════════════════════════════

-- Officers
create table if not exists officers (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  full_name text not null,
  title text not null,
  category text not null,
  affiliation text,
  term text,
  email text,
  photo_url text,
  bio text,
  research_interests text,
  publications_summary text,
  website_url text,
  sort_order int default 0,
  is_active boolean default true
);

-- Conferences
create table if not exists conferences (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  title text not null,
  location text not null,
  start_date date not null,
  end_date date,
  description text,
  image_url text,
  external_url text,
  conference_type text default 'annual',
  is_upcoming boolean default true
);

-- News Articles
create table if not exists news_articles (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  title text not null,
  summary text not null,
  body text,
  image_url text,
  category text default 'announcement',
  is_published boolean default true,
  publish_date date,
  author_name text
);

-- Membership Applications
create table if not exists membership_applications (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  full_name text not null,
  email text not null,
  affiliation text,
  position text,
  membership_type text default 'regular',
  research_interests text,
  country text,
  status text default 'pending',
  colleges text[]
);

-- Newsletter Subscribers
create table if not exists newsletter_subscribers (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  email text not null unique,
  full_name text,
  is_active boolean default true,
  subscribed_date date
);

-- Colleges (Special Interest Groups)
create table if not exists colleges (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text not null,
  slug text not null unique,
  description text,
  image_url text,
  chair_name text,
  chair_affiliation text,
  annual_fee numeric default 15
);

-- Regional Chapters
create table if not exists chapters (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text not null,
  slug text not null unique,
  region text,
  description text,
  image_url text,
  chair_name text,
  annual_fee numeric default 5
);

-- Journal Departments
create table if not exists journal_departments (
  id uuid default gen_random_uuid() primary key,
  created_at timestamptz default now(),
  name text not null,
  editor_name text not null,
  editor_affiliation text,
  image_url text,
  description text
);

-- ═══════════════════════════════════════════════════════
-- Row Level Security (RLS)
-- ═══════════════════════════════════════════════════════

alter table officers enable row level security;
alter table conferences enable row level security;
alter table news_articles enable row level security;
alter table colleges enable row level security;
alter table chapters enable row level security;
alter table journal_departments enable row level security;
alter table newsletter_subscribers enable row level security;
alter table membership_applications enable row level security;

-- Public read (همه می‌تونن بخونن)
create policy "Public read officers"           on officers           for select using (true);
create policy "Public read conferences"        on conferences        for select using (true);
create policy "Public read news_articles"      on news_articles      for select using (true);
create policy "Public read colleges"           on colleges           for select using (true);
create policy "Public read chapters"           on chapters           for select using (true);
create policy "Public read journal_departments" on journal_departments for select using (true);

-- Admin write (فقط authenticated user می‌تونه داده اضافه/ویرایش/حذف کنه)
create policy "Auth insert officers"  on officers  for insert with check (auth.role() = 'authenticated');
create policy "Auth update officers"  on officers  for update using (auth.role() = 'authenticated');
create policy "Auth delete officers"  on officers  for delete using (auth.role() = 'authenticated');

create policy "Auth insert conferences" on conferences for insert with check (auth.role() = 'authenticated');
create policy "Auth update conferences" on conferences for update using (auth.role() = 'authenticated');
create policy "Auth delete conferences" on conferences for delete using (auth.role() = 'authenticated');

create policy "Auth insert news" on news_articles for insert with check (auth.role() = 'authenticated');
create policy "Auth update news" on news_articles for update using (auth.role() = 'authenticated');
create policy "Auth delete news" on news_articles for delete using (auth.role() = 'authenticated');

-- Newsletter و Membership: هر کی می‌تونه submit کنه، فقط admin می‌تونه بخونه
create policy "Public insert newsletter"    on newsletter_subscribers for insert with check (true);
create policy "Public insert membership"    on membership_applications for insert with check (true);
create policy "Auth read newsletter"        on newsletter_subscribers for select using (auth.role() = 'authenticated');
create policy "Auth read membership"        on membership_applications for select using (auth.role() = 'authenticated');
