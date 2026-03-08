import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const { data: result, error } = await supabase
      .from('contractor_applications')
      .insert([
        {
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          company_name: data.companyName,
          license_number: data.licenseNumber,
          years_experience: data.yearsExperience,
          specialties: data.specialties,
          service_area: data.serviceArea,
          notes: data.notes,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit application' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true, data: result })
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
