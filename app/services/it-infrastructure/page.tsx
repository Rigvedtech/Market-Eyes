import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Server, Cloud, Shield, Settings, Network, Database } from "lucide-react"
import ImageSlider from "@/components/image-slider"
import { technologyImages } from "@/lib/images"

const infrastructureImages = [
  {
    src: "/images/technology/modern-data-center.jpg",
    alt: "Modern Data Center",
    title: "Enterprise Data Centers",
    description: "State-of-the-art facilities with 99.9% uptime guarantee",
  },
  {
    src: "/images/technology/cloud-computing-network.jpg",
    alt: "Cloud Infrastructure",
    title: "Multi-Cloud Architecture",
    description: "Seamless integration across AWS, Azure, and Google Cloud",
  },
  {
    src: "/images/technology/cybersecurity-operations.jpg",
    alt: "Network Operations Center",
    title: "24/7 Network Monitoring",
    description: "Round-the-clock monitoring and support services",
  },
  {
    src: "/images/technology/ai-analytics-dashboard.jpg",
    alt: "Security Operations",
    title: "Advanced Security Framework",
    description: "Comprehensive security measures protecting your infrastructure",
  },
]

const solutionImages = [
  {
    src: "/images/services/it-infrastructure.jpg",
    alt: "Server Infrastructure",
    title: "Physical Infrastructure",
    description: "Enterprise-grade servers and storage systems",
  },
  {
    src: "/images/services/cloud-migration.jpg",
    alt: "Cloud Migration",
    title: "Cloud Integration",
    description: "Seamless cloud adoption and hybrid solutions",
  },
  {
    src: "/images/technology/cybersecurity-operations.jpg",
    alt: "Network Architecture",
    title: "Network Solutions",
    description: "Robust networking ensuring reliable connectivity",
  },
]

export default function ITInfrastructurePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/technology/modern-data-center.jpg"
            alt="IT Infrastructure"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">IT Infrastructure & Cloud</h1>
            <p className="text-xl lg:text-2xl text-blue-200 mb-8">The backbone of your digital transformation</p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Wide array of IT elements serving as backbone of IT services including physical computer and networking
              hardware, software, and network components.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content with Image Slider */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Enterprise IT Environment Solutions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our IT Infrastructure services encompass all necessary components for establishment, functioning, and
                oversight of enterprise IT environment. We take a meticulous approach to examining requirements,
                strategic planning, and alignment of appropriate technology components.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From physical infrastructure to cloud integration, we provide comprehensive solutions that scale with
                your business growth and ensure optimal performance across all technology layers.
              </p>
            </div>
            <div>
              <ImageSlider images={infrastructureImages} className="h-96" autoPlay={true} interval={4000} />
            </div>
          </div>

          {/* Service Components */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <img
                    src="/images/services/it-infrastructure.jpg"
                    alt="Physical Infrastructure"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors"></div>
                </div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Server className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Physical Infrastructure</h3>
                <p className="text-gray-600">
                  Complete hardware solutions including servers, storage systems, and networking equipment.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <img
                    src="/images/services/cloud-migration.jpg"
                    alt="Cloud Integration"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-green-600/20 rounded-lg group-hover:bg-green-600/30 transition-colors"></div>
                </div>
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Cloud className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Cloud Integration</h3>
                <p className="text-gray-600">
                  Seamless cloud adoption and hybrid infrastructure solutions for scalability.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <img
                    src="/images/technology/cybersecurity-operations.jpg"
                    alt="Network Architecture"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors"></div>
                </div>
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Network className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Network Architecture</h3>
                <p className="text-gray-600">
                  Robust networking solutions ensuring reliable connectivity and performance.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <img
                    src="/images/technology/cybersecurity-operations.jpg"
                    alt="Security Framework"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-orange-600/20 rounded-lg group-hover:bg-orange-600/30 transition-colors"></div>
                </div>
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Security Framework</h3>
                <p className="text-gray-600">
                  Comprehensive security measures protecting your infrastructure and data.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <img
                    src="/images/services/data-analytics.jpg"
                    alt="Data Management"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-colors"></div>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Database className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Management</h3>
                <p className="text-gray-600">
                  Advanced data storage, backup, and recovery solutions for business continuity.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow group">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <img
                    src="/images/technology/ai-analytics-dashboard.jpg"
                    alt="System Management"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="absolute inset-0 bg-teal-600/20 rounded-lg group-hover:bg-teal-600/30 transition-colors"></div>
                </div>
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">System Management</h3>
                <p className="text-gray-600">Proactive monitoring, maintenance, and optimization of IT systems.</p>
              </CardContent>
            </Card>
          </div>

          {/* Solutions Gallery */}
          <div className="bg-gray-50 rounded-lg p-8 mb-16">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Strategic Approach</h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Requirements Analysis</h3>
                      <p className="text-gray-600">
                        Meticulous examination of your current infrastructure and future needs.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Strategic Planning</h3>
                      <p className="text-gray-600">
                        Comprehensive roadmap development aligned with business objectives.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Technology Alignment</h3>
                      <p className="text-gray-600">Selection and integration of appropriate technology components.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ImageSlider images={solutionImages} className="h-80" autoPlay={true} interval={3500} />
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your IT Infrastructure?</h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Let our experts design and implement a robust IT infrastructure that scales with your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/technology/cloud-solution">Explore Cloud Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
