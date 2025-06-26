import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Settings, Shield, Clock, Users, Zap, CheckCircle } from "lucide-react"
import ImageSlider from "@/components/image-slider"

const managedServiceImages = [
  {
    src: "/images/services/it-infrastructure.jpg",
    alt: "Application Maintenance",
    title: "Application Maintenance",
    description: "Ongoing maintenance and performance optimization",
  },
  {
    src: "/images/technology/cybersecurity-operations.jpg",
    alt: "Security Management",
    title: "Security Management",
    description: "Comprehensive security monitoring and patching",
  },
  {
    src: "/images/technology/modern-data-center.jpg",
    alt: "24/7 Monitoring",
    title: "24/7 Monitoring",
    description: "Round-the-clock application monitoring",
  },
  {
    src: "/images/services/cloud-migration.jpg",
    alt: "User Support",
    title: "User Support",
    description: "Multi-tier support with helpdesk services",
  },
]

const technologyCoverageImages = [
  {
    src: "/images/application-managed/web-applications-development.jpg",
    alt: "Web Applications",
    title: "Web Applications",
    description: "Java, .NET, PHP, Python, Node.js",
  },
  {
    src: "/images/application-managed/enterprise-applications-management.jpg",
    alt: "Enterprise Applications",
    title: "Enterprise Applications",
    description: "SAP, Oracle, Microsoft Dynamics",
  },
  {
    src: "/images/application-managed/cloud-platforms-management.jpg",
    alt: "Cloud Platforms",
    title: "Cloud Platforms",
    description: "AWS, Azure, Google Cloud",
  },
]

export default function ApplicationManagedServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section 
        className="relative bg-gradient-to-br from-indigo-900 to-purple-700 text-white py-20"
        style={{
          backgroundImage: `linear-gradient(rgba(67, 56, 202, 0.8), rgba(124, 58, 237, 0.8)), url('/images/application-managed/application-managed-services-hero.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Application Managed Services</h1>
            <p className="text-xl lg:text-2xl text-indigo-200 mb-8">
              Comprehensive application support and maintenance
            </p>
            <p className="text-lg text-indigo-100 max-w-3xl mx-auto">
              Full lifecycle application management services that ensure optimal performance, security, and availability
              of your critical business applications while reducing operational costs.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Application Lifecycle Management</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our Application Managed Services provide comprehensive support and maintenance for your entire
                application portfolio. From legacy systems to modern cloud-native applications, we ensure optimal
                performance, security, and user experience while you focus on core business activities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With 24/7 monitoring, proactive maintenance, and expert support teams, we deliver reliable application
                services that drive business continuity and operational excellence.
              </p>
            </div>
            <div>
              <ImageSlider images={managedServiceImages} className="h-96" autoPlay={true} interval={4000} />
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Application Maintenance</h3>
                <p className="text-gray-600">
                  Ongoing maintenance, bug fixes, and performance optimization for all your applications.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Security Management</h3>
                <p className="text-gray-600">
                  Comprehensive security monitoring, patch management, and vulnerability assessments.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">24/7 Monitoring</h3>
                <p className="text-gray-600">
                  Round-the-clock application monitoring with proactive issue detection and resolution.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">User Support</h3>
                <p className="text-gray-600">
                  Multi-tier user support with helpdesk services and technical assistance.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Performance Optimization</h3>
                <p className="text-gray-600">
                  Continuous performance monitoring and optimization to ensure optimal application speed.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Change Management</h3>
                <p className="text-gray-600">
                  Structured change management processes for application updates and enhancements.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Service Offerings */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive Service Offerings</h2>
              <p className="text-xl text-gray-600">End-to-end application management across all technology stacks</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Application Support Services</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">L1, L2, and L3 technical support</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Incident management and resolution</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Problem management and root cause analysis</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Service request fulfillment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Knowledge management and documentation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Application Maintenance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Corrective and adaptive maintenance</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Preventive maintenance and health checks</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Version upgrades and patches</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Database maintenance and optimization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Code refactoring and optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Infrastructure Management</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Server and infrastructure monitoring</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Capacity planning and scaling</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Backup and disaster recovery</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Environment management (Dev/Test/Prod)</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Cloud infrastructure optimization</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Quality Assurance</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Automated testing and validation</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Regression testing for updates</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Performance and load testing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Security testing and vulnerability assessment</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">User acceptance testing support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Coverage with Slider */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageSlider images={technologyCoverageImages} className="h-80" autoPlay={true} interval={3500} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology Coverage</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our managed services cover a wide range of technologies and platforms, ensuring comprehensive support
                for your entire application portfolio.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                From web applications to enterprise systems and cloud platforms, our expert teams have the knowledge and
                experience to maintain and optimize your critical business applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Benefits of Application Managed Services</h2>
            <p className="text-xl text-indigo-200 mb-12">Focus on innovation while we manage your applications</p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">40%</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Cost Reduction</h3>
                <p className="text-indigo-200">Reduce operational costs through optimized processes</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">99.9%</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Uptime</h3>
                <p className="text-indigo-200">Ensure high availability and business continuity</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold">24/7</span>
                </div>
                <h3 className="text-lg font-semibold mb-2">Support</h3>
                <p className="text-indigo-200">Round-the-clock monitoring and support services</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Optimize Your Application Portfolio</h2>
            <p className="text-xl text-gray-600 mb-8">
              Let our experts manage your applications while you focus on driving business growth and innovation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700">
                <Link href="/contact">Get Service Assessment</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/services/application-development">Explore Development Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
