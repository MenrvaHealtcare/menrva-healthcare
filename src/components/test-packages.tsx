import { ArrowRight } from "lucide-react"
import React from "react"

export function TestPackages() {
  const packages = [
    {
      name: "Full Body Checkup",
      price: "₹999",
      description: "Complete health assessment with 70+ parameters",
      image: "/fullbody.png?height=80&width=80",
    },
    {
      name: "Diabetes Panel",
      price: "₹499",
      description: "Comprehensive diabetes screening and monitoring",
      image: "/diabetes.png?height=80&width=80",
    },
    {
      name: "Lipid Profile",
      price: "₹699",
      description: "Cholesterol and triglycerides assessment",
      image: "/lipidprofile.png?height=80&width=80",
    },
    {
      name: "Thyroid Function Test",
      price: "₹599",
      description: "Complete thyroid hormone analysis",
      image: "/thyroidtest.png?height=80&width=80",
    },
  ]

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">Popular Test Packages</h2>
          <p className="mt-4 text-lg text-gray-600">Curated diagnostic packages for your specific health needs</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-md"
            >
              <div className="flex items-center gap-4 border-b border-gray-100 p-4">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.name}
                  className="h-16 w-16 rounded-full bg-emerald-100 object-cover p-2"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{pkg.name}</h3>
                  {/* <p className="text-emerald-600 font-medium">from {pkg.price}</p> */}
                </div>
              </div>
              <div className="flex flex-1 flex-col justify-between p-4">
                <p className="text-sm text-gray-600">{pkg.description}</p>
                <button className="mt-4 inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700" onClick={() => window.open("https://wa.me/+918291086494?text=Menrva%20Test%20Enquiry", "_blank")}>
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* <div className="mt-8 text-center">
          <button className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
            View all packages <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div> */}
      </div>
    </section>
  )
}

