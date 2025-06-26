import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { BarChart3, Database, Brain, TrendingUp, Zap, Target } from "lucide-react"
import ImageSlider from "@/components/image-slider"

const dataImages = [
  {
    src: "/images/services/data-analytics.jpg",
    alt: "Data Analytics Dashboard",
    title: "Advanced Analytics",
    description: "Converting raw data into actionable insights",
  },
  {
    src: "/images/technology/ai-analytics-dashboard.jpg",
    alt: "Data Engineering Pipeline",
    title: "Data Engineering",
    description: "Building robust data pipelines and ETL processes",
  },
  {
    src: "/images/technology/ai-analytics-dashboard.jpg",
    alt: "AI and Machine Learning",
    title: "AI & Machine Learning",
    description: "Intelligent automation and predictive capabilities",
  },
  {
    src: "/images/services/data-analytics.jpg",
    alt: "Real-time Data Processing",
    title: "Real-time Processing",
    description: "Immediate insights from streaming data sources",
  },
]

const industryImages = [
  {
    src: "/images/data-analytics/financial-services-analytics.jpg",
    alt: "Financial Services Analytics",
    title: "Financial Services",
    description: "Risk analytics and algorithmic trading solutions",
  },
  {
    src: "/images/data-analytics/healthcare-analytics.jpg",
    alt: "Healthcare Analytics",
    title: "Healthcare",
    description: "Clinical data analytics and predictive health modeling",
  },
  {
    src: "/images/data-analytics/E-Commerce.jpg", 
    alt: "Retail Analytics",
    title: "Retail & E-commerce",
    description: "Customer segmentation and demand forecasting",
  },
]

export default function DataTechnologiesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-purple-900 to-indigo-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/data-analytics/data-technologies-hero-background.jpg"
            alt="Data Analytics Technology"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Data Technologies</h1>
            <p className="text-xl lg:text-2xl text-purple-200 mb-8">Unleashing the complete potential of your data</p>
            <p className="text-lg text-purple-100 max-w-3xl mx-auto">
              Transform raw data into actionable insights through our comprehensive data technology solutions, combining
              leading-edge technology with advanced analytical methodologies.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">At the Vanguard of Data Innovation</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                We position ourselves at the vanguard of innovation through strategic collaborations with industry
                pioneers, delivering holistic data solutions that drive business transformation and competitive
                advantage.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our comprehensive approach combines cutting-edge technology with deep domain expertise to unlock the
                true value of your data assets.
              </p>
            </div>
            <div>
              <ImageSlider images={dataImages} className="h-96" autoPlay={true} interval={4000} />
            </div>
          </div>

          {/* Service Categories */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-blue-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Analytics</h3>
                <p className="text-gray-600 mb-6">
                  Convert raw data into actionable insights with advanced analytical methodologies and cutting-edge
                  technology.
                </p>
               {/* <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link h ref="/services/data-technologies/analytics">Learn More</Link>
                </Button> */}
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-green-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Database className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Engineering</h3>
                <p className="text-gray-600 mb-6">
                  Build robust data pipelines, ETL processes, and big data solutions for scalable data management.
                </p>
                {/* <Button className="w-full bg-green-600 hover:bg-green-700">
                  <Link href="/services/data-technologies/engineering">Learn More</Link>
                </Button> */}
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow duration-300 border-t-4 border-t-purple-500">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">AI & Machine Learning</h3>
                <p className="text-gray-600 mb-6">
                  Harness artificial intelligence and machine learning to automate processes and enhance
                  decision-making.
                </p>
                {/* <Button className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/services/data-technologies/ai-ml">Learn More</Link>
                </Button> */}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Transform Your Business with Data</h2>
              <p className="text-xl text-gray-600">
                Unlock competitive advantages through intelligent data utilization
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Improved Decision Making</h3>
                  <p className="text-gray-600">
                    Make data-driven decisions with real-time insights and predictive analytics capabilities.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <Zap className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Operational Efficiency</h3>
                  <p className="text-gray-600">
                    Streamline operations and reduce costs through automated data processing and intelligent workflows.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <Target className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Competitive Advantage</h3>
                  <p className="text-gray-600">
                    Stay ahead of competition with advanced analytics and machine learning-powered insights.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                    <Database className="h-6 w-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Scalable Infrastructure</h3>
                  <p className="text-gray-600">
                    Build robust, scalable data infrastructure that grows with your business needs.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                    <Brain className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Intelligent Automation</h3>
                  <p className="text-gray-600">
                    Automate complex processes using AI and machine learning for enhanced productivity.
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-6">
                    <BarChart3 className="h-6 w-6 text-teal-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Real-time Insights</h3>
                  <p className="text-gray-600">
                    Access real-time analytics and dashboards for immediate business intelligence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications with Slider */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Industry Applications</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our data solutions are tailored for diverse industry verticals, addressing the unique challenges and
                opportunities in each sector.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                By combining industry expertise with advanced data capabilities, we deliver solutions that drive
                tangible business outcomes and competitive advantage.
              </p>
            </div>
            <div>
              <ImageSlider images={industryImages} className="h-80" autoPlay={true} interval={3500} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Unlock Your Data's Potential?</h2>
            <p className="text-xl text-purple-200 mb-8">
              Partner with data technology experts who understand your business challenges and opportunities
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                <Link href="/contact">Start Your Data Journey</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-900"
              >
                <Link href="/services/data-technologies/analytics">Explore Analytics Solutions</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
