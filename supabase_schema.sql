-- Create a table for storing setup submissions
create table public.setup_submissions (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  
  -- Form Fields
  product_name text,
  logo_url text,
  pdf_url text,
  brand_colors text,
  brand_inspiration text,
  things_to_avoid text,
  domain_name text,
  domain_notes text,
  cloud_provider text,
  cloud_account_status text,
  preferred_region text,
  whisper_api text,
  llm_access text,
  gpu_server text,
  payment_gateway text,
  payment_account text,
  free_trial text,
  paid_plans text,
  mood_check_ins text,
  wellness_tools jsonb, -- Storing array of selected tools
  user_history text
);

-- Create a storage bucket for logos (if it doesn't exist)
insert into storage.buckets (id, name, public)
values ('logos', 'logos', true), ('submissions', 'submissions', false)
on conflict (id) do nothing;

-- Set up security policies (RLS)
alter table public.setup_submissions enable row level security;

-- Allow anyone to insert (since this is a public setup form)
create policy "Enable insert for all users"
on public.setup_submissions
for insert
with check (true);

-- Allow public access to read logos
create policy "Give public access to logos"
on storage.objects
for select
using ( bucket_id = 'logos' );

-- Allow public access to upload logos
create policy "Give public access to upload logos"
on storage.objects
for insert
with check ( bucket_id = 'logos' );

-- Allow public access to upload PDFs to submissions bucket (but not read)
create policy "Give public access to upload submissions"
on storage.objects
for insert
with check ( bucket_id = 'submissions' );
