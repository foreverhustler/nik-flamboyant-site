import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  "https://qdldiqcqsgmevyturpmd.supabase.co",  
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkbGRpcWNxc2dtZXZ5dHVycG1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY1MzMxNTMsImV4cCI6MjA5MjEwOTE1M30.8JH5JGGZrJD7dTwHtNlP3Q_De4bPiPWl_yDcVVqP48E"            
);