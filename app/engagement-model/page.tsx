import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, Target, Zap, TrendingUp, CheckCircle, ArrowRight } from "lucide-react"
import ImageSlider from "@/components/image-slider"

const engagementImages = [
  {
    src: "/images/team/development-team-collaboration.jpg",
    alt: "Dedicated Team Model",
    title: "Dedicated Team Excellence",
    description: "Extended team model for long-term strategic projects",
  },
  {
    src: "/images/services/sap-implementation.jpg",
    alt: "Fixed Price Projects",
    title: "Fixed Price Delivery",
    description: "Project-based model with defined scope and timeline",
  },
  {
    src: "/images/services/cloud-migration.jpg",
    alt: "Time and Material",
    title: "Flexible Engagement",
    description: "Adaptive model for evolving requirements and innovation",
  },
  {
    src: "/images/team/global-team-meeting.jpg",
    alt: "Client Collaboration",
    title: "Strategic Partnership",
    description: "Collaborative approach with seamless team integration",
  },
]

const collaborationImages = [
  {
    src: "/images/team/development-team-collaboration.jpg",
    alt: "Team Integration",
    title: "Seamless Integration",
    description: "Becoming part of your extended team",
  },
  {
    src: "/images/team/client-consultation-meeting.jpg",
    alt: "Consultation Process",
    title: "Strategic Consultation",
    description: "Expert guidance for specific business needs",
  },
  {
    src: "/images/team/innovation-lab-research.jpg",
    alt: "Agile Development",
    title: "Agile Methodologies",
    description: "Accelerated software development lifecycle",
  },
]

export default function EngagementModelPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 to-teal-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/team/development-team-collaboration.jpg"
            alt="Engagement Models"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Engagement Models</h1>
            <p className="text-xl lg:text-2xl text-emerald-200 mb-8">
              Flexible and scalable engagement models for diverse client requirements
            </p>
            <p className="text-lg text-emerald-100 max-w-3xl mx-auto">
              We become part of your team, providing consultation for specific needs and aligning the most appropriate
              engagement model with your requirements to accelerate your software development lifecycle.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Partnership Approach</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our primary focus is on providing flexible and scalable engagement models that cater to diverse client
                requirements. We don't just deliver services; we become an integral part of your team, offering
                strategic consultation and technical expertise tailored to your specific needs.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Each engagement model is carefully designed to align with your business objectives, accelerate your
                software development lifecycle, and contribute directly to your net profit while ensuring optimal
                resource utilization.
              </p>
            </div>
            <div>
              <ImageSlider images={engagementImages} className="h-96" autoPlay={true} interval={4000} />
            </div>
          </div>

          {/* Business Impact */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Accelerated Development</h3>
                <p className="text-gray-600 text-sm">Faster software development lifecycle with proven methodologies</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Profit Contribution</h3>
                <p className="text-gray-600 text-sm">Direct contribution to net profit through optimized processes</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Perfect Alignment</h3>
                <p className="text-gray-600 text-sm">Models aligned with your specific business requirements</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Users className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Team Integration</h3>
                <p className="text-gray-600 text-sm">Seamless integration with your existing teams and processes</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Engagement Models</h2>
              <p className="text-xl text-gray-600">
                Choose the model that best fits your project requirements and goals
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-500">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Users className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Dedicated Team</h3>
                    <p className="text-gray-600">Extended team model for long-term projects</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Dedicated resources exclusively for your project</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Full control over team composition and scaling</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Direct communication and collaboration</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Flexible engagement duration</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                    <p className="text-gray-600 text-sm">
                      Long-term projects, product development, ongoing maintenance
                    </p>
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Link href="/contact" className="flex items-center">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-green-500">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Target className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Fixed Price</h3>
                    <p className="text-gray-600">Project-based model with defined scope and timeline</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Fixed budget and timeline commitment</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Well-defined project scope and deliverables</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Risk mitigation through detailed planning</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Milestone-based delivery and payments</span>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                    <p className="text-gray-600 text-sm">
                      Well-defined projects, specific deliverables, budget constraints
                    </p>
                  </div>

                  <Button className="w-full bg-green-600 hover:bg-green-700">
                    <Link href="/contact" className="flex items-center">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-purple-500">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Zap className="h-8 w-8 text-purple-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Time & Material</h3>
                    <p className="text-gray-600">Flexible model for evolving requirements</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Pay for actual time and resources used</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Flexibility to change scope and requirements</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Transparent billing and reporting</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">Quick project initiation</span>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                    <p className="text-gray-600 text-sm">Evolving requirements, R&D projects, consulting services</p>
                  </div>

                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    <Link href="/contact" className="flex items-center">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Customization Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Customized Engagement Solutions</h2>
            <p className="text-xl text-gray-600 mb-12">
              Standard models available for customer selection with customization options
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Users className="h-6 w-6 text-emerald-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">Hybrid Models</h3>
                  <p className="text-gray-600">
                    Combination of different engagement models tailored to specific project phases and requirements.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Target className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">Outcome-Based</h3>
                  <p className="text-gray-600">
                    Performance-based engagements with payments tied to specific business outcomes and KPIs.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8 text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                    <Zap className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold mb-4">Retainer Model</h3>
                  <p className="text-gray-600">
                    Ongoing support and consultation services with guaranteed resource availability and priority
                    support.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Select the Right Model</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our consultative approach ensures optimal alignment with your requirements through a systematic
                  evaluation process that considers all aspects of your project and business objectives.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Requirements Analysis</h3>
                      <p className="text-gray-600">Understand project scope, timeline, and business objectives</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Risk Assessment</h3>
                      <p className="text-gray-600">Evaluate project risks and complexity factors</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Model Recommendation</h3>
                      <p className="text-gray-600">Propose optimal engagement model with justification</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Customization</h3>
                      <p className="text-gray-600">Tailor the model to specific client needs and preferences</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ImageSlider images={collaborationImages} className="h-80" autoPlay={true} interval={3500} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Find Your Perfect Engagement Model</h2>
            <p className="text-xl text-emerald-200 mb-8">
              Let our experts help you choose the engagement model that best aligns with your project requirements and
              business goals
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-emerald-900 hover:bg-emerald-50">
                <Link href="/contact" className="flex items-center">
                  Discuss Your Requirements <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-emerald-900"
              >
                <Link href="/about/this-is-us">Learn About Our Company</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
