import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

interface PricingSectionProps {
  onSelectPlan: (plan: 'contractor' | 'information' | 'wholesaler') => void
}

export default function PricingSection({ onSelectPlan }: PricingSectionProps) {
  const plans = [
    {
      name: 'Contractor',
      price: 'Free',
      description: 'Perfect for individual contractors',
      features: [
        'Unlimited job listings',
        'Access to 500+ suppliers',
        'Message other traders',
        'Rating system access',
        'Basic analytics'
      ],
      cta: 'Get Started',
      id: 'contractor' as const,
      highlighted: true
    },
    {
      name: 'Wholesaler',
      price: '$29/mo',
      description: 'For wholesalers and bulk suppliers',
      features: [
        'Bulk listing management',
        'Advanced search filters',
        'Priority messaging',
        'Dedicated account manager',
        'Advanced analytics'
      ],
      cta: 'Join Now',
      id: 'wholesaler' as const
    },
    {
      name: 'Information',
      price: 'Free',
      description: 'Get industry insights',
      features: [
        'Market trend reports',
        'Price monitoring',
        'Industry news',
        'Network analysis',
        'Custom alerts'
      ],
      cta: 'Learn More',
      id: 'information' as const
    }
  ]

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Simple, Transparent Pricing</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto text-pretty">
            Choose the plan that works best for your business
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <Card 
              key={plan.name}
              className={`p-8 border flex flex-col h-full ${
                plan.highlighted 
                  ? 'border-primary bg-gradient-to-br from-primary/5 to-transparent' 
                  : 'border-border'
              }`}
            >
              {plan.highlighted && (
                <div className="inline-block w-fit mb-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-bold">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-foreground/60 text-sm mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                {plan.price !== 'Free' && <span className="text-foreground/60">/month</span>}
              </div>
              
              <ul className="space-y-3 mb-8 flex-grow">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="text-primary font-bold mt-0.5">✓</span>
                    <span className="text-foreground/70 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                onClick={() => onSelectPlan(plan.id)}
                variant={plan.highlighted ? 'default' : 'outline'}
                className={plan.highlighted ? 'bg-primary hover:bg-primary/90 text-primary-foreground w-full' : 'w-full'}
              >
                {plan.cta}
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
