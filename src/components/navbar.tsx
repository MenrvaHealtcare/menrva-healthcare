"use client"
import React from "react"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold text-emerald-700">Menrva Healthcare</span>
        </div>
        <nav className="hidden md:flex md:gap-6">
          {/* <a href="#" className="text-sm font-medium hover:text-emerald-600">
            Home
          </a>
          <a href="#" className="text-sm font-medium hover:text-emerald-600">
            Tests
          </a>
          <a href="#" className="text-sm font-medium hover:text-emerald-600">
            Packages
          </a>
          <a href="#" className="text-sm font-medium hover:text-emerald-600">
            About Us
          </a>
          <a href="#" className="text-sm font-medium hover:text-emerald-600">
            Blog
          </a>
          <a href="#" className="text-sm font-medium hover:text-emerald-600">
            Contact
          </a> */}
        </nav>
        <div className="hidden md:flex md:gap-4">
          <button className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700" onClick={() => window.open("https://wa.me/+918291086494?text=Menrva%20Test%20Enquiry", "_blank")}>
            Book a Test
          </button>
        </div>
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="container mx-auto px-4 pb-4 md:hidden">
          <nav className="flex flex-col space-y-4">
            {/* <a href="#" className="text-sm font-medium hover:text-emerald-600">
              Home
            </a>
            <a href="#" className="text-sm font-medium hover:text-emerald-600">
              Tests
            </a>
            <a href="#" className="text-sm font-medium hover:text-emerald-600">
              Packages
            </a>
            <a href="#" className="text-sm font-medium hover:text-emerald-600">
              About Us
            </a>
            <a href="#" className="text-sm font-medium hover:text-emerald-600">
              Blog
            </a>
            <a href="#" className="text-sm font-medium hover:text-emerald-600">
              Contact
            </a> */}
            <button className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700" onClick={() => window.open("https://wa.me/+918291086494?text=Menrva%20Test%20Enquiry", "_blank")}>
              Book a Test
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}

