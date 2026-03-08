import { Button } from '@/components/ui/button'

interface HeroSectionProps {
  onGetStarted: () => void
}

export default function HeroSection({ onGetStarted }: HeroSectionProps) {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground text-balance">
              Connect. Trade. Succeed.
            </h1>
            <p className="text-xl text-foreground/70 max-w-lg text-pretty">
              The premier B2B platform connecting contractors, wholesalers, and suppliers in the trade industry. Streamline your supply chain, expand your network, and grow your business.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                onClick={onGetStarted}
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Get Started
              </Button>
              <Button 
                variant="outline" 
                size="lg"
              >
                Learn More
              </Button>
            </div>
            <div className="flex gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">500+</div>
                <p className="text-sm text-foreground/60">Active Traders</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary">24/7</div>
                <p className="text-sm text-foreground/60">Support</p>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg h-96 flex items-center justify-center border border-border">
            <div className="text-center text-foreground/40">
              <div className="text-6xl mb-4">📦</div>
              <p>Trade Platform Illustration</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
