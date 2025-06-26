import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart3, PieChart, TrendingUp, Target, Zap, Eye } from "lucide-react"
import ImageSlider from "@/components/image-slider"

const analyticsImages = [
  {
    src: "/images/data-analytics/financial-services-analytics.jpg",
    alt: "Descriptive Analytics Dashboard", 
    title: "Descriptive Analytics",
    description: "Understanding historical data patterns and trends",
  },
  {
    src: "/images/data-analytics/healthcare-analytics.jpg",
    alt: "Predictive Analytics Model",
    title: "Predictive Analytics",
    description: "Forecasting future outcomes and trends",
  },
  {
    src: "/images/data-analytics/healthcare-analytics.jpg",
    alt: "Prescriptive Analytics",
    title: "Prescriptive Analytics",
    description: "Actionable recommendations for optimal outcomes",
  },
  {
    src: "/images/data-analytics/data-technologies-hero-background.jpg",
    alt: "Data Visualization",
    title: "Interactive Visualization",
    description: "Transforming complex data into intuitive dashboards",
  },
]

const useCaseImages = [
  {
    src: "/images/data-analytics/lower-slide1.jpg",
    alt: "Customer Analytics",
    title: "Customer Analytics",
    description: "Lifetime value prediction and churn analysis",
  },
  {
    src: "/images/data-analytics/lower-slider3.jpg",
    alt: "Operational Analytics",
    title: "Operational Analytics",
    description: "Process optimization and resource allocation",
  },
  {
    src: "/images/data-analytics/lower-slide2.jpg",
    alt: "Financial Analytics",
    title: "Financial Analytics",
    description: "Risk assessment and revenue forecasting",
  },
]

export default function DataAnalyticsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-cyan-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Data Analytics</h1>
            <p className="text-xl lg:text-2xl text-blue-200 mb-8">Unleash the complete potential of your data</p>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Convert raw data into actionable insights through our holistic approach that combines leading-edge
              technology with advanced analytical methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Analytics Solutions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our data analytics services are designed to unleash the complete potential of your data, converting raw
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

          {/* Analytics Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Descriptive Analytics</h3>
                <p className="text-gray-600">
                  Understand what happened in your business with comprehensive reporting and data visualization.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Predictive Analytics</h3>
                <p className="text-gray-600">
                  Forecast future trends and outcomes using advanced statistical models and machine learning.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Prescriptive Analytics</h3>
                <p className="text-gray-600">
                  Get actionable recommendations on what actions to take for optimal business outcomes.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <PieChart className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Visualization</h3>
                <p className="text-gray-600">
                  Transform complex data into intuitive dashboards and interactive visualizations.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Real-time Analytics</h3>
                <p className="text-gray-600">
                  Monitor and analyze data streams in real-time for immediate insights and responses.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-6 w-6 text-teal-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Business Intelligence</h3>
                <p className="text-gray-600">
                  Comprehensive BI solutions for strategic planning and performance management.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Analytics Methodology</h2>
              <p className="text-xl text-gray-600">
                Proven approach combining technology excellence with analytical expertise
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Leading-Edge Technology</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Advanced statistical modeling platforms</li>
                    <li>• Machine learning and AI frameworks</li>
                    <li>• Cloud-native analytics infrastructure</li>
                    <li>• Big data processing capabilities</li>
                    <li>• Modern visualization tools</li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Advanced Analytical Methodologies</h3>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Statistical analysis and hypothesis testing</li>
                    <li>• Time series forecasting</li>
                    <li>• Clustering and segmentation</li>
                    <li>• Regression and classification models</li>
                    <li>• Optimization algorithms</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Collaborations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Strategic Industry Collaborations</h2>
            <p className="text-xl text-gray-600 mb-12">
              At the vanguard of innovation through partnerships with industry pioneers
            </p>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-blue-600">TECH</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Technology Partners</h3>
                <p className="text-gray-600 text-sm">Leading analytics platform providers</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-green-600">R&D</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Research Institutions</h3>
                <p className="text-gray-600 text-sm">Academic and research collaborations</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-purple-600">CLOUD</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Cloud Providers</h3>
                <p className="text-gray-600 text-sm">Scalable analytics infrastructure</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-sm font-bold text-orange-600">AI</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Innovators</h3>
                <p className="text-gray-600 text-sm">Cutting-edge AI and ML solutions</p>
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
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Real-World Analytics Applications</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our analytics solutions address real business challenges across various domains, from customer insights
                to operational efficiency and financial performance.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By applying advanced analytical techniques to your specific business context, we help you extract
                maximum value from your data assets and drive informed decision-making.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Analytics Use Cases</h2>
              <p className="text-xl text-blue-200">Real-world applications driving business value</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-blue-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Customer Analytics</h3>
                <ul className="space-y-2 text-blue-200 text-sm">
                  <li>• Customer lifetime value prediction</li>
                  <li>• Churn analysis and prevention</li>
                  <li>• Personalization and recommendation engines</li>
                  <li>• Market basket analysis</li>
                </ul>
              </div>

              <div className="bg-blue-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Operational Analytics</h3>
                <ul className="space-y-2 text-blue-200 text-sm">
                  <li>• Process optimization</li>
                  <li>• Resource allocation</li>
                  <li>• Quality control and monitoring</li>
                  <li>• Performance benchmarking</li>
                </ul>
              </div>

              <div className="bg-blue-800 rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Financial Analytics</h3>
                <ul className="space-y-2 text-blue-200 text-sm">
                  <li>• Risk assessment and management</li>
                  <li>• Fraud detection</li>
                  <li>• Revenue forecasting</li>
                  <li>• Cost optimization</li>
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
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Transform Data into Strategic Advantage</h2>
            <p className="text-xl text-gray-600 mb-8">
              Partner with analytics experts who combine cutting-edge technology with proven methodologies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Start Analytics Project</Link>
              </Button>
              {/* <Button size="lg" variant="outline">
                <Link href="/services/data-technologies/engineering">Explore Data Engineering</Link>
              </Button> */}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
