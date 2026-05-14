create table if not exists journal_posts (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  title text not null,
  excerpt text not null,
  cover_label text not null default 'Factory Journal',
  published_at timestamptz,
  read_time text not null default '5 min read',
  status text not null default 'draft' check (status in ('draft', 'published')),
  pinned boolean not null default false,
  cover_image_url text,
  cover_video_url text,
  hero_summary text not null,
  overview text not null,
  rich_content jsonb not null default '[]'::jsonb,
  shipment_title text,
  shipment_description text,
  shipment_checklist jsonb not null default '[]'::jsonb,
  created_by uuid references auth.users(id),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists journal_tags (
  id uuid primary key default gen_random_uuid(),
  name text unique not null
);

create table if not exists journal_post_tags (
  post_id uuid not null references journal_posts(id) on delete cascade,
  tag_id uuid not null references journal_tags(id) on delete cascade,
  primary key (post_id, tag_id)
);

create table if not exists journal_timeline_steps (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references journal_posts(id) on delete cascade,
  sort_order int not null default 0,
  phase text not null,
  description text not null
);

create table if not exists journal_gallery_items (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references journal_posts(id) on delete cascade,
  sort_order int not null default 0,
  title text not null,
  caption text not null,
  image_url text
);

create table if not exists journal_metrics (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references journal_posts(id) on delete cascade,
  sort_order int not null default 0,
  label text not null,
  value text not null,
  note text not null
);

alter table journal_posts enable row level security;
alter table journal_tags enable row level security;
alter table journal_post_tags enable row level security;
alter table journal_timeline_steps enable row level security;
alter table journal_gallery_items enable row level security;
alter table journal_metrics enable row level security;

create policy "public can read published posts"
on journal_posts
for select
using (status = 'published');

create policy "public can read published related data"
on journal_timeline_steps
for select
using (
  exists (
    select 1
    from journal_posts
    where journal_posts.id = journal_timeline_steps.post_id
      and journal_posts.status = 'published'
  )
);

create policy "public can read published gallery"
on journal_gallery_items
for select
using (
  exists (
    select 1
    from journal_posts
    where journal_posts.id = journal_gallery_items.post_id
      and journal_posts.status = 'published'
  )
);

create policy "public can read published metrics"
on journal_metrics
for select
using (
  exists (
    select 1
    from journal_posts
    where journal_posts.id = journal_metrics.post_id
      and journal_posts.status = 'published'
  )
);

create policy "public can read tag relations"
on journal_post_tags
for select
using (
  exists (
    select 1
    from journal_posts
    where journal_posts.id = journal_post_tags.post_id
      and journal_posts.status = 'published'
  )
);

create policy "public can read tags"
on journal_tags
for select
using (true);

-- Replace this with your own admin role strategy or email allowlist logic.
create policy "admins manage posts"
on journal_posts
for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

create policy "admins manage tags"
on journal_tags
for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

create policy "admins manage post tags"
on journal_post_tags
for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

create policy "admins manage timeline"
on journal_timeline_steps
for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

create policy "admins manage gallery"
on journal_gallery_items
for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');

create policy "admins manage metrics"
on journal_metrics
for all
using (auth.role() = 'authenticated')
with check (auth.role() = 'authenticated');
