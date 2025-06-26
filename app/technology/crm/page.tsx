import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Users, TrendingUp, Target, Zap, ArrowRight } from "lucide-react"
import ImageSlider from "@/components/image-slider"

const crmImages = [
  {
    src: "/images/services/data-analytics.jpg",
    alt: "CRM Dashboard",
    title: "Customer Relationship Management",
    description: "Comprehensive customer data and interaction management",
  },
  {
    src: "/images/team/development-team-collaboration.jpg",
    alt: "Sales Automation",
    title: "Sales Automation",
    description: "Streamlined sales processes and pipeline management",
  },
  {
    src: "/images/team/client-consultation-meeting.jpg",
    alt: "Marketing Automation",
    title: "Marketing Automation",
    description: "Automated marketing campaigns and lead nurturing",
  },
  {
    src: "/images/technology/ai-analytics-dashboard.jpg",
    alt: "Customer Analytics",
    title: "Customer Analytics",
    description: "Advanced insights into customer behavior and preferences",
  },
]

const featureImages = [
  {
    src: "/images/team/global-team-meeting.jpg",
    alt: "Lead Management",
    title: "Lead Management",
    description: "Comprehensive lead tracking and conversion",
  },
  {
    src: "/images/team/client-consultation-meeting.jpg",
    alt: "Customer Service",
    title: "Customer Service",
    description: "Enhanced customer support and satisfaction",
  },
  {
    src: "/images/services/data-analytics.jpg",
    alt: "Sales Pipeline",
    title: "Sales Pipeline",
    description: "Visual sales pipeline and opportunity management",
  },
]

export default function CRMPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 to-indigo-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/team/client-consultation-meeting.jpg"
            alt="CRM Solutions"
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Customer Relationship Management</h1>
            <p className="text-xl lg:text-2xl text-purple-200 mb-8">Sales and Marketing Automation Excellence</p>
            <p className="text-lg text-purple-100 max-w-3xl mx-auto">
              Transform your customer relationships with comprehensive CRM solutions that drive sales growth, enhance
              customer satisfaction, and automate marketing processes.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive Customer Management</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our Customer Relationship Management solutions provide a unified platform for managing all customer
                interactions, from initial lead generation to long-term customer retention. We help organizations build
                stronger relationships, increase sales efficiency, and deliver exceptional customer experiences.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                With advanced sales and marketing automation capabilities, our CRM systems streamline processes, improve
                team collaboration, and provide actionable insights that drive business growth and customer
                satisfaction.
              </p>
            </div>
            <div>
              <ImageSlider images={crmImages} className="h-96" autoPlay={true} interval={4000} />
            </div>
          </div>

          {/* Key Benefits */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Users className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">360° Customer View</h3>
                <p className="text-gray-600 text-sm">
                  Complete customer profile with interaction history and preferences
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Sales Growth</h3>
                <p className="text-gray-600 text-sm">
                  Increased sales productivity and revenue through automated processes
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Targeted Marketing</h3>
                <p className="text-gray-600 text-sm">
                  Personalized marketing campaigns based on customer data and behavior
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow text-center">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-6">
                  <Zap className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold mb-4">Process Automation</h3>
                <p className="text-gray-600 text-sm">
                  Automated workflows reducing manual tasks and improving efficiency
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CRM Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Comprehensive CRM Features</h2>
              <p className="text-xl text-gray-600">Complete customer lifecycle management capabilities</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Users className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Contact Management</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Centralized contact database</li>
                    <li>• Contact segmentation and categorization</li>
                    <li>• Interaction history tracking</li>
                    <li>• Social media integration</li>
                    <li>• Duplicate contact management</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Sales Management</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Sales pipeline visualization</li>
                    <li>• Opportunity tracking</li>
                    <li>• Quote and proposal generation</li>
                    <li>• Sales forecasting</li>
                    <li>• Performance analytics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Marketing Automation</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Email marketing campaigns</li>
                    <li>• Lead scoring and nurturing</li>
                    <li>• Campaign performance tracking</li>
                    <li>• Landing page creation</li>
                    <li>• Marketing ROI analysis</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                    <Zap className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Customer Service</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Ticket management system</li>
                    <li>• Knowledge base integration</li>
                    <li>• Customer satisfaction surveys</li>
                    <li>• Service level agreements</li>
                    <li>• Multi-channel support</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Analytics & Reporting</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• Real-time dashboards</li>
                    <li>• Custom report generation</li>
                    <li>• Sales performance metrics</li>
                    <li>• Customer behavior analysis</li>
                    <li>• Predictive analytics</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Integration Capabilities</h3>
                  <ul className="space-y-2 text-gray-600 text-sm">
                    <li>• ERP system integration</li>
                    <li>• Email platform connectivity</li>
                    <li>• Social media integration</li>
                    <li>• Third-party app connections</li>
                    <li>• API-based integrations</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">CRM Implementation Process</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Our proven CRM implementation methodology ensures successful deployment with high user adoption and
                  measurable business results.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Requirements Analysis</h3>
                      <p className="text-gray-600">Understanding business processes and CRM requirements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">System Configuration</h3>
                      <p className="text-gray-600">Custom CRM setup aligned with business workflows</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Data Migration</h3>
                      <p className="text-gray-600">Secure transfer of existing customer data and records</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      4
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Training & Launch</h3>
                      <p className="text-gray-600">User training and system launch with ongoing support</p>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <ImageSlider images={featureImages} className="h-80" autoPlay={true} interval={3500} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Enhance Customer Relationships with CRM</h2>
            <p className="text-xl text-purple-200 mb-8">
              Transform your sales and marketing processes with our comprehensive CRM solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                <Link href="/contact" className="flex items-center">
                  Start CRM Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-900"
              >
                <Link href="/services/application-development">Explore Custom Development</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
