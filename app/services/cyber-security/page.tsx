import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Shield, Lock, Eye, AlertTriangle, Network, FileCheck } from "lucide-react"
import ImageSlider from "@/components/image-slider"

const securityImages = [
  {
    src: "/images/technology/cybersecurity-operations.jpg",
    alt: "Security Operations Center",
    title: "24/7 Security Monitoring",
    description: "Round-the-clock threat detection and response",
  },
  {
    src: "/images/technology/cybersecurity-operations.jpg",
    alt: "Threat Assessment",
    title: "Comprehensive Threat Assessment",
    description: "Identifying vulnerabilities and potential attack vectors",
  },
  {
    src: "/images/services/data-analytics.jpg",
    alt: "Data Protection",
    title: "Advanced Data Protection",
    description: "Encryption and data loss prevention solutions",
  },
  {
    src: "/images/technology/modern-data-center.jpg",
    alt: "Network Security",
    title: "Network Security",
    description: "Firewall management and intrusion detection systems",
  },
]

const securityExpertiseImages = [
  {
    src: "/images/cybersecurity/critical-infrastructure-protection.jpg",
    alt: "Critical Infrastructure Protection",
    title: "Critical Infrastructure",
    description: "Protecting essential systems and services",
  },
  {
    src: "/images/technology/cybersecurity-operations.jpg",
    alt: "Enterprise Security Architecture",
    title: "Security Architecture",
    description: "Zero-trust implementation and access management",
  },
  {
    src: "/images/cybersecurity/threat-intelligence.jpg",
    alt: "Threat Intelligence",
    title: "Threat Intelligence",
    description: "Advanced threat detection and analytics",
  },
]

export default function CyberSecurityPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-900 to-orange-700 text-white py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/cybersecurity/cybersecurity-hero-background.jpg"
            alt="Cybersecurity Operations Center"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Cyber Security</h1>
            <p className="text-xl lg:text-2xl text-red-200 mb-8">
              Comprehensive protection beyond traditional boundaries
            </p>
            <p className="text-lg text-red-100 max-w-3xl mx-auto">
              Our cybersecurity expertise extends beyond Software as a Service (SaaS) protection to comprehensive
              security solutions for shared-service organizations and critical infrastructure.
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Advanced Cybersecurity Solutions</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                With deep understanding of critical infrastructure, computer security, and security policy, we serve as
                your dedicated cybersecurity partner or augment your existing IT capabilities with specialized
                expertise.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our approach provides unbiased insights and resolves complex security challenges while enhancing your
                security controls through actionable cyber threat data and intelligence.
              </p>
            </div>
            <div>
              <ImageSlider images={securityImages} className="h-96" autoPlay={true} interval={4000} />
            </div>
          </div>

          {/* Core Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Threat Assessment</h3>
                <p className="text-gray-600">
                  Comprehensive security assessments identifying vulnerabilities and potential attack vectors.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Security Monitoring</h3>
                <p className="text-gray-600">
                  24/7 security monitoring and incident response with advanced threat detection capabilities.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Lock className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Data Protection</h3>
                <p className="text-gray-600">
                  Advanced encryption, data loss prevention, and privacy protection solutions.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <Network className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Network Security</h3>
                <p className="text-gray-600">
                  Firewall management, intrusion detection, and network segmentation strategies.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <FileCheck className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Compliance Management</h3>
                <p className="text-gray-600">
                  Regulatory compliance support for GDPR, HIPAA, SOX, and other industry standards.
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                  <AlertTriangle className="h-6 w-6 text-yellow-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">Incident Response</h3>
                <p className="text-gray-600">
                  Rapid incident response and forensic analysis to minimize security breach impact.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Security Expertise with Slider */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <ImageSlider images={securityExpertiseImages} className="h-80" autoPlay={true} interval={3500} />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Security Expertise</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Our team brings deep expertise across critical security domains, from critical infrastructure protection
                to cloud security and threat intelligence.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                We combine technical knowledge with strategic insight to deliver security solutions that not only
                protect your assets but also enable your business to operate with confidence in an increasingly complex
                threat landscape.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Approach */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Security Approach</h2>
            <p className="text-xl text-gray-600 mb-12">Comprehensive methodology for enhanced security posture</p>

            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-red-600">1</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Assess</h3>
                <p className="text-gray-600">Comprehensive security assessment and risk analysis</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-orange-600">2</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Design</h3>
                <p className="text-gray-600">Custom security architecture and control design</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-blue-600">3</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Implement</h3>
                <p className="text-gray-600">Deploy security solutions and controls</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-green-600">4</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Monitor</h3>
                <p className="text-gray-600">Continuous monitoring and improvement</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-red-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Why Choose Our Cybersecurity Services</h2>
            <p className="text-xl text-red-200 mb-12">
              Unbiased insights and actionable intelligence for enhanced security
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Proactive Protection</h3>
                <p className="text-red-200">Advanced threat detection and prevention capabilities</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">24/7 Monitoring</h3>
                <p className="text-red-200">Round-the-clock security operations center</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-red-800 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Rapid Response</h3>
                <p className="text-red-200">Quick incident response and threat mitigation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Secure Your Digital Assets Today</h2>
            <p className="text-xl text-gray-600 mb-8">
              Partner with cybersecurity experts who understand your unique challenges and requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                <Link href="/contact">Get Security Assessment</Link>
              </Button>
              <Button size="lg" variant="outline">
                <Link href="/services/it-infrastructure">Explore IT Infrastructure</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
