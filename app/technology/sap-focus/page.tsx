import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Award, TrendingUp, Settings, Zap, ArrowRight } from "lucide-react"
import ImageSlider from "@/components/image-slider"

const sapImages = [
  {
    src: "/images/services/sap-implementation.jpg",
    alt: "SAP S/4HANA Implementation",
    title: "SAP S/4HANA Excellence",
    description: "Next-generation ERP solutions with intelligent capabilities",
  },
  {
    src: "/images/services/data-analytics.jpg",
    alt: "SAP Analytics Cloud",
    title: "SAP Analytics Cloud",
    description: "Advanced business intelligence and planning solutions",
  },
  {
    src: "/images/services/cloud-migration.jpg",
    alt: "SAP Cloud Platform",
    title: "SAP Business Technology Platform",
    description: "Integration and extension platform for digital transformation",
  },
  {
    src: "/images/team/development-team-collaboration.jpg",
    alt: "SAP Implementation Team",
    title: "Expert Implementation Team",
    description: "Certified SAP consultants delivering world-class solutions",
  },
]

const deliveryImages = [
  {
    src: "/images/team/innovation-lab-research.jpg",
    alt: "SAP Methodology",
    title: "Proven Methodologies",
    description: "Industry-standard implementation frameworks",
  },
  {
    src: "/images/technology/modern-data-center.jpg",
    alt: "Legacy Modernization",
    title: "Legacy Modernization",
    description: "Transform complex legacy ERP systems",
  },
  {
    src: "/images/team/client-consultation-meeting.jpg",
    alt: "Industry Expertise",
    title: "Industry Expertise",
    description: "Deep knowledge across multiple industry verticals",
  },
]

export default function SAPFocusPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-orange-900 to-red-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/services/sap-implementation.jpg"
            alt="SAP Technology Focus"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">SAP Technology Focus</h1>
            <p className="text-xl lg:text-2xl text-orange-200 mb-8">One of the Best SAP Partners in India</p>
            <p className="text-lg text-orange-100 max-w-3xl mx-auto">
              Strategically positioned as one of the fastest-growing SAP Partners in India, delivering comprehensive SAP
              solutions that transform, design, implement, and maintain enterprise systems.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic SAP Partnership Excellence</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We are strategically positioned as one of the best SAP Partners in India, specializing in transforming,
                designing, implementing, and maintaining SAP ERP solutions. Our position as one of the fastest-growing
                SAP Partners reflects our commitment to excellence and innovation in enterprise solutions.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With extensive experience in modernizing numerous complex legacy ERP systems across industry verticals,
                we help customers stay ahead of competition through cutting-edge SAP technologies and proven delivery
                methodologies.
              </p>
            </div>
            <div>
              <ImageSlider images={sapImages} className="h-96" autoPlay={true} interval={4000} />
            </div>
          </div>

          {/* Key Achievements */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Award className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Best SAP Partner</h3>
                <p className="text-gray-600 text-sm">
                  Strategically positioned as one of the best SAP Partners in India
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Fastest Growing</h3>
                <p className="text-gray-600 text-sm">
                  One of the fastest-growing SAP Partners with proven track record
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Legacy Modernization</h3>
                <p className="text-gray-600 text-sm">
                  Modernized numerous complex legacy ERP systems across industries
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Competitive Advantage</h3>
                <p className="text-gray-600 text-sm">
                  Helping customers stay ahead of competition with innovative solutions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* SAP Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive SAP Services</h2>
              <p className="text-xl text-gray-600">Transform, design, implement, and maintain SAP ERP solutions</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Settings className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">SAP Transformation</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Digital transformation strategy</li>
                    <li>• Business process reengineering</li>
                    <li>• Change management support</li>
                    <li>• Technology roadmap development</li>
                    <li>• ROI optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">SAP Design</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Solution architecture design</li>
                    <li>• Custom development planning</li>
                    <li>• Integration architecture</li>
                    <li>• Security framework design</li>
                    <li>• Performance optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <Award className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">SAP Implementation</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• SAP S/4HANA implementation</li>
                    <li>• Module-specific deployments</li>
                    <li>• System integration and testing</li>
                    <li>• Data migration and validation</li>
                    <li>• Go-live support and cutover</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">SAP Maintenance</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Application managed services</li>
                    <li>• System monitoring and support</li>
                    <li>• Performance tuning</li>
                    <li>• Upgrade and enhancement services</li>
                    <li>• 24/7 technical support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                    <Settings className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Legacy Modernization</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Legacy system assessment</li>
                    <li>• Migration strategy development</li>
                    <li>• System conversion and upgrade</li>
                    <li>• Data cleansing and migration</li>
                    <li>• Process optimization</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Industry Expertise</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Manufacturing and automotive</li>
                    <li>• Retail and consumer goods</li>
                    <li>• Financial services and banking</li>
                    <li>• Healthcare and life sciences</li>
                    <li>• Oil, gas, and utilities</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Delivery Framework */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Wide Range of Delivery Frameworks</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our comprehensive delivery approach encompasses a wide range of frameworks, engagement models, and
                  methodologies designed to ensure successful SAP implementations across diverse industry verticals and
                  business requirements.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Agile Implementation</h3>
                      <p className="text-gray-600">Iterative approach with continuous feedback and rapid deployment</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Waterfall Methodology</h3>
                      <p className="text-gray-600">
                        Traditional structured approach for complex enterprise implementations
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Hybrid Approaches</h3>
                      <p className="text-gray-600">
                        Customized methodologies combining best practices from multiple frameworks
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">SAP Activate</h3>
                      <p className="text-gray-600">
                        SAP's proven methodology for faster, more predictable implementations
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ImageSlider images={deliveryImages} className="h-80" autoPlay={true} interval={3500} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Competitive Advantage */}
      <section className="py-20 bg-orange-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Helping Customers Stay Ahead of Competition</h2>
            <p className="text-xl text-orange-200 mb-12">
              Our SAP expertise delivers competitive advantages that drive business transformation and growth
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Innovation Leadership</h3>
                <p className="text-orange-200">Cutting-edge SAP technologies and innovative solution approaches</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Rapid Implementation</h3>
                <p className="text-orange-200">Faster time-to-value with proven methodologies and frameworks</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Operational Excellence</h3>
                <p className="text-orange-200">Optimized business processes and enhanced operational efficiency</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Partner with SAP Excellence Leaders</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join leading enterprises who trust our SAP expertise for their digital transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-600 hover:bg-orange-700">
                <Link href="/contact" className="flex items-center">
                  Start SAP Transformation <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/services/sap">Explore SAP Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
