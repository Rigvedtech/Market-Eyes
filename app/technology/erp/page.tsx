import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Database, Settings, TrendingUp, Users, ArrowRight } from "lucide-react"
import ImageSlider from "@/components/image-slider"

const erpImages = [
  {
    src: "/images/services/sap-implementation.jpg",
    alt: "ERP Implementation",
    title: "Enterprise Resource Planning",
    description: "Comprehensive business process integration solutions",
  },
  {
    src: "/images/team/development-team-collaboration.jpg",
    alt: "Business Process Integration",
    title: "Process Integration",
    description: "Seamless integration across all business functions",
  },
  {
    src: "/images/services/data-analytics.jpg",
    alt: "ERP Dashboard",
    title: "Real-time Analytics",
    description: "Advanced reporting and business intelligence",
  },
  {
    src: "/images/technology/modern-data-center.jpg",
    alt: "ERP Modules",
    title: "Modular Architecture",
    description: "Scalable modules for every business need",
  },
]

const moduleImages = [
  {
    src: "/images/services/data-analytics.jpg",
    alt: "Financial Management",
    title: "Financial Management",
    description: "Complete financial planning and control",
  },
  {
    src: "/images/services/cloud-migration.jpg",
    alt: "Supply Chain Management",
    title: "Supply Chain",
    description: "End-to-end supply chain optimization",
  },
  {
    src: "/images/team/client-consultation-meeting.jpg",
    alt: "Human Resources",
    title: "Human Resources",
    description: "Comprehensive HR management solutions",
  },
]

export default function ERPPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 to-green-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/services/sap-implementation.jpg"
            alt="ERP Solutions"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Enterprise Resource Planning</h1>
            <p className="text-xl lg:text-2xl text-emerald-200 mb-8">Comprehensive Business Process Integration</p>
            <p className="text-lg text-emerald-100 max-w-3xl mx-auto">
              Transform your business operations with integrated ERP solutions that streamline processes, improve
              efficiency, and drive organizational growth.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Integrated Business Solutions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our Enterprise Resource Planning solutions provide comprehensive business process integration that
                connects all aspects of your organization. From finance and human resources to supply chain and customer
                management, our ERP systems create a unified platform for operational excellence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We specialize in implementing, customizing, and optimizing ERP systems that align with your business
                objectives, ensuring seamless integration across departments and improved decision-making capabilities.
              </p>
            </div>
            <div>
              <ImageSlider images={erpImages} className="h-96" autoPlay={true} interval={4000} />
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Database className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Unified Data Management</h3>
                <p className="text-gray-600 text-sm">
                  Centralized data repository ensuring consistency and accuracy across all business functions
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Process Automation</h3>
                <p className="text-gray-600 text-sm">
                  Automated workflows reducing manual effort and improving operational efficiency
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Real-time Analytics</h3>
                <p className="text-gray-600 text-sm">
                  Advanced reporting and business intelligence for data-driven decision making
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Enhanced Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Improved communication and collaboration across departments and teams
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* ERP Modules */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive ERP Modules</h2>
              <p className="text-xl text-gray-600">Complete business process integration across all functions</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Database className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Financial Management</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• General ledger and accounting</li>
                    <li>• Accounts payable and receivable</li>
                    <li>• Financial reporting and analytics</li>
                    <li>• Budget planning and control</li>
                    <li>• Asset management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <Settings className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Supply Chain Management</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Inventory management</li>
                    <li>• Procurement and purchasing</li>
                    <li>• Warehouse management</li>
                    <li>• Demand planning</li>
                    <li>• Supplier relationship management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Human Resources</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Employee information management</li>
                    <li>• Payroll and benefits administration</li>
                    <li>• Performance management</li>
                    <li>• Recruitment and onboarding</li>
                    <li>• Training and development</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Sales & Marketing</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Customer relationship management</li>
                    <li>• Sales order processing</li>
                    <li>• Marketing campaign management</li>
                    <li>• Lead management</li>
                    <li>• Sales analytics and reporting</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                    <Settings className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Manufacturing</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Production planning and scheduling</li>
                    <li>• Bill of materials management</li>
                    <li>• Quality control and assurance</li>
                    <li>• Shop floor control</li>
                    <li>• Maintenance management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                    <Database className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Business Intelligence</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Real-time dashboards</li>
                    <li>• Advanced analytics and reporting</li>
                    <li>• Key performance indicators</li>
                    <li>• Data visualization</li>
                    <li>• Predictive analytics</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <ImageSlider images={moduleImages} className="h-80" autoPlay={true} interval={3500} />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Implementation Approach</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  We follow a proven methodology for ERP implementation that ensures successful deployment with minimal
                  business disruption and maximum user adoption.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Business Analysis</h3>
                      <p className="text-gray-600">Comprehensive analysis of current processes and requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">System Design</h3>
                      <p className="text-gray-600">Custom ERP design aligned with business objectives</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Implementation & Testing</h3>
                      <p className="text-gray-600">Phased implementation with comprehensive testing</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Training & Support</h3>
                      <p className="text-gray-600">User training and ongoing support for successful adoption</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Transform Your Business with ERP</h2>
            <p className="text-xl text-emerald-200 mb-8">
              Integrate your business processes and unlock operational excellence with our comprehensive ERP solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50">
                <Link href="/contact" className="flex items-center">
                  Start ERP Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-900"
              >
                <Link href="/services/sap">Explore SAP Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
