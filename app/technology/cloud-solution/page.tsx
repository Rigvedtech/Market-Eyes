import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Cloud, Zap, TrendingUp, Shield, CheckCircle, ArrowRight } from "lucide-react"
import ImageSlider from "@/components/image-slider"

const cloudImages = [
  {
    src: "/images/technology/cloud-computing-network.jpg",
    alt: "Azure Cloud Infrastructure",
    title: "Microsoft Azure Solutions",
    description: "Enterprise-grade cloud services with seamless integration",
  },
  {
    src: "/images/services/cloud-migration.jpg",
    alt: "AWS Cloud Services",
    title: "Amazon Web Services",
    description: "Scalable and reliable cloud infrastructure solutions",
  },
  {
    src: "/images/technology/ai-analytics-dashboard.jpg",
    alt: "Google Cloud Platform",
    title: "Google Cloud Platform",
    description: "Advanced analytics and machine learning capabilities",
  },
  {
    src: "/images/technology/modern-data-center.jpg",
    alt: "Multi-Cloud Architecture",
    title: "Multi-Cloud Strategy",
    description: "Optimized cloud solutions across multiple platforms",
  },
]

const solutionImages = [
  {
    src: "/images/services/cloud-migration.jpg",
    alt: "Cloud Migration",
    title: "Seamless Migration",
    description: "Smooth transition from on-premise to cloud",
  },
  {
    src: "/images/technology/modern-data-center.jpg",
    alt: "Infrastructure Automation",
    title: "Infrastructure as Code",
    description: "Automated deployment and management",
  },
  {
    src: "/images/technology/cybersecurity-operations.jpg",
    alt: "Cloud Security",
    title: "Advanced Security",
    description: "Enterprise-grade security and compliance",
  },
]

export default function CloudSolutionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-cyan-900 to-blue-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/technology/cloud-computing-network.jpg"
            alt="Cloud Solutions"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Cloud Solutions</h1>
            <p className="text-xl lg:text-2xl text-cyan-200 mb-8">Leading Cloud Solutions Provider</p>
            <p className="text-lg text-cyan-100 max-w-3xl mx-auto">
              Infrastructure-on-demand implementation with smooth integration of latest technologies, delivering
              advanced flexibility and innovation assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Infrastructure-on-Demand Excellence</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                As a leading cloud solutions provider, we specialize in infrastructure-on-demand implementation that
                enables smooth integration of the latest technologies. Our approach focuses on delivering advanced
                flexibility while providing comprehensive innovation assistance to transform your business operations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our experienced team provides expertise and innovative solutions that streamline resources and improve
                business economy, positioning your organization for sustained growth and competitive advantage.
              </p>
            </div>
            <div>
              <ImageSlider images={cloudImages} className="h-96" autoPlay={true} interval={4000} />
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-6 w-6 text-cyan-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Advanced Flexibility</h3>
                <p className="text-gray-600 text-sm">
                  Scale resources up or down based on demand with unprecedented flexibility
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Innovation Assistance</h3>
                <p className="text-gray-600 text-sm">
                  Leverage cutting-edge technologies to drive innovation and competitive advantage
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Cloud className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Resource Streamlining</h3>
                <p className="text-gray-600 text-sm">
                  Optimize resource utilization and eliminate infrastructure waste
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Improved Business Economy</h3>
                <p className="text-gray-600 text-sm">
                  Reduce operational costs while improving performance and reliability
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Cloud Platforms */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Multi-Cloud Platform Expertise</h2>
              <p className="text-xl text-gray-600">Comprehensive solutions across leading cloud platforms</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-bold text-blue-600">AZURE</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Microsoft Azure</h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Azure Virtual Machines and App Services</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Azure SQL Database and Cosmos DB</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Azure DevOps and CI/CD pipelines</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Azure Active Directory integration</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-bold text-orange-600">AWS</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Amazon Web Services</h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">EC2, Lambda, and containerization</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">RDS, DynamoDB, and data lakes</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">CloudFormation and infrastructure as code</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">IAM and security best practices</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-300">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <span className="text-lg font-bold text-green-600">GCP</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Google Cloud Platform</h3>
                  </div>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Compute Engine and Kubernetes Engine</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">BigQuery and Cloud SQL</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">Cloud Build and deployment manager</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">AI/ML services and data analytics</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Service Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Service Approach</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our experienced team provides expertise and innovative solutions that go beyond traditional cloud
                  migration. We focus on transforming your entire technology landscape to leverage the full potential of
                  cloud computing.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Assessment & Strategy</h3>
                      <p className="text-gray-600">
                        Comprehensive evaluation of current infrastructure and cloud readiness
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Migration & Implementation</h3>
                      <p className="text-gray-600">Seamless migration with minimal downtime and maximum efficiency</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Optimization & Support</h3>
                      <p className="text-gray-600">Continuous optimization and 24/7 support for peak performance</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ImageSlider images={solutionImages} className="h-80" autoPlay={true} interval={3500} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Transform with Cloud Solutions?</h2>
            <p className="text-xl text-cyan-200 mb-8">
              Partner with leading cloud experts to accelerate your digital transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-cyan-900 hover:bg-cyan-50">
                <Link href="/contact" className="flex items-center">
                  Start Cloud Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cyan-900"
              >
                <Link href="/services/it-infrastructure">Explore Infrastructure Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
