import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Market Eyes.in - Redefining Technology Globally",
  description:
    "Emerging IT related services company delivering best-in-class technology solutions for Fortune 500 companies. Specializing in IT Infrastructure, Enterprise Applications, and Digital Transformation.",
  keywords:
    "IT services, digital transformation, SAP, cloud solutions, enterprise applications, CMMI Level 5, ISO 27001",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="bg-gray-900 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">Market Eyes</h3>
                <p className="text-gray-400 mb-4">
                  Redefining technology globally with passion, talent, and can-do attitude.
                </p>
                {/* <div className="flex space-x-4">
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">L</span>
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                    <span className="text-xs font-bold">T</span>
                  </div>
                </div> */}
              </div>

              <div>
                <h4 className="font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="/services/it-infrastructure" className="hover:text-white">
                      IT Infrastructure
                    </a>
                  </li>
                  <li>
                    <a href="/services/sap" className="hover:text-white">
                      SAP Services
                    </a>
                  </li>
                  <li>
                    <a href="/services/data-technologies" className="hover:text-white">
                      Data Technologies
                    </a>
                  </li>
                  <li>
                    <a href="/services/cyber-security" className="hover:text-white">
                      Cyber Security
                    </a>
                  </li>
                  <li>
                  <a href="/services/digital-marketing" className="hover:text-white"> 
                    Digital Marketing
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="/about/this-is-us" className="hover:text-white">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="/about/vision" className="hover:text-white">
                      Vision
                    </a>
                  </li>
                  {/* <li>
                    <a href="/about/certificates" className="hover:text-white">
                      Certificates
                    </a>
                  </li> */}
                  <li>
                    <a href="/partners" className="hover:text-white">
                      Partners
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Mumbai: +91 9769074954</li>
                  <li>admin@marketeyes.in</li>
                  <li>Navi Mumbai, Maharashtra</li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                              <p>&copy; 2024 Market Eyes.in. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
