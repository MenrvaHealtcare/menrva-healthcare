import React from "react"
import { Calendar, Search } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(208.18deg, #167561 9.05%, #53e68b 76.74%)",
        }}
      />
      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div className="text-white">
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Affordable Blood Tests. At Your Doorstep.
            </h1>
            <p className="mt-4 text-lg md:text-xl">Free home collection | Trusted labs | Up to 60% off</p>
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="inline-flex items-center rounded-md bg-white px-6 py-3 text-base font-medium text-emerald-700 shadow-sm hover:bg-gray-100" onClick={() => window.open("https://wa.me/+918291086494?text=Menrva%Test%20Enquiry", "_blank")}>
                <Calendar className="mr-2 h-5 w-5" />
                Book a Test
              </button>
              {/* <button className="inline-flex items-center rounded-md border border-white bg-transparent px-6 py-3 text-base font-medium text-white hover:bg-white/10">
                <Search className="mr-2 h-5 w-5" />
                View Packages
              </button> */}
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="Menrva.gif?height=400&width=400"
              alt="Healthcare professional doing blood test"
              className="h-auto max-w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

