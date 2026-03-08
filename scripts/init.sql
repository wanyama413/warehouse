-- Create contractor_applications table
CREATE TABLE IF NOT EXISTS contractor_applications (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company_name TEXT NOT NULL,
  license_number TEXT NOT NULL,
  years_experience TEXT,
  specialties TEXT,
  service_area TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create information_requests table
CREATE TABLE IF NOT EXISTS information_requests (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  company TEXT,
  industry TEXT,
  interests TEXT,
  message TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create wholesaler_inquiries table
CREATE TABLE IF NOT EXISTS wholesaler_inquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company_name TEXT NOT NULL,
  business_license TEXT NOT NULL,
  product_categories TEXT,
  minimum_order_value TEXT,
  delivery_regions TEXT,
  notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create indexes for faster queries
CREATE INDEX IF NOT EXISTS idx_contractor_email ON contractor_applications(email);
CREATE INDEX IF NOT EXISTS idx_information_email ON information_requests(email);
CREATE INDEX IF NOT EXISTS idx_wholesaler_email ON wholesaler_inquiries(email);
