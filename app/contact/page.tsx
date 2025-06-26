"use client"

import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import AnimatedSection from "@/components/animated-section"
import { motion } from "framer-motion"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideFromTop" className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl lg:text-2xl text-blue-200">Let's discuss your technology transformation journey</p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="slideFromLeft">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              <form className="space-y-6">
                <motion.div 
                  className="grid md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <Input id="firstName" placeholder="Your first name" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <Input id="lastName" placeholder="Your last name" />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input id="email" type="email" placeholder="your.email@company.com" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <Input id="company" placeholder="Your company name" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input id="phone" placeholder="+91 XXXXX XXXXX" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <Textarea id="message" rows={6} placeholder="Tell us about your project requirements..." />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                >
                  <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </AnimatedSection>

            {/* Office Locations */}
            <div>
              <AnimatedSection animation="slideFromLeft" delay={0.2}>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Offices</h2>

                {/* Mumbai Office */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <Card className="mb-8 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <MapPin className="h-6 w-6 text-blue-600" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">Mumbai – Corporate Headquarter</h3>
                          <p className="text-gray-600 mb-4">
                            Unit No.315, Building No. 02 (A-3), Millennium Business Park, Sector 01, Mahape, Navi Mumbai,
                            Maharashtra 400710
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Phone className="h-4 w-4 text-gray-500" />
                              <span className="text-gray-600">+91 (22) 45405800</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-gray-500" />
                              <span className="text-gray-600">hello@marketeyes.in</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Chennai Office */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <Card className="mb-8 hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <MapPin className="h-6 w-6 text-green-600" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">Chennai Office</h3>
                          <p className="text-gray-600 mb-4">
                            Virtua Hub, 20/7, State Bank Colony, City Link Road, Adambakkam, Chennai 600088
                          </p>
                          <div className="space-y-2">
                            <div className="flex items-center space-x-2">
                              <Mail className="h-4 w-4 text-gray-500" />
                              <span className="text-gray-600">hello@marketeyes.in</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>

                {/* Business Hours */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <Card className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <motion.div 
                          className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Clock className="h-6 w-6 text-purple-600" />
                        </motion.div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-2">Business Hours</h3>
                          <div className="space-y-1 text-gray-600">
                            <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                            <p>Saturday: 9:00 AM - 1:00 PM</p>
                            <p>Sunday: Closed</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slideFromTop" className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Start Your Digital Transformation?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join Fortune 500 companies who trust Market Eyes for their technology needs
            </p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule a Consultation
              </Button>
              <Button size="lg" variant="outline">
                Download Company Brochure
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}
