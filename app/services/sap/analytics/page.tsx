import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart3, PieChart, TrendingUp, Eye, Target, Zap } from "lucide-react"
import ImageSlider from "@/components/image-slider"

const analyticsImages = [
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "SAP Analytics Cloud",
    title: "SAP Analytics Cloud",
    description: "All-in-one cloud solution for business intelligence",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "SAP BusinessObjects",
    title: "SAP BusinessObjects",
    description: "Enterprise reporting and business intelligence",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Embedded Analytics",
    title: "Embedded Analytics",
    description: "Real-time analytics within SAP S/4HANA",
  },
  {
    src: "/placeholder.svg?height=400&width=600",
    alt: "Real-time Dashboards",
    title: "Interactive Dashboards",
    description: "Real-time visibility into key business metrics",
  },
]

const useCaseImages = [
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Financial Analytics",
    title: "Financial Analytics",
    description: "P&L analysis and variance reporting",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Sales Analytics",
    title: "Sales Analytics",
    description: "Performance tracking and forecasting",
  },
  {
    src: "/placeholder.svg?height=300&width=400",
    alt: "Operations Analytics",
    title: "Operations Analytics",
    description: "Supply chain visibility and optimization",
  },
]

export default function SAPAnalyticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-900 to-teal-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">SAP Analytics</h1>
            <p className="text-xl lg:text-2xl text-green-200 mb-8">
              Business intelligence solutions that drive decisions
            </p>
            <p className="text-lg text-green-100 max-w-3xl mx-auto">
              Transform your data into actionable insights with comprehensive SAP reporting and interactive dashboards
              that empower data-driven decision making across your organization.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Comprehensive SAP Analytics Solutions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our SAP Analytics services are designed to unleash the complete potential of your data, converting raw
                information into actionable insights that drive strategic decision-making and business growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Through strategic collaborations with industry pioneers, we position ourselves at the vanguard of
                innovation, delivering comprehensive analytics solutions that transform how organizations understand and
                leverage their data assets.
              </p>
            </div>
            <div>
              <ImageSlider images={analyticsImages} className="h-96" autoPlay={true} interval={4000} />
            </div>
          </div>

          {/* Analytics Solutions */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">SAP Analytics Cloud</h3>
                <p className="text-gray-600">
                  All-in-one cloud solution for business intelligence, planning, and predictive analytics.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <PieChart className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">SAP BusinessObjects</h3>
                <p className="text-gray-600">
                  Enterprise reporting and business intelligence platform for comprehensive data analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Embedded Analytics</h3>
                <p className="text-gray-600">
                  Real-time analytics embedded directly within SAP S/4HANA for contextual insights.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Real-time Dashboards</h3>
                <p className="text-gray-600">
                  Interactive dashboards providing real-time visibility into key business metrics and KPIs.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
                <p className="text-gray-600">
                  Advanced analytics and machine learning capabilities for forecasting and trend analysis.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Self-Service Analytics</h3>
                <p className="text-gray-600">
                  Empower business users with self-service capabilities for ad-hoc analysis and reporting.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">SAP Reporting & Dashboard Features</h2>
              <p className="text-xl text-gray-600">Comprehensive analytics capabilities for modern businesses</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Advanced Reporting</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Pixel-perfect financial and operational reports</li>
                    <li>• Automated report generation and distribution</li>
                    <li>• Multi-dimensional analysis and drill-down capabilities</li>
                    <li>• Mobile-responsive report design</li>
                    <li>• Integration with Microsoft Office applications</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Interactive Dashboards</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Drag-and-drop dashboard creation</li>
                    <li>• Real-time data visualization</li>
                    <li>• Customizable KPI monitoring</li>
                    <li>• Role-based dashboard personalization</li>
                    <li>• Cross-platform accessibility</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Data Integration</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Seamless SAP and non-SAP data integration</li>
                    <li>• Real-time and batch data processing</li>
                    <li>• Data quality and governance features</li>
                    <li>• Cloud and on-premise connectivity</li>
                    <li>• API-based data access</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Collaboration & Sharing</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Collaborative analytics and commenting</li>
                    <li>• Secure report and dashboard sharing</li>
                    <li>• Version control and audit trails</li>
                    <li>• Embedded analytics in business applications</li>
                    <li>• Social collaboration features</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Business Benefits */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Business Intelligence Benefits</h2>
            <p className="text-xl text-gray-600 mb-12">Drive better decisions with comprehensive SAP analytics</p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Improved Decision Making</h3>
                <p className="text-gray-600">Make data-driven decisions with real-time insights and analytics</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Faster Time to Insight</h3>
                <p className="text-gray-600">Reduce time from data to insight with automated analytics</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Enhanced Performance</h3>
                <p className="text-gray-600">Monitor and optimize business performance with KPI tracking</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Use Cases with Slider */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageSlider images={useCaseImages} className="h-80" autoPlay={true} interval={3500} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Intelligence Applications</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our SAP Analytics solutions address real business challenges across various domains, from financial
                performance to sales effectiveness and operational efficiency.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By applying advanced analytical capabilities to your specific business context, we help you extract
                maximum value from your SAP data and drive informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-green-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">SAP Analytics Use Cases</h2>
              <p className="text-xl text-green-200">Real-world applications across business functions</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-green-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Financial Analytics</h3>
                <ul className="space-y-2 text-green-200 text-sm">
                  <li>• P&L analysis and variance reporting</li>
                  <li>• Cash flow forecasting</li>
                  <li>• Budget vs. actual analysis</li>
                  <li>• Cost center performance</li>
                </ul>
              </div>

              <div className="bg-green-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Sales Analytics</h3>
                <ul className="space-y-2 text-green-200 text-sm">
                  <li>• Sales performance tracking</li>
                  <li>• Customer profitability analysis</li>
                  <li>• Territory and channel analysis</li>
                  <li>• Sales forecasting</li>
                </ul>
              </div>

              <div className="bg-green-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Operations Analytics</h3>
                <ul className="space-y-2 text-green-200 text-sm">
                  <li>• Supply chain visibility</li>
                  <li>• Inventory optimization</li>
                  <li>• Production efficiency</li>
                  <li>• Quality metrics tracking</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Your Data into Insights</h2>
            <p className="text-xl text-gray-600 mb-8">
              Unlock the power of your SAP data with comprehensive analytics and reporting solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700">
                <Link href="/contact">Get Analytics Demo</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/services/sap/managed-services">Explore Managed Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
