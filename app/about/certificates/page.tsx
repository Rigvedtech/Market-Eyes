import Navigation from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Shield, CheckCircle, Star, Globe, Users } from "lucide-react"

const certifications = [
  {
    name: "Microsoft Gold Partner",
    category: "Technology Partnership",
    description: "Highest level of Microsoft partnership demonstrating expertise in Microsoft technologies",
    issuer: "Microsoft Corporation",
    validUntil: "2024",
    icon: Star,
    color: "bg-orange-100 text-orange-600",
    benefits: [
      "Access to latest Microsoft technologies",
      "Priority technical support and resources",
      "Co-marketing opportunities",
      "Advanced training and certifications",
    ],
  },
  {
    name: "Global Delivery Excellence",
    category: "Service Quality",
    description: "Recognition for exceptional service delivery and client satisfaction",
    issuer: "Market Eyes",
    validUntil: "Ongoing",
    icon: Globe,
    color: "bg-blue-100 text-blue-600",
    benefits: [
      "24/7 support and assistance",
      "Rapid response times",
      "Dedicated project teams",
      "Regular quality assessments",
    ],
  },
  {
    name: "500+ Projects Delivered",
    category: "Achievement",
    description: "Successfully completed over 500 projects across various industries",
    issuer: "Market Eyes",
    validUntil: "Ongoing",
    icon: Users,
    color: "bg-green-100 text-green-600",
    benefits: [
      "Diverse industry experience",
      "Proven track record",
      "Scalable solutions",
      "Client success stories",
    ],
  }
]

const awards = [
  {
    title: "Best IT Services Company 2023",
    organization: "India Business Excellence Awards",
    year: "2023",
  },
  {
    title: "Digital Transformation Leader",
    organization: "CIO Choice Awards",
    year: "2023",
  },
  {
    title: "Top SAP Implementation Partner",
    organization: "SAP India User Group",
    year: "2022",
  },
  {
    title: "Excellence in Cloud Services",
    organization: "Cloud Computing Excellence Awards",
    year: "2022",
  },
]

export default function CertificatesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">Certificates & Awards</h1>
            <p className="text-xl lg:text-2xl text-blue-200">Recognition of our commitment to excellence and quality</p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Certifications</h2>
              <p className="text-xl text-gray-600">
                Our certifications demonstrate our commitment to maintaining the highest standards of quality, security,
                and excellence.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {certifications.map((cert, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${cert.color}`}>
                        <cert.icon className="h-6 w-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-xl font-bold text-gray-900">{cert.name}</h3>
                          <Badge variant="secondary">{cert.category}</Badge>
                        </div>
                        <p className="text-gray-600 mb-2">{cert.description}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <span>Issued by: {cert.issuer}</span>
                          <span>Valid until: {cert.validUntil}</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {cert.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industry Awards & Recognition</h2>
              <p className="text-xl text-gray-600">
                Recognition from industry leaders and organizations for our exceptional service delivery and innovation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {awards.map((award, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center">
                        <Award className="h-6 w-6 text-yellow-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{award.title}</h3>
                        <p className="text-gray-600">{award.organization}</p>
                        <p className="text-sm text-gray-500">{award.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Our Commitment to Excellence</h2>
            <p className="text-xl text-blue-200 mb-8">
              These certifications and awards represent more than just recognition – they embody our unwavering
              commitment to delivering exceptional value to our clients.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div>
                <div className="text-3xl font-bold mb-2">CMMI 5</div>
                <p className="text-blue-200">Highest Process Maturity</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">ISO 27001</div>
                <p className="text-blue-200">Information Security Excellence</p>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">96%</div>
                <p className="text-blue-200">Client Retention Rate</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
