import React from "react"
import { ArrowRight } from "lucide-react"

export function BlogPreview() {
  const blogPosts = [
    {
      title: "What Your Blood Test Report Tells You",
      snippet: "Learn how to interpret your blood test results and what the key markers indicate about your health.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "Tips Before Getting a Full Body Checkup",
      snippet: "Prepare properly for your comprehensive health assessment with these important guidelines.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      title: "How to Choose the Right Lab Test",
      snippet: "Navigate through the various diagnostic options to find what's most relevant for your health concerns.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Health Insights</h2>
          <p className="mt-4 text-lg text-gray-600">Expert articles to help you make informed health decisions</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <div key={index} className="overflow-hidden rounded-lg bg-white shadow-sm transition-all hover:shadow-md">
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900">{post.title}</h3>
                <p className="mb-4 text-gray-600">{post.snippet}</p>
                <button className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

