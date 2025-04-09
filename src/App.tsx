import React from "react"
import { Navbar } from "./components/navbar"
import { HeroSection } from "./components/hero-section"
import { HowItWorks } from "./components/how-it-works"
import { WhyChooseUs } from "./components/why-choose-us"
import { TestPackages } from "./components/test-packages"
import { Testimonials } from "./components/testimonials"
import { BlogPreview } from "./components/blog-preview"
import { Footer } from "./components/footer"

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <HowItWorks />
        <WhyChooseUs />
        <TestPackages />
        {/* <Testimonials /> */}
        {/* <BlogPreview /> */}
      </main>
      <Footer />
    </div>
  )
}

export default App

