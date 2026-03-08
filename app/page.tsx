"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import HeroSection from "@/components/landing/hero-section";
import HowItWorks from "@/components/landing/how-it-works";
import PricingSection from "@/components/landing/pricing-section";
import FAQSection from "@/components/landing/faq-section";
import ContractorForm from "@/components/forms/contractor-form";
import InformationForm from "@/components/forms/information-form";
import WholesalerForm from "@/components/forms/wholesaler-form";
import Header from "./header";

export default function Home() {
  const [activeForm, setActiveForm] = useState<
    "contractor" | "information" | "wholesaler" | null
  >(null);

  return (
    <main className="min-h-screen bg-background">
      <Header />
    </main>
  );
}
