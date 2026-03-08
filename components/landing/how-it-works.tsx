import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface HowItWorksProps {
  onGetStarted: () => void
}

export default function HowItWorks({ onGetStarted }: HowItWorksProps) {
  const steps = [
    {
      number: 1,
      title: 'Sign Up',
      description: 'Create your account and verify your business details in minutes'
    },
    {
      number: 2,
      title: 'Build Your Profile',
      description: 'Add your services, rates, and availability to your trader profile'
    },
    {
      number: 3,
      title: 'Connect with Partners',
      description: 'Browse and connect with contractors, wholesalers, and suppliers'
    },
    {
      number: 4,
      title: 'Close Deals',
      description: 'Negotiate terms and close transactions securely on the platform'
    }
  ]

  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">How It Works</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-pretty">
            Get up and running in four simple steps. Our streamlined process ensures you can start trading within hours.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              <Card className="p-6 h-full border border-border">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-foreground/70 text-sm">{step.description}</p>
              </Card>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2">
                  <div className="w-6 h-0.5 bg-border"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            onClick={onGetStarted}
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Start Your Journey
          </Button>
        </div>
      </div>
    </section>
  )
}
