'use client'

import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'How do I get started as a contractor?',
      answer: 'Simply sign up with your business details, create your profile, and start connecting with suppliers and wholesalers. The entire process takes less than 10 minutes.'
    },
    {
      question: 'Is there a verification process?',
      answer: 'Yes, we verify all business accounts to ensure safety and legitimacy on our platform. Most verifications are completed within 24 hours.'
    },
    {
      question: 'How are payments handled?',
      answer: 'We support secure payments through multiple methods including bank transfers, credit cards, and escrow services to protect both parties.'
    },
    {
      question: 'Can I cancel my subscription anytime?',
      answer: 'Yes, you can cancel at any time without penalties. Your access continues until the end of your billing period.'
    },
    {
      question: 'What if I have a dispute with another trader?',
      answer: 'Our dedicated dispute resolution team is available 24/7 to help mediate any conflicts and find fair solutions.'
    },
    {
      question: 'Do you offer API access for integrations?',
      answer: 'Yes, we provide API access to Pro and Enterprise members. Contact our sales team to learn more about integration options.'
    }
  ]

  return (
    <section id="faq" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-xl text-foreground/70 text-pretty">
            Everything you need to know about using Swift Trade Logistics
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Card 
              key={index}
              className="border border-border overflow-hidden"
            >
              <Button
                variant="ghost"
                className="w-full justify-between items-start p-6 h-auto hover:bg-card/50 text-left"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-lg font-semibold text-foreground pr-4">{faq.question}</span>
                <span className={`text-2xl text-primary flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </Button>
              {openIndex === index && (
                <div className="px-6 pb-6 pt-0 text-foreground/70 border-t border-border">
                  {faq.answer}
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
