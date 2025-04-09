import React from "react"
import { Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <img
              src="/Menrva.gif"
              alt="Menrva Healthcare Logo"
              className="h-24 w-auto"
            />
            {/* <h3 className="mb-4 text-lg font-semibold text-gray-900">Menrva Healthcare</h3> */}
            <p className="text-gray-600">Making quality diagnostics accessible and affordable for everyone.</p>
          </div>
          <div>
            {/* <h3 className="mb-4 text-lg font-semibold text-gray-900">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600">
                  Tests
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600">
                  Packages
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600">
                  Blog
                </a>
              </li>
            </ul> */}
          </div>
          <div>
            {/* <h3 className="mb-4 text-lg font-semibold text-gray-900">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600">
                  Refund Policy
                </a>
              </li>
            </ul> */}
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold text-gray-900">Contact Us</h3>
            <a href="mailto:menrvahealthcare@gmail.com" target="_blank">
              <p className="mb-2 text-gray-600">menrvahealthcare@gmail.com</p>
            </a>
            <a href="tel:+918291086494" target="_blank">
              <p className="mb-4 text-gray-600">+91 82910 86494</p>
            </a>
            {/* <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600">
                <Instagram className="h-5 w-5" />
              </a>
            </div> */}
          </div>
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <p className="text-gray-600">© 2025 Menrva Healthcare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

