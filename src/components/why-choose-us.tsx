import React from "react"
import { CheckCircle, Receipt, Building2, Zap } from "lucide-react"

export function WhyChooseUs() {
  const features = [
    {
      icon: <CheckCircle className="h-8 w-8 text-emerald-600" />,
      title: "Free Home Collection",
      description: "No extra charges for doorstep sample collection",
    },
    {
      icon: <Receipt className="h-8 w-8 text-emerald-600" />,
      title: "Discounted Test Packages",
      description: "Save up to 60% compared to regular lab prices",
    },
    {
      icon: <Building2 className="h-8 w-8 text-emerald-600" />,
      title: "Certified Lab Partners",
      description: "All tests processed at accredited diagnostic labs",
    },
    {
      icon: <Zap className="h-8 w-8 text-emerald-600" />,
      title: "Quick Report Delivery",
      description: "Get your results within 24-48 hours",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Why Choose Menrva?</h2>
          <p className="mt-4 text-lg text-gray-600">We're committed to making healthcare accessible and convenient</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

