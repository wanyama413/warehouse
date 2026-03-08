'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'

interface WholesalerFormProps {
  onSuccess: () => void
}

export default function WholesalerForm({ onSuccess }: WholesalerFormProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    companyName: '',
    businessLicense: '',
    productCategories: '',
    minimumOrderValue: '',
    deliveryRegions: '',
    notes: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/wholesaler-inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit inquiry')
      }

      onSuccess()
    } catch (err) {
      setError('Error submitting form. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Full Name</label>
        <Input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          required
          placeholder="John Wholesaler"
          className="w-full"
        />
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Email</label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="john@wholesale.com"
            className="w-full"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">Phone</label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="+1 (555) 123-4567"
            className="w-full"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Company Name</label>
        <Input
          type="text"
          name="companyName"
          value={formData.companyName}
          onChange={handleChange}
          required
          placeholder="Your Wholesale Company"
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Business License Number</label>
        <Input
          type="text"
          name="businessLicense"
          value={formData.businessLicense}
          onChange={handleChange}
          required
          placeholder="LIC-987654"
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Product Categories</label>
        <Input
          type="text"
          name="productCategories"
          value={formData.productCategories}
          onChange={handleChange}
          placeholder="e.g., Tools, Materials, Equipment"
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Minimum Order Value</label>
        <Input
          type="text"
          name="minimumOrderValue"
          value={formData.minimumOrderValue}
          onChange={handleChange}
          placeholder="e.g., $1,000"
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Delivery Regions</label>
        <Input
          type="text"
          name="deliveryRegions"
          value={formData.deliveryRegions}
          onChange={handleChange}
          placeholder="e.g., Continental US, Canada"
          className="w-full"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-foreground mb-1">Additional Notes</label>
        <textarea
          name="notes"
          value={formData.notes}
          onChange={handleChange}
          placeholder="Tell us more about your wholesale business..."
          className="w-full px-3 py-2 border border-border rounded-md text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          rows={4}
        />
      </div>

      {error && (
        <Card className="p-4 bg-destructive/10 border-destructive">
          <p className="text-sm text-destructive">{error}</p>
        </Card>
      )}

      <Button
        type="submit"
        disabled={loading}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
      >
        {loading ? 'Submitting...' : 'Submit Inquiry'}
      </Button>
    </form>
  )
}
