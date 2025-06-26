import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Pen, Mic, Megaphone } from "lucide-react"
import ImageSlider from "@/components/image-slider"
import AnimatedSection from "@/components/animated-section"

const marketingImages = [
  {
    src: "/images/Digital marketing/dm-1.jpg", // Using placeholder image    // Using placeholder image
    alt: "Content Writing",
    title: "Content Writing",
    description: "Professional content creation services",
  },
  {
    src: "/images/Digital marketing/dm-3.jpg", // Using placeholder image
    alt: "Voice Over Services",
    title: "Voice Over Services",
    description: "Professional voice talent for your projects",
  },
  {
    src: "/images/Digital marketing/dm-2.jpg", // Using placeholder image
    alt: "Digital Marketing",
    title: "Digital Marketing",
    description: "Comprehensive digital marketing solutions",
  },
]

export default function DigitalMarketingPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Digital Marketing Services</h1>
            <p className="text-xl lg:text-2xl text-purple-200 mb-8">Elevate your brand with professional content and voice services</p>
            <p className="text-lg text-purple-100 max-w-3xl mx-auto">
              Comprehensive digital marketing solutions including expert content writing and professional voice-over services
              to help your brand stand out in the digital landscape.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Complete Digital Marketing Solutions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our Digital Marketing Services provide end-to-end solutions for your brand's online presence. From compelling
                content creation to professional voice-over services, we help you connect with your audience effectively
                across all digital channels.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need engaging blog posts, website content, marketing materials, or professional voice-overs
                for your multimedia content, our team of experts delivers high-quality results that drive engagement
                and conversions.
              </p>
            </div>
            <div>
              <ImageSlider images={marketingImages} className="h-96" autoPlay={true} interval={4000} />
            </div>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <AnimatedSection animation="fadeIn" delay={0.2}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <Pen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Content Writing</h3>
                  <p className="text-gray-600">
                    Professional content creation for websites, blogs, social media, and marketing materials.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={0.4}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Mic className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Voice-Over Services</h3>
                  <p className="text-gray-600">
                    Professional voice talent for commercials, explainer videos, and multimedia content.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="fadeIn" delay={0.6}>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <Megaphone className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Social Media Marketing</h3>
                  <p className="text-gray-600">
                    Strategic social media management and content creation for brand growth.
                  </p>
                </CardContent>
              </Card>
            </AnimatedSection>


          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Content Creation Process</h2>
              <p className="text-xl text-gray-600">Strategic approach to content development and voice-over production</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-purple-600">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Discovery & Strategy</h3>
                  <p className="text-gray-600 text-sm">
                    Understanding your brand voice and content requirements
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-blue-600">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Content Creation</h3>
                  <p className="text-gray-600 text-sm">
                    Writing and producing engaging content for your audience
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-green-600">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Review & Refinement</h3>
                  <p className="text-gray-600 text-sm">
                    Quality assurance and content optimization
                  </p>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-lg font-bold text-red-600">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">Distribution & Analysis</h3>
                  <p className="text-gray-600 text-sm">
                    Strategic content distribution and performance tracking
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 