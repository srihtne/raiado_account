// main.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = 'https://jegbgbaelhfuuglyiigc.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImplZ2JnYmFlbGhmdXVnbHlpaWdjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMyNzU0MTgsImV4cCI6MjA3ODg1MTQxOH0.WaLuloeF4ZxxY32dWi6tBPUxV2FgzUgEnDcvGA6gTUE'

export const supabase = createClient(supabaseUrl, supabaseKey)