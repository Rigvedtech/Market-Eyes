import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Settings, BarChart3, Wrench, Search, Rocket, Database } from "lucide-react"
import ImageSlider from "@/components/image-slider"

const sapImages = [
  {
    src: "/images/services/sap-implementation.jpg",
    alt: "RISE with SAP",
    title: "RISE with SAP",
    description: "Complete SAP transformation solutions",
  },
  {
    src: "/images/services/data-analytics.jpg",
    alt: "SAP Analytics",
    title: "SAP Analytics",
    description: "Business intelligence and reporting solutions",
  },
  {
    src: "/images/services/sap-implementation.jpg",
    alt: "SAP Implementation",
    title: "Implementation & Roll-outs",
    description: "Core SAP implementation services",
  },
  {
    src: "/images/services/cloud-migration.jpg",
    alt: "SAP Managed Services",
    title: "Managed Services",
    description: "Ongoing SAP support and maintenance",
  },
]

const industryExpertiseImages = [
  {
    src: "/images/services/sap-implementation.jpg",
    alt: "Manufacturing SAP Solutions",
    title: "Manufacturing",
    description: "Production planning and quality management",
  },
  {
    src: "/images/services/data-analytics.jpg",
    alt: "Retail SAP Solutions",
    title: "Retail & Consumer Goods",
    description: "Demand planning and inventory management",
  },
  {
    src: "/images/services/cloud-migration.jpg",
    alt: "Financial Services SAP",
    title: "Financial Services",
    description: "Risk management and compliance",
  },
]

export default function SAPServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 to-red-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/services/sap-implementation.jpg"
            alt="SAP Implementation Services"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">SAP Services</h1>
            <p className="text-xl lg:text-2xl text-orange-200 mb-8">
              Comprehensive SAP solutions for digital transformation
            </p>
            <p className="text-lg text-orange-100 max-w-3xl mx-auto">
              From implementation to optimization, we deliver end-to-end SAP services that transform your business
              processes and drive operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete SAP Transformation Journey</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                As one of the fastest-growing SAP Partners in India, we provide comprehensive SAP services that cover
                the entire transformation lifecycle. Our expertise spans across implementation, optimization, and
                ongoing support to ensure maximum value from your SAP investment.
              </p>
            </div>
            <div>
              <ImageSlider images={sapImages} className="h-96" autoPlay={true} interval={4000} />
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">RISE with SAP</h3>
                <p className="text-gray-600 mb-6">
                  Complete SAP transformation solutions with cloud migration services for modern business needs.
                </p>
                {/* <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="/services/sap/rise-with-sap">Learn More</Link>
                </Button> */}
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-green-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">SAP Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Business intelligence solutions with advanced SAP reporting and interactive dashboards.
                </p>
                {/* <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/services/sap/analytics">Learn More</Link>
                </Button> */}
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-purple-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Wrench className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Managed Services</h3>
                <p className="text-gray-600 mb-6">
                  Ongoing SAP support and maintenance with comprehensive application management.
                </p>
                {/* <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/services/sap/managed-services">Learn More</Link>
                </Button> */}
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-orange-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Assessment & Value Harvesting</h3>
                <p className="text-gray-600 mb-6">
                  Strategic SAP assessments and value extraction from existing systems.
                </p>
                {/* <Button className="w-full bg-orange-600 hover:bg-orange-700">
                  <Link href="/services/sap/assessment">Learn More</Link>
                </Button> */}
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-red-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Implementation & Roll-outs</h3>
                <p className="text-gray-600 mb-6">
                  Core SAP implementation services with systematic deployment across organizations.
                </p>
                {/* <Button className="w-full bg-red-600 hover:bg-red-700">
                  <Link href="/services/sap/implementation">Learn More</Link>
                </Button> */}
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-teal-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className="h-8 w-8 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Migration</h3>
                <p className="text-gray-600 mb-6">
                  Critical SAP transformation component with legacy system modernization focus.
                </p>
                {/* <Button className="w-full bg-teal-600 hover:bg-teal-700">
                  <Link href="/services/sap/data-migration">Learn More</Link>
                </Button> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our SAP Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our SAP Services</h2>
              <p className="text-xl text-gray-600">Proven expertise and comprehensive approach to SAP success</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-orange-600 mb-2">500+</div>
                  <p className="text-gray-700 font-medium">Projects Delivered</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                  <p className="text-gray-700 font-medium">Years SAP Experience</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
                  <p className="text-gray-700 font-medium">On-time Delivery Rate</p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-purple-600 mb-2">200+</div>
                  <p className="text-gray-700 font-medium">SAP Certified Consultants</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Expertise with Slider */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageSlider images={industryExpertiseImages} className="h-80" autoPlay={true} interval={3500} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Expertise</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our SAP solutions are tailored for diverse industry verticals, addressing the unique challenges and
                requirements of each business sector.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With deep industry knowledge and SAP expertise, we deliver solutions that drive operational excellence,
                enhance decision-making, and create competitive advantage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform with SAP?</h2>
            <p className="text-xl text-orange-200 mb-8">
              Partner with one of India's fastest-growing SAP service providers for your digital transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-orange-900 hover:bg-orange-50">
                <Link href="/contact">Start SAP Journey</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-orange-900 hover:bg-orange-50"
              >
                <Link href="/technology/sap-focus">Explore SAP Technology</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
