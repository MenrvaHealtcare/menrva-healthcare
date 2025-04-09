import React from "react"

export function Testimonials() {
  const testimonials = [
    {
      quote: "Very professional and smooth process! Got reports same day.",
      author: "Ravi M.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      quote: "Menrva made my health check hassle-free.",
      author: "Anita S.",
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">What Our Customers Say</h2>
          <p className="mt-4 text-lg text-gray-600">Hear from people who've experienced our services</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="relative rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <div className="mb-4 text-lg text-gray-700">"{testimonial.quote}"</div>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.author}
                  className="mr-4 h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-gray-900">– {testimonial.author}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

