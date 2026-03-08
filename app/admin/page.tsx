'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'

type SubmissionType = 'contractor' | 'information' | 'wholesaler'

interface AdminSubmission {
  id: string
  [key: string]: any
}

const ADMIN_EMAIL = 'admin@swiftrade.com'
const ADMIN_PASSWORD = 'SecureAdmin123!'

export default function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loginError, setLoginError] = useState('')
  const [activeTab, setActiveTab] = useState<SubmissionType>('contractor')
  const [submissions, setSubmissions] = useState<AdminSubmission[]>([])
  const [loading, setLoading] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setLoginError('')

    if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
      setIsAuthenticated(true)
      setEmail('')
      setPassword('')
      fetchSubmissions('contractor')
    } else {
      setLoginError('Invalid credentials')
    }
  }

  const fetchSubmissions = async (type: SubmissionType) => {
    setLoading(true)
    try {
      const tableName = type === 'contractor' ? 'contractor_applications' 
                       : type === 'information' ? 'information_requests'
                       : 'wholesaler_inquiries'
      
      const response = await fetch(`/api/admin/submissions?type=${type}`)
      const data = await response.json()
      setSubmissions(data.submissions || [])
    } catch (error) {
      console.error('Failed to fetch submissions:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleTabChange = (type: SubmissionType) => {
    setActiveTab(type)
    fetchSubmissions(type)
    setEditingId(null)
  }

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this submission?')) return

    try {
      const response = await fetch('/api/admin/submissions', {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, type: activeTab })
      })

      if (response.ok) {
        fetchSubmissions(activeTab)
      }
    } catch (error) {
      console.error('Failed to delete:', error)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setSubmissions([])
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <Card className="w-full max-w-md p-8 border border-border">
          <h1 className="text-3xl font-bold text-foreground mb-6 text-center">Admin Dashboard</h1>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Email</label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@swiftrade.com"
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-1">Password</label>
              <Input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full"
              />
            </div>

            {loginError && (
              <Card className="p-3 bg-destructive/10 border-destructive">
                <p className="text-sm text-destructive">{loginError}</p>
              </Card>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Sign In
            </Button>
          </form>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-xs text-foreground/50 mb-2">Demo Credentials:</p>
            <p className="text-xs text-foreground/60">Email: admin@swiftrade.com</p>
            <p className="text-xs text-foreground/60">Password: SecureAdmin123!</p>
          </div>
        </Card>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-foreground">Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-2 mb-6 border-b border-border">
          {(['contractor', 'information', 'wholesaler'] as SubmissionType[]).map((type) => (
            <button
              key={type}
              onClick={() => handleTabChange(type)}
              className={`px-4 py-2 font-medium border-b-2 transition-colors ${
                activeTab === type
                  ? 'border-primary text-foreground'
                  : 'border-transparent text-foreground/60 hover:text-foreground'
              }`}
            >
              {type === 'contractor' && `Contractor Applications (${submissions.length})`}
              {type === 'information' && `Information Requests (${submissions.length})`}
              {type === 'wholesaler' && `Wholesaler Inquiries (${submissions.length})`}
            </button>
          ))}
        </div>

        {/* Submissions List */}
        {loading ? (
          <Card className="p-8 text-center text-foreground/60">
            Loading submissions...
          </Card>
        ) : submissions.length === 0 ? (
          <Card className="p-8 text-center text-foreground/60">
            No submissions yet
          </Card>
        ) : (
          <div className="space-y-4">
            {submissions.map((submission) => (
              <Card key={submission.id} className="p-6 border border-border">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  {Object.entries(submission).map(([key, value]) => {
                    if (key === 'id' || key === 'created_at') return null
                    return (
                      <div key={key}>
                        <p className="text-xs text-foreground/60 uppercase font-semibold">
                          {key.replace(/_/g, ' ')}
                        </p>
                        <p className="text-foreground">
                          {value ? String(value) : '—'}
                        </p>
                      </div>
                    )
                  })}
                </div>

                <p className="text-xs text-foreground/40 mb-4">
                  Submitted: {new Date(submission.created_at).toLocaleDateString()}
                </p>

                <div className="flex gap-2">
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(submission.id)}
                  >
                    Delete
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
