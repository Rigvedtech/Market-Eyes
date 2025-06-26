"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, TrendingUp, RefreshCw, Target, Zap, Globe, Trophy, Clock, Briefcase } from "lucide-react"
import CounterSection from "@/components/counter-section"
import Navigation from "@/components/navigation"
import HeroSlider from "@/components/hero-slider"
import ImageSlider from "@/components/image-slider"
import { TechnologyImage } from "@/components/optimized-image"
import AnimatedSection from "@/components/animated-section"
import { motion } from "framer-motion"
import { 
  heroImages, 
  technologyImages as techImages, 
  teamImages as teamImagesData 
} from "@/lib/images"
import Image from "next/image"

const heroSlides = [
  {
    id: "digital-transformation",
    title: "Market Eyes",
    subtitle: "MARKET EYES IS REDEFINING TECHNOLOGY GLOBALLY",
    description:
      "Passion, talent and can-do attitude. That's the Market Eyes way!! A Rapidly Emerging Company delivering best IT Services across Technology spectrum.",
    image: heroImages[0].src,
    ctaText: "Get Started",
    ctaLink: "/contact",
    secondaryCtaText: "Learn More",
    secondaryCtaLink: "/about/this-is-us",
  },
  {
    id: "sap-excellence",
    title: "SAP Excellence",
    subtitle: "FASTEST GROWING SAP PARTNER IN INDIA",
    description:
      "Transform your business with comprehensive SAP solutions. From implementation to optimization, we deliver end-to-end SAP services that drive operational excellence.",
    image: heroImages[1].src,
    ctaText: "Explore SAP Services",
    ctaLink: "/services/sap",
    secondaryCtaText: "View Case Studies",
    secondaryCtaLink: "/contact",
  },
  {
    id: "cloud-innovation",
    title: "Cloud Innovation",
    subtitle: "LEADING CLOUD SOLUTIONS PROVIDER",
    description:
      "Accelerate your cloud journey with our expertise in AWS, Azure, and Google Cloud. Infrastructure-on-demand implementation with smooth integration of latest technologies.",
    image: heroImages[2].src,
    ctaText: "Start Cloud Journey",
    ctaLink: "/technology/cloud-solution",
    secondaryCtaText: "Get Assessment",
    secondaryCtaLink: "/contact",
  },
]

// Use professional images from our image library
const technologyImages = techImages
const teamImages = teamImagesData

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Slider */}
      <HeroSlider slides={heroSlides} />

      {/* Counter Section */}
      <CounterSection />

      {/* Technology Philosophy with Image */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideFromLeft">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-8">Our Technology Philosophy</h2>
              <blockquote className="text-2xl lg:text-3xl text-gray-700 italic leading-relaxed mb-8">
                "At Market Eyes, Technology is like the campfire around which we tell our stories."
              </blockquote>
              <p className="text-lg text-gray-600 leading-relaxed">
                We believe technology should bring people together, solve real problems, and create meaningful impact.
                Our approach combines cutting-edge innovation with human-centered design to deliver solutions that truly
                matter.
              </p>
            </AnimatedSection>
            <AnimatedSection animation="slideFromLeft" delay={0.2}>
              <div className="relative">
                <ImageSlider images={technologyImages} className="h-96" autoPlay={true} interval={4000} />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Key Services Preview */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideFromTop" className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions tailored for Fortune 500 companies and enterprise clients
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <AnimatedSection animation="scaleUp" delay={0}>
              <Card className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-8">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img
                      src="/images/services/it-infrastructure.jpg"
                      alt="IT Infrastructure & Cloud Services"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-blue-600/20 group-hover:bg-blue-600/30 transition-colors"></div>
                  </div>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Award className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">IT Infrastructure & Cloud</h3>
                  <p className="text-gray-600 mb-4">
                    Complete IT backbone solutions with strategic planning and technology alignment.
                  </p>
                  <Link href="/services/it-infrastructure" className="text-blue-600 hover:text-blue-800 font-medium">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="scaleUp" delay={0.2}>
              <Card className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-8">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img
                      src="/images/services/sap-implementation.jpg"
                      alt="SAP Services & Implementation"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-green-600/20 group-hover:bg-green-600/30 transition-colors"></div>
                  </div>
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                    <Users className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">SAP Services</h3>
                  <p className="text-gray-600 mb-4">
                    Comprehensive SAP solutions from implementation to managed services.
                  </p>
                  <Link href="/services/sap" className="text-blue-600 hover:text-blue-800 font-medium">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="scaleUp" delay={0.4}>
              <Card className="hover:shadow-lg transition-shadow group">
                <CardContent className="p-8">
                  <div className="relative mb-6 overflow-hidden rounded-lg">
                    <img
                      src="/images/services/data-analytics.jpg"
                      alt="Data Technologies & Analytics"
                      className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-purple-600/20 group-hover:bg-purple-600/30 transition-colors"></div>
                  </div>
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">Data Technologies</h3>
                  <p className="text-gray-600 mb-4">Advanced analytics, AI/ML, and data engineering solutions.</p>
                  <Link href="/services/data-technologies" className="text-blue-600 hover:text-blue-800 font-medium">
                    Learn More →
                  </Link>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Team Excellence Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slideFromLeft" className="order-2 lg:order-1">
              <ImageSlider images={teamImages} className="h-80" autoPlay={true} interval={3500} />
            </AnimatedSection>
            <AnimatedSection animation="slideFromLeft" delay={0.2} className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Excellence Through People</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Our success is built on the expertise and dedication of our team. With over 200 certified professionals,
                we bring together the best minds in technology to deliver exceptional results for our clients.
              </p>
              <motion.div 
                className="grid grid-cols-2 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">200+</div>
                  <p className="text-gray-600">Certified Experts</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">15+</div>
                  <p className="text-gray-600">Years Experience</p>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Why Fortune 500 Companies Choose Us</h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              96% client retention rate with exceptional service standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">24/7 Support</h3>
              <p className="text-blue-200">Round-the-clock assistance</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <RefreshCw className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">96% Retention</h3>
              <p className="text-blue-200">Exceptional client satisfaction</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">500+ Projects</h3>
              <p className="text-blue-200">Successfully delivered</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Since 2008</h3>
              <p className="text-blue-200">15+ years of excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join Fortune 500 companies who trust Market Eyes for their digital transformation journey
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link href="/contact">Contact Us Today</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/engagement-model">View Engagement Models</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
