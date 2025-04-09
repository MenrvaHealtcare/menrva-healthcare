import { FlaskRoundIcon as Flask, Calendar, Droplets, FileText } from "lucide-react"
import React from "react"

export function HowItWorks() {
  const steps = [
    {
      icon: <Flask className="h-10 w-10 text-emerald-600" />,
      title: "Book Your Test",
      description: "Book your test from our wide range of diagnostic tests",
    },
    {
      icon: <Calendar className="h-10 w-10 text-emerald-600" />,
      title: "Schedule Sample Collection",
      description: "Book a convenient time slot for home collection",
    },
    {
      icon: <Droplets className="h-10 w-10 text-emerald-600" />,
      title: "Sample Collected at Your Home",
      description: "Our phlebotomist will visit your home for collection",
    },
    {
      icon: <FileText className="h-10 w-10 text-emerald-600" />,
      title: "Get Reports Online",
      description: "Receive digital reports via email or app",
    },
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">How It Works</h2>
          <p className="mt-4 text-lg text-gray-600">Simple 4-step process for hassle-free diagnostic testing</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md">
              <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 shadow-sm">
                {step.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

