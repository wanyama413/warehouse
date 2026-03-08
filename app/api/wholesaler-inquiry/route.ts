import { supabase } from '@/lib/supabase'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const { data: result, error } = await supabase
      .from('wholesaler_inquiries')
      .insert([
        {
          full_name: data.fullName,
          email: data.email,
          phone: data.phone,
          company_name: data.companyName,
          business_license: data.businessLicense,
          product_categories: data.productCategories,
          minimum_order_value: data.minimumOrderValue,
          delivery_regions: data.deliveryRegions,
          notes: data.notes,
          created_at: new Date().toISOString()
        }
      ])
      .select()

    if (error) {
      console.error('Supabase error:', error)
      return NextResponse.json(
        { error: 'Failed to submit inquiry' },
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
