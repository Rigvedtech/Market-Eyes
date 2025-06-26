"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase, Users, TrendingUp, Clock } from "lucide-react"
import ImageSlider from "@/components/image-slider"
import AnimatedSection from "@/components/animated-section"
import { motion } from "framer-motion"

const companyImages = [
  {
    src: "/images/about/company-headquarters.jpg",
              alt: "Market Eyes Office Mumbai",
    title: "Mumbai Headquarters",
    description: "Our state-of-the-art corporate headquarters in Navi Mumbai",
  },
  {
    src: "/images/about/team-culture.jpg",
    alt: "Team Collaboration",
    title: "Collaborative Workspace",
    description: "Modern work environments fostering innovation and teamwork",
  },
  {
    src: "/images/about/team-culture.jpg",
    alt: "Client Meeting",
    title: "Client Partnerships",
    description: "Building lasting relationships with Fortune 500 companies",
  },
  {
    src: "/images/about/company-headquarters.jpg",
    alt: "Technology Innovation",
    title: "Innovation Labs",
    description: "Cutting-edge technology research and development centers",
  },
]

const achievementImages = [
  {
    src: "/images/about/team-culture.jpg",
    alt: "Global Team",
    title: "Global Team Excellence",
    description: "Diverse talent pool across multiple countries",
  },
  {
    src: "/images/about/company-headquarters.jpg",
    alt: "Innovation Hub",
    title: "Innovation Hub",
    description: "State-of-the-art development centers",
  },
  {
    src: "/images/about/awards-certifications.jpg",
    alt: "Industry Awards",
    title: "Industry Recognition",
    description: "Multiple awards for excellence in IT services",
  }
]

export default function ThisIsUsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section with Background Image */}
      <section className="relative bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20 overflow-hidden">
        <motion.div 
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src="/images/about/team-culture.jpg"
            alt="Market Eyes Team"
            className="w-full h-full object-cover opacity-20"
          />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="slideFromTop" className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">THIS IS US!</h1>
            <p className="text-xl lg:text-2xl text-blue-200">Your trusted technology partner since 2008</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Content with Image Slider */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <AnimatedSection animation="slideFromLeft">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="prose prose-lg max-w-none">
                <p className="text-xl text-gray-700 leading-relaxed mb-8">
                  Market Eyes is a <strong>Radpidly Emerging Company currently</strong> engaged in delivering
                  best IT Services across Technology spectrum with key focus on{" "}
                  <strong>IT Infrastructure, Enterprise Application and Digital Transformation</strong>.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  Established in Mumbai since 2008, we have built a reputation for excellence in serving Fortune Global
                  500 companies with a remarkable 96% client retention rate. Our success is built on strong domain
                  expertise across industry verticals and business functions.
                </p>

                <p className="text-lg text-gray-600 leading-relaxed">
                  What sets us apart are our high service standards, outstanding results, and exceptional turn-around
                  time. We don't just deliver solutions   we deliver transformation.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection animation="slideFromLeft" delay={0.2}>
              <ImageSlider images={companyImages} className="h-96" autoPlay={true} interval={4000} />
            </AnimatedSection>
          </div>

          {/* Key Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <AnimatedSection animation="scaleUp" delay={0}>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <motion.div 
                    className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Briefcase className="h-8 w-8 text-blue-600" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 mb-2">500+ Projects</h3>
                  <p className="text-sm text-gray-600">Successfully delivered</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="scaleUp" delay={0.2}>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <motion.div 
                    className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Users className="h-8 w-8 text-green-600" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 mb-2">96% Retention</h3>
                  <p className="text-sm text-gray-600">Client satisfaction rate</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="scaleUp" delay={0.4}>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <motion.div 
                    className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <TrendingUp className="h-8 w-8 text-purple-600" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 mb-2">Fortune 500</h3>
                  <p className="text-sm text-gray-600">Global enterprise clients</p>
                </CardContent>
              </Card>
            </AnimatedSection>

            <AnimatedSection animation="scaleUp" delay={0.6}>
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <motion.div 
                    className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Clock className="h-8 w-8 text-orange-600" />
                  </motion.div>
                  <h3 className="font-semibold text-gray-900 mb-2">Since 2008</h3>
                  <p className="text-sm text-gray-600">15+ years of excellence</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Achievements Section with Images */}
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <AnimatedSection animation="slideFromLeft">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Achievements</h2>
                <div className="grid md:grid-cols-3 gap-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">High Service Standards</h3>
                    <p className="text-gray-600">
                      We maintain the highest quality standards in every project we undertake.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">Outstanding Results</h3>
                    <p className="text-gray-600">
                      Our track record speaks for itself with consistent delivery of exceptional outcomes.
                    </p>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                  >
                    <h3 className="font-semibold text-gray-900 mb-2">Exceptional Turn-around Time</h3>
                    <p className="text-gray-600">
                      We deliver solutions faster without compromising on quality or reliability.
                    </p>
                  </motion.div>
                </div>
              </AnimatedSection>
              <AnimatedSection animation="slideFromLeft" delay={0.2}>
                <ImageSlider images={achievementImages} className="h-64" autoPlay={true} interval={3000} />
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
