import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cloud, Rocket, Shield, Zap, CheckCircle } from "lucide-react"
import ImageSlider from "@/components/image-slider"

const riseImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "SAP S/4HANA Cloud",
    title: "SAP S/4HANA Cloud",
    description: "Modern ERP suite with intelligent capabilities",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Business Process Intelligence",
    title: "Business Process Intelligence",
    description: "AI-powered insights and automation",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "SAP Business Technology Platform",
    title: "Business Technology Platform",
    description: "Integration and extension platform",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Cloud Migration",
    title: "Cloud Migration",
    description: "Seamless transition to cloud infrastructure",
  },
]

const transformationImages = [
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Assessment & Strategy",
    title: "Assessment & Strategy",
    description: "Transformation roadmap development",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Cloud Migration",
    title: "Cloud Migration",
    description: "System conversion and data migration",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Process Optimization",
    title: "Process Optimization",
    description: "Best practice implementation and automation",
  },
]

export default function RiseWithSAPPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">RISE with SAP</h1>
            <p className="text-xl lg:text-2xl text-blue-200 mb-8">Complete SAP transformation solutions</p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Accelerate your digital transformation with comprehensive SAP cloud migration services and modern business
              solutions designed for the intelligent enterprise.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Business with RISE with SAP</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                RISE with SAP is a comprehensive offering that provides everything you need to transform your business
                and move to the cloud. Our expert team guides you through every step of the journey, from assessment and
                planning to implementation and optimization.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                As a trusted SAP partner, we deliver end-to-end transformation solutions that help you unlock new value,
                improve agility, and drive innovation across your organization.
              </p>
            </div>
            <div>
              <ImageSlider images={riseImages} className="h-96" autoPlay={true} interval={4000} />
            </div>
          </div>

          {/* Key Components */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Cloud className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">SAP S/4HANA Cloud</h3>
                <p className="text-gray-600 text-sm">Modern ERP suite with intelligent capabilities</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Rocket className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Business Process Intelligence</h3>
                <p className="text-gray-600 text-sm">AI-powered insights and automation</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">SAP Business Technology Platform</h3>
                <p className="text-gray-600 text-sm">Integration and extension platform</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Tools & Accelerators</h3>
                <p className="text-gray-600 text-sm">Pre-built solutions and migration tools</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Transformation Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">SAP Transformation Services</h2>
              <p className="text-xl text-gray-600">End-to-end services for successful SAP cloud transformation</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Assessment & Strategy</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Current landscape assessment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Transformation roadmap development</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Business case and ROI analysis</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Risk assessment and mitigation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Cloud Migration</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">System conversion and migration</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Data migration and validation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Integration with existing systems</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Performance optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Business Process Optimization</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Process redesign and standardization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Best practice implementation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Automation and AI integration</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Change management support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Ongoing Support</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">24/7 system monitoring and support</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Regular system updates and patches</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">User training and adoption support</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Continuous improvement initiatives</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Services with Slider */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageSlider images={transformationImages} className="h-80" autoPlay={true} interval={3500} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">SAP Transformation Journey</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our comprehensive approach ensures a smooth transition to SAP S/4HANA Cloud, with expert guidance at
                every step of your transformation journey.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From initial assessment to ongoing optimization, we provide the expertise, tools, and support you need
                to maximize the value of your SAP investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of RISE with SAP</h2>
            <p className="text-xl text-gray-600 mb-12">
              Transform your business with intelligent, cloud-native solutions
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Faster Innovation</h3>
                <p className="text-gray-600">Accelerate time-to-value with pre-built solutions and best practices</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Cloud className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Cloud Agility</h3>
                <p className="text-gray-600">Scale rapidly and adapt to changing business requirements</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Reduced Risk</h3>
                <p className="text-gray-600">Minimize transformation risks with proven methodologies</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to RISE with SAP?</h2>
            <p className="text-xl text-blue-200 mb-8">
              Start your SAP cloud transformation journey with our expert guidance and proven methodologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                <Link href="/contact">Get Started Today</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-900"
              >
                <Link href="/services/sap/analytics">Explore SAP Analytics</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
